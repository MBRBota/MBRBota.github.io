import menuData from "./data/menuData"
import './Profile.css'

function Profile() {
  const techMapper = (tech) => {
    return (
      <li key={tech.name} className="tech__item">
        <div className="tech__logo">
          <img src={tech.logo}/>
        </div>
        <p className="tech__label">
          {tech.name}
        </p>
      </li>
    )
  }

  const techArray = menuData.data.tech;
  const frontendTech = techArray.filter((tech) => tech.type === "front-end").map(techMapper);
  const backendTech = techArray.filter((tech) => tech.type === "back-end").map(techMapper);
  const dbTech = techArray.filter((tech) => tech.type === "database").map(techMapper);
  const vcTech = techArray.filter((tech) => tech.type === "version-control").map(techMapper);

  return(
    <div className="profile__container">
      <h2 className="content__header">About</h2>
      <p>I'm Robert Bota, an Applied Electronics graduate with a newfound passion for web development, based in Baia Mare, Romania.</p>
      <p>Although college has provided me with some basic programming principles, most of my current web development knowledge has 
      been attained via online courses and resources, such as <a href="https://www.freecodecamp.org/" target="_blank">freeCodeCamp</a>.</p>
      <p>On a more personal note, most of my free time I generally spend consuming whatever interesting pieces of media I happen 
        to get my hands on (movies, series, games, books, the works).</p>
      <h2 className="content__header">Known Technologies</h2>
      <div className="tech__container">
        <h3 className="content__header">Front-End</h3>
        <ul className="tech__list">
          {frontendTech}
        </ul>
        <h3 className="content__header">Back-End</h3>
        <ul className="tech__list">
          {backendTech}  
        </ul>
        <h3 className="content__header">Databases</h3>
        <ul className="tech__list">
          {dbTech}  
        </ul>
        <h3 className="content__header">Version Control</h3>
        <ul className="tech__list">
          {vcTech}  
        </ul>
      </div>
    </div>
  )
}

export default Profile