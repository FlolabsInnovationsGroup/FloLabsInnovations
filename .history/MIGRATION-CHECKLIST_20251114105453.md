# Strapi CMS Migration Checklist

## ✅ What We've Done So Far

- [x] Created feature branch `feature/strapi-cms`
- [x] Installed `qs` package
- [x] Created Strapi API client (`src/lib/strapi.ts`)
- [x] Created fallback component for safety
- [x] Updated FocusSection to use Strapi
- [x] Created `.env.local` file for configuration

## 📝 What YOU Need to Do Next

### Step 1: Set Up Railway Strapi (15 minutes)

1. Go to https://railway.app and login
2. Click **"New Project"** → **"Deploy Strapi"**
3. Wait for deployment (5-10 minutes)
4. Railway will give you a URL like: `https://your-project.railway.app`
5. **SAVE THIS URL!** You'll need it in Step 3

### Step 2: Configure Strapi (20 minutes)

1. Open your Strapi admin panel: `https://your-project.railway.app/admin`
2. Create your admin account (first time only)

#### Create Content Types:

**Focus Area Collection:**
- Go to: Content-Type Builder → Create new collection type
- Name: `focus-area` (singular)
- Add fields:
  - `title` - Text (required)
  - `description` - Text (required)
  - `slug` - UID (attached to title)
  - `image` - Media, Single image (required)
  - `order` - Number
- Click **Save**

**Technology Collection:**
- Same process, name: `technology`
- Same fields as above

**About Project Collection:**
- Name: `about-project`
- Fields:
  - `title` - Text (required)
  - `description` - Text (required)
  - `image` - Media, Single (required)
  - `externalLink` - Text
  - `buttonText` - Text
  - `order` - Number
- Click **Save**

#### Set Permissions:
1. Settings → Users & Permissions Plugin → Roles → Public
2. For each collection (focus-area, technology, about-project):
   - Check ✅ `find`
   - Check ✅ `findOne`
3. Click **Save**

### Step 3: Add Your Content (30 minutes)

1. Content Manager → Focus Area → Create new entry
2. Add all 4 focus areas:
   - Education (order: 1)
   - Healthcare (order: 2)
   - Travel (order: 3)
   - Space (order: 4)
3. Upload images from `/public/images/` folder
4. Repeat for Technologies (6 items)
5. Repeat for About Projects (4 items)

### Step 4: Get API Token (5 minutes)

1. Settings → API Tokens → Create new API Token
2. Name: `NextJS Frontend`
3. Token type: **Read-only**
4. Click **Save**
5. **COPY THE TOKEN** (you only see it once!)

### Step 5: Configure Local Environment (2 minutes)

Open `.env.local` file and fill in:

```env
NEXT_PUBLIC_STRAPI_URL=https://your-project.railway.app
STRAPI_API_TOKEN=paste-your-token-here
```

### Step 6: Test Locally (5 minutes)

```bash
pnpm dev
```

Open http://localhost:3000 and check:
- [ ] Focus section loads from Strapi
- [ ] Images display correctly
- [ ] Links work
- [ ] Looks identical to before

### Step 7: Push to GitHub (2 minutes)

```bash
git add .
git commit -m "Add Strapi CMS integration for Focus section"
git push origin feature/strapi-cms
```

### Step 8: Configure Vercel Environment Variables (5 minutes)

1. Go to https://vercel.com
2. Open your `flomadlabsdotcom` project
3. Settings → Environment Variables
4. Add:
   - `NEXT_PUBLIC_STRAPI_URL` = your Railway URL
   - `STRAPI_API_TOKEN` = your API token
5. Choose "Preview" environment for testing
6. Save

### Step 9: Deploy Preview (Automatic!)

1. Vercel will automatically deploy your branch
2. Find the preview URL in your GitHub PR or Vercel dashboard
3. Should look like: `flomadlabsdotcom-git-feature-strapi-abc123.vercel.app`

### Step 10: Compare URLs Side-by-Side

1. **Production**: https://flolabsrd.com
2. **Preview**: [your-preview-url]
3. Check they look identical!

---

## 🔄 Next Sections to Migrate

After Focus section works, repeat for:
- [ ] Technologies section
- [ ] About section
- [ ] Hero section
- [ ] Detail pages (education, healthcare, etc.)

## 🚀 When Ready to Go Live

```bash
git checkout main
git merge feature/strapi-cms
git push origin main
```

Vercel will auto-deploy to production!

---

## 🆘 Troubleshooting

**Images not showing?**
- Check Strapi URL has no trailing slash
- Verify permissions are set to Public
- Check image uploaded correctly in Strapi

**API errors?**
- Verify API token is correct
- Check Strapi is running on Railway
- Look at browser console for errors

**Looks different?**
- We kept ALL CSS the same, should be identical
- Check image URLs are correct
- Verify content matches original

---

## 📞 Important URLs to Save

- **Railway Strapi Admin**: https://your-project.railway.app/admin
- **Railway Dashboard**: https://railway.app/dashboard
- **Vercel Project**: https://vercel.com/flomadlabsrd/flomadlabsdotcom
- **Production Site**: https://flolabsrd.com
- **Preview Site**: [will be generated after push]
