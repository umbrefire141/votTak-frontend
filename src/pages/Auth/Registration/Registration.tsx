import AuthRegistrationForm from '@/pages/Auth/Registration/AuthRegistrationForm';

export default function RegistrationPage() {
	return (
		<>
			<div className="text-center mb-8">
				<h2 className="text-3xl font-bold gradient-text mb-2">Sign Up</h2>
				<p className="text-muted-foreground text-sm">
					Create your account and start connecting.
				</p>
			</div>
			<AuthRegistrationForm />
		</>
	);
}
