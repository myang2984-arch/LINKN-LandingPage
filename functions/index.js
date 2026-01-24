const functions = require('firebase-functions');
const admin = require('firebase-admin');
const nodemailer = require('nodemailer');

admin.initializeApp();

// 从Firebase配置中获取SMTP配置
// 使用命令设置:
// firebase functions:config:set smtp.host="smtp.gmail.com" smtp.port="587" smtp.user="your@email.com" smtp.pass="your-app-password"
const smtpConfig = functions.config().smtp;

// TestFlight链接 - 请替换成你的真实链接
const TESTFLIGHT_LINK = 'https://testflight.apple.com/join/C3hHbvvR';

// 创建SMTP传输器
let transporter = null;

function getTransporter() {
  if (!smtpConfig) {
    console.error('SMTP config not found. Please set it using Firebase CLI');
    return null;
  }

  if (!transporter) {
    transporter = nodemailer.createTransport({
      host: smtpConfig.host,
      port: parseInt(smtpConfig.port || '587'),
      secure: smtpConfig.port === '465', // true for 465, false for other ports
      auth: {
        user: smtpConfig.user,
        pass: smtpConfig.pass
      }
    });
  }

  return transporter;
}

/**
 * 当新用户注册TestFlight时自动发送邀请邮件
 * 触发条件：testflight_signups集合中创建新文档
 */
exports.sendTestFlightInvitation = functions.firestore
  .document('testflight_signups/{docId}')
  .onCreate(async (snap, context) => {
    const data = snap.data();
    const email = data.email;
    const source = data.source || 'unknown';
    const docId = context.params.docId;

    console.log(`Processing TestFlight signup: ${email} (source: ${source}, docId: ${docId})`);

    const transporter = getTransporter();

    // 检查SMTP配置是否设置
    if (!transporter) {
      console.error('SMTP not configured. Please run: firebase functions:config:set smtp.host="..." smtp.port="..." smtp.user="..." smtp.pass="..."');
      await snap.ref.update({
        emailSent: false,
        emailError: 'SMTP not configured',
        processedAt: admin.firestore.FieldValue.serverTimestamp()
      });
      return;
    }

    // 构建邮件内容
    const mailOptions = {
      from: {
        name: 'Linkn Team',
        address: smtpConfig.user // 使用SMTP认证的邮箱作为发件人
      },
      to: email,
      subject: "You're in! Download Linkn Beta for iOS 📱",
      html: `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    body {
      margin: 0;
      padding: 0;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Helvetica', 'Arial', sans-serif;
      line-height: 1.6;
      color: #333333;
      background-color: #f5f5f7;
    }
    .email-container {
      max-width: 600px;
      margin: 40px auto;
      background: #ffffff;
      border-radius: 16px;
      overflow: hidden;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.07);
    }
    .header {
      background: linear-gradient(135deg, #7c3aed 0%, #2563eb 100%);
      padding: 48px 32px;
      text-align: center;
    }
    .header h1 {
      margin: 0;
      color: #ffffff;
      font-size: 32px;
      font-weight: 800;
      letter-spacing: -0.5px;
    }
    .header .logo {
      width: 48px;
      height: 48px;
      margin-bottom: 16px;
      display: block;
      margin-left: auto;
      margin-right: auto;
    }
    .content {
      padding: 40px 32px;
    }
    .content p {
      margin: 0 0 16px 0;
      font-size: 16px;
      color: #1f2937;
    }
    .content p.greeting {
      font-size: 18px;
      font-weight: 600;
      margin-bottom: 24px;
    }
    .cta-button {
      display: block;
      width: fit-content;
      margin: 32px auto;
      padding: 16px 48px;
      background: linear-gradient(135deg, #7c3aed 0%, #2563eb 100%);
      color: #ffffff;
      text-decoration: none;
      border-radius: 12px;
      font-weight: 700;
      font-size: 18px;
      text-align: center;
      box-shadow: 0 4px 12px rgba(124, 58, 237, 0.3);
    }
    .badge {
      display: inline-block;
      background: linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%);
      color: #7c2d12;
      padding: 8px 20px;
      border-radius: 24px;
      font-weight: 700;
      font-size: 14px;
      margin: 24px 0;
      box-shadow: 0 2px 8px rgba(251, 191, 36, 0.3);
    }
    .feature-box {
      background: #f9fafb;
      border-left: 4px solid #7c3aed;
      padding: 20px;
      margin: 24px 0;
      border-radius: 8px;
    }
    .feature-box p {
      margin: 0;
      font-size: 15px;
      color: #4b5563;
    }
    .feature-box strong {
      color: #1f2937;
      display: block;
      margin-bottom: 8px;
      font-size: 16px;
    }
    .footer {
      background: #f9fafb;
      padding: 32px;
      text-align: center;
      border-top: 1px solid #e5e7eb;
    }
    .footer p {
      margin: 4px 0;
      font-size: 13px;
      color: #6b7280;
    }
    @media only screen and (max-width: 600px) {
      .email-container {
        margin: 0;
        border-radius: 0;
      }
      .header {
        padding: 32px 24px;
      }
      .header h1 {
        font-size: 24px;
      }
      .content {
        padding: 32px 24px;
      }
      .cta-button {
        width: 100%;
        padding: 14px 24px;
      }
    }
  </style>
</head>
<body>
  <div class="email-container">
    <!-- Header -->
    <div class="header">
      <img src="https://linkn.my/favicon.png" alt="Linkn" class="logo" />
      <h1>Welcome to Linkn Beta!</h1>
    </div>

    <!-- Content -->
    <div class="content">
      <p class="greeting">Hi there,</p>

      <p>The Linkn Beta is ready for you.</p>

      <p>Linkn helps you collect links from any platform and auto-syncs them directly to your Notion — keeping your "Read Later" list organized and actionable.</p>

      <div style="text-align: center;">
        <span class="badge">🎁 LIFETIME 50% OFF - Beta Exclusive!</span>
      </div>

      <a href="${TESTFLIGHT_LINK}" class="cta-button">Download from TestFlight</a>

      <div class="feature-box">
        <strong>🎯 Getting Started (3 steps):</strong>
        <p>
          1. Tap the button above to install Linkn<br>
          2. Connect your Notion account<br>
          3. Start saving links instantly! ⚡
        </p>
      </div>

      <div class="feature-box">
        <strong>💡 A small favor:</strong>
        <p>
          Since this is an early beta, things might not be perfect yet. If you find a bug or have a "what if it did this" idea, please let me know by replying to this email.
        </p>
      </div>

      <p style="margin-top: 32px;">Welcome to the journey!</p>

      <p style="margin-top: 24px; font-weight: 600;">
        Best,<br>
        Miya Yang<br>
        <span style="color: #7c3aed;">Linkn</span>
      </p>
    </div>

    <!-- Footer -->
    <div class="footer">
      <p>You received this email because you signed up for Linkn Beta${source !== 'unknown' ? ` via ${source}` : ''}.</p>
      <p>Have questions? Just reply to this email.</p>
      <p style="margin-top: 16px;">© 2025 Linkn. All rights reserved.</p>
    </div>
  </div>
</body>
</html>
      `,
      // 纯文本备用版本
      text: `
Hi there,

The Linkn Beta is ready for you.

Linkn helps you collect links from any platform and auto-syncs them directly to your Notion — keeping your "Read Later" list organized and actionable.

Get started here:
${TESTFLIGHT_LINK}

🎁 As a beta tester, you'll get LIFETIME 50% OFF on our Pro plan!

Getting Started (3 steps):
1. Click the link above to install Linkn
2. Connect your Notion account
3. Start saving links instantly! ⚡

A small favor:
Since this is an early beta, things might not be perfect yet. If you find a bug or have a "what if it did this" idea, please let me know by replying to this email.

Welcome to the journey!

Best,
Miya Yang
Linkn

---
You received this email because you signed up for Linkn Beta${source !== 'unknown' ? ` via ${source}` : ''}.
Have questions? Just reply to this email.

© 2025 Linkn. All rights reserved.
      `
    };

    try {
      // 发送邮件
      const info = await transporter.sendMail(mailOptions);

      console.log(`✓ TestFlight invitation email sent successfully to ${email}. Message ID: ${info.messageId}`);

      // 更新Firestore记录，标记邮件已发送
      await snap.ref.update({
        emailSent: true,
        emailSentAt: admin.firestore.FieldValue.serverTimestamp(),
        messageId: info.messageId,
        processedAt: admin.firestore.FieldValue.serverTimestamp()
      });

      return {
        success: true,
        email: email,
        source: source,
        messageId: info.messageId
      };

    } catch (error) {
      console.error('✗ Error sending email:', error);

      // 记录错误详情
      await snap.ref.update({
        emailSent: false,
        emailError: error.message || 'Unknown error',
        errorCode: error.code || 'UNKNOWN',
        processedAt: admin.firestore.FieldValue.serverTimestamp()
      });

      // 不抛出错误，避免函数重试
      return {
        success: false,
        error: error.message,
        email: email
      };
    }
  });

/**
 * 手动重发邮件的HTTP函数（可选）
 * 用法: POST https://YOUR_REGION-YOUR_PROJECT.cloudfunctions.net/resendTestFlightInvitation
 * Body: { "email": "user@example.com" }
 */
exports.resendTestFlightInvitation = functions.https.onCall(async (data, context) => {
  const email = data.email;

  if (!email) {
    throw new functions.https.HttpsError('invalid-argument', 'Email is required');
  }

  const transporter = getTransporter();

  if (!transporter) {
    throw new functions.https.HttpsError('failed-precondition', 'SMTP not configured');
  }

  // 查找该邮箱的注册记录
  const snapshot = await admin.firestore()
    .collection('testflight_signups')
    .where('email', '==', email)
    .limit(1)
    .get();

  if (snapshot.empty) {
    throw new functions.https.HttpsError('not-found', 'Email not found in signups');
  }

  const doc = snapshot.docs[0];
  const source = doc.data().source || 'manual-resend';

  // 构建并发送邮件
  const mailOptions = {
    from: {
      name: 'Linkn Team',
      address: smtpConfig.user
    },
    to: email,
    subject: "You're in! Download Linkn Beta for iOS 📱",
    html: `<!-- 使用上面相同的HTML模板 -->`,
    text: `<!-- 使用上面相同的纯文本模板 -->`
  };

  try {
    const info = await transporter.sendMail(mailOptions);

    await doc.ref.update({
      emailResent: true,
      emailResentAt: admin.firestore.FieldValue.serverTimestamp(),
      resentMessageId: info.messageId
    });

    return { success: true, message: `Email resent to ${email}`, messageId: info.messageId };
  } catch (error) {
    console.error('Error resending email:', error);
    throw new functions.https.HttpsError('internal', `Failed to resend email: ${error.message}`);
  }
});
