---
title: Linting
description: As with code, it's good practice to run automated checks on our docs too.
---

> lint•er : _noun_
> 
> - a machine for removing the short fibers from cotton seeds after ginning
> - a static code analysis tool used to flag programming errors, bugs, stylistic errors and suspicious constructs

## Checking for broken links

Using [linkcheck](https://github.com/filiph/linkcheck):

Linkcheck has some issues with localhost that we're working on resolving. Until then, you can set up your local site to run through [Cloudflare Tunnel](https://developers.cloudflare.com/pages/how-to/preview-with-cloudflare-tunnel/) and then run it.

- `linkcheck -e https://your-site-url.example.com/docs/some/path --skip-file .linkcheck_skip.txt` - run the linkchecker on internal (default) and external (`-e`) links with our custom ignore file (`--skip-file`).

## Checking markdown

Using [markdownlint](https://github.com/DavidAnson/markdownlint-cli2):

- `markdownlint-cli2 --fix "content/en/docs/user-documentation/paragraphs/**/*.md"` - lint and fix the Paragraphs directory
