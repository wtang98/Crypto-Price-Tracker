import './App.scss';
import Home from './pages/home/home';
import Footer from "./components/footer/footer";
import Nav from "./components/nav/nav"; 
import { useEffect } from 'react';
import {BrowserRouter, Routes, Route, Link} from "react-router-dom";
import Prices from './pages/prices/prices';
import Login from './pages/login/login';
import { useStateValue } from './jses/stateprovider';
import { auth } from './jses/firebase';
const App = () => {

	const[{basket, user}, dispatch] = useStateValue();

	useEffect(()=> {
		 //always listening if login then this refires on logout also refires
		auth.onAuthStateChanged(authUser => {
			console.log('USER is >>> ', authUser); //good for debugging
			if(authUser){ //user just logged in/ already logged in 
				dispatch({
					type: 'SET_USER',
					user: authUser
				})
			}else{ //user logged out
				dispatch({
					type: 'SET_USER',
					user: null
				})
			}
		})
	}, [])

	return (
		<BrowserRouter>
			<div className = "px-0 m-0 d-flex flex-column justify-content-start app"> 
				<Routes>
					<Route path="/prices" element={[<Nav prices={true}/>,<Prices/>]}/>
					<Route path="/login" element={[<Nav login={true}/>, <Login/>]}/>
					<Route path="/" element={[<Nav home={true} />,<Home/>]}/>
				</Routes>
				<div className = "p-0 m-0 d-flex flex-column justify-content-end flex-grow-1 align-items-center"> 
					<Footer/> 
				</div>
			</div> 
		</BrowserRouter>
	);
}

export default App;
