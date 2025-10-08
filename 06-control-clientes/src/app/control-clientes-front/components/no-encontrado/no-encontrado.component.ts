import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-no-encontrado',
  imports: [RouterLink],
  templateUrl: './no-encontrado.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NoEncontradoComponent
{}
