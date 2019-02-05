import React from 'react';

function WithLoading(Component){
    return ({isFetching, ...props}) => {
        if(isFetching) return 'loading...';
        return <Component {...props} />
    }
}

export default WithLoading