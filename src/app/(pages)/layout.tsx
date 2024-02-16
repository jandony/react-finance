// Imports
import { ReactNode, Suspense } from "react";
import PublicNavbar from "@/components/ui/navs/PublicNavbar";

const Layout = ({ children }: { children: ReactNode }) => {
    return (
        <>
            <Suspense fallback={<div />}><PublicNavbar /></Suspense>
            <Suspense fallback={<div />}>{children}</Suspense>
        </>
    );
};

export default Layout;
