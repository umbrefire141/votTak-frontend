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
			<div className="flex justify-between items-center flex-wrap gap-3 pt-3 border-t border-border/50">
				<div className="flex items-center gap-2">
					<AddImage setImages={setImages} />
					<Button
						variant="ghost"
						size="sm"
						className="gap-1.5 text-muted-foreground hover:text-foreground"
						onClick={() => setIsOpenedEmojiPanel(a => !a)}
					>
						<MdOutlineEmojiEmotions className="w-4 h-4" />
						Emoji
					</Button>
				</div>
				<Button
					className="px-6"
					disabled={mutation.isLoading}
					onClick={submitData}
				>
					Post
				</Button>
			</div>
			{isOpenedEmojiPanel && (
				<div className="mt-3">
					<EmojiPicker
						open={isOpenedEmojiPanel}
						lazyLoadEmojis={true}
						onEmojiClick={value => {
							setValue(oldValue => oldValue + value.emoji);
						}}
					/>
				</div>
			)}
		</>
	);
};

export default Actions;
