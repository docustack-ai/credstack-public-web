import fs from 'fs';
import path from 'path';
import PrivacyMarkdown from './PrivacyMarkdown.client';

export default function PrivacyPage() {
    const filePath = path.join(process.cwd(), 'src/app/legal/privacy/privacy.md');
    const markdown = fs.readFileSync(filePath, 'utf8');
    return <PrivacyMarkdown markdown={markdown} />;
}
