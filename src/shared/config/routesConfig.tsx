import { ContactsPage } from "@/pages/ContactsPage";
import { HomePage } from "@/pages/HomePage";
import { ProjectsPage } from "@/pages/ProjectsPage";
import type { ReactNode } from "react";
export interface routesConfigType {
  name: "Home" | "Projects" | "Contacts";
  path: "/" | "/projects" | "/contacts";
  element: ReactNode;
}
export const routesConfig: routesConfigType[] = [
  { name: "Home", path: "/", element: <HomePage /> },
  { name: "Projects", path: "/projects", element: <ProjectsPage /> },
  { name: "Contacts", path: "/contacts", element: <ContactsPage /> },
];
