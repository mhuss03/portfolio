import Typewriter from "typewriter-effect";

function About() {
  const greetingText = [
    "$ Hi, my name is Muhammad Hussain I am a Junior Full stack Developer Based in London",
    "$ Interests in robotics and 3d printing",
    "$ Love problem Solving",
  ];

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
                .typeString(
                  "$ Hi, my name is Muhammad Hussain I am a Junior Full stack Developer Based in London<br /> $ Interests in robotics and 3d printing<br /> $ Love problem Solving",
                )
                .pauseFor(2500)
                .deleteAll()
                .start();
            }}
            options={{
              // loop: true,
              delay: 40,
              // deleteSpeed: 20,
            }}
          />
        </div>
      </div>
    </>
  );
}

export default About;
