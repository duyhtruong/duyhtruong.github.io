import React from 'react';
import RenderColumns from './RenderColumns';

import Badge from 'react-bootstrap/Badge';
import ProjectButton from './ProjectButton';

class GoldenHour extends React.Component{



	renderBadge(){
		return(
				<div>
					
					<Badge variant="dark">JavaScript</Badge>
					{' '}
					<Badge variant="dark">HTML</Badge>
					{' '}
					<Badge variant="dark">CSS</Badge>
				
				</div>
		);
	}


	renderBlog(){
		return(
			<div>
				
				<img alt='post' className='mockupImage' src={require('../assets/golden-hour/mockup_golden.png')} /> 
				<h1>Golden Hour</h1>	
				{this.renderBadge()}
				
				<ProjectButton live='https://www.bit.ly/2PEx0jT' repo='https://www.bit.ly/2zjpn8l' />







				<div className='innerColumnRight'>
					<p>
					In photography, 'Golden Hour' is the period of time just after the sun rises and sets over the horizon. 
					Photographers love this time of day due to the diffused and even light, with reduced shadows and warm hues. 
					</p>
					<p>
						This minimal web app was created as a tool to help photographers take advantage of this lighting. The web
						app takes in a location as an input and returns the time the sun will rise and set in the location's local time.
					</p>
					<p>
						Sun rising and setting data was fetched from the sunrise-sunset API. Local time calculations were completed
						using Google Timezone API.
					</p>
				<img alt='post' src={require('../assets/golden-hour/body2_golden.png')} /> 
				<img alt='post' src={require('../assets/golden-hour/body_golden.png')} /> 
					<p>
						<strong>To Use:</strong>
					</p>					
					<ul>
						<li>Enter location in the search bar</li>
						<li>Click enter</li>
					</ul>

				</div>






			</div>
		);
	}



	

	render(){
		return(
			<div>
				<RenderColumns right={this.renderBlog()} />
			</div>
		)
	}
}

export default GoldenHour;