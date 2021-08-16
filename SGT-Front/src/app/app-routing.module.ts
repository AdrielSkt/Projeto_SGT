import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/components/home/home.component';
import { ResponsavelCreateComponent } from './views/components/responsavel/responsavel-create/responsavel-create.component';
import { ResponsavelReadComponent } from './views/components/responsavel/responsavel-read/responsavel-read.component';
import { TarefasCreateComponent } from './views/components/tarefas/tarefas-create/tarefas-create.component';
import { TarefasReadComponent } from './views/components/tarefas/tarefas-read/tarefas-read.component';

const routes: Routes = [
  {
    path:'',
    component: HomeComponent
  },
  {
    path: 'responsaveis',
    component: ResponsavelReadComponent

  },
  {
    path: 'responsaveis/create',
    component: ResponsavelCreateComponent
  },
  {
    path: 'tarefas',
    component: TarefasReadComponent
  },
  {
    path: 'tarefas/create',
    component: TarefasCreateComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
