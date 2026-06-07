import { useEffect } from "react";
import type { ReactNode } from "react";
import leaf1 from "../assets/img/leaf1.png";
import leaf2 from "../assets/img/leaf2.png";
import leaf3 from "../assets/img/leaf3.png";
import leaf4 from "../assets/img/leaf4.png";
import leaf5 from "../assets/img/leaf5.png";
import leaf6 from "../assets/img/leaf6.png";

type FlowerEffectProps = {
  children: ReactNode;
};

function FlowerEffect({ children }: FlowerEffectProps) {
  useEffect(() => {
const createFlower = (e: MouseEvent) => {
  // Ripple أخضر
  const ripple = document.createElement("div");

  ripple.style.position = "fixed";
  ripple.style.left = `${e.clientX}px`;
  ripple.style.top = `${e.clientY}px`;
  ripple.style.width = "20px";
  ripple.style.height = "20px";
  ripple.style.border = "3px solid rgba(120,255,120,0.8)";
  ripple.style.borderRadius = "50%";
  ripple.style.pointerEvents = "none";
  ripple.style.zIndex = "9999";
  ripple.style.transform = "translate(-50%, -50%)";

  document.body.appendChild(ripple);

  let rippleSize = 20;
  let rippleOpacity = 1;

  const animateRipple = () => {
    rippleSize += 6;
    rippleOpacity -= 0.03;

    ripple.style.width = `${rippleSize}px`;
    ripple.style.height = `${rippleSize}px`;
    ripple.style.opacity = rippleOpacity.toString();

    if (rippleOpacity > 0) {
      requestAnimationFrame(animateRipple);
    } else {
      ripple.remove();
    }
  };

  animateRipple();

  // أوراق نبات
const leaves = [leaf1, leaf2, leaf3, leaf4, leaf5, leaf6];

for (let i = 0; i < 8; i++) {
  const leaf = document.createElement("div");

 leaf.style.position = "fixed";
leaf.style.left = `${e.clientX}px`;
leaf.style.top = `${e.clientY}px`;
leaf.style.pointerEvents = "none";
leaf.style.zIndex = "9999";

  const size = 20 + Math.random() * 20;

  const img = document.createElement("img");
  img.src = leaves[Math.floor(Math.random() * leaves.length)];
  img.style.width = `${size}px`;
  img.style.height = `${size}px`;

 leaf.appendChild(img);
document.body.appendChild(leaf);

  const angle = (Math.PI * 2 * i) / 8;
  const speed = 2 + Math.random() * 2;

  let x = 0;
  let y = 0;
  let opacity = 1;
  let rotation = Math.random() * 360;

  const animateLeaf = () => {
    x += Math.cos(angle) * speed;
    y += Math.sin(angle) * speed - 1;

    rotation += 3;
    opacity -= 0.015;

    leaf.style.transform = `
      translate(${x}px, ${y}px)
      rotate(${rotation}deg)
    `;

    leaf.style.opacity = opacity.toString();

    if (opacity > 0) {
      requestAnimationFrame(animateLeaf);
    } else {
      leaf.remove();
    }
  };

  animateLeaf();
}
};
    window.addEventListener("click", createFlower);

    return () => {
      window.removeEventListener("click", createFlower);
    };
  }, []);

  return <>{children}</>;
}

export default FlowerEffect;