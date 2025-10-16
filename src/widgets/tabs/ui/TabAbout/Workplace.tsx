import { Calendar } from 'lucide-react';

interface WorkplaceProps {
	workplace: string;
	post: string;
	start: string;
	end: string;
	desc: string;
}

export const Workplace = ({ workplace, post, start, end, desc }: WorkplaceProps) => {
	return (
		<div className="relative space-y-6 pl-6">
			<div className="group relative">
				<div className="absolute top-1 -left-[9px] size-4 rounded-full border-2 border-[var(--border-color)] transition-colors group-hover:border-[var(--accent-default)]"></div>
				<div className="flex flex-col gap-2 pl-4">
					<h6 className="text-lg leading-tight text-[var(--color-text)]">
						<span className="font-semibold">{post}</span> –{' '}
						<span className="text-[var(--accent-default)]">{workplace}</span>
					</h6>
					<div className="flex items-center gap-2 text-sm text-[var(--color-disabled)]">
						<Calendar className="size-4" />
						<span>
							{start} – {end}
						</span>
					</div>
					<p className="text-sm leading-relaxed">{desc}</p>
				</div>
			</div>
		</div>
	);
};
