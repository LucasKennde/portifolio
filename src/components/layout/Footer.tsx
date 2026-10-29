import piso from "../../assets/piso.png";
import { useNavigation } from "../../hooks/useNavigation";

export function Footer() {
  const { isWalking } = useNavigation();

  return (
    <footer className="h-25 w-full">
      <div
        className={`h-25 bg-repeat-x ${isWalking ? "animate-floor" : ""}`}
        style={{ backgroundImage: `url(${piso})` }}
      />
    </footer>
  );
}
