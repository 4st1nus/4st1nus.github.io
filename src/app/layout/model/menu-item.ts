
export class MenuItem {
    // Text to show for the link
    public text: string;
    // Router link to navigate if the link is clicked
    public routerLink?: string;
    // If it is a dropdown, it should have an array of menus here
    public subMenu?: MenuItem[];
    // Link will be disabled if this attribute is true
    public disabled = false;
}
