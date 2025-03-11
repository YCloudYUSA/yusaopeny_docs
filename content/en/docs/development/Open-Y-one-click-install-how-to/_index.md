```markdown
---
title: One-Click Install How-To
aliases:
  - /docs/wiki/open-y-one-click-install-how-to/
---

> This walkthrough is outdated and is in the process of being updated. Consider using the resources below instead.

*   A [video walkthrough of installing YMCA Website Services for tech novices](https://www.youtube.com/watch?v=nGyMJCwMsqM)
*   An overview of the [YMCA Website Services Sandboxes]({{< relref "Sandboxes" >}})

### Installing YMCA Website Services on a DigitalOcean Droplet

These steps outline how to install YMCA Website Services on a DigitalOcean droplet.

1.  **Create a new Ubuntu 16.04 LTS x64 droplet.** Choose a region close to your location.

    ![DigitalOcean Droplet Creation](https://user-images.githubusercontent.com/563412/44273919-6ffd8c80-a249-11e8-958b-3d7fbee6108d.png)

    Use a 2GB droplet or more powerful option, if needed. **Do not use the 1GB option** as YMCA Website Services may fail on it.

2.  **Log in to the droplet via SSH.**

3.  **Execute the one-click install script.**  Run the following command as the `root` user:

    ```sh
    curl -Ls http://bit.ly/initopeny | bash -s
    ```

    This command will run for approximately 10 minutes.

4.  **Access the installation URL.**  Upon completion, you should see a message similar to:

    ```
    Open http://127.0.0.1/core/install.php to proceed with OpenY installation.
    ```

5.  **Open the provided URL in your browser.**  Access this link from your *droplet's* IP address, not from this document.  Then proceed with the YMCA Website Services installation.

    For example, if your droplet's IP address is `192.0.2.0`, you would access `http://192.0.2.0/core/install.php`.

Enjoy!

---

**Installing the Latest Beta Release**

To install the latest beta release of YMCA Website Services 2.0, modify the command in step 3:

```sh
curl -Ls http://bit.ly/initopeny | bash -s beta
```

---

**Troubleshooting**

If you encounter any issues, please report them in the issue queue:

[https://github.com/YCloudYUSA/yusaopeny/issues](https://github.com/YCloudYUSA/yusaopeny/issues)
