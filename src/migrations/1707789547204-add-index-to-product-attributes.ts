import {
	MigrationInterface,
	QueryRunner,
} from "typeorm";

export class AddIndexToProductAttributes1707789547204
	implements MigrationInterface
{
	public async up(
		queryRunner: QueryRunner
	): Promise<void> {
		await queryRunner.query(`
      CREATE INDEX "IDX_product_attributes_attribute_productId" ON "product_attributes_attribute" ("productId")
    `);
		await queryRunner.query(`
      CREATE INDEX "IDX_product_attributes_attribute_attributeId" ON "product_attributes_attribute" ("attributeId")
    `);
	}

	public async down(
		queryRunner: QueryRunner
	): Promise<void> {
		await queryRunner.query(`
            DROP INDEX "IDX_product_attributes_attribute_productId";
        `);
		await queryRunner.query(`
            DROP INDEX "IDX_product_attributes_attribute_attributeId";
        `);
	}
}
