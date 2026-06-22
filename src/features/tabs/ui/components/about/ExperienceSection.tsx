import { useMemo, useState } from 'react';

import { cn } from '@/shared/lib/utils';
import { Button } from '@/shared/ui';

import { type ExperienceType, WORK_HISTORY } from '../../../model';
import { SectionTitle } from '../..';
import { ExperienceCard } from '.';

const EXPERIENCE_FILTERS = [
	{ value: 'all', label: 'Всё' },
	{ value: 'fullstack', label: 'Fullstack' },
	{ value: 'frontend', label: 'Frontend' },
	{ value: 'other', label: 'Другой опыт' },
] as const;

type ExperienceFilter = ExperienceType | 'all';

export const ExperienceSection = () => {
	const [activeFilter, setActiveFilter] = useState<ExperienceFilter>('all');
	const [showOtherExperience, setShowOtherExperience] = useState(true);

	const availableHistory = useMemo(() => {
		return showOtherExperience ? WORK_HISTORY : WORK_HISTORY.filter((item) => item.type !== 'other');
	}, [showOtherExperience]);

	const filterCounts = useMemo(() => {
		return EXPERIENCE_FILTERS.reduce(
			(acc, { value }) => {
				acc[value] =
					value === 'all'
						? availableHistory.length
						: availableHistory.filter((item) => item.type === value).length;

				return acc;
			},
			{} as Record<ExperienceFilter, number>
		);
	}, [availableHistory]);

	const filteredHistory = useMemo(() => {
		return activeFilter === 'all'
			? availableHistory
			: availableHistory.filter((item) => item.type === activeFilter);
	}, [activeFilter, availableHistory]);

	const handleToggleOtherExperience = () => {
		setShowOtherExperience((prev) => {
			if (prev && activeFilter === 'other') setActiveFilter('all');
			return !prev;
		});
	};

	return (
		<>
			<SectionTitle title="Опыт работы" />
			<div className="flex flex-col gap-4">
				<div className="flex flex-col-reverse gap-3 xl:flex-row xl:items-center xl:justify-between">
					<div className="flex flex-wrap gap-2">
						{EXPERIENCE_FILTERS.map(({ value, label }) => {
							const count = filterCounts[value];
							const isDisabled = count === 0;

							return (
								<Button
									key={value}
									className={cn(
										'min-w-19 rounded-lg border border-solid border-(--accent-primary-hover-op) text-sm font-semibold transition-colors disabled:cursor-not-allowed disabled:opacity-40',
										activeFilter === value
											? 'border-transparent bg-(--accent-primary)'
											: 'bg-(--bg-accent) hover:border-(--accent-primary-hover) hover:text-(--color-primary)'
									)}
									disabled={isDisabled}
									size="sm"
									type="button"
									variant="custom"
									onClick={() => setActiveFilter(value)}
								>
									{label}
									<span className="ml-1 opacity-70">({count})</span>
								</Button>
							);
						})}
					</div>
					<label className="ml-auto flex cursor-pointer items-center gap-3 text-sm font-semibold text-(--color-secondary)">
						<span>Показывать другой опыт</span>
						<button
							aria-pressed={showOtherExperience}
							className={cn(
								'relative h-6 w-11 shrink-0 cursor-pointer rounded-full border border-solid border-(--accent-primary-hover-op) transition-colors hover:border-(--accent-primary-hover)',
								showOtherExperience ? 'bg-(--accent-primary)' : 'bg-(--bg-accent)'
							)}
							type="button"
							onClick={handleToggleOtherExperience}
						>
							<span
								className={cn(
									'absolute top-1/2 left-1 size-4 -translate-y-1/2 rounded-full bg-(--color-primary) transition-transform',
									showOtherExperience ? 'translate-x-5' : 'translate-x-0'
								)}
							/>
						</button>
					</label>
				</div>
				<div className="flex flex-col gap-2 lg:gap-4">
					{filteredHistory.map((card) => (
						<ExperienceCard key={card.id} experience={card} />
					))}
				</div>
			</div>
		</>
	);
};
