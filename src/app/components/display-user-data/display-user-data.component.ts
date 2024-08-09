
import { Component, OnInit } from '@angular/core';
import {DisplayUserDataService} from './../../services/display-user-data.service';
// import { TableModule } from 'primeng/table';

import { TableModule } from 'primeng/table';
@Component({
  selector: 'app-display-user-data',
  standalone: true,
  imports: [TableModule],
  templateUrl: './display-user-data.component.html',
  styleUrl: './display-user-data.component.css'
})
 export class DisplayUserDataComponent implements OnInit{

  constructor(private fetchData:DisplayUserDataService){}
  ngOnInit(){
    this.fetchData.getAll().subscribe((
      response:any)=>{
        console.log(response)
        this.datas=response;
      }
    )

  }
  datas:any;
  delete(id:any){
   if(confirm("Are you sure?")){
     
    this.fetchData.delete(id).subscribe((
      response:any)=>{
        console.log(response)
        console.log("Deleted Sucessfully" + id);
        window.location.reload();
      }
    )
   }
  }
}

