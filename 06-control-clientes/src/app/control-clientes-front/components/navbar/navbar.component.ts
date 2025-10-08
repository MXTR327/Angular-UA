import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { LoginService } from '@control-clientes/services/login.service';
import { map } from 'rxjs';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarComponent
{
  #loginService = inject(LoginService);
  isLoggedIn = toSignal(
    this.#loginService.getAuthState().pipe(map(user => !!user)),
    { initialValue: false }
  );

  loggedInUser = toSignal(
    this.#loginService.getAuthState().pipe(map(user => user?.email ?? '')),
    { initialValue: '' }
  );

  #router = inject(Router);

  logout()
  {
    this.#loginService.logout();
    this.#router.navigate(['/login']);
  }
}
