import React from 'react';
import { IOperationBtnCProps } from '../interfaces/IOperationBtnCProps';
export default function operationBtnComponent({ child: ChildComponent, dataContext, onBtnClick }: IOperationBtnCProps) {
    return (
        <div
            className="grid-item operation"
            data-content={dataContext}
            onClick={() => {
                onBtnClick(dataContext);
            }}
        >
            <ChildComponent />
        </div>
    );
}
