import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";

const SalarierTableRow = (props) => {
const { _id, Fname, Lname,phoneNumber, poste } = props.obj;

const deleteSalarier = () => {
	axios
	.delete(
"http://localhost:4000/salariers/deletesalarier/" + _id)
	.then((res) => {
		if (res.status === 200) {
		alert("salarier supprimer avec succées ");
		window.location.reload();
		} else Promise.reject();
	})
	.catch((err) => alert("vous avez une erreur!"));
};

return (
	<tr style={{backgroundColor : poste.trim() ==='developer' && "#20B2AA" }} >
		
	<td>{Fname.toUpperCase()}</td>
    <td>{Lname.toUpperCase()}</td>
	<td>{phoneNumber}</td>
	<td>{poste.toUpperCase()}</td>
	<td>
		
		<Button onClick={deleteSalarier}
		size="sm" variant="danger">
		supprimer
		</Button>
	</td>
	</tr>
);
};

export default SalarierTableRow;
