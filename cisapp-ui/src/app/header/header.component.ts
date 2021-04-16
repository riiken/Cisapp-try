import { Component, OnInit } from '@angular/core';
import { MatDialog } from "@angular/material";
import { DialogComponent } from '../dialog/dialog.component';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public dialog:MatDialog) { }

  ngOnInit() {
  }

  pop(){
      this.dialog.open(DialogComponent,{
        width:'500px',
        height:'500px'
      });
      
  }

}
