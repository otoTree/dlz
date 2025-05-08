'use client';
import Head from 'next/head';
import { useState } from 'react';
import Image from 'next/image';

// Define the product categories and their data
const productCategories = [
  {
    id: 'underwear',
    name: 'Underwear Series',
    subCategories: [
      {
        id: 'MN-1308',
        name: 'Classic Underwear',
        image: '/images/product/内裤系列/MN-1308.png',
        description: 'Made with premium fabric, breathable and comfortable, classic design suitable for daily wear.'
      },
      {
        id: 'MN-1310',
        name: 'Lace Trim Underwear',
        image: '/images/product/内裤系列/MN-1310.png',
        description: 'Exquisite lace trim design, elegant and sexy, showcasing feminine charm.'
      },
      {
        id: 'MN-1311',
        name: 'Sports Underwear',
        image: '/images/product/内裤系列/MN-1311.png',
        description: 'Provides excellent support during sports activities while maintaining dryness and comfort.'
      },
      {
        id: 'MN-1312',
        name: 'High-Waist Shaping Underwear',
        image: '/images/product/内裤系列/MN-1312.png',
        description: 'High-waist design effectively slims the waist and shapes a beautiful body contour.'
      },
      {
        id: 'MN-1313',
        name: 'Cotton Underwear',
        image: '/images/product/内裤系列/MN-1313.png',
        description: '100% cotton material, skin-friendly and breathable, protecting intimate health.'
      }
    ]
  },
  {
    id: 'seamless',
    name: 'Seamless Underwear Series',
    subCategories: [
      {
        id: 'MN-1201',
        name: 'Classic Seamless Underwear',
        image: '/images/product/无缝内衣/image.webp',
        description: 'Made with seamless technology, comfortable fit, invisible under clothing, ideal for daily wear.'
      },
      {
        id: 'MN-1202',
        name: 'Lace Trim Seamless Underwear',
        image: '/images/product/无缝内衣/image2.webp',
        description: 'Elegant lace trim design combines with seamless technology, sexy and feminine.'
      },
      {
        id: 'MN-1203',
        name: 'Sports Seamless Underwear',
        image: '/images/product/无缝内衣/image3.webp',
        description: 'High elasticity fabric provides excellent support during exercise while maintaining comfort and dryness.'
      },
      {
        id: 'MN-1204',
        name: 'Shaping Seamless Underwear',
        image: '/images/product/无缝内衣/image4.webp',
        description: 'Seamless technology combined with shaping design, effectively slimming the abdomen and creating a beautiful silhouette.'
      },
      {
        id: 'MN-1205',
        name: 'Cotton Seamless Underwear',
        image: '/images/product/无缝内衣/image5.webp',
        description: '100% cotton material, skin-friendly and breathable, with seamless technology for maximum comfort.'
      }
    ]
  },
  {
    id: 'athletic',
    name: 'Athletic Wear',
    subCategories: [
      {
        id: 'MN-1103',
        name: 'Professional Athletic Set',
        image: '/images/product/运动服饰/MN-1103 (2).jpg',
        description: 'High-elasticity fabric with moisture-wicking and quick-drying features, provides excellent support for various intensity workouts.'
      },
      {
        id: 'MN-1104',
        name: 'Athletic Shaping Vest',
        image: '/images/product/运动服饰/MN-1104 (1).jpg',
        description: '3D cutting design that fits the body shape, enhances curves, breathable and comfortable.'
      },
      {
        id: 'MN-1105',
        name: 'Fitness Yoga Pants',
        image: '/images/product/运动服饰/MN-1105 (2).jpg',
        description: 'High-waist design slims the waist and lifts the buttocks, elastic fabric provides comfort without constriction.'
      },
      {
        id: 'MN-1107',
        name: 'Athletic Casual Set',
        image: '/images/product/运动服饰/MN-1107 (2).jpg',
        description: 'Casual fashion design with soft comfortable fabric, suitable for both daily exercise and leisure wear.'
      },
      {
        id: 'MN-1108',
        name: 'Outdoor Athletic Jacket',
        image: '/images/product/运动服饰/MN-1108 (2).jpg',
        description: 'Windproof and waterproof, lightweight and warm, suitable for outdoor sports and daily wear.'
      }
    ]
  },
  {
    id: 'shapewear',
    name: 'Shapewear Series',
    subCategories: [
      {
        id: 'MN-1401',
        name: 'Classic Shapewear',
        image: '/images/product/塑身衣/微信图片_20250422181048.png',
        description: 'Made with high-elasticity fabric, effectively sculpts the abdomen and showcases a beautiful body curve, suitable for daily wear.'
      },
      {
        id: 'MN-1402',
        name: 'Lace Shapewear',
        image: '/images/product/塑身衣/微信图片_202504221810482.png',
        description: 'Exquisite lace design, elegant and sexy, provides comfortable support while showcasing feminine charm.'
      },
      {
        id: 'MN-1403',
        name: 'High-Waist Shapewear',
        image: '/images/product/塑身衣/微信图片_202504221810483.png',
        description: 'High-waist design with full coverage, effectively slims the waist and lifts the buttocks, creating perfect body proportions.'
      },
      {
        id: 'MN-1404',
        name: 'Seamless Shapewear',
        image: '/images/product/塑身衣/微信图片_20250422181049.png',
        description: 'Seamless design, close-fitting and comfortable, invisible shaping, suitable for wearing under tight clothing.'
      },
      {
        id: 'MN-1405',
        name: 'Full Body Shapewear',
        image: '/images/product/塑身衣/微信图片_202504221810491.png',
        description: 'Full body design shapes the entire figure, creates beautiful body curves, suitable for special occasions.'
      }
    ]
  }
];

const Showroom = () => {
  const [activeCategory, setActiveCategory] = useState(productCategories[0].id);
  const [activeSubCategory, setActiveSubCategory] = useState(productCategories[0].subCategories[0].id);
  
  const currentCategory = productCategories.find(cat => cat.id === activeCategory) || productCategories[0];
  const activeProduct = currentCategory.subCategories.find(sub => sub.id === activeSubCategory) || currentCategory.subCategories[0];

  // 计算SEO元数据 - 使用useMemo优化性能
  const seoData = {
    title: `${activeProduct.name} | Parfait Lingerie Showroom`,
    description: activeProduct.description,
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
              "name": activeProduct.name,
              "description": activeProduct.description,
              "image": activeProduct.image
            })
          }}
        />
      </Head>

      <section id="showroom" className="py-16 bg-white">
        <div className="container-wrapper">
          <h2 className="section-title mb-2">Capabilities Showroom</h2>

          {/* 桌面端标签页 - 提取为独立组件会更清晰 */}
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
                <div>{category.name}</div>
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
              aria-label="Select product category"
            >
              {productCategories.map(category => (
                <option key={category.id} value={category.id}>
                  {category.name}
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
                  {subCategory.name}
                </button>
              ))}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="relative rounded-md overflow-hidden shadow-md bg-white p-4">
                <Image
                  src={activeProduct.image}
                  alt={activeProduct.name}
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
                  {activeProduct.name}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {activeProduct.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Showroom;
