import './App.scss';
import Home from './pages/home/home';
import Footer from "./components/footer/footer";
import Nav from "./components/nav/nav"; 

import {BrowserRouter, Routes, Route, Link} from "react-router-dom";
import Prices from './pages/prices/prices';

const App = () => {
	return (
		<BrowserRouter>
			<div className = "px-0 m-0 d-flex flex-column justify-content-start app-container"> 
				{/* <div className="App"> */}
				<Routes>
					<Route path="/prices" element={[<Nav prices={true}/>,<Prices/>]}/>
					<Route path="/" element={[<Nav home={true} />,<Home/>]}/>
				</Routes>
				{/* </div> */}
				<div className = "p-0 m-0 d-flex flex-column justify-content-end flex-grow-1 align-items-center"> 
					<Footer/> 
				</div>
			</div> 
		</BrowserRouter>
	);
}

export default App;
