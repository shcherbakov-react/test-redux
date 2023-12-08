import { useSelector } from 'react-redux';

export const Sidebar = () => {
	const selector = useSelector((state) => state.counter)
	const isOpenCart = selector.isCartOpen
	const cartItems = selector.cart
	return (
		<div className={`${isOpenCart && 'sidebar--active'} sidebar`}>
			<h2>Корзина</h2>
			<div className="cart">
				<div className="cart__items">
					{cartItems.map((item) => (
						<div className="cart__item">
							<img className="cart__img" src={item.image}/>
							<div>{item.name}</div>
							<div>{item.price * item.quantity} ₽ ({item.quantity} шт.)</div>
						</div>
					))}
				</div>
			</div>
		</div>
	)
}
