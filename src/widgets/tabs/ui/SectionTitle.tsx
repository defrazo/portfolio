interface SectionTitleProps {
	title: string;
	className?: string;
}

export const SectionTitle = ({ title, className }: SectionTitleProps) => {
	return (
		<div className={className}>
			<h1 className="mb-1.5 text-2xl leading-tight font-black select-none md:text-3xl">{title}</h1>
			<div className="mr-auto h-1 w-24 rounded-full bg-linear-to-r from-(--accent-secondary-hover) to-(--accent-secondary) md:w-32" />
		</div>
	);
};
