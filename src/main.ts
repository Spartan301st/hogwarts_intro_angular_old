// import { enableProdMode } from '@angular/core';
// import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

// import { AppModule } from './app/app.module';
// import { environment } from './environments/environment';

// if (environment.production) {
//   enableProdMode();
// }

// platformBrowserDynamic().bootstrapModule(AppModule)
//   .catch(err => console.error(err));

// enabling prod. mode for change detection functionality
import { enableProdMode } from '@angular/core';
// declaring an Angular platform for JIT compilation strategy
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
// our app module info
import { AppModule } from './app/app.module';
// to determine if the app is in a production phase or not; by def it's false
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

// using jit strategy, loading AppModule with bootstrapModule and catching all errors
platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err));
