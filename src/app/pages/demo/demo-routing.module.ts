import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DemoComponent} from "@app/pages/demo/demo.component";

const routes: Routes = [
  {
    path:"",
    component: DemoComponent,
    children:[
      {
        path:"controller",
        loadChildren: () => import("./pages/controller/controller.module").then(m => m.ControllerModule)
      },
      {
        path: "shared",
        loadChildren: () => import("./pages/shared/shared.module").then(m => m.SharedModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DemoRoutingModule { }
