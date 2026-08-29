const BaseUrl = process.env.NEXT_PUBLIC_SERVER_URL || 'http://localhost:5000';
const API_BASE_URL = `${BaseUrl}/api`;


/*================================
 * Fetch User Profile by ID
=================================*/
export const getUserProfile = async (userId) => {
    try {
        const response = await fetch(`${API_BASE_URL}/users/${userId}`, {
            method: 'GET',
            headers: {'Content-Type': 'application/json'},
            cache: 'no-store',
        });

        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.message || 'Failed to fetch user profile');
        }

        return data;
    } catch (error) {
        console.error('getUserProfile error:', error);
        throw error;
    }
};


/*==============================
 * Update User Profile
================================*/
export const updateUserProfile = async (userId, updateData) => {
    try {
        const response = await fetch(`${API_BASE_URL}/users/${userId}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updateData),
        });

        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.message || 'Failed to update user profile');
        }

        return data;
    } catch (error) {
        console.error('updateUserProfile error:', error);
        throw error;
    }
};


