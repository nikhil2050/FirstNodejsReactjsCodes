import React from 'react'
import './Reactjs14a_CSSStyles.css'

function CSSStylesheet(props) {
    return(
        <div>
            <hr/>
            <h4 className="primary">CSS Stylesheets - Static class</h4>
            <h4 className={props.defaultClass}>CSS Stylesheets - Variable class</h4>
            <h4 className={`${props.defaultClass} italicc`}>CSS Stylesheets - Static + variable classes</h4>
        </div>
    )
}

export default CSSStylesheet