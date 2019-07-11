import React from 'react'
import {Header} from 'semantic-ui-react';

export default function Date(props) {
	return (
		<div>
			<Header as="h3">{props.nasaData.date}</Header>
		</div>
	)
}
