interface SectionTitleProps {
	title: string;
	className?: string;
}

export const SectionTitle = ({ title, className }: SectionTitleProps) => {
	return (
		<div className={className}>
			<h1 className="mb-1.5 text-3xl leading-tight font-black select-none">{title}</h1>
			<div className="mr-auto h-1 w-32 rounded-full bg-linear-to-r from-(--accent-secondary-hover) to-(--accent-secondary)" />
		</div>
	);
};
