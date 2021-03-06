import React from 'react'
import { Modal } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel'

class MyModal extends React.Component {

    // createSlides = () => {
    //     return this.props.project.pictures.map(picture => <Carousel.Item>
    //         <img className="d-block w-100" src={require(`${this.props.project.img1}`)} alt="First slide"/>
    //     <Carousel.Caption>
    //     <h3>First slide label</h3>
    //     <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    //     </Carousel.Caption>
    //     </Carousel.Item>)
    // }

    createSkills(project) {
        return project.skills.join(" | ")
    }
    
    handleLinkClick = (event) => {
        window.open(event.target.parentNode.getAttribute('data-link'))
    }

    createButtons = (project) => {
        return project.buttons.map(button => <div className={`modal-button-div ${button.fixer}`} data-link={button.link}>
            <img className="modal-button modal-button-link" src={require(`${button.image}`)} onClick={this.handleLinkClick} />
            <p className="modal-button-link" onClick={this.handleLinkClick}>{button.name}</p>
            </div>)
    }

    createSlides = (project) => {
        return project.slides.map(slide => <Carousel.Item>
            <img className="d-block w-100" src={require(`${slide.image}`)} alt="First slide"/>
        <Carousel.Caption>
        <h3 className="caro-text">{slide.bigCaption}</h3>
        <p className="caro-text">{slide.littleCaption}</p>
        </Carousel.Caption>
        </Carousel.Item>)
    }

    render() {
        return(
            <Modal show={this.props.showModal} size="lg" onHide={this.props.handleHideParent} dialogClassName="hey">
                <Modal.Header className="screenshot">
                    <Carousel autoPlay={true} interval={2500}>
                        {/* <Carousel.Item>
                            <img className="d-block w-100" src={require(`${this.props.project.img1}`)} alt="First slide"/>
                        <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img className="d-block w-100" src={require('./assets/SportsScraper.png')} alt="Third slide"/>
                            <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img className="d-block w-100" src={require('./assets/SportsScraper.png')} alt="Third slide"/>

                        <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item> */}
  {this.createSlides(this.props.project)}
</Carousel>
                </Modal.Header>
                <Modal.Body className="custom-modal-body">
                    <div>
                        <h3 style={{'font-style': 'italic'}}>{this.props.project.title}</h3>
                        {/* <h5>React | Redux | Rails | Bootstrap</h5> */}
                        <h5>{this.createSkills(this.props.project)}</h5>
                        <p className="short-desc">{this.props.project.shortDescription}</p>
                        <p>{this.props.project.technicalDescription}</p>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <div className="modal-foot-buttons">{this.createButtons(this.props.project)}</div>
                    <button class="btn btn-primary close-button" onClick={this.props.handleHideParent}>Close</button>
                    </Modal.Footer>
            </Modal>
        )
    }
}

export default MyModal