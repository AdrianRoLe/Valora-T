import { useState } from "react";

interface EmojiProps {
	src: string;
	initialCount: number;
}

const Emoji = ({ src, initialCount }: EmojiProps) => {
	const [count, setCount] = useState(initialCount);
	const [clicked, setClicked] = useState(false);

	const handleClick = () => {
		setCount(count + 1);
		setClicked(true);
		setTimeout(() => setClicked(false), 200);
	};

	return (
		<div>
			<img
				alt="emoji"
				className={clicked ? "clicked" : ""}
				src={src}
				onClick={handleClick}
			/>
			{count}
		</div>
	);
};

export default Emoji;
