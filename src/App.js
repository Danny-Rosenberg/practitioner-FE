import React, {Component} from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home    from './components/Home';
import Navbar  from './components/Navbar';
import About   from './components/About';
import Contact from './components/Contact';
import LogIn 	 from './components/LogIn';


class App extends Component {

	render() {
		return (
			<BrowserRouter>
				<div className="App">
					<Navbar />
					<Route exact path='/' component={Home} />
					<Route path='/contact' component={Contact} />
					<Route path='/about' component={About} />
				  <Route path='/login' component={LogIn} />
				</div>
			</BrowserRouter>
		);
	}
}

export default App;
