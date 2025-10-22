import { Calendar, User } from 'lucide-react';

import { technologies } from '@/entities/tecnology';
import { Portfolio } from '@/shared/content';
import { Gallery } from '@/shared/ui';

export const PortfolioPage = () => {
	const gal = [Portfolio, Portfolio, Portfolio, Portfolio, Portfolio, Portfolio];

	const projectTechs = ['React', 'TypeScript', 'FSD', 'Tailwind', 'MobX', 'Vite']
		.map((name) => technologies.find((t) => t.name === name))
		.filter(Boolean);

	return (
		<>
			<div className="flex flex-col gap-6 py-12">
				<section className="space-y-6 text-center">
					<div className="space-y-3">
						<h1 className="text-5xl font-bold tracking-tight">Портфолио</h1>
						<div className="mx-auto h-1 w-24 rounded-full bg-linear-to-r from-blue-500 to-cyan-500" />
					</div>
					<p className="mx-auto max-w-3xl text-xl leading-relaxed">
						Интерактивное портфолио разработчика с демонстрацией навыков, архитектуры и виджетов. Проект
						создан как полноценное SPA на современном стеке, объединяя эстетику, функциональность и чистый
						код.
					</p>
					<div className="flex w-full items-center select-none">
						<div className="grow border-t-2 border-(--accent-default)" />
						<div className="flex flex-wrap items-center justify-center gap-6 rounded-full border-2 border-solid border-(--accent-default) bg-(--bg-secondary) px-4 py-2 text-sm">
							<div className="flex items-center gap-2">
								<User className="size-4" />
								<span>Frontend Developer</span>
							</div>
							<div className="flex items-center gap-2">
								<Calendar className="size-4" />
								<span>2025</span>
							</div>
							<div className="rounded-full bg-green-500/10 px-3 py-1 font-medium text-green-600 dark:text-green-400">
								Завершено
							</div>
						</div>

						<div className="grow border-t-2 border-(--accent-default)" />
					</div>
				</section>
				<section>
					<div className="group relative my-4">
						<div className="absolute inset-0 rounded-3xl bg-linear-to-r from-(--accent-default-op) to-(--accent-hover-op) opacity-0 blur-2xl transition-all duration-500 group-hover:opacity-100 group-hover:blur-3xl" />
						<Gallery
							className="rounded-3xl shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]"
							images={gal}
						/>
					</div>
				</section>
				<section className="space-y-8">
					<div className="grid gap-8 md:grid-cols-2">
						<div className="space-y-3">
							<h2 className="flex items-center gap-2 text-2xl font-bold">Задача</h2>
							<p className="leading-relaxed">
								Создать современное и технологичное портфолио, отражающее навыки фронтенд-разработчика и
								демонстрирующее реальные примеры кода, архитектуры и визуального стиля. Важно было
								объединить проекты, виджеты и личный кабинет в единой экосистеме с акцентом на
								адаптивность, производительность и модульность кода.
							</p>
						</div>
						<div className="space-y-3">
							<h2 className="flex items-center gap-2 text-2xl font-bold">Решение</h2>
							<p className="leading-relaxed">
								Разработано динамическое веб-приложение на стеке React + TypeScript + MobX, с
								архитектурой Feature-Sliced Design и адаптивным интерфейсом на Tailwind CSS. Реализованы
								интерактивные виджеты, тёмная тема, система авторизации и юридические разделы. Проект
								полностью автономен, легко масштабируется и демонстрирует лучшие практики современного
								фронтенда.
							</p>
						</div>
					</div>
				</section>
				<section className="space-y-4">
					<h2 className="text-3xl font-bold">Технологии</h2>
					<div className="flex flex-wrap justify-between gap-4">
						{projectTechs.map((tech) => {
							const Icon = tech!.icon;
							return (
								<div
									key={tech!.name}
									className="group flex flex-1 items-center justify-center gap-3 rounded-xl border border-(--border-color) bg-(--bg-secondary) px-3 py-3 transition-all duration-700 hover:-translate-y-4 hover:border-(--accent-default) hover:shadow-lg"
								>
									<Icon className="size-6 transition-transform duration-700 group-hover:scale-125" />
									<span className="w-fit font-medium">{tech!.name}</span>
								</div>
							);
						})}
					</div>
				</section>
			</div>
		</>
	);
};
