import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Button({icon}) {
    // const classCss = `fas ${icon}`;

    return (
        <button>
            {/* <i className={classCss}></i> */}
            <FontAwesomeIcon icon={["fas", "volume-up"]} />
        </button>
    )
}

export default Button;