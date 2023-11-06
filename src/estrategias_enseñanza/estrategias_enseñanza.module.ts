import { Global, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EstrategiaEnsenanza } from './estrategias_enseñanza.entity';
import { EstrategiaEnsenanzaController } from './estrategias_enseñanza.controller';
import { EstrategiaEnsenanzaService } from './estrategias_enseñanza.service';

@Global()
@Module({
  imports: [TypeOrmModule.forFeature([EstrategiaEnsenanza])],
  controllers: [EstrategiaEnsenanzaController],
  providers: [EstrategiaEnsenanzaService],
  exports: [EstrategiaEnsenanzaService],
})
export class EstrategiaEnsenanzaModule {}