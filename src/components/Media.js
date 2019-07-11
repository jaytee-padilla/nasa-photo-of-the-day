import React from 'react'
import ReactPlayer from 'react-player';
import {Image} from 'semantic-ui-react';

export default function Media(props) {
	return (
		<div className="media-container">
			{/* {props.nasaData.media_type === "image" ? <img src={props.nasaData.hdurl} alt="Nasa picture of the day" /> :
				<ReactPlayer
					url={`${props.nasaData.url}`}
					width="720px"
					height="480px"
					controls
				/>
			} */}
			<Image src="https://api.nasa.gov/images/apod.jpg" size="massive" />
		</div>
	)
}
