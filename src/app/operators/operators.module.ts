import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { OperatorsComponent } from "./operators.component";
import { OfOperatorComponent } from './of-operator/of-operator.component';
import { AjaxOperatorComponent } from './ajax-operator/ajax-operator.component';

const routes: Routes = [
  {
    path: 'operators',
    component: OperatorsComponent,
    children: [
      {
        path: 'of',
        component: OfOperatorComponent
      }
    ]
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  declarations: [OperatorsComponent, OfOperatorComponent, AjaxOperatorComponent],
  exports: [OperatorsComponent],
})
export class OperatorsModule {}
