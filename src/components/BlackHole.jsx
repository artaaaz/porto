import { useEffect, useRef } from "react";
import "./BlackHole.css";

const BlackHole = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const h = container.offsetHeight;
    const w = container.offsetWidth;
    const cw = w;
    const ch = h;
    const maxorbit = 255;
    const centery = ch / 2;
    const centerx = cw / 2;
    const startTime = new Date().getTime();
    let currentTime = 0;
    const stars = [];
    let collapse = false;
    let expanse = false;
    let returning = false;

    // Buat canvas
    const canvas = document.createElement("canvas");
    canvas.width = cw;
    canvas.height = ch;
    container.appendChild(canvas);
    const context = canvas.getContext("2d");
    context.globalCompositeOperation = "multiply";

    function rotate(cx, cy, x, y, angle) {
      const radians = angle;
      const cos = Math.cos(radians);
      const sin = Math.sin(radians);
      const nx = cos * (x - cx) + sin * (y - cy) + cx;
      const ny = cos * (y - cy) - sin * (x - cx) + cy;
      return [nx, ny];
    }

    class Star {
      constructor() {
        const rands = [];
        rands.push(Math.random() * (maxorbit / 2) + 1);
        rands.push(Math.random() * (maxorbit / 2) + maxorbit);
        this.orbital = rands.reduce((p, c) => p + c, 0) / rands.length;
        this.x = centerx;
        this.y = centery + this.orbital;
        this.yOrigin = this.y;
        this.speed = (Math.floor(Math.random() * 2.5) + 1.5) * Math.PI / 180;
        this.rotation = 0;
        this.startRotation = (Math.floor(Math.random() * 360) + 1) * Math.PI / 180;
        this.id = stars.length;
        this.collapseBonus = Math.max(0, this.orbital - (maxorbit * 0.7));
        this.color = `rgba(255,255,255,${1 - this.orbital / 255})`;
        this.hoverPos = centery + (maxorbit / 2) + this.collapseBonus;
        this.expansePos = centery + (this.id % 100) * -10 + (Math.floor(Math.random() * 20) + 1);
        this.prevR = this.startRotation;
        this.prevX = this.x;
        this.prevY = this.y;
        this.originalY = this.yOrigin;
        stars.push(this);
      }

      draw() {
        if (!expanse && !returning) {
          this.rotation = this.startRotation + currentTime * this.speed;
          if (!collapse) {
            if (this.y > this.yOrigin) this.y -= 2.5;
            if (this.y < this.yOrigin - 4) this.y += (this.yOrigin - this.y) / 10;
          } else {
            if (this.y > this.hoverPos) this.y -= (this.hoverPos - this.y) / -5;
            if (this.y < this.hoverPos - 4) this.y += 2.5;
          }
        } else if (expanse && !returning) {
          this.rotation = this.startRotation + currentTime * (this.speed / 2);
          if (this.y > this.expansePos) this.y -= Math.floor(this.expansePos - this.y) / -80;
        } else if (returning) {
          this.rotation = this.startRotation + currentTime * this.speed;
          if (Math.abs(this.y - this.originalY) > 2) {
            this.y += (this.originalY - this.y) / 50;
          } else {
            this.y = this.originalY;
            this.yOrigin = this.originalY;
          }
        }

        context.save();
        context.fillStyle = this.color;
        context.strokeStyle = this.color;
        context.beginPath();
        const oldPos = rotate(centerx, centery, this.prevX, this.prevY, -this.prevR);
        context.moveTo(oldPos[0], oldPos[1]);
        context.translate(centerx, centery);
        context.rotate(this.rotation);
        context.translate(-centerx, -centery);
        context.lineTo(this.x, this.y);
        context.stroke();
        context.restore();

        this.prevR = this.rotation;
        this.prevX = this.x;
        this.prevY = this.y;
      }
    }

    const centerHover = container.querySelector(".centerHover");

    centerHover.addEventListener("click", function () {
      collapse = false;
      expanse = true;
      returning = false;
      this.classList.add("open");

      setTimeout(() => {
        expanse = false;
        returning = true;
        setTimeout(() => {
          returning = false;
          this.classList.remove("open");
        }, 8000);
      }, 25000);
    });

    centerHover.addEventListener("mouseover", () => {
      if (!expanse) collapse = true;
    });

    centerHover.addEventListener("mouseout", () => {
      if (!expanse) collapse = false;
    });

    function loop() {
      const now = new Date().getTime();
      currentTime = (now - startTime) / 50;
      context.fillStyle = "rgba(25,25,25,0.2)";
      context.fillRect(0, 0, cw, ch);
      for (let i = 0; i < stars.length; i++) stars[i].draw();
      requestAnimationFrame(loop);
    }

    function init() {
      context.fillStyle = "rgba(25,25,25,1)";
      context.fillRect(0, 0, cw, ch);
      for (let i = 0; i < 2500; i++) new Star();
      loop();
    }

    init();

    return () => {
      container.innerHTML = ""; // Cleanup saat komponen unmount
    };
  }, []);

  return (
    <div id="blackhole" ref={containerRef}>
      <div className="centerHover">
        <span>ENTER</span>
      </div>
    </div>
  );
};

export default BlackHole;
