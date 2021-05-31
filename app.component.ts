import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PopUpEditComponent } from './pop-up-edit/pop-up-edit.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'EditTableUseCase';
  dtOptions: DataTables.Settings = {};
  members: any[]= 
  [
    {
      name: 'Nitesh',
      location: 'Jewar',
      age: 20,
      id: 1
    },
    {
      name: 'Nitesh1',
      location: 'Jewar',
      age: 22,
      id: 2
    },
    {
      name: 'Nitesh2',
      location: 'Jewar',
      age: 24,
      id: 3
    }
  ];
   
  Id: string ="";
  constructor(private modalService: NgbModal) { }
   
  ngOnInit(): void {  }

  onRowClick(member:any)
  {
    console.log(member)
    const ref = this.modalService.open(PopUpEditComponent);
    ref.componentInstance.name = member.name;

    ref.result.then((yes) => {
      console.log("Yes");
    },
    (cancel)=> {
      console.log("No");
    })
  }

  

}
