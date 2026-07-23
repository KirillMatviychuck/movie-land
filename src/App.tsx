import { useEffect } from 'react';

import './App.scss';
import AnimatedRoutes from './components/AnimatedRoutes/AnimatedRoutes';
import Header from './components/Header/Header';
import { useAppDispatch } from './redux/hooks';
import { CATEGORIES, getMovies } from './redux/slices/movie-list/movie-list';

function App() {
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(getMovies({ category: CATEGORIES.POPULAR }));
    }, [dispatch]);

    return (
        <div className='app'>
            <Header />
            <AnimatedRoutes />
        </div>
    );
}

export default App;
