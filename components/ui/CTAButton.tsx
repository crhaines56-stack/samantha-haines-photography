import Link from "next/link";

interface CTAButtonProps {
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
  className?: string;
}

export default function CTAButton({
  href = "/contact",
  onClick,
  variant = "primary",
  size = "md",
  children,
  className = "",
}: CTAButtonProps) {
  const base =
    "inline-block font-sans tracking-[0.2em] uppercase transition-all duration-300 text-center";

  const sizes = {
    sm: "text-[10px] px-5 py-2.5",
    md: "text-[11px] px-8 py-3.5",
    lg: "text-[12px] px-10 py-4",
  };

  const variants = {
    primary: "bg-[#1a1a1a] text-[#faf9f7] hover:bg-[#8b6f5e]",
    secondary: "bg-[#c9b99a] text-[#1a1a1a] hover:bg-[#8b6f5e] hover:text-[#faf9f7]",
    ghost: "border border-[#1a1a1a] text-[#1a1a1a] hover:bg-[#1a1a1a] hover:text-[#faf9f7]",
  };

  const classes = `${base} ${sizes[size]} ${variants[variant]} ${className}`;

  if (onClick) {
    return (
      <button onClick={onClick} className={classes}>
        {children}
      </button>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
