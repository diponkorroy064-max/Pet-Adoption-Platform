'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Heart, Clock, CheckCircle2, CreditCard, ArrowUpRight, ArrowRight, PawPrint, FileText} from 'lucide-react';

const stats = [
    {
        title: "Adoption Requests",
        value: "3",
        subtitle: "1 pending approval",
        icon: Clock,
        bgColor: "bg-blue-50",
        iconColor: "text-blue-600",
    },
    {
        title: "Adopted Pets",
        value: "1",
        subtitle: "Forever home found",
        icon: CheckCircle2,
        bgColor: "bg-green-50",
        iconColor: "text-green-600",
    },
    {
        title: "Favorite Pets",
        value: "12",
        subtitle: "Saved to wishlist",
        icon: Heart,
        bgColor: "bg-rose-50",
        iconColor: "text-rose-600",
    },
    {
        title: "Total Paid",
        value: "$150",
        subtitle: "Adoption & care fees",
        icon: CreditCard,
        bgColor: "bg-amber-50",
        iconColor: "text-amber-600",
    },
];

const adoptionRequests = [
    {
        id: "REQ-1001",
        petName: "Milo",
        breed: "Golden Retriever",
        date: "2026-08-20",
        status: "Pending",
        statusBg: "bg-amber-100 text-amber-700",
    },
    {
        id: "REQ-0982",
        petName: "Luna",
        breed: "Siamese Cat",
        date: "2026-07-15",
        status: "Approved",
        statusBg: "bg-green-100 text-green-700",
    },
];

const recentPayments = [
    {
        id: "PAY-8821",
        description: "Adoption Fee - Luna",
        date: "2026-07-16",
        amount: "$150.00",
        status: "Completed",
        statusBg: "bg-green-100 text-green-700",
    },
    {
        id: "PAY-8750",
        description: "Application Processing",
        date: "2026-08-20",
        amount: "$0.00",
        status: "Waived",
        statusBg: "bg-gray-100 text-gray-700",
    },
];


export default function UserDashboardPage() {
    return (
        <div className="space-y-8">
            {/* Header Banner */}
            <div className="p-6 md:p-8 bg-white rounded-2xl border border-gray-100 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h3 className="text-2xl md:text-3xl font-black text-gray-900">User Dashboard</h3>
                    <p className="text-gray-500 mt-1">Track your adoption requests, payment activity, and favorite pets.</p>
                </div>
                <div className="flex items-center gap-3">
                    <Link
                        href="/all-pets"
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-semibold text-sm transition-all shadow-md shadow-orange-500/20"
                    >
                        <PawPrint size={18} />
                        <span>Find Pets</span>
                    </Link>
                </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                {stats.map((item, index) => {
                    const Icon = item.icon;
                    return (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="p-6 bg-white rounded-2xl border border-gray-100 shadow-sm flex items-center gap-4">
                            <div className={`w-14 h-14 rounded-2xl ${item.bgColor} ${item.iconColor} flex items-center justify-center shrink-0`}>
                                <Icon size={26} />
                            </div>
                            <div>
                                <p className="text-sm font-semibold text-gray-500">{item.title}</p>
                                <h4 className="text-2xl font-black text-gray-900 mt-0.5">{item.value}</h4>
                                <p className="text-xs text-gray-400 mt-0.5">{item.subtitle}</p>
                            </div>
                        </motion.div>
                    );
                })}
            </div>

            {/* Main Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

                {/* Adoption Requests Table */}
                <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 space-y-4">
                    <div className="flex items-center justify-between">
                        <div>
                            <h4 className="text-lg font-bold text-gray-900">My Adoption Requests</h4>
                            <p className="text-xs text-gray-500">Recent applications and their status</p>
                        </div>
                        <Link href="/dashboard/requests" className="text-xs font-bold text-orange-500 hover:underline flex items-center gap-1">
                            View All <ArrowUpRight size={14} />
                        </Link>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="w-full text-left text-sm text-gray-600">
                            <thead className="bg-gray-50 text-xs text-gray-400 uppercase">
                                <tr>
                                    <th className="py-3 px-3 rounded-l-lg">Pet</th>
                                    <th className="py-3 px-3">Date</th>
                                    <th className="py-3 px-3">Status</th>
                                    <th className="py-3 px-3 rounded-r-lg text-right">Action</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100">
                                {adoptionRequests.map((req) => (
                                    <tr key={req.id} className="hover:bg-gray-50/50 transition">
                                        <td className="py-3.5 px-3">
                                            <div className="font-bold text-gray-900">{req.petName}</div>
                                            <div className="text-xs text-gray-400">{req.breed}</div>
                                        </td>
                                        <td className="py-3.5 px-3 text-xs">{req.date}</td>
                                        <td className="py-3.5 px-3">
                                            <span className={`px-2.5 py-1 rounded-full text-xs font-bold ${req.statusBg}`}>
                                                {req.status}
                                            </span>
                                        </td>
                                        <td className="py-3.5 px-3 text-right">
                                            <button className="text-gray-400 hover:text-gray-700 font-semibold text-xs inline-flex items-center gap-1">
                                                Details <ArrowRight size={12} />
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Recent Payments Table */}
                <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 space-y-4">
                    <div className="flex items-center justify-between">
                        <div>
                            <h4 className="text-lg font-bold text-gray-900">Payment History</h4>
                            <p className="text-xs text-gray-500">Transactions and fee receipts</p>
                        </div>
                        <Link href="/dashboard/payments" className="text-xs font-bold text-orange-500 hover:underline flex items-center gap-1">
                            View All <ArrowUpRight size={14} />
                        </Link>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="w-full text-left text-sm text-gray-600">
                            <thead className="bg-gray-50 text-xs text-gray-400 uppercase">
                                <tr>
                                    <th className="py-3 px-3 rounded-l-lg">Description</th>
                                    <th className="py-3 px-3">Amount</th>
                                    <th className="py-3 px-3">Status</th>
                                    <th className="py-3 px-3 rounded-r-lg text-right">Receipt</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100">
                                {recentPayments.map((pay) => (
                                    <tr key={pay.id} className="hover:bg-gray-50/50 transition">
                                        <td className="py-3.5 px-3">
                                            <div className="font-bold text-gray-900">{pay.description}</div>
                                            <div className="text-xs text-gray-400">{pay.date}</div>
                                        </td>
                                        <td className="py-3.5 px-3 font-bold text-gray-900">{pay.amount}</td>
                                        <td className="py-3.5 px-3">
                                            <span className={`px-2.5 py-1 rounded-full text-xs font-bold ${pay.statusBg}`}>
                                                {pay.status}
                                            </span>
                                        </td>
                                        <td className="py-3.5 px-3 text-right">
                                            <button className="text-gray-400 hover:text-orange-500 transition p-1">
                                                <FileText size={16} />
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

            </div>
        </div>
    );
}
