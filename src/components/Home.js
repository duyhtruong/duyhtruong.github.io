import React from 'react';
import RenderColumns from './RenderColumns';
import Projects from './Projects';

class Home extends React.Component{
	

	renderHome(){
		return(
			<div>
			<div className='homeBody'>
				<h1>Duy Truong</h1>
				<p> 
					I studied Biomolecular Engineering at the University of California, Santa Cruz. 
					I work in Research and Development at a Biotech start-up in Palo Alto.
					<br/>
					<br />
					I write code in HTML, CSS, JavaScript, jQuery, Bootstrap, React, and Redux. 
					I design with Photoshop.
					<br />
					<br />
					Currently looking for opportunities in Web Development.
				</p>
			</div>
			<Projects />
			</div>
		);
	}

	render(){

		return(
			<div>
			 	<RenderColumns right={this.renderHome()} />
			 </div>
		);
	}
}

export default Home;