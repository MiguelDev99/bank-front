import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Customer } from 'src/app/domain/customer';
import { DocumentType } from 'src/app/domain/document-type';
import { CustomerService } from 'src/app/service/customer.service';
import { DocumentTypeService } from 'src/app/service/document-type.service';

@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.css'],
})
export class CustomerEditComponent implements OnInit {
  custId!: number;
  customer!: Customer;
  documentTypes!: DocumentType[];

  showMsg: boolean = true;
  messages: string[] = [''];

  constructor(
    private activatedRoute: ActivatedRoute,
    public customerService: CustomerService,
    public documentTypeService: DocumentTypeService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params) => {
      this.custId = parseInt(params.get('custId')!, 10);
      this.customerService.findById(this.custId).subscribe((data) => {
        this.customer = data;
        console.table(this.customer);
      });
    });

    this.findAllDocumentType();
  }

  findAllDocumentType(): void {
    this.documentTypeService.findAll().subscribe((data: DocumentType[]) => {
      this.documentTypes = data;
    });
  }

  update():void{
    this.customerService.update(this.customer).subscribe({
      next: (ok) => {
        this.showMsg = true;
        this.messages[0] = 'El customer se modifico con exito';
      },
      error: (error) => {
        this.showMsg = true;
        this.messages = error.error;
      },
    });
  }

  delete():void{
    this.customerService.delete(this.customer.custId).subscribe({
      next: (ok) => {
        this.showMsg = true;
        this.messages[0] = 'El customer se borro con exito';
      },
      error: (error) => {
        this.showMsg = true;
        this.messages = error.error;
      },
    });
  }
}
