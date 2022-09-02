import { Icon } from '@iconify/react';
import homeFill from '@iconify/icons-eva/home-fill';
import briefcaseFill from '@iconify/icons-eva/briefcase-fill';
import collapseFill from '@iconify/icons-eva/collapse-fill';
import contactIcon from '@iconify/icons-eva/message-circle-outline';
import activitiyFill from '@iconify/icons-eva/activity-fill';
import helpIcon from '@iconify/icons-eva/question-mark-circle-fill';
import bookmarkFill from '@iconify/icons-eva/bookmark-fill';
// routes
import { PATH_DASHBOARD } from '../../routes/paths';
import { useTranslation } from 'react-i18next';

// ----------------------------------------------------------------------

const ICON_SIZE = {
  width: 22,
  height: 22
};

const menuConfig = [
  {
    title: 'menu.home',
    path: '/',
    icon: <Icon icon={homeFill} {...ICON_SIZE} />
  },
  {
    title: 'menu.solution',
    path: '/#solution',
    icon: <Icon icon={bookmarkFill} {...ICON_SIZE} />
  },
  {
    title: 'menu.how',
    path: '/#how',
    icon: <Icon icon={helpIcon} {...ICON_SIZE} />
  },
  {
    title: 'menu.benefits',
    path: '/#benefits',
    icon: <Icon icon={activitiyFill} {...ICON_SIZE} />
  },
  {
    title: 'menu.values',
    path: '/#values',
    icon: <Icon icon={briefcaseFill} {...ICON_SIZE} />
  },
  {
    title: 'menu.doubts',
    path: '/#',
    children: [
      {
        title: 'menu.what',
        path: 'help-register'
      },
      {
        title: 'menu.priority',
        path: 'priority-test'
      },
      {
        title: 'menu.legal',
        path: 'priority-test/#'
      }
    ],
    icon: <Icon icon={homeFill} {...ICON_SIZE} />
  },
  {
    title: 'menu.contact',
    path: '/contact',
    icon: <Icon icon={collapseFill} {...ICON_SIZE} />
  },
];

export default menuConfig;
