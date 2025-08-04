import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Payment } from '../payments/payment.entity';

@Injectable()
export class ReportsService {
  constructor(@InjectRepository(Payment) private payments: Repository<Payment>) {}

  totalPremiumsByMonth() {
    return this.payments.query(
      "SELECT DATE_FORMAT(payDate,'%Y-%m') as month, SUM(amount) as total FROM payment GROUP BY month"
    );
  }
}
