import { Link } from "react-router";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "../ui/theme-toggle";
import Hamburger from "./hamburger";

export default function Header() {
  return (
    <header className="bg-background border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold text-primary-gradient">
              Cloud Cache
            </Link>
          </div>
          <nav className="hidden md:flex space-x-4 md:space-x-10">
            <Link
              to="#features"
              className="text-base font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Features
            </Link>
            <Link
              to="#testimonials"
              className="text-base font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Testimonials
            </Link>
            <Link
              to="#pricing"
              className="text-base font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Pricing
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <Hamburger />
            <Button className="hidden md:inline-flex">
              Talk to an Expert
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
