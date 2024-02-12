import {
	Entity,
	JoinTable,
	ManyToMany,
} from "typeorm";
import { Product as MedusaProduct } from "@medusajs/medusa";
import { Attribute } from "./attribute";
import { AttributeValue } from "./attribute-value";
import { IntAttributeValue } from "./int-attribute-value";

@Entity()
export class Product extends MedusaProduct {
	@ManyToMany(() => Attribute)
	@JoinTable()
	attributes: Attribute[];

	@ManyToMany(() => AttributeValue)
	@JoinTable()
	attribute_values: AttributeValue[];

	@ManyToMany(() => IntAttributeValue, {
		cascade: true,
		onDelete: "CASCADE",
	})
	@JoinTable({
		name: "int_attribute_values_products_product",
	})
	int_attribute_values: IntAttributeValue[];
}
