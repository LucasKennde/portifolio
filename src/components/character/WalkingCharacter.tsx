import { motion } from "motion/react";
import personIdle from "../../assets/person2.png";
import personWalk from "../../assets/megaWalk.gif";
import { useNavigation } from "../../hooks/useNavigation";

export function WalkingCharacter() {
  const { isWalking } = useNavigation();

  return (
    <div className="pointer-events-none fixed bottom-20 left-[7%] z-40">
      <motion.img
        src={isWalking ? personWalk : personIdle}
        alt="Personagem pixelado de Lucas Kennde"
        className="h-[15vh] w-auto xl:h-[20vh]"
        animate={isWalking ? { y: [0, -6, 0] } : { y: 0 }}
        transition={
          isWalking
            ? { duration: 0.3, repeat: Infinity, ease: "easeInOut" }
            : { duration: 0.2 }
        }
      />
    </div>
  );
}
