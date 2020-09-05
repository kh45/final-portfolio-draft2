import React from 'react';
import { blogList }from './blogData'

class Contact extends React.Component {

    render() {
        return(
            <div className="contact-container" id="section1">
                <div className="about-title">
                    <h1 className="about-header">CONTACT</h1>
                    <div className="about-bar"></div>
                </div>
                    <div className="contact">
                        {this.createBlogs()}
                    </div>

            </div>
        )
    }
}

export default Contact