import './App.scss';
import Home from './pages/home/home';
import Footer from "./components/footer/footer";
import Nav from "./components/nav/nav"; 
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Prices from './pages/prices/prices';

const App = () => {
	return (
		<Router>
			<div className = "px-0 m-0 d-flex flex-column justify-content-start app-container"> 
				<Nav/>
				<div className="App">
				<Switch>
					<Route path="/prices">
						<Prices/>
					</Route>
					<Route path="/">
						<Home/>
					</Route>
				</Switch>
				</div>
				<div className = "p-0 m-0 d-flex flex-column justify-content-end flex-grow-1 align-items-center"> 
					<Footer/> 
				</div>
			</div> 
		</Router>
	);
}

export default App;
