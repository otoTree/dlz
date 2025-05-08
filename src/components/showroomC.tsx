'use client';
import Head from 'next/head';
import { useState } from 'react';
import Image from 'next/image';

// Define types for product and category
interface Product {
  id: string;
  name: string;
  chineseName: string;
  image: string;
  description: string;
  chineseDescription: string;
}

interface Category {
  id: string;
  name: string;
  chineseName: string;
  subCategories: Product[];
}

// Define the product categories and their data
const productCategories: Category[] = [
  {
    id: 'underwear',
    name: 'Underwear Series',
    chineseName: '内裤系列',
    subCategories: [
      {
        id: 'MN-1308',
        name: 'Classic Underwear',
        chineseName: '经典款内裤',
        image: '/images/product/内裤系列/MN-1308.png',
        description: 'Made with premium fabric, breathable and comfortable, classic design suitable for daily wear.',
        chineseDescription: '采用优质面料，舒适透气，经典款式设计，适合日常穿着。'
      },
      {
        id: 'MN-1310',
        name: 'Lace Trim Underwear',
        chineseName: '蕾丝边内裤',
        image: '/images/product/内裤系列/MN-1310.png',
        description: 'Exquisite lace trim design, elegant and sexy, showcasing feminine charm.',
        chineseDescription: '精致蕾丝花边设计，性感优雅，展现女性魅力。'
      },
      {
        id: 'MN-1311',
        name: 'Sports Underwear',
        chineseName: '运动款内裤',
        image: '/images/product/内裤系列/MN-1311.png',
        description: 'Provides excellent support during sports activities while maintaining dryness and comfort.',
        chineseDescription: '运动时提供良好支撑，保持干爽舒适。'
      },
      {
        id: 'MN-1312',
        name: 'High-Waist Shaping Underwear',
        chineseName: '高腰塑身内裤',
        image: '/images/product/内裤系列/MN-1312.png',
        description: 'High-waist design effectively slims the waist and shapes a beautiful body contour.',
        chineseDescription: '高腰设计，有效收腹塑形，展现完美身材曲线。'
      },
      {
        id: 'MN-1313',
        name: 'Cotton Underwear',
        chineseName: '纯棉内裤',
        image: '/images/product/内裤系列/MN-1313.png',
        description: '100% cotton material, skin-friendly and breathable, protecting intimate health.',
        chineseDescription: '100%纯棉材质，亲肤透气，呵护私密健康。'
      }
    ]
  },
  {
    id: 'seamless',
    name: 'Seamless Underwear Series',
    chineseName: '无缝内衣系列',
    subCategories: [
      {
        id: 'MN-1201',
        name: 'Classic Seamless Underwear',
        chineseName: '经典款无缝内衣',
        image: '/images/product/无缝内衣/image.webp',
        description: 'Made with seamless technology, comfortable fit, invisible under clothing, ideal for daily wear.',
        chineseDescription: '采用无缝工艺，舒适贴合，无痕设计，适合日常穿着。'
      },
      {
        id: 'MN-1202',
        name: 'Lace Trim Seamless Underwear',
        chineseName: '蕾丝边无缝内衣',
        image: '/images/product/无缝内衣/image2.webp',
        description: 'Elegant lace trim design combines with seamless technology, sexy and feminine.',
        chineseDescription: '精致蕾丝花边设计，性感优雅，展现女性魅力。'
      },
      {
        id: 'MN-1203',
        name: 'Sports Seamless Underwear',
        chineseName: '运动款无缝内衣',
        image: '/images/product/无缝内衣/image3.webp',
        description: 'High elasticity fabric provides excellent support during exercise while maintaining comfort and dryness.',
        chineseDescription: '高弹力面料，运动时提供良好支撑，保持干爽舒适。'
      },
      {
        id: 'MN-1204',
        name: 'Shaping Seamless Underwear',
        chineseName: '塑身款无缝内衣',
        image: '/images/product/无缝内衣/image4.webp',
        description: 'Seamless technology combined with shaping design, effectively slimming the abdomen and creating a beautiful silhouette.',
        chineseDescription: '无缝工艺结合塑身设计，有效收腹塑形，展现完美身材曲线。'
      },
      {
        id: 'MN-1205',
        name: 'Cotton Seamless Underwear',
        chineseName: '纯棉无缝内衣',
        image: '/images/product/无缝内衣/image5.webp',
        description: '100% cotton material, skin-friendly and breathable, with seamless technology for maximum comfort.',
        chineseDescription: '100%纯棉材质，亲肤透气，呵护私密健康。'
      }
    ]
  },
  {
    id: 'athletic',
    name: 'Athletic Wear',
    chineseName: '运动服饰',
    subCategories: [
      {
        id: 'MN-1103',
        name: 'Professional Athletic Set',
        chineseName: '专业运动套装',
        image: '/images/product/运动服饰/MN-1103 (2).jpg',
        description: 'High-elasticity fabric with moisture-wicking and quick-drying features, provides excellent support for various intensity workouts.',
        chineseDescription: '高弹性面料，排汗速干，提供良好支撑，适合各种强度运动。'
      },
      {
        id: 'MN-1104',
        name: 'Athletic Shaping Vest',
        chineseName: '运动塑形背心',
        image: '/images/product/运动服饰/MN-1104 (1).jpg',
        description: '3D cutting design that fits the body shape, enhances curves, breathable and comfortable.',
        chineseDescription: '立体裁剪，贴合身形，突显曲线，舒适透气。'
      },
      {
        id: 'MN-1105',
        name: 'Fitness Yoga Pants',
        chineseName: '健身瑜伽裤',
        image: '/images/product/运动服饰/MN-1105 (2).jpg',
        description: 'High-waist design slims the waist and lifts the buttocks, elastic fabric provides comfort without constriction.',
        chineseDescription: '高腰设计，收腹提臀，弹力面料，舒适不勒身。'
      },
      {
        id: 'MN-1107',
        name: 'Athletic Casual Set',
        chineseName: '运动休闲套装',
        image: '/images/product/运动服饰/MN-1107 (2).jpg',
        description: 'Casual fashion design with soft comfortable fabric, suitable for both daily exercise and leisure wear.',
        chineseDescription: '休闲时尚设计，柔软舒适面料，适合日常运动及休闲穿着。'
      },
      {
        id: 'MN-1108',
        name: 'Outdoor Athletic Jacket',
        chineseName: '户外运动夹克',
        image: '/images/product/运动服饰/MN-1108 (2).jpg',
        description: 'Windproof and waterproof, lightweight and warm, suitable for outdoor sports and daily wear.',
        chineseDescription: '防风防水，轻薄保暖，适合户外运动和日常穿着。'
      }
    ]
  },
  {
    id: 'shapewear',
    name: 'Shapewear Series',
    chineseName: '塑身衣系列',
    subCategories: [
      {
        id: 'MN-1401',
        name: 'Classic Shapewear',
        chineseName: '经典塑身衣',
        image: '/images/product/塑身衣/微信图片_20250422181048.png',
        description: 'Made with high-elasticity fabric, effectively sculpts the abdomen and showcases a beautiful body curve, suitable for daily wear.',
        chineseDescription: '采用高弹力面料，有效收腹塑形，展现完美身材曲线，适合日常穿着。'
      },
      {
        id: 'MN-1402',
        name: 'Lace Shapewear',
        chineseName: '蕾丝塑身衣',
        image: '/images/product/塑身衣/微信图片_202504221810482.png',
        description: 'Exquisite lace design, elegant and sexy, provides comfortable support while showcasing feminine charm.',
        chineseDescription: '精致蕾丝花边设计，性感优雅，提供舒适支撑，展现女性魅力。'
      },
      {
        id: 'MN-1403',
        name: 'High-Waist Shapewear',
        chineseName: '高腰塑身衣',
        image: '/images/product/塑身衣/微信图片_202504221810483.png',
        description: 'High-waist design with full coverage, effectively slims the waist and lifts the buttocks, creating perfect body proportions.',
        chineseDescription: '高腰设计，全面包裹，有效收腹提臀，打造完美身材比例。'
      },
      {
        id: 'MN-1404',
        name: 'Seamless Shapewear',
        chineseName: '无痕塑身衣',
        image: '/images/product/塑身衣/微信图片_20250422181049.png',
        description: 'Seamless design, close-fitting and comfortable, invisible shaping, suitable for wearing under tight clothing.',
        chineseDescription: '无痕设计，贴身舒适，隐形塑形，适合穿着紧身衣物。'
      },
      {
        id: 'MN-1405',
        name: 'Full Body Shapewear',
        chineseName: '连体塑身衣',
        image: '/images/product/塑身衣/微信图片_202504221810491.png',
        description: 'Full body design shapes the entire figure, creates beautiful body curves, suitable for special occasions.',
        chineseDescription: '连体设计，全身塑形，打造完美身材曲线，适合特殊场合穿着。'
      }
    ]
  }
];

const ShowroomC = () => {
  const [activeCategory, setActiveCategory] = useState(productCategories[0].id);
  const [activeSubCategory, setActiveSubCategory] = useState(productCategories[0].subCategories[0].id);
  
  const currentCategory = productCategories.find(cat => cat.id === activeCategory) || productCategories[0];
  const activeProduct = currentCategory.subCategories.find(sub => sub.id === activeSubCategory) || currentCategory.subCategories[0];

  // 计算SEO元数据
  const seoData = {
    title: `${activeProduct.chineseName} | 帕菲特内衣展示厅`,
    description: activeProduct.chineseDescription,
    image: activeProduct.image
  };

  return (
    <>
      <Head>
        <title>{seoData.title}</title>
        <meta name="description" content={seoData.description} />
        <meta property="og:title" content={seoData.title} />
        <meta property="og:description" content={seoData.description} />
        <meta property="og:image" content={seoData.image} />
        <meta property="og:type" content="website" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Product",
              "name": activeProduct.chineseName,
              "description": activeProduct.chineseDescription,
              "image": activeProduct.image
            })
          }}
        />
      </Head>

      <section id="showroom" className="py-16 bg-white">
        <div className="container-wrapper">
          <h2 className="section-title">产品展示厅</h2>

          {/* 桌面端标签页 */}
          <div className="hidden md:grid grid-cols-4 gap-1 mb-8">
            {productCategories.map(category => (
              <button
                key={category.id}
                className={`tab-button py-3 px-4 text-sm font-medium border-b-2 transition-colors ${
                  activeCategory === category.id 
                    ? 'border-[#4baaa4] text-[#4baaa4]' 
                    : 'border-transparent hover:border-gray-300 text-gray-600'
                }`}
                onClick={() => {
                  setActiveCategory(category.id);
                  setActiveSubCategory(category.subCategories[0].id);
                }}
                aria-current={activeCategory === category.id ? 'page' : undefined}
              >
                <div>{category.chineseName}</div>
              </button>
            ))}
          </div>

          {/* 移动端下拉菜单 */}
          <div className="md:hidden mb-8">
            <select
              className="w-full p-2 border rounded focus:ring-2 focus:ring-[#4baaa4] focus:border-[#4baaa4] outline-none transition"
              onChange={(e) => {
                setActiveCategory(e.target.value);
                const selectedCategory = productCategories.find(cat => cat.id === e.target.value);
                if (selectedCategory && selectedCategory.subCategories.length > 0) {
                  setActiveSubCategory(selectedCategory.subCategories[0].id);
                }
              }}
              value={activeCategory}
              aria-label="选择产品类别"
            >
              {productCategories.map(category => (
                <option key={category.id} value={category.id}>
                  {category.chineseName}
                </option>
              ))}
            </select>
          </div>

          {/* 产品展示区 */}
          <div className="bg-gray-50 p-8 rounded-md shadow-sm">
            <div className="mb-6 flex flex-wrap gap-2">
              {currentCategory.subCategories.map(subCategory => (
                <button
                  key={subCategory.id}
                  className={`px-4 py-2 rounded-full text-sm ${
                    activeSubCategory === subCategory.id
                      ? 'bg-[#4baaa4] text-white'
                      : 'bg-white text-gray-700 border border-gray-300'
                  }`}
                  onClick={() => setActiveSubCategory(subCategory.id)}
                >
                  {subCategory.chineseName}
                </button>
              ))}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="relative rounded-md overflow-hidden shadow-md bg-white p-4">
                <Image
                  src={activeProduct.image}
                  alt={activeProduct.chineseName}
                  width={600}
                  height={800}
                  className="object-contain w-full h-auto max-h-[600px]"
                  priority={activeCategory === productCategories[0].id}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  quality={90}
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4 text-[#4baaa4]">
                  {activeProduct.chineseName}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {activeProduct.chineseDescription}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ShowroomC;