import React from 'react'
import { Link, Scroll, scrollTo } from 'react-scroll'
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap'

class Navbarz extends React.Component {


    handleClick() {
        window.open("https://drive.google.com/file/d/1rGVrVuMQUlFjLcqpTfCzbJ5PkIH3pP4C/view")
    }

    // makeResponsive(event) {
    //     event.target.parentNode.parentNode.classList.add('responsive')
    // }

    render() {
        return (
            <Navbar bg="light" expand="lg" className="navz sticky-top">
                {/* <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand> */}
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
      {/* <Nav.Link as='div'><Link activeClass="active" to="section1" spy={true} smooth={true} offset={-70} duration={500}>Section 1</Link></Nav.Link> */}
      <Link className="nav-item" activeClass="active" to="home" spy={true} smooth={true} offset={-70} duration={500}>Home</Link>
      <Link className="nav-item" activeClass="active" to="about" spy={true} smooth={true} offset={-70} duration={500}>About</Link>
      <Link className="nav-item" activeClass="active" to="projects" spy={true} smooth={true} offset={-70} duration={500}>Portfolio</Link>
      <Link className="nav-item" activeClass="active" to="blogs" spy={true} smooth={true} offset={-70} duration={500}>Blog</Link>
      <Link className="nav-item" activeClass="active" to="contact" spy={true} smooth={true} offset={-70} duration={500}>Contact</Link>
      
      {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown> */}
    </Nav>
    {/* <Form inline> */}
      <Button variant="outline-success" onClick={this.handleClick}>Résumé</Button>
    {/* </Form> */}
  </Navbar.Collapse>
</Navbar>
            // <nav className="nav" id="nav">
            //     <div className="nav-content">
            //         <ul className="nav-items">
            //             {/* <span className="first-nav"> */}
            //             <li className="nav-item"><Link activeClass="active" to="section1" spy={true} smooth={true} offset={-70} duration={500}>Home</Link></li>
            //             <li className="nav-item"><Link activeClass="active" to="section2" spy={true} smooth={true} duration={500}>About</Link></li>
            //             <li className="nav-item"><Link activeClass="active" to="section3" spy={true} smooth={true} duration={500}>Portfolio</Link></li>
            //             <li className="nav-item"><Link activeClass="active" to="section4" spy={true} smooth={true} duration={500}>Blog</Link></li>
            //             <li className="nav-item"><Link activeClass="active" to="section5" spy={true} smooth={true} duration={500}>Contact</Link></li>
            //             {/* </span> */}
            //             {/* <span className="resume"> */}
            //                 <li className="nav-item resume" onClick={this.handleClick}>Résumé</li>
            //                 {/* </span> */}
            //             <li className="nav-item bars">
            //                 <i class="fas fa-bars fa-3x" onClick={this.makeResponsive}></i>
            //             </li>
            //         </ul>
            //     </div>
            // </nav>
        )
    }
}

export default Navbarz