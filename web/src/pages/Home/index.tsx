import { Container, Header } from '@/components';

import logoImg from '@/assets/logo.svg';

export function Home() {
	return (
		<Container>
			<Header>
				<img src={logoImg} alt="Logo" />
			</Header>
		</Container>
	);
}
