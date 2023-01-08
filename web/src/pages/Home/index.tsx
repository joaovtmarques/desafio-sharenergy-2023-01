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

export function Home() {
	const location = useLocation();
	const navigate = useNavigate();

	const arr = [1, 2, 3, 4, 5];

	return (
		<>
			<Container>
				<Header menu>
					<img src={logoImg} alt="Logo" />
					<Menu route={location.pathname} />
					<LogoutButton onClick={() => navigate('/login')} />
				</Header>
				<div className="flex-1 pb-8">
					<div className="w-full flex flex-col md:flex-row lg:flex-row items-center">
						<div className="flex-1 w-full flex flex-col space-y-4 md:space-y-0 lg:space-y-0 md:flex-row lg:flex-row md:items-center lg:items-center md:space-x-8 lg:space-x-8 md:pr-16 lg:pr-16">
							<div className="w-full md:w-[55%] lg:w-[55%]">
								<TextInput
									type="text"
									placeholder="Procure um usuário por nome, email ou username"
									noMargin
									icon={<MagnifyingGlass className="text-gray1" size={22} />}
									onClick={() => console.log('oi')}
								/>
							</div>
							<div className="w-full md:w-[30%] lg:w-[30%]">
								<TextInput
									type="number"
									placeholder="Usuários por página"
									noMargin
								/>
							</div>
						</div>
						<div className="hidden md:flex lg:flex items-center justify-center mt-8 md:mt-0 lg:mt-0">
							<NextPrevButton type="prev" noMargin />
							<NextPrevButton type="next" />
						</div>
					</div>
					<div className="mt-12 md:mt-20 lg:mt-20 w-full flex flex-col md:flex-row lg:flex-row md:flex-wrap lg:flex-wrap items-center justify-center md:gap-x-6 lg:gap-x-6">
						{arr.map((item, key) => {
							return <UserCard key={key} />;
						})}
					</div>
					<div className="flex md:hidden lg:hidden items-center justify-center mt-8 md:mt-0 lg:mt-0">
						<NextPrevButton type="prev" noMargin />
						<NextPrevButton type="next" />
					</div>
				</div>
			</Container>
			<BottomTabs route={location.pathname} />
		</>
	);
}
