import Combobox from '@/shared/components/Combobox/Combobox';
import { getAllCities } from '@/shared/utils/api';
import { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { ICity } from '../../Settings.interface';
import { ISetCityComponent } from './SetCity.interface';

const SetCity = ({ field }: ISetCityComponent) => {
	const [selectedCity, setSelectedCity] = useState<string>('');
	const { data } = useQuery('cities', getAllCities);
	console.log(field);

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const [cities, setCities] = useState<any[]>([]);

	useEffect(() => {
		if (data)
			setCities((prev: ICity[]) => [
				...prev,
				...data.data.map((city: ICity) => ({
					label: city.name,
					value: city.name,
				})),
			]);
	}, [data]);

	return (
		<Combobox
			list={cities}
			name="city"
			selectedItemValue={selectedCity}
			setSelectedItemValue={setSelectedCity}
		/>
	);
};

export default SetCity;
