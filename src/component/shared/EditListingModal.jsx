import { Envelope } from "@gravity-ui/icons";
import { Button, FieldError, Input, Label, Modal, Surface, TextField, Select, ListBox, TextArea } from "@heroui/react";


const EditListingModal = () => {
    return (
        <Modal>
            <Button className="rounded-md w-25" variant="primary">Edit</Button>
            <Modal.Backdrop>

                <Modal.Container placement="auto">
                    <Modal.Dialog className="max-w-160">
                        <Modal.CloseTrigger />
                        <Modal.Header>
                            <Modal.Icon className="bg-accent-soft text-accent-soft-foreground">
                                <Envelope className="size-5" />
                            </Modal.Icon>
                            <Modal.Heading>Update Pet Information</Modal.Heading>
                        </Modal.Header>
                        <Modal.Body className="p-6">
                            <Surface variant="default">
                                <form className="flex flex-col gap-4">

                                    <div className="flex gap-3">
                                        <TextField className="w-full" name="name" type="text">
                                            <Label>Name</Label>
                                            <Input placeholder="Enter your name" />
                                        </TextField>

                                        <TextField className="w-full" name="email" type="email">
                                            <Label>Email</Label>
                                            <Input placeholder="Enter your email" />
                                        </TextField>
                                    </div>

                                    <div className="flex gap-3">
                                        <TextField className="w-full" name="phone" type="tel">
                                            <Label>Phone</Label>
                                            <Input placeholder="Enter your phone number" />
                                        </TextField>

                                        <TextField className="w-full" name="company">
                                            <Label>Company</Label>
                                            <Input placeholder="Enter your company name" />
                                        </TextField>
                                    </div>

                                    <div className="flex gap-3">
                                        <TextField className="w-full" name="message">
                                            <Label>Message</Label>
                                            <Input placeholder="Enter your message" />
                                        </TextField>

                                        <TextField className="w-full" name="message">
                                            <Label>Message</Label>
                                            <Input placeholder="Enter your message" />
                                        </TextField>
                                    </div>

                                    <div className="flex gap-3">
                                        <TextField className="w-full" name="message">
                                            <Label>Message</Label>
                                            <Input placeholder="Enter your message" />
                                        </TextField>

                                        <TextField className="w-full" name="message">
                                            <Label>Message</Label>
                                            <Input placeholder="Enter your message" />
                                        </TextField>
                                    </div>

                                    <div className="flex gap-3">
                                        <TextField className="w-full" name="message">
                                            <Label>Message</Label>
                                            <Input placeholder="Enter your message" />
                                        </TextField>

                                        <TextField className="w-full" name="message">
                                            <Label>Message</Label>
                                            <Input placeholder="Enter your message" />
                                        </TextField>
                                    </div>

                                    <div className="flex gap-3">
                                        <TextField className="w-full" name="message">
                                            <Label>Message</Label>
                                            <Input placeholder="Enter your message" />
                                        </TextField>

                                        <TextField className="w-full" name="message">
                                            <Label>Message</Label>
                                            <Input placeholder="Enter your message" />
                                        </TextField>
                                    </div>
                                </form>
                            </Surface>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button slot="close" variant="secondary">
                                Cancel
                            </Button>
                            <Button slot="close">Confirm Update</Button>
                        </Modal.Footer>
                    </Modal.Dialog>
                </Modal.Container>
            </Modal.Backdrop>
        </Modal>
    );
};

export default EditListingModal;

