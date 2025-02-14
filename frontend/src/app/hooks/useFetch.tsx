import { useState, useEffect } from 'react';
import { DataState, Response } from '../interface';

export const useFetch = <T,>(url: string) => {

    const [dataState, setDataState] = useState<DataState<T>>({
        data: {} as T,
        loading: true,
        error: null
    });

    useEffect(() => {
        const handleFetch = 
        async () => {
            try {
                const response = await fetch(url);
                
                if(!response.ok) throw new Error(response.statusText);
                
                const dataApi: Response<T> = await response.json();
                setDataState( {
                    loading: false,
                    data: dataApi.body,
                    error: null
                });

            } catch (error) {
                
                setDataState( prev => ({
                    ...prev,
                    loading: false,
                    error: (error as Error).message
                }));
            }
        }
    
        handleFetch()
    }, [url]);

    return {
        ...dataState
    }
}

