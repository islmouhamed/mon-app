import React, { useState, useEffect } from "react";
import axios from "axios";
import { Table } from "react-bootstrap";
import SalarierTableRow from "./SalarierTableRow";


const SalarierList = () => {
const [search, setSearch] = React.useState('');

const handleSearch = (event) => {
	  setSearch(event.target.value);
	  axios
	.get("http://localhost:4000/salariers/search/"+event.target.value)
	.then(({ data }) => {
	   setSalariers(data)
	})
	.catch((error) => {
		console.log(error);
	});
	};

const [salariers, setSalariers] = useState([]);

useEffect(() => {
	axios
	.get("http://localhost:4000/salariers/salarierlist")
	.then(({ data }) => {
		setSalariers(data);
	})
	.catch((error) => {
		console.log(error);
	});
}, []);

const DataTable = () => {
	return salariers.map((res, i) => {
	return <SalarierTableRow obj={res} key={i} />;
	});
};

return (
	<div className="table-wrapper">
		<label htmlFor="search">
        Search by Task:
        <input id="search" type="text" onChange={handleSearch} />
		
      </label>
	<Table striped bordered hover>
		<thead>
		<tr>
			<th>Nom</th>
			<th>Prénom</th>
            <th>N°de tel </th>
            <th>Poste</th>
			<th>Action</th>
		</tr>
		</thead>
		<tbody>{DataTable()}</tbody>
	</Table>
	</div>
);
};

export default SalarierList;
