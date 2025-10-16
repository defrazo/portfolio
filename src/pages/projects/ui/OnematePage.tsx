import { technologies } from '@/entities/tecnology';
import { Onemate } from '@/shared/content';

import { ArrowLeft, Calendar, User } from 'lucide-react';
import { Link } from 'react-router-dom';

export const OnematePage = () => {
	const projectTechNames = ['React', 'TypeScript', 'Tailwind CSS', 'MobX', 'Supabase', 'Vite'];
	const projectTechs = projectTechNames.map((name) => technologies.find((t) => t.name === name)).filter(Boolean);

	return (
		<>
			<div className="flex flex-col gap-6 py-12">
				<section className="space-y-6 text-center">
					<div className="space-y-3">
						<h1 className="text-5xl font-bold tracking-tight">OneMate</h1>
						<div className="mx-auto h-1 w-24 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500" />
					</div>
					<p className="mx-auto max-w-3xl text-xl leading-relaxed">
						OneMate – это современное веб-приложение, которое включает в себя многофункциональный виджет-хаб
						(калькулятор, календарь, заметки, конвертер валют, погода, переводчик), канбан-доску и удобный
						ToDo.
					</p>
					<div className="flex w-full items-center select-none">
						<div className="grow border-t-2 border-[var(--accent-default)]" />
						<div className="flex flex-wrap items-center justify-center gap-6 rounded-full border-2 border-solid border-[var(--accent-default)] bg-[var(--bg-secondary)] px-4 py-2 text-sm">
							<div className="flex items-center gap-2">
								<User className="size-4" />
								<span>Full-stack Developer</span>
							</div>
							<div className="flex items-center gap-2">
								<Calendar className="size-4" />
								<span>2024</span>
							</div>
							<div className="rounded-full bg-green-500/10 px-3 py-1 font-medium text-green-600 dark:text-green-400">
								В разработке
							</div>
						</div>

						<div className="grow border-t-2 border-[var(--accent-default)]" />
					</div>
				</section>
				<section>
					<div className="group relative my-4">
						<div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-500/20 to-cyan-500/20 opacity-0 blur-2xl transition-all duration-500 group-hover:opacity-100 group-hover:blur-3xl" />
						<img
							src={Onemate}
							alt="Главная страница OneMate"
							className="core-border relative w-full rounded-3xl shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]"
						/>
					</div>
				</section>
				<section className="space-y-8">
					<div className="grid gap-8 md:grid-cols-2">
						<div className="space-y-3">
							<h2 className="flex items-center gap-2 text-2xl font-bold">
								<span className="text-orange-500">⚡</span>
								Задача
							</h2>
							<p className="leading-relaxed">
								Создать экспериментальную платформу для апробации современных инструментов, технологий и
								архитектурных подходов во фронтенд-разработке с фокусом на UX.
							</p>
						</div>
						<div className="space-y-3">
							<h2 className="flex items-center gap-2 text-2xl font-bold">
								<span className="text-green-500">✓</span>
								Решение
							</h2>
							<p className="leading-relaxed">
								Персональное настраиваемое рабочее пространство с унифицированным UI, множеством
								функциональных виджетов и полноценной системой управления аккаунтом.
							</p>
						</div>
					</div>
				</section>
				<section className="space-y-6">
					<h2 className="text-3xl font-bold">Технологии</h2>
					<div className="flex flex-wrap justify-between gap-4">
						{projectTechs.map((tech) => {
							const Icon = tech!.icon;
							return (
								<div
									key={tech!.name}
									className="group flex flex-1 items-center justify-center gap-3 rounded-xl border border-[var(--border-color)] bg-[var(--bg-secondary)] px-3 py-3 transition-all duration-700 hover:-translate-y-4 hover:border-[var(--accent-default)] hover:shadow-lg"
								>
									<Icon className="size-6 transition-transform duration-700 group-hover:scale-125" />
									<span className="w-fit font-medium">{tech!.name}</span>
								</div>
							);
						})}
					</div>
				</section>
				<section className="space-y-6">
					<h2 className="text-3xl font-bold">Ключевые возможности</h2>
					<div className="grid gap-6 md:grid-cols-2">
						<div className="space-y-3 rounded-2xl border border-[var(--border-color)] bg-gradient-to-br from-blue-500/5 to-cyan-500/5 p-6">
							<div className="flex items-start gap-3">
								<span className="text-2xl">🎨</span>
								<div className="space-y-2">
									<h3 className="text-xl font-semibold">Унифицированный UI</h3>
									<ul className="list-default space-y-1.5">
										<li>OAuth 2.0 + Email авторизация</li>
										<li>Адаптивный дизайн для всех устройств</li>
										<li>Кроссбраузерная совместимость</li>
										<li>Dark/Light режимы</li>
									</ul>
								</div>
							</div>
						</div>
						<div className="space-y-3 rounded-2xl border border-[var(--border-color)] bg-gradient-to-br from-purple-500/5 to-pink-500/5 p-6">
							<div className="flex items-start gap-3">
								<span className="text-2xl">🧩</span>
								<div className="space-y-2">
									<h3 className="text-xl font-semibold">6 виджетов</h3>
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
						<div className="space-y-3 rounded-2xl border border-[var(--border-color)] bg-gradient-to-br from-green-500/5 to-emerald-500/5 p-6">
							<div className="flex items-start gap-3">
								<span className="text-2xl">👤</span>
								<div className="space-y-2">
									<h3 className="text-xl font-semibold">Личный кабинет</h3>
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
						<div className="space-y-3 rounded-2xl border border-[var(--border-color)] bg-gradient-to-br from-orange-500/5 to-red-500/5 p-6">
							<div className="flex items-start gap-3">
								<span className="text-2xl">⚖️</span>
								<div className="space-y-2">
									<h3 className="text-xl font-semibold">Правовое обеспечение</h3>
									<ul className="list-default space-y-1.5">
										<li>Демо-режим (GDPR compliance)</li>
										<li>Политика конфиденциальности</li>
										<li>Пользовательское соглашение</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</section>
				<section className="space-y-6">
					<h2 className="text-3xl font-bold">Технические детали</h2>
					<div className="space-y-4 rounded-2xl border border-[var(--border-color)] bg-[var(--bg-secondary)] p-6">
						<div className="flex items-start gap-3">
							<span className="text-xl">🏗️</span>
							<div>
								<h3 className="mb-2 font-semibold">Архитектура</h3>
								<p className="text-sm text-gray-600 dark:text-gray-400">
									Feature-Sliced Design с четким разделением слоев (app, pages, widgets, features,
									entities, shared)
								</p>
							</div>
						</div>
						<div className="flex items-start gap-3">
							<span className="text-xl">📱</span>
							<div>
								<h3 className="mb-2 font-semibold">Адаптивность</h3>
								<p className="text-sm text-gray-600 dark:text-gray-400">
									Полная поддержка от iPhone SE (375px) до 2K мониторов (2560px) в обеих ориентациях
								</p>
							</div>
						</div>
						<div className="flex items-start gap-3">
							<span className="text-xl">🎯</span>
							<div>
								<h3 className="mb-2 font-semibold">State Management</h3>
								<p className="text-sm text-gray-600 dark:text-gray-400">
									MobX для эффективного управления состоянием с реактивными обновлениями
								</p>
							</div>
						</div>
					</div>
				</section>
				<section className="border-t border-[var(--border-color)] pt-8">
					<div className="flex items-center justify-between">
						<Link
							to="/projects/previous"
							className="group flex items-center gap-2 text-sm transition-colors hover:text-[var(--accent-default)]"
						>
							<ArrowLeft className="size-4 transition-transform group-hover:-translate-x-1" />
							Предыдущий проект
						</Link>
						<Link
							to="/projects/next"
							className="group flex items-center gap-2 text-sm transition-colors hover:text-[var(--accent-default)]"
						>
							Следующий проект
							<ArrowLeft className="size-4 rotate-180 transition-transform group-hover:translate-x-1" />
						</Link>
					</div>
				</section>
			</div>
		</>
	);
};
