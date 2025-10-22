interface ImportMetaEnv {
	readonly MODE: string;
	readonly BASE_URL: string;
	readonly PROD: boolean;
	readonly DEV: boolean;
}

interface ImportMeta {
	readonly env: ImportMetaEnv;
	readonly hot?: {
		readonly data: Record<string, unknown>;
		accept: (cb?: () => void) => void;
		dispose: (cb: (data: Record<string, unknown>) => void) => void;
	};
}
