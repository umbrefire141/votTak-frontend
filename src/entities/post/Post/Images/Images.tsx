import { apiServer } from '@/shared/consts/apiServer.const';
import { IImagesProps } from './Images.interface';

const Images = ({ images }: IImagesProps) => {
	return (
		<div className="mb-3 grid grid-cols-3 gap-4">
			{images.map(image => (
				<img key={image.id} src={`${apiServer}/${image.image}`} alt="" />
			))}
		</div>
	);
};

export default Images;
