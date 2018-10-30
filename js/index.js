var $ = document.querySelector.bind(document)
var mainLi = document.querySelectorAll('main>ul>li')
mainLi[0].onclick = function(){
	$('.recommend').style.display = "block"
	$('.rank').style.display = "none"
	$('.search').style.display = "none"
	mainLi[0].style.borderBottom = "solid 5px #31c27c"
	mainLi[1].style.borderBottom = "none"
	mainLi[2].style.borderBottom = "none"
}
mainLi[1].onclick = function(){
	$('.recommend').style.display = "none"
	$('.rank').style.display = "block"
	$('.search').style.display = "none"
	mainLi[1].style.borderBottom = "solid 5px #31c27c"
	mainLi[0].style.borderBottom = "none"
	mainLi[2].style.borderBottom = "none"
}
mainLi[2].onclick = function(){
	$('.recommend').style.display = "none"
	$('.rank').style.display = "none"
	$('.search').style.display = "block"
	mainLi[2].style.borderBottom = "solid 5px #31c27c"
	mainLi[1].style.borderBottom = "none"
	mainLi[0].style.borderBottom = "none"
}