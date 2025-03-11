---
title: Documentation Tips & Tricks
---

In addition to the [full documentation](/docs/contribution-guidelines/#useful-resources), here are some commonly used functions in the YMCA Website Services Docs.

## General Styles

The YMCA Website Services Docs are written in [Markdown](https://commonmark.org/help/), an easy-to read and write formatting language.

The old documentation made heavy use of horizontal rules `---` and slashes in headings `## // Heading`. We try to use standard Markdown headings for organization and remove those visual indicators for better accessibility.

Headings within a page should start with level 2 `##` in order to properly build the in-page navigation.

## Links

Internal links should be made with Markdown and page-relative locations, like:

```markdown
[Blocks](../user-documentation/blocks)
```

[Blocks](../user-documentation/blocks)

Internal paths with spaces in them should have their destination wrapped in angle brackets:

```markdown
[Accordion Desktop](<../assets/designs/lb/Accordion Desktop.png>)
```

[Accordion Desktop](<../assets/designs/lb/Accordion Desktop.png>)

## Images

Image files should be placed in the `/assets/img` directory at the root of the project, then they can be embedded with relative paths with Markdown:

```markdown
![Alt text](../../../../assets/img/llama.png "This is a caption.")
```

![A very adorable llama.](../../../../assets/img/llama.png "A very adorable llama")

Image processing is brought to you by [Hugo Markdown Render Hooks](https://gohugo.io/templates/render-hooks/), editable in `layouts/_default/_markup`.

## Video Embeds

Videos can be embedded using [Hugo's youtube or vimeo shortcodes](https://gohugo.io/content-management/shortcodes/#youtube). These take the form:

```go-html-template
{{</* youtube w7Ft2ymGmfc */>}}
{{</* vimeo 146022717 */>}}
```

To replace regular YouTube links with the shortcode you can use the following regex:

```go-html-template
find: https?:\/\/(?:www\.)?(?:youtube\.com|youtu\.be)\/(?:watch\?v=)?([\w-]+)
replacement: {{</* youtube w7Ft2ymGmfc */>}}
```

## Tips

The old community documentation used headings inside blockquotes (starting each line with `>`). That formatting doesn't work in Hugo. We can use [Docsy alerts](https://www.docsy.dev/docs/adding-content/shortcodes/#alert) instead.

```go-html-template
{{%/* alert title="Warning" */%}}
This is a warning.
{{%/* /alert */%}}
```

{{% alert title="Warning" %}}
This is a warning.
{{% /alert %}}

Although blockquotes sometimes work just as well:

```go-html-template
> **Warning:** This is a warning.
```

> **Warning:** This is a warning.

## Color Swatches

The `color` shortcode can be used to display a small color swatch after a hex or RGB color value. Pass one quoted value for hex, or three numeric values for RGB.

When using this shortcode in code fences, use `<>` instead of `%%` as the shortcode delimiter so that the code is [not further rendered](https://gohugo.io/content-management/shortcodes/#shortcodes-without-markdown).

````markdown
```scss
color: {{</* color "#a92b31" */>}}
color: {{</* color 169 43 49 */>}}
```
````

```scss
color: {{< color "#a92b31" >}}
color: {{< color 169 43 49 >}}
```

## Remote Markdown Files

The `include-remote-md` shortcode fetches a remote markdown file and includes it in the page. This happens only when your Docsy project is built, so future changes to the remote markdown file are only included when you rebuild your project. See [docsy#1739](https://github.com/google/docsy/pull/1739)

If the file has a H1 (`# ....`) instead of frontmatter, you can put the title line in as the second parameter and it will be removed instead. For example:

```go-html-template
{{%/* include-remote-md "https://raw.githubusercontent.com/google/docsy/main/README.md" "# Docsy" */%}}
```
