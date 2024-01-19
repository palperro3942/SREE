import { Controller, Get, Param } from '@nestjs/common';
import { GenericController } from 'src/generic/generic.controller';
import { EstrategiaEnsenanza } from './estrategias_enseñanza.entity';
import { EstrategiaEnsenanzaService } from './estrategias_enseñanza.service';

@Controller('estrategias-ensenanza')
export class EstrategiaEnsenanzaController extends GenericController<EstrategiaEnsenanza,EstrategiaEnsenanzaService> {
  constructor(private readonly estrategiaEnsenanzaService: EstrategiaEnsenanzaService) {
    super(estrategiaEnsenanzaService);
  }

  @Get('make/:nroCuenta')
  async generarEstrategia(@Param('nroCuenta') nroCuenta: number) {
    try {
      return this.estrategiaEnsenanzaService.generarEstrategia(nroCuenta)
    } catch (error) {
      console.error(error);
    }
  }
}

