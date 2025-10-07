# Local Preview & Deployment Guide

This guide explains how to preview documentation changes locally and understand the deployment workflow for the YMCA Website Services documentation site.

## Quick Start: Preview Changes Locally

You have **three options** for previewing changes locally:

### Option 1: Docker (Recommended - No Setup Required)

**Prerequisites:**
- Docker Desktop installed
- Docker Compose installed

**Steps:**

```bash
# 1. Build and start the Hugo server in Docker
docker-compose up --build

# 2. Open your browser to:
http://localhost:1313

# 3. Make changes - the site will auto-reload!

# 4. When done, stop the server:
# Press Ctrl+C in the terminal
# Then clean up:
docker-compose rm
```

**Pros:**
- No need to install Hugo or Go
- Consistent environment across all developers
- Includes all dependencies

**Cons:**
- Slower initial build
- Uses more system resources

---

### Option 2: Native Hugo (Fastest for Active Development)

**Prerequisites:**
- Hugo Extended 0.139.4 or later
- Go 1.22.3 or later
- Node.js & npm (for PostCSS)

**Installation:**

```bash
# macOS (using Homebrew)
brew install hugo

# Verify extended version
hugo version
# Should show: hugo v0.139.4+extended

# Install Go
brew install go

# Install npm dependencies
npm install
```

**Steps:**

```bash
# 1. Start the Hugo development server
hugo server

# 2. Open your browser to:
http://localhost:1313

# 3. Make changes - the site will auto-reload in ~100ms!

# 4. Stop with Ctrl+C when done
```

**Pros:**
- Extremely fast rebuilds (milliseconds)
- Native performance
- Full control over Hugo version

**Cons:**
- Requires installing multiple tools
- Must install extended Hugo version
- Environment setup required

---

### Option 3: Gitpod (No Local Installation)

**Prerequisites:**
- GitHub account
- Web browser

**Steps:**

1. Click the Gitpod button in README.md
2. Wait for environment to spin up (~2-3 minutes)
3. Hugo server starts automatically
4. Preview button will appear in Gitpod

**Pros:**
- Zero local setup
- Works from any computer
- Pre-configured environment

**Cons:**
- Requires internet connection
- Limited free hours per month
- Slower than native development

---

## Understanding the Deployment Workflow

### Development Workflow

```
Local Changes → Git Commit → Push to Branch → Create PR → Review → Merge → Auto-Deploy
```

### 1. Local Development & Preview

```bash
# Create a new branch for your changes
git checkout -b feature/improve-homepage

# Make your changes
# Edit files in content/, layouts/, etc.

# Preview locally (choose one method above)
hugo server  # or docker-compose up

# Test your changes at http://localhost:1313
```

### 2. Commit Changes

```bash
# Stage your changes
git add content/en/_index.html

# Commit with a descriptive message
git commit -m "feat: Add persona-based navigation to homepage

- Add 'I am a...' section with 4 persona cards
- Add Diátaxis framework navigation
- Add popular topics section
- Improve visual hierarchy and UX"

# Push to your branch
git push origin feature/improve-homepage
```

### 3. Create Pull Request

```bash
# Using GitHub CLI (if installed)
gh pr create --title "Add persona-based navigation to homepage" \
  --body "This PR modernizes the homepage with persona-based navigation following 2025 documentation best practices."

# OR: Create PR manually on GitHub
# Visit: https://github.com/YCloudYUSA/yusaopeny_docs/compare
```

### 4. Netlify Preview Deployment (Automatic)

When you create a PR, Netlify automatically:
- Builds a preview deployment
- Posts a comment with preview URL
- Runs the build command: `hugo --gc --minify --buildFuture -b $DEPLOY_PRIME_URL -e development`
- Shows any build errors

**Preview your PR:**
1. Wait for Netlify bot comment on PR (~2-3 minutes)
2. Click "Deploy Preview" link
3. Review your changes in a live preview environment
4. Share the preview URL with stakeholders

### 5. Production Deployment (Automatic on Merge)

When a PR is merged to `main`:

**GitHub Actions Workflow** (`.github/workflows/gh-pages.yml`):
1. Checks out code with full git history
2. Sets up Hugo 0.139.4 extended
3. Sets up Node.js 18 and installs npm dependencies
4. Runs: `hugo --minify`
5. Deploys to GitHub Pages
6. Site goes live at https://ds-docs.y.org/

**Build Environment:**
- Hugo Version: 0.139.4 extended
- Node Version: 18
- Go Version: 1.22.3
- GitInfo: Enabled (for last modified dates)

---

## Deployment Checklist

Before creating a PR:

- [ ] **Local preview works** - Site builds without errors
- [ ] **All links work** - No broken internal links
- [ ] **Images load** - All images display correctly
- [ ] **Mobile responsive** - Check on mobile viewport
- [ ] **No console errors** - Check browser console
- [ ] **Git history clean** - Meaningful commit messages
- [ ] **No secrets committed** - No API keys or credentials

---

## Troubleshooting Local Preview

### "Hugo command not found"

```bash
# Install Hugo
brew install hugo

# Verify installation
hugo version
```

### "Extended version required" error

```bash
# You need Hugo extended, not standard
brew upgrade hugo

# Verify extended version
hugo version | grep extended
```

### "Go not found" error

```bash
# Install Go
brew install go

# Verify
go version
```

### "TOCSS failed" error

```bash
# Install npm dependencies for PostCSS
npm install

# Then try hugo server again
hugo server
```

### Docker build fails

```bash
# Clean up and rebuild
docker-compose down
docker system prune -f
docker-compose up --build
```

### Port 1313 already in use

```bash
# Find and kill the process
lsof -ti:1313 | xargs kill -9

# Or use a different port
hugo server --port 1314
```

---

## Advanced: Manual Build

To build the site without running a server:

```bash
# Production build
hugo --minify

# Output is in ./public directory
ls public/

# Preview build with future posts
hugo --gc --minify --buildFuture

# Development build (faster, unminified)
hugo --gc -e development
```

---

## CI/CD Configuration Files

### GitHub Actions (Production)
- **File**: `.github/workflows/gh-pages.yml`
- **Trigger**: Push to `main` branch
- **Deploys to**: GitHub Pages (ds-docs.y.org)

### Netlify (Preview)
- **File**: `netlify.toml`
- **Trigger**: Pull requests and branch deploys
- **Purpose**: Preview deployments only (not production)

---

## Key Environment Variables

```bash
# Required for Hugo modules
HUGO_VERSION=0.139.4
HUGO_ENABLEGITINFO=true
GO_VERSION=1.22.3

# Go module mode (avoid composer conflicts)
GOFLAGS="-mod=readonly"
```

---

## Quick Command Reference

```bash
# Start local development
hugo server                    # Native Hugo
docker-compose up             # Docker

# Build for production
hugo --minify                 # Production build

# Clean build artifacts
rm -rf public/ resources/     # Hugo cache
docker-compose down           # Docker cleanup

# Check Hugo version
hugo version                  # Should be 0.139.4+extended

# Validate links (requires linkchecker)
hugo server &
linkchecker http://localhost:1313

# Search for broken links in content
grep -r "relref" content/
```

---

## Getting Help

**Build Issues:**
- Check [Hugo documentation](https://gohugo.io/documentation/)
- Review [Docsy theme docs](https://www.docsy.dev/docs/)

**Deployment Issues:**
- Check GitHub Actions logs in the repo
- Review Netlify deployment logs

**Content Issues:**
- See CLAUDE.md for project structure
- Check existing documentation for examples
- Open an issue on GitHub

---

## Next Steps

1. **Make a change**: Edit `content/en/_index.html`
2. **Preview locally**: Run `hugo server`
3. **Create a PR**: Push and open pull request
4. **Review preview**: Check Netlify preview deployment
5. **Merge**: Merging to main auto-deploys to production

Happy documenting! 📚
