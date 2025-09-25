import fs from 'fs';
import path from 'path';
import TermsMarkdown from './TermsMarkdown.client';

export default function TermsPage() {
    const filePath = path.join(process.cwd(), 'src/app/legal/terms/terms.md');
    const markdown = fs.readFileSync(filePath, 'utf8');
    return <TermsMarkdown markdown={markdown} />;
}
