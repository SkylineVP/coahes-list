import React, {Component} from "react";
import styles             from './menu.module.scss'

class Menu extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (<section className={styles.menu}>
            <main>
                <div className={styles.cancel}>Cancel</div>
                <div className={styles.newMessage}> New Message</div>
                <div className={styles.done}>Done</div>
            </main>
        </section>);
    }

}

export default Menu;