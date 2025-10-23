import { SKILL_GROUP } from '../../model';
import { SectionTitle } from '..';
import { SkillSection } from '.';

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
				{SKILL_GROUP.map(({ id, skills, title }) => (
					<SkillSection key={id} skills={skills} title={title} />
				))}
			</div>
		</>
	);
};
