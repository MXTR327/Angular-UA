import {
  ChangeDetectionStrategy,
  Component,
  inject,
  signal,
} from '@angular/core';
import { rxResource, toSignal } from '@angular/core/rxjs-interop';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from '@core/services/products.service';
import { map } from 'rxjs';
import { of } from 'rxjs';
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
    precio: [0, [Validators.required, Validators.min(0)]],
  });

  llaveProducto = signal<string>('');

  #activatedRoute = inject(ActivatedRoute);

  #productLlave = toSignal(
    this.#activatedRoute.params.pipe(map(({ llave }) => llave))
  );

  #productsService = inject(ProductsService);
  productsResource = rxResource({
    params: () => ({ llave: this.#productLlave() }),
    stream: ({ params }) =>
      of(this.#productsService.getProductByLlave(params.llave)).pipe(
        map(producto =>
        {
          if (producto)
          {
            this.formProducto.patchValue(producto);
            this.llaveProducto.set(params.llave);
          }
          return producto;
        })
      ),
  });

  #router = inject(Router);

  agregarProducto()
  {
    if (this.formProducto.invalid)
    {
      alert('Por favor, ingrese una descripcion y un precio valido');
      return;
    }

    this.#productsService.guardarProducto(
      this.formProducto.value,
      this.llaveProducto()
    );

    this.formProducto.reset();
    this.#router.navigate(['/']);
  }

  cancelar()
  {
    this.#router.navigate(['/']);
  }

  eliminarProducto()
  {
    if (this.llaveProducto())
    {
      this.#productsService.eliminarProducto(this.llaveProducto());

      this.formProducto.reset();
      this.#router.navigate(['/']);
    }
  }
}
