import { readFile } from 'fs/promises';
import { load } from 'js-yaml';

export type Workflow = {
    name: string;
    version: number;
    steps: string[];
}

export async function loadWorkflow(path: string): Promise<Workflow> {
    try {
        const fileContent = await readFile(path, 'utf-8');
        const parsed = load(fileContent) as Workflow;
        
        // Validate the workflow structure
        if (!parsed.name || !parsed.version || !Array.isArray(parsed.steps)) {
            throw new Error('Invalid workflow format. Required fields: name, version, steps');
        }
        
        return parsed;
    } catch (error: any) {
        throw new Error(`Failed to load workflow from ${path}: ${error.message}`);
    }
}
