# CMS Editor Guide - Flo Labs R&D Website

## Welcome! 👋

This guide will help you manage content on the Flo Labs R&D website using the Strapi CMS admin panel. No coding required!

## Getting Started

### Accessing the Admin Panel

1. **URL**: https://flomadlabsdotcom-strapi-production.up.railway.app/admin
2. **Login Credentials**: Contact your administrator for login details
3. After logging in, you'll see the Strapi dashboard

### First Time Login

When you first log in, you'll see:
- **Dashboard** - Overview of your content
- **Content Manager** - Where you edit content
- **Media Library** - Where you manage images
- **Left Sidebar** - Navigation to different sections

## Understanding the Website Structure

The Flo Labs R&D website has three main content sections:

### 1. Focus Areas
These are the main research areas displayed on the homepage (Education, Healthcare, Travel, Space).

**What it controls:**
- The "Our Focus" section cards on the homepage
- Individual focus area detail pages (e.g., flolabsrd.com/education)

### 2. Technologies
The innovative technologies and solutions section.

**What it controls:**
- The "Technologies" section on the homepage
- Individual technology detail pages (e.g., flolabsrd.com/caipo)

### 3. About Projects
External projects and initiatives with links to other websites.

**What it controls:**
- The "About" section on the homepage
- Links to external sites (FlomadTravel, RoboCollective, etc.)

## Managing Content

### Viewing Content

1. Click **Content Manager** in the left sidebar
2. You'll see three collections:
   - **Focus Area** - 4 items (Education, Healthcare, Travel, Space)
   - **Technology** - 6 items (CAIPO, MoodChanger, etc.)
   - **About Project** - 4 items (Travel AI, RoboCollective, etc.)
3. Click on any collection to see all items

### Editing Existing Content

#### Step-by-Step:

1. **Navigate to the content:**
   - Click "Content Manager" → Choose collection (e.g., "Focus Area")
   - You'll see a list of all items

2. **Open an item:**
   - Click on any item title to open the editor
   - You'll see all the fields you can edit

3. **Edit the fields:**
   - **Title**: The headline (e.g., "Education")
   - **Description**: The detailed text explaining the item
   - **Link**: The page URL (e.g., `/education`) - usually don't change this
   - **Cover Image/Image**: The photo or graphic
   - **Button Text/Button Link**: (About Projects only) Call-to-action button

4. **Preview your changes:**
   - Scroll through the form to see all fields
   - Images will show a preview (may appear as broken thumbnails but are working)

5. **Save:**
   - Click **Save** button in the top right
   - Your changes will appear on the website in about 60 seconds!

#### Important Notes:
- ✅ Always click **Save** when done editing
- ✅ Changes appear on the live site within 1 minute
- ⚠️ Don't change the **Link** field unless you're sure - it controls page routing
- ⚠️ Keep descriptions concise and engaging

### Editing Text Content

**Best Practices:**
- Keep titles short (1-3 words)
- Keep descriptions between 1-3 sentences
- Use proper capitalization
- Avoid special characters unless necessary
- Write in present tense and active voice

**Example - Good Description:**
```
Revolutionizing learning through AI-powered educational tools and platforms.
```

**Example - Avoid:**
```
We are going to revolutionize learning through the use of AI-powered educational tools, platforms, and other technologies that we have developed.
```

### Managing Images

#### Viewing Images

1. Click **Media Library** in the left sidebar
2. You'll see all uploaded images
3. **Note**: Thumbnails may appear broken but the images are working correctly - they're stored on Cloudinary (our image hosting service)

#### Uploading a New Image

1. **Click "Upload assets" button** (top right)
2. **Drag and drop** your image or click to browse
3. Wait for upload to complete
4. The image is now available for use in content

#### Image Requirements:
- **Format**: PNG or JPG preferred
- **Size**: Under 5MB
- **Dimensions**: At least 1024px wide for best quality
- **Aspect Ratio**: 16:9 or 4:3 works best
- **File Name**: Use descriptive names (e.g., `education-hero.png`)

#### Replacing an Image

1. **Open the content** you want to edit (e.g., Focus Area → Education)
2. **Find the image field** (Cover Image, Image, etc.)
3. **Click the existing image** or "Select files"
4. **Choose from Media Library** or **Upload new**
5. **Save the content**

### Creating New Content

#### Adding a New Focus Area:

1. Go to **Content Manager** → **Focus Area**
2. Click **"Create new entry"** (top right)
3. Fill in the fields:
   - **Title**: e.g., "Quantum Computing"
   - **Description**: Brief explanation
   - **Link**: e.g., `/quantum-computing`
   - **Cover Image**: Upload or select image
4. Click **Save**

⚠️ **Important**: Creating new focus areas requires a developer to create the matching detail page at the link you specify (e.g., `/quantum-computing`). Coordinate with the development team first!

#### Adding a New Technology:

Same process as Focus Area:
1. **Content Manager** → **Technology** → **Create new entry**
2. Fill in: Name, Description, Image, Link
3. **Save**

#### Adding a New About Project:

About Projects have extra fields for external links:
1. **Content Manager** → **About Project** → **Create new entry**
2. Fill in:
   - **Title**: Project name
   - **Description**: What it does
   - **Image**: Project logo or photo
   - **Link**: Full URL (e.g., `https://www.flomadtravel.com/`)
   - **Button Text**: Usually "Visit Site"
   - **Button Link**: Same as Link field
3. **Save**

### Deleting Content

1. Open the content item you want to delete
2. Click the **trash icon** or **Delete** button (top right)
3. Confirm deletion
4. The item is removed from the website

⚠️ **Warning**: Deletion is immediate and affects the live site within 60 seconds. Make sure you really want to delete!

### Publishing vs Draft

Strapi tracks publication status:
- **Published**: Visible on the live website
- **Draft**: Hidden from the website

**To publish content:**
1. Edit the content item
2. Click **Publish** button (top right)
3. Content appears on the website

**To unpublish:**
1. Edit the content item  
2. Click **Unpublish** button
3. Content is hidden but not deleted

## Tips & Tricks

### Making Great Content

✅ **Do:**
- Keep text concise and scannable
- Use high-quality images
- Check spelling and grammar
- Preview on the live site after saving
- Save frequently while editing

❌ **Don't:**
- Use all caps in titles (looks like shouting)
- Upload huge images (slows down the site)
- Change link fields without checking with developers
- Delete content without a backup plan

### Workflow Tips

**Before editing major content:**
1. Take screenshots of the current content
2. Save text in a document as backup
3. Make your changes
4. Preview on the live site
5. Revert if needed (you have the backup!)

**Content review checklist:**
- ☐ Text is clear and error-free
- ☐ Images are high quality and relevant
- ☐ Links work correctly (test external links)
- ☐ Content is saved and published
- ☐ Checked the live website to verify

## Troubleshooting

### Problem: Changes aren't showing on the website

**Solutions:**
1. Wait 60 seconds - content caches for 1 minute
2. Hard refresh your browser (Cmd+Shift+R on Mac, Ctrl+Shift+R on Windows)
3. Check that you clicked **Save** and **Publish**
4. Clear your browser cache

### Problem: Images look broken in admin panel

**This is normal!** 
- The images are stored on Cloudinary (image hosting service)
- They appear broken in the admin but work perfectly on the website
- To verify an image works, visit the live website

### Problem: Can't upload an image

**Solutions:**
1. Check file size (must be under 5MB)
2. Try a different image format (PNG or JPG)
3. Reduce image dimensions (use an image editor)
4. Contact administrator if issue persists

### Problem: Forgot password

1. Click "Forgot Password" on the login page
2. Follow email instructions
3. Or contact your administrator to reset

## Understanding the Live Website

### How Changes Appear

When you save content in Strapi:
1. You click **Save** in the admin panel
2. Content is stored in the database
3. Website checks for new content every 60 seconds
4. New content appears automatically (no deploy needed!)

### Where Content Appears

**Homepage sections:**
- Focus Areas → "Our Focus" section (4 cards)
- Technologies → "Technologies" section (6 cards)
- About Projects → "About" section (4 cards with external links)

**Detail pages:**
- Each Focus Area and Technology has its own page
- URL matches the "Link" field (e.g., `/education`)

## Best Practices

### Content Strategy

**Focus Areas:**
- Highlight main research directions
- Keep to 4-5 areas (current: 4)
- Use compelling, forward-thinking language

**Technologies:**
- Showcase specific solutions
- Explain real-world impact
- Keep technical details accessible

**About Projects:**
- Link to active external sites
- Keep descriptions brief
- Ensure external links work

### SEO Tips

While editing content, keep in mind:
- Use descriptive, keyword-rich titles
- Write clear, informative descriptions
- Use meaningful image file names
- Keep URLs simple and readable

### Accessibility

Make content accessible to everyone:
- Use clear, simple language
- Provide meaningful image descriptions
- Ensure good color contrast in images
- Keep navigation logical

## Getting Help

### Resources

- **This Guide**: Refer back anytime
- **Strapi Docs**: https://docs.strapi.io/
- **Live Website**: https://flolabsrd.com

### Support Contacts

- **Technical Issues**: Contact development team
- **Login Problems**: Contact administrator
- **Content Questions**: Contact marketing team

## Quick Reference Card

### Common Tasks

| Task | Steps |
|------|-------|
| **Edit text** | Content Manager → Collection → Item → Edit → Save |
| **Change image** | Open content → Click image field → Select new → Save |
| **Add new item** | Content Manager → Collection → Create new entry |
| **Delete item** | Open content → Click delete icon → Confirm |
| **Upload image** | Media Library → Upload assets → Select files |
| **Publish/Unpublish** | Open content → Click Publish/Unpublish button |

### Keyboard Shortcuts

- **Save**: Cmd+S (Mac) / Ctrl+S (Windows)
- **Close editor**: Esc
- **Search**: Cmd+K (Mac) / Ctrl+K (Windows)

### Important URLs

- **Admin Panel**: https://flomadlabsdotcom-strapi-production.up.railway.app/admin
- **Live Website**: https://flolabsrd.com
- **Preview changes**: https://flolabsrd.com (wait 60 seconds after saving)

## Appendix: Field Reference

### Focus Area Fields
- **Title** (required): Focus area name
- **Description** (required): Detailed explanation
- **Link** (required): Internal page URL
- **Cover Image** (required): Feature image
- **Published At**: Publication date/time

### Technology Fields
- **Name** (required): Technology name
- **Description** (required): Technology explanation
- **Image** (required): Technology image
- **Link** (required): Detail page URL
- **Published At**: Publication date/time

### About Project Fields
- **Title** (required): Project name
- **Description** (required): Project explanation
- **Image** (required): Project image
- **Link** (required): External website URL
- **Button Text** (required): CTA button text
- **Button Link** (required): Same as Link
- **Published At**: Publication date/time

---

**Questions?** Don't hesitate to ask for help. The CMS is designed to be user-friendly, and you'll get comfortable with it quickly!
