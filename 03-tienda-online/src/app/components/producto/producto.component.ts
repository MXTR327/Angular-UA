import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-producto',
  imports: [],
  templateUrl: './producto.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductoComponent {
  public producto = {
    descripcion: 'Nuevo Producto',
    precio: 100,
  };
}
