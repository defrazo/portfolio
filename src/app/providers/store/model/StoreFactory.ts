import { ThemeStore } from '@/features/theme-switcher';
import { ModalStore, NotifyStore, TabsStore } from '@/shared/stores';

import { CoreStores } from '.';

export class StoreFactory {
	static createCore(): CoreStores {
		const notifyStore = new NotifyStore();
		const modalStore = new ModalStore();
		const tabsStore = new TabsStore();
		const themeStore = new ThemeStore();

		return { notifyStore, modalStore, tabsStore, themeStore };
	}
}
