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
    this.http.get(this.assetsMdJsonPath).subscribe((res: string[]) => {
      for(let sub in res) {
        this.titles.push();
      }
      
      console.log(this.titles);
    });
  }

}
