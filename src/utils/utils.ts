export function createAttributesType<
	T extends Record<string, { type: string }>,
>(attributes: T): { [K in keyof T]: string } {
	return Object.keys(attributes).reduce(
		(acc, key) => {
			acc[key as keyof T] = "string";
			return acc;
		},
		{} as { [K in keyof T]: string },
	);
}
