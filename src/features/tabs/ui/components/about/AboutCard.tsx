import type { ProfileCard } from '../../../model';

export const AboutCard = ({ card }: { card: ProfileCard }) => {
	const { icon: Icon, title, href, content, withIndicator } = card;

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
						<span className="flex items-center gap-2">
							{withIndicator && (
								<span className="relative flex h-2 w-2">
									<span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
									<span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
								</span>
							)}
							{content}
						</span>
					</Wrapper>
				</div>
			</div>
		</div>
	);
};
