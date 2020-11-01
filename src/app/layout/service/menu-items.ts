import { MenuItem } from '../model/menu-item';

// data for top navbar links
export const
    menuItems = [
        {
            text: 'Category',
            subMenu: [
                { text: 'World', routerLink: 'news/world' },
                { text: 'Local', routerLink: 'news/local' }, { text: 'Sports', routerLink: 'news/sports' }]
        },
        {
            text: 'Admin',
            subMenu: [
                { text: 'Settings', routerLink: 'admin/settings', disabled: false },
                { text: 'Security', routerLink: 'admin/security' }, { text: 'Cookies', routerLink: 'cookies' }]
        },
        {
            text: 'About',
            subMenu: [
                { text: 'About Us', routerLink: 'about-us' },
                { text: 'History', routerLink: 'history' }, { text: 'Companies', routerLink: 'companies' }]
        },
        {
            text: 'Contact',
            subMenu: [
                { text: 'Email', routerLink: 'contact/email' },
                { text: 'Chat', routerLink: 'contact/chat' }, { text: 'Feedback', routerLink: 'contact/feedback' }]
        }
    ] as MenuItem[];
