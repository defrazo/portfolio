import { JSX } from 'react';

interface AboutBageProps {
	icon: JSX.Element;
	title: string;
	href?: string;
	content: string | React.ReactElement;
}

export const AboutBage = ({ icon, title, href, content }: AboutBageProps) => {
	return (
		<div className="group rounded-2xl border border-transparent bg-(--bg-accent) p-4 shadow-(--shadow) transition-colors hover:border-(--border-accent-op) hover:text-(--color-accent)">
			<div className="flex items-start gap-3">
				<div className="size-5 text-(--color-secondary) transition-colors group-hover:text-(--color-accent)">
					{icon}
				</div>
				<div className="flex flex-col">
					<span className="text-xs font-semibold tracking-wider text-(--color-secondary) uppercase">
						{title}
					</span>
					{href ? (
						<a
							className="transition-colors hover:text-(--color-accent)"
							href={href}
							rel="noopener noreferrer"
							target="_blank"
						>
							{content}
						</a>
					) : (
						<span className="transition-colors hover:text-(--color-accent)">{content}</span>
					)}
				</div>
			</div>
		</div>
	);
};
