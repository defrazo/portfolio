import { ModalStore } from '@/features/modal';
import { NotifyStore } from '@/features/notification';
import { TabsStore } from '@/features/tabs';
import { ThemeStore } from '@/features/theme-switcher';

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
