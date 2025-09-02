import './BigButton.css';

function BigButton({icon, title, subtitle, onClick}) {
    const classCss = `fas ${icon}`;
    return (
        <div className='bigButton' onClick = {onClick}>
            <div className='bigButtonIcon'>
                <i className={classCss}></i>
            </div>
            <div className='bigTexts'>
                <div className='bigTextsTitle'>
                    {title}
                </div>
                <div className='bigTextsSubtitle'>
                    {subtitle}
                </div>
            </div>
        </div>
    );
}

export default BigButton;