import type { ReactNode } from 'react';

export type ModalType = 'modal' | 'none';

export type ModalConfig = {
	content: ReactNode;
	type: ModalType;
	onClose?: () => void;
};
