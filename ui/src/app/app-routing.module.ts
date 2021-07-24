import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CategoryComponent } from './category/category.component';
import { DashboradComponent } from './dashborad/dashborad.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: 'dashboard', component: DashboradComponent
  },
  {
    path: 'category' , component: CategoryComponent
  },
 {
    path: '**', redirectTo: 'dashboard', pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
