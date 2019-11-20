import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// AppConfig
// https://stackoverflow.com/questions/34986922/define-global-constants-in-angular-2/40287063#40287063
import { APP_CONFIG,
         AppConfig        } from './app.config';
import { AppComponent     } from './app.component';
import { AppRoutingModule } from './app-routing.module';

// application core (basic site sturcture, security etc) components
import { CoreModule       } from './core/core.module';
import { AuthService      } from './core/auth/auth.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule
  ],
  providers: [
    AuthService,
    { provide: APP_CONFIG, useValue: AppConfig }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
