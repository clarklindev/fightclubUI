    import { Badge, CodeBlock, Heading, Tabs } from '@fightclub/components';

    import Code from './Code.mdx';

    const BadgeExample = () => {
    const preview = <Badge>Hello</Badge>;

    return (
        <>
        <Heading variation="h1" size="level1" data-observable="true">
            Badge
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
                        <Code/>
                    </CodeBlock>
                </Tabs.Content>
            </Tabs.ContentGroup>
        </Tabs>
        </>
    );
    };

    export default BadgeExample;
