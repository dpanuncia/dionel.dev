const CONTENT = {

  info: {
    name:        "Dionel Panuncia",
    title:       "Network & Cybersecurity Engineer",
    location:    "Grand Rapids, Michigan",
    school:      "GRCC - Network Administration | Davenport University - Cyber Defense",
    schoolDates: "2023 - 2026 (Expected)",
    email:       "dpanuncia@gmail.com",
    github:      "github.com/dpanuncia",
    linkedin:    "linkedin.com/in/dpanuncia",
    hackthebox:  "app.hackthebox.com/profile/dpanuncia",
    tryhackme:   "tryhackme.com/p/dpanuncia",
    resumeUrl:   "https://drive.google.com/your-resume-link",
    currentlyLearning: ["Sec+ exam prep", "CCNA labs", "Python automation"],
    status: "OPEN TO OPPORTUNITIES",
  },

  ctfStats: [
    { platform: "Cisco NetAcad", stat: "7 courses", pct: 80 },
  ],

  certs: [
    { name: "URSCA - Unifi Routing, Switching and CyberSecurity Administrator", vendor: "Wifi-U",            status: "earned"   },
    { name: "CompTIA Security+",                                                 vendor: "CompTIA SY0-701",   status: "progress" },
    { name: "Cisco CCNA",                                                        vendor: "Cisco 200-301",     status: "planned"  },
  ],

  homelab: {
    status: "initializing",
    statusNote: "Hardware acquired. Lab build in progress.",
    hardware: [
      { type: "Router", model: "Your Router Model", qty: 1, notes: "Edge/WAN router" },
      { type: "Switch", model: "Your Switch Model", qty: 1, notes: "Core L2/L3"      },
    ],
    planned: [
      { task: "Basic router/switch connectivity",    status: "planned" },
      { task: "VLAN segmentation across switches",   status: "planned" },
      { task: "OSPF routing between routers",        status: "planned" },
      { task: "pfSense firewall deployment",         status: "planned" },
      { task: "Snort IDS on mirrored port",          status: "planned" },
      { task: "Syslog server + ELK stack ingestion", status: "planned" },
      { task: "Site-to-site VPN between segments",   status: "planned" },
    ],
  },

  blog: [
    {
      date: "March 2025",
      category: "STORY",
      readTime: "6 min read",
      title: "Why I Put Linux on My Old Laptop and Why I Went with Debian",
      preview: "My old laptop was collecting dust. Instead of tossing it, I wiped it and installed Debian and here is what that taught me.",
      content: "Your full post content goes here. Write as much as you want.",
    },
    {
      date: "Feb 2025",
      category: "WALKTHROUGH",
      readTime: "8 min read",
      title: "Setting Up a Home Lab on a Budget",
      preview: "You don't need enterprise gear. Here's the exact setup I use to practice real skills.",
      content: "Full walkthrough content goes here.",
    },
    {
      date: "Jan 2025",
      category: "OPINION",
      readTime: "4 min read",
      title: "Certs vs Skills: What Actually Gets You Hired in Cybersecurity",
      preview: "A realistic take on the cert treadmill and what hiring managers actually look for.",
      content: "Full post content goes here.",
    },
    {
      date: "Dec 2024",
      category: "TECHNICAL",
      readTime: "6 min read",
      title: "Understanding the OSI Model Through Real Packet Captures",
      preview: "Instead of memorizing layers, lets watch them in action using Wireshark.",
      content: "Full post content goes here.",
    },
  ],

  nocProjects: [
    { tag: "DOCUMENTATION", name: "Alert Triage Runbook",  desc: "Step-by-step playbook for classifying and escalating network alerts based on real NOC workflows.", badge: "PDF"     },
    { tag: "SCRIPTING",     name: "Ticket Auto-Generator", desc: "Python script parsing SNMP traps to auto-create ServiceNow tickets with severity tagging.",         badge: "Python"  },
    { tag: "DASHBOARD",     name: "Monitoring Dashboard",  desc: "Grafana and Prometheus for visualizing network health metrics across a simulated NOC environment.", badge: "Grafana" },
    { tag: "PROCESS",       name: "Escalation Matrix",     desc: "Severity tiers and escalation paths for common NOC incidents with defined response SLAs.",          badge: "DOCX"    },
  ],

  packetTracerLabs: [
    { tag: "ROUTING",   name: "OSPF Multi-Area Lab", desc: "OSPF across 3 areas with ABR, stub areas, and route summarization.",       badge: ".pkt" },
    { tag: "SWITCHING", name: "VLAN Segmentation",   desc: "Inter-VLAN routing with Layer 3 switch, trunk ports, and access layer.",   badge: ".pkt" },
    { tag: "SECURITY",  name: "ACL Firewall Rules",  desc: "Extended ACLs restricting traffic between departments with logging.",       badge: ".pkt" },
    { tag: "WAN",       name: "Site-to-Site VPN",    desc: "IPSec VPN tunnel between two branch offices using Cisco IOS crypto maps.", badge: ".pkt" },
  ],

  physicalLabs: [
    { tag: "HOME LAB", name: "pfSense Firewall Setup", desc: "Deployed pfSense on bare metal with VLAN segmentation and Snort IDS.",   badge: "Writeup" },
    { tag: "CAPTURE",  name: "Wireshark Analysis",     desc: "Packet capture of real traffic. DNS, HTTP, TLS handshakes documented.",  badge: "PCAP"    },
  ],

  linuxProjects: [
    { tag: "SYSADMIN",   name: "Debian Home Server",      desc: "SSH hardening, UFW firewall, fail2ban, NGINX reverse proxy, automated backups.", badge: "Writeup" },
    { tag: "SCRIPTING",  name: "Bash Automation Scripts", desc: "Log parsing, user management, and network diagnostic scripts.",                   badge: "GitHub"  },
    { tag: "SECURITY",   name: "Hardening Checklist",     desc: "CIS-inspired hardening guide for Debian systems. Built from scratch.",            badge: "PDF"     },
    { tag: "MONITORING", name: "ELK Stack Log Analysis",  desc: "Elasticsearch, Logstash, and Kibana ingesting syslog data from home lab hosts.", badge: "Lab"     },
  ],

  schoolDocs: [
    { tag: "PAPER",      course: "Network Security Fall 2024",      title: "Zero Trust Architecture: Implementation in Enterprise Networks", preview: "Analyzed the shift from perimeter-based to identity-centric security. Covers NIST SP 800-207.", badge: "PDF 12 pages"  },
    { tag: "LAB REPORT", course: "Routing and Switching Spring 2024", title: "BGP Route Manipulation and Traffic Engineering Lab",          preview: "Configuring eBGP between simulated ISPs with route filtering, local preference, and MED.",       badge: "PDF 8 pages"   },
    { tag: "CAPSTONE",   course: "Senior Project 2025",              title: "NOC Automation Pipeline: From Alert to Resolution",            preview: "End-to-end NOC automation system to cut MTTR through intelligent triage and auto-ticketing.",    badge: "PDF 24 pages"  },
  ],

  research: [
    { title: "Comparative Analysis: Snort vs Suricata for Home Lab IDS",      date: "2025", preview: "Tested both IDS engines on identical traffic. Detection rates, resource usage, and rule management compared.", badge: "PDF" },
    { title: "DNS Security: DNSSEC, DoH, and DoT Which Should You Deploy?",   date: "2024", preview: "Deep dive into DNS encryption protocols, threat models, and deployment tradeoffs for small and enterprise envs.", badge: "PDF" },
  ],

};
