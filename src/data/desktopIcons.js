import { FaUser, FaFolder, FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

export const desktopIcons = [
  {
    id: 'about-me',
    name: 'About Me',
    icon: FaUser,
    position: { x: 50, y: 50 },
    type: 'application',
    component: 'AboutMeApp'
  },
  {
    id: 'projects',
    name: 'Projects',
    icon: FaFolder,
    position: { x: 50, y: 150 },
    type: 'folder',
    component: 'ProjectsFolder'
  },
  {
    id: 'github',
    name: 'GitHub',
    icon: FaGithub,
    position: { x: 50, y: 250 },
    type: 'link',
    url: 'https://github.com/johndeveloper'
  },
  {
    id: 'linkedin',
    name: 'LinkedIn',
    icon: FaLinkedin,
    position: { x: 50, y: 350 },
    type: 'link',
    url: 'https://linkedin.com/in/yourprofile'
  },
  {
    id: 'contact',
    name: 'Contact',
    icon: FaEnvelope,
    position: { x: 50, y: 450 },
    type: 'application',
    component: 'ContactApp'
  }
];