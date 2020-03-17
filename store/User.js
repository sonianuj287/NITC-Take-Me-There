export const CREATE_USER = 'CREATE_USER';

export const createuser = (name,password,contact,email) => {
    return {
        type: CREATE_USER,
        userData: {
            name,
            password,
            contact,
            email
        }
    };
};