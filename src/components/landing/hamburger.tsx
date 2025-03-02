import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { MenuIcon } from "lucide-react";
import { HTMLProps } from "react";
import { Link } from "react-router";
import { Button } from "../ui/button";

export default function Hamburger() {
  return (
    <div className="flex md:hidden">
      <Sheet>
        <SheetTrigger asChild>
          <MenuIcon className="w-6 h-6" />
        </SheetTrigger>
        <SheetContent side="left" className="z-[10000]">
          <SheetHeader>
            <SheetTitle>
              <Link to="/" className="text-2xl font-bold text-primary-gradient">
                Cloud Cache
              </Link>
            </SheetTitle>
          </SheetHeader>
          <ul
            className="flex flex-col gap-8 mt-4 items-center"
          >
            <NavLink
              to="#"
            >
              <SheetClose>
                Features
              </SheetClose>
            </NavLink>
            <NavLink
              to="#"
            >
              <SheetClose>
                Testimonials
              </SheetClose>
            </NavLink>
            <NavLink
              to="#"
            >
              <SheetClose>
                Pricing
              </SheetClose>
            </NavLink>
          </ul>
          <Button className="mt-4 mx-4">
            Talk to an Expert
          </Button>
        </SheetContent>
      </Sheet>
    </div>
  );
};

interface NavLinkProps extends HTMLProps<HTMLLIElement> {
  to: string;
}

const NavLink: React.FC<NavLinkProps> = ({
  children,
  to,
  ...props
}) => {
  return (
    <li
      {...props}
    >
      <Link
        to={to}
        className="cursor-pointer hover:text-primary"
      >
        {children}
      </Link>
    </li>
  )
};
