import { useState } from 'react'
import './App.css'
import Modal from './Components/Modal'

function App() {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(!showModal)
  }

  return (
    <div className="App">
      <button onClick={openModal}>
        Open Modal 🤙
      </button>
      <Modal show={showModal}>
        <div className='modal-content'>
          <div className='modal-content-close' onClick={openModal}>
            ❌
          </div>
          <div className='modal-content-title'>
            <h2> Bilgilendirme</h2>
          </div>
          <div className='modal-content-text'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Ad consectetur animi reiciendis quas, et dolores, voluptate
            ratione tempore enim neque nesciunt unde placeat corporis est
            voluptas suscipit praesentium facilis cumque aperiam, doloremque
            fuga odio ex? Unde accusantium reprehenderit sequi molestiae
            natus distinctio repellat, eos porro sunt cumque harum fugiat laboriosam.
          </div>
          <div className='modal-content-footer'>
            <button onClick={openModal} className='button-save'>
              Kaydet
            </button><button onClick={openModal} className='button-close'>
              Çık
            </button>
          </div>
        </div>
      </Modal>
    </div>
  )
}

export default App
