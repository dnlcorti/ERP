import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Payment {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  clientId: number;

  @Column()
  productId: number;

  @Column('decimal')
  amount: number;

  @Column('date')
  payDate: string;

  @Column({ nullable: true })
  note?: string;
}
