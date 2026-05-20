'use client'
import { Button } from '@heroui/react';
import React from 'react';


const Actions = ({ item }) => {
    const updatedItem = item;
    console.log("update from actions", updatedItem);

    const handleActions = async (status) => {
        const res = await fetch(`http://localhost:5000/adoption/${updatedItem.petId}/update`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({status:status})
        })
        const data = await res.json()
        console.log(data);
    }
   
    
    return (
        <div>
            <Button onClick={() => handleActions("Approved")}>Approve</Button>
            <Button onClick={() => handleActions("Rejected")}>Reject</Button>
        </div>
    );
};

export default Actions;


