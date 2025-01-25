"use server";

import { set } from 'lodash';
import { postRequest, setAuthToken } from '../../../utils/api2';

export async function SaveFromData(prevState, formData) {
    try {
        const response = await postRequest('fund-raising/create-campaign', formData);

        if (response?.status === 'Success') {
            return { message: response.message };
        } else {
            console.log("response=", response);
            return { errors: response?.errors || 'An error occurred' };
        }
    } catch (error) {
        console.error("Error:", error);
        return { errors: 'An error occurred' };
    }

}

