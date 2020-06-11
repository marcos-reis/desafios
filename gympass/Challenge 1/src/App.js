
import React,{ Component } from 'react';

const uname=(a)=>{

  function value  (){
    return this.element
  }
  let t = []
  let Obj = {value}


a.map( (i,b) =>{
  t[b] = Obj
  t[b].prototype = Obj
  t[b].element = i
    console.log(i)
  return null
})

console.log(t[1],t[0])

}
export default class Counter extends Component {

    render() {
    
        return (
            <>
                <div>
                   {uname([4,2])}
                </div>

            </>
        );
    }
}
