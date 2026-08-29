"use client"

import Link from 'next/link';
import React from 'react';
import CancelModal from './CancelModal';
import { Button } from '@heroui/react';
import { Calendar, Eye, PawPrint, Clock, CheckCircle2, AlertCircle, XCircle } from 'lucide-react';

const MyRequestCard = ({ ReqItem }) => {
    const { name, date, petId, status } = ReqItem || {};

    // Helper for rendering status badges dynamically
    const renderStatusBadge = () => {
        switch (status?.toLowerCase()) {
            case 'approved':
                return (
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-emerald-100 text-emerald-700 border border-emerald-200">
                        <CheckCircle2 size={14} />
                        Approved
                    </span>
                );
            case 'rejected':
                return (
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-rose-100 text-rose-700 border border-rose-200">
                        <XCircle size={14} />
                        Rejected
                    </span>
                );
            default:
                return (
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-amber-100 text-amber-700 border border-amber-200">
                        <Clock size={14} />
                        Pending
                    </span>
                );
        }
    };

    return (
        <div className="group bg-white rounded-2xl border border-gray-100 shadow-xs hover:shadow-md transition-all duration-300 p-5 md:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-6">

            {/* Left Content Area */}
            <div className="space-y-3">
                {/* Pet Name & Badges */}
                <div className="flex flex-wrap items-center gap-2 md:gap-3">
                    <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-xl bg-orange-100 text-orange-600 flex items-center justify-center shrink-0">
                            <PawPrint size={18} />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 group-hover:text-orange-600 transition-colors">
                            {name || "Pet"}
                        </h3>
                    </div>

                    {status === "Approved" && (
                        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-600 border border-emerald-200">
                            Adopted
                        </span>
                    )}

                    {renderStatusBadge()}
                </div>

                {/* Dates Section */}
                <div className="flex flex-wrap items-center gap-4 text-xs md:text-sm text-gray-500 font-medium">
                    <div className="flex items-center gap-1.5">
                        <Calendar size={15} className="text-gray-400" />
                        <span>Pick Up: <strong className="text-gray-700">{date || 'N/A'}</strong></span>
                    </div>

                    <span className="hidden sm:inline text-gray-300">•</span>

                    <div className="flex items-center gap-1.5 text-xs text-gray-400">
                        <Clock size={14} className="text-gray-400" />
                        <span>Requested: {date || 'N/A'}</span>
                    </div>
                </div>
            </div>

            {/* Right Action Buttons */}
            <div className="flex items-center gap-2 justify-end pt-3 sm:pt-0 border-t sm:border-t-0 border-gray-100">
                <Link href={`/all-pets/${petId}`}>
                    <Button
                        variant="flat"
                        className="bg-orange-50 hover:bg-orange-100 text-orange-600 font-bold px-4 py-2 rounded-xl text-xs md:text-sm transition-all flex items-center gap-1.5">
                        <Eye size={16} />
                        <span>View</span>
                    </Button>
                </Link>

                <CancelModal ReqItem={ReqItem} />
            </div>

        </div>
    );
};

export default MyRequestCard;
