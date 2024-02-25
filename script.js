//your JS code here. If required.
const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];
let arr = []
for(let str of bands){
  let temp = str.split(" ")
  for(let word of temp){
    if(word == "the" || word == "The" || word == "a" || word == "A" || word == "an" || word == "An"){
        continue
    } else {
      let obj = {
            param : word,
            val : str
        }
        arr.push(obj)
        break 
    }
  }
}
arr.sort((a,b) => {
  if(a.param > b.param){
    return -1
  } else {
    return 1
  }
})
let list = document.getElementById("list")
for(let i = arr.length-1; i >= 0; i--){
	let item = document.createElement("li")
	item.innerText = arr[i].val
	list.append(item)
}