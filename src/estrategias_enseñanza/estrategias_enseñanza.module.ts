import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EstrategiaEnsenanza } from './estrategias_enseñanza.entity';
import { EstrategiaEnsenanzaController } from './estrategias_enseñanza.controller';
import { EstrategiaEnsenanzaService } from './estrategias_enseñanza.service';

@Module({
  imports: [TypeOrmModule.forFeature([EstrategiaEnsenanza])],
  controllers: [EstrategiaEnsenanzaController],
  providers: [EstrategiaEnsenanzaService],
})
export class EstrategiaEnsenanzaModule {}

