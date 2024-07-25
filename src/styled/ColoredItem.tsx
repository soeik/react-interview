import { faker } from "@faker-js/faker";

// Не меняется в задании
export const ColoredItem = ({
  children,
  width = "200px",
}: {
  children: React.ReactNode;
  width?: string;
}) => {
  const color = faker.color.rgb();

  return (
    <div
      style={{
        cursor: "pointer",
        background: color,
        padding: "1rem",
        textAlign: "center",
        width,
      }}
    >
      {children}
    </div>
  );
};
