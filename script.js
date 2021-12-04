const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");
canvas.width = 800;
canvas.height = 600;

function ball() {
    context.beginPath();
    context.arc(100, 100, 80, 0, Math.PI*2, false);
    context.closePath();
    context.strokeStyle = "#20bf6b";
    context.stroke();
    context.fillStyle='#26de81'
    context.fill()
}
 ball()





context.moveTo(300, 400)

context.beginPath()
context.lineTo(775, 190)
context.lineTo(600, 190)
context.lineTo(687.5, 20)
context.fillStyle='#fc5c65'
context.fill()


context.beginPath();
context.rect(20, 400, 160, 160);
context.closePath();
context.strokeStyle = "#a55eea";
context.stroke();
context.fillStyle='#45aaf2'
context.fill()

context.beginPath();
context.rect(600, 360, 160, 200);
context.closePath();
context.strokeStyle = "green";
context.stroke();
context.fillStyle='#a55eea'
context.fill()


