import '../polyfills';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './modules/material/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpService } from './services/http.service';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { AuthModule } from './modules/auth/auth.module';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent
    ],
    imports: [
        AuthModule,
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        MaterialModule,
        BrowserAnimationsModule
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
