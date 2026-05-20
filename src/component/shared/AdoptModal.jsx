'use client'
import { authClient } from "@/lib/auth-client";
import { Envelope } from "@gravity-ui/icons";
import { Button, FieldError, Input, Label, Modal, Surface, TextField } from "@heroui/react";
import { toast } from "react-toastify";


const AdoptModal = ({ petDataById }) => {
    const { data } = authClient.useSession();
    // console.log("data from adopt modal", data);
    const user = data?.user;
    // console.log("user in  adopt modal", user);

    const handleAdoptRequest = async(e) => {
        e.preventDefault()
        const formData = new FormData(e.currentTarget);
        const adoptRequestData = Object.fromEntries(formData.entries());
        console.log(adoptRequestData);

        // const { data: tokenData } = await authClient.token();
        // console.log(tokenData);

        const res = await fetch("http://localhost:5000/adoption", {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(adoptRequestData)
        })
        const data = await res.json();
        console.log(data);

        if (data.acknowledged) {
            toast.success("Send Request successfully!");
        }
    }


    return (
        <Modal>
            <Button className='rounded-md w-50'>Adopt Now</Button>

            <Modal.Backdrop>
                <Modal.Container placement="auto">
                    <Modal.Dialog className="sm:max-w-md">
                        <Modal.CloseTrigger />

                        <Modal.Header>
                            <Modal.Icon className="bg-accent-soft text-accent-soft-foreground">
                                <Envelope className="size-5" />
                            </Modal.Icon>
                            <Modal.Heading>Adopt the Pet</Modal.Heading>
                        </Modal.Header>

                        <Modal.Body className="p-6">
                            <Surface variant="default">
                                <form onSubmit={handleAdoptRequest} className="flex flex-col gap-4">

                                    <TextField defaultValue={petDataById?.petName} className="w-full" name="name" type="text">
                                        <Label>Pet Name</Label>
                                        <Input placeholder="Enter pet name" />
                                    </TextField>

                                    <TextField defaultValue={user?.name} className="w-full" name="user" type="text">
                                        <Label>User Name</Label>
                                        <Input placeholder="Enter user name" />
                                    </TextField>

                                    <TextField defaultValue={user?.email} className="w-full" name="email" type="email">
                                        <Label>User Email</Label>
                                        <Input placeholder="Enter user email" />
                                    </TextField>

                                    <TextField isRequired className="w-full" name="date" type="date">
                                        <Label>Pick Up Date</Label>
                                        <Input placeholder="Enter Pick Up Date" />
                                        <FieldError />
                                    </TextField>

                                    <TextField isRequired className="w-full" name="message" type="text">
                                        <Label>Message</Label>
                                        <Input placeholder="Enter your message" />
                                        <FieldError />
                                    </TextField>

                                    <div>
                                        <Button className='w-full btn btn-outline btn-secondary' type="submit" slot="close">Send Adoption Request</Button>
                                    </div>
                                </form>
                            </Surface>
                        </Modal.Body>
                        <Modal.Footer>

                        </Modal.Footer>
                    </Modal.Dialog>
                </Modal.Container>
            </Modal.Backdrop>
        </Modal>
    );
};

export default AdoptModal;


