import { mkdir, copyFile } from 'fs/promises';
import { join } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export async function initCommand() {
  console.log("Initializing a new Crit project...");
  const critDir = join(process.cwd(), '.crit');
  await mkdir(critDir, { recursive: true });

  // Create subdirectories (Workflows and rules) 
  const workflowsDir = join(critDir, 'workflows');
  const rulesDir = join(critDir, 'rules');
  await mkdir(workflowsDir, { recursive: true });
  await mkdir(rulesDir, { recursive: true });

  // Copy default files
  const defaultDir = join(__dirname, '..', '..', 'default');
  
  try {
    // Copy default workflow.yaml to .crit/workflows/
    await copyFile(
      join(defaultDir, 'workflow.yaml'),
      join(workflowsDir, 'default.yaml')
    );
    console.log("Copied default workflow to .crit/workflows/default.yaml");
    
    // Copy default rules.yaml to .crit/rules/
    await copyFile(
      join(defaultDir, 'rules.yaml'),
      join(rulesDir, 'default.yaml')
    );
    console.log("Copied default rules to .crit/rules/default.yaml");
    
  } catch (error: any) {
    console.warn(`Warning: Could not copy default files: ${error.message}`);
  }

  console.log("Crit project initialized.");
}