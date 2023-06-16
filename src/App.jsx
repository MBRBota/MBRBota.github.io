import { useState, useRef } from 'react'
import Modal from 'react-modal'
import MenuModal from './components/MenuModal.jsx'
import './App.css'
import Welcome from './components/Welcome.jsx'

Modal.setAppElement('#root')

function App() {
  const windowWidth = useRef(window.innerWidth)
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalIsFullscreen, setIsFullscreen] = useState(windowWidth.current > 560 ? false : true);
  const [modalContent, setModalContent] = useState({});

  function openModal(modalSetup) {
    setModalContent(modalSetup);
    setModalIsOpen(true);
  }

  function closeModal() {
    setModalIsOpen(false);
  }

  function toggleFullscreen() {
    setIsFullscreen((prev) => !prev)
  }

  const modalWindowedWidth = windowWidth.current > 1320 ? '30%' : '15%'

  const modalStyles = {
    overlay: {
      background: 'rgba(0,0,0,0)'
    },
    content: {
      top: modalIsFullscreen ? '2px' : '3%',
      left: modalIsFullscreen ? '2px' : modalWindowedWidth,
      right: modalIsFullscreen ? '2px' : modalWindowedWidth,
      bottom: modalIsFullscreen ? '2px' : '3%',
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
        <MenuModal closeModal={closeModal} toggleFullscreen={toggleFullscreen} modalContent={modalContent}/>
      </Modal>
    </main>
  )
}

export default App
