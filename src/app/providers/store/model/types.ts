import type { ThemeStore } from '@/features/theme-switcher';
import type { ModalStore, NotifyStore, TabsStore } from '@/shared/stores';

export interface CoreStores {
	readonly notifyStore: NotifyStore;
	readonly modalStore: ModalStore;
	readonly themeStore: ThemeStore;
	readonly tabsStore: TabsStore;
}
