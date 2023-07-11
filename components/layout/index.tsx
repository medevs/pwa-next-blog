'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { cn } from "@/lib/utils"
import Drawer from './drawer'
import Logo from '../logo';
import { Tooltip } from '../tooltip'
import { Icon, type IconType } from '../icon';
import { Label } from '../label'
import { ThemeSwitch } from '../theme-switch';
import { ScrollToTop } from '../scroll-to-top'

import { Breadcrumbs } from '../breadcrumbs'
import { format } from 'date-fns';

export type NavItemProps = Record<string, {
  name: string;
  icon: IconType;
  className: string;
}>

interface LayoutProps {
  children: React.ReactNode
  items: NavItemProps
}

export function Layout(props: LayoutProps) {
  const [top, setTop] = useState(true);

  let pathname = usePathname() || '/';
  const paths = ['/writings'];

  paths.some(path => {
    if (pathname.includes(path)) {
      pathname = path;
      return true;
    }
    return false;
  });

  useEffect(() => {
    const scrollHandler = () => {
      window.scrollY > 10 ? setTop(false) : setTop(true)
    };
    window.addEventListener('scroll', scrollHandler);
    return () => window.removeEventListener('scroll', scrollHandler);
  }, [top]);

  const closeDrawer = () => {
    // Close drawer by clicking on the checkbox
    (document.getElementById('landing-drawer') as HTMLInputElement).checked = false;
  }

  // Navbar navigation
  const Navbar = () => {
    return (
      <div className="bg-background sm:bg-clear shadow-md sm:shadow-none min-h-screen p-8 sm:pt-10 sm:px-6 md:pt-20 md:px-10 lg:px-20">

        <nav className="grid gap-y-3 place-items-center">
          {/* Logo */}
          <Logo href="/" className='flex items-center' />
          {
            Object.entries(props.items).map(([path, { name, icon, className }]) => {
              const isActive = path === pathname;
              return (
                <Tooltip
                  key={name}
                  content={name.charAt(0).toUpperCase() + name.slice(1)}
                  side="right"
                  sideOffset={6}
                >
                  <Link
                    key={path}
                    href={path}
                    onClick={closeDrawer}
                    aria-label={name}
                    className={cn(
                      'btn btn-square btn-link relative transition-all no-underline font-sans',
                      { 'text-base-foreground font-bold': !isActive }
                    )}
                  >
                    <span className="relative p-[10px] flex items-center">

                      <Icon
                        name={icon}
                        width={20}
                        height={20}
                        className={cn({
                        }, className)}
                      />

                      <span className="ml-4 sr-only">
                        {name.charAt(0).toUpperCase() + name.slice(1)}
                      </span>

                      {path === pathname ? (
                        <motion.div
                          className="absolute inset-0 bg-base mask mask-squircle z-[-1]"
                          layoutId="sidebar"
                          transition={{
                            type: 'spring',
                            stiffness: 250,
                            damping: 25,
                          }}
                        />
                      ) : null}
                    </span>
                  </Link>
                </Tooltip>
              );
            })
          }
          {/* Divider hidden on mobile temporary */}
          <div className="flex my-10 w-[20px] h-[.5px] bg-border self-center" />
          <ThemeSwitch />
        </nav>

        <div className="hidden absolute bottom-8 sm:bottom-10 md:bottom-20 sm:flex align-middle self-center">
          <ScrollToTop />
        </div>
      </div>
    )
  }

  return (
    <Drawer
      id="landing-drawer"
      navbar={() => <Navbar />}
    >
      <header className={cn(
        "sm:hidden px-6 py-3 sticky top-0 backdrop-blur-md z-10",
        !top && 'shadow-md',
      )}>
        <Label
          htmlFor="landing-drawer"
          className="relative left-[-12px] btn btn-square btn-ghost mask mask-squircle"
        >
          <Icon name="bars" width={32} height={32} />
        </Label>

      </header>

      <main className="flex flex-col p-6 sm:p-10 md:pt-20 md:px-8 lg:px-20 min-h-screen">
        <Breadcrumbs />
        <div className="fixed bottom-8 right-8 sm:hidden z-50">
          <ScrollToTop />
        </div>
        {props.children}
        {/* Footer */}
        <footer className="max-w-2xl mx-auto w-full mt-auto mb-8 ml-0">
          <hr className='my-3' />
          <div className="flex justify-between items-center gap-x-5 lg:sticky">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              © {format(new Date(), 'yyyy')}{' '}
              <Link target='_blank' href="/">Primal Bound ⵣ</Link>
            </p>
          </div>
        </footer>
      </main>
    </Drawer>
  )
}