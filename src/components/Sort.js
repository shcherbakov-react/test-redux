import { useState } from 'react';

export const Sort = ({ setSort }) => {
	const [selectedSort, setSelectedSort] = useState('name');

	const handleSortChange = (event) => {
		const selectedValue = event.target.value;
		setSelectedSort(selectedValue);
		setSort(selectedValue);
	};

	return (
		<select id="sort" className="sort" value={selectedSort} onChange={handleSortChange}>
			<option value="_sort=name">По названию</option>
			<option value="_sort=price">По цене</option>
		</select>
	);
}
