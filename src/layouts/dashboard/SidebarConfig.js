// routes
import { PATH_DASHBOARD } from '../../routes/paths';
// components
import SvgIconStyle from '../../components/SvgIconStyle';

// ----------------------------------------------------------------------

const getIcon = (name) => (
  <SvgIconStyle src={`/static/icons/navbar/${name}.svg`} sx={{ width: '100%', height: '100%' }} />
);

const ICONS = {
  user: getIcon('ic_user'),
  ecommerce: getIcon('ic_ecommerce'),
  analytics: getIcon('ic_analytics'),
  chat: getIcon('ic_blog'),
  cart: getIcon('ic_cart'),
  doc: getIcon('ic_doc'),
  bag: getIcon('ic_bag'),
  hash: getIcon('ic_hash'),
  creditcard: getIcon('ic_creditcard'),
  discount: getIcon('ic_discount')
};

const sidebarConfig = [
  // GENERAL
  // ----------------------------------------------------------------------
  {
    subheader: 'general',
    items: [
      // { title: 'Dashboard', path: PATH_DASHBOARD.general.app, icon: ICONS.analytics },
      // { title: 'Posts', path: PATH_DASHBOARD.general.posts, icon: ICONS.chat },
      { title: 'Projects', path: PATH_DASHBOARD.general.projects, icon: ICONS.bag },
      { title: 'Buy Credits', path: PATH_DASHBOARD.general.buy_credits, icon: ICONS.cart },
      // { title: 'Validate document', path: PATH_DASHBOARD.general.validate_doc, icon: ICONS.doc }
    ]
  },

  // MANAGEMENT
  // ----------------------------------------------------------------------
  {
    subheader: 'management',
    items: [
      {
        title: 'User',
        path: PATH_DASHBOARD.app.root,
        icon: ICONS.user,
        children: [
          { title: 'My Profile', path: PATH_DASHBOARD.app.profile },
          // { title: 'Profiles', path: PATH_DASHBOARD.app.profiles }
        ]
      }
    ]
  },

  // ADMIN PANEL(only for admin)
  // ----------------------------------------------------------------------
  {
    subheader: 'admin panel',
    items: [
      { title: 'Blockchain Hash', path: "/admin/blockchain-hash", icon: ICONS.hash },
      { title: 'Credit Card & Packages', path: '/admin/card-package', icon: ICONS.creditcard },
      { title: 'Control Credit & Discount', path: '/admin/discount', icon: ICONS.discount },
      { title: 'Dashboard Control', path: '/admin/dashboard-control', icon: ICONS.analytics }
    ]
  }
];

export default sidebarConfig;
