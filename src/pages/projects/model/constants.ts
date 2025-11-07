import { LayoutGrid, PanelsTopLeft, ShieldCheck, UserCog } from 'lucide-react';

import type { Feature } from '.';

export const FEATURES: Feature[] = [
	{
		title: '6 виджетов',
		icon: LayoutGrid,
		color: 'text-[#3B82F6]',
		lead: 'Ежедневные операции в одном месте',
		bullets: [
			'Калькулятор с историей',
			'Календарь с экспортом периодов',
			'Заметки с Drag & Drop',
			'Конвертер валют',
			'Погода с прогнозом',
			'Переводчик',
		],
	},
	{
		title: 'Унифицированный UI',
		icon: PanelsTopLeft,
		color: 'text-[#8B5CF6]',
		lead: 'Один визуальный язык для всех модулей',
		bullets: [
			'OAuth 2.0 + Email авторизация',
			'Адаптив под мобайл/таб/десктоп',
			'Кроссбраузерная совместимость',
			'Dark / Light режимы',
		],
	},
	{
		title: 'Личный кабинет',
		icon: UserCog,
		color: 'text-[#10B981]',
		lead: 'Настройка аккаунта и безопасность',
		bullets: [
			'16 готовых аватарок',
			'Редактирование личных данных',
			'История входов и сессий',
			'Смена пароля и удаление профиля',
		],
	},
	{
		title: 'Правовое обеспечение',
		icon: ShieldCheck,
		color: 'text-[#3B82F6]',
		lead: 'Соответствие правовым требованиям',
		bullets: ['Demo-режим (GDPR-friendly)', 'Политика конфиденциальности', 'Пользовательское соглашение'],
	},
];
