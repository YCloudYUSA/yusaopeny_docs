---
title: How to Contribute Large Features (Back-porting, etc.)
aliases:
  - /docs/wiki/how-to-contribute-large-features-into-open-y-backporting-etc/
---

These are our best practices for back-porting large features into YMCA Website Services and contributing code for others to use.

## Summary

*   The YMCA Website Services core team is excited for you to contribute to the distribution for all to benefit from.
*   There's a lot that goes into back-porting your code -- details below.
*   These steps ensure that we are collaborating while continuing to support YMCA Website Services in a sustainable way.

**Before getting started, please keep these notes in mind:**

*   Back-porting requires a process called **decoupling**. This is where your developers remove any hard-coded variables or dependencies on any integration from your website code. This makes it so the feature you wish to contribute can work for anyone in the broader Y movement. For example, anything that ties into Personify APIs will have to have those hooks replaced with Program Event Framework so that it could function with any CRM source that a YMCA Website Services site might be using.
*   This decoupled code will then need to be thoroughly tested to ensure it can function when not relying on any fee-based, or non-secure, technology or systems.
*   Once the decoupling is complete, the YMCA Website Services core team will need to review every line of code before it goes into the distribution. This helps us ensure it won't break any of the other elements of YMCA Website Services and that the code is 100% secure. As of 2019, we have 3 templates in YMCA Website Services that work across mobile, desktop, and tablet breakpoints. We need to test new features/code across all these templates to make sure nothing breaks across hundreds of possible use-case scenarios. For example, adding a schedule block to a location landing page using the Carnation template when on the mobile breakpoint that is powered by ActiveNet through Program Event Framework.
*   Once a feature is in YMCA Website Services, someone must pay to maintain that code. Does this code rely on any other Drupal modules to function? What if there's an update to that module? That update needs to be tested to ensure it's compatible with the now contributed code -- and if it breaks, we have to write new code to fix it. What if there's a security patch that involves the contributed code? We would then have to spend time applying the patch, etc.
*   Is your customization a new feature or a replacement of existing YMCA Website Services functionality/UX? We prefer you have A/B testing data demonstrating that your customization is a clear improvement over the current YMCA Website Services experience. There are many ways to run AB tests, so please consult with the YMCA Website Services team on your hypothesis, method, and success criteria to ensure that the results are valid and reliable.

**Steps/process for back-porting code into YMCA Website Services:**

> Most problems have at least a generic component and can be approached in part through abstracted development.

We recommend beginning development with an eye toward [these "abstracted" solutions](https://guidebook.civicactions.com/en/latest/practice-areas/engineering/drupal/most-important-decision-in-developing-a-drupal-site-contributed-vs-custom-development/) - providing configuration instead of static templates, solving root causes instead of using local patches, using generic language instead of client specific. This will ensure that your features are easily contributed even before you begin this process.

1.  **List each customization/feature you want to contribute to YMCA Website Services.**

    *   It's plausible that there are portions of your code that it might not make sense to put into the distribution, either because it's duplicative to what YMCA Website Services already has, or it might be cost-prohibitive to decouple it from your site for back-porting.
    *   In the early days of YMCA Website Services, we were less stringent on this step. As long as there was no security or technical risk, we accepted any contribution into YMCA Website Services. This led to some problems, such as having two nearly identical paragraph types called Blog Post and News Post. These were contributed by two different associations. This caused significant confusion until we resolved the issue with the launch YMCA Website Services 2.0, where we deprecated some of this functionality.
    *   You can start this process by taking an inventory of all your customizations that you feel would be good to backport into the distribution.
    *   The deliverable of this step is a list of each independent feature you think it makes sense to contribute.

2.  **Prioritize your list.**

    *   Rather than taking a 'big bang' approach of decoupling and back-porting all your features into YMCA Website Services, it is a better practice to take a bite-size approach, doing one feature at a time. This is because it can be cost and time intensive and expensive to decouple and backport your code into the distribution if you do it all at once.
    *   As a guide, YMCA Website Services uses the following prioritization method: Demand for feature (1 to 3 with 1 being high), Impact/Benefit to Ys and visitors (1 to 3 with 1 being high), Effort to build/maintain (1 to 5 with 1 being extra low and 5 being extra high). The sum of these gives us a 'score' for each feature which helps us prioritize.
    *   This will also help you decide how much, or little, of your back-porting you want to fund as you'll be able to get a clear feature-by-feature time estimate for the work required.
    *   The deliverable will be a prioritized list of the features that you want to contribute.

3.  **Share your prioritized list with YMCA Website Services, and align roadmaps before spending money and time on decoupling.**

    *   There might be things the YMCA Website Services core team is already working on that are similar and would be finished before your decoupling would be complete, thus it would not be the best use of your funds to decouple/backport that feature.
    *   There may be information the YMCA Website Services team has based on talks with other Ys that influence your demand/impact scores and thus your prioritization.
    *   We might have technical knowledge that influences your effort scores as well.
    *   *This is when timelines will start to emerge on when your code would be available in the distribution.*

4.  **Decoupling.**

    *   Your developers and the YMCA Website Services team should align on best practices for code. At a high level, our best practices can be reviewed here: [Development FAQ](../development-faq) and [How we release code](../how-we-release-openy-distribution-from-code-perspective).
    *   When you are ready to begin the decoupling work, let us know, and we can either talk to you here, on Slack, or even set up a conference call if it would be helpful for you.
    *   You would then start the technical/dev work of decoupling the features you wish to contribute back into YMCA Website Services.
    *   You would test all of your decoupled code to ensure that these features work when no longer reliant on any paid or non-secure technology or partners.
    *   The deliverable from this step is code that works in your own dev environment independent of any other Y association-specific code/technology.

5.  **Contribute your code: Pull Requests (PRs).**

    *   Code gets submitted to YMCA Website Services for review via a process called a Pull Request.
    *   The YMCA Website Services lead technical architect sees the code, runs it through automated test cases, and provides feedback on any issues detected that may cause problems for other portions of YMCA Website Services code.
    *   Sometimes, the feedback from the YMCA Website Services lead technical architect requires re-work from the original developer making the PR before the code is accepted into the distribution. See [Submitting Patches or Issues](#contribution) in the Blazy module documentation for tips on how to write good pull requests.

6.  **Release.**

    *   The features contributed from you get scheduled into one of the YMCA Website Services quarterly releases, and we make sure you get ample credit for your contribution.
    *   The movement then benefits from your contribution!

7.  **Ongoing improvements, maintenance, etc.**

    *   Over time, you might want to make enhancements to your site due to analytics or other data inputs from customers and team members.
    *   It would be great if you made those same enhancements to the now-decoupled version of your code that exists in YMCA Website Services if you feel it makes sense.
    *   If you identify any bugs or issues over time on your site that involve code that was contributed to YMCA Website Services, it would be awesome if you fixed that code and contributed the fix via a Pull request (step 5 above).

To be clear, all of the above is only required if you want to get your code into the core YMCA Website Services distribution. You could always take your code as is, ensure any PII or secure information is scrubbed, and post it to your own GitHub repository -- however it would be difficult for others to use this code as is if it hasn't at least been decoupled. If you take this approach, please be sure to remove references to OpenY from the code so that the GitHub search engine does not confuse it with core YMCA Website Services. Further, please review the YMCA Website Services license agreement to make sure you are in alignment with GPL and Open Source sharing best practices.
