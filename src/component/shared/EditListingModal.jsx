'use client'
import { Envelope } from "@gravity-ui/icons";
import { Button, Input, Label, Modal, Surface, TextField, TextArea } from "@heroui/react";
import { useRouter } from "next/navigation";


const EditListingModal = ({ petData }) => {
    const router = useRouter();

    // console.log(petData);
    const { age, breed, description, email, fee, gender, healthStatus, imageURL, location, petName, species, vaccination, _id } = petData;

    const onSubmit = async(e) => {
        e.preventDefault()

        const formData = new FormData(e.currentTarget);
        const updateData = Object.fromEntries(formData.entries());
        console.log("updatedData", updateData);

        const res = await fetch(`http://localhost:5000/pets/${_id}/update`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateData)
        })
        const data = await res.json()
        console.log(data);

        if (data.modifiedCount > 0) {
            router.push('/myListings')
        }
    }


    return (
        <Modal>
            <Button className="rounded-md w-25" variant="primary">Edit</Button>
            <Modal.Backdrop>

                <Modal.Container placement="auto">
                    <Modal.Dialog className="w-100 md:w-150">
                        <Modal.CloseTrigger />
                        <Modal.Header>
                            <Modal.Icon className="bg-accent-soft text-accent-soft-foreground">
                                <Envelope className="size-5" />
                            </Modal.Icon>
                            <Modal.Heading>Update Pet Information</Modal.Heading>
                        </Modal.Header>
                        <Modal.Body className="p-2.5">
                            <Surface variant="default">
                                <form onSubmit={onSubmit} className="flex flex-col gap-4">

                                    <div className="flex gap-3">
                                        <TextField defaultValue={petName} className="w-40" name="petName" type="text">
                                            <Label>Pet Name</Label>
                                            <Input placeholder="Enter your pet name" />
                                        </TextField>

                                        <TextField defaultValue={age} className="w-40" name="age" type="text">
                                            <Label>Age</Label>
                                            <Input placeholder="Enter Pet`s age" />
                                        </TextField>
                                    </div>

                                    <div className="flex gap-3">
                                        <TextField defaultValue={species} className="w-40" name="species" type="text">
                                            <Label>Species</Label>
                                            <Input placeholder="Enter pet`s species" />
                                        </TextField>

                                        <TextField defaultValue={breed} className="w-40" name="breed" type="text">
                                            <Label>Breed</Label>
                                            <Input placeholder="Enter pets`s breed" />
                                        </TextField>
                                    </div>

                                    <div className="flex gap-3">
                                        <TextField defaultValue={gender} className="w-40" name="gender" type="text">
                                            <Label>Gender</Label>
                                            <Input placeholder="Enter Pet`s gender" />
                                        </TextField>

                                        <TextField defaultValue={imageURL} className="w-40" name="imageURL" type="text">
                                            <Label>Photo URL</Label>
                                            <Input placeholder="Enter photoURL" />
                                        </TextField>
                                    </div>

                                    <div className="flex gap-3">
                                        <TextField defaultValue={healthStatus} className="w-40" name="healthStatus" type="text">
                                            <Label>Health Status</Label>
                                            <Input placeholder="Enter Health Status" />
                                        </TextField>

                                        <TextField defaultValue={vaccination} className="w-40" name="vaccinationStatus">
                                            <Label>Vaccination Status</Label>
                                            <Input placeholder="Enter vaccination status" />
                                        </TextField>
                                    </div>

                                    <div className="flex gap-3">
                                        <TextField defaultValue={location} className="w-40" name="location">
                                            <Label>Location</Label>
                                            <Input placeholder="Enter location" />
                                        </TextField>

                                        <TextField defaultValue={fee} className="w-40" name="fee" type="text">
                                            <Label>Adoption Fee</Label>
                                            <Input placeholder="Enter adoption fee" />
                                        </TextField>
                                    </div>

                                    <div className="flex gap-3">
                                        <TextField defaultValue={description} className="w-40" name="description" type="text">
                                            <Label>Description</Label>
                                            <TextArea placeholder="Enter description" />
                                        </TextField>

                                        <TextField defaultValue={email} className="w-40" name="email" type="email">
                                            <Label>Owner Email</Label>
                                            <Input placeholder="Enter email" />
                                        </TextField>
                                    </div>

                                    <div className="flex gap-2.5 justify-end">
                                        <Button slot="close" variant="secondary">Cancel</Button>
                                        <Button type="submit" slot="close">Confirm Update</Button>
                                    </div>
                                </form>
                            </Surface>
                        </Modal.Body>
                        
                    </Modal.Dialog>
                </Modal.Container>
            </Modal.Backdrop>
        </Modal>
    );
};

export default EditListingModal;

