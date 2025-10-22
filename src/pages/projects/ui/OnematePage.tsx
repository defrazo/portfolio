import { Calendar, User } from 'lucide-react';

import { technologies } from '@/entities/tecnology';
import { IconBolt } from '@/shared/assets/icons';
import { DashboardMob, Onemate } from '@/shared/content';
import { Gallery, MobileGallery } from '@/shared/ui';

export const OnematePage = () => {
	const gal = [Onemate, Onemate, Onemate, Onemate, Onemate, Onemate];
	const galMob = [DashboardMob, DashboardMob, DashboardMob, DashboardMob, DashboardMob, DashboardMob];

	const projectTechs = ['React', 'TypeScript', 'FSD', 'Tailwind', 'MobX', 'Supabase', 'Vite']
		.map((name) => technologies.find((t) => t.name === name))
		.filter(Boolean);

	return (
		<>
			<div className="flex flex-col gap-6 py-12">
				<section className="flex flex-col gap-4 text-center">
					<div className="space-y-1">
						<h1 className="text-5xl font-bold tracking-tight">OneMate</h1>
						<div className="mx-auto h-1 w-24 animate-pulse rounded-full bg-linear-to-r from-blue-500 to-cyan-500" />
					</div>
					<p className="mx-auto max-w-4xl text-xl leading-tight">
						OneMate – это современное веб-приложение, которое включает в себя многофункциональный виджет-хаб
						(калькулятор, календарь, заметки, конвертер валют, погода, переводчик), канбан-доску и удобный
						ToDo.
					</p>
					<div className="flex w-full items-center select-none">
						<div className="grow border-t-2 border-(--accent-default)" />
						<div className="border-(--accent-default)] bg-(--bg-secondary)] flex flex-wrap items-center justify-center gap-6 rounded-full border-2 border-solid px-4 py-2 text-sm">
							<div className="flex items-center gap-2">
								<User className="size-4" />
								<span>Frontend Developer</span>
							</div>
							<div className="flex items-center gap-2">
								<Calendar className="size-4" />
								<span>2025</span>
							</div>
							<div className="rounded-full bg-green-500/10 px-3 py-1 font-medium text-green-600 dark:text-green-400">
								<a href="https://github.com/defrazo/onemate" rel="noopener noreferrer" target="_blank">
									В разработке
								</a>
							</div>
						</div>

						<div className="grow border-t-2 border-(--accent-default)" />
					</div>
				</section>
				<section>
					<div className="group relative my-4">
						<div className="from-(--accent-default-op)] to-(--accent-hover-op)] absolute inset-0 rounded-3xl bg-linear-to-r opacity-0 blur-2xl transition-all duration-500 group-hover:opacity-100 group-hover:blur-3xl" />
						<Gallery
							className="rounded-3xl shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]"
							images={gal}
						/>
					</div>
				</section>
				<a
					className="border-(--border-color)] bg-(--bg-secondary)] text-(--accent-default)] hover:border-(--accent-default)] hover:text-(--accent-text)] hover:shadow-[0_0_12px_var(--accent-default-op) mx-auto mt-4 flex w-fit items-center gap-2 rounded-full border px-5 py-2 text-lg font-medium transition-all duration-500 hover:-translate-y-1"
					href="https://letunoff.ru/onemate"
					rel="noopener noreferrer"
					target="_blank"
				>
					<IconBolt className="text-(--accent-default)] size-5 transition-colors duration-500 group-hover:text-(--accent-text)" />
					<span>Открыть проект</span>
				</a>
				<a
					className="border-(--border-color)] bg-(--bg-secondary)] text-(--accent-default)] hover:border-(--accent-default)] hover:text-(--accent-text)] hover:shadow-[0_0_12px_var(--accent-default-op) mx-auto mt-4 flex w-fit items-center gap-2 rounded-full border px-5 py-2 text-lg font-medium transition-all duration-500 hover:-translate-y-1"
					href="https://letunoff.ru/onemate"
					rel="noopener noreferrer"
					target="_blank"
				>
					<IconBolt className="text-(--accent-default)] size-5 transition-colors duration-500 group-hover:text-(--accent-text)" />
					<span>https://letunoff.ru/onemate</span>
				</a>
				<section className="space-y-8">
					<div className="grid gap-8 md:grid-cols-2">
						<div className="space-y-2">
							<h2 className="flex items-center gap-2 text-2xl font-bold">Задача</h2>
							<p className="leading-relaxed">
								Создать экспериментальную платформу для апробации современных инструментов, технологий и
								архитектурных подходов во фронтенд-разработке с фокусом на UX.
							</p>
						</div>
						<div className="space-y-2">
							<h2 className="flex items-center gap-2 text-2xl font-bold">Решение</h2>
							<p className="leading-relaxed">
								Персональное настраиваемое рабочее пространство с унифицированным UI, множеством
								функциональных виджетов и полноценной системой управления аккаунтом.
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
									className="group border-(--border-color)] bg-(--bg-secondary)] hover:border-(--accent-default)] flex flex-1 items-center justify-center gap-3 rounded-xl border px-3 py-3 transition-all duration-700 hover:-translate-y-4 hover:shadow-lg"
								>
									<Icon className="size-6 transition-transform duration-700 group-hover:scale-125" />
									<span className="w-fit font-medium">{tech!.name}</span>
								</div>
							);
						})}
					</div>
				</section>
				<section className="space-y-6">
					<div className="grid gap-6 md:grid-cols-[1fr_auto]">
						<div className="flex flex-col gap-4">
							<h2 className="col-span-2 text-3xl font-bold">Ключевые возможности</h2>
							<div className="grid grid-cols-2">
								<div className="border-(--border-color)] space-y-3 border-r border-b p-4">
									<div className="flex items-start gap-3">
										<div className="space-y-2">
											<h3 className="text-xl font-semibold text-(--accent-default)">
												Унифицированный UI
											</h3>
											<ul className="list-default space-y-1.5">
												<li>OAuth 2.0 + Email авторизация</li>
												<li>Адаптивный дизайн для всех устройств</li>
												<li>Кроссбраузерная совместимость</li>
												<li>Dark/Light режимы</li>
											</ul>
										</div>
									</div>
								</div>
								<div className="border-(--border-color)] space-y-3 border-b p-4">
									<div className="flex items-start gap-3">
										<div className="space-y-2">
											<h3 className="text-xl font-semibold text-(--accent-default)">
												6 виджетов
											</h3>
											<ul className="list-default space-y-1.5">
												<li>Калькулятор с историей</li>
												<li>Календарь с экспортом периодов</li>
												<li>Заметки с Drag & Drop</li>
												<li>Конвертер валют</li>
												<li>Погода с прогнозом</li>
												<li>Переводчик</li>
											</ul>
										</div>
									</div>
								</div>
								<div className="border-(--border-color)] space-y-3 border-r p-4">
									<div className="flex items-start gap-3">
										<div className="space-y-2">
											<h3 className="text-xl font-semibold text-(--accent-default)">
												Личный кабинет
											</h3>
											<ul className="list-default space-y-1.5">
												<li>16 предустановленных аватарок</li>
												<li>Редактирование личных данных</li>
												<li>Управление контактами с маской</li>
												<li>История сессий и входов</li>
												<li>Смена пароля и удаление профиля</li>
											</ul>
										</div>
									</div>
								</div>
								<div className="space-y-3 p-4">
									<div className="flex items-start">
										<div className="space-y-2">
											<h3 className="text-xl font-semibold text-(--accent-default)">
												Правовое обеспечение
											</h3>
											<ul className="list-default space-y-1.5">
												<li>Демо-режим (GDPR compliance)</li>
												<li>Политика конфиденциальности</li>
												<li>Пользовательское соглашение</li>
											</ul>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="flex flex-col gap-4">
							<h2 className="text-3xl font-bold">Мобильная версия</h2>
							<MobileGallery className="flex-1" images={galMob} />
						</div>
					</div>
				</section>
			</div>
		</>
	);
};
