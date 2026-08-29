import React from 'react';
import UserProfileClient from './UserProfileClient';
import { getUserSession } from '@/lib/api/session';

const UserProfile = async () => {
    const currentUser = await getUserSession();
    const currentUserId = currentUser?.id;
    // console.log('user from user profile', user)

    return (
        <>
            <UserProfileClient currentUserId={currentUserId} />
        </>
    );
};

export default UserProfile;
