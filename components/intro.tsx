


import Tags from "./tags";

const Intro = () => {

  return (
    <div className="w-full flex flex-col items-center justify-center font-bold lg:pt-5 md:font-extrabold ">
      <section className="flex flex-col items-center justify-center">
        <Tags>
          <h2 className="text-2xl md:text-3xl lg:text-4xl lg:font-bold text-center ">
            Building web solutions to everyday problems.
          </h2>
        </Tags>
        <h2 className="text-xl md:text-2xl lg:text-3xl font-medium text-center pt-2 lg:pt-5 lg:mb-2">
          Joshua is specializing in building exceptional digital experiences to make everyday life easier.
        </h2>
      </section>
    </div>
  );
};

export default Intro;
