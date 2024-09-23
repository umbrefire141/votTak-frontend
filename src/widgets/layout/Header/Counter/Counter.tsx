import clsx from 'clsx';
import { ICounter } from './Counter.interface';

const Counter = ({ count, className }: ICounter) => {
	return <div className={clsx(className)}>{count}</div>;
};

export default Counter;
