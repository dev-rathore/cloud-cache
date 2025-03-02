import { companies } from "@/seeds/companies";

export default function Marquee() {
  return (
    <div className="relative flex overflow-hidden py-16 sm:pt-16 sm:pb-24 dark:bg-neutral-900">
      <div className="flex min-w-max animate-marquee space-x-16">
        {Array(2)
          .fill(companies)
          .flat()
          .map((company, index) => (
            <div key={index} className="flex flex-col items-center space-y-2">
              <img
                src={company.logo}
                alt={company.name}
                className="h-12 w-auto object-contain"
              />
            </div>
          ))}
      </div>
    </div>
  );
}
