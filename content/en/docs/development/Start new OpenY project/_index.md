---
title: Start new YMCA Website Services project
---

Here you can find instructions on how you can start a project based on the YMCA Website Services distribution.

## New project from scratch based on YMCA Website Services

To start a new project from scratch, you can use the [installation instructions](https://github.com/YCloudYUSA/yusaopeny-project#installation). These instructions will guide you through building your project and even setting up a development environment.

## Add YMCA Website Services to an existing Drupal 10 project

To add YMCA Website Services to an existing Drupal 10 project, you'll need to modify your `composer.json` file. Here's a step-by-step guide:

Please take a look at the full `composer.json` file below that you should eventually get.

<details>
  <summary><strong>Example composer.json (Drupal 10 + YMCA Website Services)</strong></summary>

```json
{
    "name": "drupal/drupal",
    "description": "Drupal is an open source content management platform powering millions of websites and applications.",
    "type": "project",
    "license": "GPL-2.0+",
    "require": {
        "composer/installers": "^1.9",
        "wikimedia/composer-merge-plugin": "~2.0",
        "YCloudYUSA/yusaopeny": "2.0.*",
        "cweagans/composer-patches": "^1.7"
    },
    "minimum-stability": "dev",
    "prefer-stable": true,
    "config": {
        "preferred-install": "dist",
        "sort-packages": true,
        "platform-check": false
    },
    "extra": {
        "drupal-scaffold": {
            "locations": {
                "web-root": "docroot/"
            }
        },
        "installer-types": [
            "drupal-module",
            "drupal-theme",
            "drupal-profile",
            "drupal-drush",
            "drupal-library",
            "drupal-core"
        ],
        "installer-paths": {
            "docroot/core": [
                "type:drupal-core"
            ],
            "docroot/libraries/{$name}": [
                "type:drupal-library"
            ],
            "docroot/modules/contrib/{$name}": [
                "type:drupal-module"
            ],
            "docroot/profiles/contrib/{$name}": [
                "type:drupal-profile"
            ],
            "docroot/themes/contrib/{$name}": [
                "type:drupal-theme"
            ],
            "docroot/drush/contrib/{$name}": [
                "type:drupal-drush"
            ],
            "docroot/modules/custom/{$name}": [
                "type:drupal-custom-module"
            ],
            "docroot/themes/custom/{$name}": [
                "type:drupal-custom-theme"
            ]
        },
        "enable-patching": true,
        "patchLevel": {
            "drupal/core": "-p2"
        }
    },
    "autoload": {
        "classmap": [
            "scripts/composer/ScriptHandler.php"
        ],
        "files": [
            "docroot/core/includes/bootstrap.inc"
        ]
    },
    "scripts": {
        "drupal-scaffold": "DrupalComposer\\DrupalScaffold::scaffold",
        "pre-install-cmd": [
            "DrupalComposer\\DrupalScaffold::preInstallCmd"
        ],
        "pre-update-cmd": [
            "DrupalComposer\\DrupalScaffold::preUpdateCmd"
        ],
        "post-install-cmd": [
            "DrupalComposer\\DrupalScaffold::postInstallCmd",
            "DrupalComposer\\DrupalScaffold::createRequiredFiles",
            "DrupalComposer\\DrupalScaffold::removePatchesDir",
            "DrupalComposer\\DrupalScaffold::removeVendorGitFolders"
        ],
        "post-update-cmd": [
            "DrupalComposer\\DrupalScaffold::postUpdateCmd",
            "DrupalComposer\\DrupalScaffold::createRequiredFiles",
            "DrupalComposer\\DrupalScaffold::removePatchesDir",
            "DrupalComposer\\DrupalScaffold::removeVendorGitFolders"
        ],
        "post-create-project-cmd": [
            "DrupalComposer\\DrupalScaffold::postCreateProjectCmd",
            "DrupalComposer\\DrupalScaffold::removePatchesDir",
            "DrupalComposer\\DrupalScaffold::removeVendorGitFolders"
        ],
        "remove-vendor-git-folders": [
            "bash scripts/remove_vendor_git_folders.sh || :"
        ]
    },
    "repositories": [
        {
            "type": "composer",
            "url": "https://packages.drupal.org/10"
        },
        {
            "type": "package",
            "package": {
                "name": "library-kenwheeler/slick",
                "version": "1.8.1",
                "type": "drupal-library",
                "source": {
                    "url": "https://github.com/kenwheeler/slick",
                    "type": "git",
                    "reference": "1.8.1"
                }
            }
        },
        {
            "type": "package",
            "package": {
                "name": "library-dinbror/blazy",
                "version": "1.10.3",
                "type": "drupal-library",
                "source": {
                    "url": "https://github.com/dinbror/blazy",
                    "type": "git",
                    "reference": "v1.10.3"
                }
            }
        },
        {
            "type": "package",
            "package": {
                "name": "library-gdsmith/jquery.easing",
                "version": "1.4.1",
                "type": "drupal-library",
                "source": {
                    "url": "https://github.com/gdsmith/jquery.easing",
                    "type": "git",
                    "reference": "1.4.1"
                }
            }
        },
        {
            "type": "package",
            "package": {
                "name": "library-enyo/dropzone",
                "version": "5.7.6",
                "type": "drupal-library",
                "source": {
                    "url": "https://github.com/enyo/dropzone",
                    "type": "git",
                    "reference": "v5.7.6"
                }
            }
        },
        {
            "type": "package",
            "package": {
                "name": "library-jaypan/jquery_colorpicker",
                "version": "1.0.1",
                "type": "drupal-library",
                "source": {
                    "url": "https://github.com/jaypan/jquery_colorpicker",
                    "type": "git",
                    "reference": "da978ae124c57817021b3166a31881876882f5f9"
                }
            }
        },
        {
            "type": "package",
            "package": {
                "name": "library-ckeditor/panelbutton",
                "version": "4.7.0",
                "type": "drupal-library",
                "dist": {
                    "url": "http://download.ckeditor.com/panelbutton/releases/panelbutton_4.7.0.zip",
                    "type": "zip"
                }
            }
        },
        {
            "type": "package",
            "package": {
                "name": "library-ckeditor/colorbutton",
                "version": "4.7.0",
                "type": "drupal-library",
                "dist": {
                    "url": "http://download.ckeditor.com/colorbutton/releases/colorbutton_4.7.0.zip",
                    "type": "zip"
                }
            }
        },
        {
            "type": "package",
            "package": {
                "name": "library-ckeditor/colordialog",
                "version": "4.7.0",
                "type": "drupal-library",
                "dist": {
                    "url": "http://download.ckeditor.com/colordialog/releases/colordialog_4.7.0.zip",
                    "type": "zip"
                }
            }
        },
        {
            "type": "package",
            "package": {
                "name": "library-ckeditor/glyphicons",
                "version": "2.2",
                "type": "drupal-library",
                "dist": {
                    "url": "http://download.ckeditor.com/glyphicons/releases/glyphicons_2.2.zip",
                    "type": "zip"
                }
            }
        }
    ]
}
```

</details>

1.  **Add YMCA Website Services as a dependency:**

    Add `"YCloudYUSA/yusaopeny": "2.0.*"` to the `require` section of your `composer.json`. This line specifies that you want to include the YMCA Website Services package, version 2.x, in your project.  See [example](https://github.com/YCloudYUSA/yusaopeny-project/blob/10.2.x/composer.json#L7).

2.  **Add required repositories:**

    Add all the necessary repositories, as [listed here](https://github.com/YCloudYUSA/yusaopeny-project/blob/10.2.x/composer.json#L31), to your `composer.json`. These repositories provide information about where to find the required libraries and packages.

3.  **Configure installer paths:**

    Add the installer paths configuration to your `composer.json`. This configuration tells Composer where to place different types of packages (modules, themes, etc.) within your Drupal installation. See [example](https://github.com/YCloudYUSA/yusaopeny-project/blob/10.2.x/composer.json#L165).

    *   If your `composer.json` is located **inside** the `docroot` directory, use the following:

        ```json
        "installer-paths": {
            "core": ["type:drupal-core"],
            "libraries/{$name}": ["type:drupal-library"],
            "modules/contrib/{$name}": ["type:drupal-module"],
            "profiles/contrib/{$name}": ["type:drupal-profile"],
            "themes/contrib/{$name}": ["type:drupal-theme"],
            "drush/contrib/{$name}": ["type:drupal-drush"],
            "modules/custom/{$name}": ["type:drupal-custom-module"],
            "themes/custom/{$name}": ["type:drupal-custom-theme"]
        }
        ```

    *   If your `composer.json` is located **outside** the `docroot` directory, use the following:

        ```json
        "installer-paths": {
            "docroot/core": ["type:drupal-core"],
            "docroot/libraries/{$name}": ["type:drupal-library"],
            "docroot/modules/contrib/{$name}": ["type:drupal-module"],
            "docroot/profiles/contrib/{$name}": ["type:drupal-profile"],
            "docroot/themes/contrib/{$name}": ["type:drupal-theme"],
            "docroot/drush/contrib/{$name}": ["type:drupal-drush"],
            "docroot/modules/custom/{$name}": ["type:drupal-custom-module"],
            "docroot/themes/custom/{$name}": ["type:drupal-custom-theme"]
        }
        ```

4.  **Enable Composer Patches:**

    Add `"cweagans/composer-patches": "^1.7"` to the `require` section of your `composer.json`. This allows you to apply patches to contributed modules and themes. See [example](https://github.com/YCloudYUSA/yusaopeny-project/blob/10.2.x/composer.json#L10).

5.  **Enable patching in extra section:**

    Add `"enable-patching": true` to the `extra` section in your `composer.json`. See [example](https://github.com/YCloudYUSA/yusaopeny-project/blob/10.2.x/composer.json#L173).

6.  **Disable Secure HTTP:**

    Add `"secure-http": false` to the `config` section in your `composer.json`. See [example](https://github.com/YCloudYUSA/yusaopeny-project/blob/10.2.x/composer.json#L177).

7.  **Clean up:**

    Remove the `composer.lock` file and the `vendor` directory from your project if they exist. This ensures that you're starting with a clean slate and that Composer will resolve all dependencies correctly.

8.  **Remove "replace" section:**

    Remove the `"replace"` section from your `composer.json` file.  This section is not typically needed and can sometimes cause conflicts.

9.  **(Optional) Clean up vendor Git folders:**

    If you keep the `vendor` directory in your Git repository, it's recommended to remove the `.git` folders inside modules and libraries. To do this:

    *   Add the cleaner script from the [YMCA Website Services composer package](https://github.com/YCloudYUSA/yusaopeny-project/blob/10.2.x/scripts/remove_vendor_git_folders.sh) to your project. You can copy and paste the script.
    *   [Adjust the folders](https://github.com/YCloudYUSA/yusaopeny-project/blob/10.2.x/scripts/remove_vendor_git_folders.sh#L4) that you want to clean up in the script.
    *   Execute the script in the `post-install-cmd` and `post-update-cmd` sections of your `composer.json`:

        ```json
        "post-install-cmd": [
            "bash scripts/remove_vendor_git_folders.sh || :"
        ],
        "post-update-cmd": [
            "bash scripts/remove_vendor_git_folders.sh || :"
        ]
        ```

10. **Run Composer Install:**

    Run `composer install` to install the YMCA Website Services and its dependencies.  This command reads your `composer.json` file and downloads the specified packages into the `vendor` directory.

# CIBox

In this section you can learn how to configure development environment and CI server using Open Source product [CIBox](https://github.com/cibox/cibox).

### Create project

1. Generate project based on [this quickstart](http://docs.cibox.tools/en/latest/Quickstart/#prepare-github-project)

2. Add YMCA Website Services to the project using (Add YMCA Website Services to already existing Drupal 10 project)

3. Init git and add initial commit

  ```bash
  cd OPENY_PROJECT
  git init
  git commit -m "Init YMCA Website Services project"
  git remote add origin git@github.com:NAMESPACE/PROJECT.git
  git push -u origin master
  ```
4. Spin up your local vagrant machine

  ```bash
  vagrant up --provision
  ```

5. Setup CI server for new project based on [CIBox documentation](https://github.com/cibox/cibox#provision-new-ci-server).

* Follow quick start starting from Jenkins Provisioning Step http://docs.cibox.tools/en/latest/Quickstart/#jenkins-provisioning (Here we will get PR builds and DEMO site (DEV environment) with credentials to it )
* Setup hosting STAGE environment (it should be a 1:1 copy of existing or expected hosting account for ability to provide performance testing there)
* Setup deployment plans for CI by reusing DEMO builder job

# Install YMCA Website Services on [DigitalOcean](http://bit.ly/cibox-digitalocean)

1. Create new Droplet using "One-click apps" image `Drupal 8.*.* on 14.04`
2. Login to server [via SSH](https://www.digitalocean.com/community/tutorials/how-to-connect-to-your-droplet-with-ssh) or [web console](https://www.digitalocean.com/community/tutorials/how-to-use-the-digitalocean-console-to-access-your-droplet)
3. Run command

  ```bash
  bash <(curl -s https://raw.githubusercontent.com/YCloudYUSA/yusaopeny/8.x-1.x/build/openy-digital-ocean.sh)
  ```
4. Open link(e.g. http://IP/core/install.php) from console output and finish YMCA Website Services installation

## Video tutorial
[![YMCA Website Services v1.0b - Install Tutorial](https://img.youtube.com/vi/RCvsLANsbm8/0.jpg)](https://youtu.be/RCvsLANsbm8)

## End to end installation
[![YMCA Website Services install - in 16 minutes end to end, no tutorial](https://img.youtube.com/vi/RT6kC38zgvo/0.jpg)](https://youtu.be/RT6kC38zgvo)
