import React from 'react'
import House from './House'
import '../Component Style/Board.css'
import Path from './Path'
import Center from './Center'
import '../Component Style/Borders.css'

export default function Board() {
    return (
        <div className='board'>
            <House theme='red'/>
            <Path type='v' pos='t' theme='green'/>
            <House theme='green'/>
            <Path type='h' pos='l' theme='red'/>
            <Center />
            <Path type='h' pos='r' theme='yellow'/>
            <House theme='blue'/>
            <Path type='v' pos='b' theme='blue'/>
            <House theme='yellow'/>
        </div>
    )
}
