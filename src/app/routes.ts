import { createBrowserRouter } from "react-router";
import { RootLayout } from "./components/layout";

const basename = import.meta.env.BASE_URL.replace(/\/$/, '') || '/';

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    HydrateFallback: () => null,
    children: [
      {
        index: true,
        lazy: () => import("./pages/home").then((m) => ({ Component: m.Home })),
      },
      {
        path: "sporsmaal-og-svar",
        lazy: () => import("./pages/qa").then((m) => ({ Component: m.QAPage })),
      },
      {
        path: "sporsmaal-og-svar/:id",
        lazy: () => import("./pages/question-detail").then((m) => ({ Component: m.QuestionDetail })),
      },
      {
        path: "kategori/:slug",
        lazy: () => import("./pages/category").then((m) => ({ Component: m.CategoryPage })),
      },
      {
        path: "tema",
        lazy: () => import("./pages/alle-tema").then((m) => ({ Component: m.AlleTemaPage })),
      },
      {
        path: "sjekk-svar",
        lazy: () => import("./pages/check-answer").then((m) => ({ Component: m.CheckAnswer })),
      },
      {
        path: "hjelpetjenester",
        lazy: () => import("./pages/hjelpetjenester").then((m) => ({ Component: m.Hjelpetjenester })),
      },
      {
        path: "hjelpetjenester/kategori/:categorySlug",
        lazy: () => import("./pages/service-category").then((m) => ({ Component: m.ServiceCategoryPage })),
      },
      {
        path: "hjelpetjenester/kategori/:categorySlug/:subCategorySlug",
        lazy: () => import("./pages/service-category").then((m) => ({ Component: m.ServiceSubCategoryPage })),
      },
      {
        path: "hjelpetjenester/:slug",
        lazy: () => import("./pages/service-detail").then((m) => ({ Component: m.ServiceDetail })),
      },
      {
        path: "*",
        lazy: () => import("./pages/not-found").then((m) => ({ Component: m.NotFound })),
      },
    ],
  },
  {
    path: "/still-sporsmal",
    lazy: () => import("./pages/submit-question").then((m) => ({ Component: m.SubmitQuestion })),
  },
  {
    path: "/still-sporsmal/bekreftelse",
    Component: RootLayout,
    HydrateFallback: () => null,
    children: [
      {
        index: true,
        lazy: () => import("./pages/submit-confirmation").then((m) => ({ Component: m.SubmitConfirmation })),
      },
    ],
  },
], { basename });