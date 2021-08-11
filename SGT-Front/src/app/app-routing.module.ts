import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/components/home/home.component';
import { ResponsavelReadComponent } from './views/components/responsavel/responsavel-read/responsavel-read.component';

const routes: Routes = [
  {
    path:'',
    component: HomeComponent
  },
  {
    path: 'responsaveis',
    component: ResponsavelReadComponent

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
