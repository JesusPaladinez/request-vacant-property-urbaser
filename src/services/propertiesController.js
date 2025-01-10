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