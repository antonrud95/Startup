function Hero({ title, text }) {
    return (
      <div className="bg-blue-800 py-12 md:py-20 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="font-semibold mb-4 text-2xl md:text-4xl text-white">
            {title}
          </h1>
        <h2 className="font-medium text-blue-300 text-lg">{text}</h2>
        </div>
      </div>
    );
  }
  
  export default Hero;