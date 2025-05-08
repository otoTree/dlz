import Image from 'next/image';
import Link from 'next/link';

const Capabilities = () => {
  return (
    <section id="capabilities" className="py-12 bg-gray-50">  {/* 减少上下padding */}
      <div className="container-wrapper">
        <h2 className="section-title mb-8">能力&服务</h2>  {/* 添加mb-8控制间距 */}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">  {/* 减少gap */}
          <div>
            <p className="mb-6">
              我们的目标是通过尽可能简化和便捷的OEM/ODM生产，让您的内衣和泳装系列焕发生机。我们的团队随时为您提供专业服务，满足您的任何OEM/ODM需求。以18年专业经验与精益生产，为高端品牌提供零烦恼的针织内衣制造服务。</p>
            <p className="font-bold mb-2">核心优势：</p>
            <ul className="bullet-list mb-6">
              <li>认证资质：通过国际标准认证，专注高端内衣、运动文胸、塑身衣及瑜伽服饰生产。</li>
              <li>研发支持：我们的工厂提供非常有效和高效的产品开发支持和样品制作，短您的上市周期。</li>
              <li>大码专长：深耕常规码与大码内衣领域，成熟版型库与试身体系保障合体度。</li>
              <li>质量铁律：从原料到成品全链路质检，AQL抽检标准高于行业水平。</li>
              <li>弹性产能：自有广东汕头生产基地，2000-50000件订单灵活承接，交期精准。</li>
            </ul>
            
            <p className="font-bold mb-2">为什么选择我们：</p>
            <ul className="bullet-list mb-6">
              <li>汕头地区顶尖技术团队，平均10年经验车工手工细节处理</li>
              <li>垂直化管理工厂，无中间商差价，全程一对一服务</li>
              <li>累计为23个国际品牌提供长期代工服务</li>
            </ul>

            <p className="mb-6">
              <strong>我们的承诺：</strong> 用工匠精神做好每一件内衣，让您的品牌无后顾之忧。</p>

            <Link
              href="#ContactUs"
              className="inline-block bg-[#4baaa4] text-white px-6 py-2.5 rounded-sm hover:bg-opacity-90 transition-colors"
            >
              联系我们
            </Link>
          </div>

          <div className="relative">
            <div className="relative overflow-hidden rounded-md shadow-lg">
              <Image
                src="/images/capabilities.png"
                alt="Unigrace Capabilities"
                width={600}
                height={400}
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Capabilities;
