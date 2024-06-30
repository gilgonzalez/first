
'use client'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { SlashIcon } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function BreadCrumb() {
  const pathname = usePathname()
  const routes = pathname.split('/')
  return (
    <Breadcrumb>
      <BreadcrumbList>
      {
        routes.map((route, index) => {
          if (route === '') return null
          const buildRoute = `${routes.slice(0, index + 1).join('/')}`
          return (
            <>
            <BreadcrumbItem key={buildRoute}>
              <Link href={buildRoute}>
                {route.charAt(0).toUpperCase() + route.slice(1)}
              </Link>
            </BreadcrumbItem>
            {index !== routes.length - 1 && (
              <BreadcrumbSeparator key={`separator-${index}`}>
                <SlashIcon />
              </BreadcrumbSeparator>
            )}
            </>
          )
        })
      }
      </BreadcrumbList>
    </Breadcrumb>
  )
}