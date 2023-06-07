import { useState } from "react"
import "./Welcome.css"
import Typewriter from "typewriter-effect"
import Profile from "./Profile"
import Projects from "./Projects"

function Welcome({ openModal }) {
  const [isScanlined, setIsScanlined] = useState(true)

  function toggleScanline(){
    setIsScanlined((prev) => !prev)
  }

  const profileSetup = { type: "Profile", icon: <i className="fa-sharp fa-solid fa-user-tie"></i>, component: <Profile/> }
  const projectsSetup = { type: "Projects", icon: <i className="fa-solid fa-screwdriver-wrench"></i>, component: <Projects/> }

    return(
      <div className={`welcome__container ${isScanlined ? "welcome__scanline" : ""}`}>
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
        <button className={`scanline__toggle ${isScanlined ? "scanline__on" : "scanline__off"}`} title="Toggle Scanline" onClick={toggleScanline}><i className="fa-sharp fa-solid fa-tv"></i></button>
      </div>
    )
}

export default Welcome