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
import { MdOutlineDarkMode, MdOutlineLightMode, MdOutlineSettingsSuggest } from 'react-icons/md';

const themeIcons = {
	light: <MdOutlineLightMode className="w-4 h-4" />,
	dark: <MdOutlineDarkMode className="w-4 h-4" />,
	system: <MdOutlineSettingsSuggest className="w-4 h-4" />,
};

const ChangeTheme = ({ theme }: { theme: string }) => {
	const [selectedTheme, setSelectedTheme] = useState<string>(theme);
	const { setTheme } = useTheme();

	return (
		<div className="flex items-center gap-3 w-full py-1">
			{themeIcons[selectedTheme as keyof typeof themeIcons]}
			<Select
				value={selectedTheme}
				onValueChange={value => {
					setSelectedTheme(value);
					setTheme(value as Theme);
				}}
			>
				<SelectTrigger className="w-full border-0 p-0 h-auto shadow-none bg-transparent focus:ring-0 text-sm text-muted-foreground hover:text-foreground">
					<SelectValue placeholder="Theme" />
				</SelectTrigger>
				<SelectContent>
					<SelectItem value="light">Light</SelectItem>
					<SelectItem value="dark">Dark</SelectItem>
					<SelectItem value="system">System</SelectItem>
				</SelectContent>
			</Select>
		</div>
	);
};

export default ChangeTheme;
