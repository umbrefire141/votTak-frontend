import Combobox from '@/shared/components/Combobox/Combobox';
import { useState } from 'react';
import { ISetCityComponent } from './SetCity.interface';

const SetCity = ({ field, setValue }: ISetCityComponent) => {
	const [selectedCity, setSelectedCity] = useState<string>(
		field.value as string
	);

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const [cities] = useState<any[]>([
		{ label: 'Moscow', value: 'moscow' },
		{ label: 'Saint-Petersburg', value: 'saint-petersburg' },
		{ label: 'Novosibirsk', value: 'novosibirsk' },
		{ label: 'Yekaterinburg', value: 'yekaterinburg' },
		{ label: 'Kazan', value: 'kazan' },
		{ label: 'Nizhny Novgorod', value: 'nizhny-novgorod' },
		{ label: 'Krasnoyarsk', value: 'krasnoyarsk' },
		{ label: 'Chelyabinsk', value: 'chelyabinsk' },
		{ label: 'Samara', value: 'samara' },
		{ label: 'Ufa', value: 'ufa' },
		{ label: 'Rostov-on-don', value: 'rostov-on-don' },
		{ label: 'Krasnodar', value: 'krasnodar' },
		{ label: 'Omsk', value: 'omsk' },
		{ label: 'Voronezh', value: 'voronezh' },
		{ label: 'Perm', value: 'perm' },
	]);

	return (
		<Combobox
			list={cities}
			name="city"
			selectedItemValue={selectedCity}
			setSelectedItemValue={setSelectedCity}
			formName={field.name}
			setFormValue={setValue}
		/>
	);
};

export default SetCity;
