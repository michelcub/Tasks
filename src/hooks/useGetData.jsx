import { useState, useEffect } from 'react';


export const useGetData = async ({element}) => {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    try{
        
    useEffect(() => {
        fetch(`${process.env.DOMAIN}/api/${element}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            },
        })
        .then(response => {
            if(!response.ok) throw Error('Error al obtener los datos')
            return response.json()
        })
        .then(data => {
            if(data.error) throw Error(data.error)
            if(data.message) throw Error(data.message)
            if(!data) throw Error('Error al obtener los datos')
    
            setData(data)
            
        })
    },[element])
    
    }catch(error){
        setError(error)
        setLoading(false)
    }finally{
       setLoading(false)
    }

    return {data, loading, error}
}