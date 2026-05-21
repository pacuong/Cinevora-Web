import { UserRole } from "../interfaces/adminUser";

type RoleBadgeProps = {
  role: UserRole;
};

const RoleBadge = ({ role }: RoleBadgeProps) => {
  const styleMap: Record<UserRole, string> = {
    admin: "bg-violet-100 text-violet-600",
    customer: "bg-blue-100 text-blue-600",
  };

  return (
    <span
      className={`inline-flex rounded-full px-3 py-1 text-sm font-medium ${styleMap[role]}`}
    >
      {role}
    </span>
  );
};

export default RoleBadge;