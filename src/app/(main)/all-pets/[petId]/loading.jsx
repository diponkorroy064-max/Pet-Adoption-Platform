import React from 'react';
import { GridLoader } from 'react-spinners';

const loading = () => {
    return (
        <div className='py-25 container mx-auto flex justify-center items-center'>
            <GridLoader />
        </div>
    )
};

export default loading;

