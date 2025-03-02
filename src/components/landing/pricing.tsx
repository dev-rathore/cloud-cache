import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useQuery } from "@tanstack/react-query";
import { fetchPlans } from "@/services";
import { Skeleton } from "../ui/skeleton";

export default function Pricing() {
  const {
    data,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["plans"],
    queryFn: fetchPlans,
    staleTime: 1000 * 60 * 5,
    refetchOnWindowFocus: false,
  });

  if (isLoading) {
    return <PricingSkeleton />;
  }

  if (error) {
    return (
      <div className="text-center py-4 text-red-500">
        <p>Failed to load data!</p>
      </div>
    );
  }

  return (
    <div className="bg-background py-16 sm:py-24 relative overflow-hidden" id="pricing">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="bg-blue-50 dark:bg-neutral-900 absolute -top-1/4 -left-1/4 w-1/2 h-1/2 rounded-full"
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 45, 0],
          }}
          transition={{
            duration: 15,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        />
        <motion.div
          className="bg-blue-50 dark:bg-neutral-900 absolute -bottom-1/4 -right-1/4 w-1/2 h-1/2 rounded-full"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, -45, 0],
          }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-extrabold text-foreground sm:text-4xl">Simple, transparent pricing</h2>
          <p className="mt-4 text-xl text-muted-foreground">Choose the plan that's right for your business</p>
        </motion.div>
        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {data?.map((plan, index) => (
            <motion.div
              key={plan.name}
              className="border border-border rounded-lg shadow-sm divide-y divide-border"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, boxShadow: "0 10px 30px -15px rgba(0, 0, 0, 0.2)" }}
            >
              <div className="p-6">
                <h3 className="text-lg font-medium text-foreground">{plan.name}</h3>
                <p className="mt-4 text-3xl font-extrabold text-foreground">{plan.price}</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  {plan.name === "Enterprise" ? "Contact us for pricing" : "per month"}
                </p>
                <Button className="mt-6 w-full">{plan.name === "Enterprise" ? "Contact sales" : "Get started"}</Button>
              </div>
              <div className="px-6 pt-6 pb-8">
                <h4 className="text-sm font-medium text-foreground tracking-wide uppercase">What's included</h4>
                <ul className="mt-6 space-y-4">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start">
                      <div className="flex-shrink-0">
                        <Check className="h-6 w-6 text-green-500" aria-hidden="true" />
                      </div>
                      <p className="ml-3 text-base text-muted-foreground">{feature}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

function PricingSkeleton() {
  return (
    <div className="bg-background py-16 sm:py-24 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="bg-gray-200 dark:bg-neutral-800 absolute -top-1/4 -left-1/4 w-1/2 h-1/2 rounded-full"
          animate={{ scale: [1, 1.1, 1], rotate: [0, 45, 0] }}
          transition={{ duration: 15, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        />
        <motion.div
          className="bg-gray-200 dark:bg-neutral-800 absolute -bottom-1/4 -right-1/4 w-1/2 h-1/2 rounded-full"
          animate={{ scale: [1, 1.2, 1], rotate: [0, -45, 0] }}
          transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <Skeleton className="h-8 w-64 mx-auto" />
          <Skeleton className="mt-4 h-6 w-80 mx-auto" />
        </motion.div>
        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {[...Array(3)].map((_, index) => (
            <motion.div
              key={index}
              className="border border-border rounded-lg shadow-sm divide-y divide-border"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, boxShadow: "0 10px 30px -15px rgba(0, 0, 0, 0.2)" }}
            >
              <div className="p-6">
                <Skeleton className="h-6 w-32" />
                <Skeleton className="mt-4 h-10 w-24" />
                <Skeleton className="mt-1 h-4 w-40" />
                <Skeleton className="mt-6 h-10 w-full" />
              </div>
              <div className="px-6 pt-6 pb-8">
                <Skeleton className="h-4 w-40" />
                <div className="mt-6 space-y-4">
                  {[...Array(4)].map((_, i) => (
                    <div key={i} className="flex items-start space-x-3">
                      <Skeleton className="h-6 w-6 rounded-full" />
                      <Skeleton className="h-4 w-48" />
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
