import { ILoader } from './Loader.interface';
import styles from './Loader.module.css';

const Loader = ({ width = '80px', height = '80px' }: ILoader) => {
	return <div className={styles.loader} style={{ width, height }}></div>;
};

export default Loader;
