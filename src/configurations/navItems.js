import Apps from "../screens/Apps/Apps";
import MyProjects from "../screens/MyProjects/MyProjects";

export const NAV_ITEMS = [
  {
    title: 'Приложения',
    path: "/",
    element: <Apps />
  },
  {
    title: 'Мои проекты',
    path: "/my-projects",
    element: <MyProjects />
  },
  {
    title: 'Подборки',
    path: "/recs",
    element: <MyProjects />
  },
];
