import { useState } from 'react';
import { useSwipeable } from 'react-swipeable';
import { Menu } from 'lucide-react';

import ThemeSwitcher from '@/features/theme-switcher';
import { useBodyScrollLock } from '@/shared/lib/hooks';
import { cn } from '@/shared/lib/utils';
import { Button } from '@/shared/ui';

import { TabsNav, UserCard } from '.';

export const MobileSidebar = () => {
	const [open, setOpen] = useState<boolean>(false);
	const handlers = useSwipeable({ onSwipedLeft: () => setOpen(false), delta: 50, trackTouch: true });

	useBodyScrollLock(open);

	return (
		<>
			<Button
				centerIcon={<Menu className="size-6" />}
				className="absolute top-0 right-0 z-50 rounded-2xl rounded-tl-none rounded-br-none bg-(--bg-secondary) p-2 shadow-md lg:hidden"
				variant="custom"
				onClick={() => setOpen(true)}
			/>
			<div
				className={cn(
					'fixed inset-0 z-40 bg-(--bg-overlay) transition-opacity duration-300',
					open ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
				)}
				onClick={() => setOpen(false)}
			/>
			<div
				{...handlers}
				className={cn(
					'fixed top-0 left-0 z-50 mb-20 h-full w-64 transform overflow-y-auto bg-radial py-4 shadow-lg transition-transform duration-300',
					open ? 'translate-x-0' : '-translate-x-full'
				)}
			>
				<div className="relative flex h-full flex-col justify-between gap-4 px-4">
					<UserCard />
					<TabsNav onTabClick={() => setOpen(false)} />
					<ThemeSwitcher />
				</div>
			</div>
		</>
	);
};
