import { NgModule } from '@angular/core';

//import {MatListModule} from '@angular/material/list';
import { 
    MatToolbarModule, 
    MatIconModule, 
    MatSidenavModule, 
    MatButtonModule,
    MatMenuModule
} from '@angular/material';

@NgModule({
    imports: [
        //MatListModule
    ],
    exports: [
        MatToolbarModule,
        MatIconModule,
        MatSidenavModule,
        MatButtonModule,
        MatMenuModule
    ],
})
export class MaterialModule {}
