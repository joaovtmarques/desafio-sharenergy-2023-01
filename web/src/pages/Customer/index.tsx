import { Container, Header } from '@/components';

import logoImg from '@/assets/logo.svg';

export function Customer() {
	return (
		<Container>
			<Header>
				<img src={logoImg} alt="Logo" />
			</Header>
			<p>Customer</p>
		</Container>
	);
}
