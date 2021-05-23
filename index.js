const shout=(name)=>name.toUpperCase()
const whisper =(name)=>name.toLowerCase()
const logShout =(name)=>console.log(shout(name))
const logWhisper =(name)=>console.log(whisper(name))
const sayHiToGrandma=(name)=>{
    if(name===name.toLowerCase()){
       return "I can\'t hear you!"
    }
    else if (name=== "I love you, Grandma."){
       return "I love you, too."
    }
  return  'YES INDEED!' 
}