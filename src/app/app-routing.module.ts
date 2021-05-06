import { MarkdownComponent } from './main/markdown/markdown.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  // { path: "", redirectTo: "home", pathMatch: "full"},
  // {
  //   path: 'home', component: HomeComponent, children: [
      
  //   ]
  // },
  { path: 'markdown', component: MarkdownComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }