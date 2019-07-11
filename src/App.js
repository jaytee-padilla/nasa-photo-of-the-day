import React, {useState, useEffect} from "react";
import "./App.css";
import axios from 'axios';
import Media from './components/Media';
import Explanation from './components/Explanation';
import Date from './components/Date';
import Title from './components/Title';

function App() {
	const [nasaData, setNasaData] = useState([]);

	useEffect(() => {
		axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
		.then(res => setNasaData(res.data))
		.catch(error => console.log(error));
	}, [])

  return (
    <div className="App">
			<h1>Nasa Picture/Video of The Day</h1>
			<Date nasaData={nasaData} />
			<Title nasaData={nasaData} />
			<Explanation nasaData={nasaData} />
			<Media nasaData={nasaData} />
    </div>
  );
}

export default App;
