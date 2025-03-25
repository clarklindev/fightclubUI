    import { Badge, CodeBlock, Heading, Layout, Tabs } from '@fightclub/components';

    import Code from './code.mdx';

    const BadgeExample = () => {
    const preview = 
        <>
            <Layout>
                <Badge intent="outline">Hello</Badge>
            </Layout>
            <Layout>
                <Badge intent="contained">Hello</Badge>
            </Layout>
        </>
    ;

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
