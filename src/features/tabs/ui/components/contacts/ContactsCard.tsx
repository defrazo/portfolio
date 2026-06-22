import { Copy, Download } from 'lucide-react';

import { useCopy } from '@/shared/lib/hooks';
import { Button } from '@/shared/ui';

import type { ProfileCard } from '../../../model';

export const ContactsCard = ({ card }: { card: ProfileCard }) => {
	const { id, icon: Icon, title, href, content } = card;

	const copy = useCopy();
	const isVCard = id === 'vcard';

	const handleAction = (e?: React.MouseEvent<HTMLElement>) => {
		if (!isVCard) {
			copy(content, 'Данные скопированы!');
			return;
		}

		e?.preventDefault();

		if (!href) return;

		const link = document.createElement('a');
		link.href = href;
		link.download = href;
		link.download = 'Letunov.vcf';
		document.body.appendChild(link);
		link.click();
		document.body.removeChild(link);
	};

	return (
		<div className="group card-surface">
			<div className="flex gap-3">
				<div className="text-(--color-secondary) transition-colors group-hover:text-(--color-accent)">
					<Icon className="size-5" />
				</div>
				<div className="flex w-full flex-col">
					<span className="text-xs font-semibold tracking-wider text-(--color-secondary) uppercase">
						{title}
					</span>
					<div className="flex w-full flex-col justify-between gap-2 xl:flex-row xl:items-end">
						<a
							className="transition-colors group-hover:text-(--color-accent)"
							download={isVCard ? 'Letunov.vcf' : undefined}
							href={href}
							rel={isVCard ? undefined : 'noopener noreferrer'}
							target={isVCard ? undefined : '_blank'}
							onClick={isVCard ? handleAction : undefined}
						>
							{content}
						</a>
						<Button
							className="min-w-28 rounded-xl px-3 py-1.5 text-xs hover:text-(--accent-secondary-text) hover:opacity-100 hover:shadow-(--shadow)"
							leftIcon={isVCard ? <Download className="size-3.5" /> : <Copy className="size-3.5" />}
							size="custom"
							variant="ghost"
							onClick={handleAction}
						>
							{isVCard ? 'Скачать' : 'Копировать'}
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
};
