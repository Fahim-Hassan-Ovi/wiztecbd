import { Footer } from '../components/Footer';
import Navbar from '../components/Navbar';
import { Outlet, useLoaderData } from 'react-router-dom';
import { Tools } from '../components/Tools';
import { Reviews } from '../components/Reviews';

const MainLayout = () => {
    const data = useLoaderData();
    return (
        <div>
            <Navbar></Navbar>
            <Outlet />
             <Reviews data={data} /> 
            <Tools></Tools>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;