import Link from 'next/link';
import React from 'react';

const MyRequestCard = ({ ReqItem }) => {
    // console.log(ReqItem);
    const { name, user, date, _id } = ReqItem;

    return (
        <div className="w-96 md:w-160 lg:200 mx-auto bg-base-100 card-md shadow-xl border-2 border-gray-400 rounded-xl py-2 px-6">
            <div className="">

                <h2 className="text-2xl font-extrabold text-gray-950">Pet Name: {name}</h2>

                <h2 className="font-semibold">Pick Up Date: {name}</h2>

                <h2 className="font-semibold text-[14px]">Request Date: {date}</h2>

                <h2 className="card-title">Status</h2>

                <div className="justify-end card-actions">
                    <Link href={`/all-pets/${_id}`} className="btn btn-primary">View Details</Link>
                    <button className="btn btn-primary">Delete Request</button>
                </div>
            </div>
        </div>
    );
};

export default MyRequestCard;



