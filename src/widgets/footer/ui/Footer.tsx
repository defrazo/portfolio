const Footer = () => {
	return (
		<footer className="pt-2 text-center text-xs text-(--color-secondary) opacity-50 transition-colors duration-500 ease-in-out select-none hover:text-(--color-accent) md:-mt-1.5 md:pt-0 md:pb-0 md:text-base">
			© {new Date().getFullYear()} Designed & Developed by Evgeniy Letunov
		</footer>
	);
};

export default Footer;
