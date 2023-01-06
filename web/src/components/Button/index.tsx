import { InputHTMLAttributes } from 'react';

interface ButtonProps extends InputHTMLAttributes<HTMLDivElement> {
	text: string;
	color?: string;
	shadow?: boolean;
}

export function Button({ text, color, shadow, ...props }: ButtonProps) {
	return (
		<div
			{...props}
			className={`w-full h-16 ${
				color || 'bg-brandPurple'
			} rounded-xl flex items-center justify-center cursor-pointer hover:opacity-80 ${
				shadow && 'shadow-button'
			}`}>
			<p className="text-white text-xs md:text-base lg:text-base font-medium">
				{text}
			</p>
		</div>
	);
}
