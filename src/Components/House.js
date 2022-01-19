import React from 'react'
import '../Component Style/House.css'
import '../Component Style/Background.css'

export default function House(props) {
    return (
        <div className={`outerbox bd-all  bg-${props.theme}`}>
            <div className='innerbox bg-light'>
                <div id="box-1" className={`pawnbox bg-${props.theme}`}></div>
                <div id="box-2" className={`pawnbox bg-${props.theme}`}></div>
                <div id="box-3" className={`pawnbox bg-${props.theme}`}></div>
                <div id="box-4" className={`pawnbox bg-${props.theme}`}></div>
            </div>
        </div>
    )
}
