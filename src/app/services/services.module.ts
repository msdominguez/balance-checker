import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { AccountBalanceService } from '@services/account-balance.service';

@NgModule({
  imports: [CommonModule, HttpClientModule],
  providers: [AccountBalanceService]
})
export class ServicesModule {}
