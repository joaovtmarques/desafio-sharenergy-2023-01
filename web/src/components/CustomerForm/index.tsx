import { useForm } from 'react-hook-form';
import * as Dialog from '@radix-ui/react-dialog';

import { useApi } from '@/hooks/useApi';
import { useAuth } from '@/hooks/useAuth';

import { CustomerProps } from '@/types/Customer';

import { Button } from '../Button';
import { TextInput } from '../TextInput';
import { createCustomer, updateCustomer } from '@/utils/customer';

interface CustomerFormProps {
	id?: string;
	defaultValues?: CustomerProps;
}

export function CustomerForm({ id, defaultValues }: CustomerFormProps) {
	const auth = useAuth();
	const api = useApi();
	const { handleSubmit, register } = useForm({
		defaultValues: defaultValues ?? {},
	});

	async function handleSubmitForm(data: CustomerProps) {
		if (!id) {
			const payload = createCustomer(data);

			await api
				.createCustomer(payload, auth.token!)
				.then(() => alert('Cliente criado com sucesso!'))
				.catch(err => alert(err.response.data[0].message));
		} else {
			const payload = updateCustomer(data);

			await api
				.updateCustomer(id!, payload, auth.token!)
				.then(() => alert('Cliente atualizado com sucesso!'))
				.catch(err => console.log(err));
		}
	}

	return (
		<Dialog.Portal className="block">
			<Dialog.Overlay className="bg-black0/60 inset-0 fixed overflow-y-auto grid place-items-center p-8">
				<Dialog.Content className="bg-black1 text-black2 p-8 w-[90%] sm:2/3 md:w-3/5 lg:w-1/3 h-auto shadow-lg shadow-black0/25 rounded-xl">
					<Dialog.Title className="sm:text-base md:text-xl lg:text-2xl text-white font-medium">
						Cadastre um cliente
					</Dialog.Title>

					<form
						id="1"
						className="flex-1 mt-8 flex flex-col gap-6 rounded"
						onSubmit={handleSubmit(handleSubmitForm)}>
						<TextInput
							type="text"
							placeholder="Digite um nome"
							noMargin
							height="h-12"
							text="[10px]"
							textLg="sm"
							register={{ ...register('name') }}
							id={'1'}
						/>

						<TextInput
							type="text"
							placeholder="Digite um e-mail"
							noMargin
							height="h-12"
							text="[10px]"
							textLg="sm"
							register={{ ...register('email') }}
						/>

						<div className="flex flex-col md:flex-row lg:flex-row gap-y-6 md:gap-x-6 lg:gap-x-6">
							<TextInput
								type="number"
								placeholder="Telefone"
								noMargin
								height="h-12"
								text="[10px]"
								textLg="sm"
								register={{ ...register('phoneNumber') }}
							/>
							<TextInput
								type="text"
								placeholder="CPF"
								noMargin
								height="h-12"
								text="[10px]"
								textLg="sm"
								register={{ ...register('cpf') }}
							/>
						</div>

						<TextInput
							type="text"
							placeholder="Digite a rua, número"
							noMargin
							height="h-12"
							text="[10px]"
							textLg="sm"
							register={{ ...register('address.street') }}
						/>

						<TextInput
							type="text"
							placeholder="Digite o bairro"
							noMargin
							height="h-12"
							text="[10px]"
							textLg="sm"
							register={{ ...register('address.district') }}
						/>

						<div className="flex flex-col md:flex-row lg:flex-row gap-y-6 md:gap-x-6 lg:gap-x-6">
							<TextInput
								type="text"
								placeholder="Digite a cidade"
								noMargin
								height="h-12"
								text="[10px]"
								textLg="sm"
								register={{ ...register('address.city') }}
							/>
							<TextInput
								type="text"
								placeholder="Digite o estado"
								noMargin
								height="h-12"
								text="[10px]"
								textLg="sm"
								register={{ ...register('address.state') }}
							/>
						</div>

						<TextInput
							type="number"
							placeholder="Digite o CEP"
							noMargin
							height="h-12"
							text="[10px]"
							textLg="sm"
							register={{ ...register('address.zipcode') }}
						/>

						<footer className="mt-6 flex justify-end flex-col md:flex-row lg:flex-row gap-y-6 md:gap-x-6 lg:gap-x-6">
							<Dialog.Close className="px-8 md:ml-8 h-12 bg-gray2 rounded-xl text-white text-xs md:text-base lg:text-base font-medium hover:opacity-90">
								Cancelar
							</Dialog.Close>
							<Button
								type="submit"
								text={(id && 'Salvar') || 'Cadastrar'}
								height="h-12"
							/>
						</footer>
					</form>
				</Dialog.Content>
			</Dialog.Overlay>
		</Dialog.Portal>
	);
}

export const DialogPrimitive = Dialog.Root;
export const DialogTrigger = Dialog.Trigger;
