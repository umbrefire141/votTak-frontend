import { Button } from '@/shared/ui/button';
import EmojiPicker from 'emoji-picker-react';
import { MdOutlineEmojiEmotions } from 'react-icons/md';
import AddImage from '../AddImage/AddImage';
import { IActionComponent } from './Action.interface';

const Actions = ({
	isOpenedEmojiPanel,
	mutation,
	setImages,
	setIsOpenedEmojiPanel,
	setValue,
	submitData,
}: IActionComponent) => {
	return (
		<>
			<div className="flex justify-between items-center flex-wrap gap-5">
				<AddImage setImages={setImages} />
				<Button
					variant="ghost"
					size="sm"
					onClick={() => setIsOpenedEmojiPanel(a => !a)}
				>
					<MdOutlineEmojiEmotions className="w-5 h-5 mr-2" />
					Emoji
				</Button>
				<Button
					className="flex w-full  lg:max-w-28 lg:ml-auto"
					disabled={mutation.isLoading}
					onClick={submitData}
				>
					Post
				</Button>
			</div>
			<EmojiPicker
				open={isOpenedEmojiPanel}
				lazyLoadEmojis={true}
				onEmojiClick={value => {
					setValue(oldValue => oldValue + value.emoji);
				}}
			/>
		</>
	);
};

export default Actions;
