import { createContext, useState, useEffect, useContext } from 'react';

const BASE_URL = 'http://localhost:8000';
const CitiesContext = createContext();

const CitiesProvider = ({ children }) => {
    const [cities, setCities] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [currentCity, setCurrentCity] = useState({});

    console.log(cities);

    useEffect(() => {
        async function fetchCities() {
            try {
                setIsLoading(true);
                const res = await fetch(`${BASE_URL}/cities`);
                const data = await res.json();
                setCities(data);
            } catch {
                alert('There was an error loading data...');
            } finally {
                setIsLoading(false);
            }
        }
        fetchCities();
    }, []);

    async function getCity(id) {
        try {
            setIsLoading(true);
            const res = await fetch(`${BASE_URL}/cities/${id}`);
            const data = await res.json();
            setCurrentCity(data);
        } catch {
            alert('There was an error loading data...');
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <CitiesContext.Provider value={{ isLoading, cities, currentCity, getCity }}>
            {children}
        </CitiesContext.Provider>
    );
};
const useCities = () => {
    const context = useContext(CitiesContext);
    if (context === undefined)
        throw new Error('Cities context was used outside the Cities Provider');
    return context;
};
export { CitiesProvider, useCities };
