import React, { useEffect, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom';
import { useApi, Methods } from '../hooks/use-api';



const CreatePatientPost = () => {
	const location = useLocation();
	let { pat:patient } = location.state;

	const { response: resp } = useApi({ path: "patients" }, { method: Methods.POST }, { data: patient });
	if (resp) return <p>{resp.message}</p>;
	else return <p>loading...</p>;
};

export default CreatePatientPost;
