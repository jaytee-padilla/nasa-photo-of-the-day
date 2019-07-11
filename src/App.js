import React, {useState, useEffect} from "react";
import "./App.css";
import axios from 'axios';
import Media from './components/Media';
import Explanation from './components/Explanation';
import Date from './components/Date';
import Title from './components/Title';
import {Header, Grid} from 'semantic-ui-react';

function App() {
	const [nasaData, setNasaData] = useState([]);

	useEffect(() => {
		axios.get('https://api.nasa.gov/planetary/apod?api_key=n1kEXaCCr6ByD3hfttovDmmwfIN9MYNlXQheGUgT')
		.then(res => setNasaData(res.data))
		.catch(error => console.log(error));
	}, [])

  return (
    <div className="App">
			<Grid divided relaxed="very" style={{height: "100vh", margin: "0"}}>
				<Grid.Row verticalAlign="middle">
					<Grid.Column width={8}>
						<Grid.Row stretched>
							<Header as="h1">Nasa Picture/Video of The Day</Header>
							<Date nasaData={nasaData} />
							<Title nasaData={nasaData} />
							<Explanation nasaData={nasaData} />
						</Grid.Row>
					</Grid.Column>

					<Grid.Column width={8}>
						<Media nasaData={nasaData} />
					</Grid.Column>
				</Grid.Row>
			</Grid>
    </div>
  );
}

export default App;
