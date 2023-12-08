import { ReactComponent as Minus } from '../assets/icons/minus.svg';
import { ReactComponent as Plus } from '../assets/icons/plus.svg';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from '../redux/products/counterSlice';

export const CatalogItem = ({ data }) => {
	const dispatch = useDispatch();
	const handleDecrease = () => {
		dispatch(decrement(data))
	};

	const handleIncrease = () => {
		dispatch(increment(data))
	};
	const cart = useSelector((state) => state.counter.cart);

	const cartItem = cart.find((item) => item.id === data.id);
	return (
		<div className="catalog-item">
			<img className="catalog-item__image" src={data.image}/>
			<div className="catalog-item__wrapper">
				<div className="catalog-item__title">{data.name}</div>
				<div className="catalog-item__title">{data.price} ₽</div>
			</div>
			<div className="catalog-item__action">
				<div className="catalog-item__decrement" onClick={handleDecrease}>
					<Minus/>
				</div>
				<div className="catalog-item__price">{cartItem ? cartItem.quantity : 0}</div>
				<div className="catalog-item__increment" onClick={handleIncrease}>
					<Plus/>
				</div>
			</div>
		</div>
	)
}