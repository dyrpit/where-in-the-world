import { useEffect, useState } from 'react';

export type UpdatePaginationType = (numOfItemsPerPage: number) => void;

export const usePagination = (countriesLength: number) => {
	const [itemsPerPage, setItemsPerPage] = useState<number>(10);
	const [currentPage, setCurrentPage] = useState<number>(1);
	const [pages, setPages] = useState<number>(Math.ceil(countriesLength / itemsPerPage));

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

	const handleItemsPerPage: UpdatePaginationType = (numOfItemsPerPage) => {
		if (numOfItemsPerPage === itemsPerPage) return;
		setItemsPerPage(numOfItemsPerPage);
	};

	useEffect(() => {
		if (countriesLength) {
			setPages(Math.ceil(countriesLength / itemsPerPage));
			setCurrentPage(1);
		}
	}, [itemsPerPage, countriesLength]);

	return { itemsPerPage, currentPage, pages, handleNextPage, handlePrevPage, handleItemsPerPage };
};
