import './ProfileModal.css'

function ProfileModal({ closeModal, toggleFullscreen, modalContent }) {
  

  return(
    <>
      <header className="modal__header">
        <div className="header__title">
          <div className="header__icon-wrapper">
            {modalContent.icon}
          </div>
          <p className="header__text">{modalContent.type}</p>
        </div>
        <div className="header__controls">
          <button className="control__toggle-fullscreen" onClick={toggleFullscreen}><i className="fa-solid fa-maximize"></i></button>
          <button className="control__close" onClick={closeModal}><i className="fa-sharp fa-solid fa-square-xmark"></i></button>
        </div>
      </header>
      <div className="modal__header-gradient" />
      <div className="modal__content">
        <p>lorem ipsum</p>
      </div>
    </>
  )
}

export default ProfileModal