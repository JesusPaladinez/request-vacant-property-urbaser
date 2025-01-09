import apiClient from "./apiClient";

export const getRequestById = async ( requestId ) => {
    try {
        const response = await apiClient.get(`/requests/${requestId}`)    
        return response.data;
    } catch (error) {
        throw error;
    }
}