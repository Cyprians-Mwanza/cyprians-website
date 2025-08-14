const Hero = () => {
  return (
    <section id="home" className="h-screen flex flex-col justify-center items-center text-center bg-gray-50 px-6">
      <h1 className="text-5xl font-bold text-gray-800">
        Hi, I'm <span className="text-blue-600">Cyprians Mwanza</span>
      </h1>
      <p className="mt-4 text-lg text-gray-600 max-w-2xl">
        A Full Stack Software Engineer from Nairobi, Kenya.  
        I specialize in Web, Mobile, and AI-powered solutions.
      </p>
      <div className="mt-6">
        <a href="#projects" className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700">
          View My Work
        </a>
      </div>
    </section>
  );
};

export default Hero;
