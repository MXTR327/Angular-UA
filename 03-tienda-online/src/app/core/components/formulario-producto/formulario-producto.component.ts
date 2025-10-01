import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from '@core/services/products.service';
import { map, tap } from 'rxjs';

@Component({
  selector: 'app-formulario-producto',
  imports: [ReactiveFormsModule],
  templateUrl: './formulario-producto.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormularioProductoComponent
{
  #fb = inject(FormBuilder);
  formProducto: FormGroup = this.#fb.group({
    descripcion: ['', [Validators.required, Validators.minLength(3)]],
    id: [0, [Validators.required, Validators.min(1)]],
    precio: [0, [Validators.required, Validators.min(1)]],
  });

  #productsService = inject(ProductsService);
  #route = inject(ActivatedRoute);

  #router = inject(Router);

  constructor()
  {
    toSignal(
      this.#route.params.pipe(
        map(({ id }) => this.#productsService.getProductById(Number(id))),
        tap(producto =>
        {
          this.formProducto.patchValue(producto ?? []);
        })
      )
    );
  }

  agregarProducto()
  {
    if (this.formProducto.invalid)
    {
      alert('Por favor, ingrese una descripcion y un precio valido');
      return;
    }

    this.#productsService.agregarProducto(this.formProducto.value);

    this.formProducto.reset();
    this.#router.navigate(['/']);
  }

  cancelar()
  {
    this.#router.navigate(['/']);
  }
}
