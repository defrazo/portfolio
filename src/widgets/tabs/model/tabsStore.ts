import { makeAutoObservable } from 'mobx';

import type { TabId } from '.';

export class TabsStore {
	tab: TabId = 'contacts';

	setTab(id: TabId): void {
		this.tab = id;
	}

	constructor() {
		makeAutoObservable(this);
	}
}
