// EditSalarier Component for update salarier data

// Import Modules
import React, { useState, useEffect,useParams } from "react";
import axios from "axios";
import SalarierForm from "./SalarierForm";

// EditSalarier Component
const EditSalarier = () => {
let {id} = useParams(); 
console.log(id)
const [formValues, setFormValues] = useState({
	Fname: "",
    Lname: "",
    phoneNumber: "",
    poste: "",
	
});
	
//onSubmit handler
const onSubmit = (salarierObject) => {
	/*axios
	.put(
		"http://localhost:4000/salariers/updatesalarier/" +
		props.match.params.id,
		salarierObject
	)
	.then((res) => {
		if (res.status === 200) {
		alert("votre modification a étais éffectué avec succées ");
		props.history.push("/salarierlist");
		} else Promise.reject();
	})
	.catch((err) => alert("vous avez une erreur!"));*/
};

// Load data from server and reinitialize salarier form
useEffect(() => { 
	/*axios
	.get(
		"http://localhost:4000/salariers/updatesalarier/"
		+ props.match.params.id
	)
	.then((res) => {
		const { Fname, Lname,phoneNumber,poste } = res.data;
		setFormValues({ Fname,Lname,phoneNumber,poste });
	})
	.catch((err) => console.log(err));*/
}, []);

// Return salarier form
return (
	<SalarierForm
	initialValues={formValues}
	onSubmit={onSubmit}
	enableReinitialize
	>
	Update Salarier
	</SalarierForm>
);
};

// Export EditSalarier Component
export default EditSalarier;
