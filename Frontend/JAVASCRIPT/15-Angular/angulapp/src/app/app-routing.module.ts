import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JokesPageComponent } from './pages/jokes-page/jokes-page.component';
import { UserPageComponent } from './pages/user-page/user-page.component';

const routes: Routes = [
  { path: '', redirectTo: 'jokes', pathMatch: 'full' },
  { path: 'jokes', component: JokesPageComponent },
  { path: 'user-generator', component: UserPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
