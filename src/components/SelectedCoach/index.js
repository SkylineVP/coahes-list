import React, {Component} from "react";
import style              from "./styles.module.scss"

class SelectedCoach extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (<div className={style.block}>
                <div className={style.to}>To:</div>
                <p className={style.family}>{this.props.coaches.map((coach) => `${coach.firstName} ${coach.lastName}`).join(', ')}</p>
            </div>
        );
    }

}

export default SelectedCoach