import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryComponent } from './category/category.component';
import { CategorydetailsComponent } from './category/categorydetails/categorydetails.component';
import { DashboradComponent } from './dashborad/dashborad.component';
import { LocationbranchesComponent } from './locationbranches/locationbranches.component';

const routes: Routes = [
  {
    path: 'dashboard', component: DashboradComponent
  },
  {
    path: 'locations', component:LocationbranchesComponent
  },
  {
    path: 'category', component: CategoryComponent
  },
  {
    path: 'subcategory',component:CategorydetailsComponent
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
