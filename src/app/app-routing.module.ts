import { MarkdownComponent } from './main/markdown/markdown.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // { path: "", redirectTo: "home", pathMatch: "full"},
  // { path: 'home', component: HomeComponent },
  { path: 'markdown', component: MarkdownComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }