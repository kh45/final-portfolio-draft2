import React from 'react';
import profilePic from './assets/IMG_2497.JPG'
import WOW from 'wowjs'

class About extends React.Component {

    componentDidMount() {
        new WOW.WOW().init()
    }

    render() {

        const filePath = './assets/logos'
        return(
            <div className="about-container" id="about">
                <div className="about-title">
                    <h1 className="about-header wow animate__animated animate__fadeInLeft" data-wow-offset="300">ABOUT</h1>
                    <div className="about-bar wow animate__animated animate__fadeInRight" data-wow-offset="350"></div>
                </div>
                <div className="about-content">
                    <div className="holder">
                        <img src={profilePic} className="profpic wow animate__animated animate__fadeInLeft" data-wow-offset="500" alt="" />
                        <div className="caption wow animate__animated animate__fadeInLeft" data-wow-offset="300">
                            <h3 className="lemmesee">Who's this guy?</h3>
                            <p className="lemmesee">I'm a Full Stack Web Developer based in Washington D.C. When I'm not learning new frameworks you can catch me watching Liverpool FC or playing pickup basketball.</p>
                        </div>
                    </div>
                    <div className="jimmybuckets">
                        <h3 className="about-sub-headers lemmesee wow animate__animated animate__fadeInRight" data-wow-offset="500">My Story</h3>
                        <p className="lemmesee wow animate__animated animate__fadeInRight" data-wow-offset="500">
                        I graduated from the University of Maryland in 2016 with a degree in Mechanical Engineering and went on to work at NASA for 2.5 years. There I realized that coding is what I truly enjoy so I quit to attend Flatiron School Coding Bootcamp. I have a serious passion for learning new technologies and creating sleek, user-friendly, fast web applications.
                        </p>
                        <h3 className="about-sub-headers wow animate__animated animate__fadeInRight" data-wow-offset="400">SKILLS</h3>
                        <div className="skills">
                            <div className="typeSkills wow animate__animated animate__fadeInUp" data-wow-offset="300">
                                <h5 className="skills-heading lemmesee">FRONT-END</h5>
                                <div>
                                    <img className="devIcon" alt="" src={require(`${filePath}/react.svg`)} />
                                    <p>React</p>
                                </div>
                                <div>
                                    <img className="devIcon" alt="" src={require(`${filePath}/redux.svg`)} />
                                    <p>Redux</p>
                                </div>
                                <div>
                                    <img className="devIcon" alt="" src={require(`${filePath}/javascript.svg`)} />
                                    <p>JavaScript</p>
                                </div>
                                <div>
                                    <img className="devIcon" alt="" src={require(`${filePath}/angular-icon-1.svg`)} />
                                    <p>Angular</p>
                                </div>
                            </div>
                            <div className="typeSkills wow animate__animated animate__fadeInUp" data-wow-offset="300" data-wow-delay="0.5s">
                                <h5 className="skills-heading">BACK-END</h5>
                                <div>
                                    <img className="devIcon" alt="" src={require(`${filePath}/nodejs.svg`)} />
                                    <p>NodeJS</p>
                                </div>
                                <div>
                                    <img className="devIcon" alt="" src={require(`${filePath}/ruby.svg`)} />
                                    <p>Ruby/Rails</p>
                                </div>
                                <div>
                                    <img className="devIcon" alt="" src={require(`${filePath}/postgresql.svg`)} />
                                    <p>PostgreSQL</p>
                                </div>
                                <div>
                                    <img className="devIcon" alt="" src={require(`${filePath}/python.svg`)} />
                                    <p>Python</p>
                                </div>
                            </div>
                            <div className="typeSkills wow animate__animated animate__fadeInUp" data-wow-offset="300" data-wow-delay="1s">
                                <h5 className="skills-heading">TOOLS</h5>
                                <div>
                                    <img className="devIcon" alt="" src={require(`${filePath}/github.svg`)} />
                                    <p>GitHub</p>
                                </div>
                                <div>
                                    <img className="devIcon" alt="" src={require(`${filePath}/AWS.svg`)} />
                                    <p>AWS</p>
                                </div>
                                <div>
                                    <img className="devIcon" alt="" src={require(`${filePath}/visualstudio.svg`)} />
                                    <p>VisualStudio</p>
                                </div>
                                <div>
                                    <img className="devIcon" alt="" src={require(`${filePath}/typescript.svg`)} />
                                    <p>TypeScript</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
            </div>
        )
    }
}

export default About