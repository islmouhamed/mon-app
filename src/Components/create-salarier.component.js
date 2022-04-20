// CreateSalarier Component for add new salarier

// Import Modules
import React, { useState } from "react";
import axios from 'axios';
import SalarierForm from "./SalarierForm";

// CreateSalarier Component
const CreateSalarier = () => {
const [formValues] =
	useState({ Fname: '', Lname: '', phoneNumber: '', poste: '' })
// onSubmit handler
const onSubmit = salarierObject => {
	axios.post(
'http://localhost:4000/salariers/createsalarier',
	salarierObject)
	.then(res => {
		if (res.status === 200)
		alert('salarier crée avec succées')
		else
		Promise.reject()
	})
	.catch(err => alert('vous avez une erreur!'))
}
	
// Return student form
return(
	<SalarierForm initialValues={formValues}
	onSubmit={onSubmit}
	enableReinitialize>
	Create Salarier
	</SalarierForm>
)
}

// Export CreateStudent Component
export default CreateSalarier
