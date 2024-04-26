import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/domain/customer';
import { CustomerService } from 'src/app/service/customer.service';
import { DocumentTypeService } from 'src/app/service/document-type.service';
import { DocumentType } from 'src/app/domain/document-type';

@Component({
  selector: 'app-customer-save',
  templateUrl: './customer-save.component.html',
  styleUrls: ['./customer-save.component.css'],
})
export class CustomerSaveComponent implements OnInit {
  customer!: Customer;
  documentTypes!: DocumentType[];

  showMsg: boolean = true;
  messages: string[] = [''];

  constructor(
    public customerService: CustomerService,
    public documentTypeService: DocumentTypeService
  ) {}

  ngOnInit(): void {
    this.customer = {
      address: '',
      custId: 0,
      dotyId: 0,
      email: '',
      enable: '',
      name: '',
      phone: '',
      token: '',
    };
    this.findAllDocumentType();
  }

  findAllDocumentType(): void {
    this.documentTypeService.findAll().subscribe((data: DocumentType[]) => {
      this.documentTypes = data;
    });
  }

  save(): void {
    this.customerService.save(this.customer).subscribe({
      next: (ok) => {
        this.showMsg = true;
        this.messages[0] = 'El customer se grabo con exito';
      },
      error: (error) => {
        this.showMsg = true;
        this.messages = error.error;
      },
    });
  }
}
