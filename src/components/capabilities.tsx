import Image from 'next/image';
import Link from 'next/link';

const Capabilities = () => {
  return (
    <section id="capabilities" className="py-16 bg-gray-50">
      <div className="container-wrapper">
        <h2 className="section-title">Capabilities & Service</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="mb-6">
              Our goal is to bring your lingerie and swimwear line to life by making the OEM/ODM production as easy and convenient as possible for you. Our team is always here to professionally serve you by meeting any of your OEM/ODM needs. As a client, you can expect the following from us:
            </p>

            <ul className="bullet-list mb-6">
              <li>Our certified factory is capable of producing very high-quality lingerie, nursing bras, swimwear, and sports bras.</li>
              <li>Our factory can produce both regular and plus size lingerie, nursing bras, swimwear and sports bras up to 52K or 6XL.</li>
              <li>Our factory provides very effective and efficient product development support and sample making.</li>
              <li>Our factory and team have over 18 years of experience and knowledge in product fitting and technical support for both regular and plus size lingerie.</li>
              <li>We set a very high standard for the quality of our production goods. All of our products go through a rigorous quality control process. We do not compromise on production quality.</li>
              <li>Our factory can fulfill both small and large purchase orders and ensure that quality is met with each order.</li>
              <li>Our factory has some of the most skillful and well-trained staffs and workers in Shantou area, assuring all production goods have consistent and good quality.</li>
            </ul>

            <p className="mb-6">
              We aim to impress and delight each of our clients through high quality products and services for your OEM/ODM needs. We want to make it a joyful and comfortable OEM/ODM experience for you. We are always here to serve you! Please contact us today via info@unigrace.cn
            </p>

            <Link
              href="#ContactUs"
              className="inline-block bg-[#4baaa4] text-white px-6 py-2.5 rounded-sm hover:bg-opacity-90 transition-colors"
            >
              Contact Us
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
