import Button from "./ui/Button";

function Control() {
    console.log('control');
    return (
        <div className="control">
            <Button icon="fa-volume-up"/>
            <Button icon="fa-cog"/>
        </div>
    )
}

export default Control;