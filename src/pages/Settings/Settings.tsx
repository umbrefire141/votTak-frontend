import ButtonDeleteAccount from './ButtonDeleteAccount';
import FormAvatar from './FormAvatar/FormAvatar';
import FormChangeLanguage from './FormChangeLanguage/FormChangeLanguage';
import FormChangePassword from './FormChangePassword/FormChangePassword';
import FormInfo from './FormInfo/FormInfo';
import FormUpdateUser from './FormUpdateUser/FormUpdateUser';

export default function SettingsPage() {
	return (
		<div className="max-w-2xl mx-auto space-y-6 fade-in">
			<div className="text-center mb-8">
				<h2 className="text-3xl font-bold gradient-text">Settings</h2>
				<p className="text-sm text-muted-foreground mt-1">
					Manage your account settings and preferences
				</p>
			</div>
			<FormAvatar />
			<FormUpdateUser />
			<FormChangePassword />
			<FormInfo />
			<FormChangeLanguage />
			<ButtonDeleteAccount />
		</div>
	);
}
