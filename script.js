// var navMenuAnchorTags=document.querySelectorAll('.nav-menu a');
// for(var i=0;i<navMenuAnchorTags.length;i++){
//     navMenuAnchorTags[i].addEventListener('click',function(event){
//         event.preventDefault();
//         var targetSectionID=this.textContent.trim().toLowerCase();
//         var targetSection=document.getElementById(targetSectionID);
//         console.log(targetSectionID);
//         var targetSectionCoordinate=targetSection.getBoundingClientRect();
//         console.log(targetSectionCoordinate);
//         var interval=setInterval(function(){
//             if(targetSectionCoordinate.top <= 0){
//                 clearInterval(interval);
//                 return;
//             }
//             window.scrollBy(0, 50);
//         }, 50);

//     });
// };


