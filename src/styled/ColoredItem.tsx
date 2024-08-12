import { faker } from "@faker-js/faker";

// Не меняется в задании
export const ColoredItem = ({
  children,
  width = "100%",
  onClick = () => {},
}: {
  children: React.ReactNode;
  width?: string;
  onClick?: () => void;
}) => {
  const color = faker.color.rgb();

  return (
    <div
      onClick={() => onClick()}
      style={{
        cursor: "pointer",
        display: "flex",
        gap: "20px",
        background: color,
        padding: "1rem",
        textAlign: "left",
        width,
      }}
    >
      {children}
    </div>
  );
};
