import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { UserComponent } from './Components/header-components/user/user.component';
import { HomeComponent } from './Components/home/home.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: "login", component: UserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
