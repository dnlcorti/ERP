import { MigrationInterface, QueryRunner } from 'typeorm';

export class Init1700000000000 implements MigrationInterface {
  name = 'Init1700000000000';

  async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`CREATE TABLE user (id int PRIMARY KEY AUTO_INCREMENT, email varchar(255) UNIQUE NOT NULL, passwordHash varchar(255) NOT NULL, role varchar(255) NOT NULL, createdAt datetime NOT NULL DEFAULT CURRENT_TIMESTAMP)`);
    await queryRunner.query(`CREATE TABLE client (id int PRIMARY KEY AUTO_INCREMENT, firstName varchar(255) NOT NULL, lastName varchar(255) NOT NULL, taxCode varchar(255) UNIQUE NOT NULL, phone varchar(255) NOT NULL, email varchar(255) NOT NULL)`);
    await queryRunner.query(`CREATE TABLE product (id int PRIMARY KEY AUTO_INCREMENT, name varchar(255) NOT NULL, description text NOT NULL, premium decimal NOT NULL, category varchar(255) NOT NULL)`);
    await queryRunner.query(`CREATE TABLE payment (id int PRIMARY KEY AUTO_INCREMENT, clientId int NOT NULL, productId int NOT NULL, amount decimal NOT NULL, payDate date NOT NULL, note varchar(255), CONSTRAINT FK_client FOREIGN KEY (clientId) REFERENCES client(id), CONSTRAINT FK_product FOREIGN KEY (productId) REFERENCES product(id))`);
  }

  async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE payment`);
    await queryRunner.query(`DROP TABLE product`);
    await queryRunner.query(`DROP TABLE client`);
    await queryRunner.query(`DROP TABLE user`);
  }
}
