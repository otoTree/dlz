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
              我们的目标是通过尽可能简单便捷的OEM/ODM生产服务，让您的内衣和泳装系列焕发生机。我们的团队始终以专业态度满足您所有的OEM/ODM需求。作为客户，您将获得以下承诺：</p>
            <ul className="bullet-list mb-6">
              <li>我们认证的工厂能够生产高品质内衣、哺乳文胸、泳装及运动文胸</li>
              <li>可生产常规码至52K/6XL加大码的内衣、哺乳文胸、泳装及运动文胸</li>
              <li>提供高效的产品开发支持与样品制作服务</li>
              <li>工厂团队拥有18年以上常规与加大码内衣产品适配经验及技术支持</li>
              <li>对产品质量设立严格标准，所有产品均经过严苛质检流程，绝不妥协生产品质</li>
              <li>既能承接小批量订单，也能满足大规模采购需求，确保每笔订单质量达标</li>
              <li>拥有汕头地区技术最娴熟、训练有素的员工团队，保证产品品质始终如一</li>
            </ul>

            <p className="mb-6">
              我们致力于通过高品质产品和服务满足您的OEM/ODM需求，为您创造愉悦舒适的合作体验。随时恭候为您服务！请立即通过info@unigrace.cn联系我们</p>

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
