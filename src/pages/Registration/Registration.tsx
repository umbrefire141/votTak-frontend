import AuthRegistrationForm from '@/pages/Registration/AuthRegistrationForm';

export default function RegistrationPage() {
	return (
		<div className="h-screen container mt-10 p-4">
			<h2 className="text-3xl text-bold text-center mb-3">Sign up</h2>
			<AuthRegistrationForm />
		</div>
	);
}
