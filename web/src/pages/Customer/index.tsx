import * as Dialog from '@radix-ui/react-dialog';
import { useLocation, useNavigate } from 'react-router-dom';

import {
	BottomTabs,
	Button,
	Container,
	Header,
	LogoutButton,
	Menu,
} from '@/components';

import logoImg from '@/assets/logo.svg';
import { CustomerItem, CustomerForm, CustomerFormButton } from '@/components';

export function Customer() {
	const location = useLocation();
	const navigate = useNavigate();

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
							<Dialog.Root>
								<CustomerFormButton />
								<CustomerForm />
							</Dialog.Root>
						</div>
					</div>
					<div className="flex-1 gap-y-8 mt-12 md:mt-20 lg:mt-20 flex flex-col">
						<CustomerItem />
					</div>
				</div>
			</Container>
			<BottomTabs route={location.pathname} />
		</>
	);
}
