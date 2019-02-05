import React from 'react';
import { Preloader } from 'react-materialize';

function WithLoading(Component){
    return ({isFetching, ...props}) => {
        if(isFetching) return <div className="loader-container"><Preloader size='big'/></div>;
        return <Component {...props} />
    }
}

export default WithLoading