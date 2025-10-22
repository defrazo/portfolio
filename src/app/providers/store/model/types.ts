import type { ThemeStore } from '@/features/theme-switcher';
import type { ModalStore, NotifyStore } from '@/shared/stores';
import type { TabsStore } from '@/widgets/tabs';

export interface CoreStores {
	readonly notifyStore: NotifyStore;
	readonly modalStore: ModalStore;
	readonly themeStore: ThemeStore;
	readonly tabsStore: TabsStore;
}
