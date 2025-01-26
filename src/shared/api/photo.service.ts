import { IPhoto } from '../types/Photo.interface';
import axios from '../utils/axios';

interface IPhotoService {
	getPhotos: () => Promise<IPhoto[]>;
	deletePhoto: (id: number) => void;
}

const PHOTOS = 'photos';

class PhotoService implements IPhotoService {
	async getPhotos(): Promise<IPhoto[]> {
		const photos = await axios.get(`${PHOTOS}`);
		return photos.data;
	}

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	async uploadImage(img: any) {
		const formData = new FormData();
		formData.append('image', img);

		const { data } = await axios.post(`${PHOTOS}`, formData, {
			headers: {
				'Content-Type': 'multipart/form-data',
			},
		});

		return data;
	}

	async deletePhoto(id: number) {
		await axios.delete(`${PHOTOS}/${id}`);
	}
}

export default new PhotoService();
