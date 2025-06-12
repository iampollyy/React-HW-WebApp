export type NavLink = {
  name: string;
  link: string;
};

 const navLinksHeader: NavLink[] = [
  { name: 'Home', link: '/' },
  { name: 'Menu', link: '/menu' },
  { name: 'Company', link: '/company' },
  { name: 'Login', link: '/login' },
];

export default navLinksHeader;