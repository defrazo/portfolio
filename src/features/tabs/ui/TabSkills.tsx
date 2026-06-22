import { Fragment, useState } from 'react';
import { CircleQuestionMark } from 'lucide-react';

import { TECHS_EXTRA } from '@/entities/tecnology';
import { useOutsideClick } from '@/shared/lib/hooks';
import { cn } from '@/shared/lib/utils';
import { Button, Chip } from '@/shared/ui';

import { SKILL_LEVEL_HINTS, TECH_GROUPS } from '../model';
import { TechSection } from './components/skills';

export const TabSkills = () => {
	const [isShowHint, setIsShowHint] = useState(false);

	const hintRef = useOutsideClick<HTMLDivElement>(() => setIsShowHint(false));

	return (
		<div className="flex flex-col gap-4 xl:gap-8">
			<div className="flex flex-col xl:flex-row xl:items-center xl:gap-4">
				<span className="flex-1 text-justify xl:text-lg">Технологии и инструменты, с которыми я работаю</span>
				<div ref={hintRef} className="relative ml-auto">
					<Button
						className={cn(
							'rounded-xl bg-(--accent-secondary)/10 text-(--accent-secondary)/80 shadow-(--shadow) hover:bg-(--accent-secondary)/20 hover:text-(--accent-secondary)',
							isShowHint && 'bg-(--accent-secondary)/20 text-(--accent-secondary)'
						)}
						leftIcon={<CircleQuestionMark className="size-4" />}
						onClick={() => setIsShowHint((prev) => !prev)}
					>
						Что означают уровни
					</Button>
					{isShowHint && (
						<div className="absolute top-full right-0 z-50 mt-2 w-xs flex-1 rounded-xl border border-(--accent-primary-hover-op) bg-(--bg-global-op) p-3 shadow-(--shadow) backdrop-blur-xl md:p-4 xl:w-fit">
							<div className="grid grid-cols-[auto_1fr] gap-3 text-xs xl:text-sm xl:whitespace-nowrap">
								{SKILL_LEVEL_HINTS.map(({ label, color, description }) => (
									<Fragment key={label}>
										<span style={{ color }}>{label}</span>
										<span>{description}</span>
									</Fragment>
								))}
							</div>
						</div>
					)}
				</div>
			</div>
			{TECH_GROUPS.map((group) => (
				<TechSection key={group.id} group={group} />
			))}
			<div className="flex flex-col gap-2">
				<h4 className="text-xs tracking-wider text-(--color-secondary) uppercase xl:text-sm">Дополнительно</h4>
				<div className="flex flex-wrap gap-2">
					{TECHS_EXTRA.map((tech) => (
						<Chip key={tech}>{tech}</Chip>
					))}
				</div>
			</div>
		</div>
	);
};
