import { ArrowLeft, ExternalLink, Github } from 'lucide-react';

import { useDeviceType } from '@/shared/lib/hooks';
import { Button, Link } from '@/shared/ui';

interface ProjectHeaderProps {
	linkDemo: string;
	linkGit: string;
}

export const ProjectHeader = ({ linkDemo, linkGit }: ProjectHeaderProps) => {
	const device = useDeviceType();

	return (
		<div className="border-b border-(--border-color) bg-(--bg-secondary)">
			<div className="mx-4 flex items-center justify-between py-2 text-center md:mx-12 md:py-4">
				<Link
					className="group py-2 pr-2 text-sm leading-tight md:text-base md:leading-normal"
					leftIcon={<ArrowLeft className="size-4 transition-transform group-hover:-translate-x-1" />}
					size="custom"
					to="/?tab=projects"
					variant="mobile"
				>
					Все проекты
				</Link>
				<div className="flex gap-4">
					<Button
						className="text-sm leading-tight md:text-base md:leading-normal"
						href={linkDemo}
						leftIcon={device !== 'mobile' && <ExternalLink className="size-4" />}
						rel="noopener noreferrer"
						target="_blank"
						variant="outline"
					>
						Live Demo
					</Button>
					<Button
						className="text-sm leading-tight md:text-base md:leading-normal"
						href={linkGit}
						leftIcon={device !== 'mobile' && <Github className="size-4" />}
						rel="noopener noreferrer"
						target="_blank"
						variant="outline"
					>
						GitHub
					</Button>
				</div>
			</div>
		</div>
	);
};
