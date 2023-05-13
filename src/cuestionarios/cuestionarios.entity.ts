import { GenericEntity } from 'src/generic/generic.entity';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Cuestionarios extends GenericEntity{
  @PrimaryGeneratedColumn()
  id: number;

  @Column({type: 'number'})
  id_cuestionario: number;

  @Column({ type: 'number' })
  id_profesor: number;

  @Column({ type: 'varchar' })
  nombre: string;

  @Column({ type: 'varchar' })
  descripcion: string;
}