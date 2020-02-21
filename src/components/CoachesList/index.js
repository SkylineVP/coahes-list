import React, {Component} from "react";
import Coach              from "../Coach";
import SelectedCoach      from "../SelectedCoach";

var lodash = require('lodash');

class CoachesList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            coaches: [
                {
                    id: "1",
                    firstName: "Brian",
                    lastName: "McCauley",
                    level: "1",
                    picture: "https://marvel-live.freetls.fastly.net/canvas/2018/7/b637481eb0374435843150483fbb5fe8?quality=95&fake=.png",
                    isSelected: false
                },
                {
                    id: "2",
                    firstName: "Chad",
                    lastName: "Hayes",
                    level: "2",
                    picture: "https://www.kinonews.ru/insimgs/persimg/persimg17772.jpg",
                    isSelected: false
                },
                {
                    id: "3",
                    firstName: "Jeff",
                    lastName: "Buck",
                    level: "2",
                    picture: "https://robling.io/content/uploads/2019/10/jbuck-500x587.jpg",
                    isSelected: false
                },
                {
                    id: "4",
                    firstName: "Kenny",
                    lastName: "Griffin",
                    level: "2",
                    picture: "https://i.pinimg.com/originals/97/e4/2a/97e42a82fc7911961d3ca55f54d1372c.jpg",
                    isSelected: false
                },
                {
                    id: "5",
                    firstName: "Tom",
                    lastName: "Glover",
                    level: "2",
                    picture: "https://dynamic.thoughtworks.com/profiles/profile_image_profile-original-ad77b22e01a9939f75a26f51f3a81ceb.jpeg",
                    isSelected: false
                },

            ],

        }
    }

    selectCoach = (id) => {
        id--;
        const coaches = lodash.clone(this.state.coaches);
        coaches[id].isSelected = !(coaches[id].isSelected);
        this.setState({
            coaches: coaches
        })
    };

    render() {
        const {coaches} = this.state;
        return <>
            <SelectedCoach coaches={coaches.filter((item) => item.isSelected)}/>
            <ul>
                {coaches.map((coach) => {
                    return <Coach key={coach.id} coach={coach} id={coach.id} onSelectButtonClick={this.selectCoach}/>
                })}
            </ul>
        </>;
    }

}

export default CoachesList;