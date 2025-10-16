import type { ReactNode } from 'react';

import { usePageTitle } from '@/shared/lib/hooks';
import { ScrollToTop } from '@/shared/ui';
import { Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink, Github } from 'lucide-react';

interface ProjectPageLayoutProps {
	children: ReactNode;
	title: string;
}

export const ProjectPageLayout = ({ children, title }: ProjectPageLayoutProps) => {
	usePageTitle(title);

	return (
		<div className="core-base core-border hide-scrollbar relative mx-auto my-12 flex flex-1 cursor-default flex-col gap-4 overflow-auto rounded-xl p-12 shadow-[var(--shadow)] select-none xl:max-w-6xl">
			<div className="absolute top-0 left-0 z-10 w-full border-b border-[var(--border-color)] bg-[var(--bg-secondary)]">
				<div className="mx-12 flex items-center justify-between py-4">
					<Link
						to="/#projects"
						className="flex items-center gap-2 transition-colors hover:text-[var(--accent-default)]"
					>
						<ArrowLeft className="size-4" />
						Все проекты
					</Link>
					<div className="flex gap-3">
						<a
							href="https://letunoff.ru/onemate"
							target="_blank"
							rel="noopener noreferrer"
							className="flex items-center gap-1.5 rounded-lg px-3 py-1.5 transition-colors hover:bg-[var(--bg-secondary)] hover:text-[var(--accent-default)]"
						>
							<ExternalLink className="size-3.5" />
							Live Demo
						</a>
						<a
							href="https://github.com/defrazo/onemate"
							target="_blank"
							rel="noopener noreferrer"
							className="flex items-center gap-1.5 rounded-lg px-3 py-1.5 transition-colors hover:bg-[var(--bg-secondary)] hover:text-[var(--accent-default)]"
						>
							<Github className="size-3.5" />
							GitHub
						</a>
					</div>
				</div>
			</div>
			<div className="flex flex-col items-center gap-4 pt-4">{children}</div>
			<ScrollToTop />
		</div>
	);
};
