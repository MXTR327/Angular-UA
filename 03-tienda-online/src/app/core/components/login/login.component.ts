import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, FormsModule],
  templateUrl: './login.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent
{
  #fb = inject(FormBuilder);
  formLogin: FormGroup = this.#fb.group({
    email: [
      '',
      [
        Validators.required,
        Validators.pattern(
          String.raw`^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$`
        ),
      ],
    ],
    password: ['', [Validators.required]],
  });

  login()
  {
    if (this.formLogin.invalid) return;

    console.log(this.formLogin.value);
  }
}
