function Greet (props) {
   return (
   <>
   <h1>Good Morning {props.name}</h1>
   {props.children}
   </>
   );
}

export default Greet;