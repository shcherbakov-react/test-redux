import './assets/styles/style.scss';
import { Sidebar } from './components/Sidebar';
import { AppRouter } from './config/AppRouter';
import { Header } from './components/Header';
import { Categories } from './components/Categories';
import { useDispatch, useSelector } from 'react-redux';
import { closeCart } from './redux/products/counterSlice';

export const App = () => {
	const overlayActive = useSelector((state) => state.counter.isCartOpen)
	const dispatch = useDispatch();
	const closeOverlay = () => {
		dispatch(closeCart());
	}

	return (
		<div className="App">
			<Header/>
			<Sidebar/>
			<div className="main">
				<h1 className="title">Каталог</h1>
				<div className="categories__action">
					<Categories/>
				</div>
				<AppRouter/>
			</div>
			<div onClick={closeOverlay} className={`${overlayActive ? 'overlay--active overlay' : 'overlay'}`}></div>
		</div>
	);
}

