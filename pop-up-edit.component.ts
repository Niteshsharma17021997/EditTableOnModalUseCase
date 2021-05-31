import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-pop-up-edit',
  templateUrl: './pop-up-edit.component.html',
  styleUrls: ['./pop-up-edit.component.css']
})
export class PopUpEditComponent implements OnInit {

  name : string = "";
  constructor(public modal: NgbActiveModal) { }

  ngOnInit(): void {
  }

}
