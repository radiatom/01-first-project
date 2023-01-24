import React, { Component } from 'react';
import s from './ProfileStatus.module.css'

class ProfileStatus extends Component {
    state = {
        editMode: false
    }
    activeteEditMode = () => {
        this.setState({
            editMode: true
        })
    }
    deActiveteEditMode = () => {
        this.setState({
            editMode: false
        })
    }
    render() {
        return (
            <div>
                {this.state.editMode ?
                    (<textarea onBlur={this.deActiveteEditMode} autoFocus={true} cols="30" rows="1">
                        {this.props.status}
                    </textarea>) :
                    (<div className={s.status}>
                        <span onClick={this.activeteEditMode} >
                            <h3>
                                {this.props.status}
                            </h3>
                        </span>
                    </div>)}
            </div>
        );
    }
}

export default ProfileStatus;

