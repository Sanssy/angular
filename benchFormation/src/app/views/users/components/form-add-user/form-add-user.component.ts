import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { StateUser } from 'src/app/shared/enums/state-user.enum';
import { User } from 'src/app/shared/models/user';

@Component({
  selector: 'app-form-add-user',
  templateUrl: './form-add-user.component.html',
  styleUrls: ['./form-add-user.component.scss']
})
export class FormAddUserComponent implements OnInit {

  @Input() user: User = new User();
  @Output() clicked: EventEmitter<User> = new EventEmitter();

  public roles = Object.values(StateUser);
  public form: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.createFormulaire();
  }

  createFormulaire(): void {
    this.form = this.fb.group({
      username: [this.user.username],
      password: [this.user.password],
      role: [this.user.role]
    })
  }

  onSubmit(){
    this.clicked.emit(this.form.value);
  }

}
