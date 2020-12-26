/* eslint-disable react/react-in-jsx-scope */
export default function NumberBtnComponent({ text, end, start, onClickFun }: INumberBtnCProps) {
    return (
        <div
            onClick={() => onClickFun(text)}
            className="grid-item "
            data-content={text}
            style={start && end ? { gridColumnEnd: end, gridColumnStart: start } : {}}
        >
            {text}
        </div>
    );
}
