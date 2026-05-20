import { Envelope } from "@gravity-ui/icons";
import { Button, Input, Label, Modal, Surface, TextField } from "@heroui/react";


const AdoptModal = () => {
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
                                <form className="flex flex-col gap-4">

                                    <TextField className="w-full" name="name" type="text">
                                        <Label>Pet Name</Label>
                                        <Input placeholder="Enter pet name" />
                                    </TextField>

                                    <TextField className="w-full" name="user" type="text">
                                        <Label>User Name</Label>
                                        <Input placeholder="Enter user name" />
                                    </TextField>

                                    <TextField className="w-full" name="email" type="email">
                                        <Label>User Email</Label>
                                        <Input placeholder="Enter user email" />
                                    </TextField>

                                    <TextField className="w-full" name="date" type="date">
                                        <Label>Pick Up Date</Label>
                                        <Input placeholder="Enter Pick Up Date"/>
                                    </TextField>

                                    <TextField className="w-full" name="message" type="text">
                                        <Label>Message</Label>
                                        <Input placeholder="Enter your message" />
                                    </TextField>

                                    <div>
                                        <Button className='w-full btn btn-outline btn-secondary' type="submit" slot="close">Send Adopt Request</Button>
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


