import React from 'react';
import Navigation from './Navigation'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


class RenderColumns extends React.Component{
	
	render(props){
		return(
			<Container fluid={true}>
				<Row noGutters={true}>
					<Col md={2} className='columnLeft'> <Navigation /> </Col>
					<Col md={7}> <div className='columnRight'> {this.props.right} </div> </Col>
				</Row>
			</Container>
		);
	}
}

export default RenderColumns;