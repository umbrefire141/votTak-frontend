import ButtonDeleteAccount from './ButtonDeleteAccount';
import FormChangeLanguage from './FormChangeLanguage/FormChangeLanguage';
import FormChangePassword from './FormChangePassword/FormChangePassword';
import FormInfo from './FormInfo/FormInfo';
import FormUpdateUser from './FormUpdateUser/FormUpdateUser';

export default function SettingsPage() {
	return (
		<div className="space-y-5">
			<h2 className="text-3xl text-center font-bold">Settings</h2>
			<FormUpdateUser />
			<FormChangePassword />
			<FormInfo />
			<FormChangeLanguage />
			<ButtonDeleteAccount />
		</div>
	);
}
