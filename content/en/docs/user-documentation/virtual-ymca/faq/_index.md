---
title: "FAQs"
weight: 6
---

For up-to-the-minute conversations and info on Virtual Y and its content, join us in the YUSA Slack. [Request access to Slack](mailto:ycloud@ymca.net)

For even more Virtual Y FAQs, [check out Y-USA’s post.](https://ds.ymca.org/frequently-asked-questions)

## Evaluating VY

*   How do I learn the basics?
    *   [Demo Recording](https://youtu.be/Ae_R6Q0ojqs)
        *   [1.2 VY Update Video](https://www.youtube.com/watch?v=YD6RKnZIvtw)
        *   Virtual Y Features overview video
    *   Read through the FAQ completely - there’s a ton of great info here based on questions from Ys!

### I’m in with VY

*   Once you’ve [viewed the demo](https://youtu.be/Ae_R6Q0ojqs) and [slide deck](https://public.3.basecamp.com/p/BDNvZLtTBw3rjRXCnGVF9FUH), here’s what we suggest:
    *   Join the [#virtual_ymca](https://yusaslackinstance.slack.com/archives/C03ENDNMNQH) Slack channel where you can talk with other Y associations, the YMCA Website Services team, and partners on how to quickly get your Virtual Y experience launched.
    *   Not on Slack? [Request access](mailto:ycloud@ymca.net).
    *   Contact your developer partner or one of our [featured partners](https://ds.ymca.org/partners).
    *   If you didn’t find the answer (or the droids) you were looking for, [let us know](https://ds.ymca.org/get-more-information) and we’ll point you in the right direction
*   Can I see a live example?
    *   Yes. Please [contact us](https://ds.ymca.org/get-more-information) and we can provide you with links and information.
*   Can I see a demo?
    *   Yes. In this [Recording of the 7/16 Virtual Y Meet-up](https://youtu.be/Ae_R6Q0ojqs), Paige and David demo Virtual Y. You can also test drive it yourself in the [Virtual Y Sandbox](../../../development/sandboxes/#virtual-y-sandboxes)
*   How much will it cost?
    *   The Virtual Y code is free, but using it is not. Your costs come with having a developer configure Virtual Y as well as from hosting. Time estimate: <30 hours if you stick close to the default implementation and don’t make customizations. The more you deviate, the higher the cost. Costs will include:
        *   Implementation
        *   CRM SSO integration
        *   Domain name and hosting
        *   Training and support (will vary based on team’s comfort working with Drupal)

### I’m not on YMCA Website Services

*   Can I use it if I’m not on YMCA Website Services? Yes!
    *   Our website is built in WordPress. Will Virtual YMCA integrate with WordPress?
        *   Virtual Y is built on YMCA Website Services (Drupal). You would build a stand-alone instance of Virtual Y (see agency partner next steps) that could be linked to from your current site. You can work with an agency of your choice or talk with one of our core partners if your current partner does not develop on Drupal. Time estimate is <30 hours if you stick close to the distribution and don’t customize.
    *   What is my next step for Virtual Y if I’m not on YMCA Website Services?
        *   Have a conversation with your current developer or contact one of our featured partners. You may work with your current web developer if they know Drupal. If not, one of our partners or Y-USA will likely be more economical.
    *   How does my internal developer or agency use Virtual Y?
        *   Here are the Agency Partner/Internal Developer Steps:
            *   Get the code and analyze the readme files and [other documentation in GitHub](https://github.com/YCloudYUSA/yusaopeny_gated_content)
            *   Follow the [technical documentation in GitHub](https://github.com/YCloudYUSA/yusaopeny_gated_content/tree/master/modules/openy_gc_auth/modules/openy_gc_auth_custom)
            *   Watch the installation [walkthrough video](https://www.youtube.com/playlist?list=PL_QVggMcFfKZbY1kXOmChB_rQz2PAJGLM) (4 and 5)
            *   Join the [#virtual_ymca](https://yusaslackinstance.slack.com/archives/C03ENDNMNQH) Slack channel for troubleshooting
    *   How do I add Virtual Y to my main website’s domain?
        *   Ys who don’t have Open Y for their association’s main site can install a standalone Virtual Y site and put on their web address using [a subdomain](https://www.godaddy.com/help/what-is-a-subdomain-296).
        *   Example: `virtual.ymcaname.org` would point to your Virtual Y site. To your members and other website users, it would appear to be part of your site.
*   Where do I ask questions?
    *   Slack [#virtual_ymca](https://yusaslackinstance.slack.com/archives/C03ENDNMNQH) channel
    *   [YMCA Website Services monthly calls](https://ds.ymca.org/get-more-information)
*   Can I try it?
    *   Yes! You can use it yourself in the [Sandbox](../../../development/sandboxes/#virtual-y-sandboxes)
    *   The login is the same as for the standard YMCA Website Services sandboxes so [let us know](https://ds.ymca.org/get-more-information) if you need that information.

### Committed to VY - Initial Technical Set-Up

*   I already have an YMCA Website Services site, do I need to upgrade to get Virtual Y?
    *   Nope, unless you’re more than a couple of upgrades behind. Our incredible developer team established a structure to allow Ys to obtain Virtual Y without undergoing a full site upgrade, saving both time and $$$. If it has been 12+ months since your last upgrade, we recommend you proceed to keep your site current with the latest features and security. This will reduce future upgrade costs (it’s more expensive to update a site that is multiple versions behind) and help prepare you for Drupal 9, which was released in February 2021.
*   [Drupal CMS](https://www.youtube.com/watch?v=2hyLCBanX30&list=PL_QVggMcFfKbWXjK0wtdCAslI8osKbaga&index=2) (Video)
*   [Software requirements](../software-requirements)
*   There’s not much here for technical documentation. What’s up?
    *   Most of the technical conversations take place on Slack in [#virtual_ymca](https://yusaslackinstance.slack.com/archives/C03ENDNMNQH) and [#developers](https://yusaslackinstance.slack.com/archives/C03E6SQQ0Q5)
*   Implementation
    *   Watch the [installation walkthrough video](https://www.youtube.com/playlist?list=PL_QVggMcFfKZbY1kXOmChB_rQz2PAJGLM)
    *   Get the code and analyze the readme files and other [documentation in GitHub](https://github.com/YCloudYUSA/yusaopeny_gated_content)
    *   Follow the [technical documentation in GitHub](https://github.com/YCloudYUSA/yusaopeny_gated_content/tree/master/modules/openy_gc_auth/modules/openy_gc_auth_custom)
    *   [Go Live Check List](../go-live)
*   Which CRMs is Virtual Y compatible with?
    *   Personify
    *   [Daxko](../authentication-providers/daxko-barcode)
    *   CSV authentication available for ActiveNet and other CRMs
    *   Avocado (Salesforce)
    *   Y-USA’s Nationwide Membership database
    *   [ReClique Core](../authentication-providers/reclique-sso)
    *   If your CRM is not listed, we have a workaround solution where you can upload a CSV file of your active members’ email addresses into your Virtual Y site to grant your Virtual Y visitors access to your content. As long as you can export a basic spreadsheet of your active members, your data is likely compatible with Virtual Y.
*   Will there be impacts to the domain?
    *   There should not be any impact from your domain if you already use YMCA Website Services. If you do not use YMCA Website Services, you can create a subdomain of your choosing, such as `virtualy.yourassociationname.org` where `virtualy` is the subdomain.
*   What Web Browsers are compatible with Virtual Y?
    *   Virtual Y supports the most recent versions of all modern web browsers such as [Edge](https://www.microsoft.com/en-us/windows/microsoft-edge), [Firefox](http://www.mozilla.com/firefox/upgrade.html), [Chrome](http://www.google.com/chrome), [Safari](http://www.apple.com/safari/), and [Opera](http://www.opera.com/)
    *   Internet Explorer 11 and earlier are not supported due to the inability of that browser to play videos from services such as [https://youtube.com](https://youtube.com/). Here is [YouTube’s official statement](https://support.google.com/youtube/answer/175292?hl=en) on not supporting Internet Explorer.
*   [User Activity Logs Documentation](../logging)
*   [Setting up Google Analytics for Virtual Y](https://ycloud.y.org/sites/virtual.y.org/files/2020-08/Virtual-Y-8-Google-Analytics.pdf) (web)

### Committed to VY - Content Editors

*   Does Virtual Y come with content?
    *   There is demo content for you to test with, but you need to create and post your own content via the platforms mentioned in the next question. Some Ys have shared their content for all to use.
*   Which platforms can I use to host my content for Virtual Y?
    *   Virtual Y works\* with:
        *   YouTube - hosted and livestream
        *   Vimeo - hosted and livestream
        *   Zoom - livestream
        *   Zoom, GoToMeeting and Teams - video conferences
        *   Blogs - any content you post

    *   \*Note: “Works with” means technically functional. Each video provider service, such as YouTube, manages its own terms of use, which will guide what’s okay and what’s not.
*   For Vimeo, is a specific account level needed to host videos to stream/pass through Virtual Y?
    *   Many associations have been buying the Premium level to get access to unlimited livestreaming. Again, the YMCA Website Services Team has no control over Vimeo’s terms of use, and Vimeo’s terms of use are subject to change at any point without prior notice.
*   Can we keep our YouTube videos unlisted on our channel but still have them play in our Virtual Y?
    *   Yes.
*   Can we use Facebook video links?
    *   No. Due to restrictions/limitations enforced by Facebook, private videos or videos from a private group cannot be embedded on an external (non-Facebook) site. This means the only option would be to use publicly-facing Facebook Live video within Virtual Y, which can be seen by anyone on Facebook, not just your members. This weakens the case for paying for exclusive access to Virtual Y as a member, and YMCA associations were not interested in YMCA Website Services pursuing this type of Facebook integration.
*   Can I host Les Mills classes on our Y’s YouTube channel?
    *   Unfortunately, Les Mills licensing does not cover recording the class for rebroadcasting.
*   Can we use Y360 videos?
    *   Y360 videos are owned exclusively by Y360 and then licensed by Ys. A Y would need to obtain explicit permission from them for usage within Virtual Y. Additionally, YMCA Website Services would first have to build a new integration to accept those videos as on-demand content, because Y360 uses a video hosting service other than YouTube or Vimeo.
*   Music Licensing
    *   How does music licensing work with this platform?
        *   Music licensing copyrights and restrictions originate with the video platform used (e.g., YouTube, Vimeo) so you need to follow those guidelines. Be very careful to investigate whether the music you use within your branches is OK on livestream workouts.
    *   Is YouTube strict about licensing?
        *   YES. Do not put your Y at risk.
*   How do I learn the basics of content editing:
    *   [Virtual Y Basics - Content Management How To](https://www.youtube.com/watch?v=Ae_R6Q0ojqs)
    *   [Virtual Y Tutorials](https://www.youtube.com/playlist?list=PL_QVggMcFfKbWXjK0wtdCAslI8osKbaga): (videos)
        *   Features Overview
        *   Drupal CMS Backend Overview
        *   Managing Taxonomies (lists)
        *   Video Management
        *   Live Streams Management
        *   Online Meetings
        *   Blog Post Management
        *   How to Install Cachet Font for YMCA Website Services
    *   [Content editing tutorials](../building-blocks)
*   Editing your content categories listings via Drupal taxonomies
    *   [Video](https://www.youtube.com/watch?v=2hyLCBanX30&list=PL_QVggMcFfKbWXjK0wtdCAslI8osKbaga&index=2)
    *   [Documentation](https://ycloud.y.org/sites/virtual.y.org/files/2020-08/Virtual-Y-3-Change-Site-Taxonomy.pdf)
*   Adding new content to VY:
    *   Add a New On Demand Video:
        *   [Video](https://www.youtube.com/watch?v=wrVbQA25IQU&list=PL_QVggMcFfKbWXjK0wtdCAslI8osKbaga&index=4)
        *   [Documentation](https://ycloud.y.org/sites/virtual.y.org/files/2020-08/Virtual-Y-4-Add-blog-content-on-demand-videos-livestreams-or-meetings-content.pdf)
    *   [Add New Virtual Event](https://www.youtube.com/watch?v=XLluB8EdVAc&list=PL_QVggMcFfKbWXjK0wtdCAslI8osKbaga&index=6) (video)
    *   [Add a new blog post](https://www.youtube.com/watch?v=IBvVhHdpkDs&list=PL_QVggMcFfKbWXjK0wtdCAslI8osKbaga&index=7) (video)
    *   [Add a new live stream](https://www.youtube.com/watch?v=nsCtzkeCz84&list=PL_QVggMcFfKbWXjK0wtdCAslI8osKbaga&index=5) (video)
*   [Image Guidelines](../image-guidelines)
*   Setting up your Virtual Y
    *   [Y North Set Up](https://youtu.be/Rz1NgtEUA00) (video)
    *   [Y North Gear Guide](https://www.ymcanorth.org/live-streaming-gear-guide) (web)
    *   [Setting up your Virtual Y with Akron YMCA](https://youtu.be/uH_EoK67J5s) (video)
    *   [How Western North Carolina set up their VY experience](https://www.youtube.com/watch?v=KlS9Dxn3T8w&feature=youtu.be) (video)
    *   [Southeast Ventura approach to VY](https://www.youtube.com/watch?v=ukhUDhGZNp0&t=352s&ab_channel=OpenY%20) (video)
*   Virtual Y Experience Map & Rollout Plan
    *   [Video of the meetup](https://www.youtube.com/watch?v=wKq1drQQ538&feature=youtu.be) with Austin and West Cook (video)
    *   [Y North set up](https://drive.google.com/drive/folders/17JrSpIlZ50AygJRq0xZQ_73-aVksyVWs?usp=sharing) (slide deck)
    *   [West Cook’s Virtual Y Plan](https://drive.google.com/file/d/1XvgsA7B47EBU1x4LTBGrbp8thSbHU9F8/view?usp=sharing) (slide deck)
    *   [Austin’s Virtual Y Experience Map](https://drive.google.com/file/d/1tX2xFZPcj25aWvAMKdS1e8GDURYEkTue/view?usp=sharing) (slide deck)

## Live Streaming

*   Want to ask questions and connect with the community about live-streaming?
*   [Live Streaming & Video Meetup](https://www.youtube.com/watch?v=nEUqg3l0-Ak) (video)
*   [Live Streaming 101](https://www.youtube.com/watch?v=h2M7M3c2fuI) (video)
*   [The YMCA Live Streaming Fitness Studio](https://www.youtube.com/watch?v=JoE7C4EJupc) (video)
*   I’m a live-streaming novice. How do I learn about it?
    *   We’ve got your back. It’s technically possible to do a reasonably good stream with just a smartphone camera. Some associations have opted to invest in more professional technology.
    *   [Livestreaming Gear Guide](https://www.ymcamn.org/live-streaming-gear-guide) (web)

## Shared Content

*   [Getting started](../shared-content)
*   More to come on this in the near future!

## Y-USA’s Role

*   I just heard Y-USA is building a Virtual Y platform. What if I’m already building this with a developer?
    *   Virtual Y is open source software built by the YMCA Website Services. Because this software is open source, it is free for any YMCA to download and use. The Y-USA’s Y Cloud platform uses the Virtual Y module as a plug-and-play standalone micro-site that YMCA Website Services created. Y-USA’s Y Cloud provides Virtual Y as Software-as-a-Service (SaaS) that includes hosting, maintenance and general support of the Virtual Y stand-alone microsite for a low monthly fee. Y-USA provides this as an opt-in option to any YMCA that may be interested. For any further questions, you can contact Y-USA at [ycloud@ymca.net](http://mailto:ycloud@ymca.net/)
*   What’s the difference between Y-USA’s work on Virtual Y and what other partners are doing?
    *   There is no significant customer-facing difference between Y-USA’s Virtual Y SaaS solution and other partners’ hosting solutions. The functionality should work as expected in both deployment models.

## Marketing

*   Will there be an opportunity for shared content?
    *   Yes. Cross-association content sharing is available now, both for use and for you to contribute your content.
*   Do associations have access to analytics for Virtual Y?
    *   Yes, there is a tracking log within the admin menu that displays when a user logs in, as well as which pieces of content they view. This allows you to gauge what is most popular with your members. The information can be sorted and exported for ease of use.
*   Will there be a marketing toolkit?
    *   Ys are responsible for marketing virtual offerings. We encourage associations to share helpful tips on what marketing tactics have worked best for them on the [YMCA Website Services message board](https://community.ycloud.y.org/), and YMCA Website Services Slack
*   Do you have slides or a pitch deck I can use?
    *   You bet! Here is an [overview deck from our July meet-up](https://public.3.basecamp.com/p/BDNvZLtTBw3rjRXCnGVF9FUH) as well as a [pitch deck](https://public.3.basecamp.com/p/ssdgw6Fq2k4tVi5RC9gV3G3o) created by William Renderos from the Seattle Y.

## Virtual Y - Taking it to 11

*   Review the rest of [our docs](../)
