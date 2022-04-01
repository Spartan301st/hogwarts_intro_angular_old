// import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';

// import { AppComponent } from './app.component';

// @NgModule({
//   declarations: [
//     AppComponent
//   ],
//   imports: [
//     BrowserModule
//   ],
//   providers: [],
//   bootstrap: [AppComponent]
// })
// export class AppModule { }

// importing decorator for typescript
import { NgModule } from '@angular/core';
// for angular to function with browsers
import { BrowserModule } from '@angular/platform-browser';

// importing component
import { AppComponent } from './app.component';
import { PostComponent } from './post/post.component';

// calling the decorator
@NgModule({
  // importing BrowserModule to this app module
  imports: [BrowserModule],
  // indicating the declarations to be used with this module
  declarations: [AppComponent, PostComponent],
  // the root component to be used with this module
  bootstrap: [AppComponent],
})

// main class module
export class AppModule {
  //
}
