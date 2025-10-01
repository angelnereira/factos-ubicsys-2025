"use client"
import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react';

interface FoliosContextType {
  folios: number;
  isLoading: boolean;
}

const FoliosContext = createContext<FoliosContextType | undefined>(undefined);

export function FoliosProvider({ children }: { children: ReactNode }) {
  const [folios, setFolios] = useState(4821); // Default value
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simular llamada a la API para obtener los folios restantes
    const fetchFolios = () => {
      setIsLoading(true);
      setTimeout(() => {
        // En una aplicación real, aquí harías la llamada a la API de HKA
        // const response = await hkaApi.getFoliosRestantes();
        // setFolios(response.data.folios);
        
        // Simulación: Generar un número aleatorio para ver el cambio
        const randomFolios = Math.floor(Math.random() * (5000 - 4500 + 1)) + 4500;
        setFolios(randomFolios);
        setIsLoading(false);
      }, 1000);
    };

    fetchFolios();

    // Opcional: Actualizar periódicamente
    const interval = setInterval(fetchFolios, 60000); // cada 1 minuto

    return () => clearInterval(interval);
  }, []);

  return (
    <FoliosContext.Provider value={{ folios, isLoading }}>
      {children}
    </FoliosContext.Provider>
  );
}

export function useFolios() {
  const context = useContext(FoliosContext);
  if (context === undefined) {
    throw new Error('useFolios must be used within a FoliosProvider');
  }
  return context;
}
