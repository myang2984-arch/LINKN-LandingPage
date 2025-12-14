import { Check } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const benefits = [
  '节省 40% 的工作时间',
  '提高团队协作效率',
  '实时数据同步',
  '自动化重复任务',
  '直观的用户界面',
  '24/7 客户支持',
];

export function Benefits() {
  return (
    <section id="benefits" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative order-2 lg:order-1">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-400 to-blue-400 rounded-2xl blur-3xl opacity-20"></div>
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop"
              alt="Analytics Dashboard"
              className="relative rounded-2xl shadow-2xl w-full"
            />
          </div>

          <div className="space-y-8 order-1 lg:order-2">
            <h2 className="text-gray-900">
              为什么选择我们？
            </h2>
            
            <p className="text-gray-600">
              我们的解决方案经过精心设计，旨在最大化您的生产力并简化您的工作流程。
              以下是我们的用户最喜欢的一些优势：
            </p>

            <ul className="space-y-4">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check size={16} className="text-green-600" />
                  </div>
                  <span className="text-gray-700">{benefit}</span>
                </li>
              ))}
            </ul>

            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg hover:opacity-90 transition-opacity">
              了解更多
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
