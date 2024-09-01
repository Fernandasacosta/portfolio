import { syne } from "@/public/fonts/fonts";

const About = () => {
  return (
    <div className=" text-white">
       <div className="container mx-auto min-h-screen overflow-visible pb-10 ">
    
      <h2 className={`${syne.className} mt-20 text-center text-4xl font-bold`}>
        About
      </h2>
      <h3 className="p-4 text-5xl uppercase md:text-7xl lg:text-[8rem]">
        I creative dynamic, responsive websites that blend creativity with efficiency
      </h3>
      <p className="mr-24 pl-4 text-lg leading-loose">
        Hi, I´m Fernanda, a full-stack developer with a flair for animation and data.
        Hi, I´m Fernanda, a full-stack developer with a flair for animation and data.
        Hi, I´m Fernanda, a full-stack developer with a flair for animation and data.
        Hi, I´m Fernanda, a full-stack developer with a flair for animation and data.
      </p>
    </div>

    </div>
   
  );
}

export default About;