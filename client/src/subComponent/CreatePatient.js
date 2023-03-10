import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom';
import { useApi, Methods } from '../hooks/use-api';

const CreatePatient = (props) => {
	const navigate = useNavigate();
	const initPatient = {
		firstName: "",
		lastName: "",
		age: "",
		sex: "",
		zipCode: ""
	};
	const [patient, setPatient] = useState(initPatient);
	const handleUpdate = (e) => {
		const name = e.target.name;
		const value = e.target.value;
		setPatient({ ...patient, [name]: value });
	}
	const handleSubmit = (e) => {
		e.preventDefault();
		var form = document.getElementsByTagName("form")[0];
		if (!form.checkValidity()) {
			form.reportValidity();
			return;
		}
		navigate("/patients/created", { state: { pat: patient } })
	};
	return (
		<>
			<div>
				<div ><h2 className='btnP'>Create Patient </h2></div>
				<div>
					<form className='inputForm'>
						<div>
							<div className='createBtn'>
								<button type='submit' onClick={handleSubmit} className='btn btn-primary  createBtn'>Add Patient</button>{"  "}
								<NavLink to='/exams'>
									<button className='btn btn-danger'>Cancel</button>
								</NavLink>
							</div>
						</div>
						<div>
							<h4>Patient info </h4>
						</div>
						<div className='d-flex align-items-center justify-content-center mt-3'>
							<div className='col-md-5 inputToLeft'>
								<label htmlFor='patientId '>First Name</label>
								<input
									className='form-control text-center'
									type='text'
									id='firstName'
									name='firstName'
									required
									value={patient.firstName}
									onChange={handleUpdate} />
							</div>
						</div>
						<div className='d-flex align-items-center justify-content-center mt-3'>
							<div className='col-md-5 inputToLeft'>
								<label htmlFor='patientId '>Last Name</label>
								<input
									className='form-control text-center'
									type='text'
									id='lastName'
									name='lastName'
									required
									value={patient.lastName}
									onChange={handleUpdate} />
							</div>
						</div>
						<div className='d-flex align-items-center justify-content-center mt-3'>
							<div className='col-md-5 inputToLeft'>
								<label htmlFor='age'>Age</label>
								<input
									className='form-control text-center'
									type='number'
									id='age'
									name='age'
									value={patient.age}
									required
									onChange={handleUpdate} />
							</div>
						</div>
						<div className='d-flex align-items-center justify-content-center mt-3'>
							<div className='col-md-5 inputToLeft'>
								<label htmlFor='sex'>Sex</label>
								<input
									className='form-control text-center'
									type='text'
									id='sex'
									name='sex'
									maxLength="1"
									required
									value={patient.sex}
									onChange={handleUpdate} />
							</div>
						</div>
						<div className='d-flex align-items-center justify-content-center mt-3'>
							<div className='col-md-5 inputToLeft'>
								<label htmlFor='zipCode'>Zip Code</label>
								<input
									className='form-control text-center'
									type='text'
									id='zipCode'
									name='zipCode'
									required
									value={patient.zipCode}
									onChange={handleUpdate} />
							</div>
						</div>
					</form>
				</div>
			</div>
		</>
	);
};

export default CreatePatient;
