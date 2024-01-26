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
    <div className="mx-auto my-12 mb-32 max-w-6xl">
      <div>
        <h1
          className="mb-12 text-center text-4xl font-semibold text-stone-300"
          id="skills-id"
        >
          Frontend Skills
        </h1>
        <div className="flex justify-around">
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
      <div>
        <h1 className="my-12 text-center text-4xl font-semibold text-stone-300">
          Backend Skills
        </h1>
        <div className="flex justify-around">
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
            <img src="./assets/mongodb-icon.svg" />
            <div className="popup">MongoDB</div>
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
