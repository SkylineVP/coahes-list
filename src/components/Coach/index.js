import React, {Component} from "react";
import styles             from "./coache.module.scss"
import UserAvatar         from '../UserAvatar'
import Icon               from '@mdi/react';
import {mdiCheck}         from '@mdi/js';

const classNames = require('classnames');

function Coach(props) {
    const {coach, onSelectButtonClick, id} = props;


    const onClickHandler = () => {
        onSelectButtonClick(id);
    };


    const select = (<div className={classNames(styles.selectedButton, {[styles.onSelect]: coach.isSelected})}>
        <Icon path={mdiCheck}
              size={0.8}
              color='white'
        />
        {/* <img src='https://marvelapp.com/static/select-property.b3f39f6dd76ceacc66bb3ac6f05879da.svg' alt='select'/>*/}
    </div>);

    return (
        <li className={styles.listItem} onClick={onClickHandler}>
            <UserAvatar coach={coach}/>
            <div className={styles.info}>
                <p className={styles.name}>{coach.firstName} {coach.lastName}</p>
                <p className={styles.level}>Level {coach.level}</p>
            </div>
            {select}
        </li>
    );

}

export default Coach;