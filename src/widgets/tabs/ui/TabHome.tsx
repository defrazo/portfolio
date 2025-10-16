import { observer } from 'mobx-react-lite';

import { Button } from '@/shared/ui';

import { IconEmail, IconGit, IconTG, IconVK } from '@/shared/assets/icons';
import { Download, Printer } from 'lucide-react';

// const buttons: NavButton[] = [
// 	{ id: 'home', title: 'Главная' },
// 	{ id: 'about', title: 'Обо мне' },
// 	{ id: 'projects', title: 'Проекты' },
// 	{ id: 'contacts', title: 'Контакты' },
// ];

export const TabHome = observer(() => {
	return (
		<div className="flex flex-1 flex-col">
			<div className="flex flex-1 flex-col items-center justify-center gap-4">
				<div className="text-center">
					<h1 className="text-5xl font-bold">Евгений Летунов</h1>
					<h2 className="text-3xl text-[var(--color-disabled)]">Frontend Developer</h2>
				</div>
				<div className="flex gap-4">
					<Button variant="rounded" centerIcon={<IconVK className="size-7" />}></Button>
					<Button variant="rounded" centerIcon={<IconTG className="size-7" />}></Button>
					<Button variant="rounded" centerIcon={<IconEmail className="size-7" />}></Button>
					<Button variant="rounded" centerIcon={<IconGit className="size-7" />}></Button>
				</div>
			</div>
			<div className="flex w-full justify-between">
				<Button className="rounded-4xl" leftIcon={<Download className="size-8" />}>
					Скачать резюме
				</Button>
				<Button className="rounded-4xl" leftIcon={<Printer className="size-8" />}>
					Распечатать резюме
				</Button>
			</div>
		</div>
	);
});
