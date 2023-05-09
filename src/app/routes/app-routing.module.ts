import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageExampleComponent } from '../pages/page-example/page-example.component';
import { InitialPageExampleComponent } from '../pages/initial-page-example/initial-page-example.component';

const routes: Routes = [
  {
    path: '', component: InitialPageExampleComponent
  },
  {
    path: 'teste-de-rota', component: PageExampleComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
