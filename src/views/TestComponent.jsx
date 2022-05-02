export default function HelloWorld() {

    function handleSubmit() {
        console.log("retrieve clicked")
    }

    return (
        <div><button onClick={handleSubmit}>Welcome Message</button></div>
    )
}