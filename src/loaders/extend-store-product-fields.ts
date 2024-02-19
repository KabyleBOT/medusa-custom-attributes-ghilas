export default async function () {
	const imports = (await import(
		"@medusajs/medusa/dist/api/routes/store/products/index"
	)) as any;
	imports.allowedStoreProductsRelations =
		[
			...imports.allowedStoreProductsRelations,
			"attribute_values",
			"attributes",
			"attribute_values.attribute",
			"attributes.values",
			"int_attribute_values",
			"int_attribute_values.attribute",
			"attributes.int_values",
			"attributes.categories",
		];
	imports.defaultStoreProductsRelations =
		[
			...imports.defaultStoreProductsRelations,
			// "attribute_values",
			// "attributes",
			// "attribute_values.attribute",
			// "attributes.values",
			// "int_attribute_values",
			// "int_attribute_values.attribute",
			// "attributes.int_values",
		];
}
