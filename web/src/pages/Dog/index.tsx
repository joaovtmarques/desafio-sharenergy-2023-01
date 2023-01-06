import { Container, Header } from '@/components';

import logoImg from '@/assets/logo.svg';

export function Dog() {
	return (
		<Container>
			<Header>
				<img src={logoImg} alt="Logo" />
			</Header>
			<p>Dog</p>
		</Container>
	);
}
