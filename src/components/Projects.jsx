function Projects() {
  return (
    <>
      <h1 id="projects-id" className="mb-12 text-center text-4xl text-white">
        Projects
      </h1>
      <div className="card mb-24 max-w-4xl">
        <video className="h-4/6 w-full" loop autoPlay muted>
          <source src="./assets/nahw-app.mp4" type="video/mp4" />
        </video>
        <div className="card-text relative">
          <h1 className="mb-1 pt-2 font-bold md:text-2xl">Language Learning</h1>
          <p className="mb-4 px-12 text-xs md:hidden">
            Featuring Interactive and Fast-Paced Grammatical Analysis modes
            providing an innovative learning experience.
          </p>
          <p className="hidden md:mb-4 md:block md:px-12 md:text-base">
            Featuring Interactive and Fast-Paced Grammatical Analysis modes, the
            app tackles the limited options for practicing classical Arabic in
            an English language context, providing an innovative learning
            experience.
          </p>
          <a
            href="https://mhuss03.github.io/nahw-notes-app/"
            target="_blank"
            className="inline-block rounded-md border-2 px-2 py-1 transition-colors hover:bg-white hover:text-accent"
          >
            <h2>View Project</h2>
          </a>
          <div className="hidden md:absolute md:bottom-36 md:flex md:w-full md:justify-between md:px-2 lg:px-6">
            <div className="flex w-40 justify-around rounded-md bg-primary opacity-90 transition-all hover:opacity-100">
              <img src="./assets/html-icon.svg" className="project-icon" />
              <img src="./assets/tailwind-icon.svg" className="project-icon" />
              <img src="./assets/js-icon.svg" className="project-icon" />
              <img src="./assets/storage-icon.svg" className="project-icon" />
            </div>
            <a href="https://github.com/mhuss03/StudyApp" className="">
              <img
                src="./assets/github-icon.svg"
                className="mt-1 w-8 rounded-md bg-primary p-1 transition-colors hover:bg-accent"
              />
            </a>
          </div>
        </div>
      </div>
      <div className="mx-auto mb-32 grid max-w-6xl grid-cols-1 gap-y-24 md:grid-cols-2">
        <div className="card">
          <video className="h-4/6 w-full" loop autoPlay muted>
            <source
              className="h-full"
              src="./assets/study-app.mp4"
              type="video/mp4"
            />
          </video>
          <div className="card-text relative">
            <h1 className="mb-1 font-bold md:text-xl">Study App</h1>
            <p className="mb-6 mt-3 px-2 text-xs md:text-sm">
              Streamlining study sessions with integrated tools - task tracker,
              note-taking, timer, and background music player.
            </p>
            <a
              href="https://mhuss03.github.io/StudyApp/"
              target="_blank"
              className="inline-block rounded-md border-2 px-2 py-1 transition-colors hover:bg-white hover:text-accent"
            >
              <h2>View Project</h2>
            </a>
            <div className="project-icon-div">
              <div className="project-icon-bar">
                <img src="./assets/html-icon.svg" className="project-icon" />
                <img
                  src="./assets/tailwind-icon.svg"
                  className="project-icon"
                />
                <img src="./assets/js-icon.svg" className="project-icon" />
                <img src="./assets/storage-icon.svg" className="project-icon" />
              </div>
              <a href="https://github.com/mhuss03/StudyApp" className="">
                <img
                  src="./assets/github-icon.svg"
                  className="mt-1 w-8 rounded-md bg-primary p-1 transition-colors hover:bg-accent"
                />
              </a>
            </div>
          </div>
        </div>
        <div className="card">
          <video className="h-4/6 w-full" loop autoPlay muted>
            <source
              className="h-full"
              src="./assets/film-app.mp4"
              type="video/mp4"
            />
          </video>
          <div className="card-text relative">
            <h1 className="mb-1 font-bold md:text-xl">FilmFlix</h1>
            <p className="mb-6 mt-3 px-2 text-xs md:text-sm">
              The ultimate movie companion. Search and Add movies, discover
              genres, ratings, duration, and release years.
            </p>
            <a
              href=""
              target="_blank"
              className="inline-block rounded-md border-2 px-2 py-1 transition-colors hover:bg-white hover:text-accent"
            >
              <h2>View Project</h2>
            </a>
            <div className="project-icon-div">
              <div className="project-icon-bar">
                <img src="./assets/html-icon.svg" className="project-icon" />
                <img
                  src="./assets/bootstrap-icon.svg"
                  className="project-icon"
                />
                <img src="./assets/flask-icon.svg" className="project-icon" />
                <img src="./assets/sqlite-icon.svg" className="project-icon" />
              </div>
              <a href="https://github.com/mhuss03/StudyApp" className="">
                <img
                  src="./assets/github-icon.svg"
                  className="mt-1 w-8 rounded-md bg-primary p-1 transition-colors hover:bg-accent"
                />
              </a>
            </div>
          </div>
        </div>
        <div className="card">
          <video className="h-4/6 w-full" loop autoPlay muted>
            <source
              className="h-full"
              src="./assets/recipe-app.mp4"
              type="video/mp4"
            />
          </video>
          <div className="card-text relative">
            <h1 className="mb-1 font-bold md:text-xl">Recipe App</h1>
            <p className="mb-6 mt-3 px-2 text-xs md:text-sm">
              Streamlining study sessions with integrated tools - task tracker,
              note-taking, timer, and background music player.
            </p>
            <a
              href="https://mhuss03.github.io/recipe-app/"
              target="_blank"
              className="inline-block rounded-md border-2 px-2 py-1 transition-colors hover:bg-white hover:text-accent"
            >
              <h2>View Project</h2>
            </a>
            <div className="project-icon-div">
              <div className="project-icon-bar">
                <img src="./assets/html-icon.svg" className="project-icon" />
                <img
                  src="./assets/tailwind-icon.svg"
                  className="project-icon"
                />
                <img src="./assets/js-icon.svg" className="project-icon" />
                <img src="./assets/mongodb-icon.svg" className="project-icon" />
              </div>
              <a href="https://github.com/mhuss03/StudyApp" className="">
                <img
                  src="./assets/github-icon.svg"
                  className="mt-1 w-8 rounded-md bg-primary p-1 transition-colors hover:bg-accent"
                />
              </a>
            </div>
          </div>
        </div>
        <div className="card">
          <video className="h-4/6 w-full" autoPlay muted loop>
            <source src="./assets/expense-tracker.mp4" type="video/mp4" />
          </video>
          <div className="card-text relative">
            <h1 className="mb-1 pl-4 font-bold md:text-xl">Expense Tracker</h1>
            <p className="mb-6 mt-3 px-2 text-xs md:text-sm">
              Track expenses, categorise transactions and gain financial
              insights instantly with user-friendly graphs.
            </p>
            <a
              href="https://mhuss03.github.io/ExpenseTracker/"
              target="_blank"
              className="inline-block rounded-md border-2 px-2 py-1 transition-colors hover:bg-white hover:text-accent"
            >
              <h2>View Project</h2>
            </a>
            <div className="project-icon-div">
              <div className="project-icon-bar">
                <img src="./assets/html-icon.svg" className="project-icon" />
                <img src="./assets/js-icon.svg" className="project-icon" />
                <img src="./assets/css-icon.svg" className="project-icon" />
                <img src="./assets/mysql-icon.svg" className="project-icon" />
              </div>
              <a href="https://github.com/mhuss03/StudyApp" className="">
                <img
                  src="./assets/github-icon.svg"
                  className="mt-1 w-8 rounded-md bg-primary p-1 transition-colors hover:bg-accent"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Projects;
