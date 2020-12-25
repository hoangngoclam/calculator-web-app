/* eslint-disable react/react-in-jsx-scope */
import { useState } from 'react';
export default function CalculatorPage() {
    const [inputVal] = useState('');
    return (
        <div className="cal-box">
            <div className="grid">
                <input type="text" className="grid-item grid-item-input" value={inputVal} />
                <button className="grid-item grid-item-clear" data-content="clear">
                    Clear
                </button>
                <button className="grid-item operation" data-content="/">
                    <i className="fas fa-divide"></i>
                </button>
                <button className="grid-item" data-content="7">
                    7
                </button>
                <button className="grid-item" data-content="8">
                    8
                </button>
                <button className="grid-item" data-content="9">
                    9
                </button>
                <button className="grid-item operation" data-content="-">
                    <i className="fas fa-minus"></i>
                </button>
                <button className="grid-item" data-content="4">
                    4
                </button>
                <button className="grid-item" data-content="5">
                    5
                </button>
                <button className="grid-item" data-content="6">
                    6
                </button>
                <button className="grid-item operation" data-content="+">
                    <i className="fas fa-plus"></i>
                </button>
                <button className="grid-item" data-content="1">
                    1
                </button>
                <button className="grid-item" data-content="2">
                    2
                </button>
                <button className="grid-item" data-content="3">
                    3
                </button>
                <button className="grid-item operation" data-content="=">
                    <i className="fas fa-equals"></i>
                </button>
            </div>
        </div>
    );
}
