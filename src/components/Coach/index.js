import React, {Component} from "react";
import styles             from "./coache.module.scss"

const classNames = require('classnames');

function Coach(props) {
    const {coach, onSelectButtonClick, id} = props;


    const onClickHandler = () => {
        onSelectButtonClick(id);
    };


    const select = (<div className={classNames(styles.unSelectedButton, {[styles.onSelect]: coach.isSelected})}
                         onClick={onClickHandler}>
        <img src='https://marvelapp.com/static/select-property.b3f39f6dd76ceacc66bb3ac6f05879da.svg' alt='select'/>
    </div>);

    return (
        <li className={styles.listitem}>
            <img src={coach.picture} alt=""/>
            <div className={styles.info}>
                <p className={styles.name}>{coach.firstName} {coach.lastName}</p>
                <p className={styles.level}>Level {coach.level}</p>
            </div>
            {select}
        </li>
    );

}

export default Coach;