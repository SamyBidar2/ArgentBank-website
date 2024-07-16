export const UserEdit = async (userName) => {
    try {
        const response = await fetch('http://localhost:3001/api/v1/user/profile', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify({ userName })
        });

        if (!response.ok) {
            throw new Error('Failed to update user profile');
        }

        const result = await response.json();
        console.log(result);
        return result; 
    } catch (error) {
        console.error('Error updating user profile:', error.message);
        throw error; 
    }
};
