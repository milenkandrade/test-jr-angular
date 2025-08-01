# 🐱 Cat Breeds Viewer – Angular Technical Test (Junior Level)

## Description

Angular technical test focused on consuming **The Cat API**, which allows you to display cat images and a breed list. It is designed as a junior-level technical exercise, with a focus on structure, clarity, and best practices.

## Motivation

This project aims to demonstrate essential capabilities in Angular: HTTP consumption, state management, structured templates. It is intended as a realistic technical evaluation.

---

## Angular Topics Covered

1. **State**
* Using **NgRx Store** for global state management.

2. **Templates**
Only the following structural directives will be used:

* `@if / @else`
* `@for`

- This demonstrates control flow in templates without additional complexity.

3. **HTTP / DI / Routing**

* Injectable service with `HttpClient` consuming the `/v1/breeds` endpoints.
* Main routes: `/`, `/breeds`.
* Modules and services provided via DI in `@Injectable({providedIn: 'root'})`.

---

## Project Structure

```plain
src/
├─ app/
│ ├─ components/
| | └─ breed-card/
│ ├─ pages/
│ │ └─ breeds/ 
│ ├─ services/ 
│ │ └─ cat-api.service.ts 
│ ├─ st/ 
│ ├─ app.route.ts 
│ └─ app.config.ts
```

---

##Code examples

### Service

/\* cat-api.service.ts \*/

```ts
@Injectable({providedIn:'root'})
export class CatApiService { 
  getAllBreeds() { } 
}
```

## Delivery Requirements

* Public repository with complete code.
* Functional implementation with Signals or NgRx, declarative templates, navigation.

---

## Technologies Used
 - Angular 19
 - NgRx 19
 - DaisyUI 5
---

# TestJrAngular

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.2.4.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
