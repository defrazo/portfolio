import { ArrowLeft, ArrowRight } from 'lucide-react';

import { Link } from '@/shared/ui';

interface ProjectFooterProps {
	previous: string;
	next: string;
}

export const ProjectFooter = ({ previous, next }: ProjectFooterProps) => {
	return (
		<div className="mt-4 border-t border-(--border-color) bg-(--bg-secondary)">
			<div className="mx-12 flex items-center justify-between py-4">
				<Link
					className="group py-2 pr-2"
					leftIcon={<ArrowLeft className="size-4 transition-transform group-hover:-translate-x-1" />}
					size="custom"
					to={`/project/${previous}`}
					variant="mobile"
				>
					Предыдущий проект
				</Link>
				<Link
					className="group py-2 pr-2"
					rightIcon={<ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />}
					size="custom"
					to={`/project/${next}`}
					variant="mobile"
				>
					Следующий проект
				</Link>
			</div>
		</div>
	);
};
