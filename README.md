# HourGym Intro Landing Site

Public marketing and compliance site for **HourGym** — the India-first hourly gym booking platform. This Next.js project introduces the product, publishes legal and support pages, and routes operators to the secure web console used by administrators and gym owners.

## Repository layout

| Path | Purpose |
| --- | --- |
| `src/app/` | App Router pages: home, about, contact, privacy, admin, gym owner |
| `src/components/` | Shared header, footer, page shell, portal access card |
| `src/content/privacy-policy.tsx` | Full privacy policy copy for store listings and in-app links |
| `src/lib/site.ts` | Site constants: contact email, admin login URL, navigation |
| `logo.png` | Canonical brand asset at the project root |
| `public/logo.png` | Web-served logo copied automatically before dev/build |

## Product overview

**HourGym** helps customers discover partner gyms, compare hourly plans, reserve training slots, and pay for real-world gym access through **Razorpay**. Unpaid sessions remain in the cart until checkout succeeds; confirmed bookings appear in **My Bookings** after payment verification.

The ecosystem has three surfaces:

1. **Customer mobile app (Flutter)** — browse gyms, cart, checkout, bookings, profile, legal links, account deletion.
2. **Admin panel (web)** — platform operations for HourGym staff.
3. **Gym owner portal (web)** — partner gym operators manage listings and booking activity.

Production API and operations login: [https://hourgym-wcpg.onrender.com/login](https://hourgym-wcpg.onrender.com/login)

## Admin panel

The **Admin Command Center** is for authorized HourGym operators.

Typical capabilities:

- Dashboard and operational overview
- Gym catalog management, pricing, slots, and media
- User administration and suspension
- Booking oversight, finance views, subscriptions, and reviews moderation
- Notifications and platform configuration tasks exposed in the admin UI

Access is restricted to admin accounts. From this landing site, open **Admin Panel** (`/admin`) and use **Open secure login** to reach the production login page.

## Gym owner panel

The **Gym Owner Portal** uses the same secure login host as the admin panel. Owners sign in with their registered **gym name** and **owner mobile number**, then manage partner-facing workflows such as booking status and dashboard views available to owners.

From this landing site, open **Gym Owner** (`/gym-owner`) and use **Open secure login** to reach [https://hourgym-wcpg.onrender.com/login](https://hourgym-wcpg.onrender.com/login).

## Customer app features

- Registration and login with profile management
- Gym discovery with optional location for nearby distance
- Hourly booking flow with cart vs paid booking separation
- Razorpay checkout for physical gym sessions (not digital IAP)
- My Bookings for paid sessions
- Privacy policy, terms, support contact, and in-app account deletion
- Dark-themed UI consistent with HourGym branding

## Landing site pages

| Route | Description |
| --- | --- |
| `/` | Product overview, feature highlights, links to operator pages |
| `/about` | About the mobile app, website, and audiences served |
| `/contact` | Support email and guidance for effective requests |
| `/privacy` | Full privacy policy; contact email **hourgymapp@gmail.com** |
| `/admin` | Admin panel entry; links to production login |
| `/gym-owner` | Gym owner entry; links to production login |

**Support and privacy contact:** [hourgymapp@gmail.com](mailto:hourgymapp@gmail.com)

## Design system

The landing site matches the HourGym admin website:

- **Heading font:** Orbitron
- **Body font:** Rajdhani
- **Palette:** dark background, gold accents, red primary actions
- **Logo:** replace `logo.png` in the project root, then run `npm run sync-logo` or start dev/build

## Local development

Requirements: **Node.js 20.x**, npm.

```bash
cd hourgymintro
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Production build:

```bash
npm run build
npm run start
```

## Deployment notes

- Set the public site URL in Play Console and App Store Connect as the **Privacy Policy URL** once deployed.
- Keep the privacy page contact email aligned with **hourgymapp@gmail.com**.
- Operator login should continue to point at the production console URL unless you intentionally change `ADMIN_LOGIN_URL` in `src/lib/site.ts`.

## Google Play guidance

- **Category:** Health & Fitness or Lifestyle
- **Privacy policy URL:** deployed `/privacy` on this site
- **Data safety:** disclose account info (name, email, phone), optional location, and payment metadata processed via Razorpay; no card numbers stored on HourGym servers
- **App access:** provide reviewer login if the app requires authentication
- **Payments:** bookings are for in-person gym access; Razorpay handles payment for physical services
- **Permissions:** declare only permissions the shipped app uses; remove unused SDKs from release builds
- **Account deletion:** must be available in-app where registration exists
- **Target API / signing:** upload a release-signed AAB with current target API policy compliance

## Apple App Store guidance

- **Privacy policy URL:** deployed `/privacy`
- **App Privacy labels:** align with the privacy policy (contact info, optional location, purchase metadata)
- **Review notes:** explain test account, booking flow, and Razorpay payment for physical gym sessions
- **Guideline 3.1.1:** payments are for real-world gym access via Razorpay, not digital content requiring Apple IAP
- **Export compliance:** standard HTTPS-only apps typically qualify for exempt encryption declarations
- **Account deletion:** required in-app for apps that support account creation
- **Screenshots and metadata:** use HourGym branding, accurate feature descriptions, and real device captures

## Related projects in the monorepo

- `hourgym/` — Flutter customer mobile app
- `hourgym-web/` — Next.js API, admin console, owner portal, and operational backend

## Maintenance checklist

- Update privacy copy and “Last updated” when data practices change
- Keep admin and gym owner links synchronized with the live operations host
- Rebuild and redeploy after branding or legal changes
- Verify contact mailto links and external login URLs after each production deploy
