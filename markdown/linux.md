<!-- omit in toc -->
## Migration from Windows to Linux

- [Motivation (⌚15 min)](#motivation-15-min)
  - [Windows bad](#windows-bad)
  - [Microsoft bad](#microsoft-bad)
  - [Linux good](#linux-good)
  - [Open source good](#open-source-good)
- [Choosing a distro](#choosing-a-distro)
  - [Which distros are out there?](#which-distros-are-out-there)
  - [Prelude to the fun part](#prelude-to-the-fun-part)

Every several years, I go through an audit of my accounts and clean up my digital life: security and privacy settings for various essential services, deleting old accounts I don't use anymore, updating info and pruning what doesn't need to be there, and the like. It's sort of like spring cleaning, where you put it off for a while because there are always higher priority things to deal with, but when you finally get around to it and get it done, it's extremely satisfying. It creates a sort of mental reset and a clearer headspace.

Well, due to a confluence of events, what started as a "spring cleaning" turned into the good kind of [yak shaving](https://en.wiktionary.org/wiki/yak_shaving) and a willingness to invest weeks, if not months, of effort to migrate from Windows to Linux. This page documents that journey, from motivation to all the nitty gritty technical details and choices I had (and have) to make along the way. This is an ongoing project after all. The individual sections are collapsible and meant to be relatively independent of each other, so you can read what you find most relevant or interesting.

I also tag each section with an estimated reading time to make it easier to choose what to focus on or skim/skip over. The estimates aren't meant to be absolute, but rather comparable to each other based on [speaking time](https://wordcounter.net/), as this sort of text is denser than light reading. If you want to browse some of the links included, expect that you'll need to set aside more time.

### Motivation (⌚15 min)

<details open="true">

<summary>Click to show or hide</summary>

As I know how the scope of these things can balloon, where a week or two long project suddenly turns into several months of effort, I knew that I needed to be doing this for the right reasons before I committed. There was no halfway done, where I could simply build an MVP and call it a day. I would be fully committed to seeing this through, as success or failure would be much more binary than other projects tend to be in the real world. I prefer to think of this migration as a an [atomic](https://simple.wikipedia.org/wiki/Atomicity) operation.

This is of course because I rely on my PC for quite a lot, and it needs to be in a useable state basically at all times. I also don't want to have to tinker with it as a hobby. I have both more interesting and more important things to do with my time. But the details for that are more relevant to explore when it comes to [choosing a distro](). The core motivation must come first.

I would say that it breaks down into several reasons. To put it in a bit of a silly way:

1. Windows bad
2. Microsoft bad
3. Linux good
4. Open source good

I am liable to waffle and want to caveat everything with excessive detail, but I will try to resist that urge and keep it straight and to the point. The decision ultimately boils down to the pain of switching to Linux and switching up my workflow being less than the pain of using Windows every day.

I have multiple failed experiments from my past to inform me, namely getting a Macbook for iOS development back around iOS 4, and installing [Arch](https://wiki.archlinux.org/title/Arch_Linux) on a cheap laptop some 6-ish years ago. The first failed because I hated how unproductive I felt on on a Mac. The UI and UX were just not for me, as their core offering is built to be as "simple" as possible, which makes the workflow for developers really difficult out-of-the-box.

As for Arch, I chose a bad first distro to go all-in on, even though I got it [installed](https://wiki.archlinux.org/title/Installation_guide) after some troubleshooting with my specific hardware quirks (WiFi drivers, always). And despite picking up Ubuntu Server years earlier for an assembly language course, which I absolutely fell in love with (the OS and the course), Linux for the desktop was not ready even 5 years ago for anyone but the most motivated users.

A lot has changed in that time though, and all of the following reasons made me decide that it was worth the effort to try once more.

#### Windows bad

Windows 10 was good. I liked it. I was productive on it. It is the OS on which I did a lot of my university work. It worked, and it was stable enough. It got out of my way, and the development tools for it only got better over time.

Windows 11 changed that somewhat, but in exchange there were now things like [WSL](https://learn.microsoft.com/en-us/windows/wsl/about), [VS Code](https://code.visualstudio.com/), [Windows Terminal](https://apps.microsoft.com/detail/9n0dx20hk701), [Chocolatey](https://chocolatey.org/), and [Winget](https://learn.microsoft.com/en-us/windows/package-manager/winget/). And Microsoft opened up more to open source, in an apparently different way to their [EEE](https://en.wikipedia.org/wiki/Embrace,_extend,_and_extinguish) strategy of the past. PowerShell went from the clunkiness of 5.1 to a decent cross-platform scripting language that I still use to this day. There were a lot of things to like about Windows, but chief among them was that it was familiar, comfortable, and I needed to use it for work anyway. But rather PowerShell than JavaScript any day of the week.

I would be remiss not to mention Azure as well, which in my estimation is the best of big three cloud platforms (AWS and GCP being the other two). I would never work for a company that uses AWS for multiple reasons, but most organizations in Denmark are all-in on Microsoft services anyway. The [Azure CLI](https://learn.microsoft.com/en-us/cli/azure/?view=azure-cli-latest) is amazing, Azure itself has a lot of good offerings, and concurrent with their "embrace" of open source, Microsoft's documentation for everything has improved drastically and become much more accessible.

Then, everything changed when Copilot attacked.

Windows changed a lot (for the worse) before then too, but that was a slower boil that was tolerable enough. Performance issues, resource usage (disk space, RAM, and CPU), constant and forced updates and restarts, surveillance and advertising, ever-worsening search, and several increasingly visible [dark patterns](https://www.deceptive.design/types) built into the OS. I could go on, as I can't help but take a sociopolitical lens of analysis to this as well, but just from a technical standpoint, Windows has gotten worse.

The breaking point for me has been the excessive forcing of Copilot into everything. I am largely against AI (in particular, generative AI, LLMs, and the like) for reasons that would take hours to write out. But suffice it to say that I am not happy with being constantly pushed into using one of the most harmful technologies to currently exist in terms of [social](https://www.mdpi.com/2075-4698/16/3/82), [environmental](https://www.lincolninst.edu/publications/land-lines-magazine/articles/land-water-impacts-data-centers/), [political](https://www.uottawa.ca/en/news-all/academic-expertise-technofascism-palantirs-manifesto), [legal](https://www.youtube.com/watch?v=9xJCzKdPyCo), [psychological](https://www.youtube.com/watch?v=DNE0sy7mR5g), and [economic](https://www.youtube.com/watch?v=Q0TpWitfxPk) consequences.

(I'm not even linking to a fully representative subset of the harms, but an accessible sample for each category.)

Windows is fundamentally a [poorly designed](https://en.wikipedia.org/wiki/Windows_Registry) OS and is getting worse: less performant, more buggy, and it feels less and less like you actually own the machine. It is not there to help you, but the company behind it. The power dynamic is inverted: You are the product. I refuse to be dehumanized and commodified in that way.

#### Microsoft bad

If it wasn't clear already, my motivations are first and foremost ethical and political. I cannot get myself to care enough to swap to Linux on purely technical grounds, as "cool technology" is only so intrinsically motivating to me. There needs to be a better reason, and the pain of using a bad OS is actually not sufficient in and of itself.

But, analyze the larger context for *why* that OS is shitty - or rather, [enshittified](https://en.wikipedia.org/wiki/Enshittification) - and suddenly I'm a lot more interested.

Microsoft is Big Tech&trade;, and unless you are so absorbed in the corporate space that you actually think that's a good thing, then there should be an immediate understanding that it's quite bad. At the very least, from a European perspective, there are additional digital sovereignty considerations that make it more worthwhile to look for alternatives. And not just for individuals, but corporations, government institutions, and other organizations alike.

Windows doesn't exist in a vacuum, and Microsoft has prioritized it less as it focuses on services like Azure and Copilot. But even the newer and shinier things (relative to Windows) - LinkedIn and GitHub in particular - are not being well-managed. I have moved off LinkedIn entirely, and while I am dependent on GitHub due to the [network effect](https://en.wikipedia.org/wiki/Network_effect), it has gotten noticeably worse as the tentacles of enshittification have led to very large and noticeable outages.

Most egregious has been the [breaking](https://dev.to/varshithvhegde/github-broke-git-the-merge-queue-bug-that-silently-deleted-your-code-4f7i) of git commit histories, which should *never* happen. Well, that and defaulting to adding AI as a [co-author](https://www.techspot.com/news/112321-microsoft-made-copilot-co-author-every-vs-code.html) to commits even if your code isn't written by AI, but that is a VS Code-specific "feature". And all of this is simultaneous with the rise of Copilot on the platform, which is no coincidence (deep cut pun there).

On GitHub Mobile, there is a whole tab at the bottom dedicated to Copilot, and if you have the feature disabled, there is a button that doesn't look like a button, where if you press it, suddenly Copilot is enabled. And there is no way to fully disable it after the fact. You can disable some things, but you have to do that through the web interface, and you are left with a collection of "features" you never wanted that can never be fully turned off again. Ask me how I know.

So, I am dependent on GitHub because everyone else is on there. I take a hit by not using LinkedIn out of principle and abandoning my hundreds of connections. I need my Microsoft account for several essential things I can't get rid of, but I can rely on it a lot less. I don't really have a need for Office, but I need OneDrive - *for now*. Thankfully, 100 GB for OneDrive is really cheap, but that comes at a cost of my data being on their servers. And while I have loved VS Code before the recent changes, I am willing to move to [Neovim](https://neovim.io/) of all things, which is a sub-project in itself.

Even worse, I have used Edge as my main browser for years. It is Chromium-based, which means I can use most sites without issue and only rarely have to resort to Chrome, and [uBlock Origin](https://ublockorigin.com/) still works on it after Google purposely broke adblocking with their [v3 manifest](https://www.youtube.com/watch?v=JaTRtAwL5e8) for Chrome. Their extension ecosystems are also compatible, which Firefox does not have and is one reason I haven't used it for so long. But, I am willing to find a new workflow.

I want off this ride. Even if I sound too harsh on Microsoft, I am actually being euphemistic. While they are not as harmful to the social fabric as Meta or Amazon or Google (YouTube), that is simply by chance, as they fill a different niche. They are still driven by the same underlying perverse incentives, where they profit off of human suffering and social division, and the democratic levers and civil society mechanisms that should be used to reign them in have utterly failed. The system is designed to be this way, and there are very few direct action approaches that remain to try and undermine their power.

#### Linux good

One of those approaches is Linux. I am happy to have been exposed to it so early on in my education, and with only the terminal and no GUI to rely on. I was already primed for this, as my first language was C, which I taught myself through a used 3rd edition copy of [Learn C on the Mac](https://www.saxo.com/dk/learn-c-on-the-mac_paperback_9781430218098).

I've since had repeated exposure to Linux over the years, always out of choice and interest, as opposed to necessity. I was hacking on [Kali Linux](https://www.kali.org/) when it was still called Backtrack for example. And learning Linux comes with learning the culture, the ethos behind [FOSS](https://en.wikipedia.org/wiki/Free_and_open-source_software), and being exposed to ways of thinking and working that don't exist in a Windows world.

On the technical side, Linux is amazing for running servers. It's running this website right now. As a desktop, it has been lacking, but as stability in the world has rapidly declined over the last couple years (at time of writing in mid-2026) - gee, I wonder who's a perfect embodiment of that systemic rot? - desktop Linux is one of the few things in the world that has gotten better.

And it's not just marginal - it has improved by leaps and bounds. [Wayland](https://wayland.freedesktop.org/) is now the standard for all modern window managers, [Flatpaks](https://flatpak.org/) and [Flathub](https://flathub.org/en) offer easier packaging and distribution of especially GUI programs across multiple distros, and [hardware compatibility](https://www.phoronix.com/review/linux-71-features-changes/2) is much less of an issue. Best of all, the available software has skyrocketed in both quality and [quantity](https://repology.org/repositories/graphs).

The same ethos and communities exist, with some warts and bad actors and toxic spaces, as those people are nearly impossible to escape from nowadays. But by and large there are [welcoming spaces](https://docs.fedoraproject.org/en-US/project/code-of-conduct/) and [well-written documentation](https://wiki.archlinux.org/title/General_recommendations), with an emphasis on helping and sharing and building something that's for everyone who wants to join in.

The good parts of Linux haven't changed: open source, freedom, privacy, security, customization, and adaptability to your needs and goals. It is the latter quality that I appreciate most readily, as I can find something that fits my day-to-day life, while making it as complex or as simple as a I want.

I don't want an OS where I have to constantly spend time managing it or worrying about its stability - I want to do my work and still have time for other things I care about. Moreover, the tech space in general is dominated by some of the most evil companies on the face of the planet, and I want to spend my time helping others, not propping up monsters in human skin.

There is a sociological myopia in the tech space, and over the years my distaste for it has grown. The naïve idea that tech is purely good for society or will solve all our problems is absurd in the face of all the evidence to the contrary, and it has outright disgusted me.

Even now I have a bad taste in my mouth at the thought. But even after 15 years of being in this space, there are redeeming qualities, with ideas and values and communities that can envision a better world. And not just some hypothetical future ideal, but a very real present.

#### Open source good

The ability for Linux to almost entirely avoid enshittification and actually improve, while quality has declined in every other area of tech, is first and foremost due to its *raison d'être*. It was not created to make money; it was created to solve a problem and to benefit others. (This is a somewhat ahistorical retelling, but I'm also using Linux as a stand-in for the broader FOSS movement.)

The best things in the world are like this: Patent-free [high-yield crops](https://en.wikipedia.org/wiki/Norman_Borlaug), [penicillin](https://www.dpma.de/english/our_office/publications/milestones/inventionsthatmadehistory/95yearspenicillin/index.html), or even the vastly undervalued free labor that goes into raising kids. For the latter, it needn't and shouldn't continue to be that way.

I'll be cheeky and say the quiet part loud and proud: It embodies the ideals of socialism and anarchism. And not the popular (mis)conception of these philosophies, but putting into practice what it means for workers to own the means of production, for essential goods and services to be decommodified, and for parallel power structures to exist outside of established hierarchies.

It doesn't matter if other people don't agree, because factually Linux and the wider open source movement and community follows these principles and practices whether people are aware of it [or not](https://en.wikipedia.org/wiki/Epistemic_injustice#Hermeneutical_injustice). Even some anti-social contributors can benefit others with their work, just not with their behavior.

This ethos of building a cooperative ecosystem, where many people volunteer their time and work and share in mutual benefit - that is something I want to see more of in society. The [positive freedoms](https://en.wikipedia.org/wiki/Positive_liberty) of education and self-actualization are vastly preferable to the negative freedom of hyperindividualism.

Like many in my generation, the conditions for my radicalization were set in place due to the financial crisis of 2008, COVID, and several other "once in a lifetime" events (*climate change*) that are becoming yearly occurrences. I was just lucky enough to have the education and disposition to put words to my experiences, and all that needed to happen for me to take action was a catalyzing event that motivated me enough to do something about it.

That is why I am working on this now. I want *not* to be part of "Big Tech" and the nightmare of [technofeudalism](https://www.democracynow.org/2025/10/10/cory_doctorow_part_2), and I want *to* be part of something that actively works to undermine these systems, even as those selfsame companies invest in Linux and related projects.

It is a weird and complex world, but this decision is very simple. It is a middle finger to the [panopticon](https://www.irishlegal.com/articles/uk-home-secretary-dreams-of-ai-powered-panopticon) and the failures of neoliberalism. It is a small act of resistance, and an assertion one of the most fundamental and infringed upon rights of being human: autonomy.

</details>

### Choosing a distro

<details open="true">

<summary>Click to show or hide</summary>

The world is still a messy place, and the Linux and FOSS ecosystems have their flaws and failures. And to make the right decisions for myself, I have to face those shortcomings with eyes wide open. Besides the existing barriers that hinder adoption of Linux on the desktop - namely no standard pre-installed PCs in big box stores, a lack of familiarity from end users, as well as missing suites like Office and Adobe - the next largest barrier for someone actively looking to switch is deciding on *which* Linux to install.

As is often the case in open source, there can sometimes be an excessive abundance of choice, and I consider the agony of choice to sometimes be more of a bug than a feature. You shouldn't have to make 50 decisions just to install an OS, but for better or worse - I'd say better overall, but worse for marketing and adoption - you have to research which flavor of Linux you want to try before you can even install it.

#### Which distros are out there?

TODO: Fix dry, informative tone?

The detail here could get arbitrarily complex, so I will have to oversimplify for brevity (if 2500 words for motivation alone is somehow "brief"). Unlike Windows or macOS, where there is only one main version in use at a time, Linux has several independent distributions, called distros. These distros fall under three main family trees: Debian, RHEL, and Arch.

[Debian](https://www.debian.org/) is a community-made distro of Linux that has been around since the 90s and still has staying power today. It is known for its rock solid stability, long support cycles, and heavy use in the server space, but it doesn't have the shine or appeal of faster moving distros. Still, it's used as the base for [Ubuntu](https://ubuntu.com/), which [Linux Mint](https://linuxmint.com/) and other popular distros then base themselves on. My first experience with Linux was on Ubuntu Server around 2012, and to this day I'm still most comfortable working with Debian-based Linux distros.

[RHEL](https://www.redhat.com/en/technologies/linux-platforms/enterprise-linux), or Red Hat Enterprise Linux, is the largest corporate-backed Linux OS, and it has been on the scene for decades as well. The company behind them used to be independent, but they were bought by IBM several years ago and haven't managed to escape the inevitable cycle of enshittification and putting AI into everything. Still, their offerings remain stable, and I mention them as the base of their family tree due to their enormous influence, despite [Fedora](https://fedoraproject.org/) technically being the upstream distro that RHEL takes from.

"Upstream" here refers to the directional relationship between the code of one distro and another. Ubuntu being based on Debian means that Debian is *upstream* from Ubuntu, and Ubuntu is *downstream*. In a similar vein, Fedora is the upstream for RHEL, as they are the first movers on experimental changes. When those new features become stable enough, IBM/Red Hat then adapts them into RHEL, along with their own contributions. There is a lot of cross-pollination however, where downstream (RHEL) changes are also upstreamed into Fedora, so there is not the same degree of independence between Fedora and RHEL as there is between Debian and Ubuntu or Linux Mint and Ubuntu, despite Fedora also being a community-maintained distro. The soft power and reach of IBM simply extends too far for full independence to be possible.

Ubuntu also happens to be backed by a corporation, namely [Canonical](https://canonical.com/), which is a UK firm that has developed the OS for decades. Debian still manages to stay separate from Ubuntu as a purer upstream, and Linux Mint is a strong community-based distro that strips out unwanted "features" from Ubuntu as a part of their efforts.

The last main tree is [Arch](), which is a fast-moving community-based distro that offers cutting edge to bleeding edge updates and a large offering of user-made packages (more on that in a moment). While Debian-based distros revolve around [long-term support]() (LTS) releases as their core offering, Arch is the exact opposite, functioning under a [rolling release]() model. For example, Linux Mint works in 2-year cycles to align with their Ubuntu base, releasing a new major version of the OS every 2 years, which includes 5 years of support and security updates. With Arch, there is never a new "major" version - you are just expected to keep up with the continuous stream of updates.

Fedora strikes a middle ground between the two, creating short-lived point releases with some soft rolling release updates. They release a new major version every 6 months and offer support for a little over a year. They take risks and embrace new technologies before slower moving distros, but especially in the past few years, they have maintained a reputation of producing a solid and stable desktop OS in spite of that, while still leading the Linux space by defining where the future lies for other distros.

Honestly, I find this stuff actually pretty interesting, but it makes for terribly dry reading. It's necessary background to better understand the choices I have to make, but it sure is difficult to present this in any sort of interesting way. Thankfully, we can now return to the narrativizing and brushing over some of the more boring-sounding details while diving into the interesting ones.

#### Prelude to the fun part

</details>
