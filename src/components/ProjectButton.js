import React from 'react';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import Button  from 'react-bootstrap/Button'; 


class ProjectButton extends React.Component{
	
	render(props){
		return (
			<div>
				<ButtonToolbar className='projectLinks'>
	    			
	    			<Button target='_blank' href={this.props.live} variant="primary" size="sm">
	      			Live Demo
	    			</Button>
	    			{' '}
	    		
	    			<Button target='_blank' href={this.props.repo} variant="danger" size="sm">
	      			Repository
	    			</Button>
	    			
	  			</ButtonToolbar>
			</div>
		);
	}
}

export default ProjectButton;