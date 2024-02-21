import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './style.css';

import { BsFacebook, BsLinkedin, BsTwitter, BsStackOverflow, BsGoogle, BsGithub, BsYoutube } from "react-icons/bs";
const FooterComponent = ()=>{
    
    return (
        <>
            <footer className='myFooter'>
                <Container>
                   <Row>
                        <Col className=''>
                            
                            <ul className='socialIconsList'>
                                <li>
                                    <a rel="noreferrer" href="" target="_blank">
                                        <BsFacebook />
                                    </a>
                                </li>
                                <li>
                                    <a rel="noreferrer" href="https://www.linkedin.com/in/mohamed-ennaem-000597227/" target="_blank">
                                        <BsLinkedin />
                                    </a>
                                </li>
                                <li>
                                    <a rel="noreferrer" href="" target="_blank">
                                        <BsTwitter />
                                    </a>
                                </li>
                                
                                
                                <li>
                                    <a rel="noreferrer" href="https://github.com/mohamedennaema" target="_blank">
                                        <BsGithub />
                                    </a>
                                </li>
                               
                            </ul>
                            
                        </Col>
                        <Col className='col-12'>
                            <div className="footerCopyright">
                                <small>©  Developed and Designed  by <a href="https://www.linkedin.com/in/mohamed-ennaem-000597227/" target="_blank" rel="noreferrer">ENNAEM Mohamed</a>.</small>
                            </div>
                        </Col>
                   </Row>
                </Container>
            </footer>
        </>
    )
}

export default FooterComponent;