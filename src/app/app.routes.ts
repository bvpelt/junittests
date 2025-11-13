import { Routes } from "@angular/router";
import { LazyModule } from "./part37/lazy/lazy.module";
import { HomeComponent } from "./part37/home/home/home.component";
import { AboutComponent } from "./part37/about/about/about.component";

export const routes: Routes = [
  {
    path: "part02",
    loadComponent: () =>
      import("./part02/part02.component").then((m) => m.Part02Component),
  },
  {
    path: "part03",
    loadComponent: () =>
      import("./part03/part03.component").then((m) => m.Part03Component),
  },
  {
    path: "part04",
    loadComponent: () =>
      import("./part04/part04.component").then((m) => m.Part04Component),
  },
  {
    path: "part05",
    loadComponent: () =>
      import("./part05/part05.component").then((m) => m.Part05Component),
  },
  {
    path: "part06",
    loadComponent: () =>
      import("./part06/part06.component").then((m) => m.Part06Component),
  },
  {
    path: "part07",
    loadComponent: () =>
      import("./part07/part07.component").then((m) => m.Part07Component),
  },
  {
    path: "part08",
    loadComponent: () =>
      import("./part08/part08.component").then((m) => m.Part08Component),
  },
  {
    path: "part09",
    loadComponent: () =>
      import("./part09/part09.component").then((m) => m.Part09Component),
  },
  {
    path: "part10",
    loadComponent: () =>
      import("./part10/part10.component").then((m) => m.Part10Component),
  },
  {
    path: "part11",
    loadComponent: () =>
      import("./part11/part11.component").then((m) => m.Part11Component),
  },
  {
    path: "part12",
    loadComponent: () =>
      import("./part12/part12.component").then((m) => m.Part12Component),
  },
  {
    path: "part13",
    loadComponent: () =>
      import("./part13/part13.component").then((m) => m.Part13Component),
  },
  {
    path: "part14",
    loadComponent: () =>
      import("./part14/part14.component").then((m) => m.Part14Component),
  },
  {
    path: "part15",
    loadComponent: () =>
      import("./part15/part15.component").then((m) => m.Part15Component),
  },
  {
    path: "part16",
    loadComponent: () =>
      import("./part16/part16.component").then((m) => m.Part16Component),
  },
  {
    path: "part17",
    loadComponent: () =>
      import("./part17/part17.component").then((m) => m.Part17Component),
  },
  {
    path: "part18",
    loadComponent: () =>
      import("./part18/part18.component").then((m) => m.Part18Component),
  },
  {
    path: "part19",
    loadComponent: () =>
      import("./part19/part19.component").then((m) => m.Part19Component),
  },
  {
    path: "part20",
    loadComponent: () =>
      import("./part20/part20.component").then((m) => m.Part20Component),
  },

  {
    path: "part21",
    loadComponent: () =>
      import("./part21/part21.component").then((m) => m.Part21Component),
  },
  {
    path: "part22",
    loadComponent: () =>
      import("./part22/part22.component").then((m) => m.Part22Component),
  },
  {
    path: "part23",
    loadComponent: () =>
      import("./part23/part23.component").then((m) => m.Part23Component),
  },
  {
    path: "part24",
    loadComponent: () =>
      import("./part24/part24.component").then((m) => m.Part24Component),
  },
  {
    path: "part25",
    loadComponent: () =>
      import("./part25/part25.component").then((m) => m.Part25Component),
  },
  {
    path: "part26",
    loadComponent: () =>
      import("./part26/part26.component").then((m) => m.Part26Component),
  },
  {
    path: "part27",
    loadComponent: () =>
      import("./part27/part27.component").then((m) => m.Part27Component),
  },
  {
    path: "part28",
    loadComponent: () =>
      import("./part28/part28.component").then((m) => m.Part28Component),
  },
  {
    path: "part29",
    loadComponent: () =>
      import("./part29/part29.component").then((m) => m.Part29Component),
  },
  {
    path: "part30",
    loadComponent: () =>
      import("./part30/part30.component").then((m) => m.Part30Component),
  },
  {
    path: "part31",
    loadComponent: () =>
      import("./part31/part31.component").then((m) => m.Part31Component),
  },
  {
    path: "part32",
    loadComponent: () =>
      import("./part32/part32.component").then((m) => m.Part32Component),
  },
  {
    path: "part33",
    loadComponent: () =>
      import("./part33/part33.component").then((m) => m.Part33Component),
  },
  {
    path: "part34",
    loadComponent: () =>
      import("./part34/part34.component").then((m) => m.Part34Component),
  },
  {
    path: "part35",
    loadComponent: () =>
      import("./part35/part35.component").then((m) => m.Part35Component),
  },
  {
    path: "part36",
    loadComponent: () =>
      import("./part36/part36.component").then((m) => m.Part36Component),
    children: [
      {
        path: "student",
        loadComponent: () =>
          import("./part36/studpart36/studpart36.component").then(
            (m) => m.Studpart36Component
          ),
      },
    ],
  },
  {
    path: "redirect/student",
    redirectTo: "/part36/student",
    pathMatch: "full",
  },
  {
    path: "part37",
    loadComponent: () =>
      import("./part37/part37.component").then((m) => m.Part37Component),
  },
  {
    path: "employeelist",
    loadChildren: () =>
      import("./part37/lazy/lazy.module").then((m) => LazyModule),
  },
  {
    path: "about",
    component: AboutComponent,
  },
  {
    path: "home",
    component: HomeComponent,
  },

  {
    path: "part38",
    loadComponent: () =>
      import("./part38/part38.component").then((m) => m.Part38Component),
  },
  {
    path: "part39",
    loadComponent: () =>
      import("./part39/part39.component").then((m) => m.Part39Component),
  },
  {
    path: "part40",
    loadComponent: () =>
      import("./part40/part40.component").then((m) => m.Part40Component),
  },
  {
    path: "part41",
    loadComponent: () =>
      import("./part41/part41.component").then((m) => m.Part41Component),
  },
  {
    path: "part42",
    loadComponent: () =>
      import("./part42/part42.component").then((m) => m.Part42Component),
  },
  {
    path: "part43",
    loadComponent: () =>
      import("./part43/part43.component").then((m) => m.Part43Component),
  },
  {
    path: "part44",
    loadComponent: () =>
      import("./part44/part44.component").then((m) => m.Part44Component),
  },
];
