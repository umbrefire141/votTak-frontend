import { apiServer } from '@/shared/consts/apiServer.const';
import { Button } from '@/shared/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/shared/ui/card';
import { Link } from 'react-router-dom';
import { IPhotosComponent } from './Photos.interface';

const Photos = ({ photos }: IPhotosComponent) => {
	return (
		<Card className="mb-2">
			<CardHeader>
				<CardTitle>Photos</CardTitle>
			</CardHeader>
			<CardContent className="grid grid-cols-2 gap-4">
				{photos.length > 0 ? (
					photos.map(photo => (
						<img
							key={photo.id}
							src={`${apiServer}/${photo.image}`}
							alt="Image"
							className="h-24 rounded-e-md"
						/>
					))
				) : (
					<div className="text-center w-full col-span-3 font-medium">
						No Photos
					</div>
				)}
				{photos.length > 0 && (
					<Link to="/photos" className="col-start-1 col-end-3">
						<Button variant="outline" className="w-full">
							See more
						</Button>
					</Link>
				)}
			</CardContent>
		</Card>
	);
};

export default Photos;
