import React from 'react'
import CSSModule_Child from './Reactjs14c_CSSModule_Child'
import './Reactjs14c_AppStyles.css'
import mystyle from './Reactjs14c_AppStyles.module.css'

function CSSModule_Parent() {
    return (
        <div>
            <hr/>
            <h4 class="error">CSS Module - Parent - Error</h4> 
            <h4 class={mystyle.success}>CSS Module - Parent - Success</h4> 
            <CSSModule_Child />
        </div>
    )
}

export default CSSModule_Parent