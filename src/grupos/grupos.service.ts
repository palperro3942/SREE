import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { In, Repository } from 'typeorm';
import { Grupos } from './grupos.entity';
import { GenericService } from 'src/generic/generic.service';
import { EstrategiaEnsenanzaService } from 'src/estrategias_enseñanza/estrategias_enseñanza.service';

@Injectable()
export class GruposService extends GenericService<Grupos>{
  constructor(
    @InjectRepository(Grupos) private readonly gruposRepository: Repository<Grupos>,
    private readonly estrategiasEnsenanzaService:EstrategiaEnsenanzaService
  ) {
    super(gruposRepository);
  }
  
  async findByNumGrupo (numGrupo: number): Promise<Grupos>{
    return this.gruposRepository.findOne( { where: { grupo: numGrupo }, relations: ['cuestionario'] });
  }

  async findByGrupoIds(ids: number[]): Promise<Grupos[]> {
    return this.gruposRepository.find({ where: { id_grupo: In(ids) } });
  }

  async asignarEstrategias(grupoId: number, estrategiasIds: number[]): Promise<Grupos> {
    const grupo = await this.gruposRepository.findOne({ where: { grupo: grupoId } }); // Usar findOne con un objeto de opciones
  
    if (!grupo) {
      throw new Error(`Grupo con ID ${grupoId} no encontrado`);
    }
  
    // Obtener las estrategias de enseñanza a partir de los IDs proporcionados
    const estrategiasAsignadas = await this.estrategiasEnsenanzaService.find({ where: { id: In(estrategiasIds) } });
  
    // Asignar las estrategias al grupo
    grupo.ee1 = estrategiasAsignadas.find(estrategia => estrategia.id === grupo.ee1.id);
    grupo.ee2 = estrategiasAsignadas.find(estrategia => estrategia.id === grupo.ee2.id);
    grupo.ee3 = estrategiasAsignadas.find(estrategia => estrategia.id === grupo.ee3.id);
    grupo.ee4 = estrategiasAsignadas.find(estrategia => estrategia.id === grupo.ee4.id);
  
    // Guardar el grupo actualizado en la base de datos
    await this.gruposRepository.save(grupo);
  
    return grupo;
  }
}