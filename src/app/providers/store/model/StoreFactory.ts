import { ThemeStore } from '@/features/theme-switcher';
import { ModalStore, NotifyStore } from '@/shared/stores';

import { CoreStores } from '.';
import { TabsStore } from '@/widgets/tabs';

export class StoreFactory {
	static createCore(): CoreStores {
		const notifyStore = new NotifyStore();
		const modalStore = new ModalStore();
		const tabsStore = new TabsStore();
		const themeStore = new ThemeStore();

		return { notifyStore, modalStore, tabsStore, themeStore };
	}
}
