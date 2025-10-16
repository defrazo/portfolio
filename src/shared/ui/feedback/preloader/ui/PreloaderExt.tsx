export const PreloaderExt = () => {
	return (
		<div className="flex min-h-svh flex-1 flex-col items-center justify-center gap-2">
			<div className="loader" />
			<span className="animate-pulse text-xl font-medium">Загрузка</span>
		</div>
	);
};
