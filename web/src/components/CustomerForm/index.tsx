import * as Dialog from '@radix-ui/react-dialog';

import { Button } from '../Button';
import { TextInput } from '../TextInput';

export function CustomerForm() {
	return (
		<Dialog.Portal className="block">
			<Dialog.Overlay className="bg-black0/60 inset-0 fixed overflow-y-auto grid place-items-center p-8">
				<Dialog.Content className="bg-black1 text-black2 p-8 w-[90%] sm:2/3 md:w-3/5 lg:w-1/3 h-auto shadow-lg shadow-black0/25 rounded-xl">
					<Dialog.Title className="sm:text-base md:text-xl lg:text-2xl text-white font-medium">
						Cadastre um cliente
					</Dialog.Title>

					<form className="flex-1 mt-8 flex flex-col gap-6 rounded">
						<TextInput
							type="text"
							placeholder="Digite um nome"
							noMargin
							height="h-12"
							text="[10px]"
							textLg="sm"
						/>

						<TextInput
							type="text"
							placeholder="Digite um e-mail"
							noMargin
							height="h-12"
							text="[10px]"
							textLg="sm"
						/>

						<div className="flex flex-col md:flex-row lg:flex-row gap-y-6 md:gap-x-6 lg:gap-x-6">
							<TextInput
								type="number"
								placeholder="Telefone"
								noMargin
								height="h-12"
								text="[10px]"
								textLg="sm"
							/>
							<TextInput
								type="text"
								placeholder="CPF"
								noMargin
								height="h-12"
								text="[10px]"
								textLg="sm"
							/>
						</div>

						<TextInput
							type="text"
							placeholder="Digite a rua, número"
							noMargin
							height="h-12"
							text="[10px]"
							textLg="sm"
						/>

						<TextInput
							type="text"
							placeholder="Digite o bairro"
							noMargin
							height="h-12"
							text="[10px]"
							textLg="sm"
						/>

						<div className="flex flex-col md:flex-row lg:flex-row gap-y-6 md:gap-x-6 lg:gap-x-6">
							<TextInput
								type="text"
								placeholder="Digite a cidade"
								noMargin
								height="h-12"
								text="[10px]"
								textLg="sm"
							/>
							<TextInput
								type="text"
								placeholder="Digite o estado"
								noMargin
								height="h-12"
								text="[10px]"
								textLg="sm"
							/>
						</div>

						<footer className="mt-6 flex justify-end flex-col md:flex-row lg:flex-row gap-y-6 md:gap-x-6 lg:gap-x-6">
							<Dialog.Close className="px-8 md:ml-8 h-12 bg-gray2 rounded-xl text-white text-xs md:text-base lg:text-base font-medium hover:opacity-90">
								Cancelar
							</Dialog.Close>
							<Button type="submit" text="Cadastrar" height="h-12" />
						</footer>
					</form>
				</Dialog.Content>
			</Dialog.Overlay>
		</Dialog.Portal>
	);
}

export const DialogPrimitive = Dialog.Root;
export const DialogTrigger = Dialog.Trigger;
