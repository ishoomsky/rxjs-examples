import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { OperatorsComponent } from "./operators.component";

const routes: Routes = [{
  path: 'operators',
  component: OperatorsComponent
}]

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  declarations: [OperatorsComponent],
  exports: [OperatorsComponent],
})
export class OperatorsModule {}
