import ButtonDeleteAccount from './ButtonDeleteAccount';
import FormChangeLanguage from './FormChangeLanguage/FormChangeLanguage';
import FormChangePassword from './FormChangePassword/FormChangePassword';
import FormInfo from './FormInfo/FormInfo';

export default function SettingsPage() {
	return (
		<div>
			<FormChangePassword />
			<FormInfo />
			<FormChangeLanguage />
			<ButtonDeleteAccount />
		</div>
	);
}
