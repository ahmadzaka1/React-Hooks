export const Child =(props)=> {
    return (
        <button onClick={() => props.greetHandler('Child')}>Click me</button>
    )
}