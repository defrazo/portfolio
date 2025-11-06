import type { LucideIcon } from 'lucide-react';

interface AboutBadgeProps {
	icon: LucideIcon;
	title: string;
	href?: string;
	content: React.ReactNode;
}

export const AboutBadge = ({ icon: Icon, title, href, content }: AboutBadgeProps) => {
	const Wrapper: React.ElementType = href ? 'a' : 'div';
	const wrapperProps = href ? { href, target: '_blank', rel: 'noopener noreferrer' } : {};

	return (
		<div className="group card-surface hover:text-(--color-accent)">
			<div className="flex items-start gap-3">
				<div className="size-5 text-(--color-secondary) group-hover:text-(--color-accent)">
					<Icon className="size-5" />
				</div>
				<div className="flex flex-col">
					<span className="text-xs font-semibold tracking-wider text-(--color-secondary) uppercase">
						{title}
					</span>
					<Wrapper className="group-hover:text-(--color-accent)" {...wrapperProps}>
						{content}
					</Wrapper>
				</div>
			</div>
		</div>
	);
};
