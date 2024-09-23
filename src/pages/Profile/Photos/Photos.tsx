import { Button } from '@/shared/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/shared/ui/card';
import { IPhotosComponent } from './Photos.interface';

const Photos = ({ photos }: IPhotosComponent) => {
	return (
		<Card className="mb-2">
			<CardHeader>
				<CardTitle>Photos</CardTitle>
			</CardHeader>
			<CardContent className="grid grid-cols-2 gap-4">
				{photos.map(photo => (
					<img src={photo.image} alt="Image" className="h-24 rounded-e-md" />
				))}
				<Button variant="outline" className="col-start-1 col-end-3">
					See more
				</Button>
			</CardContent>
		</Card>
	);
};

export default Photos;