import React from 'react';
import { FaPlus } from 'react-icons/fa';

const StatSection = () => {
    return (
        <div className='container mx-auto py-8'>
            <div className='flex justify-center items-center flex-wrap gap-6'>

                <div className='w-70 flex justify-center items-center gap-3 border-2 border-cyan-400 rounded-tl-xl rounded-br-xl bg-cyan-50 px-8 py-6'>
                    <div>IMG</div>
                    <div>
                        <h1 className='flex items-center text-3xl font-bold text-gray-900'>180 <FaPlus className='text-2xl'/></h1>
                        <p className='font-semibold'>Happy Customers</p>
                    </div>
                </div>

                <div className='w-70 flex justify-center items-center gap-3 border-2 border-orange-300 rounded-tl-xl rounded-br-xl bg-orange-50 px-8 py-6'>
                    <div>IMG</div>
                    <div>
                        <h1 className='flex items-center text-3xl font-bold text-gray-900'>68 <FaPlus className='text-2xl'/></h1>
                        <p className='font-semibold'>Pet`s Species</p>
                    </div>
                </div>

                <div className='w-70 flex justify-center items-center gap-3 border-2 border-green-300 rounded-tl-xl rounded-br-xl bg-green-50 px-8 py-6'>
                    <div>IMG</div>
                    <div>
                        <h1 className='flex items-center text-3xl font-bold text-gray-900'>28 <FaPlus className='text-2xl'/></h1>
                        <p className='font-semibold'>Pet Owners</p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default StatSection;

