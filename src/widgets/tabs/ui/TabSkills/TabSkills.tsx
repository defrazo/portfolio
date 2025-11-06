import { SKILL_GROUP } from '../../model';
import { SectionTitle } from '..';
import { SkillSection } from '.';

export const TabSkills = () => {
	return (
		<>
			<SectionTitle title="Навыки" />
			<div className="flex flex-col gap-4 lg:gap-8">
				<p className="text-justify leading-snug lg:-mb-4 lg:text-lg">
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
