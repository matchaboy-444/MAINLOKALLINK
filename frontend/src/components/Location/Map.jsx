import { useEffect, useRef } from "react";

export default function Map() {
  const canvref = useRef(null);

  useEffect(() => {
    const canvas = canvref.current;
    const ctx = canvas.getContext("2d");

    const scale = canvas.width / 1300;
    ctx.setTransform(scale, 0, 0, scale, 0, 0);

    ctx.font = "bold 40px Kanit";
    ctx.fillStyle = "black";
    ctx.fillText("Daang Bakal St.", 445, 190);

    ctx.font = "bold 20px Kanit";
    ctx.fillText("Kangkungan", 545, 260);
    ctx.fillText("Dagupan Ext.", 245, 270);
    ctx.fillText("G. Perfecto St.", 1000, 560);
    ctx.fillText("Lakandula High School", 40, 900);
    ctx.fillText("Barangay Hall", 330, 950);
    ctx.fillText("Gagalangin Fire Station 9", 550, 900);
    ctx.font = "bold 40px Kanit";
    ctx.fillText("Juan Luna St.", 450, 1150);
    //daang bakal
    ctx.beginPath();
    ctx.moveTo(10, 5);
    ctx.lineTo(1290, 5);
    ctx.lineTo(1290, 200);
    ctx.lineTo(10, 200);
    ctx.closePath();
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(1290, 200);
    ctx.lineTo(1290, 520);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(400, 200);
    ctx.lineTo(400, 250);
    ctx.lineTo(10, 250);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(450, 200);
    ctx.lineTo(450, 250);
    ctx.lineTo(510, 250);
    ctx.lineTo(510, 280);
    ctx.lineTo(450, 280);
    ctx.lineTo(450, 300);
    ctx.lineTo(480, 300);
    ctx.lineTo(480, 450);
    ctx.lineTo(510, 430);
    ctx.lineTo(510, 406);
    ctx.lineTo(550, 406);
    ctx.lineTo(570, 380);
    ctx.lineTo(570, 360);
    ctx.lineTo(550, 340);
    ctx.lineTo(510, 340);
    ctx.lineTo(510, 320);
    ctx.lineTo(600, 320);
    ctx.lineTo(600, 300);
    ctx.lineTo(630, 300);
    ctx.lineTo(630, 350);
    ctx.lineTo(720, 350);
    ctx.lineTo(720, 320);
    ctx.lineTo(670, 320);
    ctx.lineTo(670, 290);
    ctx.lineTo(730, 290);
    ctx.lineTo(730, 200);
    ctx.closePath();
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(840, 200);
    ctx.lineTo(840, 250);
    ctx.lineTo(890, 250);
    ctx.lineTo(890, 280);
    ctx.lineTo(840, 280);
    ctx.lineTo(840, 300);
    ctx.lineTo(890, 300);
    ctx.lineTo(890, 320);
    ctx.lineTo(840, 320);
    ctx.lineTo(840, 360);
    ctx.lineTo(890, 380);
    ctx.lineTo(890, 410);
    ctx.lineTo(960, 410);
    ctx.lineTo(960, 380);
    ctx.lineTo(990, 380);
    ctx.lineTo(990, 410);
    ctx.lineTo(1010, 410);
    ctx.lineTo(1010, 380);
    ctx.lineTo(1040, 380);
    ctx.lineTo(1040, 410);
    ctx.lineTo(1060, 430);
    ctx.lineTo(1090, 430);
    ctx.lineTo(1110, 410);
    ctx.lineTo(1210, 410);
    ctx.lineTo(1210, 200);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(10, 280);
    ctx.lineTo(400, 280);
    ctx.lineTo(400, 350);
    ctx.lineTo(10, 350);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(10, 380);
    ctx.lineTo(400, 380);
    ctx.lineTo(400, 410);
    ctx.lineTo(10, 410);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(10, 490);
    ctx.lineTo(400, 490);
    ctx.lineTo(400, 570);
    ctx.lineTo(10, 570);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(550, 506);
    ctx.lineTo(550, 720);
    ctx.lineTo(450, 720);
    ctx.lineTo(430, 700);
    ctx.lineTo(430, 650);
    ctx.lineTo(430, 620);
    ctx.lineTo(460, 556);
    ctx.lineTo(470, 536);
    ctx.lineTo(475, 526);
    ctx.lineTo(490, 506);
    ctx.closePath();
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(600, 600);
    ctx.lineTo(700, 600);
    ctx.lineTo(700, 700);
    ctx.lineTo(600, 700);
    ctx.closePath();
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(1210, 430);
    ctx.lineTo(1134, 430);
    ctx.lineTo(1110, 455);
    ctx.lineTo(1099, 460);
    ctx.lineTo(1079, 470);
    ctx.lineTo(1049, 470);
    ctx.lineTo(1030, 455);
    ctx.lineTo(1010, 430);
    ctx.lineTo(940, 430);
    ctx.lineTo(940, 520);
    ctx.lineTo(1210, 520);
    ctx.closePath();
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(710, 690);
    ctx.lineTo(870, 690);
    ctx.lineTo(870, 420);
    ctx.lineTo(710, 420);
    ctx.lineTo(710, 460);
    ctx.lineTo(670, 480);
    ctx.lineTo(655, 520);
    ctx.lineTo(660, 540);
    ctx.lineTo(710, 570);
    ctx.closePath();
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(1210, 1100);
    ctx.lineTo(1210, 600);
    ctx.lineTo(940, 600);
    ctx.lineTo(940, 680);
    ctx.lineTo(1070, 680);
    ctx.lineTo(1070, 1100);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(1050, 1100);
    ctx.lineTo(1050, 800);
    ctx.lineTo(1000, 800);
    ctx.lineTo(1000, 1100);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(990, 1100);
    ctx.lineTo(990, 800);
    ctx.lineTo(940, 800);
    ctx.lineTo(890, 780);
    ctx.lineTo(850, 780);
    ctx.lineTo(850, 1100);
    ctx.moveTo(890, 780);
    ctx.lineTo(890, 1100);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(310, 1100);
    ctx.lineTo(310, 850);
    ctx.lineTo(500, 850);
    ctx.lineTo(500, 1100);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(510, 1100);
    ctx.lineTo(510, 750);
    ctx.lineTo(800, 750);
    ctx.lineTo(800, 1100);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(10, 1100);
    ctx.lineTo(10, 700);
    ctx.lineTo(300, 700);
    ctx.lineTo(300, 1100);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(10, 1100);
    ctx.lineTo(1290, 1100);
    ctx.lineTo(1290, 570);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(10, 1200);
    ctx.lineTo(1290, 1200);
    ctx.stroke();
  });

  return (
    <div className="border-2 border-black p-2 w-full overflow-auto">
      <canvas
        ref={canvref}
        width={1200}
        height={1200}
        className="w-full h-auto bg-white"
      />
    </div>
  );
}
