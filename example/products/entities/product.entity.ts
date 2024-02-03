import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('products')
export class Product {
  @PrimaryColumn() id: number;

  @Column({ type: 'varchar', length: 250 }) name: string;

  @Column({ type: 'text' }) description: string;

  @Column({ type: 'float' }) price: number;

  @Column({ type: 'int' }) stock: number;

  @Column({ type: 'varchar' }) image: string;

  @Column({ type: 'boolean' }) publish: boolean;
}
