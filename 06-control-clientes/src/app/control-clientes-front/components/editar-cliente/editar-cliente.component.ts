import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { ClientesService } from '@control-clientes/services/clientes.service';
import { map } from 'rxjs';

@Component({
  selector: 'app-editar-cliente',
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './editar-cliente.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EditarClienteComponent
{
  #fb = inject(FormBuilder);
  formUpdateClient: FormGroup = this.#fb.group({
    apellido: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    nombre: ['', [Validators.required, Validators.minLength(2)]],
    saldo: [0, [Validators.required, Validators.min(0)]],
  });

  #clientesService = inject(ClientesService);

  #route = inject(ActivatedRoute);

  #clientId: string = this.#route.snapshot.params['id'];

  _ = rxResource({
    params: () => ({ id: this.#clientId }),
    stream: ({ params }) =>
      this.#clientesService
        .getClientById(params.id)
        .pipe(map(cliente => this.formUpdateClient.patchValue(cliente ?? {}))),
  });

  #router = inject(Router);

  deleteClient()
  {
    if (confirm('¿Seguro que deseas eliminar el cliente?'))
    {
      this.#clientesService.deleteClient(this.#clientId);
      this.#router.navigate(['/']);
    }
  }

  updateClient()
  {
    if (this.formUpdateClient.invalid)
    {
      this.formUpdateClient.markAllAsTouched();
      return;
    }

    this.#clientesService.updateClient({
      id: this.#clientId,
      ...this.formUpdateClient.value,
    });

    this.#router.navigate(['/']);
  }
}
