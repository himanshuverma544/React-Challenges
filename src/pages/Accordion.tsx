import { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import "./../styles/accordion.css";


type AccordionItem = {
    title: string;
    content: string;
};

const items: AccordionItem[] = [
    {
        title: 'What is React?',
        content: 'React is a JavaScript library for building user interfaces.',
    },
    {
        title: 'Why use React?',
        content:
            'React is a favorite among developers because it makes building complex UIs easier and more efficient.',
    },
    {
        title: 'How do you use React?',
        content:
            'You use React by creating components, which are reusable pieces of UI that can be combined to build complex applications.',
    },
];


export default function Accordion() {
  
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const handleToggle = (index: number): void => {
        setActiveIndex((prev) => (prev === index ? null : index));
    };

    if (!items || items.length === 0) {
        return <p>No Items available</p>;
    }

    return (
        <div className="accordion" style={{ margin: '50px auto' }}>
            {items.map((item, index) => (
                <div className="accordion-item" key={index}>
                    <button
                        className="accordion-title"
                        aria-expanded={activeIndex === index}
                        onClick={() => handleToggle(index)}
                    >
                        {item.title}
                        {activeIndex === index ? (
                            <FaChevronUp style={{ float: 'right' }} />
                        ) : (
                            <FaChevronDown style={{ float: 'right' }} />
                        )}
                    </button>
                    {activeIndex === index && (
                        <div className="accordion-content">{item.content}</div>
                    )}
                </div>
            ))}
        </div>
    );
}