export const SectionTitle = ({ title, className }: { title: string; className?: string }) => {
	return (
		<div className={className}>
			<h1 className="mb-1.5 text-2xl leading-tight font-black select-none lg:text-3xl">{title}</h1>
			<div className="mr-auto h-1 w-24 rounded-full bg-linear-to-r from-(--accent-secondary-hover) to-(--accent-secondary) lg:w-32" />
		</div>
	);
};
