function drawLine(a){
        var canvas = document.getElementById("can1");
        var ctx = canvas.getContext("2d");      // works without this line in chrome
        
    
        if (a == 1){
           ctx.clearRect(0,0,300,200); 
        }
        else {
            // add style
            ctx.shadowBlur = 20;
            
            ctx.shadowColor = "black"; 
            ctx.strokeStyle = "blue";
            ctx.shadowOffsetX = -30;
            ctx.shadowOffsetY = 30;
            
            ctx.moveTo(0,0);       // jumps to
            ctx.lineTo(300,200);   // draw to
        
            // create multiple lines
            // endpoints can be off the canvas
            ctx.moveTo(300,0);
            ctx.lineTo(0,200);
        
            ctx.closePath();
            // draw lines listed above
            ctx.stroke();
            
        }
}