import { Container, Title, Text } from '@mantine/core';

export default function OurStoryPage() {
    return (
        <Container fluid style={{ border: '1px solid rgb(228, 224, 217)', backgroundColor: 'rgb(249, 246, 241)' }}>
            <Container fluid p={20} style={{ border: '1px solid rgb(228, 224, 217)', maxWidth: '1200px', backgroundColor: 'white' }}>
                <Title order={1} mb="md">Our Story</Title>
                <Text c="dimmed" mb="md">
                    Discover the journey, mission, and vision behind Credstack.
                </Text>
                <Text mb="md">
                    I’ve spent more than a decade in the world of customer experience and SaaS, and if there’s one thing I’ve seen across industries, it’s this: when it comes to lending and financial services, documents run the show.
                </Text>
                <Text mb="md">
                    When I started working closely with financial institutions, I was surprised (and honestly, a bit shocked) at how much of the decision-making still depended on scattered PDFs, Excel sheets, scanned images, and hundreds of emails. Whether it was onboarding a borrower, running due diligence, or evaluating portfolios — the processes were painfully manual, error-prone, and slow.
                </Text>
                <Text mb="md">
                    At first, I thought this was just the way the industry worked — until I saw the frustration on the ground. Credit teams burning weekends reconciling loan statements. Risk teams stuck chasing missing documents. Sales teams losing business simply because files weren’t stitched together on time. The irony? These are the same companies entrusted with making billion-dollar lending decisions.
                </Text>
                <Text mb="md">
                    Around this time, I kept sharing my observations with Chaitanya, my long-time friend and engineering partner. Coming from an AI/ML background, he immediately recognized how much of this was a data problem disguised as an operations problem. One late night, over chai (and way too many Google Docs), we started mapping out how an AI-powered engine could automate the painful parts of financial due diligence — document classification, OCR, CIBIL checks, loan account analysis, fraud detection, the works.
                </Text>
                <Text mb="md">
                    The more we spoke to lenders, NBFCs, and fintechs, the clearer it became: everyone knew the problem, everyone hated it, but no one had built a scalable solution that could truly handle the complexity of BFSI documents. That was our “lightbulb” moment.
                </Text>
                <Text mb="md">
                    We decided to build Credstack — a platform that could take the chaos out of financial due diligence, and give institutions the speed, accuracy, and confidence they need to make lending decisions at scale.
                </Text>
                <Text mb="md">
                    Today, Credstack is more than just a product idea. With Sandeep, who has led high-growth sales teams from 0-to-1, and Sandipan, with his deep BFSI growth experience, we’ve built a team obsessed with reimagining how financial due diligence should work.
                </Text>
                <Text mb="md">
                    It’s still early days, but the conviction that started with a few late-night conversations has only gotten stronger. Financial institutions shouldn’t be drowning in documents when AI can do the heavy lifting. <br /><br />And that’s exactly what we’re here to solve.
                </Text>
            </Container>

        </Container>
    );
}
