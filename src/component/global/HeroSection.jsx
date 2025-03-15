const HeroSection = ({ title, subtitle, bgColor = "bg-blue-900", textColor = "text-white" }) => {
    return (
      <section className={`${bgColor} ${textColor} py-36 px-4`}>
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">{title}</h1>
          <p className="text-xl md:text-2xl font-light">{subtitle}</p>
        </div>
      </section>
    );
  };
  
  export default HeroSection;