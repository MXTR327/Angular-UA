import {
  ChangeDetectionStrategy,
  Component,
  inject,
  signal,
} from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '@control-clientes/services/login.service';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent
{
  #loginService = inject(LoginService);

  _ = this.#loginService.getAuthState().subscribe(user =>
  {
    if (user) this.#router.navigate(['/']); 
  });

  #fb = inject(FormBuilder);

  formLogin: FormGroup = this.#fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
  });

  mensaje = signal<null | string>(null);

  #router = inject(Router);

  login()
  {
    if (this.formLogin.invalid)
    {
      this.formLogin.markAllAsTouched();
      this.mensaje.set('Por favor, ingrese email y password validos');
      return;
    }

    this.#loginService
      .login(this.formLogin.value.email, this.formLogin.value.password)
      .then(() =>
      {
        this.#router.navigate(['/']);
      })
      .catch(error =>
      {
        this.mensaje.set(`Ocurrio un error: ${error}`);
      });
  }
}
