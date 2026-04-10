import { Calendar, User } from 'lucide-react';

interface StatusPanelProps {
	date: string;
	status: string;
	statusLink?: string;
}

export const StatusPanel = ({ date, status, statusLink }: StatusPanelProps) => {
	return (
		<div className="hidden w-full items-center select-none md:flex">
			<div className="h-0.5 w-full bg-linear-to-l from-(--accent-secondary)" />
			<div className="flex w-fit shrink-0 flex-wrap items-center justify-center gap-3 rounded-full border-2 border-solid border-(--accent-secondary) bg-(--bg-secondary) px-4 py-2 text-sm">
				<div className="flex items-center gap-1">
					<User className="size-4" />
					<span>Frontend Developer</span>
				</div>
				<div className="flex items-center gap-1">
					<Calendar className="size-4" />
					<span>{date}</span>
				</div>
				<div
					className={`cursor-pointer rounded-full border border-transparent ${status === 'Завершено' ? 'bg-(--status-success-op) text-(--status-success) hover:border-(--status-success)' : 'bg-(--status-warning-op) text-(--status-warning) hover:border-(--status-warning)'} px-3 py-1 font-medium transition-colors`}
				>
					{statusLink ? (
						<a href={statusLink} rel="noopener noreferrer" target="_blank">
							{status}
						</a>
					) : (
						status
					)}
				</div>
			</div>
			<div className="h-0.5 w-full bg-linear-to-r from-(--accent-secondary)" />
		</div>
	);
};
