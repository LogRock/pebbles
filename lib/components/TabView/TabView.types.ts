export interface TabViewProps {
  isActive?: boolean;
  disabled?: boolean;
  bgColor?: string;
  justify?:
    | "flex-start"
    | "center"
    | "flex-end"
    | "space-around"
    | "space-between";
}
