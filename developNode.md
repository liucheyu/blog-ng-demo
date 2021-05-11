
初始化git指令

~~~bash
#若專案本身已有.git，不須額外創建
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/liucheyu/blog-ng-demo.git
git push -u origin main
~~~

使用套件部屬至github,會在github上生成gh-page分支,並在github操作setting -> pages 做設定

~~~bash
sudo npm i -g angular-cli-ghpages
ng build --prod --base-href=/blog-ng-demo/
npx ngh --dir=dist/github-page-demo --no-silent
~~~

引入bootstrap

1. install boostrap

~~~bash
npm install bootstrap --save
~~~

2. 開啟angular.json

~~~
"styles": [
              "node_modules/bootstrap/dist/css/bootstrap.min.css",
              "src/styles.css"
          ]
~~~

使用route

1. 引入route module

~~~bash
ng generate module app-routing --flat --module=app
~~~

2. 修改app-routing.module.ts

~~~typescript
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full"},
  { path: 'home', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
~~~


安裝angular material

1.安裝

~~~bash
#npm install --save @angular/material @angular/cdk
#選用
#npm install --save @angular/animations
#選用
#npm install --save hammerjs
ng add @angular/material
~~~

2.在styles.css引入css

~~~
@import "~@angular/material/prebuilt-themes/indigo-pink.css";
~~~

3.在index.html引入google icon

~~~html
<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
~~~ 

---

### 頁面規劃

首頁顯示框架和各各語言的List
點擊List中的項目可以導到該語言的目錄

   
