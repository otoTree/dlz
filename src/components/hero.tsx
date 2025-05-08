
const Hero = () => {

  return (
    <section
      className="hero-section bg-cover bg-center relative transition-all duration-1000"
    >
      <video 
        autoPlay 
        loop 
        muted 
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/images/xuanchuan.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-black/30" />
      <div className="container-wrapper relative z-10 flex items-end h-full pb-24">
        <div className="max-w-3xl text-white animate-fade-in-up">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-medium mb-4 text-shadow">
            <span className="font-bold">Shantou Nanmao Knitting Industry Co., Ltd. is located in Shantou City, Guangdong Province, China.</span>
          </h1>
          <p className="text-lg md:text-xl text-shadow">
            <span className="font-bold">Specialized production of high-quality seamless/sewn women's underwear, yoga clothes, shapewear, knitted fabrics.</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
