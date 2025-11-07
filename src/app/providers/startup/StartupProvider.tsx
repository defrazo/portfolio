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
		const preload = setTimeout(() => setIsLoading(false), 3500);
		return () => clearTimeout(preload);
	}, []);

	return (
		<div className="relative">
			{isLoading && <PreloaderExt />}
			<div className={`transition-opacity duration-700 ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
				<App />
			</div>
		</div>
	);
});

const StartupProvider = () => {
	return (
		<StoreProvider>
			<AppInitializer />
		</StoreProvider>
	);
};

export default StartupProvider;
