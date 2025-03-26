import { useRef, useState } from 'react';

import { Layout, Heading, Tabs, CodeBlock } from '@fightclub/components';
import { InputOtp } from '@fightclub/components';

import Code from './code.mdx';

const InputOtpExample = () => {
    const [savedData, setSavedData] = useState('');
    const [passwordVisible, setPasswordVisible] = useState(false); //password input
    const ref = useRef<HTMLInputElement | null>(null); //input search

    const preview = (
        <>
            <InputOtp length={6}dashPositions={[2,5]}/>
        </>
    );

    return (
        <>
            <Heading variation="h1" size="level2" data-observable="true">
                Input
            </Heading>

            <Tabs>
                <Tabs.TriggerGroup>
                <Tabs.Trigger data-tab="0">PREVIEW</Tabs.Trigger>
                <Tabs.Trigger data-tab="1">CODE</Tabs.Trigger>
                </Tabs.TriggerGroup>
                <Tabs.ContentGroup>
                <Tabs.Content data-tab="0">{preview}</Tabs.Content>
                <Tabs.Content data-tab="1">
                    <CodeBlock>
                        <Code />
                    </CodeBlock>
                </Tabs.Content>
                </Tabs.ContentGroup>
            </Tabs>
        </>
    );
};

export default InputOtpExample;
