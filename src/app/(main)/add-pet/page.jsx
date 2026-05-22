'use client'
import { authClient } from '@/lib/auth-client';
import { Button, FieldError, Input, Label, ListBox, TextArea, TextField, Select } from '@heroui/react';
import { useRouter } from 'next/navigation';
import React from 'react';
import { toast } from 'react-toastify';


const AddPetPage = () => {
    const router = useRouter();

    const { data } = authClient.useSession();
    // console.log("data from add-pet page", data);
    const owner = data?.user;
    // console.log("owner in add-pet page", owner);

    const onSubmit = async (e) => {
        e.preventDefault()

        const formData = new FormData(e.currentTarget);
        const petsData = Object.fromEntries(formData.entries());
        console.log(petsData);

        const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/pets`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(petsData)
        })
        const data = await res.json()
        console.log("response from add-pet", data);

        if (data.acknowledged) {
            toast.success("Successfully Added Pet Info.");
            router.push("/myListings")
        }
        else {
            toast.error("Failed to added pet info.")
        }
    }


    return (
        <div className='container mx-auto py-8 px-10'>
            <div>
                <h2 className='text-3xl md:text-4xl font-extrabold text-center text-[#f58f95]'>Add a Sweet Pet</h2>
            </div>

            <form onSubmit={onSubmit} className="p-10 bg-gray-50 space-y-8 md:w-150 mx-auto border border-gray-300 my-6 shadow rounded-3xl">
                <div className="space-y-8">

                    <div className="flex justify-between items-center gap-5 flex-wrap">
                        <TextField name="petName" isRequired>
                            <Label>Pet Name</Label>
                            <Input placeholder="Enter Pet Name" className="rounded-2xl w-60" />
                            <FieldError />
                        </TextField>

                        <TextField name="age" isRequired>
                            <Label>Age(years)</Label>
                            <Input placeholder="Enter Age" className="rounded-2xl w-60" />
                            <FieldError />
                        </TextField>
                    </div>

                    <div className='flex justify-between gap-5 flex-wrap'>
                        <Select
                            name="species"
                            isRequired
                            className=""
                            placeholder="Select Species">
                            <Label>Species</Label>
                            <Select.Trigger className="rounded-2xl w-60">
                                <Select.Value />
                                <Select.Indicator />
                            </Select.Trigger>
                            <Select.Popover>
                                <ListBox>
                                    <ListBox.Item id="Dog" textValue="Dog"> Dog <ListBox.ItemIndicator /></ListBox.Item>
                                    <ListBox.Item id="Cat" textValue="Cat"> Cat <ListBox.ItemIndicator /></ListBox.Item>
                                    <ListBox.Item id="Bird" textValue="Bird"> Bird <ListBox.ItemIndicator /></ListBox.Item>
                                    <ListBox.Item id="Rabbit" textValue="Rabbit">Rabbit <ListBox.ItemIndicator /></ListBox.Item>
                                    <ListBox.Item id="Snake" textValue="Snake"> Snake <ListBox.ItemIndicator /></ListBox.Item>
                                    <ListBox.Item id="Fish" textValue="Fish"> Fish <ListBox.ItemIndicator /></ListBox.Item>
                                </ListBox>
                            </Select.Popover>
                        </Select>

                        <TextField name="breed" isRequired>
                            <Label>Breed</Label>
                            <Input placeholder="Enter Breed" className="rounded-2xl w-60" />
                            <FieldError />
                        </TextField>
                    </div>

                    <div className="flex justify-between gap-5 flex-wrap">
                        <Select
                            name="gender"
                            isRequired
                            className=""
                            placeholder="Select Gender">
                            <Label>Gender</Label>
                            <Select.Trigger className="w-60 rounded-2xl">
                                <Select.Value />
                                <Select.Indicator />
                            </Select.Trigger>
                            <Select.Popover>
                                <ListBox>
                                    <ListBox.Item id="Beach" textValue="Beach"> Male<ListBox.ItemIndicator /></ListBox.Item>
                                    <ListBox.Item id="Mountain" textValue="Mountain"> Female <ListBox.ItemIndicator /></ListBox.Item>
                                </ListBox>
                            </Select.Popover>
                        </Select>

                        <TextField name="imageURL" isRequired>
                            <Label>Photo</Label>
                            <Input
                                placeholder="Enter Photo URL"
                                className="rounded-2xl w-60" />
                            <FieldError />
                        </TextField>
                    </div>

                    <div className="flex justify-between gap-5 flex-wrap">
                        <TextField name="healthStatus" type="date" isRequired>
                            <Label>Health Status</Label>
                            <Input type="text" placeholder='Select Health Status' className="w-60 rounded-2xl" />
                            <FieldError />
                        </TextField>

                        <Select
                            name="vaccination"
                            isRequired
                            className=""
                            placeholder="Select vaccination status">
                            <Label>Vaccination Status</Label>
                            <Select.Trigger className="rounded-2xl w-60">
                                <Select.Value />
                                <Select.Indicator />
                            </Select.Trigger>
                            <Select.Popover>
                                <ListBox>
                                    <ListBox.Item id="Vaccinated" textValue="Vaccinated">Vaccinated <ListBox.ItemIndicator /></ListBox.Item>
                                    <ListBox.Item id="Non-Vaccinated" textValue="Non Vaccinated">Non Vaccination <ListBox.ItemIndicator /> </ListBox.Item>
                                </ListBox>
                            </Select.Popover>
                        </Select>
                    </div>

                    <div className="flex justify-between gap-5 flex-wrap">
                        <TextField name="location" isRequired>
                            <Label>Location</Label>
                            <Input type='text'
                                placeholder="Enter Location"
                                className="rounded-3xl w-60" />
                            <FieldError />
                        </TextField>

                        <TextField name="fee" isRequired>
                            <Label>Adoption Fee($)</Label>
                            <Input type='text'
                                placeholder="Enter Adoption Fee"
                                className="rounded-3xl w-60" />
                            <FieldError />
                        </TextField>
                    </div>

                    <div className="flex justify-between gap-5 flex-wrap">
                        <TextField name="description" isRequired>
                            <Label>Description</Label>
                            <TextArea
                                placeholder="Enter Description"
                                className="rounded-3xl w-60" />
                            <FieldError />
                        </TextField>

                        <TextField name="email" defaultValue={owner?.email || "diponkor"}>
                            <Label>Owner Email</Label>
                            <Input type='email'
                                placeholder="Enter Email"
                                className="rounded-3xl w-60" />
                            <FieldError />
                        </TextField>
                    </div>
                </div>

                <Button
                    type="submit"
                    variant="outline"

                    className=" rounded-md w-full bg-[#f58f95] text-white">
                    Add a Sweet Pet
                </Button>
            </form>
        </div>
    );
};

export default AddPetPage;

