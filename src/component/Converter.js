import './Converter.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
// STEP 1 : 取出useState這個方法
import { useState } from 'react';

const UnitControl = () => {
    return (
        <div className="unit-control">
            <div className="unit">Mbps</div>
            <span className="exchange-icon fa-layers fa-fw fa-stack">
                <FontAwesomeIcon icon={far.faCircle} size="2x" />
                <FontAwesomeIcon icon={fas.faExchangeAlt} size="1x" />
            </span>
            <div className="unit">MB/s</div>
        </div>
    )
}

const CardFooter = (props) => {
    // STEP 1 : 透過props接收父層輸入框資料
    const { inputValue } = props;
    // STEP 2: 定義 criteria 物件
    let criteria;
    // STEP 3: 根據 inputValue 改變要顯示的內容與顏色
    if (!inputValue) {
        criteria = {
            title: '---',
            backgroundColor: '#d3d8e2',
        };
    } else if (inputValue < 15) {
        criteria = {
            title: 'SLOW',
            backgroundColor: '#ee362d',
        };
    } else if (inputValue < 40) {
        criteria = {
            title: 'GOOD',
            backgroundColor: '#1b82f1',
        };
    } else if (inputValue >= 40) {
        criteria = {
            title: 'FAST',
            backgroundColor: '#13d569',
        };
    }
    return (
        <div className="card-footer" style={{ backgroundColor: criteria.backgroundColor }}>
            {criteria.title}
        </div>
    )
}

const Converter = () => {
    // STEP 2 : 定義 state ，取得預設值為 0 的 inputValue 和修改該狀態的 setInputValue 方法
    const [inputValue, setInputValue] = useState(0);
    // STEP 3 : 定義事件處理器
    const handleInputChange = (e) => {
        // STEP 3-1 :  取出使用者輸入的值
        const { value } = e.target;

        // STEP 3-2 : 將這個值設定到state 中
        setInputValue(value);
    }
    return (
        <div className="container">
            <div className="card-header">Network Speed Converter</div>
            <div className="card-body">
                <UnitControl />
                <div className="converter">
                    <div className="flex-1">
                        <div className="converter-title">Set</div>
                        {/* STEP 4 : 綁定事件處理器，並把value帶入  */}
                        <input type="number" onChange={handleInputChange} value={inputValue} className="input-number" min="0" />
                    </div>
                    <span className="angle-icon fa-2x" style={{ marginTop: '30px' }}>
                        <FontAwesomeIcon icon={fas.faAngleRight} size="1x" />
                    </span>
                    <div className="text-right flex-1">
                        <div className="converter-title">Show</div>
                        {/* STEP5 : 把使用者輸入的值顯示於畫面上*/}
                        <input type="text" className="input-number text-right" disabled value={inputValue / 8} />
                    </div>
                </div>
            </div>
            <CardFooter inputValue={inputValue} />
        </div>
    )
}

export default Converter;