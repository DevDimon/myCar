import { useState } from "react";
import Button from "./ui/Button";

function Control() {
    const [isSound, setIsSound] = useState(true);

    const handleIsSound = () => {
        console.log('kakak')
        setIsSound(!isSound);
    }


    return (
        <div className="control">
            <Button icon={isSound ? 'fa-volume-up' : 'fa-volume-mute'} handle={handleIsSound}/>
            <Button icon="fa-cog"/>
        </div>
    )
}

export default Control;