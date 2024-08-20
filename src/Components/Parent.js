import { Child } from "./Child"

export const Parent = () => {
    const greetComponent = (childName) => {
        alert(`Hello from parent to ${childName}`)
    }
    return (
        <Child greetHandler={greetComponent}/>
    )
}