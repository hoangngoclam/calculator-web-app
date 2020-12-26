/* eslint-disable react/react-in-jsx-scope */
import { useState, useEffect } from 'react';
import CCalculator from '../CCalculator';
import { OperationBtnComponent } from '../components';
import NumberBtnComponent from '../components/numberBtnComponent';

export default function CalculatorPage() {
    const [inputVal, setInputVal] = useState('0');
    const [cacheResult, setCacheResult] = useState(0);
    const [operation, setOperation] = useState('');
    useEffect(() => {
        document.onkeydown = onKeyDown;
    }, [inputVal, cacheResult, operation]);
    const onKeyDown = (_event: any) => {
        const key: string = _event.key;
        if (CCalculator.isAllowKeyInput(key)) {
            if (key === 'Backspace') {
                setInputVal((prevInput) => prevInput.slice(0, prevInput.length - 1));
                return;
            } else if (key === 'Enter') {
                onEqualBtnClick();
                return;
            } else if (key === '.') {
                onDotButtonClick();
                return;
            } else if (key === 'Delete') {
                onClearBtnClick();
                return;
            } else if (CCalculator.isOperationKeyInput(key)) {
                onOperationClick(key);
                return;
            }
            onNumBtnClick(key);
        }
    };
    const onNumBtnClick = (text: string) => {
        setInputVal((prev) => {
            prev += text;
            if (prev === '00') {
                return '0';
            }
            return parseFloat(prev).toString();
        });
    };
    const onDotButtonClick = () => {
        setInputVal((prev) => {
            if (prev.indexOf('.') === -1) {
                return (prev += '.');
            }
            return prev;
        });
    };

    const onClearBtnClick = () => {
        setInputVal('0');
        setCacheResult(0);
        setOperation('');
    };
    const onOperationClick = (operationInput: string) => {
        setOperation(operationInput);
        if (inputVal != '') {
            setCacheResult(parseFloat(inputVal));
        }
        if (operation && inputVal != '') {
            const result: number = CCalculator.getResultCal(cacheResult, operation, parseFloat(inputVal));
            setInputVal(() => result.toString());
            setCacheResult(result);
        }
        setInputVal('');
    };
    const onEqualBtnClick = () => {
        if (operation === '') return;
        const result: number = CCalculator.getResultCal(cacheResult, operation, parseFloat(inputVal));
        if (result) {
            setCacheResult(() => result);
            setInputVal(() => result.toString());
        } else {
            setCacheResult(0);
            setInputVal('0');
        }
        setOperation('');
    };
    return (
        <div className="cal-box">
            <div className="grid">
                <div className="operation-tip">
                    {cacheResult} {operation}
                </div>
                <input type="text" className="grid-item grid-item-input" value={inputVal} />
                <div className="grid-item grid-item-clear" data-content="clear" onClick={onClearBtnClick}>
                    Clear
                </div>
                <OperationBtnComponent
                    child={() => <i className="fas fa-divide"></i>}
                    dataContext="/"
                    onBtnClick={onOperationClick}
                />
                <NumberBtnComponent text="7" onClickFun={onNumBtnClick} />
                <NumberBtnComponent text="8" onClickFun={onNumBtnClick} />
                <NumberBtnComponent text="9" onClickFun={onNumBtnClick} />
                <OperationBtnComponent
                    child={() => <i className="fas fa-times"></i>}
                    dataContext="*"
                    onBtnClick={onOperationClick}
                />
                <NumberBtnComponent text="4" onClickFun={onNumBtnClick} />
                <NumberBtnComponent text="5" onClickFun={onNumBtnClick} />
                <NumberBtnComponent text="6" onClickFun={onNumBtnClick} />
                <OperationBtnComponent
                    child={() => <i className="fas fa-minus"></i>}
                    dataContext="-"
                    onBtnClick={onOperationClick}
                />
                <NumberBtnComponent text="1" onClickFun={onNumBtnClick} />
                <NumberBtnComponent text="2" onClickFun={onNumBtnClick} />
                <NumberBtnComponent text="3" onClickFun={onNumBtnClick} />
                <OperationBtnComponent
                    child={() => <i className="fas fa-plus"></i>}
                    dataContext="+"
                    onBtnClick={onOperationClick}
                />
                <NumberBtnComponent text="0" start={1} end={3} onClickFun={onNumBtnClick} />
                <NumberBtnComponent text="." onClickFun={onDotButtonClick} />
                <OperationBtnComponent
                    child={() => <i className="fas fa-equals"></i>}
                    dataContext="="
                    onBtnClick={onEqualBtnClick}
                />
            </div>
        </div>
    );
}
