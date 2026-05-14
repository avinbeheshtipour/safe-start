import { createBrowserRouter } from "react-router";
import { HomePage } from "./pages/HomePage";
import { CategoryPage } from "./pages/CategoryPage";
import { SmartAssistantPage } from "./pages/SmartAssistantPage";
import { LiveChatPage } from "./pages/LiveChatPage";
import { CommunityGroupsPage } from "./pages/CommunityGroupsPage";
import { ResourceFinderPage } from "./pages/ResourceFinderPage";
import { ArticlePage } from "./pages/ArticlePage";
import { ProfilePage } from "./pages/ProfilePage";
import { RootLayout } from "./components/RootLayout";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      { index: true, Component: HomePage },
      { path: "category/:categoryId", Component: CategoryPage },
      { path: "assistant", Component: SmartAssistantPage },
      { path: "chat", Component: LiveChatPage },
      { path: "community", Component: CommunityGroupsPage },
      { path: "resources", Component: ResourceFinderPage },
      { path: "article/:articleId", Component: ArticlePage },
      { path: "profile", Component: ProfilePage },
    ],
  },
]);
