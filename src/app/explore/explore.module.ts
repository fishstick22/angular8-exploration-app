import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,
         ReactiveFormsModule } from '@angular/forms';

import { NgSelectModule      } from '@ng-select/ng-select';

import { ExploreRoutingModule } from './explore-routing.module';
import { ExploreComponent } from './explore.component';


@NgModule({
  declarations: [ExploreComponent],
  imports: [
    CommonModule,
    FormsModule, ReactiveFormsModule,
    NgSelectModule,
    ExploreRoutingModule
  ]
})
export class ExploreModule { }
