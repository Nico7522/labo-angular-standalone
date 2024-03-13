import { MenuItem, PrimeIcons } from 'primeng/api';

const shoesCategories = [
  {
    label: 'Voir tout',
    routerLink: 'shoes',
    icon: 'pi pi-fw pi-eye',
  },
  {
    label: 'Femme',
    icon: 'women-icon',
  },
  {
    label: 'Homme',
    icon: 'man-icon',
  },
];

const pantsCategories = [
  {
    label: 'Voir tout',
    routerLink: 'pants',
    icon: 'pi pi-fw pi-eye',
  },
  {
    label: 'Femme',
    icon: 'women-icon',
  },
  {
    label: 'Homme',
    icon: 'man-icon',
  },
];

const shirtsCategories = [
  {
    label: 'Voir tout',
    routerLink: 'shirts',
    icon: 'pi pi-fw pi-eye',
  },
  {
    label: 'Femme',
    icon: 'women-icon',
  },
  {
    label: 'Homme',
    icon: 'man-icon',
  },
];

export const items: MenuItem[] = [
  {
    label: 'Articles',
    icon: PrimeIcons.SHOPPING_BAG,
    items: [
      {
        label: 'Baskets',
        items: shoesCategories,
      },
      {
        label: 'Pantalons',
        items: pantsCategories,
      },
      {
        label: 'T-shirts',
        items: shirtsCategories,
      },
      {
        label: 'Pulls',
        // items: categories,
      },
    ],
  },
  {
    label: 'Nouveautés',
    icon: PrimeIcons.INFO,
  },
  {
    label: 'Prochainement',
    icon: PrimeIcons.PLUS,
  },
];
