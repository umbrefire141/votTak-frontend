import { Button } from '@/shared/ui/button';
import { Textarea } from '@/shared/ui/textarea';

const CreateComment = () => {
	return (
		<div className="mb-4 border-b-2 pb-5">
			<h3 className="text-lg font-bold mb-4">Create comment</h3>
			<Textarea
				placeholder="What's on your mind?"
				className="w-full h-24 mb-4"
			/>
			<Button className="flex w-full max-w-28 ml-auto">Post</Button>
		</div>
	);
};

export default CreateComment;
