'use client';
import { authClient } from '@/lib/auth-client';
import {
    Button,
    FieldError,
    Input,
    Label,
    ListBox,
    TextArea,
    TextField,
    Select
} from '@heroui/react';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { toast } from 'react-toastify';

const AddPetPage = () => {
    const router = useRouter();
    const { data } = authClient.useSession();
    const owner = data?.user;
    const [loading, setLoading] = useState(false);

    const onSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const formData = new FormData(e.currentTarget);
            const petsData = Object.fromEntries(formData.entries());

            const { data: tokenData } = await authClient.token();

            const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/pets`, {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                    authorization: `Bearer ${tokenData?.token || ''}`,
                },
                body: JSON.stringify(petsData),
            });

            const resData = await res.json();

            if (res.ok && (resData.acknowledged || resData.insertedId)) {
                toast.success("Successfully added pet listing!");
                router.push("/dashboard/owner/my-pets");
            } else {
                toast.error(resData.message || "Failed to add pet listing.");
            }
        } catch (error) {
            toast.error("An unexpected error occurred.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="py-6 px-4 max-w-3xl mx-auto">
            {/* Background Decorator */}
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,var(--color-rose-100),transparent)] opacity-40 pointer-events-none" />

            {/* Compact Page Header */}
            <div className="text-center space-y-1.5 mb-6">
                <span className="inline-flex items-center gap-1.5 px-3 py-0.5 text-[11px] font-bold uppercase tracking-wider text-rose-700 bg-rose-100/80 rounded-full border border-rose-200">
                    ✨ New Listing
                </span>
                <h1 className="text-2xl sm:text-3xl font-black text-gray-900 tracking-tight">
                    Add a Sweet Pet
                </h1>
                <p className="text-xs sm:text-sm text-gray-500 max-w-md mx-auto">
                    Provide your pet`s details to match them with a loving new home.
                </p>
            </div>

            {/* Styled Form Container */}
            <div className="bg-white/90 backdrop-blur-md border border-rose-100/80 shadow-2xl shadow-rose-200/50 rounded-2xl p-5 sm:p-7">
                <form onSubmit={onSubmit} className="space-y-6">

                    {/* Section 1: Basic Details */}
                    <div className="space-y-3">
                        <div className="flex items-center gap-2 border-b border-gray-100 pb-2">
                            <span className="flex h-2 w-2 rounded-full bg-rose-500" />
                            <h2 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-gray-800">
                                Basic Information
                            </h2>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <TextField name="petName" isRequired className="w-full">
                                <Label className="text-xs font-semibold text-gray-700">Pet Name</Label>
                                <Input
                                    placeholder="e.g. Bella"
                                    className="w-full mt-1 rounded-xl border border-gray-200 bg-gray-50/50 px-3 py-2 text-sm transition-all focus:bg-white focus:border-rose-400 focus:ring-2 focus:ring-rose-100 outline-none"
                                />
                                <FieldError className="text-[11px] text-rose-500 mt-1" />
                            </TextField>

                            <TextField name="age" isRequired className="w-full">
                                <Label className="text-xs font-semibold text-gray-700">Age (Years)</Label>
                                <Input
                                    type="number"
                                    step="0.1"
                                    placeholder="e.g. 2"
                                    className="w-full mt-1 rounded-xl border border-gray-200 bg-gray-50/50 px-3 py-2 text-sm transition-all focus:bg-white focus:border-rose-400 focus:ring-2 focus:ring-rose-100 outline-none"
                                />
                                <FieldError className="text-[11px] text-rose-500 mt-1" />
                            </TextField>

                            <Select name="species" isRequired className="w-full" placeholder="Select Species">
                                <Label className="text-xs font-semibold text-gray-700">Species</Label>
                                <Select.Trigger className="w-full mt-1 rounded-xl border border-gray-200 bg-gray-50/50 px-3 py-2 text-sm text-left">
                                    <Select.Value />
                                    <Select.Indicator />
                                </Select.Trigger>
                                <Select.Popover>
                                    <ListBox className="p-1 rounded-xl shadow-lg border border-gray-100 bg-white">
                                        <ListBox.Item id="Dog" textValue="Dog" className="rounded-lg px-3 py-1.5 text-sm hover:bg-rose-50 hover:text-rose-600 cursor-pointer">Dog <ListBox.ItemIndicator /></ListBox.Item>
                                        <ListBox.Item id="Cat" textValue="Cat" className="rounded-lg px-3 py-1.5 text-sm hover:bg-rose-50 hover:text-rose-600 cursor-pointer">Cat <ListBox.ItemIndicator /></ListBox.Item>
                                        <ListBox.Item id="Bird" textValue="Bird" className="rounded-lg px-3 py-1.5 text-sm hover:bg-rose-50 hover:text-rose-600 cursor-pointer">Bird <ListBox.ItemIndicator /></ListBox.Item>
                                        <ListBox.Item id="Rabbit" textValue="Rabbit" className="rounded-lg px-3 py-1.5 text-sm hover:bg-rose-50 hover:text-rose-600 cursor-pointer">Rabbit <ListBox.ItemIndicator /></ListBox.Item>
                                        <ListBox.Item id="Fish" textValue="Fish" className="rounded-lg px-3 py-1.5 text-sm hover:bg-rose-50 hover:text-rose-600 cursor-pointer">Fish <ListBox.ItemIndicator /></ListBox.Item>
                                        <ListBox.Item id="Other" textValue="Other" className="rounded-lg px-3 py-1.5 text-sm hover:bg-rose-50 hover:text-rose-600 cursor-pointer">Other <ListBox.ItemIndicator /></ListBox.Item>
                                    </ListBox>
                                </Select.Popover>
                            </Select>

                            <TextField name="breed" isRequired className="w-full">
                                <Label className="text-xs font-semibold text-gray-700">Breed</Label>
                                <Input
                                    placeholder="e.g. Golden Retriever"
                                    className="w-full mt-1 rounded-xl border border-gray-200 bg-gray-50/50 px-3 py-2 text-sm transition-all focus:bg-white focus:border-rose-400 focus:ring-2 focus:ring-rose-100 outline-none"
                                />
                                <FieldError className="text-[11px] text-rose-500 mt-1" />
                            </TextField>

                            <Select name="gender" isRequired className="w-full" placeholder="Select Gender">
                                <Label className="text-xs font-semibold text-gray-700">Gender</Label>
                                <Select.Trigger className="w-full mt-1 rounded-xl border border-gray-200 bg-gray-50/50 px-3 py-2 text-sm text-left">
                                    <Select.Value />
                                    <Select.Indicator />
                                </Select.Trigger>
                                <Select.Popover>
                                    <ListBox className="p-1 rounded-xl shadow-lg border border-gray-100 bg-white">
                                        <ListBox.Item id="Male" textValue="Male" className="rounded-lg px-3 py-1.5 text-sm hover:bg-rose-50 hover:text-rose-600 cursor-pointer">Male <ListBox.ItemIndicator /></ListBox.Item>
                                        <ListBox.Item id="Female" textValue="Female" className="rounded-lg px-3 py-1.5 text-sm hover:bg-rose-50 hover:text-rose-600 cursor-pointer">Female <ListBox.ItemIndicator /></ListBox.Item>
                                    </ListBox>
                                </Select.Popover>
                            </Select>

                            <TextField name="fee" isRequired className="w-full">
                                <Label className="text-xs font-semibold text-gray-700">Adoption Fee ($)</Label>
                                <Input
                                    type="number"
                                    placeholder="e.g. 50"
                                    className="w-full mt-1 rounded-xl border border-gray-200 bg-gray-50/50 px-3 py-2 text-sm transition-all focus:bg-white focus:border-rose-400 focus:ring-2 focus:ring-rose-100 outline-none"
                                />
                                <FieldError className="text-[11px] text-rose-500 mt-1" />
                            </TextField>
                        </div>
                    </div>

                    {/* Section 2: Health & Location */}
                    <div className="space-y-3">
                        <div className="flex items-center gap-2 border-b border-gray-100 pb-2">
                            <span className="flex h-2 w-2 rounded-full bg-rose-500" />
                            <h2 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-gray-800">
                                Health & Location
                            </h2>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <TextField name="healthStatus" isRequired className="w-full">
                                <Label className="text-xs font-semibold text-gray-700">Health Status</Label>
                                <Input
                                    type="text"
                                    placeholder="e.g. Healthy & Spayed"
                                    className="w-full mt-1 rounded-xl border border-gray-200 bg-gray-50/50 px-3 py-2 text-sm transition-all focus:bg-white focus:border-rose-400 focus:ring-2 focus:ring-rose-100 outline-none"
                                />
                                <FieldError className="text-[11px] text-rose-500 mt-1" />
                            </TextField>

                            <Select name="vaccination" isRequired className="w-full" placeholder="Select Status">
                                <Label className="text-xs font-semibold text-gray-700">Vaccination Status</Label>
                                <Select.Trigger className="w-full mt-1 rounded-xl border border-gray-200 bg-gray-50/50 px-3 py-2 text-sm text-left">
                                    <Select.Value />
                                    <Select.Indicator />
                                </Select.Trigger>
                                <Select.Popover>
                                    <ListBox className="p-1 rounded-xl shadow-lg border border-gray-100 bg-white">
                                        <ListBox.Item id="Vaccinated" textValue="Vaccinated" className="rounded-lg px-3 py-1.5 text-sm hover:bg-rose-50 hover:text-rose-600 cursor-pointer">Vaccinated <ListBox.ItemIndicator /></ListBox.Item>
                                        <ListBox.Item id="Non-Vaccinated" textValue="Non-Vaccinated" className="rounded-lg px-3 py-1.5 text-sm hover:bg-rose-50 hover:text-rose-600 cursor-pointer">Not Vaccinated <ListBox.ItemIndicator /></ListBox.Item>
                                        <ListBox.Item id="Partial" textValue="Partial" className="rounded-lg px-3 py-1.5 text-sm hover:bg-rose-50 hover:text-rose-600 cursor-pointer">Partially Vaccinated <ListBox.ItemIndicator /></ListBox.Item>
                                    </ListBox>
                                </Select.Popover>
                            </Select>

                            <TextField name="location" isRequired className="w-full sm:col-span-2">
                                <Label className="text-xs font-semibold text-gray-700">Location</Label>
                                <Input
                                    placeholder="City, State / Region"
                                    className="w-full mt-1 rounded-xl border border-gray-200 bg-gray-50/50 px-3 py-2 text-sm transition-all focus:bg-white focus:border-rose-400 focus:ring-2 focus:ring-rose-100 outline-none"
                                />
                                <FieldError className="text-[11px] text-rose-500 mt-1" />
                            </TextField>
                        </div>
                    </div>

                    {/* Section 3: Media & Contact */}
                    <div className="space-y-3">
                        <div className="flex items-center gap-2 border-b border-gray-100 pb-2">
                            <span className="flex h-2 w-2 rounded-full bg-rose-500" />
                            <h2 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-gray-800">
                                Media & Contact Info
                            </h2>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <TextField name="imageURL" isRequired className="w-full sm:col-span-2">
                                <Label className="text-xs font-semibold text-gray-700">Photo URL</Label>
                                <Input
                                    type="url"
                                    placeholder="https://images.unsplash.com/photo-..."
                                    className="w-full mt-1 rounded-xl border border-gray-200 bg-gray-50/50 px-3 py-2 text-sm transition-all focus:bg-white focus:border-rose-400 focus:ring-2 focus:ring-rose-100 outline-none"
                                />
                                <FieldError className="text-[11px] text-rose-500 mt-1" />
                            </TextField>

                            <TextField name="email" defaultValue={owner?.email || ''} isRequired className="w-full sm:col-span-2">
                                <Label className="text-xs font-semibold text-gray-700">Owner Contact Email</Label>
                                <Input
                                    type="email"
                                    placeholder="owner@example.com"
                                    className="w-full mt-1 rounded-xl border border-gray-200 bg-gray-50/30 px-3 py-2 text-sm transition-all focus:bg-white focus:border-rose-400 focus:ring-2 focus:ring-rose-100 outline-none"
                                />
                                <FieldError className="text-[11px] text-rose-500 mt-1" />
                            </TextField>

                            <TextField name="description" isRequired className="w-full sm:col-span-2">
                                <Label className="text-xs font-semibold text-gray-700">Description</Label>
                                <TextArea
                                    placeholder="Share details about temperament, care routines, and diet..."
                                    className="w-full mt-1 min-h-22.5 rounded-xl border border-gray-200 bg-gray-50/50 p-3 text-sm transition-all focus:bg-white focus:border-rose-400 focus:ring-2 focus:ring-rose-100 outline-none resize-y"
                                />
                                <FieldError className="text-[11px] text-rose-500 mt-1" />
                            </TextField>
                        </div>
                    </div>

                    {/* Submit Action Button */}
                    <div className="pt-2">
                        <Button
                            type="submit"
                            isDisabled={loading}
                            className="w-full py-3 bg-linear-to-r from-rose-500 to-rose-600 hover:from-rose-600 hover:to-rose-700 active:scale-[0.99] text-white font-bold text-sm rounded-xl shadow-lg shadow-rose-200/60 transition-all duration-150 flex items-center justify-center gap-2"
                        >
                            {loading ? (
                                <>
                                    <svg className="animate-spin h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                                    </svg>
                                    <span>Publishing Pet...</span>
                                </>
                            ) : (
                                'Publish Pet Listing'
                            )}
                        </Button>
                    </div>

                </form>
            </div>
        </div>
    );
};

export default AddPetPage;
