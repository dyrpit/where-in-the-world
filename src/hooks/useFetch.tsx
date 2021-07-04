import axios from 'axios';
import { useEffect, useRef, useState } from 'react';

export interface ICurrency {
	name: string;
	symbol: string;
}

export interface ILanguage {
	name: string;
	nativeName: string;
}
export interface ICountry {
	name: string;
	flag: string;
	population: number;
	region: string;
	subregion: string;
	capital: string;
	nativName: string;
	topLevelDomain: string[];
	currencies: ICurrency[];
	languages: ILanguage[];
	borders: string[];
}

interface ICache<T> {
	[url: string]: T;
}

export type CountryData = ICountry[] | [];

export type FetchType = { data: CountryData; isLoading: boolean; error: string };

export const ALL_URL = 'https://restcountries.eu/rest/v2/all';
export const DETAILS_URL = 'https://restcountries.eu/rest/v2/name/';

export const useFetch = (url: string): FetchType => {
	const [data, setData] = useState<CountryData>([]);
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [error, setError] = useState<string>('');

	const cache = useRef<ICache<CountryData>>({});
	const cancel = useRef<boolean>(false);

	useEffect(() => {
		if (!url) return;

		const fetchData = async () => {
			setIsLoading(true);

			if (cache.current[url]) {
				setIsLoading(false);
				setData(cache.current[url]);
				setError('');
			} else {
				try {
					const { data } = await axios.get(url);

					cache.current[url] = data;
					if (cancel.current) return;
					if (data) {
						setIsLoading(false);
						setData(data);
						setError('');
					}
				} catch (e) {
					if (cancel.current) return;
					setError(e.message);
				}
			}
		};

		fetchData();
	}, [url]);

	return { data, isLoading, error };
};
