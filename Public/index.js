const dropdown 	= document.querySelector("#dropdown-icon")
const classes 	= document.querySelector("#menu").classList

dropdown.addEventListener('click',() => {
	classes.toggle("hidden")
})