import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateTableCharacter1689219224742 implements MigrationInterface {
    name = 'CreateTableCharacter1689219224742'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`characters\` (\`id\` varchar(36) NOT NULL, \`name\` varchar(255) NOT NULL, \`description\` longtext NOT NULL, \`image\` text NOT NULL, \`gender\` varchar(150) NOT NULL, \`status\` varchar(100) NOT NULL, \`profession\` varchar(255) NOT NULL, \`createdAt\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE \`characters\``);
    }

}
