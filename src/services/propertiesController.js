import apiClient from "./apiClient";

export const getPropertyById = async ( propertyId ) => {
    try {
        const response = await apiClient.get(`/properties/${propertyId}`)
        return response.data;
    } catch (error) {
        throw error;
    }
}