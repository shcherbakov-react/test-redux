import { NavLink } from 'react-router-dom';


export const Categories = () => {
	const categoriesList = [
		{
			name: 'Одежда',
			url: '/clothes'
		},
		{
			name: 'Еда',
			url: '/food'
		},
		{
			name: 'Электроника',
			url: '/electronics'
		},
	];

	return (
		<div className="categories__items">
			{categoriesList.map((item) => (
				<NavLink key={item.url} className="categories__link" to={item.url}>
					<div>{item.name}</div>
				</NavLink>
			))}
		</div>
	)
}
