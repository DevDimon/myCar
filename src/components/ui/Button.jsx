function Button({icon, handle}) {
    const classCss = `fas ${icon}`;

    return (
        <button type="button" onClick={handle}>
            <i className={classCss}></i>
        </button>
    )
}

export default Button;