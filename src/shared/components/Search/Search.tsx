import { BiSearch } from 'react-icons/bi';

const Search = () => {
	return (
		<div className="bg-muted/60 flex items-center px-3 py-2.5 gap-2 text-sm rounded-xl w-full ring-1 ring-border/50 transition-all duration-200 focus-within:ring-2 focus-within:ring-primary/30 focus-within:bg-background">
			<BiSearch className="w-4 h-4 text-muted-foreground" />
			<input
				placeholder="Search..."
				className="bg-transparent outline-none border-none text-foreground w-full min-w-12 placeholder:text-muted-foreground/60"
			/>
		</div>
	);
};

export default Search;
