import React, { Component } from 'react';
import s from './ProfileStatus.module.css'

class ProfileStatus extends Component {
    
    state = {
        editMode: false,
        textStatus:this.props.status
    }
    componentDidUpdate(prevProps,prevState){

        if(prevProps.status!== this.props.status){
            this.setState({
                textStatus: this.props.status
            })
        }
    }
    componentDidMount() {
        // this.props.updateStatus(this.state.textStatus)
        this.props.getMyStatus(this.props.myUserId)
    }
    updateTextStatus=(text)=>{
        this.setState({
            textStatus: text
        })
        // this.props.updateStatus(text)
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
        this.props.updateStatus(this.state.textStatus)

    }
    render() {
        // this.props.getMyStatus(this.props.myUserId)
        return (
            <div>
                {this.state.editMode ?
                (<input onChange={ e=>this.updateTextStatus(e.target.value)} onBlur={this.deActiveteEditMode} autoFocus={true} value={this.state.textStatus} />)
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

