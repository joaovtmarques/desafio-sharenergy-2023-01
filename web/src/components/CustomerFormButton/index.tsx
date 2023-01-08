import * as Dialog from '@radix-ui/react-dialog';
import { MagnifyingGlassPlus } from 'phosphor-react';
import { Button } from '../Button';

export function CustomerFormButton() {
	return (
		<Dialog.Trigger className="w-full md:w-[40%] lg:w-[40%]">
			<Button text="Cadastrar cliente" shadow />
		</Dialog.Trigger>
	);
}
