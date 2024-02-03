import {
  Column,
  CreateDateColumn,
  Entity,
  Generated,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('characters')
export class Character {
  @PrimaryColumn()
  @Generated('uuid')
  id: string;

  @Column({ type: 'varchar', length: 255 })
  name: string;

  @Column({ type: 'longtext' })
  description: string;

  @Column({ type: 'text' })
  image: string;

  @Column({ type: 'varchar', length: 150 })
  gender: string;

  @Column({ type: 'varchar', length: 100 })
  status: string;

  @Column({ type: 'varchar', length: 255 })
  profession: string;

  @CreateDateColumn({ type: 'timestamp' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updatedAt: Date;
}
