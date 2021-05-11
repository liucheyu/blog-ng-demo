import { MarkdownComponent } from './main/markdown/markdown.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PghomeComponent } from './pghome/pghome.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';

const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full"},
  { path: 'home', component: HomeComponent  },
  { path: 'markdown', component: MarkdownComponent },
  { path: 'pghome/:pg', component: PghomeComponent},
  { path: 'hello', component: HelloWorldComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }