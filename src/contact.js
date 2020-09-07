import React from 'react';
import { blogList }from './blogData'

class Contact extends React.Component {

    contactMe(event) {
        window.open(event.target.getAttribute('data-link'))
    }

    render() {
        return(
            <div className="contact-container" id="section1">
                <div className="about-title">
                    <h1 className="about-header">CONTACT</h1>
                    <div className="about-bar"></div>
                </div>
                    <div className="contact">
                        <div className="contact-info">
                            <p>
                                <i class="fas fa-map-marker-alt"></i>
                                 Address: Washington, DC 20002
                            </p>
                            <p>
                                <i class="fas fa-envelope"></i>
                                Email: khaledhassan45@gmail.com
                            </p>
                            <p>
                            <i class="fas fa-phone-alt"></i>
                                Phone: (301) 760-6900
                            </p>
                            {/* <div className="info">
                                <img className="info-pics" src={require('./assets/location-pin.svg')} />
                                <p>Address: Washington, DC 20002</p>
                            </div>
                            <div className="info">
                                <img className="info-pics" src={require('./assets/email.svg')} />
                                <p>Email: khaledhassan45@gmail.com</p>
                            </div>
                            <div className="info">
                                <img className="info-pics" src={require('./assets/phone.svg')}/>
                                <p>Phone: 301-760-6900</p>
                            </div> */}
                        </div>
                        <div className="faw-icons">

                        <i class="fab fa-github-square fa-5x" data-link="https://github.com/kh45" onClick={this.contactMe}></i>
                        <i class="fab fa-medium fa-5x" data-link="https://medium.com/@khaledhassan45" onClick={this.contactMe}></i>
                        <i class="fab fa-linkedin fa-5x" data-link="https://www.linkedin.com/in/khassan45/" onClick={this.contactMe}></i>
                    </div>
                    </div>
                    

            </div>
        )
    }
}

export default Contact