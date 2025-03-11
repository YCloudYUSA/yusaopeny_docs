---
title: "Logging"
---

Introduced in [Virtual Y 0.7](https://github.com/ymcatwincities/openy_gated_content/releases/tag/0.7), the "Open Y Virtual YMCA Log" module generates logs to record user behavior on Virtual Y sites. This module is part of the Open Y distribution and helps track user activity for reporting and analysis.

To enable the module, visit the **Extend** page on your site (`/admin/modules`), or ask your partner for assistance. You will need appropriate administrative permissions to access the Extend page.

Once the Log module is enabled, you'll see two new items in the **Virtual Y** menu (`/admin/config/virtual-ymca`):

## Logs

![A screenshot of the Virtual Y menu with Logs selected](./logging-logs.png)

The **Virtual Y Logs** page (`/admin/config/virtual-ymca/logs`) displays searchable and filterable individual user activity.  Additionally, individual log items can be removed. This allows administrators to review and manage user activity data directly within the Drupal interface.

Activities that are currently being tracked include:

- User login
- User views content

The Open Y team is working to add additional logging functionality as they gather requirements. If you have additional logging requirements for your reporting, please [contact the YMCA Website Services team](mailto:ycloud@ymca.net) with as much detail about your requirements as possible. Providing detailed use cases helps the team prioritize and implement relevant logging features.

## Logs Archives

As of [Virtual Y 1.1](https://github.com/ymcatwincities/openy_gated_content/releases/tag/1.1), log archives can be generated on-demand via **Virtual Y** > **Logs** > **Export Log Records** (`/admin/config/virtual-ymca/logs/export`).

While logging begins immediately, log archives (prior to VY 1.1) should appear on the first day of the month following when logging is enabled. Log archives will be available as `.gz` files. The archive stores data indefinitely, but the log itself then deletes out the previous month's info out of the database to start collecting data for the current month. This ensures efficient storage and data management.

-   **Virtual Y** > **Logs** stores ONLY the current month's records
-   **Virtual Y** > **Logs** > **Logs Archives** keeps monthly archives indefinitely, in the format `virtual-y-logs-2021-01.csv.gz`

The log archive process depends on Drupal's `cron` task, so you'll need to ensure that `cron` is running periodically on your site.  The `cron` task is responsible for automatically generating and archiving the log files.  You can configure cron jobs through your hosting provider or using Drupal modules like [Automated Cron](https://www.drupal.org/project/automated_cron).

To extract `.gz` files:

### Extracting files on Mac:

-   The system's Archive Utility should work to extract files. If that fails...
-   **(Easy)** Download [Keka](https://www.keka.io/en/) or [The Unarchiver](https://apps.apple.com/us/app/the-unarchiver/id425424353?mt=12), install, and use it to extract the file.
-   **(Advanced)** Open a Terminal window and navigate to the directory where the `.gz` file is located, then run `gunzip my_log_file.csv.gz`.  Replace `my_log_file.csv.gz` with the actual name of your archive file.

### Extracting files on Windows:

-   Use [7-Zip](https://www.7-zip.org/) to extract the `.gz` file.
-   Open the extracted `.csv` file with Excel or Google Sheets.

### Extracting files online (without a separate download):

-   Use http://online.b1.org/online

### Translating timestamps

Your Virtual Y log archives may include times in the `created` column that look like `1606839555`. This is a format called "Unix epoch time", representing the number of seconds that have elapsed since January 1, 1970 (midnight UTC/GMT). You can convert it to a human-readable format in a few ways:

-   Visit [https://www.epochconverter.com/](https://www.epochconverter.com/) and paste in a value
-   In Excel/Google Sheets:
    -   Use the formula `= (A1/86400) + DATE(1970,1,1)`, substituting the correct cell for `A1`.  This formula divides the Unix timestamp by the number of seconds in a day (86400) and adds it to the base date of January 1, 1970.
    -   Right-click on the column, select "Format Cells", then choose a Date format.  This will display the converted timestamp in a readable date and time format.
