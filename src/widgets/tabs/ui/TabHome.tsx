import { Download, Printer } from 'lucide-react';

import { Button } from '@/shared/ui';

import { SOCIAL_BUTTONS } from '../model';

const SocialButtons = SOCIAL_BUTTONS.map(({ id, icon: Icon, href }) => (
	<Button
		key={id}
		centerIcon={<Icon className="size-5 md:size-7" />}
		className="rounded-full p-4 shadow-(--shadow)"
		href={href}
		rel="noopener noreferrer"
		target="_blank"
		variant="outline"
	/>
));

export const TabHome = () => {
	const handleDownload = () => {
		const link = document.createElement('a');
		link.href = '/resume.jpg';
		link.download = 'Letunov E.D. Resume.jpg';
		link.click();
	};

	const handlePrint = () => {
		const pdfUrl = '/resume.pdf';
		const iframe = document.createElement('iframe');
		iframe.style.display = 'none';
		iframe.src = pdfUrl;
		iframe.onload = () => iframe.contentWindow?.print();
		document.body.appendChild(iframe);
	};

	return (
		<>
			<div className="flex min-h-[80svh] flex-1 flex-col items-center justify-center gap-4 select-none md:min-h-0">
				<h1 className="text-4xl font-semibold tracking-widest md:text-5xl md:tracking-[0.2em] xl:text-6xl">
					L E T U N O V
				</h1>
				<h2 className="text-xl text-(--color-tertiary) md:text-2xl xl:text-3xl">Frontend Developer</h2>
				<div className="h-1 w-32 animate-pulse rounded-full bg-linear-to-r from-(--accent-secondary-hover) to-(--accent-secondary)" />
				<div className="flex gap-4 md:gap-4 xl:gap-6">{SocialButtons}</div>
			</div>
			<div className="flex justify-between">
				<Button
					className="shadow-(--shadow)"
					leftIcon={<Download className="size-8" />}
					variant="outline"
					onClick={handleDownload}
				>
					Скачать резюме
				</Button>
				<Button
					className="shadow-(--shadow)"
					leftIcon={<Printer className="size-8" />}
					variant="outline"
					onClick={handlePrint}
				>
					Распечатать резюме
				</Button>
			</div>
		</>
	);
};
