'use client'

import { useEffect, useLayoutEffect } from 'react'
import { usePathname } from 'next/navigation'

export function ScrollToTop() {
    const pathname = usePathname()

    // Disable browser scroll restoration
    useEffect(() => {
        if ('scrollRestoration' in history) {
            history.scrollRestoration = 'manual'
        }
    }, [])

    // Scroll to top on every route change (including client-side nav)
    useLayoutEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'instant' as ScrollBehavior })
    }, [pathname])

    return null
}
