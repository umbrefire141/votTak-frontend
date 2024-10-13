import axios from '../utils/axios';

interface IPhotoService {
	deletePhoto: (id: number) => void;
}

const PHOTOS = 'photos';

class PhotoService implements IPhotoService {
	async deletePhoto(id: number) {
		await axios.delete(`${PHOTOS}/${id}`);
	}
}

export default new PhotoService();
