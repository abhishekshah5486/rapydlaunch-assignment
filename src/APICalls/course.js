const { axiosInstance } = require('./index');

export const retrieve_all_courses = async () => {
    try {
        
        const response = await axiosInstance.get('/courses');
        return response.data;

    } catch (err) {
        
        return {
            success: false,
            message: 'Internal server error.',
        };

    }
}

export const retrieve_course_by_id = async (courseId) => {
    try {
        
        const response = await axiosInstance.get(`/courses/${courseId}`);
        return response.data;

    } catch (err) {
        
        return {
            success: false,
            message: 'Internal server error.',
        };

    }
}

export const retrieve_courses_by_instructor_id = async (instructorId) => {
    try {
        
        const response = await axiosInstance.get(`/courses/instructor/${instructorId}`);
        return response.data;

    } catch (err) {
        
        return {
            success: false,
            message: 'Internal server error.',
        };

    }
}