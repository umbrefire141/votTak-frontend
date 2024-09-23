import { Theme } from '@/app/providers/ThemeProvider';
import { useTheme } from '@/shared/hooks/useTheme';
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/shared/ui/select';
import { useState } from 'react';

const ChangeTheme = ({ theme }: { theme: string }) => {
	const [selectedTheme, setSelectedTheme] = useState<string>(theme);
	const { setTheme } = useTheme();

	return (
		<Select
			value={selectedTheme}
			onValueChange={value => {
				setSelectedTheme(value);
				setTheme(value as Theme);
			}}
		>
			<SelectTrigger className="w-[180px]">
				<SelectValue placeholder="Theme" />
			</SelectTrigger>
			<SelectContent>
				<SelectItem value="light">Light</SelectItem>
				<SelectItem value="dark">Dark</SelectItem>
				<SelectItem value="system">System</SelectItem>
			</SelectContent>
		</Select>
	);
};

export default ChangeTheme;
