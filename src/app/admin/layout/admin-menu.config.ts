export interface AdminMenuItem {
  label: string;
  icon?: string;
  route?: string;
  children?: AdminMenuItem[];
}

export const ADMIN_MENU: AdminMenuItem[] = [

  {
    label: 'Home',
    icon: 'bi-speedometer2',
    route: 'home'
  },

  {
    label: 'Videos',
    icon: 'bi-camera-video',
    route: 'videos'
  },

  {
    label: 'Settings',
    icon: 'bi-gear',
    children: [
      {
        label: 'Profile',
        route: 'profile'
      },
      {
        label: 'Preferences',
        route: 'preferences'
      }
    ]
  }

];