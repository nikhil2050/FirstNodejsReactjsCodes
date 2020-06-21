import React, { useState, useRef } from 'react'
import IdleTimer from 'react-idle-timer'
import Modal from 'react-modal'

Modal.setAppElement('#root')

function IdleTimerContainer() {
    const idleTimeRef = useRef(null)
    const sessionTimeoutRef = useRef(null)
    
    const [isLoggedIn, setIsLoggedIn] = useState(true)
    const [modalIsOpen, setModalIsOpen] = useState(false)

    const idleHandler = () => {
        console.log("Idle timeout")
        setModalIsOpen(true)
        sessionTimeoutRef.current = setTimeout(logoutHandler, 5000)
    }
    const logoutHandler = () => {
        setModalIsOpen(false)
        setIsLoggedIn(false)
        clearTimeout(sessionTimeoutRef.current)
    }
    const waitHandler = () => {
        setModalIsOpen(false)
        console.log("Wating")
        clearTimeout(sessionTimeoutRef.current)
    }
    return (
        <div>
            <IdleTimer ref={idleTimeRef} timeout={10000} onIdle={idleHandler}></IdleTimer>
            
            {isLoggedIn? <h2>Hi Peter</h2> : <h2>Hi guest</h2>}
            <Modal isOpen={modalIsOpen}>
                <h2>You are idle</h2>
                <p>You will be logged out</p>
                <button onClick={logoutHandler}>Log out</button>
                <button onClick={waitHandler}>Wait</button>
            </Modal>
        </div>
    )
}

export default IdleTimerContainer