import { FC, useState } from 'react';

import { UpdatePaginationType } from '../../hooks/usePagination';

import {
	PaginationWrapper,
	PaginationPagesDisplay,
	PaginationPageItemDisplay,
	PaginationTooltipWrapper,
	PaginationControlBtn,
	PaginationControlBtnText,
	PaginationTooltip,
	PaginationTooltipItem,
} from './PaginationControl.styles';

interface IProps {
	currentPage: number;
	itemsPerPage: number;
	pages: number;
	handleNextPage: () => void;
	handlePrevPage: () => void;
	handleItemsPerPage: UpdatePaginationType;
}

const paginationTooltipOptions = [10, 20, 30, 50];

const PaginationControl: FC<IProps> = ({
	currentPage,
	handleItemsPerPage,
	handleNextPage,
	handlePrevPage,
	itemsPerPage,
	pages,
}) => {
	const [isOpen, setIsOpen] = useState<boolean>(false);

	const handleChangeItemsPerPage: UpdatePaginationType = (numOfItemsPerPage) => {
		handleItemsPerPage(numOfItemsPerPage);
		setIsOpen(!isOpen);
	};

	const btnIcon = isOpen ? (
		<i className='fas fa-angle-up'></i>
	) : (
		<i className='fas fa-angle-down'></i>
	);

	return (
		<PaginationWrapper>
			<PaginationPagesDisplay>
				<PaginationControlBtn onClick={handlePrevPage} arial-label='Previous countries'>
					<i className='fas fa-angle-left'></i>
				</PaginationControlBtn>
				<PaginationPageItemDisplay>{currentPage > 1 ? '1' : currentPage}</PaginationPageItemDisplay>
				{currentPage > 1 && currentPage < pages ? (
					<PaginationPageItemDisplay>...{currentPage}...</PaginationPageItemDisplay>
				) : null}
				<PaginationPageItemDisplay>{pages}</PaginationPageItemDisplay>
				<PaginationControlBtn onClick={handleNextPage} arial-label='Next countries'>
					<i className='fas fa-angle-right'></i>
				</PaginationControlBtn>
			</PaginationPagesDisplay>
			<PaginationTooltipWrapper>
				<PaginationControlBtn onClick={() => setIsOpen(!isOpen)}>
					<PaginationControlBtnText>{itemsPerPage}</PaginationControlBtnText>
					{btnIcon}
				</PaginationControlBtn>
				<PaginationTooltip isOpen={isOpen}>
					{paginationTooltipOptions.map((option) => (
						<PaginationTooltipItem key={option} onClick={() => handleChangeItemsPerPage(option)}>
							{option}
						</PaginationTooltipItem>
					))}
				</PaginationTooltip>
			</PaginationTooltipWrapper>
		</PaginationWrapper>
	);
};

export default PaginationControl;
