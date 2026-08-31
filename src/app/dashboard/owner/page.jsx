'use client';

import React, { useState } from 'react';
import {
    PlusCircle,
    PawPrint,
    HeartHandshake,
    Clock,
    Edit3,
    Trash2,
    CheckCircle2,
    XCircle,
    User,
    Mail,
    Phone
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function OwnerDashboard() {
    // Mock Stats Data
    const stats = [
        { title: 'Total Pets Listed', value: '8', icon: PawPrint, color: 'bg-blue-500' },
        { title: 'Pending Applications', value: '4', icon: Clock, color: 'bg-amber-500' },
        { title: 'Successful Adoptions', value: '12', icon: HeartHandshake, color: 'bg-emerald-500' },
    ];

    // Mock Active Pet Listings
    const [pets, setPets] = useState([
        { id: '1', name: 'Buddy', species: 'Dog', breed: 'Golden Retriever', status: 'Available', image: 'https://images.unsplash.com/photo-1552053831-71594a27632d' },
        { id: '2', name: 'Luna', species: 'Cat', breed: 'Siamese', status: 'Pending', image: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba' },
        { id: '3', name: 'Max', species: 'Dog', breed: 'German Shepherd', status: 'Adopted', image: 'https://images.unsplash.com/photo-1589941013453-ec89f33b5e95' },
    ]);

    // Mock Adoption Requests
    const [applications, setApplications] = useState([
        { id: 'app_1', petName: 'Buddy', applicant: 'Alex Johnson', email: 'alex@example.com', phone: '+1 555-0192', date: 'Aug 29, 2026', status: 'Pending' },
        { id: 'app_2', petName: 'Luna', applicant: 'Sarah Smith', email: 'sarah@example.com', phone: '+1 555-0184', date: 'Aug 30, 2026', status: 'Pending' },
    ]);

    const handleStatusChange = (appId, newStatus) => {
        setApplications(prev =>
            prev.map(app => app.id === appId ? { ...app, status: newStatus } : app)
        );
    };

    return (
        <div className="min-h-screen bg-gray-50 p-6 md:p-10">
            <div className="max-w-7xl mx-auto space-y-8">

                {/* Header & Quick Action */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div>
                        <h1 className="text-3xl font-bold text-gray-900">Owner Dashboard</h1>
                        <p className="text-gray-500 mt-1">Manage your pet listings and review adoption applications.</p>
                    </div>
                    <Link href={'/dashboard/owner/add-pet'}
                        className="inline-flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-medium px-5 py-2.5 rounded-lg shadow-sm transition-colors">
                        <PlusCircle className="w-5 h-5" />
                        Add New Pet
                    </Link>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {stats.map((stat, idx) => {
                        const Icon = stat.icon;
                        return (
                            <div key={idx} className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm flex items-center gap-4">
                                <div className={`p-3 rounded-lg text-white ${stat.color}`}>
                                    <Icon className="w-6 h-6" />
                                </div>
                                <div>
                                    <p className="text-sm font-medium text-gray-500">{stat.title}</p>
                                    <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Main Content Sections */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                    {/* Pet Listings Column (2/3 width) */}
                    <div className="lg:col-span-2 bg-white rounded-xl border border-gray-100 shadow-sm p-6 space-y-6">
                        <div className="flex items-center justify-between">
                            <h2 className="text-xl font-bold text-gray-900">Your Active Pets</h2>
                            <span className="text-xs font-semibold text-gray-500 bg-gray-100 px-2.5 py-1 rounded-full">
                                {pets.length} Total
                            </span>
                        </div>

                        <div className="divide-y divide-gray-100">
                            {pets.map((pet) => (
                                <div key={pet.id} className="py-4 first:pt-0 last:pb-0 flex items-center justify-between gap-4">
                                    <div className="flex items-center gap-4">
                                        <Image width={40} height={40}
                                            src={pet.image}
                                            alt={pet.name}
                                            className="w-16 h-16 rounded-lg object-cover border border-gray-200"
                                        />
                                        <div>
                                            <h3 className="font-semibold text-gray-900">{pet.name}</h3>
                                            <p className="text-sm text-gray-500">{pet.species} • {pet.breed}</p>
                                            <span className={`inline-block mt-1 text-xs px-2 py-0.5 rounded font-medium ${pet.status === 'Available' ? 'bg-green-100 text-green-700' :
                                                    pet.status === 'Pending' ? 'bg-amber-100 text-amber-700' :
                                                        'bg-gray-100 text-gray-600'
                                                }`}>
                                                {pet.status}
                                            </span>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-2">
                                        <button
                                            onClick={() => alert(`Edit pet ${pet.id}`)}
                                            className="p-2 text-gray-600 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors"
                                            title="Edit Pet"
                                        >
                                            <Edit3 className="w-4 h-4" />
                                        </button>
                                        <button
                                            onClick={() => setPets(pets.filter(p => p.id !== pet.id))}
                                            className="p-2 text-gray-600 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                                            title="Delete Pet"
                                        >
                                            <Trash2 className="w-4 h-4" />
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Adoption Requests Column (1/3 width) */}
                    <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 space-y-6">
                        <h2 className="text-xl font-bold text-gray-900">Adoption Requests</h2>

                        {applications.length === 0 ? (
                            <p className="text-sm text-gray-500">No pending requests at this time.</p>
                        ) : (
                            <div className="space-y-4">
                                {applications.map((app) => (
                                    <div key={app.id} className="p-4 border border-gray-100 rounded-lg bg-gray-50/50 space-y-3">
                                        <div className="flex items-center justify-between">
                                            <span className="text-xs font-semibold text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded">
                                                For {app.petName}
                                            </span>
                                            <span className="text-xs text-gray-400">{app.date}</span>
                                        </div>

                                        <div className="space-y-1 text-sm text-gray-700">
                                            <div className="flex items-center gap-2 font-medium text-gray-900">
                                                <User className="w-4 h-4 text-gray-400" />
                                                {app.applicant}
                                            </div>
                                            <div className="flex items-center gap-2 text-xs text-gray-500">
                                                <Mail className="w-3.5 h-3.5" />
                                                {app.email}
                                            </div>
                                            <div className="flex items-center gap-2 text-xs text-gray-500">
                                                <Phone className="w-3.5 h-3.5" />
                                                {app.phone}
                                            </div>
                                        </div>

                                        {app.status === 'Pending' ? (
                                            <div className="flex gap-2 pt-2 border-t border-gray-100">
                                                <button
                                                    onClick={() => handleStatusChange(app.id, 'Approved')}
                                                    className="flex-1 inline-flex items-center justify-center gap-1 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-medium py-1.5 rounded transition-colors"
                                                >
                                                    <CheckCircle2 className="w-3.5 h-3.5" /> Accept
                                                </button>
                                                <button
                                                    onClick={() => handleStatusChange(app.id, 'Rejected')}
                                                    className="flex-1 inline-flex items-center justify-center gap-1 bg-red-600 hover:bg-red-700 text-white text-xs font-medium py-1.5 rounded transition-colors"
                                                >
                                                    <XCircle className="w-3.5 h-3.5" /> Reject
                                                </button>
                                            </div>
                                        ) : (
                                            <div className="pt-2 border-t border-gray-100">
                                                <span className={`text-xs font-medium ${app.status === 'Approved' ? 'text-emerald-600' : 'text-red-600'}`}>
                                                    Application {app.status}
                                                </span>
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>

                </div>

            </div>
        </div>
    );
}
