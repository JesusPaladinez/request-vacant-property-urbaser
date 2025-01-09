import apiClient from "./apiClient";

export const getOwnerById = async ( ownerId ) => {
    try {
        const response = await apiClient.get(`/owners/${ownerId}`);
        return response.data;	
    } catch (error) {
        throw error;
    }
}

