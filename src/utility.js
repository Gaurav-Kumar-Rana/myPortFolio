
//Utility Library
import React, {Component} from 'react';

//Profile pic component
export const Pic = (props) => {
    return(
        <img src={props.picURL} className="round-shape"/>
    )
}