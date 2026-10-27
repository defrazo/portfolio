const Footer = () => {
	return (
		<footer className="flex h-8 items-end justify-center text-center text-xs text-(--color-secondary) opacity-50 transition-colors duration-500 ease-in-out select-none hover:text-(--color-accent) md:text-base">
			© {new Date().getFullYear()} Designed & Developed by Evgeniy Letunov
		</footer>
	);
};

export default Footer;
