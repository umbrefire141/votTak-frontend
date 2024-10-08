import { PropsWithChildren } from 'react';

const TextError = ({ children }: PropsWithChildren) => {
	return <p className="text-base font-medium text-destructive">{children}</p>;
};

export default TextError;
