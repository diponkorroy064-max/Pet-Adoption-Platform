'use client'
import { authClient } from '@/lib/auth-client';
import { Button } from '@heroui/react';
import { div } from 'framer-motion/client';
import React from 'react';


const Actions = ({ item }) => {
    const updatedItem = item;
    console.log("update from actions", updatedItem);
    const itemStatus = updatedItem.status;
    console.log("item status", itemStatus);

    
    const handleActions = async (status) => {

        const { data: tokenData } = await authClient.token();
        // console.log(tokenData);

        const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/adoption/${updatedItem.petId}/update`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${tokenData?.token}`
            },
            body: JSON.stringify({ status: status, request: "Addopted" })
        })
        const data = await res.json()
        console.log(data);
    }


    return (
        <div>
            {itemStatus === "pending" ? <div>
                <Button onClick={() => handleActions("Approved")}>Approve</Button>
                <Button onClick={() => handleActions("Rejected")}>Reject</Button></div> :
                <div className='text-orange-300'>{itemStatus}</div>

            }
        </div>
    );
};

export default Actions;


