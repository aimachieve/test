// ----------------------------------------------------------------------

function path(root, sublink) {
  return `${root}${sublink}`;
}

const ROOTS_DASHBOARD = '/dashboard';
const ROOTS_AUTH = '/auth';

// ----------------------------------------------------------------------

export const PATH_AUTH = {
  root: ROOTS_AUTH,
  login: path(ROOTS_AUTH, '/login'),
  loginUnprotected: path(ROOTS_AUTH, '/login-unprotected'),
  register: path(ROOTS_AUTH, '/register'),
  registerUnprotected: path(ROOTS_AUTH, '/register-unprotected'),
  resetPassword: path(ROOTS_AUTH, '/reset-password'),
  verify: path(ROOTS_AUTH, '/verify')
};

export const PATH_USER = {
  home: '/'
};

export const PATH_DASHBOARD = {
  root: ROOTS_DASHBOARD,
  general: {
    app: path(ROOTS_DASHBOARD, '/general'),
    posts: path(ROOTS_DASHBOARD, '/posts'),
    projects: path(ROOTS_DASHBOARD, '/projects'),
    buy_credits: path(ROOTS_DASHBOARD, '/buy_credits'),
    validate_doc: path(ROOTS_DASHBOARD, '/validate_doc')
  },
  app: {
    root: path(ROOTS_DASHBOARD, '/app'),
    profile: path(ROOTS_DASHBOARD, '/app/profile'),
    profiles: path(ROOTS_DASHBOARD, '/app/profiles'),
  }
};
