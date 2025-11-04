import { ArrowLeft, ArrowRight } from 'lucide-react';

import { Link } from '@/shared/ui';

interface ProjectFooterProps {
	previous: string;
	next: string;
}

export const ProjectFooter = ({ previous, next }: ProjectFooterProps) => {
	const handleScrollTop = () => window.scrollTo({ top: 0, behavior: 'instant' });

	return (
		<div className="border-t border-(--border-color) bg-(--bg-secondary) md:mt-4">
			<div className="mx-4 flex items-center justify-between py-2 md:mx-12 md:py-4">
				<Link
					className="group py-2 text-center text-xs md:pl-2 md:text-base"
					leftIcon={<ArrowLeft className="size-4 transition-transform group-hover:-translate-x-1" />}
					size="custom"
					to={`/project/${previous}`}
					variant="mobile"
					onClick={handleScrollTop}
				>
					Предыдущий проект
				</Link>
				<Link
					className="group py-2 text-center text-xs md:pr-2 md:text-base"
					rightIcon={<ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />}
					size="custom"
					to={`/project/${next}`}
					variant="mobile"
					onClick={handleScrollTop}
				>
					Следующий проект
				</Link>
			</div>
		</div>
	);
};
