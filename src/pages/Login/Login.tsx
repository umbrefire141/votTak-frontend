import AuthLoginForm from '@/pages/Login/AuthLoginForm';

export default function LoginPage() {
	return (
		<div className="h-screen container mt-10 p-4">
			<h2 className="text-3xl text-bold text-center mb-3">Sign in</h2>
			<AuthLoginForm />
		</div>
	);
}
