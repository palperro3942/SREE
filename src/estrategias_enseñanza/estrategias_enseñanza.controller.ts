import { Controller } from '@nestjs/common';
import { GenericController } from 'src/generic/generic.controller';
import { EstrategiaEnsenanza } from './estrategias_enseñanza.entity';
import { EstrategiaEnsenanzaService } from './estrategias_enseñanza.service';

@Controller('estrategias-ensenanza')
export class EstrategiaEnsenanzaController extends GenericController<EstrategiaEnsenanza,EstrategiaEnsenanzaService> {
  constructor(private readonly estrategiaEnsenanzaService: EstrategiaEnsenanzaService) {
    super(estrategiaEnsenanzaService);
  }
}

