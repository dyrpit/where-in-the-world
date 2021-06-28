import { useEffect, useState } from 'react';
import { CountryData } from '../views/HomeView/HomeView';

export const usePagination = (countries: CountryData) => {
	const [itemsPerPage, setItemsPerPage] = useState<number>(10);
	const [currentPage, setCurrentPage] = useState<number>(1);
	const [pages, setPages] = useState<number>(Math.ceil(countries.length / itemsPerPage));

	const handleNextPage = () => {
		if (currentPage + 1 > pages) {
			return;
		}

		setCurrentPage(currentPage + 1);
	};

	const handlePrevPage = () => {
		if (currentPage - 1 < 1) {
			return;
		}

		setCurrentPage(currentPage - 1);
	};

	const handleItemsPerPage = (numOfItemsPerPage: number) => {
		if (numOfItemsPerPage === itemsPerPage) return;
		setItemsPerPage(numOfItemsPerPage);
	};

	useEffect(() => {
		if (countries) {
			setPages(Math.ceil(countries.length / itemsPerPage));
		}
	}, [itemsPerPage, countries]);

	return { itemsPerPage, currentPage, pages, handleNextPage, handlePrevPage, handleItemsPerPage };
};
