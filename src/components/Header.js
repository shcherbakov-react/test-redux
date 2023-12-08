import { ReactComponent as Logo } from '../assets/icons/logo.svg'
import { useDispatch, useSelector } from 'react-redux';
import { openCart } from '../redux/products/counterSlice';

export const Header = () => {
	const count = useSelector((state) => state.counter.totalQuantity)
	const dispatch = useDispatch()
	const handleOpenCart = () => {
		dispatch(openCart())
	}
	return (
		<header>
			<Logo />
			<button onClick={handleOpenCart} className="basket">Корзина ({count})</button>
		</header>
	)
}