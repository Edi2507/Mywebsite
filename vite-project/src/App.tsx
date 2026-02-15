import "./App.css";

function App() {
  return (
    <div className="container">
      <header>
        <h1>EDI</h1>
        <p>Developer</p>
      </header>

      <section className="about">
        <h2>About Me</h2>
        <p>
          I build modern web applications.
        </p>
      </section>

      <section className="projects">
        <h2>Projects</h2>

        <div className="project-card">
          <h3>Project One</h3>
          <p>Short description of your project.</p>
        </div>

        <div className="project-card">
          <h3>Project Two</h3>
          <p>Short description of your project.</p>
        </div>
      </section>

      <section className="contact">
        <h2>Contact</h2>
        <p>Discord: thatwasepic1417</p>
      </section>
    </div>
  );
}

export default App;