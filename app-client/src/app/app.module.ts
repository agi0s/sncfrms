import '../polyfills';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './modules/material/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';

import { HttpService } from './services/http.service';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { AuthModule } from './modules/auth/auth.module';
import { SocketsComponent } from './sockets/sockets.component';
import { MasterInterviewComponent } from './master-interview/master-interview.component';
import { AdminModule } from './modules/admin/admin.module';
import { NavigationComponent } from './components/navigation/navigation.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        SocketsComponent,
        MasterInterviewComponent,
        NavigationComponent
    ],
    imports: [
        AuthModule,
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        MaterialModule,
        BrowserAnimationsModule,
        ReactiveFormsModule,
        AdminModule,
        FlexLayoutModule,
        FormsModule
    ],
    exports: [
        FormsModule
    ], 
    providers: [
        HttpService
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule {
}
