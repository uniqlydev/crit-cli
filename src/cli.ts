#!/usr/bin/env node
import { Command } from "commander";
import { initCommand } from "./commands/init.js";
import { addCommand } from "./commands/add.js";
import { runCommand } from "./commands/run.js";
import { executeCommand } from "./commands/execute.js";

const program = new Command(); 

program
    .name("crit")
    .description("Crit CLI - A tool for managing Crit projects")
    .version("1.0.0");


// Init 
program
    .command("init")
    .description("Initialize a new Crit project")
    .action(initCommand);

program
    .command("add")
    .description("Add a new component to the Crit project")
    .argument("<type>", "Type of component to add (e.g., rule, workflow)")
    .action(addCommand);

program
    .command("run")
    .description("Run checks (skeleton)")
    .option("--all", "Run on all files", false)
    .option("--changed", "Run on changed files", false)
    .option("--workflow <path>", "Path to the workflow file", "crit/workflows/pr.yaml")
    .option("--format <fmt>" , "Output format: table | Sarif", "table")
    .action(runCommand);

program
    .command("execute [workflow]")
    .description("Execute a workflow from .crit/workflows/")
    .action(executeCommand);

program.parseAsync().catch(err => {
    console.error("Error executing command:", err);
    process.exit(1);
})
  