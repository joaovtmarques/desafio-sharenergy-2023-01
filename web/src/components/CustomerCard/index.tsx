import { Pencil, Trash } from 'phosphor-react';
import * as Dialog from '@radix-ui/react-dialog';

import { CustomerForm, DialogPrimitive, DialogTrigger } from '../CustomerForm';

import avatarImg from '../../assets/avatar.svg';

export function CustomerItem() {
	return (
		<div className="w-full p-6 rounded-xl bg-black2 flex flex-col md:flex-row lg:flex-row gap-y-6 items-center justify-between hover:opacity-90">
			<DialogPrimitive>
				<DialogTrigger>
					<div className="cursor-pointer">
						<Pencil size={22} className="text-white" weight="light" />
					</div>
				</DialogTrigger>

				<CustomerForm />
			</DialogPrimitive>

			<div className="w-full flex flex-col items-center md:m-4 lg:m-4 justify-between gap-4 md:flex-row lg:flex-row">
				<div className="w-auto flex items-center justify-center">
					<div className="hidden sm:flex h-10 w-10 mr-4 bg-border rounded-full items-center justify-center">
						<img src={avatarImg} alt="" />
					</div>
					<div className="text-center md:text-left lg:text-left">
						<p className="text-sm lg:text-base text-white font-medium">
							João Vitor Marques
						</p>
						<p className="text-[10px] lg:text-xs text-gray1 font-regular">
							jvsilvam@outlook.com
						</p>
					</div>
				</div>
				<div className="h-full lg:w-auto text-center md:text-left lg:text-left">
					<p className="text-[10px] lg:text-xs text-gray1 font-regular">
						Telefone
					</p>
					<p className="text-sm lg:text-base text-white font-medium ">
						0000000000
					</p>
				</div>
				<div className="h-full lg:w-auto text-center md:text-left lg:text-left">
					<p className="text-[10px] lg:text-xs text-gray1 font-regular">CPF</p>
					<p className="text-sm lg:text-base text-white font-medium ">
						000.000.000-00
					</p>
				</div>
				<div className="h-full lg:w-auto text-center md:text-left lg:text-left">
					<p className="text-[10px] lg:text-xs text-gray1 font-regular">Rua</p>
					<p className="text-sm lg:text-base text-white font-medium">
						Antônio Rossi, 000
					</p>
				</div>
				<div className="h-full lg:w-auto text-center md:text-left lg:text-left">
					<p className="text-[10px] lg:text-xs text-gray1 font-regular">
						Bairro
					</p>
					<p className="text-sm lg:text-base text-white font-medium">
						Village das Flores
					</p>
				</div>
				<div className="h-full lg:w-auto text-center md:text-left lg:text-left">
					<p className="text-[10px] lg:text-xs text-gray1 font-regular">
						Cidade - Estado
					</p>
					<p className="text-sm lg:text-base text-white font-medium">
						Caçapava - São Paulo
					</p>
				</div>
			</div>

			<div className="cursor-pointer">
				<Trash size={22} className="text-white" weight="light" />
			</div>
		</div>
	);
}
