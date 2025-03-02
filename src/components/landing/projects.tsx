import { motion } from "framer-motion";
import { stats } from "@/seeds/projects";

export default function Projects() {
  return (
    <section className="bg-blue-50 dark:bg-neutral-900 relative overflow-hidden">
      <motion.div
        className="hidden sm:block absolute top-10 left-10 bg-blue-200 dark:bg-gray-600 rounded-full h-32 w-32 opacity-60"
        animate={{
          y: [0, 20, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />

      <motion.div
        className="hidden sm:block absolute bottom-10 right-10 bg-blue-200 dark:bg-gray-600 rounded-full h-24 w-24 opacity-60"
        animate={{
          y: [0, -20, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          repeatType: "reverse",
          delay: 1
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl mb-4 leading-8 font-extrabold tracking-tight text-foreground sm:text-4xl">
            Over <span className="text-primary">150+</span> completed projects and still counting
          </h2>
          <p className="max-w-2xl mx-auto text-xl text-muted-foreground">
            We've helped businesses of all sizes transform their operations with Salesforce.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="bg-white dark:bg-primary rounded-full p-8 shadow-custom flex flex-col items-center justify-center text-center"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <motion.span
                className="text-3xl md:text-4xl font-bold text-primary dark:text-white mb-2"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
              >
                {stat.number}
              </motion.span>
              <span className="text-base">{stat.label}</span>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="bg-white dark:bg-background rounded-xl shadow-custom p-8 relative overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-xl font-semibold mb-6">Our Implementation Process</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-primary text-white rounded-full h-8 w-8 flex items-center justify-center flex-shrink-0 mt-1">1</div>
                  <div className="ml-4">
                    <h4 className="font-semibold text-lg">Discovery</h4>
                    <p>Understanding your business needs and goals</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-primary text-white rounded-full h-8 w-8 flex items-center justify-center flex-shrink-0 mt-1">2</div>
                  <div className="ml-4">
                    <h4 className="font-semibold text-lg">Planning</h4>
                    <p>Creating a roadmap for implementation</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-primary text-white rounded-full h-8 w-8 flex items-center justify-center flex-shrink-0 mt-1">3</div>
                  <div className="ml-4">
                    <h4 className="font-semibold text-lg">Implementation</h4>
                    <p>Executing the plan with precision</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-primary text-white rounded-full h-8 w-8 flex items-center justify-center flex-shrink-0 mt-1">4</div>
                  <div className="ml-4">
                    <h4 className="font-semibold text-lg">Support</h4>
                    <p>Ongoing maintenance and optimization</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="Implementation Process"
                className="rounded-lg shadow-md"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
