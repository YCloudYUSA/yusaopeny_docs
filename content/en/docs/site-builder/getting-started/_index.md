---
title: "Getting Started for Site Builders"
linkTitle: "Getting Started"
weight: 1
description: >
  Install, configure, and launch your YMCA website from scratch.
---

Welcome! This guide will walk you through setting up a YMCA Website Services installation from start to finish.

## What You'll Learn

By the end of this guide, you'll be able to:

- ✅ Choose the right installation path for your YMCA
- ✅ Install YMCA Website Services using Composer
- ✅ Configure site basics (name, logo, taxonomy)
- ✅ Create your first webform
- ✅ Set up user roles and permissions

**Estimated time:** 45-60 minutes

---

## Step 1: Choose Your Installation Path

Before installing, decide which solution fits your YMCA best.

### Small Y Template (Recommended for Most) ⭐

<div class="alert alert-warning" role="alert">
  <i class="fas fa-star me-2"></i><strong>Recommended:</strong> The Small Y Template is our flagship solution for resource-conscious YMCAs. Modern design, essential features, simplified maintenance.
</div>

**Best for:**
- Small to medium YMCAs
- Limited technical resources
- Want modern design out-of-the-box
- Need simplified administration

**What's included:**
- Modern Lily design system
- Layout Builder (drag-and-drop page building)
- Essential content types only
- Streamlined configuration
- Better performance

[**→ Learn more about Small Y Template**](/docs/small-y/)

### Full Distribution

**Best for:**
- Large YMCAs with complex needs
- Multiple branches with different requirements
- Custom development resources
- Need maximum flexibility

**What's included:**
- All YMCA Website Services features
- Multiple themes and colorways
- Legacy Paragraphs support
- Advanced customization options

---

## Step 2: Install YMCA Website Services

### Prerequisites

Before starting, ensure your server meets these requirements:

- **Drupal:** 11.1.x or higher
- **PHP:** 8.3 or higher
- **Database:** MySQL 8.0+ or MariaDB 10.6+
- **Web Server:** Apache 2.4+ or Nginx 1.18+
- **Composer:** 2.0 or higher

For detailed requirements, see [Server Requirements](/docs/development/server-requirements/).

### Installation Steps

#### For Small Y Template:

```bash
# 1. Create a new project
composer create-project ymca/small-y-project MY_YMCA_SITE --no-interaction

# 2. Navigate to the directory
cd MY_YMCA_SITE

# 3. Install Drupal
drush site:install openy_lily \
  --db-url='mysql://USER:PASS@localhost/DATABASE' \
  --account-name=admin \
  --account-pass=admin \
  --site-name='My YMCA'
```

#### For Full Distribution:

```bash
# 1. Create a new project
composer create-project ymca/yusaopeny-project MY_YMCA_SITE --no-interaction

# 2. Navigate to the directory
cd MY_YMCA_SITE

# 3. Install Drupal
drush site:install openy \
  --db-url='mysql://USER:PASS@localhost/DATABASE' \
  --account-name=admin \
  --account-pass=admin \
  --site-name='My YMCA'
```

**Replace:**
- `USER` - Your database username
- `PASS` - Your database password
- `DATABASE` - Your database name
- `admin` - Choose a secure admin password

### First Login

1. Navigate to your site URL
2. Log in with username: `admin`
3. Use the password you set during installation

**🎉 Congratulations!** Your YMCA website is installed.

---

## Step 3: Configure Site Basics

Now let's configure your site's essential settings.

### Set Site Name and Logo

1. Navigate to **Configuration** > **System** > **Site information**
2. Update:
   - **Site name:** "My YMCA Name"
   - **Slogan:** Optional tagline
   - **Email address:** Your admin email
3. Click **Save configuration**

### Upload Your Logo

1. Go to **Appearance** > Your active theme > **Settings**
2. Uncheck "Use the logo supplied by the theme"
3. Upload your YMCA logo (recommended: PNG, 200px wide)
4. Click **Save configuration**

### Configure Taxonomy Vocabularies

Taxonomy helps organize your content. Set up these essential vocabularies:

#### Categories (for Articles/News)

1. Go to **Structure** > **Taxonomy** > **News Categories**
2. Click **Add term**
3. Add categories like:
   - Youth Programs
   - Aquatics
   - Wellness
   - Community Events
4. Click **Save**

#### Amenities (for Branches)

1. Go to **Structure** > **Taxonomy** > **Amenities**
2. Add amenities your branches offer:
   - Indoor Pool
   - Gymnasium
   - Childcare
   - Group Exercise Studio

**Pro Tip:** Set up your taxonomies before creating content - it makes categorization easier!

---

## Step 4: Create Your First Webform

Webforms collect information from members and visitors. Let's create a simple contact form.

### Enable Webform Module (if not enabled)

```bash
drush en webform webform_ui -y
```

### Create Contact Form

1. Go to **Structure** > **Webforms**
2. Click **Add webform**
3. Fill in:
   - **Title:** "Contact Us"
   - **Description:** "Get in touch with our team"
4. Click **Save**

### Add Form Fields

1. Click **Build** tab
2. Add these fields:

**Name Field:**
- Click **Add element** > **Text field**
- **Title:** "Your Name"
- Check **Required**
- Click **Save**

**Email Field:**
- Click **Add element** > **Email**
- **Title:** "Email Address"
- Check **Required**
- Click **Save**

**Message Field:**
- Click **Add element** > **Textarea**
- **Title:** "Message"
- Check **Required**
- **Rows:** 5
- Click **Save**

### Configure Email Handler

1. Click **Emails/Handlers** tab
2. Click **Add handler** > **Email**
3. Configure:
   - **To email:** your-team@ymca.org
   - **From email:** [webform_submission:values:email]
   - **Subject:** New Contact Form Submission
4. Click **Save**

### Test Your Form

1. Click **View** tab
2. Fill out the form
3. Submit and check your email!

**🎉 Success!** You've created your first webform.

---

## Step 5: Set Up User Roles and Permissions

Control what different users can do on your site.

### Common Roles

YMCA Website Services includes these default roles:

| Role | Purpose | Common Permissions |
|------|---------|-------------------|
| **Content Editor** | Create and edit content | Create/edit articles, landing pages, events |
| **Site Administrator** | Configure site settings | Manage users, configuration, modules |
| **Branch Manager** | Manage branch content | Edit their branch page, create programs |

### Create a Content Editor User

1. Go to **People** > **Add user**
2. Fill in:
   - **Email:** editor@yourymca.org
   - **Username:** editor
   - **Password:** Create secure password
   - **Roles:** Check "Content Editor"
   - **Status:** Check "Active"
3. Click **Create new account**

### Customize Permissions

1. Go to **People** > **Permissions** > **Roles**
2. Click **Edit permissions** next to "Content Editor"
3. Grant permissions like:
   - Create Landing Page (Layout Builder)
   - Edit own Landing Page (Layout Builder)
   - Use Layout Builder
   - Access media library
4. Click **Save permissions**

**Security Tip:** Follow the principle of least privilege - only grant permissions users actually need!

---

## Next Steps

Now that you've set up the basics, explore these advanced topics:

### Continue Configuring

<div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3 mt-3 mb-4">
  <div class="col">
    <div class="card h-100 border-primary">
      <div class="card-body">
        <h5 class="card-title"><i class="fas fa-calendar text-primary me-2"></i>Activity Finder</h5>
        <p class="card-text small">Connect to Daxko, ActiveNet, or Personify to display programs.</p>
        <a href="/docs/user-documentation/schedules/activity-finder/" class="btn btn-sm btn-outline-primary">Configure</a>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100 border-success">
      <div class="card-body">
        <h5 class="card-title"><i class="fas fa-clock text-success me-2"></i>Schedules</h5>
        <p class="card-text small">Display class schedules and group exercise programs.</p>
        <a href="/docs/user-documentation/schedules/" class="btn btn-sm btn-outline-success">Learn More</a>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100 border-warning">
      <div class="card-body">
        <h5 class="card-title"><i class="fas fa-map-marker-alt text-warning me-2"></i>Locations</h5>
        <p class="card-text small">Set up branches, camps, and facility pages.</p>
        <a href="/docs/user-documentation/content-types/branch/" class="btn btn-sm btn-outline-warning">Add Locations</a>
      </div>
    </div>
  </div>
</div>

### Essential How-To Guides

- **[Use Two-Factor Authentication](/docs/howto/use-2fa/)** - Secure admin accounts
- **[Customize Location Maps](/docs/howto/map-settings-config/)** - Google Maps integration
- **[Track & Analyze Users](/docs/howto/track-users/)** - Set up analytics
- **[Avoid Outdated Config](/docs/howto/avoid-outdated-config/)** - Prevent update issues

### Deployment & Updates

- **[Configuration Management](https://www.drupal.org/docs/administering-a-drupal-site/configuration-management)** - Export/import config
- **[Drupal 10 → 11 Upgrade](/docs/development/drupal-10-update/)** - Update your site
- **[Security Updates](/docs/troubleshooting/upgrades/)** - Keep your site secure

---

## Quick Reference

### Common Drush Commands

```bash
# Clear cache
drush cr

# Enable a module
drush en module_name -y

# Export configuration
drush config:export -y

# Import configuration
drush config:import -y

# Update database
drush updb -y

# Check for security updates
drush pm:security

# Create admin login link
drush uli
```

### Essential URLs

| Page | URL |
|------|-----|
| **Admin Dashboard** | /admin |
| **Content List** | /admin/content |
| **Webforms** | /admin/structure/webform |
| **Users** | /admin/people |
| **Configuration** | /admin/config |
| **Reports** | /admin/reports |
| **Modules** | /admin/modules |

### File Structure

```
MY_YMCA_SITE/
├── web/                    # Drupal root
│   ├── modules/           # Contrib & custom modules
│   ├── themes/            # Themes
│   └── sites/default/     # Site-specific files
├── config/                # Configuration files
├── vendor/                # Composer dependencies
└── composer.json          # Project dependencies
```

---

## Need Help?

### Troubleshooting

- **Installation fails?** Check [System Requirements](/docs/getting-started/)
- **Permissions errors?** See [Troubleshooting Common Errors](/docs/troubleshooting/common-errors/)
- **Composer issues?** Review [Composer Dependency Conflicts](/docs/troubleshooting/common-errors/#composer-dependency-conflicts)

### Get Support

- **[Community Forum](https://community.ycloud.y.org)** - Ask questions, share tips
- **[Monthly Community Calls](/blog/monthly-calls/)** - Live Q&A sessions
- **[GitHub Issues](https://github.com/YCloudYUSA/yusaopeny/issues)** - Report bugs
- **[Troubleshooting Guide](/docs/troubleshooting/)** - Solutions by category

---

## Best Practices

### Security
- ✅ Change default admin password immediately
- ✅ Enable Two-Factor Authentication
- ✅ Keep modules updated
- ✅ Regular security audits
- ✅ Limit admin access

### Performance
- ✅ Enable caching (Production)
- ✅ Aggregate CSS/JS files
- ✅ Use Redis or Memcache
- ✅ Optimize images
- ✅ Monitor database size

### Maintenance
- ✅ Regular backups (daily database, weekly files)
- ✅ Test updates on staging first
- ✅ Export configuration regularly
- ✅ Monitor error logs
- ✅ Document customizations

### Workflow
- ✅ Use configuration management
- ✅ Version control your config
- ✅ Staging → Production deployment
- ✅ Never edit production directly
- ✅ Keep deployment notes

---

**Ready to build?** Start creating content with the [Content Editor Guide](/docs/user-documentation/) or configure advanced features! 🚀
