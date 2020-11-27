import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerRoutingModule } from './customer.routing';
import { CustomerComponent } from './customer.component';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  declarations: [CustomerComponent],
  imports: [
    CommonModule,
    CustomerRoutingModule,
    SharedModule,
  ]
})
export class CustomerModule { }
