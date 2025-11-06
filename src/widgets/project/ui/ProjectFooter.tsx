import { ArrowLeft, ArrowRight } from 'lucide-react';

import { Link } from '@/shared/ui';

export const ProjectFooter = ({ previous, next }: { previous: string; next: string }) => {
	const handleScrollTop = () => window.scrollTo({ top: 0, behavior: 'instant' });

	return (
		<div className="border-t border-(--border-color) bg-(--bg-secondary) lg:mt-4">
			<div className="mx-4 flex items-center justify-between py-2 lg:mx-12 lg:py-4">
				<Link
					className="group py-2 text-center text-xs md:text-base lg:pl-2"
					leftIcon={<ArrowLeft className="size-4 transition-transform group-hover:-translate-x-1" />}
					size="custom"
					to={`/project/${previous}`}
					variant="mobile"
					onClick={handleScrollTop}
				>
					Предыдущий проект
				</Link>
				<Link
					className="group py-2 text-center text-xs md:text-base lg:pr-2"
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
