import React, {useState, useEffect} from "react";
import "./App.css";
import axios from 'axios';
import ReactPlayer from 'react-player';

function App() {
	const [nasaData, setNasaData] = useState([]);
	console.log(nasaData);

	useEffect(() => {
		axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
		.then(res => setNasaData(res.data))
		.catch(error => console.log(error));
	}, [])

  return (
    <div className="App">
			<h1>Nasa Picture/Video of The Day</h1>
			<h3>{nasaData.date}</h3>
			<h2>{nasaData.title}</h2>
			<p>
				{nasaData.explanation}
			</p>

			<div className="media-container">
				{nasaData.media_type === "image" ? <img src={nasaData.url} alt="Nasa picture of the day" /> :
				<ReactPlayer
					url={`${nasaData.url}`}
					width="720px"
					height="480px"
					controls={true}
				/>}
			</div>
    </div>
  );
}

export default App;
