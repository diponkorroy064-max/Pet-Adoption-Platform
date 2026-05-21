'use client'
import { authClient } from '@/lib/auth-client';
import { AlertDialog, Button } from '@heroui/react';
import { useRouter } from 'next/navigation';
import React from 'react';


const CancelModal = ({ ReqItem }) => {
    const router = useRouter();

    const cancelItem = ReqItem;
    // console.log('cancelItem', cancelItem);

    const handleCancel = async () => {
        const { data: tokenData } = await authClient.token();
        // console.log(tokenData);

        const res = await fetch(`http://localhost:5000/adoption/${cancelItem.petId}/byPetId`, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${tokenData?.token}`
            }
        });
        const data = await res.json();
        // console.log(data);

        if (data.deletedCount > 0) {
            router.push('/my-request');
        }
    }


    return (
        <AlertDialog>
            <Button className="w-25 rounded-md" variant="danger">Cancel</Button>
            <AlertDialog.Backdrop>
                <AlertDialog.Container>
                    <AlertDialog.Dialog className="sm:max-w-100">
                        <AlertDialog.CloseTrigger />
                        <AlertDialog.Header>
                            <AlertDialog.Icon status="danger" />
                            <AlertDialog.Heading>Cancel Request permanently?</AlertDialog.Heading>
                        </AlertDialog.Header>
                        <AlertDialog.Body>
                            <p>
                                This will permanently delete <strong className='text-gray-900'>{cancelItem?.name}</strong> and all of its
                                data. This action cannot be undone.
                            </p>
                        </AlertDialog.Body>
                        <AlertDialog.Footer>
                            <Button onClick={handleCancel} slot="close" variant="danger">
                                Confirm Cancel
                            </Button>
                        </AlertDialog.Footer>
                    </AlertDialog.Dialog>
                </AlertDialog.Container>
            </AlertDialog.Backdrop>
        </AlertDialog>
    );
};

export default CancelModal;

