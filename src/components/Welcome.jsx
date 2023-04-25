import "./Welcome.css"
import Typewriter from "typewriter-effect"

function Welcome() {
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
              <button className="welcome__profile-button">Profile</button>
              <button className="welcome__projects-button">Projects</button>
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