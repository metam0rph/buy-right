import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrl: './test.component.scss'
})
export class TestComponent implements OnInit {
   
   s: any;
   ngOnInit(): void {
    let a=1,b=2;
    let buyShare = new Promise((resolve,reject)=> {
      if(a===b)resolve("laptop bought") 
      else reject("lptop not bought")});
    buyShare.then(res =>this.s = res).catch(res => this.s = res);

   }
  
}
