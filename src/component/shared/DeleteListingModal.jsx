'use client'
import { AlertDialog, Button } from '@heroui/react';
import { useRouter } from 'next/navigation';
import React from 'react';


const DeleteListingModal = ({ petData }) => {
    // console.log(petData);

    const router = useRouter();

    const handleDelete = async () => {
        const res = await fetch(`http://localhost:5000/pets/${petData?._id}/delete`, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json',
            },
        });
        const data = await res.json();
        console.log(data);
        // redirect('/myListings');
        router.push('/myListings')
    }

    
    return (
        <AlertDialog>
            <Button className="w-25 rounded-md" variant="danger">Delete</Button>
            <AlertDialog.Backdrop>
                <AlertDialog.Container>
                    <AlertDialog.Dialog className="sm:max-w-100">
                        <AlertDialog.CloseTrigger />
                        <AlertDialog.Header>
                            <AlertDialog.Icon status="danger" />
                            <AlertDialog.Heading>Delete Listing permanently?</AlertDialog.Heading>
                        </AlertDialog.Header>
                        <AlertDialog.Body>
                            <p>
                                This will permanently delete <strong className='text-gray-900'>{petData?.petName}</strong> and all of its
                                data. This action cannot be undone.
                            </p>
                        </AlertDialog.Body>
                        <AlertDialog.Footer>
                            <Button slot="close" variant="tertiary">
                                Cancel
                            </Button>
                            <Button onClick={handleDelete} slot="close" variant="danger">
                                Confirm Delete
                            </Button>
                        </AlertDialog.Footer>
                    </AlertDialog.Dialog>
                </AlertDialog.Container>
            </AlertDialog.Backdrop>
        </AlertDialog>
    );
};

export default DeleteListingModal;

