import React, { Component } from 'react';
import s from './ProfileStatus.module.css'
import { Field } from 'redux-form';
import { Input } from '../../../common/FromControls/FromControls';
import { maxLength, } from '../../../../utils/validators/validators';

const maxLength20 = maxLength(20)


class ProfileStatus extends Component {


    componentDidUpdate(prevProps, prevState) {
        if (prevProps.status !== this.props.status) {
            this.setState({
                textStatus: this.props.status
            })
        }
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
                        <Field
                            validate={[maxLength20]}
                            onBlur={this.deActiveteEditMode}
                            autoFocus={true}
                            placeholder='Text'
                            name={'statusText'}
                            component={Input} />
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

