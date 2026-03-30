# Make.com Automation Workflows Guide

This folder contains the step-by-step setup instructions for your Make.com (Teams Plan) workflows. Since Make.com scenarios require authentication with your personal Google and Cal.com accounts, they must be created via the Make.com visual builder UI.

Follow these blueprints to create your automations.

## 1. Cal.com -> Confirmation Email
**Trigger:** Custom Webhook
- In Cal.com -> Settings -> Webhooks, add a new webhook for `Booking Created` and paste the Make.com webhook URL.
**Action:** Gmail `Send an Email`
- Connection: Your Google Account
- To: `1.attendees[].email` (mapped from webhook payload)
- Subject: `Booking Confirmed: Discovery Call with Edmond Moepswa`
- Content: "Hi `1.attendees[].name`, looking forward to our call on `1.startTime`..."

## 2. Cal.com -> Google Sheet Lead Tracking
**Trigger:** Custom Webhook (use the same one as above, just add another module routed from it)
**Action:** Google Sheets `Add a Row`
- Connection: Your Google Account
- Spreadsheet: `Portfolio Leads CRM`
- Values: Name (`1.attendees[].name`), Email (`1.attendees[].email`), Date (`1.startTime`), Service Interest (if custom field mapped).

## 5. Contact Form -> Email Reply
**Trigger:** Custom Webhook
- Point your portfolio contact form to POST to this webhook URL.
**Router & Text Parser:** Parse intent (e.g. if message contains "website", "branding")
**Action:** Gmail `Send an Email`
- To: mapped from form email
- Content: Tailored "thanks for reaching out" based on the intent.

## 6. Calculator Estimate > P2000 -> Email Offer
**Trigger:** Custom Webhook
- Point the calculator "Request Formal Quote" button to this webhook.
**Filter:** Only continue if `estimate > 2000`
**Action:** Gmail `Send an Email`
- Content: "I noticed you were exploring a high-tier project on my site..."

## 8. Weekly Vercel Analytics Report
**Trigger:** Tools `Basic Trigger` (schedule: Every Monday at 08:00)
**Action:** HTTP `Make a request`
- URL: `https://api.vercel.com/v8/projects/prj_nUViWommgVqip69ZZ1UtxsRBaW5q/analytics`
- Headers: `Authorization: Bearer mQNvg7mTHAkDqYLBdJKeThov`
**Action:** Gmail `Send an Email`
- To: `edmond.moepswa@gmail.com`
- Content: Summarize the JSON response into a readable report.

## 9. Cal.com Cancelled -> Re-engagement Email
**Trigger:** Custom Webhook
- In Cal.com -> Webhooks, set to `Booking Cancelled`.
**Action:** Gmail `Send an Email`
- Content: "Sorry we couldn't connect. Here is a link to reschedule when you're ready + a special discount code."

## 11. Gumroad Download -> Nurture Sequence
**Trigger:** Gumroad `Watch Sales` (or Custom Webhook from Gumroad Ping)
**Action:** Tools `Sleep` (Delay for 1 day)
**Action:** Gmail `Send an Email` (Email 1)
**Action:** Tools `Sleep` (Delay for 3 days)
**Action:** Gmail `Send an Email` (Email 2)
