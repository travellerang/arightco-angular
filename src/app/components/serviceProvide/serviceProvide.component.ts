import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-serviceProvide',
  templateUrl: './serviceProvide.component.html',
  styleUrls: ['./serviceProvide.component.css']
})
export class ServicesProvideComponent implements OnInit {

  modalRef: BsModalRef;
  constructor(private modalService: BsModalService) { }

  ngOnInit(): void {
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

}
