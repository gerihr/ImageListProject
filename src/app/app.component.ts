import { Component, OnInit } from '@angular/core';
import dataArray from './dataList.json'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{
  title = 'project';
  image:any;
  searchText:string = '';
  isOpened:boolean=false;
  activeIndex:number = 0;
  array = dataArray;


  setImage(selectedImage:any){
    this.isOpened=true;
    this.image=selectedImage;
  }

  deleteTab(index:number){
      this.array.splice(index,1);
      this.activeIndex=this.array.length-1;
  }

}
