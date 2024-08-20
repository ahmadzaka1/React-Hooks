

export default function RenderList() {
    const items = [
        {id: 1, name:'Item1'},
        {id: 2, name:'Item2'},
        {id: 3, name:'Item3'},
    ]
    return (
        <div>
            {items.map((item) => {
           return <h2 key={item.id}>{item.name}</h2>
            })}</div>
    )
}