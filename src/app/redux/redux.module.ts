import { NgModule } from '@angular/core';
import { BalancePageAdapter } from '@redux/balance-page/balance-page.adapter';
import { ServicesModule } from '@services/services.module';

@NgModule({
  imports: [
    ServicesModule,
  ],
  providers: [
    BalancePageAdapter
]
})
export class ReduxModule {}
