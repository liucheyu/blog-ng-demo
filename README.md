# blog-ng-demo

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
1.
~~~bash
npm install bootstrap --save
~~~

2.
開啟angular.json
~~~
"styles": [
              "node_modules/bootstrap/dist/css/bootstrap.min.css",
              "src/styles.css"
          ]
~~~

