import {useEffect,useState } from "react";
const useFetch = (url) => {
    const [data,setData] = useState(null);
    const [isPending,setIspending] =useState(true);
    const [error,setError] = useState(null);

    useEffect(()=>{
        const abortCont = new AbortController() ;
        fetch(url,{signal : abortCont.signal,timeout: 5000})
            .then(res=> {
                if (!res.ok) {
                    throw Error (" Couldn't fetch data from that resource ");
                }
                return res.json()})
            .then(data=>{
                setData(data);
                setIspending(false);    
                setError(null);
            })
            .catch(err =>{ 
                if(err.name !== 'AbortError' ){
                setError(err.message);
                setIspending(false);
                }
            });
            return () => abortCont.abort();
    },[url]); 
    return { data,isPending,error }
}
export default useFetch ; 