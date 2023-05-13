import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { GenericEntity } from 'src/generic/generic.entity';

@Entity()
export class PerfilFinalInventarioDeFelder extends GenericEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'number' })
  nro_cuenta: number;

  @Column({ type: 'number' })
  grupo: number;

  @Column({ type: 'varchar' })
  activo_reflexivo: string;

  @Column({ type: 'varchar' })
  sensorial_intuitivo: string;

  @Column({ type: 'varchar' })
  visual_verbal: string;

  @Column({ type: 'varchar' })
  secuencial_global: string;
}
