import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import Product from './pages/Product';
import Pricing from './pages/Pricing';
import Homepage from './pages/Homepage';
import Login from './pages/Login';
import PageNotFound from './components/PageNotFound';
import AppLayout from './pages/AppLayout';
import CityList from './components/CityList';
import City from './components/City';
import Form from './components/Form';
import CountryList from './components/CountryList';
import { CitiesProvider } from './contexts/CitiesContext';

const App = () => {
    return (
        <CitiesProvider>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Homepage />} />
                    <Route path='product' element={<Product />} />
                    <Route path='pricing' element={<Pricing />} />
                    <Route path='login' element={<Login />} />
                    <Route path='app' element={<AppLayout />}>
                        <Route index element={<Navigate replace to='cities' />} />
                        <Route path='cities' element={<CityList />}></Route>
                        <Route path='cities/:id' element={<City />}>
                            {' '}
                        </Route>
                        <Route path='countries' element={<CountryList />}></Route>
                        <Route path='form' element={<Form />}></Route>
                    </Route>
                    <Route path='*' element={<PageNotFound />} />
                </Routes>
            </BrowserRouter>
        </CitiesProvider>
    );
};

export default App;
