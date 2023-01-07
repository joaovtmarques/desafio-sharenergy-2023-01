import { MagnifyingGlass } from 'phosphor-react';
import { useLocation, useNavigate } from 'react-router-dom';

import {
	BottomTabs,
	Container,
	Header,
	LogoutButton,
	Menu,
	NextPrevButton,
	TextInput,
	UserCard,
} from '@/components';

import logoImg from '@/assets/logo.svg';

export function Cat() {
	const location = useLocation();
	const navigate = useNavigate();

	const arr = [1, 2, 3, 4, 5];

	return (
		<>
			<Container>
				<Header menu>
					<img
						onClick={() => navigate('/')}
						src={logoImg}
						alt="Logo"
						className="cursor-pointer"
					/>
					<Menu route={location.pathname} />
					<LogoutButton onClick={() => navigate('/login')} />
				</Header>
				<div className="flex-1 pb-8">
					<div className="w-full flex flex-col md:flex-row lg:flex-row items-center">
						<div className="flex-1 w-full flex flex-col space-y-4 md:space-y-0 lg:space-y-0 md:flex-row lg:flex-row md:items-center lg:items-center md:space-x-8 lg:space-x-8 md:pr-16 lg:pr-16">
							<div className="w-full md:w-[40%] lg:w-[40%]">
								<TextInput
									type="number"
									placeholder="Digite um código HTTP (ex: 201)"
									noMargin
									icon={<MagnifyingGlass className="text-gray1" size={22} />}
									onClick={() => console.log('oi')}
								/>
							</div>
						</div>
					</div>
					<div className="mt-12 md:mt-20 lg:mt-20 w-full flex flex-col md:flex-row lg:flex-row md:flex-wrap lg:flex-wrap items-center justify-start md:gap-x-8 lg:gap-x-8">
						<div className="w-full h-auto md:h-[300px] md:w-[490px] lg:h-[400px] lg:w-[590px] p-[1.5px] bg-border overflow-hidden rounded-xl">
							<img
								src="https://avatars.githubusercontent.com/u/74778269?v=4"
								alt="Cat"
								className="w-full h-full rounded-xl"
							/>
						</div>
					</div>
				</div>
			</Container>
			<BottomTabs route={location.pathname} />
		</>
	);
}
