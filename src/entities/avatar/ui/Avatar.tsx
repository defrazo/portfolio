import { observer } from 'mobx-react-lite';

import { cn } from '@/shared/lib/utils';
import { Thumbnail } from '@/shared/ui';
import avatar0 from '@/shared/assets/images/avatar0.webp';

interface UserAvatarProps {
	className?: string;
}

const UserAvatar = ({ className }: UserAvatarProps) => {
	return <Thumbnail alt="Евгений Летунов" className={cn('size-full', className)} src={avatar0} />;
};

export default observer(UserAvatar);
