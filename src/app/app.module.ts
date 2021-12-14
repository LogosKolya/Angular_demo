import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderComponent } from './components/header/header.component';
import { UnderHeaderComponent } from './components/under-header/under-header.component';

import { HomeComponent } from './pages/home/home.component';
import { CenzorComponent } from './pages/cenzor/cenzor.component';
import { UsersComponent } from './pages/users/users.component';
import { TaskComponent } from './pages/task/task.component';
import { TableComponent } from './pages/task/table/table.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UnderHeaderComponent,
    HomeComponent,
    CenzorComponent,
    UsersComponent,
    TaskComponent,
    TableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
