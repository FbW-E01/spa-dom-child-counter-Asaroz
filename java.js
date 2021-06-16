const wrapper = document.querySelector(".wrapper")
const allchildren = document.querySelectorAll(".wrapper *")

// console.log(wrapper.childNodes)
// const wrappChildren = wrapper.childNodes
// for(child in wrappChildren){
//     console.log(wrappChildren[child])
//     console.log("___")
// }
// console.log(wrappChildren.length)

console.log(mostClasses(wrapper.children))
function mostClasses(element){
    let nameArray = []
    let obj = {
        element: element[2],
        classNumber: nameArray
    }


    
    for(child in element){
        let testarray=[]
        let classname= element[child].className
        if(classname){testarray =classname.split(" ")}
        if(testarray.length> nameArray.length){
            console.log(testarray)
            nameArray = testarray
            obj.element = element
            obj.classNumber= nameArray.length
        }
    }
    return obj
}