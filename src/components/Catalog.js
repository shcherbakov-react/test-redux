import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { CatalogItem } from './CatalogItem';
import { Pagination } from './Pagination';
import { Sort } from './Sort';

export const Catalog = ({category}) => {
	const [items, setItems] = useState([])
	const [currentPage, setCurrentPage] = useState(1);
	const [sort, setSort] = useState('')
	const handlePageChange = (pageNumber) => {
		setCurrentPage(pageNumber);
	};

	useEffect(() => {
		axios.get(`http://localhost:8080/${category}/?_page=${currentPage}&${sort && sort+'&_order=asc'}`).then((res) => setItems(res.data))
	}, [category, currentPage, sort])

	console.log(sort)
	return (
		<div>
			<Sort setSort={setSort}/>
			<div className="catalog">
				{items.map((item) => (
					<CatalogItem key={item.id} data={item}/>
				))}
			</div>
			<Pagination
				totalItems={30}
				currentPage={currentPage}
				onPageChange={handlePageChange}
			/>
		</div>
	);
};
