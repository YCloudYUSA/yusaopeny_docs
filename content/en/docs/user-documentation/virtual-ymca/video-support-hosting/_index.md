---
title: "Video Support & Hosting"
weight: 4
---

Virtual Y supports embedded videos from the following sources. The supported source is dependent on the content type:

**(On-demand) Video**
- YouTube
- Vimeo

**Live Stream**
- YouTube
- Vimeo

**Virtual Meeting**
- As a "Join" button
  - any external link, including Facebook
  - Zoom meetings (embedding is no longer supported)

## Video Provider Specifics

Each video provider has its benefits. We've provided this list to help you decide where to start.

### YouTube
- Free
- Unlimited bandwidth
- Security through obscurity with ["unlisted" videos](https://support.google.com/youtube/answer/157177?hl=en).

YouTube videos that are smaller than 1280x720px (aka "720p") may not display a thumbnail properly in Virtual Y. If you upload a large (greater than 1280×720px) thumbnail via YouTube's video editor that should resolve this issue on Virtual Y (until [this issue](https://github.com/ymcatwincities/openy_gated_content/issues/48) is resolved).

Setting up a [Brand account](https://support.google.com/youtube/answer/9367690?hl=en) for your Y is a good first step to using YouTube for your videos.

The requirements for embedding YouTube Live Streams may change often. Previously this has either required having more than 1000 subscribers on your channel, turning on "Monetization", etc. It may, at times, be more expedient to use Vimeo for Live Streaming. 

As of February 2021, YouTube's [stated requirements for Live Streaming](https://support.google.com/youtube/answer/2474026?co=GENIE.Platform%3DDesktop&hl=en-GB) are:

> To live stream, you need to have no [live streaming restrictions](https://support.google.com/youtube/answer/2853834) in the past 90 days and you need to [verify your channel](https://support.google.com/youtube/answer/171664).

### Vimeo

- Requires a paid plan for typical Y usage.
- Upload and bandwidth limits based on account type.
- Truly gated videos with [domain-level privacy](https://vimeo.zendesk.com/hc/en-us/articles/224819527-Changing-the-privacy-settings-of-your-videos). *Domain restrictions are NOT RECOMMENDED if you plan on sharing your content with other Y's using Virtual Y's "Shared Content" feature.*
- In order to facilitate content sharing, we recommend using the **Hide this video from vimeo .com** privacy option combined with **Enable people to embed this video on any site**. [Review all of Vimeo's privacy options](https://vimeo.zendesk.com/hc/en-us/articles/224817847-Privacy-settings-overview).

Most associations have been buying the ["Premium" level](https://vimeo.com/upgrade) to get access to unlimited live streaming.

Vimeo private videos do not allow thumbnails to be generated for your site. If you use private videos on Vimeo you'll need to upload a thumbnail using the **Teaser Image** field on the content

![A screenshot of the Teaser Image field](./video-teaser-image.png) .

### Facebook

Facebook is not recommended for Virtual Y content, as any meeting there will also be listed publicly.

If you choose to host virtual meetings on Facebook, they will need to be publicly listed, otherwise it is not possible to create a direct link to the event. To get the link to a public video:

- Click the three dots on the bottom right of the video.
- Select "Copy Link"

### Zoom

A few notes:

- If you are creating a recurring Virtual Meeting, please be sure your Zoom meeting recurrence matches the recurrence on the Virtual Y meeting.
- If your Zoom meeting requires a password, we recommend generating a link with the password embedded in it. This usually looks something like `?pwd=...` in the link. Please review [Zoom's updated security settings](https://support.zoom.us/hc/en-us/articles/360042647952-May-2020-Updated-password-and-security-settings) for more information.
- Through many tests we determined that Zoom embeds are not reliable and support for that feature has been disabled. Zoom links now display as a "Join" button which should make for a much smoother user experience.
