import { EyeSlash, Eye } from 'phosphor-react';
import { useState, InputHTMLAttributes } from 'react';

interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
	icon?: JSX.Element;
	type: string;
}

export function TextInput({ icon, type, ...props }: TextInputProps) {
	const [hidden, setHidden] = useState(true);

	return (
		<div
			{...props}
			className="w-full h-16 flex my-8 bg-black2 rounded-xl overflow-hidden focus-within:border-brandPink border-2 border-solid">
			<input
				type={type === 'password' && hidden ? type : 'text'}
				className="flex-1 w-full outline-none px-8 bg-black2 text-gray1 text-base font-regular focus:text-white"
			/>
			{type === 'password' && icon !== null ? (
				<div
					className="flex items-center justify-center pl-1 pr-4 md:px-4 lg:px-4"
					onClick={() => setHidden(!hidden)}>
					{!hidden ? (
						<Eye className="text-gray1" size={22} />
					) : (
						<EyeSlash className="text-gray1" size={22} />
					)}
				</div>
			) : (
				<div className="flex items-center justify-center px-4">{icon}</div>
			)}
		</div>
	);
}
