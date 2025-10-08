import { CurrencyPipe } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  inject,
  signal,
  viewChild,
} from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { RouterLink } from '@angular/router';
import { ClientesService } from '@control-clientes/services/clientes.service';

@Component({
  selector: 'app-clientes',
  imports: [CurrencyPipe, RouterLink, ReactiveFormsModule],
  templateUrl: './clientes.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ClientesComponent
{
  btnCloseEl = viewChild<ElementRef<HTMLButtonElement>>('btnCloseRef');

  clientesService = inject(ClientesService);

  #fb = inject(FormBuilder);
  formCliente: FormGroup = this.#fb.group({
    apellido: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    nombre: ['', [Validators.required, Validators.minLength(2)]],
    saldo: [0, [Validators.required, Validators.min(0)]],
  });

  isModalVisible = signal<boolean>(false);

  agregarCliente()
  {
    if (this.formCliente.invalid)
    {
      this.formCliente.markAllAsTouched();
      return;
    }

    this.clientesService.createClient(this.formCliente.value);

    this.formCliente.reset();
    this.#cerrarModal();
  }

  getSaldoTotal(): number
  {
    return (
      this.clientesService
        .clientes()
        ?.reduce((total, cliente) => total + (cliente.saldo ?? 0), 0) ?? 0
    );
  }

  #cerrarModal = () => this.btnCloseEl()?.nativeElement.click();
}
