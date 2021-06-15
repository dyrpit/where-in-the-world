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

export const useSearch = (data: CountryData) => {
	const [searchValues, setSearchValues] = useState<ISearchValues>(defaultSearchValues);
	const [filteredCountries, setFilteredCountries] = useState<CountryData>([]);

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
		const { value } = e.target;

		setSearchValues((prev) => ({ ...prev, countryName: value }));
	};

	const handleFilterChange = (region: string): void => {
		setSearchValues((prev) => ({ ...prev, region }));
	};

	useEffect(() => {
		//TODO1: Add debounce
		const filterResult = CountriesService.getCountriesByFilter(data, searchValues);

		setFilteredCountries(filterResult);
	}, [data, searchValues]);

	return { filteredCountries, handleInputChange, handleFilterChange };
};
