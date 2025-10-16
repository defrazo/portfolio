import { observer } from 'mobx-react-lite';

import { SkillBage } from './SkillBage';
import { skills } from '../lib';

export const TabSkills = observer(() => {
	const frontendSkills = ['React', 'TypeScript', 'JavaScript', 'MobX', 'FSD', 'HTML5', 'CSS3', 'SASS', 'Tailwind CSS']
		.map((label) => skills.find((skill) => skill.label === label))
		.filter(Boolean) as NonNullable<(typeof skills)[number]>[];
	const workflowSkills = ['Supabase', 'PostgreSQL', 'Vite', 'GitHub', 'Docker', 'VS Code']
		.map((label) => skills.find((skill) => skill.label === label))
		.filter(Boolean) as NonNullable<(typeof skills)[number]>[];
	const designSkills = ['Figma', 'Photoshop', 'Illustrator']
		.map((label) => skills.find((skill) => skill.label === label))
		.filter(Boolean) as NonNullable<(typeof skills)[number]>[];

	return (
		<div className="flex flex-col gap-10">
			<div className="relative">
				<h1 className="z-20 text-3xl font-black">Навыки</h1>
			</div>
			<section className="flex flex-col gap-4">
				<div className="flex w-full items-center select-none">
					<h2 className="pr-2 text-2xl font-bold">FRONTEND</h2>
					<div className="grow border-t-2 border-[var(--accent-default)]" />
				</div>
				<div className="flex flex-col gap-4">
					<div className="flex w-full justify-between gap-4">
						<div className="grid w-full grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
							{frontendSkills.map((skill) => (
								<SkillBage
									key={skill.label}
									label={skill.label}
									value={skill.value}
									icon={skill.icon}
									color={skill.color}
								/>
							))}
						</div>
					</div>
				</div>
			</section>
			<section className="flex flex-col gap-4">
				<div className="flex w-full items-center select-none">
					<h3 className="pr-2 text-2xl font-bold">WORKFLOW</h3>
					<div className="grow border-t-2 border-[var(--accent-default)]" />
				</div>
				<div className="flex w-full justify-between gap-4">
					<div className="grid w-full grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
						{workflowSkills.map((skill) => (
							<SkillBage
								key={skill.label}
								label={skill.label}
								value={skill.value}
								icon={skill.icon}
								color={skill.color}
							/>
						))}
					</div>
				</div>
			</section>
			<section className="flex flex-col gap-4">
				<div className="flex w-full items-center select-none">
					<h2 className="pr-2 text-2xl font-bold">DESIGN</h2>
					<div className="grow border-t-2 border-[var(--accent-default)]" />
				</div>
				<div className="flex w-full justify-between gap-4">
					<div className="grid w-full grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
						{designSkills.map((skill) => (
							<SkillBage
								key={skill.label}
								label={skill.label}
								value={skill.value}
								icon={skill.icon}
								color={skill.color}
							/>
						))}
					</div>
				</div>
			</section>
		</div>
	);
});
