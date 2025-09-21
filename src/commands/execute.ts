import { readFile, readdir } from 'fs/promises';
import { join, extname } from 'path';
import { exec } from 'child_process';
import { promisify } from 'util';
import { loadWorkflow } from '../core/workflow.js';
import type { Workflow } from '../core/workflow.js';

const execAsync = promisify(exec);

export async function executeCommand(workflowName?: string) {
  try {
    const workflowsDir = join(process.cwd(), '.crit', 'workflows');
    
    // If no workflow name provided, list available workflows
    if (!workflowName) {
      const files = await readdir(workflowsDir);
      const workflowFiles = files.filter(f => extname(f) === '.yaml' || extname(f) === '.yml');
      
      if (workflowFiles.length === 0) {
        console.log("No workflows found in .crit/workflows/");
        return;
      }
      
      console.log("Available workflows:");
      workflowFiles.forEach(file => {
        console.log(`  - ${file.replace(/\.(yaml|yml)$/, '')}`);
      });
      return;
    }
    
    // Load and execute the specified workflow
    const workflowPath = join(workflowsDir, `${workflowName}.yaml`);
    const workflow = await loadWorkflow(workflowPath);
    
    console.log(`Executing workflow: ${workflow.name}`);
    
    for (const step of workflow.steps) {
      console.log(`Running: ${step}`);
      await executeStep(step);
    }
    
    console.log("Workflow execution completed.");
    
  } catch (error) {
    console.error("Error executing workflow:", error);
    process.exit(1);
  }
}

async function executeStep(command: string): Promise<void> {
  try {
    console.log(`Executing: ${command}`);
    const { stdout, stderr } = await execAsync(command, { cwd: process.cwd() });
    
    if (stdout) {
      console.log(stdout);
    }
    if (stderr) {
      console.error(stderr);
    }
  } catch (error: any) {
    console.error(`Error executing command "${command}":`, error.message);
    throw error;
  }
}