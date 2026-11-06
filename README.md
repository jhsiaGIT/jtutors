# JTutor Hub

A responsive, static tutoring website for mathematics and science. It is designed to publish on GitHub Pages and does not require a build step.

## Preview locally

Open `index.html` in a browser. The Google Fonts import requires an internet connection; the site still works without it using fallback fonts.

## Publish with GitHub Pages

1. Create a new GitHub repository (for example, `jtutor-hub`).
2. Upload all files and folders from this project to the repository's **root**.
3. In the repository, open **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Select branch `main` and folder `/ (root)`, then save.
6. Wait for GitHub Pages to publish. The site address will appear in the Pages settings.

## Add your contact email

In `index.html`, find `YOUR_EMAIL@example.com` and replace it with the email address you want students or parents to use.

## Add a resource

1. Upload your PDF to `resources/math/` or `resources/science/` in GitHub.
2. Open `script.js` and find the `resources` array near the top.
3. Add an object for your file, using the path to the uploaded file:

```js
{
  title: "Algebra practice",
  subject: "math",
  description: "A practice worksheet covering linear equations.",
  type: "PDF worksheet",
  file: "resources/math/algebra-practice.pdf"
}
```

Use `subject: "math"` or `subject: "science"`. Save and commit the changes. GitHub Pages will update the site automatically.

## Important notes

- GitHub Pages is static hosting. The resource library is public, and anyone with the site URL can access the files.
- There is no private admin dashboard or secure upload form in this version. You manage the files through your GitHub repository.
- Do not upload student records, private information, or copyrighted teaching materials unless you have permission to share them.
- This version intentionally avoids student accounts and external content-management logins.
