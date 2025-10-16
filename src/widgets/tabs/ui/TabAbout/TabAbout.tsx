import { observer } from 'mobx-react-lite';

import { Calendar } from 'lucide-react';
import { education, workplaces } from '../../lib';
import { Workplace } from './Workplace';
import { Education } from './Education';
import { Table } from './Table';

export const TabAbout = observer(() => {
	return (
		<div className="flex flex-col gap-6">
			<h1 className="mb-2 text-3xl font-black">Обо мне</h1>
			<section className="flex flex-col gap-4">
				<div className="flex flex-col">
					<h2 className="text-4xl font-black">Евгений Летунов</h2>
					<h3 className="text-xl text-[var(--color-disabled)]">Frontend developer</h3>
				</div>
				<p className="text-justify">
					Я – Евгений, начинающий фронтенд-разработчик с бэкграундом в IT и опытом научной работы. Моя цель –
					создавать современные, удобные и эстетичные веб-интерфейсы, уделяя внимание архитектуре и качеству
					кода. Основной стек – React, TypeScript и Tailwind CSS. Постоянно развиваюсь, изучаю лучшие практики
					и стремлюсь к тому, чтобы превращать идеи в работающие, продуманные решения.
				</p>
				<div className="flex flex-col justify-evenly gap-8 md:flex-row">
					<Table
						label1="Имя"
						value1="Летунов Евгений"
						label2="Возраст"
						value2="29 лет"
						label3="Город"
						value3="Екатеринбург"
					/>
					<Table
						label1="E-mail"
						value1="defrazo@yandex.ru"
						label2="Telegram"
						value2="@defrazo"
						label3="Город"
						value3="Екатеринбург"
					/>
				</div>
			</section>
			<section className="flex flex-col gap-4">
				<h2 className="text-2xl font-black">Опыт работы</h2>
				<div className="flex flex-col gap-6 border-l-2 border-[var(--border-color)]">
					{workplaces.map((place) => (
						<Workplace
							workplace={place.workplace}
							post={place.post}
							start={place.start}
							end={place.end}
							desc={place.desc}
						/>
					))}
				</div>
			</section>
			<section className="flex flex-col gap-4">
				<h2 className="text-2xl font-black">Образование</h2>
				<div className="flex flex-1 flex-col gap-4">
					{education.map((edu) => (
						<Education
							univer={edu.univer}
							code={edu.code}
							post={edu.post}
							grade={edu.grade}
							end={edu.end}
						/>
					))}
				</div>
			</section>
		</div>
	);
});
