import { NgModule } from '@angular/core';
import { MatButtonModule,MatDialogModule } from '@angular/material';

const MaterialComponents=[
  MatButtonModule,
  MatDialogModule
]


@NgModule({
  
  imports: [MaterialComponents ],
  exports:[MaterialComponents]
})
export class MaterialModule { }
