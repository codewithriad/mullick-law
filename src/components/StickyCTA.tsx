import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const StickyCTA = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 600);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={cn(
        "fixed z-40 transition-all duration-300",
        "bottom-6 right-6 lg:bottom-8 lg:right-8",
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
      )}
    >
      <Button
        asChild
        size="lg"
        className="bg-accent text-accent-foreground hover:bg-accent/90 shadow-xl font-body font-semibold rounded-full px-6"
      >
        <Link to="/contact">
          <Calendar className="h-5 w-5 mr-2" />
          Schedule Consultation
        </Link>
      </Button>
    </div>
  );
};

export default StickyCTA;
