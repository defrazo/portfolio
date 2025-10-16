import { usePageTitle } from '@/shared/lib/hooks';

import TabContainer from '@/widgets/tabs';

const MainPage = () => {
	usePageTitle('Главная');

	return (
		<div className="grid flex-1 gap-4">
			<TabContainer />
		</div>
	);
};

export default MainPage;
