import { useState } from 'react';
import IconSet from './ReactIconsAccordion';

export default function ReactAccordion({ items }) {
    const [openIndex, setOpenIndex] = useState(null);

    return (
        <div className="accordion-container container">
            <div className="accordion">
                {items.slice().reverse().map((item, index) => (
                    <div key={item.id || index} className={`accordion-item ${openIndex === index ? 'active' : ''}`}>
                        <div
                            className="accordion-title"
                            onClick={() => setOpenIndex(openIndex === index ? null : index)}
                        >
                            <div className="accordion-icon">
                                {IconSet[item.iconName] && IconSet[item.iconName]}
                            </div>
                            <h3><span>{item.title}</span></h3>
                        </div>
                        {openIndex === index && (
                            <div
                                className="accordion-content"
                                dangerouslySetInnerHTML={{ __html: item.content.replace(/\n/g, "<br />") }}
                            />
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}