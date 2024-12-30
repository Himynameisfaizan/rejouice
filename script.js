var pageone = document.querySelector(".page-two");
var cursor = document.querySelector(".cursor");


pageone.addEventListener("mousemove", function(dets){
    pagex= dets.x;
    pagey= dets.y;
   cursor.style.top=pagey+"px";
   cursor.style.left=pagex+"px";
//    console.log(dets); 
})