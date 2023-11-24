"use client";

const Hero = () => {
  return (
    <div className="bg-hero w-screen ">
      <div className="h-screen max-w-5xl md:ml-[20%] md:mr-[20%] p-5 translate-y-[-3rem] flex flex-col justify-center text-left">
        <h1 className="text-6xl">CodeSpector</h1>
        <p className="text-2xl">Helping Bussinesses Established On The Internet</p>
        <span>In this digital world, it is more important than ever for businesses to have a strong online presence. We are a team of experienced web developers and designers who can help you create a website that is both visually appealing and easy to use. We will also help you optimize your website for search engines so that potential customers can easily find you online</span>

        <button className="rounded-xl bg-slate-800 block text-xl p-2 mt-5">
          <span>Get Started</span>
        </button>
      </div>
    </div>
  );
}

export default Hero;