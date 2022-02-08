import { useState, useCallback } from 'react';

const useHttp = () => {

    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const sendRequest = useCallback(async (url, applyData) => {

        setIsLoading(true);
        setError(null);

        try {

            const response = await fetch (
                url,
                {
                    method: 'GET',
                    headers: {},
                    body: null
                }
            )

            if (!response.ok) {
                throw new Error('Response was not ok')
            }

            const data = await response.json();

            applyData(data);

        } catch (err) {
            console.log(err);
            setError(err.message || 'Something went wrong!');
        }

        setIsLoading(false);

    }, []);

    return {
        isLoading: isLoading,
        error: error,
        sendRequest: sendRequest
    };

}

export default useHttp;