import { observer } from 'mobx-react-lite';

import { Divider } from '@/shared/ui';

import { Link } from 'react-router-dom';
import { technologies } from '@/entities/tecnology';
import { Onemate } from '@/shared/content';

export const TabProjects = observer(() => {
	const onemateTechs = ['React', 'TypeScript', 'Tailwind CSS', 'MobX', 'Supabase', 'Vite']
		.map((name) => technologies.find((t) => t.name === name))
		.filter(Boolean);

	const portfolioTechs = ['React', 'TypeScript', 'Tailwind CSS', 'MobX', 'Vite']
		.map((name) => technologies.find((t) => t.name === name))
		.filter(Boolean);

	return (
		<div className="flex flex-col gap-6">
			<h1 className="mb-2 text-3xl font-black">Проекты</h1>
			<div className="flex flex-col gap-6">
				<section className="flex items-center gap-4">
					<div className="flex flex-col gap-2">
						<div className="max-w-96 flex-shrink-0 gap-2 overflow-hidden rounded-3xl">
							<Link to="/project/onemate">
								<img
									src={Onemate}
									alt=""
									className="max-w-96 scale-125 rounded-3xl transition-transform duration-300 ease-in-out hover:scale-100"
								/>
							</Link>
						</div>
					</div>
					<div className="flex h-full flex-col justify-between gap-4">
						<div className="flex flex-col justify-between">
							<h2 className="text-3xl font-black">
								OneMate{' '}
								<span className="align-super text-sm text-[var(--color-disabled)]">Сентябрь 2025</span>
							</h2>
						</div>
						<p className="text-justify whitespace-normal">
							OneMate – это современное веб-приложение, которое включает в себя многофункциональный
							виджет-хаб (калькулятор, календарь, заметки, конвертер валют, погода, переводчик),
							канбан-доску и удобный ToDo.
						</p>
						<div className="flex flex-1 flex-wrap items-end gap-4">
							{onemateTechs.map((tech) => {
								const Icon = tech!.icon;
								return (
									<div className="group row-span-2 flex size-12 items-center justify-center rounded-full bg-[var(--bg-primary)] transition-colors duration-300 ease-in-out hover:border-[var(--accent-default)]">
										<Icon className="size-6 transition-all duration-300 ease-in-out group-hover:scale-125" />
									</div>
								);
							})}
						</div>
					</div>
				</section>
				<Divider className="bg-[var(--bg-tertiary)]" />
				<section className="flex items-center gap-4">
					<div className="flex flex-col gap-2">
						<div className="max-w-96 flex-shrink-0 gap-2 overflow-hidden rounded-3xl">
							<img
								src={Onemate}
								alt=""
								className="max-w-96 scale-125 rounded-3xl transition-transform duration-300 ease-in-out hover:scale-100"
							/>
						</div>
					</div>
					<div className="flex flex-col justify-between gap-2">
						<h2 className="text-3xl font-black">
							Портфолио{' '}
							<span className="align-super text-sm text-[var(--color-disabled)]">Октябрь 2025</span>
						</h2>

						<p className="text-justify whitespace-normal">
							Проект создан как демонстрация моих навыков фронтенд-разработки и любви к чистому коду. В
							основе лежит архитектура Feature-Sliced Design, обеспечивающая масштабируемость и
							читаемость. Портфолио адаптивно, оптимизировано по скорости и оформлено в минималистичном
							стиле.
						</p>
						<div className="flex flex-1 flex-wrap items-end gap-4">
							{portfolioTechs.map((tech) => {
								const Icon = tech!.icon;
								return (
									<div className="group row-span-2 flex size-12 items-center justify-center rounded-full bg-[var(--bg-primary)] transition-colors duration-300 ease-in-out hover:border-[var(--accent-default)]">
										<Icon className="size-6 transition-all duration-300 ease-in-out group-hover:scale-125" />
									</div>
								);
							})}
						</div>
					</div>
				</section>
			</div>
		</div>
	);
});
