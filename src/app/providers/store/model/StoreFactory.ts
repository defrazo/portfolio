import { ThemeStore } from '@/features/theme-switcher';
import { ModalStore, NotifyStore } from '@/shared/stores';
import { TabsStore } from '@/widgets/tabs';

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
