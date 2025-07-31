import React,{useState,useEffect} from 'react';

const useScrollProgress = () => {
    const [completion, setCompletion] = useState(0);
    useEffect(() => {

        const updateScrollCompletion = () => {
            const scrollTop = window.scrollY
            const scrollHeight = document.body.scrollHeight - window.innerHeight
           
            if (scrollHeight){
                 setCompletion (Number(scrollTop / scrollHeight).
                toFixed(2)*100)
            }
            //event
            window.addEventListener('scroll', updateScrollCompletion)
            return () => {
                window.removeEventListener('scroll', updateScrollCompletion)
            }

        }
    
    }, [])
    return completion
}

export default useScrollProgress