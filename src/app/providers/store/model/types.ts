import type { ModalStore } from '@/features/modal';
import type { NotifyStore } from '@/features/notification';
import type { TabsStore } from '@/features/tabs';
import type { ThemeStore } from '@/features/theme-switcher';

export interface CoreStores {
	readonly notifyStore: NotifyStore;
	readonly modalStore: ModalStore;
	readonly themeStore: ThemeStore;
	readonly tabsStore: TabsStore;
}
