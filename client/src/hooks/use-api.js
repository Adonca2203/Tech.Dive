import { useState, useEffect } from 'react';

const API_ROOT = 'http://localhost:9000';

export function useApi({ path } = { path: 'exams' }, { data } = { data: '' }) {
    const [response, setResponse] = useState();

    useEffect(() => {
        fetch(`${API_ROOT}/${path}`, {
            method: "GET",
        })
            .then(res => res.json())
            .then(res => setResponse(res));
    }, []);

    return {
        response
    };
}

export function useAddApi({ path } = { path: '' }, { data } = { data: '' }) {
    const [createResponse, setResponse] = useState();

    try {
        var jsonRep = JSON.stringify(data);
    }
    catch (err) {
        console.log(err.message);
        setResponse(`Could not make a POST request, check that data is valid JSON.`);
    }

    useEffect(() => {
        fetch(`${API_ROOT}/${path}`, {
            method: "POST",
            body: jsonRep,
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(res => setResponse(res));
    }, []);

    return {
        createResponse
    };
}
