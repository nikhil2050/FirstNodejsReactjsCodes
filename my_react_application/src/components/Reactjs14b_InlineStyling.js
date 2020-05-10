import React from 'react'

const heading = {
    fontSize: '20px',
    color: 'blue'
}

function InlineStyling() {
    return (
        <div>
            <hr/>
            <h4 style={heading}>Inline Styling</h4>
        </div>
    )
}

export default InlineStyling