import Image from 'next/image';
import Link from 'next/link';

const Capabilities = () => {
  return (
    <section id="capabilities" className="py-16 bg-gray-50">
      <div className="container-wrapper">
        <h2 className="section-title mb-2">Capabilities & Service</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="mb-6">
              Our goal is to bring your lingerie and swimwear line to life by simplifying and making the OEM/ODM production as convenient as possible. Our team is always ready to provide you with professional service, meeting any of your OEM/ODM needs. With 18 years of professional experience and lean production, we offer hassle-free knitted underwear manufacturing services for high-end brands.
            </p>
            <p className="font-bold mb-2">Core Advantages:</p>
            <ul className="bullet-list mb-6">
              <li>Certified Qualifications: Internationally certified, specializing in high-end lingerie, sports bras, shapewear, and yoga apparel production.</li>
              <li>R&D Support: Our factory provides highly effective and efficient product development support and sample making, shortening your time to market.</li>
              <li>Plus-Size Expertise: Deep expertise in both regular and plus-size lingerie, with mature pattern libraries and fit systems ensuring proper fit.</li>
              <li>Quality Standards: Full supply chain quality inspection from raw materials to finished products, with AQL sampling standards higher than industry levels.</li>
              <li>Flexible Capacity: Our own production base in Shantou, Guangdong, flexibly handles orders from 2,000 to 50,000 pieces with precise delivery times.</li>
            </ul>
            
            <p className="font-bold mb-2">Why Choose Us:</p>
            <ul className="bullet-list mb-6">
              <li>Top technical team in Shantou area, with workers averaging 10 years of experience in detailed handwork</li>
              <li>Vertically managed factory, no middleman markup, one-on-one service throughout</li>
              <li>Accumulated long-term OEM services for 23 international brands</li>
            </ul>

            <p className="mb-6">
              <strong>Our Commitment:</strong> Crafting each piece of underwear with artisan spirit, giving your brand peace of mind.
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
