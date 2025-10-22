import { useStore } from '@/app/providers';
import avatar0 from '@/shared/assets/images/avatar0.webp';
import { cn } from '@/shared/lib/utils';
import { ImageViewer, Thumbnail } from '@/shared/ui';

interface UserAvatarProps {
	onClick?: () => void;
	className?: string;
}

const UserAvatar = ({ className }: UserAvatarProps) => {
	const { modalStore } = useStore();
	return (
		<Thumbnail
			alt="Евгений Летунов"
			className={cn('size-full', className)}
			src={avatar0}
			onClick={() => modalStore.setModal(<ImageViewer src={avatar0} />)}
		/>
	);
};

export default UserAvatar;
