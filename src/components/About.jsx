import Typewriter from "typewriter-effect";

function About() {
  const greetingText =
    "$ Hello, I'm Muhammad Hussain, an aspiring Junior Full Stack Developer based in London.<br />" +
    "$ Driven by a passion for coding and a commitment to continuous learning.<br />" +
    "$ Excited to apply my skills in problem-solving to real-world projects.<br />" +
    "$ Keen interest in robotics and 3D printing, showcasing a curiosity for emerging technologies.";

  return (
    <>
      <div
        className="mx-auto mb-32 h-96 w-10/12 overflow-hidden rounded-xl shadow-2xl md:h-64 md:w-[44rem]"
        id="about-id"
      >
        <div className="flex h-1/6 w-full bg-[#233554] opacity-80">
          <div className="ml-4 mt-4 h-4 w-4 rounded-full bg-red-600"></div>
          <div className="ml-2 mt-4 h-4 w-4 rounded-full bg-yellow-600"></div>
          <div className="ml-2 mt-4 h-4 w-4 rounded-full bg-green-600"></div>
        </div>
        <div className="h-5/6 w-full bg-[#112240] px-4 pt-4 text-xl text-white">
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
    </>
  );
}

export default About;
