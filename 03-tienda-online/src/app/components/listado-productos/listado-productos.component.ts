import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ProductoComponent } from "../producto/producto.component";

@Component({
  selector: 'app-listado-productos',
  imports: [ProductoComponent],
  templateUrl: './listado-productos.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListadoProductosComponent { }
