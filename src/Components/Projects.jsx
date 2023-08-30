import "./projects.css";
const Projects = () => {
  return (
    <>
      <div className="projects">
        <div className="projects-header">
          <div className="card-left"></div>

          <h1>My Projects</h1>
          <p>
            A collection of projects I completed for school and in my free time
          </p>
          <p>
            To view source code and see other projects, please visit my GitHub
          </p>
          <p>Github placeholder...</p>
        </div>

        <div className="project-card">
          <div className="card-left">
            <h2>Weather App</h2>
            <img src="/images/Weather-app.png" alt="Weather App" />
          </div>

          <div className="card-right">
            <p className="project-description">
              Simple web application created using React with data gathered from
              OpenWeather API. Features include swapping from Celcius to
              Farenheit and a search history. Additional features such as a
              weekly forecast were unavailable with the free API.
            </p>
            <a
              href="https://quiet-cajeta-ffc1d0.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              View site here!
            </a>
          </div>
        </div>

        <div className="project-card">
          <div className="card-left">
            <h2>Snake</h2>
            <img src="/images/Snake.png" alt="Snake Game" />
          </div>

          <div className="card-right">
            <p className="project-description">
              Classic Snake arcade game created using Javascript
            </p>
            <a
              href="https://symphonious-malabi-5f3d16.netlify.app"
              target="_blank"
              rel="noopener noreferrer"
            >
              View site here!
            </a>
          </div>
        </div>

        <div className="project-card">
          <div className="card-left">
            <h2>Fitness Tracker</h2>
            <img src="/images/Fitness-Tracker.png" alt="Fitness Tracker" />
          </div>

          <div className="card-right">
            <p className="project-description">
              Fullstack application designed to track workout routines. The
              primary focus of this project was creating the database with
              PostgreSQL.
            </p>
            <a
              href="https://papaya-sopapillas-a82a72.netlify.app"
              target="_blank"
              rel="noopener noreferrer"
            >
              View site here!
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
