import { useState } from 'react'
import Modal from 'react-modal'
import ProfileModal from './components/ProfileModal.jsx'
import './App.css'
import Welcome from './components/Welcome.jsx'

Modal.setAppElement('#root')

function App() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalContent, setModalContent] = useState(null);

  function openModal(modalType) {
    setModalContent(modalType);
    setModalIsOpen(true);
  }

  function closeModal() {
    setModalIsOpen(false);
  }

  const modalStyles = {
    overlay: {
      background: 'rgba(0,0,0,0)'
    },
    content: {
      top: '3%',
      left: '30%',
      right: '30%',
      bottom: '3%',
      background: '#EED9B5',
      borderRadius: 0,
      border: '2px solid #B67200',
      padding: 0
    }
  }

  return (
    <main className="page__container">
      <Welcome openModal={openModal}/>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={modalStyles}
      >
        <ProfileModal closeModal={closeModal} modalContent={modalContent}/>
      </Modal>
    </main>
  )
}

export default App
