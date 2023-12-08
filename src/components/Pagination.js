import { ReactComponent as Arrow } from '../assets/icons/arrow.svg';

export const Pagination = ({totalItems, currentPage, onPageChange}) => {
	const pageNumbers = [];
	const itemsPerPage = 10;
	for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
		pageNumbers.push(i);
	}

	return (
		<nav>
			<ul className="pagination">
				{pageNumbers.map((number) => (
					<li key={number} className={number === currentPage ? 'active' : ''}>
						<button onClick={() => onPageChange(number)}>{number}</button>
					</li>
				))}
			</ul>
		</nav>
	);
}