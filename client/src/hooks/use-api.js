import { useState, useEffect } from 'react';

const API_ROOT = 'http://localhost:9000';

export function useApi({ path } = { path: '' }, { method } = { method: 'GET' }, { data } = { data: '' }) {
    const [response, setResponse] = useState();

    if (method.toLowerCase() != "get") {
        try {
            var jsonRep = JSON.parse(data);
        }
        catch (err) {
            console.log(err.message);
            setResponse(`Could not make a ${method} request, check that data is valid JSON.`);
        }
    }
    
    useEffect(() => {
        fetch(`${API_ROOT}/${path}`, {
            method: method,
            body: jsonRep
        })
            .then(res => res.json())
            .then(res => setResponse(res));
    }, []);

    return {
        response
    };
}
