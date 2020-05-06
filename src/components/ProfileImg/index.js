import React, { Component } from 'react';
import './styles.scss'

class ProfileImage extends Component {
    render() {

        const {image} = this.props

        return (
            <div>
                <img className="profileimage" src={image} />
            </div>
        );
    }
}

export default ProfileImage;