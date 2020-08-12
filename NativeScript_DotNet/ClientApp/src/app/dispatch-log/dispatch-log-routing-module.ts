import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DispatchlogComponent } from './dispatchlog/dispatchlog.component';


const routes: Routes = [
  {
    path: 'dispatchlog',
    component: DispatchlogComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomersRoutingModule { }
