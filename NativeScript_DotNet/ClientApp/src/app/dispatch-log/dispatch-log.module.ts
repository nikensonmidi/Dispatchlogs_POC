import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DispatchlogComponent } from './dispatchlog/dispatchlog.component';
import { CustomersRoutingModule } from './dispatch-log-routing-module';

@NgModule({
  imports: [
    CommonModule,
    CustomersRoutingModule
  ],
  declarations: [DispatchlogComponent]
})
export class DispatchLogModule { }
