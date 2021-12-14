import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { CenzorComponent } from './pages/cenzor/cenzor.component';
import { UsersComponent } from './pages/users/users.component';
import { TaskComponent } from './pages/task/task.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'works/cenzor', component: CenzorComponent },
  { path: 'works/users', component: UsersComponent },
  { path: 'works/task', component: TaskComponent },
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'cenzor', pathMatch: 'full', redirectTo: 'works/cenzor' },
  { path: 'users', pathMatch: 'full', redirectTo: 'works/users' },
  { path: 'task', pathMatch: 'full', redirectTo: 'works/task' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
