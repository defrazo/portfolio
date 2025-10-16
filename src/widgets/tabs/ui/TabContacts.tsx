import { observer } from 'mobx-react-lite';

import { Map } from '@/shared/assets/images';
import { Button } from '@/shared/ui';
import { IconDesktop, IconEmail, IconTG } from '@/shared/assets/icons';
import { MapPinned } from 'lucide-react';

export const TabContacts = observer(() => {
	return (
		<div className="flex flex-col gap-6">
			<div>
				<h1 className="mb-2 text-3xl font-black">Карта</h1>
				<div className="core-border relative h-96 w-full overflow-hidden rounded-xl">
					<div className="animate-slowping pointer-events-none absolute top-1/2 left-1/2 z-10 size-5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-500 shadow-lg duration-300"></div>
					<a
						href="https://maps.app.goo.gl/cggH3W2nvyTNXhqj8"
						target="_blank"
						rel="noopener noreferrer"
						className="absolute inset-0"
					>
						<img src={Map} alt="Пионерский район" className="h-full w-full rounded-xl object-cover" />
					</a>
				</div>
			</div>
			<div>
				<h1 className="mb-2 text-3xl font-black">Контакты</h1>
				<div className="relative grid h-64 w-full grid-cols-3 grid-rows-3">
					<div className="col-span-3 flex items-center justify-center">
						<Button
							variant="rounded"
							className="z-10 border border-solid border-[var(--border-color)] bg-[#39393a]"
							centerIcon={<MapPinned className="size-10" />}
						/>
					</div>
					<div className="col-span-3 mb-3 flex items-center justify-center">
						<h3 className="w-xs text-center">
							Россия, Свердловская область,
							<br /> г. Екатеринбург
						</h3>
					</div>
					<div className="flex flex-col items-center justify-center gap-2">
						<Button
							variant="rounded"
							className="z-10 border border-solid border-[var(--border-color)] bg-[#39393a]"
							centerIcon={<IconEmail className="size-10" />}
						/>
						<a
							href="mailto:defrazo@yandex.ru"
							className="flex items-center justify-center hover:text-[var(--accent-default)]"
						>
							defazo@yandex.ru
						</a>
					</div>
					<div className="flex flex-col items-center justify-center gap-2">
						<Button
							variant="rounded"
							className="z-10 border border-solid border-[var(--border-color)] bg-[#39393a]"
							centerIcon={<IconTG className="size-10" />}
						/>
						<a
							href="https://t.me/defrazo"
							className="flex items-center justify-center hover:text-[var(--accent-default)]"
						>
							@defrazo
						</a>
					</div>
					<div className="flex flex-col items-center justify-center gap-2">
						<Button
							variant="rounded"
							className="z-10 border border-solid border-[var(--border-color)] bg-[#39393a]"
							centerIcon={<IconDesktop className="size-10" />}
						/>
						<a
							href="https://letunoff.ru"
							className="flex items-center justify-center hover:text-[var(--accent-default)]"
						>
							letunoff.ru
						</a>
					</div>
					<div className="core-border absolute my-10 h-[calc(100%-6rem)] w-full"></div>
				</div>
			</div>
		</div>
	);
});
