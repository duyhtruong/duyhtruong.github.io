import React from 'react';
import { Link } from 'react-router-dom';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { LinkContainer } from 'react-router-bootstrap';

import pdf from '../assets/DuyTruongResume2019.pdf';
class Navigation extends React.Component{
	
	renderNav(){
		return(
		<ul>
			<li><Link to='/'>Home</Link></li>
			<li><Link to ='/projects'>Projects</Link></li>
			<li><Link to ='https://www.linkedin.com/in/duy-truong-3224a6119'>LinkedIn</Link></li>
			<li><Link to ='https://github.com/duyhtruong'>Github</Link></li>	
			<li><Link to ='mailto:duytruongh@gmail.com'>Email</Link></li>	
			<li>Resume</li>			
		</ul>
		);
	}

	renderBootNav(){
		return(
			<div>
			<div className='d-none d-md-block'>
				<Navbar fixed='top'>
				<Navbar.Toggle aria-controls="responsive-navbar-nav" />
				<Navbar.Collapse id="responsive-navbar-nav">
				<Nav as="ul" className='flex-column navColor'>
					  
					    <LinkContainer  to="/"><Nav.Item className='navLink' as ="li">Home</Nav.Item></LinkContainer>
					
					  
					    <LinkContainer to='/projects/'><Nav.Item className='navLink' as="li">Projects </Nav.Item></LinkContainer>
					   	 

					  	<Nav.Item as="li">
					  		<Nav.Link target="_blank" href='https://www.linkedin.com/in/duy-truong-3224a6119'>LinkedIn</Nav.Link>
					  	</Nav.Item>
					
					 
					    <Nav.Item as="li">
					  		<Nav.Link target="_blank" href='https://github.com/duyhtruong'>Github</Nav.Link>
					  	</Nav.Item>
					
					
					    <Nav.Item as="li">
					  		<Nav.Link target="_blank" href='mailto:duytruongh@gmail.com'>Email</Nav.Link>
					  	</Nav.Item>
					 
					
					    <Nav.Item as="li">
					  		<Nav.Link target="_blank" href={pdf}>Resume</Nav.Link>
					  	</Nav.Item>
					
				</Nav>
				</Navbar.Collapse>
				</Navbar>
			</div>
			
			<div className='d-block d-md-none'>
				<Navbar expand='md'>
				<Navbar.Toggle aria-controls="responsive-navbar-nav" />
				<Navbar.Collapse id="responsive-navbar-nav">
				<Nav as="ul" className='flex-column navColor'>
					  
					    <LinkContainer to="/"><Nav.Item as="li">Home </Nav.Item></LinkContainer>
					 
					
					    <LinkContainer to='/projects'><Nav.Item as="li">Projects </Nav.Item></LinkContainer>
					
					  	<Nav.Item as="li">
					  		<Nav.Link target="_blank" href='https://www.linkedin.com/in/duy-truong-3224a6119'>LinkedIn</Nav.Link>
					  	</Nav.Item>
					
					 
					    <Nav.Item as="li">
					  		<Nav.Link target="_blank" href='https://github.com/duyhtruong'>Github</Nav.Link>
					  	</Nav.Item>
					
					
					    <Nav.Item as="li">
					  		<Nav.Link target="_blank" href='mailto:duytruongh@gmail.com'>Email</Nav.Link>
					  	</Nav.Item>
					 
					
					    <Nav.Item as="li">
					  		<Nav.Link target="_blank" href={pdf}>Resume</Nav.Link>
					  	</Nav.Item>
					 
				</Nav>
				</Navbar.Collapse>
				</Navbar>
			</div>
			</div>
		)
	}


	render(){
		return (
			<div className='navBody'>
			
			 	{this.renderBootNav()}
			 </div>
		);
	}
}

export default Navigation;