import { ArrowLeft, ExternalLink, Github } from 'lucide-react';

import { Button, Link } from '@/shared/ui';

interface ProjectHeaderProps {
	linkDemo: string;
	linkGit: string;
}

export const ProjectHeader = ({ linkDemo, linkGit }: ProjectHeaderProps) => {
	return (
		<div className="border-b border-(--border-color) bg-(--bg-secondary)">
			<div className="mx-12 flex items-center justify-between py-4">
				<Link
					className="group py-2 pr-2"
					leftIcon={<ArrowLeft className="size-4 transition-transform group-hover:-translate-x-1" />}
					size="custom"
					to="/?tab=projects"
					variant="mobile"
				>
					Все проекты
				</Link>
				<div className="flex gap-4">
					<Button leftIcon={<ExternalLink className="size-4" />} variant="outline">
						<a href={linkDemo} rel="noopener noreferrer" target="_blank">
							Live Demo
						</a>
					</Button>
					<Button leftIcon={<Github className="size-4" />} variant="outline">
						<a href={linkGit} rel="noopener noreferrer" target="_blank">
							GitHub
						</a>
					</Button>
				</div>
			</div>
		</div>
	);
};
