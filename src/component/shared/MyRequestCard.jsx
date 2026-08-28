"use client"
import Link from 'next/link';
import React from 'react';
import CancelModal from './CancelModal';
import { Button } from '@heroui/react';


const MyRequestCard = ({ ReqItem }) => {
    console.log(ReqItem);
    const { name, user, date, petId, _id, status } = ReqItem;

    return (
        <div className="bg-base-100 card-md shadow-xl border-2 border-gray-400 rounded-xl py-2 px-6">

            <div className='flex gap-4 justify-start items-center'>
                <h2 className="text-2xl font-extrabold text-gray-950">Pet Name: {name}</h2>
                <p className={status === "Approved" ? "badge badge-outline badge-success" : ""}>{status === "Approved" ? "Addopted" : ""}</p>
            </div>

            <h2 className="font-semibold">Pick Up Date: {date}</h2>

            <h2 className="font-semibold text-[12px]">Request Date: {date}</h2>

            <h2 className={status==="Approved"?"badge badge-success": status==="Rejected"?"badge badge-warning": "badge badge-error"}>{status === "Approved" ? "Approved" : status === "Rejected" ? "Rejected" : "Pending"}</h2>

            <div className="justify-end card-actions mt-2.5">
                <Link href={`/all-pets/${petId}`}><Button variant='primary' className="w-25 rounded-md">View</Button></Link>
                <CancelModal ReqItem={ReqItem}></CancelModal>
            </div>
        </div>
    );
};

export default MyRequestCard;



