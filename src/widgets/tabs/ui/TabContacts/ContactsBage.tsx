import { JSX } from 'react';
import { Copy, Download } from 'lucide-react';

import { useCopy } from '@/shared/lib/hooks';
import { Button } from '@/shared/ui';

interface ContactsBageProps {
	icon: JSX.Element;
	title: string;
	href?: string;
	content: string;
}

export const ContactsBage = ({ icon, title, href, content }: ContactsBageProps) => {
	const copy = useCopy();

	const handleButton = () => {
		title !== 'vCard' ? copy(content, 'Данные скопированы!') : null;
	};

	return (
		<div className="group rounded-2xl border border-transparent bg-(--bg-accent) p-4 shadow-(--shadow) transition-colors hover:border-(--border-accent-op)">
			<div className="flex gap-3">
				<div className="text-(--color-secondary) transition-colors group-hover:text-(--color-accent)">
					{icon}
				</div>
				<div className="flex w-full flex-col">
					<span className="text-xs font-semibold tracking-wider text-(--color-secondary) uppercase">
						{title}
					</span>
					<div className="flex w-full items-end justify-between">
						<a
							className="transition-colors group-hover:text-(--color-accent)"
							href={href}
							rel="noopener noreferrer"
							target="_blank"
						>
							{content}
						</a>
						<Button
							className="rounded-xl px-3 py-1.5 text-xs opacity-70 hover:opacity-100"
							leftIcon={
								title !== 'vCard' ? <Copy className="size-3.5" /> : <Download className="size-3.5" />
							}
							size="custom"
							variant="ghost"
							onClick={handleButton}
						>
							{title !== 'vCard' ? 'Копировать' : 'Скачать'}
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
};
