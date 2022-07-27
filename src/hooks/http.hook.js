import { useState, useCallback } from "react";

export const useHttp = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleRequest = async (params)  => {
        const {
            url, 
            method = 'GET', 
            body = null, 
            headers = {}
        } = params;

        const initialHeaders = {
            ...headers,
            ...{'Content-Type': 'application/json'}
        };

        setLoading(true);

        try {
            const response = await fetch(url, {
                method, body, initialHeaders 
            });

            if (!response.ok) {
                throw new Error(`Could not fetch ${url}, status: ${response.status}`);
            }

            const data = await response.json();

            setLoading(false);

            return data;
        } catch(e) {
            setError(e.message);
            setLoading(false);

            throw e;
        }
    }

    const request = useCallback(handleRequest, []);

    const clearError = useCallback(() => {
        setError(null);
    }, []);

    return {request, loading, error, clearError};
}