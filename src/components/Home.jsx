import Block from './Block';
import BlogPage from './BlogPage';
import { Outlet } from 'react-router-dom';
import './css/Home.css';

export default function Home(props) {
    return (
        <>

            <div className='container'>
                <div className='header' style={{ backgroundImage: `url(${props.imagePath})` }}>
                    <h1 style={{ textAlign: 'center' }}>WELCOME TO OUR WEBPAGE</h1>

                </div>
                <BlogPage />
            </div>
            <Outlet />
        </>
    )
}