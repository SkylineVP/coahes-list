import React, {Component} from "react";
import style              from "./styles.module.scss"

function SelectedCoach(props) {
    const {coaches} = props;
    return (
        <div className={style.block}>
            <div className={style.to}>To:</div>
            <p className={style.family}>{coaches.map((coach) => `${coach.firstName} ${coach.lastName}`).join(', ')}</p>
        </div>
    );
}

export default SelectedCoach