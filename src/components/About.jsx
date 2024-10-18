import Typewriter from "typewriter-effect";

function About() {
  const greetingText =
    "$ Hello, I'm Muhammad Hussain, an aspiring Junior Full Stack Developer based in London.<br />" +
    "$ Driven by a passion for coding and a commitment to continuous learning.<br />" +
    "$ Excited to apply my skills in problem-solving to real-world projects.<br />" +
    "$ Keen interest in robotics and 3D printing, showcasing a curiosity for emerging technologies.";

  return (
    <>
      <div className="flex w-full items-center justify-center " id="about-id">
        <div className="w-80 overflow-hidden rounded-xl shadow-2xl md:w-[32rem]">
          <div className="flex h-1/6 w-full bg-[#233554] pb-8 opacity-80">
            <div className="ml-4 mt-4 h-4 w-4 rounded-full bg-red-600"></div>
            <div className="ml-2 mt-4 h-4 w-4 rounded-full bg-yellow-600"></div>
            <div className="ml-2 mt-4 h-4 w-4 rounded-full bg-green-600"></div>
          </div>
          <div className="h-[30rem] w-full bg-[#112240] px-4 py-6 text-xl text-white md:h-96">
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString(greetingText)
                  .pauseFor(2500)
                  // .deleteAll()
                  .start();
              }}
              options={{
                // loop: true,
                delay: 40,
                // deleteSpeed: 50,
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
