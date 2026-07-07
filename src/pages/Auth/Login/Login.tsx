import AuthLoginForm from '@/pages/Auth/Login/AuthLoginForm';

export default function LoginPage() {
	return (
		<>
			<div className="text-center mb-8">
				<h2 className="text-3xl font-bold gradient-text mb-2">Sign In</h2>
				<p className="text-muted-foreground text-sm">
					Welcome back! Please enter your details.
				</p>
			</div>
			<AuthLoginForm />
		</>
	);
}
