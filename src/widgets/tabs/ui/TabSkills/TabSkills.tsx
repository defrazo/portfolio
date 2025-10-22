import { getSkills } from '../../lib';
import type { SkillGroup } from '../../model';
import { SectionTitle } from '..';
import { SkillSection } from '.';

const skillGroup: SkillGroup[] = [
	{
		id: 'frontend',
		title: 'Frontend',
		/*prettier-ignore*/
		skills: getSkills(['React', 'TypeScript', 'JavaScript', 'MobX', 'FSD', 'HTML5', 'CSS3', 'SASS', 'Tailwind CSS']),
	},
	{
		id: 'workflow',
		title: 'Workflow',
		skills: getSkills(['Supabase', 'PostgreSQL', 'Vite', 'GitHub', 'Docker', 'VS Code']),
	},
	{ id: 'design', title: 'Design', skills: getSkills(['Figma', 'Photoshop', 'Illustrator']) },
];

export const TabSkills = () => {
	return (
		<>
			<SectionTitle title="Навыки" />
			<div className="flex flex-col gap-8">
				<p className="-mb-4 text-justify text-lg leading-snug">
					Работаю с современным стеком фронтенд-разработки, в котором важны предсказуемость,
					производительность и поддерживаемость. Пишу код, который легко читать, просто развивать и не стыдно
					передавать коллегам.
				</p>
				{skillGroup.map(({ id, skills, title }) => (
					<SkillSection key={id} skills={skills} title={title} />
				))}
			</div>
		</>
	);
};
