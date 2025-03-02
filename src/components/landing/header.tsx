import { Link } from "react-router";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "../ui/theme-toggle";

export default function Header() {
  return (
    <header className="bg-background border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold text-primary">
              Cloud Cache
            </Link>
          </div>
          <nav className="hidden md:flex space-x-10">
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
          <div className="flex items-center space-x-4">
            <ThemeToggle />
            <Button className="hidden sm:inline-flex">
              Talk to an Expert
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
