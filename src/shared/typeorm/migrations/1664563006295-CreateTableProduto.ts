import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class CreateTableProduto1664563006295 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'produto',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()',
          },
          {
            name: 'title',
            type: 'varchar',
          },
          {
            name: 'zipcode',
            type: 'int',
          },
          {
            name: 'cost',
            type: 'int',
          },
          {
            name: 'dobe',
            type: 'boolean',
          },
          {
            name: 'deadline',
            type: 'timestamp',
          },
          {
            name: 'username',
            type: 'varchar',
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'now()',
          },
          {
            name: 'updated_at',
            type: 'timestamp',
            default: 'now()',
          },
        ]
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('produto');
  }
}
