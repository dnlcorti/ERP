import { Controller, Get, UseGuards } from '@nestjs/common';
import { ReportsService } from './reports.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('reports')
@UseGuards(JwtAuthGuard)
export class ReportsController {
  constructor(private service: ReportsService) {}

  @Get('premiums')
  premiums() {
    return this.service.totalPremiumsByMonth();
  }
}
