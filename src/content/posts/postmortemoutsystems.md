---

title: 'The Hidden Cost of "Cheap" Architecture: Why an OutSystems Hack Caused a Week-Long Outage'
published: 2026-05-20
tags: ["Engineering Culture","Tech Debt"]
---

I recently dealt with an incident that took a development environment down for an entire week.

If you just looked at the tickets, you might think the root cause was a network glitch or a botched update. But if you trace the causality back, the real root cause was a fundamental failure in architectural judgment—a decision made years ago to save a few bucks on a licensing bill, which ended up creating a ticking time bomb for production.  

## The Anti-Pattern: Proprietary Platforms + External Databases

We run OutSystems. But instead of using their native database subscription, a legacy architectural decision was made to connect this closed, highly proprietary platform to an external Azure SQL database.

Having worked across multiple companies and architectures, I can tell you: almost no one does this. And there is a very good reason why.

When you use an external database with a proprietary low-code platform, you have to maintain a delicate "bridge" (often via plugin extensions) between the two. Last week, OutSystems ran a routine Windows update. That update shattered the bridge to Azure SQL.

Suddenly, multiple applications started acting up. Batch jobs (timers) began failing across the board.

We actually got incredibly lucky. We took the hit upfront because an outsourced vendor happened to be actively developing on the Dev environment when the update rolled out. But imagine if no one was working in Dev that week. That Windows update would have slid right into Production.

Because the bridge was fundamentally broken, Prod would have gone down, and it would have taken a week to resolve (open the ticket → wait for approval → wait for the vendor to apply the fix).  

## The "License Hack" Availability Risk

To make matters worse, one of the batch jobs that failed was a legacy hack designed to cheat the licensing model. The company only pays for a 2,000-user OutSystems license, so they run a daily script to disable inactive users and stay under the cap.

Hacks like this look fantastic on the initial budget approval. But from an engineering standpoint, they introduce massive availability risks and business continuity threats. You are tying the core availability of your application to a fragile daily batch job just to save on licensing.

## The "Human Toil" Solution (and a Stroke of Pure Luck)

When the bridge broke, the immediate response from the organization was a textbook example of low-maturity firefighting. We ended up in a chaotic meeting room with the CyberSec team, the Infra team, the current Devs, and an Ex-Dev trying to figure out how to patch the connection.

We got incredibly lucky: that Ex-Dev was still at the company, and he managed to list out all the IP addresses of the apps for us. But relying on an ex-developer's memory is not a disaster recovery plan.

And even with his list, we hit a structural wall: OutSystems cannot give us deterministic IP addresses.

Because their infrastructure uses dynamic IPs that can change underneath us, we couldn't just whitelist a static list of addresses on the Azure SQL side. We had to hit the brakes and postpone the Production Windows update to early June just to buy ourselves time to figure out a survival strategy.

Their initial proposed solution for this?
“Whenever OutSystems sends you an email that they are going to do a Windows update, just manually open a ticket to temporarily allow a massive IP range through the firewall.”

I pushed back immediately. What if I miss the email? What if I forget to open the ticket? What if we lose the Excel file containing the complex network mapping? It is completely unsustainable to rely on manual human toil just to prevent a highly foreseeable production outage during a routine vendor update.

This ain't right, and it ain't supposed to happen.

Thankfully, I was able to walk the stakeholders back from the edge, and we agreed on an architectural tradeoff.

Instead of relying on a human-in-the-middle to flip switches every time an email arrives, we agreed to permanently allow the ranged IP address block—but only under the strict condition that OutSystems can officially confirm those provided IPs are dedicated exclusively to our tenant.

It’s a compromise between security and availability, but it removes the human error from the equation.

## The Real Fix: Pay Upfront, or Pay with Outages

The cheapest way to build software is to design it right the first time.

If you are going to buy into a highly proprietary infrastructure like OutSystems, Mendix, or any similar platform, do not connect it to an external database, whether on-prem or on-cloud. It is not worth the headache. Just buy their database subscription.

Yes, the invoice is higher. But using the native database means you don’t have to maintain fragile extension plugins, you don't have to map dynamic subnets across external firewalls, and a routine vendor update won't bring your entire business to a halt.

## The Missing "Sixth Sense" in Thai Software Culture

The core problem in our field is that we often fail to see the hidden costs. We assume that if a workaround doesn't have an immediate price tag, it is "free."

Seeing these hidden costs requires architectural judgment. It requires a "sixth sense" that you only get from the battle scars of maintaining and developing critical, long-term software.

Unfortunately, the Thai software landscape heavily lacks this judgment. Our industry is saturated with contract-based, small-scale applications. Half of the software being built today is just "demo-ware"—applications designed solely to look good on a PowerPoint slide for an executive presentation. Nobody actually uses them, and they are abandoned and destroyed within a year or two.

When your entire culture optimizes for short-term demos rather than long-term reliability, you end up with architectures that require a room full of engineers and a manual support ticket just to survive a Windows update.

Stop outsmarting your tools. Design for sustainability, not just the initial bill.