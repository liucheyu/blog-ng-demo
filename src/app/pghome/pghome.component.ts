import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-pghome',
  templateUrl: './pghome.component.html',
  styleUrls: ['./pghome.component.css']
})
export class PghomeComponent implements OnInit {

  assetsMdPath = "assets/md/";
  assetsMdJsonPath = "";
  pg = "";
  titles = new Array<string>();
  contents = new Array<string>();

  constructor(
    private router: ActivatedRoute,
    private http: HttpClient
  ) {
    router.params.subscribe(params => {
      this.pg = params.pg;
      this.assetsMdJsonPath = this.assetsMdPath + this.pg + "/md.json";
    });
  }

  ngOnInit(): void {
    this.http.get(this.assetsMdJsonPath).subscribe((res: MdModel[]) => {
      res.forEach( (value, index) => {
        this.titles.push(value.titleName);
        this.contents.push(this.assetsMdPath+ this.pg + "/" + value.fileName + ".md");
      });
      
      console.log(this.contents);
    });
  }

}

class MdModel {
  constructor(public titleName:string, public fileName:string){}
}
