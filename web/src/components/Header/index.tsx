interface HeaderProps {
	children: React.ReactNode;
}

export function Header({ children }: HeaderProps) {
	return (
		<div className="w-full h-11 flex flex-col items-center justify-center mt-6 lg:mt-0 lg:justify-between md:lg:flex-row lg:mb-16">
			{children}
		</div>
	);
}
