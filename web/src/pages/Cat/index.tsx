import { Container, Header } from '@/components';

import logoImg from '@/assets/logo.svg';

export function Cat() {
	return (
		<Container>
			<Header>
				<img src={logoImg} alt="Logo" />
			</Header>
			<p>Cat</p>
		</Container>
	);
}
