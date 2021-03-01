import './Converter.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';

const Converter = () => {
    return (
        <div className="container">
            <div className="card-header">Network Speed Converter</div>
            <div className="card-body">
                <div className="unit-control">
                    <div className="unit">Mbps</div>
                    <span className="exchange-icon fa-layers fa-fw fa-stack">
                        <FontAwesomeIcon icon={far.faCircle} size="2x" />
                        <FontAwesomeIcon icon={fas.faExchangeAlt} size="1x" />
                    </span>
                    <div className="unit">MB/s</div>
                </div>
                <div className="converter">
                    <div className="flex-1">
                        <div className="converter-title">Set</div>
                        <input type="number" className="input-number" min="0" />
                    </div>
                    <span className="angle-icon fa-2x" style={{ marginTop: '30px' }}>
                        <FontAwesomeIcon icon={fas.faAngleRight} size="1x" />
                    </span>
                    <div className="text-right flex-1">
                        <div className="converter-title">Show</div>
                        <input type="text" className="input-number text-right" disabled value="125" />
                    </div>
                </div>
            </div>
            <div className="card-footer">FAST</div>
        </div>
    )
}

export default Converter;