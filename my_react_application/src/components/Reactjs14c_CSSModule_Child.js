import React from 'react'

function CSSModule_Child() {
    return (
        <div>
            <h5 class="error">CSS Module - Parent - Error</h5> 
            <h5 /* class={mystyle.success} */>CSS Module - Parent - Success</h5> 
        </div>
    )
}

export default CSSModule_Child
