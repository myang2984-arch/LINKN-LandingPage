import { ArrowRight } from 'lucide-react';

export function CTA() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-600 to-purple-600">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-white mb-6">
          准备好提升效率了吗？
        </h2>
        
        <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
          加入数千名用户的行列，体验更智能的工作方式。
          立即开始免费试用，无需信用卡。
        </p>

        <div className="flex flex-wrap gap-4 justify-center">
          <button className="bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors flex items-center gap-2">
            立即开始免费试用
            <ArrowRight size={20} />
          </button>
          <button className="border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white/10 transition-colors">
            联系销售团队
          </button>
        </div>

        <p className="text-blue-100 mt-6">
          14 天免费试用 · 无需信用卡 · 随时取消
        </p>
      </div>
    </section>
  );
}
