import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { StateOrder } from 'src/app/shared/enums/state-order.enum';
import { Order } from 'src/app/shared/models/order.model';

@Component({
  selector: 'app-form-add-order',
  templateUrl: './form-add-order.component.html',
  styleUrls: ['./form-add-order.component.scss']
})
export class FormAddOrderComponent implements OnInit {

  @Input() order = new Order();
  @Output() clicked: EventEmitter<Order> = new EventEmitter();

  public states = Object.values(StateOrder);
  public form: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.createFormulaire();
  }

  public onSubmit(): void {
    this.clicked.emit(this.form.value);
  }

  createFormulaire(): void {
    this.form = this.formBuilder.group({
      tjmHT: [this.order.tjmHT],
      typePresta: [this.order.typePresta, Validators.required],
      client: [
        this.order.client,
        Validators.compose([
          Validators.required,
          Validators.minLength(5)
        ])
      ],
      nbJours: [this.order.nbJours],
      tva: [this.order.tva],
      comment: [this.order.comment],
      date: [this.order.date],
      state: [this.order.state]
    })
  }

}
