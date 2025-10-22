import type { ReactNode } from 'react';
import { ArrowLeft, ExternalLink, Github } from 'lucide-react';

import { usePageTitle } from '@/shared/lib/hooks';
import { Button, Link, ScrollToTop } from '@/shared/ui';

interface ProjectPageLayoutProps {
	children: ReactNode;
	linkDemo: string;
	linkGH: string;
	title: string;
	next: string;
	previous: string;
}

export const ProjectPageLayout = ({ children, title, linkDemo, linkGH, next, previous }: ProjectPageLayoutProps) => {
	usePageTitle(title);

	return (
		<div className="core-base core-border hide-scrollbar relative mx-auto my-12 flex flex-1 cursor-default flex-col gap-4 overflow-auto rounded-xl p-12 shadow-(--shadow) select-none xl:max-w-6xl">
			<div className="absolute top-0 left-0 z-10 w-full border-b border-(--border-color) bg-(--bg-secondary)">
				<div className="mx-12 flex items-center justify-between py-4">
					<Link
						className="group flex items-center gap-2 py-2 pr-2 transition-colors hover:text-(--accent-default)"
						leftIcon={<ArrowLeft className="size-4 transition-transform group-hover:-translate-x-1" />}
						size="custom"
						to="/?tab=projects"
						variant="mobile"
					>
						Все проекты
					</Link>
					<div className="flex gap-4">
						<Button
							className="hover:drop-shadow-[0_0_5px_rgba(255,255,255,0.3) flex items-center rounded-xl border border-solid border-(--accent-default) px-3 py-1.5 text-(--accent-default) transition-colors duration-300 hover:border-(--accent-hover) hover:bg-(--accent-hover) hover:text-(--accent-text)"
							leftIcon={<ExternalLink className="size-4" />}
							variant="custom"
						>
							<a href={linkDemo} rel="noopener noreferrer" target="_blank">
								Live Demo
							</a>
						</Button>
						<Button
							className="hover:drop-shadow-[0_0_5px_rgba(255,255,255,0.3) flex items-center rounded-xl border border-solid border-(--accent-default) px-3 py-1.5 text-(--accent-default) transition-colors duration-300 hover:border-(--accent-hover) hover:bg-(--accent-hover) hover:text-(--accent-text)"
							leftIcon={<Github className="size-4" />}
							variant="custom"
						>
							<a href={linkGH} rel="noopener noreferrer" target="_blank">
								GitHub
							</a>
						</Button>
					</div>
				</div>
			</div>
			<div className="flex flex-col items-center gap-4 pt-4">{children}</div>
			<div className="absolute bottom-0 left-0 z-10 w-full border-t border-(--border-color) bg-(--bg-secondary)">
				<div className="mx-12 flex items-center justify-between py-4">
					<Link
						className="group flex items-center gap-2 py-2 pr-2 transition-colors hover:text-(--accent-default)"
						leftIcon={<ArrowLeft className="size-4 transition-transform group-hover:-translate-x-1" />}
						size="custom"
						to={`/project/${previous}`}
						variant="mobile"
					>
						Предыдущий проект
					</Link>
					<Link
						className="group flex items-center gap-2 py-2 pl-2 transition-colors hover:text-(--accent-default)"
						rightIcon={
							<ArrowLeft className="size-4 rotate-180 transition-transform group-hover:translate-x-1" />
						}
						size="custom"
						to={`/project/${next}`}
						variant="mobile"
					>
						Следующий проект
					</Link>
				</div>
			</div>
			<ScrollToTop />
		</div>
	);
};
