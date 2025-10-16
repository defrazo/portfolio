import { useEffect, useState } from 'react';
import { observer } from 'mobx-react-lite';

import App from '@/app';
import { PreloaderExt } from '@/shared/ui';

import StoreProvider, { useStore } from '../store';

const AppInitializer = observer(() => {
	const { themeStore } = useStore();
	const [isLoading, setIsLoading] = useState<boolean>(true);

	useEffect(() => {
		themeStore.setTheme(themeStore.theme);
		const preload = setTimeout(() => setIsLoading(false), 1000);
		return () => clearTimeout(preload);
	}, []);

	return isLoading ? <PreloaderExt /> : <App />;
});

const StartupProvider = () => {
	return (
		<StoreProvider>
			<AppInitializer />
		</StoreProvider>
	);
};

export default StartupProvider;
