


import Card from "./card";
import Tags from "./tags";

const Intro = () => {

  return (
    <div className="w-full flex flex-col items-center justify-center font-bold lg:pt-5 md:font-extrabold ">
      <section className="flex flex-col items-center justify-center">
        <Card className="w-fit" heading={

          <h2 className="text-2xl md:text-3xl lg:text-4xl 2xl:text-6xl font-oneslice lg:font-bold text-center ">
            Building web solutions to everyday problems.
          </h2>
        }/>
     
        <h2 className="text-xl md:text-2xl lg:text-3xl 2xl:text-5xl font-medium text-center pt-2 lg:pt-5 lg:mb-2">
          Joshua is specializing in building exceptional digital experiences to make everyday life easier.
        </h2>
      </section>
    </div>
  );
};

export default Intro;
