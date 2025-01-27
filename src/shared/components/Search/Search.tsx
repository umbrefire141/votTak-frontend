import { BiSearch } from 'react-icons/bi';

const Search = () => {
	return (
		<div className="bg-slate-100 flex items-center p-3 gap-1 text-sm rounded-xl w-full">
			<BiSearch className="fill-black w-5 h-5" />
			<input
				placeholder="Search..."
				className="bg-transparent outline-none border-none text-black w-full min-w-12"
			/>
		</div>
	);
};

export default Search;
