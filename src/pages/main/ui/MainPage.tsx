import { usePageTitle } from '@/shared/lib/hooks';
import Footer from '@/widgets/footer';
import TabContainer from '@/widgets/tabs';

const MainPage = () => {
	usePageTitle('Главная');

	return (
		<div className="relative flex flex-1 flex-col gap-4">
			<TabContainer />
			<Footer />
		</div>
	);
};

export default MainPage;
