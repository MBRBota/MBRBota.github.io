import menuData from "./data/menuData"
import "./Projects.css"

function Projects() {

  const findTech = (techName) => menuData.data.tech.filter((item) => item.name === techName);
  const listTech = (techArr) => techArr.map((tech) => {
    return (
      <div className="tech__logo">
          <img src={findTech(tech)[0].logo}/>
      </div>
    )
  })
  const projectsArray = menuData.data.projects;
  const projectsList = projectsArray.map(project => { 
    return (
      <div className="project__tile" key={project.name}>
        <a className="project__link" href={project.link} target="_blank">
            <img className="project__screenshot" src={project.screenshot}/>
            <div className="project__info">
              <h3 className="content__header">{project.name}</h3>
              <div className="project__tech">
                {listTech(project.tech)}
              </div>
            </div>
        </a>
      </div>
    )
  })


  return(
    <>    
      <h2 className="content__header">Projects</h2>
      <div className="projects__container">
        {projectsList}
      </div>
    </>
  )
}

export default Projects