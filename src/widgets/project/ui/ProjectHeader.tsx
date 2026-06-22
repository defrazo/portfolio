import { useNavigate } from 'react-router-dom';
import { ArrowLeft, ExternalLink } from 'lucide-react';

import { useStore } from '@/app/providers';
import { IconGit } from '@/shared/assets/icons';
import { useDeviceType } from '@/shared/lib/hooks';
import { Button } from '@/shared/ui';

export const ProjectHeader = ({ linkDemo, linkGit }: { linkDemo: string; linkGit: string }) => {
	const navigate = useNavigate();

	const device = useDeviceType();

	const { tabsStore } = useStore();

	const handleReturn = () => {
		navigate('/?tab=projects');
		tabsStore.setTab('projects');
	};

	return (
		<div className="border-b border-(--border-color) bg-(--bg-secondary)">
			<div className="mx-4 flex items-center justify-between py-2 text-center lg:mx-12 lg:py-4">
				<Button
					className="group py-2 pr-2 text-xs leading-tight md:text-base lg:leading-normal"
					leftIcon={<ArrowLeft className="size-4 transition-transform group-hover:-translate-x-1" />}
					size="custom"
					variant="mobile"
					onClick={() => handleReturn()}
				>
					Все проекты
				</Button>
				<div className="flex gap-4">
					<Button
						className="text-xs leading-tight shadow-(--shadow) md:text-base lg:leading-normal"
						href={linkDemo}
						leftIcon={device !== 'mobile' && <ExternalLink className="size-4" />}
						rel="noopener noreferrer"
						target="_blank"
						variant="outline"
					>
						{device !== 'mobile' ? 'Перейти на сайт' : 'Открыть сайт'}
					</Button>
					<Button
						className="text-xs leading-tight shadow-(--shadow) md:text-base lg:leading-normal"
						href={linkGit}
						leftIcon={device !== 'mobile' && <IconGit className="size-4" />}
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
