import { MenuItem } from 'primeng/api';
const categories = [
  {
    label: 'Femme',
    icon: 'pi pi-fw pi-bookmark',
  },
  {
    label: 'Homme',
    icon: 'pi pi-fw pi-video',
  },
];
export const items: MenuItem[] = [
  {
    label: 'Articles',
    icon: 'pi pi-fw pi-file',
    items: [
      {
        label: 'Baskets',
        icon: 'pi pi-fw pi-plus',
        items: categories,
      },
      {
        label: 'Pantalons',
        icon: 'pi pi-fw pi-trash',
        items: categories,
      },
      {
        label: 'Pulls',
        icon: 'pi pi-fw pi-external-link',
        items: categories,
      },
      {
        label: 'T-shirts',
        icon: 'pi pi-fw pi-external-link',
        items: categories,
      },
    ],
  },
  {
    label: 'Nouveautés',
    icon: 'pi pi-fw pi-pencil',
  },
  {
    label: 'Prochainement',
    icon: 'pi pi-fw pi-user',
  },
];
