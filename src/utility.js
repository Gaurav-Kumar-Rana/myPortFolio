
//Utility Library
import React, {Component} from 'react';
import Tooltip from '@material-ui/core/Tooltip';

function stringTrim(string){
    return string.split(' ').join('');
}

//Profile pic component
export const Pic = (props) => {
    return(
        <img src={props.picURL} className="round-shape fullWidth"/>
    )
};

export const FooterIcon = (props) => {
    return(
        <Tooltip title={props.title}>
            <a href={props.url} target="blank">
                <i className={"footer-icon " + stringTrim(props.type)}></i>
            </a>
        </Tooltip>
    )
}

export const FullYear = () =>{
    let fullYear = new Date();
    return (
        <span>{""+ fullYear.getFullYear()+""}</span>
    )
}