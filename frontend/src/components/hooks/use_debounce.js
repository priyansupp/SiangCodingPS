import React from 'react'

const useDebounce = (val, delay) => {
    const [debounceval, setDebounceval] = React.useState(val);

    React.useEffect(()=>{
        const handler = setTimeout(() => {
            setDebounceval(val);
        }, delay);

        return () => {
            clearTimeout(handler);
        };
    }, [val]);

    return debounceval;

}
export default useDebounce;