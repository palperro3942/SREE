import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseSetUp } from './setup/setup.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AlumnosModule } from './alumnos/alumnos.module';
import { AlumnosService } from './alumnos/alumnos.service';
import { CarrerasModule } from './carreras/carreras.module';
import { CuestionariosService } from './cuestionarios/cuestionarios.service';
import { CuestionariosModule } from './cuestionarios/cuestionarios.module';
import { GruposController } from './grupos/grupos.controller';
import { GruposService } from './grupos/grupos.service';
import { GruposModule } from './grupos/grupos.module';
import { GruposAsignadosModule } from './grupos_asignados/grupos_asignados.module';
import { GenericController } from './generic/generic.controller';
import { GenericService } from './generic/generic.service';
import { InventarioDeFelderService } from './inventario_de_felder/inventario_de_felder.service';
import { InventarioDeFelderController } from './inventario_de_felder/inventario_de_felder.controller';
import { InventarioDeFelderModule } from './inventario_de_felder/inventario_de_felder.module';
import { PerfilFinalInventarioDeFelderModule } from './perfil_final_inventario_de_felder/perfil_final_inventario_de_felder.module';
import { PreguntasController } from './preguntas/preguntas.controller';
import { PreguntasService } from './preguntas/preguntas.service';
import { PreguntasModule } from './preguntas/preguntas.module';
import { CarrerasController } from './carreras/carreras.controller';
import { AlumnosController } from './alumnos/alumnos.controller';
import { CuestionariosController } from './cuestionarios/cuestionarios.controller';
import { GruposAsignadosController } from './grupos_asignados/grupos_asignados.controller';
import { PerfilFinalInventarioDeFelderController } from './perfil_final_inventario_de_felder/perfil_final_inventario_de_felder.controller';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useClass: DatabaseSetUp
    }),
    AlumnosModule,
    CarrerasModule,
    CuestionariosModule,
    GruposModule,
    GruposAsignadosModule,
    InventarioDeFelderModule,
    PerfilFinalInventarioDeFelderModule,
    PreguntasModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
