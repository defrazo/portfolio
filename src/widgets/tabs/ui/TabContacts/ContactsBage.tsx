import { Copy, Download, type LucideIcon } from 'lucide-react';

import { useCopy } from '@/shared/lib/hooks';
import { Button } from '@/shared/ui';

interface ContactsBageProps {
	icon: LucideIcon;
	title: string;
	href?: string;
	content: string;
}

export const ContactsBage = ({ icon: Icon, title, href, content }: ContactsBageProps) => {
	const copy = useCopy();
	const isVCard = title === 'vCard';

	const handleButton = () => {
		if (!isVCard) {
			copy(content, 'Данные скопированы!');
		}
		// vCard: здесь будет логика скачивания
	};

	return (
		<div className="group rounded-2xl border border-(--accent-primary-hover) bg-(--bg-accent) p-3 shadow-(--shadow) transition-colors hover:border-(--accent-primary-hover) md:border-transparent md:p-4">
			<div className="flex gap-3">
				<div className="text-(--color-secondary) transition-colors group-hover:text-(--color-accent)">
					<Icon className="size-5" />
				</div>
				<div className="flex w-full flex-col">
					<span className="text-xs font-semibold tracking-wider text-(--color-secondary) uppercase">
						{title}
					</span>
					<div className="flex w-full flex-col justify-between gap-2 md:flex-row md:items-end">
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
							leftIcon={isVCard ? <Download className="size-3.5" /> : <Copy className="size-3.5" />}
							size="custom"
							variant="ghost"
							onClick={handleButton}
						>
							{isVCard ? 'Скачать' : 'Копировать'}
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
};
