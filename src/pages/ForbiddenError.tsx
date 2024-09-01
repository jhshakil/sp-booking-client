import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

const ForbiddenError = () => {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-sm text-center">
          <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-primary-600 dark:text-primary-500">
            403
          </h1>
          <p className="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl dark:text-white">
            Something's missing.
          </p>
          <p className="mb-4 text-lg font-light text-gray-500 dark:text-gray-400">
            Sorry, you are unauthorized. You'll find lots to explore on the home
            page.{" "}
          </p>
          <Link to={"/"} className={cn(buttonVariants())}>
            Back to Homepage
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ForbiddenError;
