var myCan = {
    drawCircle(can, bgcolor, acolor, percent, percolor, txt, txtcolor) {
        can.width = can.parentNode.offsetWidth;
        can.height = can.parentNode.offsetHeight;
        var context = can.getContext('2d');
        var r = (can.offsetWidth - 10) / 2;
        var angle = percent / 100 * 360;
        var fontS = can.offsetWidth / 70 * 14;
        var a = -90;
        var timer = null;
        //背景圆环
        context.save();
        context.translate(r + 5, r + 5);
        context.beginPath();
        context.strokeStyle = bgcolor;
        context.lineWidth = 10;
        context.arc(0, 0, r, 0, 2 * Math.PI);
        context.stroke();
        context.closePath();
        context.restore();

        //百分比圆环
        timer = setInterval(function() {
            a++;
            context.save();
            context.translate(r + 5, r + 5);
            context.beginPath();
            context.strokeStyle = acolor;
            context.lineWidth = 10;
            context.arc(0, 0, r, -90 * Math.PI / 180, a * Math.PI / 180);
            context.stroke();
            context.closePath();
            context.restore();
            if (a == parseInt(angle - 90)) {
                a = angle - 90;
                if (a > parseInt(angle - 90)) {
                    clearInterval(timer);
                }
            }
        }, 5)

        //字
        context.save();
        context.translate(r + 5, r + 5);
        context.beginPath();
        context.textBaseline = 'bottom';
        context.textAlign = 'center';
        context.fillStyle = percolor;
        context.font = `${fontS}px sans-serif`;
        context.fillText(percent + '%', 0, 0);
        context.stroke();
        context.closePath();

        context.beginPath();
        context.textBaseline = 'top';
        context.textAlign = 'center';
        context.fillStyle = txtcolor;
        context.font = `${fontS}px sans-serif`;
        context.fillText(txt, 0, 0);
        context.closePath();
        context.restore();
    }
}
