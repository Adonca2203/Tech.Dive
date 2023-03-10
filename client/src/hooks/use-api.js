import { useState, useEffect, useRef } from 'react';

const API_ROOT = 'http://localhost:9000';

export const Methods = {
    GET: "GET",
    POST: "POST",
    PUT: "PUT",
    PATCH: "PATCH",
    DEL: "DEL"
};

/**
 * React Hook for communitcating with the API
 * @param {string} path The path to the API endpoint
 * @param {Methods} method The API method to use (default GET)
 * @param {Object} data The data to pass to the API payload body if method is not GET
 * @return {JSON} The API response
 */
export function useApi({ path } = { path: '' }, { method } = { method: Methods.GET }, { data } = { data: '' }) {
    const [response, setResponse] = useState();

    if (method.toLowerCase() !== "get") {
        try {
            var jsonRep = JSON.stringify(data);
        }
        catch (err) {
            console.log(err.message);
            let message = { message: `Could not make a ${method} request, check that data is valid JSON.` };
            setResponse(message);
        }
    }

    useEffect(() => {
        fetch(`${API_ROOT}/${path}`, {
            method: method,
            body: jsonRep,
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(res => setResponse(res));
    }, []);

    return {
        response
    };
}
