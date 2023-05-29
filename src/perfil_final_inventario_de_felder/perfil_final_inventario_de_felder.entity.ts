import { Entity, Column, PrimaryGeneratedColumn, Index, ManyToOne, JoinColumn } from 'typeorm';
import { GenericEntity } from 'src/generic/generic.entity';
import { Profesor } from 'src/profesor/profesor.entity';
import { EstrategiaEnsenanza } from 'src/estrategias_enseñanza/estrategias_enseñanza.entity';

@Entity()
export class PerfilFinalInventarioDeFelder extends GenericEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'int' })
  nro_cuenta: number;

  @Index()
  @Column({ type: 'int' })
  grupo: number;

  @Column({ type: 'varchar' })
  activo_reflexivo: string;

  @Column({ type: 'varchar' })
  sensorial_intuitivo: string;

  @Column({ type: 'varchar' })
  visual_verbal: string;

  @Column({ type: 'varchar' })
  secuencial_global: string;

  @ManyToOne(() => EstrategiaEnsenanza, { eager: true })
  @JoinColumn({ name: 'EE1', referencedColumnName: 'id' })
  EE1: Partial<EstrategiaEnsenanza>; // Utilizamos Partial para indicar que solo necesitamos algunos campos de la entidad

  @ManyToOne(() => EstrategiaEnsenanza, { eager: true })
  @JoinColumn({ name: 'EE2', referencedColumnName: 'id' })
  EE2: Partial<EstrategiaEnsenanza>;

  @ManyToOne(() => EstrategiaEnsenanza, { eager: true })
  @JoinColumn({ name: 'EE3', referencedColumnName: 'id' })
  EE3: Partial<EstrategiaEnsenanza>;

  @ManyToOne(() => EstrategiaEnsenanza, { eager: true })
  @JoinColumn({ name: 'EE4', referencedColumnName: 'id' })
  EE4: Partial<EstrategiaEnsenanza>;

  @ManyToOne(() => Profesor, profesor => profesor.perfilesFinales)
  //@JoinColumn({ name: 'grupo', referencedColumnName: 'grupo' })
  profesor: Profesor;
}
