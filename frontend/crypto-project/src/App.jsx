import './App.scss';
import Home from './pages/home/home';
import Footer from "./components/footer/footer";
import Nav from "./components/nav/nav"; 

const App = () => {
	return (
		<div className = "px-0 m-0 d-flex flex-column justify-content-start app-container"> 
			<Nav/>
			<div className="App">
				<Home/>
			</div>
			<div className = "px-0 m-0 d-flex flex-column justify-content-end flex-grow-1 align-items-center"> 
				<Footer/> 
			</div>
		</div> 
	);
}

export default App;
