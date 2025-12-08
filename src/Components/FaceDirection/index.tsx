import { useEffect, useRef, useState } from "react";
import styles from "./index.module.scss";

const directions = [
  { name: "up", angle: 0, img: "face-up.png" },
  { name: "up-right", angle: 45, img: "face-up-right.png" },
  { name: "right", angle: 90, img: "face-right.png" },
  { name: "down-right", angle: 135, img: "face-down-right.png" },
  { name: "down", angle: 180, img: "face-down.png" },
  { name: "down-left", angle: 225, img: "face-down-left.png" },
  { name: "left", angle: 270, img: "face-left.png" },
  { name: "up-left", angle: 315, img: "face-up-left.png" },
];

function getDirectionIndex(angle: number) {
  angle = (angle + 360) % 360;
  return Math.round(angle / 45) % 8;
}

const FRONT_IMG = "face-front.jpeg";

const FaceDirection = () => {
  const imgRef = useRef<HTMLDivElement>(null);
  const [img, setImg] = useState(directions[0].img);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    if (isHovering) {
      setImg(FRONT_IMG);
      return;
    }
    function handleMouseMove(e: MouseEvent) {
      if (!imgRef.current) return;
      const rect = imgRef.current.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = e.clientX - cx;
      const dy = cy - e.clientY;
      const angle = Math.atan2(dx, dy) * (180 / Math.PI);
      const idx = getDirectionIndex(angle);
      setImg(directions[idx].img);
    }
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [isHovering]);

  return (
    <div className={styles["face-direction"]}>
      <div
        className={styles["face-direction__img-wrapper"]}
        ref={imgRef}
        onMouseEnter={() => {
          setIsHovering(true);
          setImg(FRONT_IMG);
        }}
        onMouseLeave={() => setIsHovering(false)}
      >
        <img
          // src={`/src/assets/${img}`}
          src={`/${FRONT_IMG}`}
          alt={img}
          className={styles["face-direction__img"]}
        />
      </div>
    </div>
  );
};

export default FaceDirection;
