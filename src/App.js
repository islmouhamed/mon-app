// Import React
import React from "react";

// Import Bootstrap
import { Nav, Navbar, Container, Row, Col }
		from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";

// Import Custom CSS
import "./App.css";

// Import from react-router-dom
import { BrowserRouter as Router, Switch,
	Route, Link } from "react-router-dom";

// Import other React Component
import CreateSalarier from
	"./Components/create-salarier.component";
import EditSalarier from
	"./Components/edit-salarier.component";
import SalarierList from
	"./Components/salarier-list.component";

// App Component
const App = () => {
return (
	<Router>
	<div className="App">
		
		<Navbar bg="dark" variant="dark">
			<Container>
			<Navbar.Brand>
				<a href="/createsalarier"
				className="nav-link">
				React salarier APP
				</a>
			</Navbar.Brand>

			<Nav className="justify-content-end">
				<Nav>
				<a href="/createsalarier"
					className="nav-link">
					Crée salarier
				</a>
				</Nav>

				<Nav>
				<a href="/salarierlist"
					className="nav-link">
					liste des salariers 
				</a>
				</Nav>
			</Nav>
			</Container>
		</Navbar>
		
		<Container>
		<Row>
			<Col md={12}>
			<div className="wrapper">
				<Switch>
				
				<Route path="/createsalarier"
					 ><CreateSalarier /></Route >
				<Route path="/editsalarier/:id"  
					><EditSalarier /></Route >
					<Route  path="/salarierlist"
					 ><SalarierList /></Route >
				
				</Switch>
			</div>
			</Col>
		</Row>
		</Container>
	</div>
	</Router>
);
};

export default App;
