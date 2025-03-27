# YMCA Website Services Docs

This repository stores documentation of the YMCA Website Services ecosystem that could be [read here](https://ds-docs.y.org/)

[Docsy][] is a [Hugo theme module][] for technical documentation sites, providing easy
site navigation, structure, and more. This **YMCA Website Services Docs Project** uses the
Docsy theme to serve documentation for the [YMCA Website Services](https://ds.ymca.org/) distribution.

You can find detailed theme instructions in the [Docsy user guide][].


## Working with this repo

To contribute to this repo:

[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/YCloudYUSA/yusaopeny_docs)

OR (the old-fashioned way)...

1. Fork this repo if you're not a maintainer.

2. Clone the repo, being sure to include the submodules:

```bash
git clone https://github.com/YCloudYUSA/yusaopeny_docs.git
```

You can now edit your own versions of the site’s source files.

If you want to do SCSS edits and want to publish these, you need to install `PostCSS`

```bash
npm install
```

## Running the website locally

Building and running the site locally requires a recent `extended` version of [Hugo](https://gohugo.io).
You can find out more about how to install Hugo for your environment in our
[Getting started](https://www.docsy.dev/docs/getting-started/#prerequisites-and-installation) guide.

Once you've made your working copy of the site repo, from the repo root folder, run [hugo server](https://gohugo.io/commands/hugo_server/):

```
hugo server
```

## Running a container locally

You can run openy_docs inside a [Docker](https://docs.docker.com/)
container, the container runs with a volume bound to the `openy_docs`
folder. This approach doesn't require you to install any dependencies other
than [Docker Desktop](https://www.docker.com/products/docker-desktop) on
Windows and Mac, and [Docker Compose](https://docs.docker.com/compose/install/)
on Linux.

1. Build the docker image

   ```bash
   docker-compose build
   ```

1. Run the built image

   ```bash
   docker-compose up
   ```

   > NOTE: You can run both commands at once with `docker-compose up --build`.

1. Verify that the service is working.

   Open your web browser and type `http://localhost:1313` in your navigation bar,
   This opens a local instance of the YMCA Website Services Docs homepage. You can now make
   changes to the YMCA Website Services Docs and those changes will immediately show up in your
   browser after you save.

### Cleanup

To stop Docker Compose, on your terminal window, press **Ctrl + C**.

To remove the produced images run:

```console
docker-compose rm
```
For more information see the [Docker Compose
documentation](https://docs.docker.com/compose/gettingstarted/).

## Troubleshooting

As you run the website locally, you may run into the following error:

```
➜ hugo server

INFO 2021/01/21 21:07:55 Using config file:
Building sites … INFO 2021/01/21 21:07:55 syncing static files to /
Built in 288 ms
Error: Error building site: TOCSS: failed to transform "scss/main.scss" (text/x-scss): resource "scss/scss/main.scss_9fadf33d895a46083cdd64396b57ef68" not found in file cache
```

This error occurs if you have not installed the extended version of Hugo.
See this [section](https://www.docsy.dev/docs/get-started/docsy-as-module/installation-prerequisites/#install-hugo) of the user guide for instructions on how to install Hugo.

Or you may encounter the following error:

```
➜ hugo server
Error: failed to download modules: binary with name "go" not found
```

This error occurs if you have not installed the `go` programming language on your system.
See this [section](https://www.docsy.dev/docs/get-started/docsy-as-module/installation-prerequisites/#install-go-language) of the user guide for instructions on how to install `go`.

[alternate dashboard]: https://app.netlify.com/sites/goldydocs/deploys
[deploys]: https://app.netlify.com/sites/docsy-example/deploys
[Docsy user guide]: https://docsy.dev/docs
[Docsy]: https://github.com/google/docsy
[example.docsy.dev]: https://example.docsy.dev
[Hugo theme module]: https://gohugo.io/hugo-modules/use-modules/#use-a-module-for-a-theme
[Netlify]: https://netlify.com
