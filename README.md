# DevOps Training — CI/CD Website

A simple static site deployed to **Amazon S3** and served through **CloudFront**,
with an automated **GitHub Actions** pipeline that runs on every push to `main`.

## Pipeline
Push to main → GitHub Actions → Test → Build/Package → Deploy to S3 → Invalidate CloudFront

## Required GitHub repository secrets
Add these under **Settings → Secrets and variables → Actions → New repository secret**:

| Secret name             | Value                                             |
|-------------------------|---------------------------------------------------|
| `AWS_ACCESS_KEY_ID`     | Access key of the deploy IAM user                 |
| `AWS_SECRET_ACCESS_KEY` | Secret key of the deploy IAM user                 |
| `S3_BUCKET`             | Your bucket name (e.g. `devops-cicd-yourname`)    |
| `CLOUDFRONT_ID`         | CloudFront distribution ID (e.g. `E123ABC456DEF`) |

Region is set to `ap-south-1` in the workflow.

## To prove the pipeline works
1. Change `VERSION` in `script.js` and the badge in `index.html` from `1.0` to `2.0`.
2. Commit and push to `main`.
3. Watch the run in the **Actions** tab.
4. Refresh the CloudFront URL — it shows Version 2.0.
