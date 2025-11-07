import { useDeviceType } from '@/shared/lib/hooks';
import Footer from '@/widgets/footer';
import { MobileSidebar } from '@/widgets/sidebar';
import TabContainer from '@/widgets/tabs';

const MainPage = () => {
	const device = useDeviceType();

	return (
		<div className="relative flex flex-1 flex-col gap-4">
			{device === 'mobile' && <MobileSidebar />}
			<TabContainer />
			<Footer />
		</div>
	);
};

export default MainPage;
