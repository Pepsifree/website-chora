
window.addEventListener("load", function(){ //chargement de la page fini.
   

 L_banner = document.getElementsByClassName("leftBannerDescription "); //tableau bannière gauche
 R_banner = document.getElementsByClassName("rightBannerDescription"); //tableau bannière Droite
 L_strap = document.getElementsByClassName("leftstrap "); //tableau bannière gauche
 R_strap = document.getElementsByClassName("rightstrap"); //tableau bannière Droite
 

/*------------------------Ajouts des evenements-------------------------------*/
for (var i = 0; i <  L_banner.length; i++) {
/* Transition  L_banner.length*/
	console.log(L_banner[i].id)
	L_banner[i].style.transition = "all 2s";
	L_banner[i].style.marginLeft = "-62%";

	L_strap[i].addEventListener("mouseover",L_mouse);
}
for (var i = 0; i < R_banner.length; i++) 
	{
/* Transition */
	R_banner[i].style.transition = "all 2s";
	R_banner[i].style.marginRight = "-62%";
	R_strap[i].addEventListener("mouseover",R_mouse);
	}   
/*------------------------------------------------------------------------------------*/	





});




function L_mouse()
{
var element = event.target.parentNode.getElementsByClassName("leftBannerDescription")[0];
console.log(element);
element.style.transition="all 2s";
element.style.marginLeft ="-1%";

}

function R_mouse()
{
var element = event.target.parentNode.getElementsByClassName("rightBannerDescription")[0];
console.log(element);
element.style.transition="all 2s";
element.style.marginRight ="-1%";
}















