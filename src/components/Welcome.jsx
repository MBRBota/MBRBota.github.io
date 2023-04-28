import "./Welcome.css"
import Typewriter from "typewriter-effect"

function Welcome({ openModal }) {
  const profileSetup = { type: "Profile", icon: <i className="fa-sharp fa-solid fa-user-tie"></i> }
  const projectsSetup = { type: "Projects", icon: <i class="fa-solid fa-screwdriver-wrench"></i> }

    return(
      <div className="welcome__container">
        <div className="welcome__wrapper">
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .typeString("Hey, I'm Robert")
                .start()
            }}
          />
          <div className="welcome__buttons">
            <div className="welcome__modals">
              <button className="welcome__profile-button" onClick={() => openModal(profileSetup)}>Profile</button>
              <button className="welcome__projects-button" onClick={() => openModal(projectsSetup)}>Projects</button>
            </div>
            <div className="welcome__socials">
              <a className="welcome__social-link" target="_blank" href="https://github.com/MBRBota"><i className="fa-brands fa-square-github"></i></a>
              <a className="welcome__social-link" target="_blank"><i className="fa-brands fa-linkedin"></i></a>
            </div>
          </div>
        </div>
      </div>
    )
}

export default Welcome