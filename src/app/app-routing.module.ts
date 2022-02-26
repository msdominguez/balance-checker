import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BalancePageComponent } from '@pages/balance-page/balance-page.component';


const routes: Routes = [
  {
    path: '',
    component: BalancePageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
