---
title: Linting
description: Ensure documentation quality with automated checks for broken links and Markdown syntax.
---

> lint•er : _noun_
>
> -   a machine for removing the short fibers from cotton seeds after ginning
> -   a static code analysis tool used to flag programming errors, bugs, stylistic errors, and suspicious constructs

## Checking for Broken Links

Using [linkcheck](https://github.com/filiph/linkcheck):

Linkcheck may encounter issues with `localhost`. To address this, consider setting up your local site to run through [Cloudflare Tunnel](https://developers.cloudflare.com/pages/how-to/preview-with-cloudflare-tunnel/) for reliable link checking.

Example usage:

```bash
linkcheck -e https://your-site-url.example.com/docs/some/path --skip-file .linkcheck_skip.txt
```

This command:

-   Runs the link checker on internal links (default).
-   Checks external links using the `-e` flag.
-   Utilizes a custom ignore file (`.linkcheck_skip.txt`) to skip specific links.

## Checking Markdown Syntax

Using [markdownlint](https://github.com/DavidAnson/markdownlint-cli2):

To lint and automatically fix Markdown files in a specific directory:

```bash
markdownlint-cli2 --fix "content/en/docs/user-documentation/paragraphs/**/*.md"
```

This command targets all Markdown files within the specified directory and its subdirectories, applying linting rules and automatically fixing violations where possible.
