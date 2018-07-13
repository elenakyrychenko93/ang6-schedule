import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Hero } from '../data';

@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.css']
})
export class AddFormComponent implements OnInit {
  heroes = Hero;
  buttonText;
  formIsOpened = false;
  openText = 'Open form';
  closeText = 'Close form';
  myFirstReactiveForm: FormGroup;
  formData;

  // @Output() onAdd = new EventEmitter<any>();

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.initForm();
    this.buttonText = this.openText;
  }

  toggleForm() {
    this.formIsOpened = !this.formIsOpened;
    this.formIsOpened ? this.buttonText = this.closeText : this.buttonText = this.openText;
  }

  onSubmit() {
    const controls = this.myFirstReactiveForm.controls;
    if (this.myFirstReactiveForm.invalid) {
      Object.keys(controls)
        .forEach(controlName => controls[controlName].markAsTouched());

      return;
    }

    /** TODO: Обработка данных формы */
    this.formData = this.myFirstReactiveForm.value;
    console.log(this.formData);
    this.heroes.addAction(this.formData);
    // this.onAdd.emit(this.formData);
  }

  isControlInvalid(controlName: string): boolean {
    const control = this.myFirstReactiveForm.controls[controlName];
    const result = control.invalid && control.touched;
    return result;
  }

  private initForm() {
    this.myFirstReactiveForm = this.fb.group({
      startTime: ['', [
      Validators.required
      ]],
      endTime: ['', [
        Validators.required
      ]],
      description: ['', [
        Validators.required
      ]],
    });
  }

}
