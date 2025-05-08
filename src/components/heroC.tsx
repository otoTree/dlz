
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
            <span className="font-bold">汕头南茂针织实业有限公司位于中国广东省汕头市</span>
          </h1>
          <p className="text-lg md:text-xl text-shadow">
            <span className="font-bold">专业化生产高质量女士无缝/有缝内衣，瑜伽服，塑身衣，针织面料</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
