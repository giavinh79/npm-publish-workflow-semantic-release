# Example Yarn 3 Workspaces Monorepo + NPM Publish Workflow w/ Semantic Release

## Description

- Yarn 3 for package management and [Yarn Workspaces](https://classic.yarnpkg.com/lang/en/docs/workspaces/) for managing multiple packages
- [Semantic release](https://semantic-release.gitbook.io/semantic-release/) for versioning and release
  - `semantic-release` is written using the latest ECMAScript 2017 features, without transpilation which requires **Node version 18.0.0** or higher.
  - Versions must start at minimum 1.0.0 (for earlier versions look into docs for pre-releases)
  - Slack notifications (https://github.com/juliuscc/semantic-release-slack-bot)
- GitHub Actions for CI/CD
- tsup for transpilation and bundling

## Set Up

**Requires Yarn 3**

1. Use `npx semantic-release-cli setup` to automatically set up workflows for CI/CD, install dependencies and configs to your project, and even set up some auth permissions (i.e. npm token).

2. Create [GitHub personal access token (classic)](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token#personal-access-tokens-classic) - add all permissions for `repo` scope

3. Add the above token(s) to your [GitHub repository secrets](https://docs.github.com/en/actions/security-guides/encrypted-secrets#creating-encrypted-secrets-for-a-repository) (named as `GH_TOKEN`)

4. In GitHub repository settings, go to: actions -> general -> workflow permissions -> **Enable Read & Write Permissions**

## Typical Workflow for Versioning and Releases

**Contributor**:

1. Make desired changes to packages and open PR.
2. Make sure commits follow the [Angular Commit Message Conventions](https://github.com/angular/angular/blob/master/CONTRIBUTING.md#-commit-message-format). A tool like https://github.com/commitizen/cz-cli can help easily create these types of commits. More information can be found here: https://semantic-release.gitbook.io/semantic-release/#commit-message-format
3. (If using squash workflow) Upon merging PR, when squashing the commits make sure the revised commit message follows proper conventions: https://semantic-release.gitbook.io/semantic-release/support/troubleshooting#squashed-commits-are-ignored-by-semantic-release

- https://semantic-release.gitbook.io/semantic-release/#commit-message-format

**Release Process**:
The [default](https://semantic-release.gitbook.io/semantic-release/usage/plugins#plugins-declaration-and-execution-order) `semantic-release` release process out of the box uses the plugins below in the following order (configured in `.releaserc`):

```
"@semantic-release/commit-analyzer",
"@semantic-release/release-notes-generator",
"@semantic-release/npm",
"@semantic-release/github"
```

With this configuration `semantic-release` will:

- execute the verifyConditions implementation of @semantic-release/npm then @semantic-release/git
- execute the analyzeCommits implementation of @semantic-release/commit-analyzer
- execute the generateNotes implementation of @semantic-release/release-notes-generator
- execute the prepare implementation of @semantic-release/npm then @semantic-release/git
- execute the publish implementation of @semantic-release/npm

## Useful Tips

**Commands:**

- `npx semantic-release --dry-run` to get a [preview of the pending release ](https://semantic-release.gitbook.io/semantic-release/usage/configuration#dryrun)

**FAQ:**

- https://semantic-release.gitbook.io/semantic-release/support/faq
- For answering questions like `Can I run semantic-release on my local machine rather than on a CI server?`, `How can I revert a release?`, and `Can I exclude commits from the analysis?`

**Troubleshooting:** https://semantic-release.gitbook.io/semantic-release/support/troubleshooting
