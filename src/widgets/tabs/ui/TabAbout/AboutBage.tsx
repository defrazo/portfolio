import type { LucideIcon } from 'lucide-react';

interface AboutBageProps {
	icon: LucideIcon;
	title: string;
	href?: string;
	content: string | React.ReactElement;
}

export const AboutBage = ({ icon: Icon, title, href, content }: AboutBageProps) => {
	return (
		<div className="group rounded-2xl border border-(--accent-primary-hover) bg-(--bg-accent) p-3 shadow-(--shadow) transition-[colors,border] hover:border-(--accent-primary-hover) hover:text-(--color-accent) md:border-transparent md:p-4">
			<div className="flex items-start gap-3">
				<div className="size-5 text-(--color-secondary) group-hover:text-(--color-accent)">
					<Icon className="size-5" />
				</div>
				<div className="flex flex-col">
					<span className="text-xs font-semibold tracking-wider text-(--color-secondary) uppercase">
						{title}
					</span>
					{href ? (
						<a
							className="group-hover:text-(--color-accent)"
							href={href}
							rel="noopener noreferrer"
							target="_blank"
						>
							{content}
						</a>
					) : (
						<span className="group-hover:text-(--color-accent)">{content}</span>
					)}
				</div>
			</div>
		</div>
	);
};
