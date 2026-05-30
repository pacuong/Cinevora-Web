import { Button } from "antd";
import type { ReactNode } from "react";

interface ButtonProps {
  className?: string;
  name: string | ReactNode;
  onClick?: () => void;
  variant?: "link" | "default" | "outline" | "outlinePill" | "badge" | "circle";
  isLoading?: boolean;
  buttonType?: "button" | "submit" | "reset";
  disabled?: boolean;
}

const ButtonComponent = ({
  className,
  name,
  onClick,
  variant = "default",
  isLoading = false,
  buttonType = "button",
  disabled = false,
}: ButtonProps) => {
  const variantClassMap: Record<string, string> = {
    link: "background-link-btn",
    default: "background-btn",
    outline: "background-outline-btn",
    outlinePill: "background-outline-pill-btn",
    badge: "background-badge-btn",
    circle: "background-circle-btn",
  };

  return (
    <Button
      className={`main-btn ${variantClassMap[variant]} ${className}`}
      onClick={onClick}
      loading={isLoading}
      htmlType={buttonType}
      disabled={disabled}
    >
      {name}
    </Button>
  );
};

export default ButtonComponent;
