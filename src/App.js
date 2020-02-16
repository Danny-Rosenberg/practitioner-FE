import React, {Component} from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import TodaysList from './components/todaysList';
import LongtermList from './components/longtermList';
import Navbar from './components/Navbar';
import About from './components/About';
import Contact from './components/Contact';


class App extends Component {

	render() {
		return (
			<BrowserRouter>
				<div className="App">
					<Navbar />
					<Route exact path='/' component={TodaysList} />
					<Route path='/contact' component={Contact} />
					<Route path='/about' component={About} />
					
				</div>
			</BrowserRouter>
		);
	}
}

export default App;