import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Grupos } from './grupos.entity';
import { GruposController } from './grupos.controller';
import { GruposService } from './grupos.service';
import { EstrategiaEnsenanzaModule } from 'src/estrategias_enseñanza/estrategias_enseñanza.module';

@Module({
  imports: [EstrategiaEnsenanzaModule, TypeOrmModule.forFeature([Grupos])],
  controllers: [GruposController],
  providers: [GruposService],
})
export class GruposModule {}