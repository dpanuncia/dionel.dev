// ============================================================
//  CONTENT.JS — YOUR WEEKLY UPDATE FILE
//  This is the ONLY file you need to edit to update your site.
//
//  HOW TO ADD A BLOG POST:
//  1. Copy one of the objects inside BLOG array
//  2. Paste it at the TOP of the array (newest first)
//  3. Fill in your title, date, category, readTime, preview, content
//  4. Save the file and push to GitHub
//  Site updates in ~60 seconds. Done.
//
//  CATEGORIES: "STORY" | "WALKTHROUGH" | "OPINION" | "TECHNICAL" | "RESEARCH"
// ============================================================

const CONTENT = {

  // ----------------------------------------------------------
  //  PERSONAL INFO — update once, shows everywhere
  // ----------------------------------------------------------
  info: {
    name:        "YOUR NAME",
    title:       "Network & Cybersecurity Engineer",
    location:    "Your City, State",
    school:      "Your School — Your Degree",
    schoolDates: "YYYY – YYYY (Expected)",
    email:       "you@email.com",
    github:      "github.com/yourhandle",
    linkedin:    "linkedin.com/in/yourname",
    hackthebox:  "app.hackthebox.com/profile/you",
    tryhackme:   "tryhackme.com/p/yourhandle",
    resumeUrl:   "https://drive.google.com/your-resume-link",
    // What shows on the home page learning line
    currentlyLearning: ["Sec+ exam prep", "CCNA labs", "Python automation"],
    // Status shown on home page
    status: "OPEN TO OPPORTUNITIES",
  },

  // ----------------------------------------------------------
  //  CTF / PLATFORM STATS — update whenever your stats change
  // ----------------------------------------------------------
  ctfStats: [
    { platform: "HackTheBox",   stat: "Rank: Pro Hacker", pct: 55 },
    { platform: "TryHackMe",    stat: "47 rooms",          pct: 70 },
    { platform: "Cisco NetAcad",stat: "12 courses",        pct: 80 },
  ],

  // ----------------------------------------------------------
  //  CERTIFICATIONS — update status as you earn them
  //  status: "earned" | "progress" | "planned"
  // ----------------------------------------------------------
  certs: [
    { name: "CompTIA A+",                vendor: "CompTIA · Core 1 & Core 2",       status: "earned"   },
    { name: "CompTIA Network+",          vendor: "CompTIA · N10-009",               status: "earned"   },
    { name: "CompTIA Security+",         vendor: "CompTIA · SY0-701",               status: "progress" },
    { name: "Cisco CCNA",                vendor: "Cisco · 200-301",                 status: "planned"  },
    { name: "CEH — Certified Ethical Hacker", vendor: "EC-Council",                status: "planned"  },
    { name: "OSCP",                      vendor: "Offensive Security · Long-term",  status: "planned"  },
  ],

  // ----------------------------------------------------------
  //  HOME LAB HARDWARE — add your actual gear here
  // ----------------------------------------------------------
  homelab: {
    // Overall lab status: "initializing" | "active" | "expanding"
    status: "initializing",
    statusNote: "Hardware acquired. Lab build in progress.",
    hardware: [
      { type: "Router",  model: "Your Router Model",  qty: 1, notes: "Edge/WAN router" },
      { type: "Switch",  model: "Your Switch Model",  qty: 1, notes: "Core L2/L3"      },
      // Add more hardware here:
      // { type: "Router", model: "Cisco 2911", qty: 1, notes: "Branch router" },
    ],
    // Planned configs — check them off as you complete them
    // status: "planned" | "in-progress" | "done"
    planned: [
      { task: "Basic router/switch connectivity",      status: "planned"     },
      { task: "VLAN segmentation across switches",     status: "planned"     },
      { task: "OSPF routing between routers",          status: "planned"     },
      { task: "pfSense firewall deployment",           status: "planned"     },
      { task: "Snort IDS on mirrored port",            status: "planned"     },
      { task: "Syslog server + ELK stack ingestion",   status: "planned"     },
      { task: "Site-to-site VPN between segments",     status: "planned"     },
    ],
  },

  // ----------------------------------------------------------
  //  BLOG POSTS — ADD NEW POSTS AT THE TOP (newest first)
  //
  //  TO ADD A POST: copy the block below, paste at the TOP,
  //  fill it in, save, and push to GitHub.
  //
  //  { date: "Month YYYY", category: "OPINION", readTime: "5 min read",
  //    title: "Your Title Here",
  //    preview: "One or two sentence summary shown on the feed.",
  //    content: `Your full post content goes here.
  //              You can write as much as you want.
  //              Line breaks are preserved.` },
  // ----------------------------------------------------------
  blog: [
    {
      date: "March 2025",
      category: "STORY",
      readTime: "6 min read",
      title: "Why I Put Linux on My Old Laptop — and Why I Went with Debian",
      preview: "My old laptop was collecting dust. Instead of tossing it, I wiped it and installed Debian — here's what that taught me and why every aspiring engineer should do the same.",
      content: `Your full post content goes here. Write as much as you want.\n\nTalk about the laptop, the distro-hopping, why you landed on Debian, what you learned in the process. This is your voice — write it how you talk.`,
    },
    {
      date: "Feb 2025",
      category: "WALKTHROUGH",
      readTime: "8 min read",
      title: "Setting Up a Home Lab on a Budget",
      preview: "You don't need enterprise gear. Here's the exact setup I use — old laptops, cheap switches, and free hypervisors — to practice real skills.",
      content: `Full walkthrough content goes here.`,
    },
    {
      date: "Jan 2025",
      category: "OPINION",
      readTime: "4 min read",
      title: "Certs vs Skills: What Actually Gets You Hired in Cybersecurity",
      preview: "A realistic take on the cert treadmill, what hiring managers actually look for, and how a portfolio speaks louder than any badge.",
      content: `Full post content goes here.`,
    },
    {
      date: "Dec 2024",
      category: "TECHNICAL",
      readTime: "6 min read",
      title: "Understanding the OSI Model Through Real Packet Captures",
      preview: "Instead of memorizing layers, let's watch them in action — using Wireshark to see how data actually flows at each level.",
      content: `Full post content goes here.`,
    },
  ],

  // ----------------------------------------------------------
  //  NOC AUTOMATION PROJECTS
  //  Add new project cards here as you build them
  // ----------------------------------------------------------
  nocProjects: [
    { tag: "DOCUMENTATION", name: "Alert Triage Runbook",   desc: "Step-by-step playbook for classifying and escalating network alerts. Based on real NOC workflows.",                          badge: "PDF"      },
    { tag: "SCRIPTING",     name: "Ticket Auto-Generator",  desc: "Python script parsing SNMP traps to auto-create ServiceNow tickets with severity tagging.",                                  badge: "Python"   },
    { tag: "DASHBOARD",     name: "Monitoring Dashboard",   desc: "Grafana + Prometheus for visualizing network health metrics across a simulated NOC environment.",                            badge: "Grafana"  },
    { tag: "PROCESS",       name: "Escalation Matrix",      desc: "Severity tiers and escalation paths for common NOC incidents with defined response SLAs.",                                  badge: "DOCX"     },
  ],

  // ----------------------------------------------------------
  //  NETWORK / PACKET TRACER LABS
  // ----------------------------------------------------------
  packetTracerLabs: [
    { tag: "ROUTING",   name: "OSPF Multi-Area Lab",   desc: "OSPF across 3 areas with ABR, stub areas, and route summarization.",       badge: ".pkt" },
    { tag: "SWITCHING", name: "VLAN Segmentation",     desc: "Inter-VLAN routing with Layer 3 switch, trunk ports, and access layer.",   badge: ".pkt" },
    { tag: "SECURITY",  name: "ACL Firewall Rules",    desc: "Extended ACLs restricting traffic between departments with logging.",       badge: ".pkt" },
    { tag: "WAN",       name: "Site-to-Site VPN",      desc: "IPSec VPN tunnel between two branch offices using Cisco IOS crypto maps.", badge: ".pkt" },
  ],

  physicalLabs: [
    { tag: "HOME LAB", name: "pfSense Firewall Setup", desc: "Deployed pfSense on bare metal with VLAN segmentation and Snort IDS.", badge: "Writeup" },
    { tag: "CAPTURE",  name: "Wireshark Analysis",     desc: "Packet capture of real traffic — DNS, HTTP, TLS handshakes documented.", badge: "PCAP"    },
  ],

  // ----------------------------------------------------------
  //  LINUX PROJECTS
  // ----------------------------------------------------------
  linuxProjects: [
    { tag: "SYSADMIN",   name: "Debian Home Server",       desc: "SSH hardening, UFW firewall, fail2ban, NGINX reverse proxy, automated backups.", badge: "Writeup" },
    { tag: "SCRIPTING",  name: "Bash Automation Scripts",  desc: "Log parsing, user management, and network diagnostic scripts.",                   badge: "GitHub"  },
    { tag: "SECURITY",   name: "Hardening Checklist",      desc: "CIS-inspired hardening guide for Debian systems. Built from scratch.",            badge: "PDF"     },
    { tag: "MONITORING", name: "ELK Stack Log Analysis",   desc: "Elasticsearch + Logstash + Kibana ingesting syslog data from home lab hosts.",    badge: "Lab"     },
  ],

  // ----------------------------------------------------------
  //  SCHOOL DOCS
  // ----------------------------------------------------------
  schoolDocs: [
    { tag: "PAPER",     course: "Network Security — Fall 2024",  title: "Zero Trust Architecture: Implementation in Enterprise Networks",     preview: "Analyzed the shift from perimeter-based to identity-centric security. Covers NIST SP 800-207.",  badge: "PDF · 12 pages" },
    { tag: "LAB REPORT",course: "Routing & Switching — Spring 2024", title: "BGP Route Manipulation and Traffic Engineering Lab",            preview: "Configuring eBGP between simulated ISPs with route filtering, local preference, and MED.",        badge: "PDF · 8 pages"  },
    { tag: "CAPSTONE",  course: "Senior Project — 2025",         title: "NOC Automation Pipeline: From Alert to Resolution",                 preview: "End-to-end NOC automation system to cut MTTR through intelligent triage and auto-ticketing.",     badge: "PDF · 24 pages" },
  ],

  // ----------------------------------------------------------
  //  INDEPENDENT RESEARCH
  // ----------------------------------------------------------
  research: [
    { title: "Comparative Analysis: Snort vs Suricata for Home Lab IDS",           date: "2025", preview: "Tested both IDS engines on identical traffic — detection rates, resource usage, and rule management compared.", badge: "PDF" },
    { title: "DNS Security: DNSSEC, DoH, and DoT — Which Should You Deploy?",      date: "2024", preview: "Deep dive into DNS encryption protocols, threat models, and deployment tradeoffs for small and enterprise envs.", badge: "PDF" },
  ],

};
