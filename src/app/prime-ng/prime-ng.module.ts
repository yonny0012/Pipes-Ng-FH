import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenubarModule } from 'primeng/menubar';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { FieldsetModule } from 'primeng/fieldset';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  exports: [MenubarModule, CardModule, ButtonModule, FieldsetModule],
})
export class PrimeNgModule {}
