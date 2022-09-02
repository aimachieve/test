import { Suspense, lazy } from 'react';
import { Navigate, useRoutes, useLocation } from 'react-router-dom';
// layouts
import MainLayout from '../layouts/main';
import DashboardLayout from '../layouts/dashboard';
import LogoOnlyLayout from '../layouts/LogoOnlyLayout';
// components
import LoadingScreen from '../components/LoadingScreen';
// Guard
import AdminGuard from '../guards/AdminGuard'
import PrivateRoute from './PrivateRoute'
import AdminRoute from './AdminRoute'
import { LandingFAQ, LandingValues } from 'components/_external-pages/landing';

// ----------------------------------------------------------------------

const Loadable = (Component) => (props) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { pathname } = useLocation();
  const isDashboard = pathname.includes('/dashboard');

  return (
    <Suspense
      fallback={
        <LoadingScreen
          sx={{
            ...(!isDashboard && {
              top: 0,
              left: 0,
              width: 1,
              zIndex: 9999,
              position: 'fixed'
            })
          }}
        />
      }
    >
      <Component {...props} />
    </Suspense>
  );
};

export default function Router() {
  return useRoutes([
    // Main Routes
    {
      path: '*',
      element: <LogoOnlyLayout />,
      children: [
        { path: '404', element: <NotFound /> },
        { path: '*', element: <Navigate to="/404" replace /> }
      ]
    },
    {
      path: '/',
      // element: <MainLayout />,
      children: [
        { path: '/', element: <Login /> },
        { path: '/register', element: <Register /> },
        { path: '/login', element: <Login /> },
        { path: '/posts/:id', element: <Post /> },
        { path: '/help-register', element: <HelpRegister /> },
        { path: '/priority-test', element: <PriorityTest /> },
        { path: '/contact', element: <Contact /> },
        { path: '/terms', element: <Terms /> },

      ],
    },
    // Dashboard Routes
    {
      path: '/dashboard',
      element: (
        <PrivateRoute>
          <DashboardLayout />
        </PrivateRoute>
      ),
      children: [
        { path: '/dashboard', element: <Navigate to="/dashboard/app/profile" replace /> },
        { path: 'general', element: <GeneralApp /> },
        // { path: 'posts', element: <Posts /> },
        // { path: 'posts/:id', element: <Post /> },
        // 
        { path: 'profiles', element: <Profiles /> },
        { path: 'profile/:id', element: <Profile /> },
        { path: 'create-profile', element: <ProfileForm /> },
        { path: 'edit-profile', element: <ProfileForm /> },
        { path: 'add-experience', element: <AddExperience /> },
        { path: 'add-education', element: <AddEducation /> },
        { path: 'posts', element: <Posts /> },
        // 
        { path: 'projects', element: <Projects /> },
        { path: 'register-project', element: <RegisterProject /> },
        { path: 'buy_credits', element: <LandingValues /> },
        { path: 'validate_doc', element: <ValidateDoc /> },
        { path: 'purchase-summary/:id', element: <PurchaseSummary /> },
        { path: 'credits', element: <Credits /> },
        {
          path: '/dashboard/app',
          children: [
            {
              path: 'dashboard/app',
              element: <Navigate to="/dashboard/app/profile" replace />
            },
            { path: 'profile', element: <Dashboard /> },
            { path: 'profiles', element: <Profiles /> },
          ]
        },
        // 
        { path: 'generate-hash', element: <GenerateHash /> },
        { path: 'email-setup', element: <EmailSetup /> },
        { path: 'help', element: <LandingFAQ /> },
        { path: 'contact-us', element: <ContactUs /> },
        { path: 'registration-types', element: <RegistrationTypes /> },
      ]
    },
    // Admin Routes
    {
      path: '/admin',
      element: (
        <AdminRoute>
          <DashboardLayout />
        </AdminRoute>
      ),
      children: [
        { path: '/admin', element: <Navigate to="/admin/blockchain-hash" replace /> },
        { path: 'blockchain-hash', element: <BlockchainHash /> },
        { path: 'card-package', element: <CardPackage /> },
        { path: 'discount', element: <Discount /> },
        { path: 'dashboard-control', element: <DashboardControl /> },
      ]
    },
    { path: '*', element: <Navigate to="/404" replace /> }
  ]);
}

// IMPORT COMPONENTS

// Dashboard
const GeneralApp = Loadable(lazy(() => import('../pages/dashboard/GeneralApp')));
const Projects = Loadable(lazy(() => import('../pages/dashboard/Projects')));
const RegisterProject = Loadable(lazy(() => import('../pages/dashboard/RegisterProject')));
const BuyCredits = Loadable(lazy(() => import('../pages/dashboard/BuyCredits')));
const PurchaseSummary = Loadable(lazy(() => import('../pages/dashboard/PurchaseSummary')));
const ValidateDoc = Loadable(lazy(() => import('../pages/dashboard/ValidateDoc')));
const Credits = Loadable(lazy(() => import('../pages/dashboard/Credits')));
const GenerateHash = Loadable(lazy(() => import('../pages/dashboard/GenerateHash')));
const EmailSetup = Loadable(lazy(() => import('../pages/dashboard/EmailSetup')));
const CommonQuestion = Loadable(lazy(() => import('../pages/dashboard/CommonQuestion')));
const ContactUs = Loadable(lazy(() => import('../pages/dashboard/ContactUs')));
const RegistrationTypes = Loadable(lazy(() => import('../pages/dashboard/RegistrationTypes')));
const NotFound = Loadable(lazy(() => import('../pages/Page404')));
const Dashboard = Loadable(lazy(() => import('../pages/dashboard/Dashboard')));
// Main
const LandingPage = Loadable(lazy(() => import('../pages/LandingPage')));
const Register = Loadable(lazy(() => import('../pages/auth/Register')));
const Login = Loadable(lazy(() => import('../pages/auth/Login')));
const Profiles = Loadable(lazy(() => import('../pages/profiles/Profiles')));
const Profile = Loadable(lazy(() => import('../pages/profile/Profile')));
const ProfileForm = Loadable(lazy(() => import('../pages/profile-forms/ProfileForm')));
const AddExperience = Loadable(lazy(() => import('../pages/profile-forms/AddExperience')));
const AddEducation = Loadable(lazy(() => import('../pages/profile-forms/AddEducation')));
const Posts = Loadable(lazy(() => import('../pages/posts/Posts')));
const Post = Loadable(lazy(() => import('../pages/post/Post')));
const HelpRegister = Loadable(lazy(() => import('../pages/doubts/HelpRegister')));
const PriorityTest = Loadable(lazy(() => import('../pages/doubts/PriorityTest')));
const Contact = Loadable(lazy(() => import('../pages/doubts/Contact')));
const Terms = Loadable(lazy(() => import('../pages/layout/Terms')));
// Admin
const BlockchainHash = Loadable(lazy(() => import('../pages/admin/BlockchainHash')));
const CardPackage = Loadable(lazy(() => import('../pages/admin/CardPackage')));
const Discount = Loadable(lazy(() => import('../pages/admin/Discount')));
const DashboardControl = Loadable(lazy(() => import('../pages/admin/DashboardControl')));
