import React, { useEffect, useState } from 'react';
import { CountryData } from '../views/HomeView/HomeView';

import CountriesService from '../services/CountriesService';

interface ISearchValues {
	countryName: string;
	region: string;
}

export type UpdateInput = (e: React.ChangeEvent<HTMLInputElement>) => void;
export type UpdateFilter = (region: string) => void;

const defaultSearchValues: ISearchValues = { countryName: '', region: '' };

export const useSearch = (data: CountryData, delay: number = 500) => {
	const [searchValues, setSearchValues] = useState<ISearchValues>(defaultSearchValues);
	const [filteredCountries, setFilteredCountries] = useState<CountryData>([]);

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
		const { value } = e.target;

		setSearchValues((prev) => ({ ...prev, countryName: value }));
	};

	const handleFilterChange = (region: string): void => {
		setSearchValues((prev) => ({ ...prev, region }));
	};

	const handleResetInput = () => {
		setSearchValues((prev) => ({ ...prev, countryName: '' }));
	};

	useEffect(() => {
		const timeoutId = setTimeout(() => {
			const filterResult = CountriesService.getCountriesByFilter(data, searchValues);

			setFilteredCountries(filterResult);
		}, delay);

		return () => clearTimeout(timeoutId);
	}, [data, searchValues, delay]);

	return { filteredCountries, handleInputChange, handleFilterChange, handleResetInput };
};
