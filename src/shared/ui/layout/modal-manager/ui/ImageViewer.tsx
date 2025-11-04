import { observer } from 'mobx-react-lite';

import { useStore } from '@/app/providers';

import { useEscapeClose } from '../model';

interface ImageViewerProps {
	src: string;
	alt?: string;
}

export const ImageViewer = observer(({ src, alt }: ImageViewerProps) => {
	const { modalStore } = useStore();
	useEscapeClose(() => modalStore.closeModal());

	return (
		<div
			className="fixed inset-0 z-1000 flex items-center justify-center bg-black/70"
			onClick={() => modalStore.closeModal()}
		>
			<img
				alt={alt ?? 'modal image'}
				className="max-h-[90vh] max-w-[90vw] object-contain"
				decoding="async"
				loading="lazy"
				src={src}
				onClick={(e) => e.stopPropagation()}
			/>
		</div>
	);
});
