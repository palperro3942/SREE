import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { In, Repository } from 'typeorm';
import { Grupos } from './grupos.entity';
import { GenericService } from 'src/generic/generic.service';
import { EstrategiaEnsenanzaService } from 'src/estrategias_enseñanza/estrategias_enseñanza.service';
import { PerfilFinalInventarioDeFelder } from 'src/perfil_final_inventario_de_felder/perfil_final_inventario_de_felder.entity';

@Injectable()
export class GruposService extends GenericService<Grupos>{
  constructor(
    @InjectRepository(Grupos) private readonly gruposRepository: Repository<Grupos>,
    @InjectRepository(PerfilFinalInventarioDeFelder) private readonly perfilFinalRepository: Repository<PerfilFinalInventarioDeFelder>,
    private readonly estrategiasEnsenanzaService: EstrategiaEnsenanzaService
  ) {
    super(gruposRepository);
  }

  async findByNumGrupo(numGrupo: number): Promise<Grupos> {
    return this.gruposRepository.findOne({ where: { grupo: numGrupo }, relations: ['cuestionario'] });
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

  // Se reemplazaron los conteos en memoria por conteos de adeveras en database
  // Explicacion (no hay solo estamos trabajando con el perfilFinal)
  // Calcular y actualizar el conteo de estrategias para un grupo específico
  async calcularYActualizarConteoEstrategias(numGrupo: number): Promise<void> {
    const perfiles = await this.perfilFinalRepository.find({ where: { grupo: numGrupo } });

    // Inicializar el conteo de estrategias para el grupo
    const conteoEstrategias: { [key: string]: number } = { ce1: 0, ce2: 0, ce3: 0, ce4: 0, ce5: 0, ce6: 0, ce7: 0, ce8: 0 };

    // Calcular el conteo para cada perfil de alumno
    perfiles.forEach((perfil) => {
      if (perfil.ee1 && perfil.ee1.id === 1) conteoEstrategias.ce1++;
      if (perfil.ee1 && perfil.ee1.id === 2) conteoEstrategias.ce2++;
      if (perfil.ee2 && perfil.ee2.id === 3) conteoEstrategias.ce3++;
      if (perfil.ee2 && perfil.ee2.id === 4) conteoEstrategias.ce4++;
      if (perfil.ee3 && perfil.ee3.id === 5) conteoEstrategias.ce5++;
      if (perfil.ee3 && perfil.ee3.id === 6) conteoEstrategias.ce6++;
      if (perfil.ee4 && perfil.ee4.id === 7) conteoEstrategias.ce7++;
      if (perfil.ee4 && perfil.ee4.id === 8) conteoEstrategias.ce8++;
    });

    // Actualizar el conteo de estrategias en la tabla Grupos
    await this.gruposRepository.update({ grupo: numGrupo }, conteoEstrategias);
  }

  async obtenerConteoAlumnosPorEstrategia(numGrupo: number) {
    const grupo = await this.gruposRepository.findOne({ where: { grupo: numGrupo } });
    if (!grupo) {
      throw new Error('Grupo no encontrado');
    }

    // Crear un objeto con las columnas de conteo requeridas
    const conteoEstrategias = {
      ce1: grupo.ce1,
      ce2: grupo.ce2,
      ce3: grupo.ce3,
      ce4: grupo.ce4,
      ce5: grupo.ce5,
      ce6: grupo.ce6,
      ce7: grupo.ce7,
      ce8: grupo.ce8,
    };

    return conteoEstrategias;
  }
  // Hecho con ❤️ y ChatGPT https://github.com/palperro3942
}