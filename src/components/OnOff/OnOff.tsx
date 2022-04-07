import React from 'react';
import classes from "./OnOff.module.css";

type OnOffPropsType = {
    value:boolean
}

const OnOff = (props:OnOffPropsType) => {
    return (
        <div className={classes.onOff}>
            <div className={`${classes.button} ${props.value && classes.bg__green}`}>
                On
            </div>
            <div className={`${classes.button} ${!props.value && classes.bg__red}`}>
                Off
            </div>
            <div className={`${classes.lamp} ${props.value && classes.bg__green} ${!props.value && classes.bg__red}`}></div>
        </div>
    )
};




export default OnOff;