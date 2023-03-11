import React, { useEffect, useState, useRef } from 'react'
import { NavLink } from 'react-router-dom';
const API_ROOT = 'https://hack-diversityapi.onrender.com';
const CreatePatient = (props) => {
	const performingCall = useRef(false);
	const [created, setCreated] = useState();
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
		if (performingCall.current || created) return;
		var form = document.getElementsByTagName("form")[0];
		if (!form.checkValidity()) {
			form.reportValidity();
			return;
		}
		fetch(`${API_ROOT}/patients`, {
			method: "POST",
			body: JSON.stringify(patient),
			headers: {
				'Content-Type': 'application/json'
			}
		})
			.then(res => res.json())
			.then(res => setCreated(res));
		performingCall.current = true;
	};
	if (created) {
		if (created.error) {
			return (
				<>
					{Object.keys(created.error).map((key, i) => (
						<h2 key={i}>{created.error[key]}</h2>
					))}
					<NavLink style={{ color: 'white' }} to='/admin'>
						<button className='btn btn-primary mx-2'>Back to Admin</button>
					</NavLink>
					<NavLink style={{ color: 'white' }} to='/patients/create'>
						<button className='btn btn-primary mx-2'>Create New Patient</button>
					</NavLink>
				</>
			);
		}
		return (
			<>
				<h1>{created.message}</h1>
				<NavLink style={{ color: 'white' }} to='/admin'>
					<button className='btn btn-primary mx-2'>Back to Admin</button>
				</NavLink>
				<NavLink style={{ color: 'white' }} to='/patients/create'>
					<button className='btn btn-primary mx-2'>Create New Patient</button>
				</NavLink>
			</>
		);
	}
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
