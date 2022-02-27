import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { BalanceComponent } from '@components/balance/balance.component';
import { CardComponent } from '@components/card/card.component';
import { BalancePageComponent } from '@pages/balance-page/balance-page.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    BrowserModule,
  ],
  declarations: [CardComponent, BalancePageComponent, BalanceComponent]
})
export class ComponentsModule {}
