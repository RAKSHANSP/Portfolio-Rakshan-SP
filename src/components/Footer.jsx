import { ArrowUp } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-12 px-4 bg-card relative border-t border-border mt-12 pt-8 text-center">
  <p className="text-sm text-muted-foreground mb-4">
    &copy; {new Date().getFullYear()} RAKSHAN'S. All rights reserved.
  </p>
  <a
    href="#hero"
    className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors inline-block"
  >
    <ArrowUp size={20} />
  </a>
</footer>

  );
};
