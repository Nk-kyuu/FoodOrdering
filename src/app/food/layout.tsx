import { NavigationBar } from "./components/navigation-bar";

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode
}){
    return( 
    <>
        <NavigationBar />
        {children}
    </>
    )
}