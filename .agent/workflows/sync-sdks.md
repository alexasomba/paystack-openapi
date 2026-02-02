---
description: How to synchronize SDKs to their dedicated repositories
---

This workflow explains how to maintain the split repositories for each SDK (PHP, Go, Python, Node, Axios, Browser).

### Prerequisites

- GitHub Personal Access Token (PAT) with `repo` or `contents:write` permissions.
- Repositories created on GitHub: `paystack-node`, `paystack-axios`, `paystack-browser`, `paystack-go`, `paystack-python`, and `paystack-php`.

### Steps

1. **Verify SDK Generation**
   Ensure the SDKs have been updated from the OpenAPI spec.

   ```bash
   pnpm sdk:others:generate
   ```

2. **Authenticate**
   Set the `GIT_TOKEN` environment variable in your terminal.

   ```bash
   export GIT_TOKEN=your_github_pat_here
   ```

3. **Synchronize All SDKs**
   Run the master synchronization script. This will iterate through all `sdks/` subdirectories, initialize git (if needed), commit changes, and push to the respective `master` branches.
   // turbo

   ```bash
   pnpm sdk:sync:all "Update SDKs with latest changes"
   ```

4. **Synchronize a Specific SDK**
   If you only want to push updates for one language:
   ```bash
   pnpm sdk:sync:node
   ```

### Troubleshooting

- **Permission Denied**: Check if your `GIT_TOKEN` is correct and has write access to the target repository.
- **Reference not found**: If a repository is empty, the script will push a new `master` branch. If the repository already has history, it will attempt to pull before pushing.
