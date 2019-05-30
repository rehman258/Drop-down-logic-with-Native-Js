

// function fn(myelem){
// 	// let el = document.querySelectorAll(".myelem");
// 	// el.forEach(el)
// // 	console.log(this)

// 	this.name = function(){
// 		return "as"
// 	}
// }


// console.log(fn())	
// fn = {
// 	"s": myfunc=()=>{alert("daf")}
// }
// console.log(fn.s())
// fn.bind(myfunc);

// function ready(fn) {
//     console.log("adf")
//   if (!document.attachEvent ? document.readyState === "complete" : document.readyState !== "loading"){
//  console.log(fn())
//  } else {
    
//   }
// }

// let elems = document.querySelectorAll(".open_drop");
// 	for(const elem of elems){
// 		elem.style.display = "block"; 
// 	}
	function Use(main,second){
		let elem_1 = document.getElementsByClassName(main);
		let elem_2 = document.getElementsByClassName(second);
		for(let i = 0;i<elem_1.length;i++){
			elem_1[i].addEventListener("click",function(){
				for(let j = 0;j<elem_2.length;j++){
					elem_2[j].classList.remove("open_drop");
				}
				elem_2[i].classList.add("open_drop")
			})
		}
		document.addEventListener("click",function(e){
			if(e.target.className !== main){
				for(let j = 0;j<elem_2.length;j++){
					elem_2[j].classList.remove("open_drop");
				}
			}
		})
	}
	//  You can use any two element for drop down logical but be carefully drop be your main element side.
	//  You can change down name use but you need change up fucntion name  .
	Use("myelem1","myelem2")