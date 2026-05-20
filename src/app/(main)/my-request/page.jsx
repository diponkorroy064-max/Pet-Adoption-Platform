import MyRequestCard from '@/component/shared/MyRequestCard';
import { auth } from '@/lib/auth';
import { getAdoptRequestByEmail } from '@/lib/data';
import { headers } from 'next/headers';
import React from 'react';


const MyRequestPage = async () => {
    const session = await auth.api.getSession({
        headers: await headers()
    })
    // console.log(session);
    // console.log(session?.user);
    const userEmail = session?.user?.email;
    // console.log("user in myRequest page", userEmail);

    const emailBasedRequestData = await getAdoptRequestByEmail(userEmail);
    console.log(emailBasedRequestData);


    return (
        <div className='container mx-auto py-10'>
            <div>

            </div>

            <div className='flex flex-col gap-4'>
                {emailBasedRequestData.length === 0 ? <div className='text-center text-red-300 py-15'>There is no Adoption Request Present</div> :
                    emailBasedRequestData.map(ReqItem => <MyRequestCard ReqItem={ReqItem} key={ReqItem._id}></MyRequestCard>)
                }
            </div>
        </div>
    );
};

export default MyRequestPage;

