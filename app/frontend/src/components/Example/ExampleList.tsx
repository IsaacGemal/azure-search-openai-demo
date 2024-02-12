import { Example } from "./Example";

import styles from "./Example.module.css";

const DEFAULT_EXAMPLES: string[] = [
    "What are the minimum width requirements for doorways in ADA-compliant buildings?",
    "How should parking spaces be designed to meet ADA standards?",
    "What are the ADA requirements for accessible routes within public spaces?"
];

const GPT4V_EXAMPLES: string[] = [
    "Explain the differences between Type A and Type B accessible dwelling units under the ADA.",
    "How do ADA standards apply to digital accessibility on websites and mobile applications?",
    "Can you outline the ADA guidelines for visual alarms in public accommodations?"
];

interface Props {
    onExampleClicked: (value: string) => void;
    useGPT4V?: boolean;
}

export const ExampleList = ({ onExampleClicked, useGPT4V }: Props) => {
    return (
        <ul className={styles.examplesNavList}>
            {(useGPT4V ? GPT4V_EXAMPLES : DEFAULT_EXAMPLES).map((question, i) => (
                <li key={i}>
                    <Example text={question} value={question} onClick={onExampleClicked} />
                </li>
            ))}
        </ul>
    );
};
