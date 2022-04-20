import React from "react";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { FormGroup, FormControl, Button } from "react-bootstrap";
const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/



const SalarierForm = (props) => {
const validationSchema = Yup.object().shape({
	Fname: Yup.string().required("Required"),
	Lname: Yup.string().required("Required"),
    phoneNumber: Yup.string().matches(phoneRegExp, 'votre num est erroné '),
    poste:Yup.string().required("Required"),
	
});
console.log(props);
return (
	<div className="form-wrapper">
	<Formik {...props} validationSchema={validationSchema}>
		<Form>
		<FormGroup>
			
          <label htmlFor="fname">First Name</label>
			<Field name="Fname" type="text"
				className="form-control" />
			<ErrorMessage
			name="Fname"
			className="d-block invalid-feedback"
			component="span"
			/>
		</FormGroup>
        <FormGroup>
		<label htmlFor="Lname">Last Name</label>
			<Field name="Lname" type="text"
				className="form-control" />
			<ErrorMessage
			name="Lname"
			className="d-block invalid-feedback"
			component="span"
			/>
		</FormGroup>
        <FormGroup>
		<label htmlFor="PhoneNumber">PhoneNumber</label>
			<Field name="phoneNumber" type="text"
				className="form-control" />
			<ErrorMessage
			name="phoneNumber"
			className="d-block invalid-feedback"
			component="span"
			/>
		</FormGroup>
        <FormGroup>
		<label htmlFor="poste">Poste</label>
			<Field name="poste" type="text"
				className="form-control" />
			<ErrorMessage
			name="poste"
			className="d-block invalid-feedback"
			component="span"
			/>
		</FormGroup>

		
		
		<Button variant="danger" size="lg"
			block="block" type="submit">
			{props.children}
		</Button>
		<Button type="reset" variant="danger" size="lg"
			block="block">
			reste 
		</Button>
		</Form>
	</Formik>
	</div>
);
};

export default SalarierForm;
