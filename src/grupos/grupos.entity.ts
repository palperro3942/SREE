import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Carreras } from '../carreras/carreras.entity';
import { GenericEntity } from 'src/generic/generic.entity';

@Entity()
export class Grupos extends GenericEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'int' })
  id_grupo: number;

  @Column({ type: 'int' })
  grupo: number;

  @Column({ type: 'varchar' })
  id_carrera: string;

  // Relación con la entidad Carreras
  @ManyToOne(() => Carreras, carrera => carrera.grupos)
  @JoinColumn({ name: 'id_carrera', referencedColumnName: 'id_carrera' })
  carrera: Carreras;
}
