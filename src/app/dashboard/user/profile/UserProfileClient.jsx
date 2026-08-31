'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { User, Mail, Phone, MapPin, Calendar, Heart, PawPrint, ShieldCheck, Edit3, Camera, Settings, LogOut } from 'lucide-react';
import { Button } from '@heroui/react';
import { getUserProfile, updateUserProfile } from '@/lib/api/user';
import EditProfileModal from '@/component/dashboard/user/EditProfileModal';
import { toast } from 'react-toastify';


const UserProfileClient = ({ currentUserId }) => {
    const userId = currentUserId;
    const [activeTab, setActiveTab] = useState('overview');
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);

    // Fetch user profile---
    useEffect(() => {
        const loadUserData = async () => {
            try {
                const res = await getUserProfile(userId);
                console.log('res from user profile client', res);
                setUser(res.data);
            } catch (err) {
                console.error(err.message);
            } finally {
                setLoading(false);
            }
        };

        if (userId) loadUserData();
    }, [userId]);

    // Handle profile update from modal---
    const handleSaveProfile = async (updatedFields) => {
        try {
            const res = await updateUserProfile(userId, updatedFields);
            setUser(res.data);
            toast.success('Profile updated successfully!');
        } catch (err) {
            toast.error(err.message || 'Failed to update profile');
            throw err;
        }
    };

    if (loading) return <div className="p-6 text-center text-gray-500 font-medium">Loading user profile...</div>;
    if (!user) return <div className="p-6 text-center text-red-500 font-medium">User profile not found.</div>;


    return (
        <div className="space-y-6 max-w-6xl">
            {/* Header Banner & Profile Info */}
            <div className="bg-white rounded-3xl border border-gray-100 shadow-xs overflow-hidden">
                <div className="relative h-44 sm:h-60 w-full bg-linear-to-r from-orange-400 via-pink-500 to-rose-500">
                    <Image
                        src={user?.coverImage || "https://images.unsplash.com/photo-1655306963086-a34411c0915b"}
                        alt="Cover"
                        fill
                        sizes="100vw"
                        className="object-cover opacity-80"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent" />
                </div>

                <div className="relative px-6 pb-6 pt-0 sm:px-8">
                    <div className="flex flex-col sm:flex-row items-center sm:items-end justify-between -mt-16 sm:-mt-20 gap-4 mb-6">
                        <div className="relative group">
                            <div className="relative w-28 h-28 sm:w-36 sm:h-36 rounded-2xl ring-4 ring-white shadow-xl overflow-hidden bg-gray-100">
                                <Image
                                    src={user?.avatar || user?.image || "https://images.unsplash.com/photo-1534528741775-53994a69daeb"}
                                    alt={user?.name || 'User Avatar'}
                                    fill
                                    sizes="144px"
                                    className="object-cover"
                                />
                            </div>
                            <button className="absolute bottom-2 right-2 p-2 bg-gray-900/80 hover:bg-gray-900 text-white rounded-xl backdrop-blur-md shadow-xs transition">
                                <Camera size={14} />
                            </button>
                        </div>

                        <div className="flex items-center gap-2">
                            {/* Modal Component */}
                            <EditProfileModal
                                isEditModalOpen={isEditModalOpen}
                                setIsEditModalOpen={setIsEditModalOpen}
                                onClose={() => setIsEditModalOpen(false)}
                                user={user}
                                onSave={handleSaveProfile}
                            />

                            {/* settings button */}
                            <Button variant="flat" className="bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold px-3 py-2 rounded-xl text-xs sm:text-sm transition">
                                <Settings size={16} />
                            </Button>
                        </div>
                    </div>

                    <div className="space-y-3 text-center sm:text-left">
                        <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                            <h1 className="text-2xl sm:text-3xl font-black text-gray-900">{user.name}</h1>
                            <span className="inline-flex items-center gap-1 self-center sm:self-auto px-2.5 py-0.5 rounded-full text-xs font-bold bg-emerald-100 text-emerald-700 border border-emerald-200">
                                <ShieldCheck size={14} /> Verified Member
                            </span>
                        </div>

                        <p className="badge badge-primary">
                            {user?.role?.toUpperCase() || 'Member'}
                        </p>

                        <p className="text-xs sm:text-sm text-gray-600 max-w-5xl leading-relaxed">
                            {user.bio || 'Animal lover and passionate foster volunteer.'}
                        </p>
                    </div>

                    <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 sm:gap-6 pt-5 mt-5 border-t border-gray-100 text-xs sm:text-sm text-gray-500 font-medium">
                        <span className="flex items-center gap-1.5">
                            <Mail size={15} className="text-orange-500" />
                            {user.email}
                        </span>
                        <span className="flex items-center gap-1.5">
                            <Phone size={15} className="text-orange-500" />
                            {user.phone || 'N/A'}
                        </span>
                        <span className="flex items-center gap-1.5">
                            <MapPin size={15} className="text-orange-500" />
                            {user.location || 'N/A'}
                        </span>
                        <span className="flex items-center gap-1.5">
                            <Calendar size={15} className="text-orange-500" />
                            Joined {user.joinedDate || 'Recently'}
                        </span>
                    </div>
                </div>
            </div>

            {/* Dashboard Stats Overview */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-xs flex items-center justify-between">
                    <div className="space-y-1">
                        <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Adopted Pets</p>
                        <p className="text-2xl sm:text-3xl font-black text-gray-900">{user?.stats?.adoptedPets || 0}</p>
                    </div>
                    <div className="w-12 h-12 rounded-xl bg-orange-50 text-orange-500 flex items-center justify-center">
                        <PawPrint size={24} />
                    </div>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-xs flex items-center justify-between">
                    <div className="space-y-1">
                        <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Saved Favorites</p>
                        <p className="text-2xl sm:text-3xl font-black text-gray-900">{user?.stats?.favoritePets || 0}</p>
                    </div>
                    <div className="w-12 h-12 rounded-xl bg-rose-50 text-rose-500 flex items-center justify-center">
                        <Heart size={24} />
                    </div>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-xs flex items-center justify-between">
                    <div className="space-y-1">
                        <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Active Requests</p>
                        <p className="text-2xl sm:text-3xl font-black text-gray-900">{user?.stats?.pendingRequests || 0}</p>
                    </div>
                    <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-500 flex items-center justify-center">
                        <User size={24} />
                    </div>
                </div>
            </div>

            {/* Navigation Tabs */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-xs p-2 flex items-center gap-2">
                {[
                    { id: 'overview', label: 'Account Overview' },
                    { id: 'activity', label: 'Recent Activity' },
                    { id: 'security', label: 'Security & Settings' },
                ].map((tab) => (
                    <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`flex-1 py-2.5 px-4 rounded-xl text-xs sm:text-sm font-bold transition-all ${activeTab === tab.id
                            ? 'bg-orange-500 text-white shadow-md shadow-orange-500/20'
                            : 'text-gray-500 hover:text-gray-900 hover:bg-gray-50'
                            }`}>
                        {tab.label}
                    </button>
                ))}
            </div>

            {/* Tab Content Box */}
            <div className="bg-white rounded-3xl border border-gray-100 shadow-xs p-6 sm:p-8 space-y-6">
                {activeTab === 'overview' && (
                    <div className="space-y-4">
                        <h3 className="text-lg font-bold text-gray-900">Personal Details</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                            <div className="p-4 bg-gray-50 rounded-2xl space-y-1">
                                <span className="text-xs text-gray-400 font-medium">Full Name</span>
                                <p className="font-semibold text-gray-800">{user.name}</p>
                            </div>
                            <div className="p-4 bg-gray-50 rounded-2xl space-y-1">
                                <span className="text-xs text-gray-400 font-medium">Email Address</span>
                                <p className="font-semibold text-gray-800">{user.email}</p>
                            </div>
                            <div className="p-4 bg-gray-50 rounded-2xl space-y-1">
                                <span className="text-xs text-gray-400 font-medium">Phone Number</span>
                                <p className="font-semibold text-gray-800">{user.phone || 'N/A'}</p>
                            </div>
                            <div className="p-4 bg-gray-50 rounded-2xl space-y-1">
                                <span className="text-xs text-gray-400 font-medium">Location</span>
                                <p className="font-semibold text-gray-800">{user.location || 'N/A'}</p>
                            </div>
                        </div>
                    </div>
                )}

                {activeTab === 'activity' && (
                    <div className="space-y-4">
                        <h3 className="text-lg font-bold text-gray-900">Recent Activity</h3>
                        <p className="text-sm text-gray-500">Your recent adoption applications and saved pets log will appear here.</p>
                    </div>
                )}

                {activeTab === 'security' && (
                    <div className="space-y-4">
                        <h3 className="text-lg font-bold text-gray-900">Account Security</h3>
                        <p className="text-sm text-gray-500">Manage your password, notifications, and account credentials.</p>
                    </div>
                )}

                <div className="pt-6 border-t border-gray-100 flex items-center justify-between">
                    <span className="text-xs text-gray-400 font-medium">Need help with your account?</span>
                </div>
            </div>
        </div>
    );
};

export default UserProfileClient;
