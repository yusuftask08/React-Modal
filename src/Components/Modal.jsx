import React from 'react'
import './Modal.scss'

const Modal = (props) => {
    return props.show ? (
        <div className='modal-wrapper'>
            <div className={`container ${props.show ? 'active' : ''}`}>
                {props.children}
            </div>
        </div>
    ) : null
}

export default Modal