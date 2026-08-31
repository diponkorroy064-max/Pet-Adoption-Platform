'use client';
import React, { useState } from 'react';
import {
    Button,
    Input,
    Label,
    Modal,
    Surface,
    TextArea,
    TextField,
} from '@heroui/react';
import { Edit3 } from 'lucide-react';

const EditProfileModal = ({
    isEditModalOpen,
    onClose,
    user,
    onSave,
    setIsEditModalOpen,
}) => {
    const [formData, setFormData] = useState({
        name: user?.name || '',
        phone: user?.phone || '',
        location: user?.location || '',
        bio: user?.bio || '',
    });

    const [isSubmitting, setIsSubmitting] = useState(false);

    // Handle input changes
    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    // Handle form submit
    const handleSubmit = async (e) => {
        e.preventDefault();

        setIsSubmitting(true);

        try {
            await onSave(formData);

            onClose();
        } catch (error) {
            console.error('Failed to update user profile:', error);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <Modal
            isOpen={isEditModalOpen}
            onOpenChange={setIsEditModalOpen}
        >
            {/* Edit Profile Button */}
            <Button
                onPress={() => {
                    // Load latest user data when opening the modal
                    setFormData({
                        name: user?.name || '',
                        phone: user?.phone || '',
                        location: user?.location || '',
                        bio: user?.bio || '',
                    });

                    setIsEditModalOpen(true);
                }}
                variant="flat"
                className="bg-orange-50 hover:bg-orange-100 text-orange-600 font-bold px-4 py-2 rounded-xl text-xs sm:text-sm transition flex items-center gap-1.5"
            >
                <Edit3 size={16} />
                <span>Edit Profile</span>
            </Button>

            <Modal.Backdrop>
                <Modal.Container placement="auto">
                    <Modal.Dialog className="sm:max-w-md max-h-[90vh] flex flex-col">

                        <Modal.CloseTrigger />

                        {/* Header */}
                        <Modal.Header>
                            <Modal.Icon className="bg-orange-100 text-orange-600">
                                <Edit3 className="size-5" />
                            </Modal.Icon>

                            <Modal.Heading>
                                Edit Profile Details
                            </Modal.Heading>

                            <p className="mt-1.5 text-sm leading-5 text-muted">
                                Update your account details and profile
                                information below.
                            </p>
                        </Modal.Header>

                        {/* Form */}
                        <form
                            onSubmit={handleSubmit}
                            className="flex flex-col flex-1 overflow-hidden"
                        >
                            <Modal.Body className="p-6 overflow-y-auto">

                                <Surface variant="default">
                                    <div className="flex flex-col gap-4">

                                        {/* Name */}
                                        <TextField
                                            className="w-full"
                                            name="name"
                                            variant="secondary"
                                        >
                                            <Label>Full Name</Label>

                                            <Input
                                                placeholder="Enter your name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                required
                                            />
                                        </TextField>

                                        {/* Phone */}
                                        <TextField
                                            className="w-full"
                                            name="phone"
                                            type="tel"
                                            variant="secondary"
                                        >
                                            <Label>Phone Number</Label>

                                            <Input
                                                placeholder="Enter your phone number"
                                                value={formData.phone}
                                                onChange={handleChange}
                                            />
                                        </TextField>

                                        {/* Location */}
                                        <TextField
                                            className="w-full"
                                            name="location"
                                            variant="secondary"
                                        >
                                            <Label>Location</Label>

                                            <Input
                                                placeholder="Enter your location"
                                                value={formData.location}
                                                onChange={handleChange}
                                            />
                                        </TextField>

                                        {/* Bio */}
                                        <TextField
                                            className="w-full"
                                            name="bio"
                                            variant="secondary"
                                        >
                                            <Label>Bio</Label>

                                            <TextArea
                                                placeholder="Tell us about yourself"
                                                value={formData.bio}
                                                onChange={handleChange}
                                                rows={3}
                                            />
                                        </TextField>

                                    </div>
                                </Surface>

                            </Modal.Body>

                            {/* Footer */}
                            <Modal.Footer className="border-t border-gray-100 p-4">

                                <Button
                                    type="button"
                                    variant="secondary"
                                    onPress={onClose}
                                    isDisabled={isSubmitting}
                                >
                                    Cancel
                                </Button>

                                <Button
                                    type="submit"
                                    isLoading={isSubmitting}
                                    className="bg-orange-500 hover:bg-orange-600 text-white font-bold"
                                >
                                    Save Changes
                                </Button>

                            </Modal.Footer>

                        </form>

                    </Modal.Dialog>
                </Modal.Container>
            </Modal.Backdrop>
        </Modal>
    );
};

export default EditProfileModal;
