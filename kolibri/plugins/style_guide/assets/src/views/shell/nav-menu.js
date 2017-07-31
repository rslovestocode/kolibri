import { sortBy, flatten } from 'lodash';

import buttonsPage from '../content/buttons';
import typographyPage from '../content/typography';
import checkboxesPage from '../content/checkboxes';
import radioButtonsPage from '../content/radio-buttons';
import textFieldsPage from '../content/text-fields';
import modalsPage from '../content/modals';
import filtersPage from '../content/filters';
import breadcrumbsPage from '../content/breadcrumbs';
import navbarPage from '../content/navbar';
import homePage from '../content/style-guide-home';

function sortSectionItems(items) {
  return sortBy(items, [item => item.itemName]);
}

const homeRoute = [
  {
    path: `/`,
    component: homePage,
  },
];

// This data structure contains the navigational links pointing to all the
// content pages in the style guide.
// Notes: This is view-agnostic; it doesn't make assumption on how it will be
// rendered (whether it's a side-nav or a horizontal menu).
const navMenu = [
  {
    sectionName: 'Components',
    sectionItems: sortSectionItems([
      {
        itemName: 'Buttons',
        itemRoute: {
          path: `/components/buttons`,
          component: buttonsPage,
        },
      },
      {
        itemName: 'Breadcrumbs',
        itemRoute: {
          path: `/components/breadcrumbs`,
          component: breadcrumbsPage,
        },
      },
      {
        itemName: 'Horizontal Navbar',
        itemRoute: {
          path: `/components/navbar`,
          component: navbarPage,
        },
      },
    ]),
  },
];

// Extract the routes from the sideNavMenu so they can be added to VueRouter.
// Add in the path to the home page.
const navMenuRoutes = flatten(
  homeRoute.concat(navMenu.map(menuSection => menuSection.sectionItems.map(link => link.itemRoute)))
);

export { navMenu, navMenuRoutes };
