function FunctionClick() {
    //In java script its possible to define one function in another function
   function clickHandler(){
        console.log("Button clicked");

    }
    return (
        <div>
            <button onClick={clickHandler}>Click</button>
        </div>
    )
}

export default FunctionClick;