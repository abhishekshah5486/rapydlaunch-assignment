const { axiosInstance } = require('./index');

export const login_user = async (email, password) => {
    try {
        
        const response = await axiosInstance.post('users/login', {
            email,
            password
        });
        return response.data;

    } catch (err) {

        return {
            success: false,
            message: 'Internal server error.',
        };
        
    }
}

export const register_user = async (email, password) => {
    try {
        const response = await axiosInstance.post('users/register', {
            email,
            password
        });
        return response.data;

    } catch (err) {

        return {
            success: false,
            message: 'Internal server error.',
        };
        
    }
}