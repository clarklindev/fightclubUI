    import { Avatar, CodeBlock, Heading, Icon, Tabs, Text, Layout } from '@fightclub/components';

    import Code from './code.mdx';
    import avatar1 from '@fightclub/assets/avatar1.png';

    const BadgeExample = () => {
    const preview = 
    <>
    <Layout>
    <Avatar size={"S"}>
        <img src={avatar1} alt="avatar"/>
    </Avatar>
    </Layout>
    <Layout>
    <Avatar size={"M"}>
    <img src={avatar1} alt="avatar"/>
    </Avatar>
    </Layout>
    <Layout>
    <Avatar size={"L"}>
        <img src={avatar1} alt="avatar"/>
    </Avatar>
    </Layout>
    </>;

    return (
        <>
        <Heading variation="h1" size="level1" data-observable="true">
            Avatar
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
        
        <Text>
            This is only the display portion of Avatar, on the backend, you have to be able to store the uploaded image somewhere (unique folder or reference associated with a user) then display it if user is logged-in</Text>
        </>
    );
    };

    export default BadgeExample;
