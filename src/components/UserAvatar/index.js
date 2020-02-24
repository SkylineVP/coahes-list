import React, {Component} from "react";
import style              from './UserAvatar.module.scss'

let hex = require('text-hex');

class UserAvatar extends Component {
    constructor(props) {
        super(props);
        this.state = {error: null}
    }

    onErrorHandler = () => {
        this.setState({error: true})
    };

    render() {
        const {coach: {picture, firstName, lastName}} = this.props;

        const userAvatar = <img src={picture} onError={this.onErrorHandler} alt={firstName[0] + lastName[0]}/>;

        return <div className={style.pictureAvatar}
                    style={{
                        background: `radial-gradient(90% 90%,${hex(firstName + lastName)},#999999)`
                    }}>
            {(this.state.error || !picture)
             ?
             firstName[0] + lastName[0]
             :
             userAvatar
            }
        </div>

    }
}

export default UserAvatar;