import './ProfileModal.css'

function ProfileModal({ closeModal, modalContent }) {
  

  return(
    <>
      <header className="modal__header">
        <p>{modalContent}</p>
        <button onClick={closeModal}>Close</button>
      </header>
      <div className="modal__header-gradient"></div>
      <div className="modal__content">
        <p>lorem ipsum</p>
      </div>
    </>
  )
}

export default ProfileModal