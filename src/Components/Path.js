import React from 'react';
import Pathbox from './Pathbox';
import '../Component Style/Path.css';
import '../Component Style/Borders.css';

export default function Path(props) {
    console.log(props.theme);
    if (props.pos === 't') {
        return (
            <div className={`path ${props.type === 'h' ? 'wd-40 ht-20 grid-col-6' : 'wd-20 ht-40 grid-col-3'}`}>
                <Pathbox></Pathbox>
                <Pathbox></Pathbox>
                <Pathbox></Pathbox>
                <Pathbox></Pathbox>
                <Pathbox theme={props.theme}></Pathbox>
                <Pathbox theme={props.theme}></Pathbox>
                <Pathbox isSafe={true}></Pathbox>
                <Pathbox theme={props.theme}></Pathbox>
                <Pathbox></Pathbox>
                <Pathbox></Pathbox>
                <Pathbox theme={props.theme}></Pathbox>
                <Pathbox></Pathbox>
                <Pathbox></Pathbox>
                <Pathbox theme={props.theme}></Pathbox>
                <Pathbox></Pathbox>
                <Pathbox></Pathbox>
                <Pathbox theme={props.theme}></Pathbox>
                <Pathbox></Pathbox>
            </div>
        )
    }
    else if(props.pos==='l')
    {
        return(
        <div className={`path ${props.type === 'h' ? 'wd-40 ht-20 grid-col-6' : 'wd-20 ht-40 grid-col-3'}`}>
                <Pathbox></Pathbox>
                <Pathbox theme={props.theme}></Pathbox>
                <Pathbox ></Pathbox>
                <Pathbox></Pathbox>
                <Pathbox></Pathbox>
                <Pathbox></Pathbox>
                <Pathbox></Pathbox>
                <Pathbox theme={props.theme}></Pathbox>
                <Pathbox theme={props.theme}></Pathbox>
                <Pathbox theme={props.theme}></Pathbox>
                <Pathbox theme={props.theme}></Pathbox>
                <Pathbox theme={props.theme}></Pathbox>
                <Pathbox></Pathbox>
                <Pathbox></Pathbox>
                <Pathbox isSafe={true}></Pathbox>
                <Pathbox></Pathbox>
                <Pathbox></Pathbox>
                <Pathbox></Pathbox>
            </div>)
    }
    else if(props.pos==='r')
    {
        return(
        <div className={`path ${props.type === 'h' ? 'wd-40 ht-20 grid-col-6' : 'wd-20 ht-40 grid-col-3'}`}>
                <Pathbox></Pathbox>
                <Pathbox></Pathbox>
                <Pathbox></Pathbox>
                <Pathbox isSafe={true}></Pathbox>
                <Pathbox></Pathbox>
                <Pathbox></Pathbox>
                <Pathbox theme={props.theme}></Pathbox>
                <Pathbox theme={props.theme}></Pathbox>
                <Pathbox theme={props.theme}></Pathbox>
                <Pathbox theme={props.theme}></Pathbox>
                <Pathbox theme={props.theme}></Pathbox>
                <Pathbox></Pathbox>
                <Pathbox></Pathbox>
                <Pathbox></Pathbox>
                <Pathbox></Pathbox>
                <Pathbox></Pathbox>
                <Pathbox theme={props.theme}></Pathbox>
                <Pathbox></Pathbox>
            </div>)
    }
    else
    {
        return(
        <div className={`path ${props.type === 'h' ? 'wd-40 ht-20 grid-col-6' : 'wd-20 ht-40 grid-col-3'}`}>
                <Pathbox></Pathbox>
                <Pathbox theme={props.theme}></Pathbox>
                <Pathbox></Pathbox>
                <Pathbox></Pathbox>
                <Pathbox theme={props.theme}></Pathbox>
                <Pathbox></Pathbox>
                <Pathbox></Pathbox>
                <Pathbox theme={props.theme}></Pathbox>
                <Pathbox></Pathbox>
                <Pathbox></Pathbox>
                <Pathbox theme={props.theme}></Pathbox>
                <Pathbox isSafe={true}></Pathbox>
                <Pathbox theme={props.theme}></Pathbox>
                <Pathbox theme={props.theme}></Pathbox>
                <Pathbox></Pathbox>
                <Pathbox></Pathbox>
                <Pathbox></Pathbox>
                <Pathbox></Pathbox>
            </div>)
    }
}
