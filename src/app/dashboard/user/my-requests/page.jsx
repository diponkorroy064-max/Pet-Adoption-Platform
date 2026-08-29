import MyRequestCard from '@/component/dashboard/user/MyRequestCard';
import { auth } from '@/lib/auth';
import { getAdoptRequestByEmail } from '@/lib/api/data';
import { headers } from 'next/headers';
import React from 'react';
import { FileText, Clock, CheckCircle2, XCircle } from 'lucide-react';

const MyRequestPage = async () => {
    const session = await auth.api.getSession({
        headers: await headers()
    });

    const userEmail = session?.user?.email;
    const emailBasedRequestData = (await getAdoptRequestByEmail(userEmail)) || [];

    // Calculate Request Statistics
    const totalRequests = emailBasedRequestData.length;
    const pendingRequests = emailBasedRequestData.filter(req => req.status?.toLowerCase() === 'pending').length;
    const approvedRequests = emailBasedRequestData.filter(req => req.status?.toLowerCase() === 'approved').length;
    const rejectedRequests = emailBasedRequestData.filter(req => req.status?.toLowerCase() === 'rejected').length;

    return (
        <div className="space-y-8">

            {/* Header Banner */}
            <div className="relative overflow-hidden rounded-3xl bg-linear-to-r from-orange-500 via-amber-500 to-orange-600 p-6 md:p-8 text-white shadow-xl">
                {/* Decorative Pattern Background */}
                <div className="absolute -right-10 -bottom-10 w-60 h-60 bg-white/10 rounded-full blur-2xl pointer-events-none" />
                <div className="absolute top-0 right-1/4 w-32 h-32 bg-amber-300/20 rounded-full blur-xl pointer-events-none" />

                <div className="relative z-10 max-w-2xl space-y-3">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-xs font-semibold uppercase tracking-wider">
                        <FileText size={14} />
                        <span>Adoption Tracker</span>
                    </div>
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight">
                        My Adoption Requests
                    </h1>
                    <p className="text-orange-100 text-sm sm:text-base leading-relaxed">
                        Track the status of your pet adoption applications, review details, and stay updated on your journey toward welcoming a new companion home.
                    </p>
                </div>
            </div>

            {/* Quick Stats Summary */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                <div className="p-4 bg-white rounded-2xl border border-gray-100 shadow-sm flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-orange-100 text-orange-600 flex items-center justify-center shrink-0">
                        <FileText size={20} />
                    </div>
                    <div>
                        <p className="text-xs text-gray-500 font-semibold">Total Requests</p>
                        <h4 className="text-xl font-bold text-gray-900">{totalRequests}</h4>
                    </div>
                </div>

                <div className="p-4 bg-white rounded-2xl border border-gray-100 shadow-sm flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-600 flex items-center justify-center shrink-0">
                        <Clock size={20} />
                    </div>
                    <div>
                        <p className="text-xs text-gray-500 font-semibold">Pending</p>
                        <h4 className="text-xl font-bold text-gray-900">{pendingRequests}</h4>
                    </div>
                </div>

                <div className="p-4 bg-white rounded-2xl border border-gray-100 shadow-sm flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
                        <CheckCircle2 size={20} />
                    </div>
                    <div>
                        <p className="text-xs text-gray-500 font-semibold">Approved</p>
                        <h4 className="text-xl font-bold text-gray-900">{approvedRequests}</h4>
                    </div>
                </div>

                <div className="p-4 bg-white rounded-2xl border border-gray-100 shadow-sm flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-rose-100 text-rose-600 flex items-center justify-center shrink-0">
                        <XCircle size={20} />
                    </div>
                    <div>
                        <p className="text-xs text-gray-500 font-semibold">Rejected</p>
                        <h4 className="text-xl font-bold text-gray-900">{rejectedRequests}</h4>
                    </div>
                </div>
            </div>

            {/* Requests List */}
            <div className="space-y-4">
                {emailBasedRequestData.length === 0 ? (
                    <div className="text-center py-20 bg-white rounded-3xl border border-gray-100 shadow-sm space-y-3">
                        <div className="w-16 h-16 mx-auto rounded-full bg-orange-50 text-orange-500 flex items-center justify-center">
                            <FileText size={32} />
                        </div>
                        <h3 className="text-lg font-bold text-gray-800">No Adoption Requests Found</h3>
                        <p className="text-sm text-gray-500 max-w-sm mx-auto">
                            You haven`t submitted any adoption applications yet. Browse available pets to start your application!
                        </p>
                    </div>
                ) : (
                    <div className="flex flex-col gap-4">
                        {emailBasedRequestData.map((ReqItem) => (
                            <MyRequestCard ReqItem={ReqItem} key={ReqItem._id} />
                        ))}
                    </div>
                )}
            </div>

        </div>
    );
};

export default MyRequestPage;
