function Navbar() {
  return (
    <>
      <ul className="flex w-full items-center justify-between px-6 py-4 font-semibold text-white">
        <a href="">
          <img src="./assets/MH-logos_white-copy.png" className="w-12" />
        </a>
        <div className="flex">
          <li className="nav-list">
            <a href="#about-id" className="">
              About
            </a>
          </li>
          <li className="nav-list hidden md:block">
            <a href="#skills-id">Skills</a>
          </li>
          <li className="nav-list">
            <a href="#projects-id">Project</a>
          </li>
          <li className="nav-list">
            <a href="Updated Resume.pdf">My CV</a>
          </li>
          <li className="nav-list hidden md:block">
            <a href="#contact-id">Contact</a>
          </li>
        </div>
        <div className="flex">
          <a
            href="https://www.linkedin.com/in/muhammad-hussain-731788243/"
            className=""
          >
            <img
              src="./assets/linkedin-icon.svg"
              alt="linkedin-icon"
              className="mr-6 hidden w-12 rounded-xl transition-colors hover:bg-orange-600  md:block"
            />
          </a>
          <a href="https://github.com/mhuss03" className="">
            <img
              src="./assets/github-icon.svg"
              alt="github-icon"
              className="w-12 rounded-full transition-colors hover:bg-orange-600"
            />
          </a>
        </div>
      </ul>
    </>
  );
}

export default Navbar;
