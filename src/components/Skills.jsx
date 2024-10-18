import { useEffect, useState } from "react";

function Skills() {
  // const [isIntersecting, setIsIntersecting] = useState(false);

  // useEffect(() => {
  //   const observer = new IntersectionObserver((entries) => {
  //     entries.forEach((entry) => {
  //       if (entry.isIntersecting) {
  //         setIsIntersecting(true);
  //       } else {
  //         setIsIntersecting(false);
  //       }
  //     });
  //   });

  //   const hiddenElements = document.querySelectorAll(".hide");
  //   hiddenElements.forEach((el) => observer.observe(el));

  //   return () => {
  //     hiddenElements.forEach((el) => observer.unobserve(el));
  //   };
  // }, []);

  return (
    <div className="flex max-w-6xl flex-wrap justify-center">
      <div className="flex h-auto w-screen flex-wrap items-center justify-center">
        <h1
          className="mb-12 w-full text-center text-4xl font-semibold text-stone-300"
          id="skills-id"
        >
          Frontend Skills
        </h1>
        <div className="flex flex-wrap justify-center gap-2">
          <div className="skill-icon group">
            <img src="./assets/js-icon.svg" />
            <div className="popup">JavaScript</div>
          </div>
          <div className="skill-icon group">
            <img src="./assets/react-icon.svg" />
            <div className="popup">React</div>
          </div>
          <div className="skill-icon group">
            <img src="./assets/tailwind-icon.svg" />
            <div className="popup">Tailwind</div>
          </div>
          <div className="skill-icon group">
            <img src="./assets/css-icon.svg" />
            <div className="popup">CSS</div>
          </div>
          <div className="skill-icon group">
            <img src="./assets/html-icon.svg" />
            <div className="popup">HTML</div>
          </div>
        </div>
      </div>
      <div className="">
        <h1 className="my-12 w-full text-center text-4xl font-semibold text-stone-300">
          Backend Skills
        </h1>
        <div className="flex flex-wrap justify-center gap-2">
          <div className="skill-icon group">
            <img src="./assets/python-icon.svg" />
            <div className="popup">Python</div>
          </div>
          <div className="skill-icon group">
            <img src="./assets/django-icon.svg" />
            <div className="popup">Django</div>
          </div>
          <div className="skill-icon group">
            <img src="./assets/mysql-icon.svg" />
            <div className="popup">MySQL</div>
          </div>
          <div className="skill-icon group">
            <img src="./assets/flask-icon.svg" />
            <div className="popup">Flask</div>
          </div>
          <div className="skill-icon group">
            <img src="./assets/nodejs-icon.svg" />
            <div className="popup">NodeJS</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
