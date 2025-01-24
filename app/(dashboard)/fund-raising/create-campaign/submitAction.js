"use server";

import { postRequest } from '../../../utils/api2';

export async function SaveFromData(queryData) {
    const response = await postRequest('fund-raising/create-campaign',
        queryData
    );

    return response;
}

