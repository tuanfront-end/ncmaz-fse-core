export interface EditProps<T> {
	attributes: T;
	setAttributes: (attrs: Partial<T>) => void;
	context: Record<string, any>;
}
