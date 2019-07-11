import React from 'react'
import ReactPlayer from 'react-player';

export default function Media(props) {
	return (
		<div className="media-container">
			{props.nasaData.media_type === "image" ? <img src={props.nasaData.url} alt="Nasa picture of the day" /> :
				<ReactPlayer
					url={`${props.nasaData.url}`}
					width="720px"
					height="480px"
					controls
				/>
			}
		</div>
	)
}
