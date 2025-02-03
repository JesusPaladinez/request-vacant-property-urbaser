import React, { createContext, useState, useEffect } from 'react';

export const PropertiesContext = createContext();

export const PropertiesProvider = ({ children }) => {
    const [propertyId, setPropertyId] = useState(() => {
        try {
            return localStorage.getItem('propertyId') || null;
        } catch (error) {
            console.error("Error al obtener el ID del predio del localStorage.", error);            
        }
    });

    useEffect(() => {
        if (propertyId) {
            localStorage.setItem('propertyId', propertyId);
        }        
    }, [propertyId]);

    return (
        <PropertiesContext.Provider value={{ propertyId, setPropertyId }}>
            {children}
        </PropertiesContext.Provider>
    );
}