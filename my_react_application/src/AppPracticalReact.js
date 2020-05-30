import React, {Component, useState} from 'react';
import logo from './logo.svg';
import './App.css';

// Import ICONS
import { IconContext } from 'react-icons'
import { AiFillSkype } from "react-icons/ai"
import { RiCompasses2Line } from "react-icons/ri"
import { FcNightLandscape } from "react-icons/fc";

// Import TOAST
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

// Import MODAL
import Modal from 'react-modal'

// Import TOOL-TIP
/* import Tippy from '@tippy.js/react'
import 'tippy.js/dist/tippy.css' */

// Import COUNTUP
import CountUp, { useCountUp } from 'react-countup'

/* 
 *  TOAST
 */
const CustomToastCompo = ({closeToast}) => {
    return (
        <div>
            Custom toast <button onClick={closeToast}>Close</button> 
        </div>
    )
}
toast.configure()

/* 
 *  MODAL
 */
Modal.setAppElement("#root")

function AppPracticalReact() {

    /* 
     *  TOAST
     */
    const notify = ()=>{
        toast('Basic toast', 
                {position: toast.POSITION.TOP_LEFT})
        toast.success('Success notify', 
                {position: toast.POSITION.TOP_CENTER, autoClose:8000})
        toast.error('Error notify',  
                {position: toast.POSITION.TOP_RIGHT, autoClose:8000})
        toast.info('Info notify', 
                {position: toast.POSITION.BOTTOM_LEFT, autoClose:8000})
        toast.warn('Warn notify', 
                {position: toast.POSITION.BOTTOM_CENTER, autoClose:false})
        toast.success(<CustomToastCompo />, 
                {position:toast.POSITION.BOTTOM_RIGHT, autoClose:false})        
    }

    /* 
     *  MODAL
     */
    const [modalIsOpen, setModalIsOpen] = useState(false)

    /*
     *  COUNTUP
     */
    const {countUp, start, pauseResume, reset, update} = useCountUp({duration:5, end:10000, startOnMount:false})

    return (
        <div className="AppPracticalReact" >

            {/* ICONS */}
            <AiFillSkype color='red' size='2rem'/>
            <RiCompasses2Line color='green' size='3rem'/>
            <div>
                <IconContext.Provider value={{color:'blue', size:'6rem'}} >
                    <AiFillSkype />
                    <RiCompasses2Line />
                    <AiFillSkype color='purple' size='2rem'/>
                    <FcNightLandscape color='orange' />
                </IconContext.Provider>
            </div>
                
            {/* TOAST */}
            <hr/>
            <button onClick={notify}>Notify</button>
            
            {/* MODAL */}
            <hr/>
            <button onClick={() => setModalIsOpen(true)}>Open Modal</button>
            <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}>
                <h2>Modal Title</h2>
                <p>Modal Title</p>
                <button onClick={()=>setModalIsOpen(false)} >Close Modal</button>
            </Modal>

            {/* TOOL-TIP */}
{/*             <Tippy content="Basic tooltip">
                <button>ToolTip - Hover here</button>
            </Tippy> */}

            {/* TOOL-TIP - Coloured*/}
            {/* https://www.youtube.com/watch?v=8y4Dr9jJtF0&list=PLC3y8-rFHvwhAh1ypBvcZLDO6I7QTY5CM&index=5 */}
            <hr/>

            {/* COUNT-UP */}
            <CountUp end={100} />   <br/>
            <CountUp end={100} duration={5}/>   <br/>
            <CountUp start={500.7} end={100.38} duration={5} prefix='$' suffix=' only' decimals={2}/>
            <div>
                <h3>{countUp}</h3>
                <button onClick={start}>Start</button>
                <button onClick={pauseResume}>Pause/Resume</button>
                <button onClick={reset}>Reset</button>
                <button onClick={() => update(2000)}>Update to 1000</button>
            </div>
        </div>
    )
}

export default AppPracticalReact