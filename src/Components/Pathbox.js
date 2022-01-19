import React from 'react'
import '../Component Style/Pathbox.css'
import '../Component Style/Background.css'
import '../Component Style/Borders.css'

export default function Pathbox(props) {
    return (
        <div className={`pathbox bg-${props.theme}${props.isSafe===true ? ' safe_star' : ''}`}>
            
        </div>
    )
}
