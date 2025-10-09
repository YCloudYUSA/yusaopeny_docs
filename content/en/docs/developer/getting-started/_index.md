---
title: "Getting Started for Developers"
linkTitle: "Getting Started"
weight: 1
description: >
  Set up your local environment, contribute code, and build custom features for YMCA Website Services.
---

Welcome! This guide will walk you through setting up a local development environment and making your first contribution to YMCA Website Services.

## What You'll Learn

By the end of this guide, you'll be able to:

- ✅ Set up a local development environment with DDEV
- ✅ Clone and install YMCA Website Services locally
- ✅ Understand the codebase structure and architecture
- ✅ Create a custom module or theme modification
- ✅ Submit your first pull request

**Estimated time:** 60-90 minutes

---

## Step 1: Set Up Your Local Development Environment

### Install DDEV (Recommended) ⭐

<div class="alert alert-info" role="alert">
  <i class="fas fa-star me-2"></i><strong>Recommended:</strong> DDEV is the official local development tool for Drupal since June 2024. It provides a consistent, containerized environment that works across all platforms.
</div>

**Why DDEV?**
- Official Drupal recommendation
- Cross-platform (Mac, Windows, Linux)
- Pre-configured for Drupal
- Includes database, web server, PHP, and tooling
- Matches production environment

### Installation Steps

#### macOS:

```bash
# Install using Homebrew
brew install ddev/ddev/ddev

# Start Docker Desktop (required)
# Download from https://www.docker.com/products/docker-desktop
```

#### Windows:

```bash
# Install using Chocolatey
choco install ddev

# Or download installer from:
# https://github.com/ddev/ddev/releases
```

#### Linux:

```bash
# Install script
curl -fsSL https://ddev.com/install.sh | bash
```

### Verify Installation

```bash
# Check DDEV version
ddev version

# Expected output: ddev version v1.23.0 or higher
```

---

## Step 2: Clone and Install YMCA Website Services

### Choose Your Starting Point

#### For Contributing to Core:

```bash
# 1. Fork the repository on GitHub
# Visit: https://github.com/YCloudYUSA/yusaopeny

# 2. Clone YOUR fork
git clone git@github.com:YOUR_USERNAME/yusaopeny.git ymca-dev
cd ymca-dev

# 3. Add upstream remote
git remote add upstream git@github.com:YCloudYUSA/yusaopeny.git

# 4. Create a new branch
git checkout -b feature/my-contribution
```

#### For Custom Development:

```bash
# 1. Create a new project
composer create-project ycloudyusa/yusaopeny-project ymca-dev --no-interaction
cd ymca-dev
```

### Install with DDEV

```bash
# 1. Configure DDEV
ddev config --project-type=drupal10 --docroot=web --create-docroot

# 2. Start DDEV
ddev start

# 3. Install Drupal
ddev drush site:install openy \
  --account-name=admin \
  --account-pass=admin \
  --site-name='YMCA Dev'

# 4. Get login link
ddev drush uli
```

**🎉 Success!** Your local YMCA Website Services site is running at the URL shown by `ddev describe`.

### Essential DDEV Commands

```bash
# Start environment
ddev start

# Stop environment
ddev stop

# Run Drush commands
ddev drush cr

# Run Composer commands
ddev composer require drupal/module_name

# SSH into container
ddev ssh

# View site URL and credentials
ddev describe

# Import database
ddev import-db --file=dump.sql.gz

# Export database
ddev export-db --file=dump.sql.gz
```

---

## Step 3: Understand the Codebase

### Project Structure

```
yusaopeny/
├── web/                          # Drupal root
│   ├── modules/
│   │   ├── contrib/             # Downloaded modules
│   │   └── custom/              # Your custom modules
│   ├── themes/
│   │   ├── contrib/             # Downloaded themes
│   │   └── custom/              # Your custom themes
│   ├── profiles/
│   │   └── openy/               # YMCA installation profile
│   └── sites/default/           # Site-specific files
├── config/                       # Configuration management
│   └── sync/                    # Exported configuration
├── vendor/                       # Composer dependencies
├── composer.json                 # Project dependencies
└── .ddev/                       # DDEV configuration
```

### Key Directories

| Directory | Purpose |
|-----------|---------|
| `web/modules/custom/` | Custom modules for YMCA features |
| `web/themes/custom/` | Custom themes (Carnation) |
| `config/sync/` | Configuration files (version controlled) |
| `web/profiles/openy/` | Installation profile and defaults |

### YMCA-Specific Modules

Familiarize yourself with these core YMCA modules:

- **openy_activity_finder** - Program search integration (Daxko, ActiveNet, Personify)
- **openy_schedules** - Class schedule displays
- **openy_loc_branch** - Branch/location functionality
- **openy_node_** - Content type modules (landing_page, event, etc.)
- **openy_prgf_** - Paragraphs components (legacy)
- **lb_** - Layout Builder components (modern)

---

## Step 4: Create Your First Contribution

### Find a Good First Issue

<div class="alert alert-warning" role="alert">
  <i class="fas fa-lightbulb me-2"></i><strong>Pro Tip:</strong> Start with issues labeled <a href="https://github.com/YCloudYUSA/yusaopeny/issues?q=is%3Aissue+is%3Aopen+label%3A%22good+first+issue%22">"good first issue"</a> to get familiar with the contribution process.
</div>

### Read the Contribution Guidelines ⭐

**Before contributing, review:**

[**→ Contribution Guidelines**](https://github.com/YCloudYUSA/yusaopeny/blob/main/CONTRIBUTING.md) - **Required reading**

**Key points:**
- Code of Conduct expectations
- Branching strategy (feature branches from `main`)
- Commit message conventions
- Pull request process
- Code review expectations

### Create a Custom Module Example

Let's create a simple "Hello YMCA" module to understand the structure:

```bash
# 1. Create module directory
mkdir -p web/modules/custom/hello_ymca

# 2. Create .info.yml file
cat > web/modules/custom/hello_ymca/hello_ymca.info.yml << 'EOF'
name: Hello YMCA
type: module
description: 'A simple example module for YMCA Website Services'
package: YMCA Custom
core_version_requirement: ^10 || ^11
dependencies:
  - drupal:node
EOF

# 3. Create a simple controller
mkdir -p web/modules/custom/hello_ymca/src/Controller
```

**Controller file** (`web/modules/custom/hello_ymca/src/Controller/HelloController.php`):

```php
<?php

namespace Drupal\hello_ymca\Controller;

use Drupal\Core\Controller\ControllerBase;

/**
 * Returns responses for Hello YMCA routes.
 */
class HelloController extends ControllerBase {

  /**
   * Builds the response.
   */
  public function content() {
    $build['content'] = [
      '#type' => 'markup',
      '#markup' => $this->t('Hello from YMCA Website Services!'),
    ];
    return $build;
  }

}
```

**Routing file** (`web/modules/custom/hello_ymca/hello_ymca.routing.yml`):

```yaml
hello_ymca.hello:
  path: '/hello-ymca'
  defaults:
    _controller: '\Drupal\hello_ymca\Controller\HelloController::content'
    _title: 'Hello YMCA'
  requirements:
    _permission: 'access content'
```

**Enable and test:**

```bash
# Enable module
ddev drush en hello_ymca -y

# Clear cache
ddev drush cr

# Visit /hello-ymca in your browser
```

---

## Step 5: Submit Your First Pull Request

### Git Workflow (Feature Branch)

```bash
# 1. Create feature branch from main
git checkout main
git pull upstream main
git checkout -b feature/issue-123-fix-description

# 2. Make your changes
# Edit files...

# 3. Stage and commit
git add .
git commit -m "Fix: Description of what you fixed (#123)

- Detailed explanation of changes
- Why the change was needed
- Any related issues

Fixes #123"

# 4. Push to YOUR fork
git push origin feature/issue-123-fix-description
```

### Commit Message Best Practices

**Format:**
```
Type: Short description (#issue-number)

- Detailed bullet points
- Explaining the change
- And the reasoning

Fixes #123
```

**Types:**
- `Fix:` - Bug fixes
- `Feature:` - New features
- `Refactor:` - Code improvements
- `Docs:` - Documentation updates
- `Test:` - Test additions/fixes
- `Chore:` - Build/tooling updates

### Create Pull Request

1. **Go to GitHub** - Your fork's repository
2. **Click "Compare & pull request"**
3. **Fill in the template:**
   - **Title:** Clear, concise description
   - **Description:** What, why, how
   - **Screenshots:** If UI changes
   - **Testing steps:** How reviewers can test
   - **Checklist:** Complete all items
4. **Request reviews** - Tag 2 reviewers (optimal per research)
5. **Link issue** - Use "Fixes #123" in description

### Pull Request Checklist

<div class="checklist-container" style="position: relative; background: #f8f9fa; padding: 1.5rem; border-radius: 8px; margin: 1rem 0;">
  <button onclick="copyPRChecklist()" style="position: absolute; top: 10px; right: 10px; background: #582C83; color: white; border: none; padding: 8px 16px; border-radius: 4px; cursor: pointer; font-size: 14px;">
    <i class="fas fa-copy"></i> Copy Checklist
  </button>

  <div id="pr-checklist-content" style="margin-top: 1rem;">

- [ ] Code follows Drupal coding standards
- [ ] Added/updated tests if applicable
- [ ] Updated documentation
- [ ] No merge conflicts
- [ ] Passes automated tests
- [ ] Screenshots for UI changes
- [ ] Tested on multiple browsers/devices

  </div>
</div>

<script>
function copyPRChecklist() {
  const checklistText = `Pull Request Checklist:

- [ ] Code follows Drupal coding standards
- [ ] Added/updated tests if applicable
- [ ] Updated documentation
- [ ] No merge conflicts
- [ ] Passes automated tests
- [ ] Screenshots for UI changes
- [ ] Tested on multiple browsers/devices`;

  navigator.clipboard.writeText(checklistText).then(() => {
    const btn = event.target.closest('button');
    const originalHTML = btn.innerHTML;
    btn.innerHTML = '<i class="fas fa-check"></i> Copied!';
    setTimeout(() => {
      btn.innerHTML = originalHTML;
    }, 2000);
  });
}
</script>

---

## Next Steps

Now that you've set up your environment and made your first contribution, explore these advanced topics:

### Continue Learning

<div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3 mt-3 mb-4">
  <div class="col">
    <div class="card h-100 border-primary">
      <div class="card-body">
        <h5 class="card-title"><i class="fas fa-code text-primary me-2"></i>Module Development</h5>
        <p class="card-text small">Deep dive into custom module development, services, and dependency injection.</p>
        <a href="https://www.drupal.org/docs/creating-modules" class="btn btn-sm btn-outline-primary">Learn More</a>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100 border-success">
      <div class="card-body">
        <h5 class="card-title"><i class="fas fa-paint-brush text-success me-2"></i>Theme Development</h5>
        <p class="card-text small">Customize YMCA themes or create your own with Twig templates.</p>
        <a href="/docs/development/custom-theme/" class="btn btn-sm btn-outline-success">View Guide</a>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100 border-warning">
      <div class="card-body">
        <h5 class="card-title"><i class="fas fa-vial text-warning me-2"></i>Testing</h5>
        <p class="card-text small">Write unit tests, integration tests, and end-to-end tests.</p>
        <a href="https://www.drupal.org/docs/automated-testing" class="btn btn-sm btn-outline-warning">Test Guide</a>
      </div>
    </div>
  </div>
</div>

### Essential Developer Resources

- **[Drupal API Documentation](https://api.drupal.org)** - Complete API reference
- **[Drupal Coding Standards](https://www.drupal.org/docs/develop/standards)** - Required reading
- **[YMCA GitHub Repository](https://github.com/YCloudYUSA/yusaopeny)** - Source code and issues
- **[Configuration Management](https://www.drupal.org/docs/configuration-management)** - Import/export config
- **[Layout Builder API](https://www.drupal.org/docs/8/api/layout-api)** - Custom block development

### Advanced Topics

- **[Custom Block Plugins](/docs/development/custom-components/)** - Create Layout Builder blocks
- **[Activity Finder Integration](/docs/development/activity-finder/)** - Connect to external systems
- **[Deployment Workflows](/docs/development/deployment/)** - CI/CD and automation
- **[Performance Optimization](/docs/development/performance/)** - Caching, queries, and profiling

---

## Quick Reference

### Common Git Commands

```bash
# Update your fork's main branch
git checkout main
git pull upstream main
git push origin main

# Create feature branch
git checkout -b feature/issue-123-description

# View status
git status

# View diff
git diff

# Stage changes
git add file.php

# Commit
git commit -m "Fix: Description (#123)"

# Push to your fork
git push origin feature/issue-123-description

# Rebase on latest main
git checkout feature/issue-123-description
git rebase main

# Squash commits (interactive)
git rebase -i HEAD~3
```

### Common Drush Commands

```bash
# Clear cache
ddev drush cr

# Enable module
ddev drush en module_name -y

# Uninstall module
ddev drush pmu module_name -y

# Export configuration
ddev drush config:export -y

# Import configuration
ddev drush config:import -y

# Update database
ddev drush updb -y

# Generate login link
ddev drush uli

# Watch logs
ddev drush watchdog:tail

# Run cron
ddev drush cron
```

### Common Composer Commands

```bash
# Require new module
ddev composer require drupal/module_name

# Remove module
ddev composer remove drupal/module_name

# Update all packages
ddev composer update

# Update specific package
ddev composer update drupal/core --with-all-dependencies

# Show outdated packages
ddev composer outdated

# Validate composer.json
ddev composer validate
```

### IDE Setup (PhpStorm)

**Recommended plugins:**
- Drupal Symfony Bridge
- PHP Annotations
- Twig
- Composer.json support

**Code style:**
1. Settings → PHP → Code Sniffer
2. Configuration: `/path/to/vendor/bin/phpcs`
3. Coding standard: Drupal

**Drupal settings:**
1. Settings → PHP → Drupal
2. Enable Drupal integration
3. Set Drupal installation path: `web/`

---

## Code Quality and Standards

### Drupal Coding Standards

All contributions must follow Drupal coding standards:

```bash
# Install PHP_CodeSniffer
ddev composer require --dev drupal/coder
ddev composer require --dev dealerdirect/phpcodesniffer-composer-installer

# Check your code
ddev exec phpcs --standard=Drupal web/modules/custom/your_module/

# Auto-fix issues
ddev exec phpcbf --standard=Drupal web/modules/custom/your_module/
```

### Modern Drupal Best Practices

**✅ DO:**
- Use dependency injection for services
- Use Events and Subscribers (not hooks when possible)
- Type-hint function parameters
- Document with PHPDoc blocks
- Use configuration entities for exportable config
- Write tests for new functionality

**❌ DON'T:**
- Use `drupal_set_message()` (use Messenger service)
- Use `db_query()` (use Database API)
- Use `l()` or `url()` (use Url and Link classes)
- Store data in variables (use State API or Config)
- Use `global $user` (inject current_user service)

### Security Best Practices

- ✅ Always sanitize user input
- ✅ Use `checkPlain()`, `Xss::filter()`, or render arrays
- ✅ Check permissions before granting access
- ✅ Use CSRF tokens for state-changing operations
- ✅ Validate and sanitize database queries
- ✅ Follow OWASP top 10 guidelines

---

## Need Help?

### Troubleshooting

- **DDEV not starting?** Check Docker is running (`docker ps`)
- **Composer memory errors?** Increase PHP memory: `ddev config --php-memory-limit=4G`
- **Git conflicts?** Rebase on latest main and resolve conflicts
- **Code style issues?** Run `phpcs` and `phpcbf` to auto-fix

### Get Support

- **[YMCA Slack](https://ycloud.y.org/slack)** - Real-time developer chat (#development channel)
- **[GitHub Issues](https://github.com/YCloudYUSA/yusaopeny/issues)** - Report bugs or request features
- **[GitHub Discussions](https://github.com/YCloudYUSA/yusaopeny/discussions)** - Ask questions
- **[Monthly Community Calls](/blog/monthly-calls/)** - Live Q&A sessions
- **[Drupal.org Documentation](https://www.drupal.org/docs)** - Official Drupal docs

### Code Review Process

**What to expect:**
1. **Automated checks** - Tests run automatically (5-10 minutes)
2. **Peer review** - 2 reviewers will check your code (2-4 days typical)
3. **Feedback** - You may be asked to make changes
4. **Approval** - Once approved by 2+ reviewers
5. **Merge** - Maintainer merges to main branch

**How to get faster reviews:**
- Keep PRs small and focused (< 400 lines ideal)
- Write clear commit messages
- Add tests for new functionality
- Respond promptly to feedback
- Test thoroughly before submitting

---

## Best Practices

### Git Workflow

- ✅ Always branch from latest `main`
- ✅ One feature/fix per branch
- ✅ Keep commits focused and atomic
- ✅ Write descriptive commit messages
- ✅ Rebase on main before submitting PR
- ✅ Keep PRs small (easier to review)

### Development Workflow

- ✅ Use DDEV for consistent environment
- ✅ Export configuration after changes (`drush cex`)
- ✅ Never commit `sites/default/files/`
- ✅ Test on multiple browsers
- ✅ Check accessibility with screen readers
- ✅ Test with real content

### Code Organization

- ✅ Keep modules small and focused
- ✅ Use services for reusable logic
- ✅ Leverage existing Drupal APIs
- ✅ Follow Drupal file structure conventions
- ✅ Document complex logic with comments
- ✅ Write self-documenting code (clear naming)

### Testing

- ✅ Write tests for new features
- ✅ Run tests locally before pushing
- ✅ Test edge cases and error conditions
- ✅ Test with JavaScript disabled
- ✅ Test responsive layouts
- ✅ Test with different user roles

---

## Community Guidelines

### Code of Conduct

YMCA Website Services follows the [Drupal Code of Conduct](https://www.drupal.org/dcoc). All contributors must:

- ✅ Be respectful and inclusive
- ✅ Welcome newcomers
- ✅ Assume good faith
- ✅ Give constructive feedback
- ✅ Focus on what's best for the community

### Getting Involved

**Ways to contribute:**
- 🐛 Report bugs
- 💡 Suggest features
- 📝 Improve documentation
- 🔍 Review pull requests
- 💬 Help others in Slack
- 🎓 Share knowledge in blog posts
- 🎤 Present at community calls

---

**Ready to code?** Join us on [Slack](https://ycloud.y.org/slack), grab a [good first issue](https://github.com/YCloudYUSA/yusaopeny/issues?q=is%3Aissue+is%3Aopen+label%3A%22good+first+issue%22), and start contributing! 🚀
