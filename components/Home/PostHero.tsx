import { SparklesCore } from "../ui/sparkles";

const PostHero = () => {
  return (
    <>
      {/* The Sparkle section */}
      <div>
        <h1 className="text-4xl text-center">
          Give your place in the web to
        </h1>
        <div className="w-full flex flex-col items-center justify-center overflow-hidden rounded-md">
          <h1 className="md:text-4xl text-3xl lg:text-9xl font-bold text-center text-white relative z-20">
            Sparkle
          </h1>
          <div className="w-[40rem] h-40 relative">
            {/* Gradients */}
            <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
            <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
            <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
            <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

            {/* Core component */}
            <SparklesCore
              background="transparent"
              minSize={0.4}
              maxSize={1}
              particleDensity={1200}
              className="w-full h-full"
              particleColor="#FFFFFF"
            />

            {/* Radial Gradient to prevent sharp edges */}
          <div className="absolute inset-0 w-full h-full [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div><br /><br />
          <div>
            <span>Get rid of those <span className="font-bold text-gray-600">old, dull</span> corporate looking websites and get your <span className="font-bold bg-gradient-to-r from-indigo-500 to-blue-500 bg-clip-text text-transparent">eye-catchy and mesmerizing</span> now</span>
          </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PostHero;
