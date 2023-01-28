import React, { Component } from 'react';
import s from './ProfileStatus.module.css'
import { Field } from 'redux-form';



class ProfileStatus extends Component {


    componentDidUpdate(prevProps, prevState) {
        if (prevProps.status !== this.props.status) {
            this.setState({
                textStatus: this.props.status
            })
        }
    }
    componentDidMount() {
        this.props.getMyStatus(this.props.myUserId)
    }


    state = {
        editMode: false,
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
        this.props.handleSubmit()

    }
    render() {
        return (
            <div>
                {this.state.editMode ?
                    (<form onSubmit={this.props.handleSubmit}>
                        <Field onBlur={this.deActiveteEditMode} autoFocus={true} value={this.state.textStatus} placeholder='Text' name={'statusText'} component={'input'} />
                    </form>)
                    :
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

