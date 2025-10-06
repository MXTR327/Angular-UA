import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { LoginService } from '@core/services/login.service';

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

  #loginService = inject(LoginService);

  login()
  {
    if (this.formLogin.invalid) return;

    this.#loginService.login(
      this.formLogin.value.email,
      this.formLogin.value.password
    );
  }
}
