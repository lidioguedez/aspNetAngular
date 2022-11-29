import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import * as path from "path";

const routes: Routes = [
  {
    path:"",
    children:[{
      path: "demo",
      loadChildren: () => import("./pages/demo/demo.module").then(m => m.DemoModule)
    }]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
