export interface EditProps<T> {
	attributes: T & {
		style?: Record<string, any>;
	};
	setAttributes: (attrs: Partial<T>) => void;
	context: Record<string, any>;
	clientId: string;
	[key: string]: any;
}

// declare wp window object declare global
declare global {
	interface Window {
		wp: Record<string, any>;
	}
}

// Trong một file TypeScript trong dự án của bạn (ví dụ: declarations.d.ts)
declare module "@wordpress/block-editor" {
	export function getSpacingPresetCssVar(spacingPreset: string): string;
	export function __experimentalColorGradientSettingsDropdown(): void;
	export function __experimentalUseMultipleOriginColorsAndGradients(): void;
}
