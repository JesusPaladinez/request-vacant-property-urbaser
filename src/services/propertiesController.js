import apiClient from "./apiClient";

export const getPropertyByNumberPlate = async ( numberPlate ) => {
    try {
        const response = await apiClient.get(`/properties/number-plate/${numberPlate}`)
        return response.data;
    } catch (error) {
        console.error("Error al obtener el predio por el número de matrícula.", error);
        throw error;
    }
}

export const getPropertyById = async ( propertyId ) => {
    try {
        const property = await apiClient.get(`/properties/${propertyId}`);
        return property.data;
    } catch (error) {
        console.error("Error al obtener el predio por el ID.", error);
        throw error;
    }
}