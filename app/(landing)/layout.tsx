import { Layout, type NavItemProps } from '@/components';

const navItems: NavItemProps = {
  '/': {
    name: 'home',
    icon: 'home',
    className: ''
  },
  '/about': {
    name: 'about',
    icon: 'about',
    className: ''
  },
  '/writings': {
    name: 'writings',
    icon: 'writings',
    className: ''
  }
};

interface LandingLayoutProps {
  children: React.ReactNode
}

export default async function LandingLayout(props: LandingLayoutProps) {
  return (
    <Layout items={navItems}>
      {props.children}
    </Layout>
  )
}