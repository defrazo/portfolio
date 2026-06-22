export const Chip = ({ children }: { children: React.ReactNode }) => (
	<span className="rounded-4xl border border-solid border-(--border-light) bg-(--bg-secondary) px-2.5 py-1 text-xs transition-colors hover:border-(--accent-primary-hover) hover:text-(--color-accent) md:text-sm">
		{children}
	</span>
);
