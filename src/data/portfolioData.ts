import hamzaProfile from '../assets/images/hamza 1.jpeg';
import urbanwearImage from '../assets/images/urbanwear_campaign_ad_1793592337823.jpg';
import glowNestImage from '../assets/images/glownest_skincare_ad_1793592337195.jpg';
import lahoreBitesImage from '../assets/images/lahore_bites_food_ad_1793592338128.jpg';
export interface Project {
  id: string;
  title: string;
  brand: string;
  tagline: string;
  category: 'Meta Ads' | 'Google Ads' | 'TikTok Ads' | 'Multi-Platform';
  disclaimer: string;
  objective: string;
  targetAudience: {
    primary: string;
    demographics: string;
    interestsAndBehaviors: string[];
    exclusions?: string[];
  };
  strategy: string;
  campaignStructure: {
    stage: string;
    objective: string;
    adSetsOrGroups: string[];
    biddingAndBudget: string;
  }[];
  sampleAdCopy: {
    headlines: string[];
    primaryText: string[];
    callToAction: string;
    hookOrAngle?: string;
  };
  creativeMockup: {
    format: string;
    conceptDescription: string;
    visualNotes: string;
    imagePath?: string;
  };
  optimizationApproach: string[];
  sampleMetrics: {
    label: string;
    value: string;
    context: string;
  }[];
}

export interface Experience {
  role: string;
  company: string;
  location: string;
  period: string;
  type: string;
  responsibilities: string[];
}

export interface Education {
  degree: string;
  institution: string;
  location: string;
  period: string;
  status?: string;
}

export interface Certification {
  title: string;
  issuer: string;
  status: 'Completed' | 'In Progress' | 'Credential Issued';
  yearOrDetails: string;
  skillsFocus: string[];
}

export interface SkillCategory {
  id: string;
  name: string;
  platform: 'Meta Ads' | 'Google Ads' | 'TikTok Ads';
  summary: string;
  coreCapabilities: string[];
  approach: string;
  badgeColor: string;
}

export const PERSONAL_DETAILS = {
  name: 'Muhammad Hamza',
  title: 'Digital Advertising Specialist',
  headline: 'Meta Ads | Google Ads | TikTok Ads',
  location: 'Lahore, Pakistan',
  email: 'hamzaiworks289@gmail.com',
  phone: '+92 309 194 7695',
  phoneDisplay: '+92 309 194 7695',
  linkedIn: 'https://linkedin.com/in/muhammadhumxa',
  intro:
    "Hi, I'm Muhammad Hamza, a Digital Advertising Specialist focused on helping businesses reach the right audience through strategic paid advertising. I specialize in Meta Ads, Google Ads, and TikTok Ads, with a focus on campaign planning, audience targeting, ad creatives, optimization, and performance analysis.",
  heroHeadline: 'Turning Digital Advertising Into Smarter Business Growth.',
  heroSubheadline:
    'Strategic, data-guided campaign architecture across Meta, Google, and TikTok. Built around audience intent, creative iteration, and rigorous budget efficiency.',
  profileImage: hamzaProfile,
};

export const CORE_SKILLS: SkillCategory[] = [
  {
    id: 'meta-ads',
    name: 'Meta Ads',
    platform: 'Meta Ads',
    summary:
      'High-impact audience targeting and creative testing across Facebook & Instagram feeds, stories, and reels.',
    coreCapabilities: [
      'Facebook Ads & Instagram Ads',
      'Campaign Setup & Pixel Planning',
      'Audience Research & Detailed Targeting',
      'Ad Creative Strategy & Hook Design',
      'Custom & Lookalike Audiences',
      'Retargeting & Engagement Funnels',
      'Campaign Monitoring & Budget Optimization',
      'Performance Analysis & Creative Fatigue Checks',
    ],
    approach:
      'Structuring full-funnel architectures that move cold prospects to engaged warm audiences and repeat buyers with tailored visual creatives.',
    badgeColor: 'border-blue-500/30 text-blue-400 bg-blue-500/10',
  },
  {
    id: 'google-ads',
    name: 'Google Ads',
    platform: 'Google Ads',
    summary:
      'Capturing high-intent commercial search queries with disciplined keyword match types and persuasive ad copy.',
    coreCapabilities: [
      'Google Search Ads Strategy',
      'Intent-Driven Keyword Research',
      'Search Campaign Structure & Ad Groups',
      'Compelling Ad Copywriting & Extensions',
      'Negative Keyword Management & Waste Reduction',
      'Conversion Tracking Concepts & URL Tagging',
      'Quality Score & Landing Page Alignment',
      'Performance Analysis & Bid Optimization',
    ],
    approach:
      'Harvesting active search intent through tightly grouped keyword themes, proactive negative keyword filtering, and message-match ad headlines.',
    badgeColor: 'border-cyan-500/30 text-cyan-400 bg-cyan-500/10',
  },
  {
    id: 'tiktok-ads',
    name: 'TikTok Ads',
    platform: 'TikTok Ads',
    summary:
      'Native short-form video advertising tailored for fast-paced viral hooks and trend-relevant engagement.',
    coreCapabilities: [
      'TikTok Campaign Setup & Structure',
      'Audience Demographic & Interest Targeting',
      'Short-Form Video Ad Strategy',
      'Creative Research & Trend Spotting',
      'Hook Formulation & Retention Scripting',
      'Campaign Monitoring & Frequency Capping',
      'Budget Optimization & Scaling Rules',
      'Creative Performance Diagnostics',
    ],
    approach:
      'Formulating organic-feeling, hook-first 9:16 short-form video ads designed to stop the scroll in the first 2 seconds.',
    badgeColor: 'border-purple-500/30 text-purple-400 bg-purple-500/10',
  },
];

export const TOOLS_PLATFORMS = [
  {
    name: 'Meta Ads Manager',
    category: 'Paid Social',
    description: 'Campaign setup, A/B creative testing, Advantage+ campaigns, and custom audience segmentation.',
    tag: 'Primary Tool',
  },
  {
    name: 'Google Ads',
    category: 'Search & Intent',
    description: 'Keyword Planner, Search campaigns, match types, ad assets/extensions, and search term reports.',
    tag: 'Primary Tool',
  },
  {
    name: 'TikTok Ads Manager',
    category: 'Short-Form Video',
    description: 'In-Feed video campaigns, Spark Ads setup, creative diagnostics, and objective-based bidding.',
    tag: 'Primary Tool',
  },
  {
    name: 'Google Analytics',
    category: 'Web Analytics',
    description: 'Session evaluation, acquisition channel breakdown, event monitoring, and user journey paths.',
    tag: 'Analytics',
  },
  {
    name: 'Google Search Console',
    category: 'Search Insights',
    description: 'Organic search query inspection, click-through trends, and organic vs. paid intent comparison.',
    tag: 'Insights',
  },
  {
    name: 'Canva',
    category: 'Creative Design',
    description: 'Ad creative mockups, story/reel aspect ratio adaptations, thumbnail design, and visual assets.',
    tag: 'Creative',
  },
  {
    name: 'Microsoft Excel',
    category: 'Data & Reporting',
    description: 'Campaign performance logging, pivot analysis, budget pacing sheets, and KPI consolidation.',
    tag: 'Reporting',
  },
];

export const PROJECTS: Project[] = [
  {
    id: 'urbanwear-meta-ads',
    title: 'UrbanWear — Meta Ads Campaign',
    brand: 'UrbanWear',
    tagline: 'Contemporary Streetwear & Urban Apparel',
    category: 'Meta Ads',
    disclaimer: 'Self-Initiated Concept Project — Portfolio Demonstration',
    objective: 'Drive online catalog engagement and website purchases for an urban streetwear brand through segmented lifestyle creatives.',
    targetAudience: {
      primary: 'Fashion-conscious urban youth and young adults seeking versatile streetwear.',
      demographics: 'Ages 18–34, Men & Women in major metropolitan fashion hubs.',
      interestsAndBehaviors: [
        'Streetwear fashion & contemporary aesthetics',
        'Sneaker culture and lifestyle apparel',
        'Online apparel shoppers (Engaged Shoppers behavior)',
      ],
      exclusions: ['Audiences who purchased within the last 14 days (in TOFU/MOFU ad sets)'],
    },
    strategy:
      'Implemented a 3-tier sales funnel using Meta Ads Manager. Top-of-Funnel (TOFU) tests dynamic lifestyle video and carousel formats to introduce signature hoodies and utility outerwear. Middle-of-Funnel (MOFU) re-engages video viewers and page engagers with social proof and styling lookbooks. Bottom-of-Funnel (BOFU) leverages dynamic product ads (DPA) to recover abandoned carts with a first-order incentive.',
    campaignStructure: [
      {
        stage: 'Top of Funnel (TOFU) - Prospecting',
        objective: 'Traffic / Broad Add-to-Cart Initiation',
        adSetsOrGroups: ['Interest: Streetwear & Sneakers (Broad)', 'Lookalike: 2% Top Engagers & Add to Carts'],
        biddingAndBudget: 'Highest Volume / Lowest Cost bidding with 60% of total budget allocated.',
      },
      {
        stage: 'Middle of Funnel (MOFU) - Consideration',
        objective: 'Catalog Product Views & Engagement',
        adSetsOrGroups: ['30-Day Instagram & Facebook Engagers', '7-Day Video Viewers (50%+ watch time)'],
        biddingAndBudget: 'Highest Value bidding with 25% of budget allocated.',
      },
      {
        stage: 'Bottom of Funnel (BOFU) - Conversion',
        objective: 'Website Purchases / Checkout Completion',
        adSetsOrGroups: ['14-Day ViewContent & Add to Cart (Non-Purchasers)'],
        biddingAndBudget: 'Cost-cap testing with 15% budget focused on cart recovery.',
      },
    ],
    sampleAdCopy: {
      headlines: [
        'Streetwear Built For The Movement.',
        'Heavyweight Comfort. Clean Cuts.',
        'Elevate Your Everyday Fit — Shop UrbanWear.',
      ],
      primaryText: [
        'Crafted for effortless daily wear. Our new drop brings premium heavyweight cotton, tailored streetwear cuts, and durable urban outerwear designed to outlast the season. Find your signature silhouette today.',
        'Tired of thin hoodies that lose shape after one wash? Discover UrbanWear’s heavyweight collection — crafted with reinforced stitching and clean minimalist silhouettes.',
      ],
      callToAction: 'Shop Now',
      hookOrAngle: 'Product durability meets modern streetwear aesthetic.',
    },
    creativeMockup: {
      format: 'Feed Carousel & 9:16 Vertical Video Concept',
      conceptDescription:
        'Fast-cut cinematic city shots showcasing models in movement wearing the core collection against architectural concrete textures, paired with clean typography overlays highlighting fabric specifications (450 GSM French Terry).',
      visualNotes: 'High-contrast studio and street photography with minimalist color grading.',
      imagePath: urbanwearImage,
    },
    optimizationApproach: [
      'Weekly review of cost-per-click (CPC) and link click-through rate (CTR) to detect early creative fatigue.',
      'Paused underperforming ad variants with CTR below benchmark after reaching 1,500 impressions.',
      'Reallocated budget from broader interest groups to top-performing Lookalike ad sets.',
      'Tested 3 hook variants in the first 3 seconds of video creatives to maximize 3-second hook retention.',
    ],
    sampleMetrics: [
      { label: 'Illustrative CTR Target', value: '2.4% – 3.1%', context: 'Benchmarked for feed carousel ads (Simulated Demonstration Data)' },
      { label: 'CPC Efficiency Goal', value: 'Sub-$0.65', context: 'Target CPC on broad streetwear interest targeting' },
      { label: 'Funnel Balance', value: '60 / 25 / 15', context: 'Budget pacing split across TOFU, MOFU, and BOFU stages' },
    ],
  },
  {
    id: 'glownest-meta-ads',
    title: 'GlowNest — Meta Ads for Beauty Products',
    brand: 'GlowNest',
    tagline: 'Botanical & Clean Dermatological Skincare',
    category: 'Meta Ads',
    disclaimer: 'Self-Initiated Concept Project — Portfolio Demonstration',
    objective: 'Generate brand consideration and direct-to-consumer online orders for a clean skincare line focusing on barrier-repair serums.',
    targetAudience: {
      primary: 'Skincare enthusiasts and conscious beauty shoppers dealing with sensitive skin or moisture-barrier concerns.',
      demographics: 'Ages 21–45, predominantly women, urban & suburban markets.',
      interestsAndBehaviors: [
        'Clean beauty, dermatological skincare & cruelty-free cosmetics',
        'Routine-oriented consumers interested in serums and active ingredients',
        'Frequent beauty & personal care shoppers online',
      ],
      exclusions: ['Wholesale or salon professionals looking for bulk distribution'],
    },
    strategy:
      'Structured an ingredient-first Meta advertising campaign combining educational UGC-style reels with clean aesthetic studio carousel visuals. The messaging focuses on solving specific pain points (dryness, compromised skin barriers, reactive skin) rather than making exaggerated promises, positioning GlowNest as a calm, science-backed sanctuary.',
    campaignStructure: [
      {
        stage: 'Cold Prospecting (TOFU)',
        objective: 'Video Views & High-Intent Landing Page Traffic',
        adSetsOrGroups: ['Interest: Clean Beauty & Dermatological Care', 'Behavior: Frequent Online Cosmetic Buyers'],
        biddingAndBudget: 'Advantage Campaign Budget (CBO) with 65% weight on prospecting.',
      },
      {
        stage: 'Ingredient & Proof Retargeting (MOFU)',
        objective: 'Add to Cart & Product View Depth',
        adSetsOrGroups: ['Website Visitors (Past 30 Days)', 'Instagram Post & Story Engagers'],
        biddingAndBudget: 'Ad set level budgeting with carousel reviews and clinical ingredient cards.',
      },
      {
        stage: 'Cart Recovery (BOFU)',
        objective: 'Conversions / Completed Orders',
        adSetsOrGroups: ['Initiated Checkout in Last 7 Days (Excluding Buyers)'],
        biddingAndBudget: 'High-frequency dynamic ads showcasing the specific serum added to cart.',
      },
    ],
    sampleAdCopy: {
      headlines: [
        'Hydration That Doesn’t Clog Pores.',
        'Restore Your Skin Barrier in 3 Simple Steps.',
        'Clean Botanicals. Proven Moisture Recovery.',
      ],
      primaryText: [
        'Stripped skin from harsh exfoliants? The GlowNest Barrier Serum is formulated with soothing ceramides, centella, and hyaluronic acid to calm redness and lock in lightweight, all-day hydration. 100% fragrance-free.',
        'Your skincare routine shouldn’t require 10 complicated steps. See why conscious beauty lovers are streamlining with GlowNest’s calming botanical line.',
      ],
      callToAction: 'Claim Your Routine',
      hookOrAngle: 'Ingredient clarity and gentle skin barrier restoration.',
    },
    creativeMockup: {
      format: 'Instagram Stories & Square Feed Visuals',
      conceptDescription:
        'Warm morning travertine studio product photography featuring amber and frosted glass dropper bottles, combined with soft text badges highlighting key ingredients: "Triple Ceramide Complex" and "Centella Asiatica".',
      visualNotes: 'Gentle natural sunlight, soft botanical cast shadows, clean luxury aesthetic.',
      imagePath: glowNestImage,
    },
    optimizationApproach: [
      'Audience segmentation between cold interest groups to identify which active ingredient theme resonates highest.',
      'A/B tested headline positioning: "Problem-Agitation" vs. "Ingredient-First" angle.',
      'Monitored outbound click-through rates and landing page load speed drop-offs.',
      'Capped ad frequency on retargeting audiences to prevent consumer ad fatigue.',
    ],
    sampleMetrics: [
      { label: 'Target Engagement Rate', value: '4.8%+', context: 'Simulated benchmark for Instagram Reel saves and shares' },
      { label: 'Outbound CTR Target', value: '1.9% – 2.6%', context: 'Demonstration target on cold interest sets' },
      { label: 'Frequency Target', value: '< 2.8 / week', context: 'Controlled frequency threshold to safeguard brand perception' },
    ],
  },
  {
    id: 'technova-google-search',
    title: 'TechNova — Google Search Ads',
    brand: 'TechNova',
    tagline: 'Ergonomic Tech Accessories & Modern Workstation Gear',
    category: 'Google Ads',
    disclaimer: 'Self-Initiated Concept Project — Portfolio Demonstration',
    objective: 'Capture high-intent commercial search traffic for ergonomic mechanical keyboards, monitor arms, and workstation desk accessories.',
    targetAudience: {
      primary: 'Remote software developers, designers, and office professionals actively searching for posture-friendly workspace equipment.',
      demographics: 'Ages 22–50, remote and hybrid knowledge workers.',
      interestsAndBehaviors: [
        'Commercial search intent for ergonomic keyboards and dual-monitor mounts',
        'Users actively comparing specifications, warranties, and fast shipping',
      ],
      exclusions: ['Searchers seeking used gear, free DIY plans, or unrelated repair services'],
    },
    strategy:
      'Engineered a structured Google Search campaign with Single-Theme Ad Groups (STAGs) mapping closely to specific consumer intent. Utilized exact and phrase match types to minimize irrelevant clicks, paired with an extensive negative keyword list. Configured responsive search ads (RSAs) highlighting warranty, free delivery, and premium ergonomic certification.',
    campaignStructure: [
      {
        stage: 'Campaign 1: Ergonomic Keyboards (Intent Harvest)',
        objective: 'High-Intent Search Conversions',
        adSetsOrGroups: ['[ergonomic mechanical keyboard]', '"split keyboard for typing"', '"programmable ergonomic keyboard"'],
        biddingAndBudget: 'Maximize Clicks during initial learning, transitioning to Maximize Conversions with Target CPA.',
      },
      {
        stage: 'Campaign 2: Dual Monitor Arms (Product Category)',
        objective: 'Category Search Traffic',
        adSetsOrGroups: ['[heavy duty dual monitor arm]', '"desk mount monitor stand 32 inch"'],
        biddingAndBudget: 'Target Impression Share on top-of-page searches for competitive positioning.',
      },
      {
        stage: 'Negative Keyword Shield (Account Level)',
        objective: 'Budget Waste Elimination',
        adSetsOrGroups: ['free', 'used', 'ebay', 'craigslist', 'diy', 'repair', 'driver download', 'jobs', 'manual pdf'],
        biddingAndBudget: 'Applies across all ad groups to protect spend from zero-intent queries.',
      },
    ],
    sampleAdCopy: {
      headlines: [
        'TechNova Ergonomic Keyboards',
        'Built for Wrist Pain Relief',
        'Custom Split Layout Mechanical',
        'Ships in 24 Hours | Free Returns',
        '2-Year Full Hardware Warranty',
      ],
      primaryText: [
        'Engineered for developers and writers who type for hours. Reduce wrist strain with customizable split angle ergonomics and whisper-quiet switches. Order your TechNova keyboard today with free express shipping.',
        'Upgrade your workspace with heavy-duty aluminum monitor arms. Smooth gas spring articulation for displays up to 34 inches. Easy clamp installation with lifetime cable management support.',
      ],
      callToAction: 'Shop Ergonomic Gear',
      hookOrAngle: 'Ergonomic pain relief coupled with high-spec build quality.',
    },
    creativeMockup: {
      format: 'Google Responsive Search Ad (RSA) + Sitelink Assets',
      conceptDescription:
        'Clean text layout featuring dynamic headlines, structured snippets ("Types: Wireless, Hot-Swap, Low-Profile"), callout extensions ("Free Shipping Over $50", "2-Year Warranty"), and sitelink extensions directly to Desk Setup Guides.',
      visualNotes: 'High Quality Score ad mockups aligned with focused landing page copy.',
    },
    optimizationApproach: [
      'Bi-weekly Search Query Reports to discover new negative keywords and prevent query bleeding.',
      'Optimization of keyword Quality Scores through strict Headline-to-Landing-Page message matching.',
      'A/B testing ad copy variations focused on "Pain Relief / Ergonomics" vs. "Technical Switch Specs".',
      'Device bid adjustments based on conversion efficiency between desktop and mobile searchers.',
    ],
    sampleMetrics: [
      { label: 'Target Search Impression Share', value: '75%+', context: 'Simulated goal for high-intent exact match keywords' },
      { label: 'Quality Score Benchmark', value: '8/10+', context: 'Target across core Single-Theme Ad Groups' },
      { label: 'Negative Filter Impact', value: '28% Wasted Spend Avoided', context: 'Estimated budget preserved via negative keyword management' },
    ],
  },
  {
    id: 'lahore-bites-tiktok-ads',
    title: 'Lahore Bites — TikTok Ads',
    brand: 'Lahore Bites',
    tagline: 'Artisanal South Asian Fusion Street Food & Dining',
    category: 'TikTok Ads',
    disclaimer: 'Self-Initiated Concept Project — Portfolio Demonstration',
    objective: 'Drive local foot traffic, table reservations, and weekend takeout orders for a contemporary culinary eatery through mouth-watering video ads.',
    targetAudience: {
      primary: 'Local foodies, university students, young working professionals, and families who love authentic culinary street flavors.',
      demographics: 'Ages 18–38, geo-targeted radius within 15 km of restaurant location in Lahore.',
      interestsAndBehaviors: [
        'Food & Beverage / Restaurant Diners',
        'Street Food, BBQ, Traditional Delicacies',
        'Users actively engaging with TikTok FoodTok and culinary review content',
      ],
      exclusions: ['Audiences outside delivery and commuting radius'],
    },
    strategy:
      'Engineered a video-first TikTok ad campaign built around high-sensory food cues (sizzling charcoal grills, melting cheese naans, and rich gravies). Scripted punchy 2-second visual hooks that stop viewers mid-swipe. Paired with local weekend promotion codes and a direct WhatsApp / reservation landing link.',
    campaignStructure: [
      {
        stage: 'Local Brand Awareness & Foodie Engagement',
        objective: 'Video Views & High Reach',
        adSetsOrGroups: ['Radius: 10km Lahore Metro Area', 'Interests: Food & Drink, Dining Out, Fast Food'],
        biddingAndBudget: 'Lowest Cost bidding weighted Thursday to Sunday during peak dining hours.',
      },
      {
        stage: 'Weekend Reservation Driver',
        objective: 'Traffic to Reservation Page / WhatsApp Order Link',
        adSetsOrGroups: ['Engaged Video Watchers (Viewed 6s+ of food videos in past 14 days)'],
        biddingAndBudget: 'Accelerated delivery on Friday evenings and Saturday afternoons.',
      },
    ],
    sampleAdCopy: {
      headlines: [
        'The Most Sizzling Kebabs in Lahore?',
        'Craving Real Flavor Tonight?',
        'Tag Who’s Treating You This Weekend!',
      ],
      primaryText: [
        'Freshly grilled over live charcoal coals and served with steaming garlic naan. Drop by Lahore Bites tonight or order your feast online before midnight.',
        'Late night food cravings? We’ve got you covered with Lahore’s crunchiest street rolls and artisanal spiced platters. Tap below to see our special menu.',
      ],
      callToAction: 'Order Now / Book Table',
      hookOrAngle: 'Sensory-rich food cinematography with relatable local dining culture.',
    },
    creativeMockup: {
      format: '9:16 Full-Screen Native TikTok Video Concept',
      conceptDescription:
        'Fast-paced 12-second vertical video. 0-2s Hook: Close-up slow-motion pull of smoking charcoal grill with sizzling seekh kebabs. 3-7s: Plating feast on wooden dining table with fresh mint raita. 8-12s: Callout text overlay with promo code "LAHORE10" and directions.',
      visualNotes: 'Natural warm restaurant lighting, crisp ASMR sizzling audio suggestion.',
      imagePath: lahoreBitesImage,
    },
    optimizationApproach: [
      'Refreshed video ad creatives every 10–14 days to keep short-form video retention high and prevent fatigue.',
      'Day-parting budget schedule to focus spend from 5:00 PM to 11:30 PM Thursday through Sunday.',
      'Monitored 2-second hook drop-off rates and replaced opening clip variations based on view-through completion.',
      'Geofence testing comparing 5km vs. 12km radii to identify the sweet spot for dine-in intent.',
    ],
    sampleMetrics: [
      { label: 'Illustrative 2s Hook Rate', value: '42%+', context: 'Simulated target for short-form food video retention' },
      { label: 'Local Delivery Radius', value: '12 km', context: 'Optimized geo-fence around restaurant premises' },
      { label: 'Schedule Focus', value: 'Thu–Sun Peak', context: 'Day-parted allocation aligned with consumer dining habits' },
    ],
  },
  {
    id: 'stylehub-tiktok-fashion',
    title: 'StyleHub — TikTok Ads for Fashion',
    brand: 'StyleHub',
    tagline: 'Trend-Forward Fast Fashion & Everyday Essentials',
    category: 'TikTok Ads',
    disclaimer: 'Self-Initiated Concept Project — Portfolio Demonstration',
    objective: 'Generate viral product discovery and impulse purchases for a trendy young adult apparel brand using creator-led styling reels.',
    targetAudience: {
      primary: 'Gen Z and millennial trend-seekers who discover wardrobe upgrades directly through TikTok trends.',
      demographics: 'Ages 18–30, fashion-forward social media users.',
      interestsAndBehaviors: [
        'Fashion & Apparel, OOTD (Outfit Of The Day)',
        'Shopping & E-Commerce / Online Fashion Buyers',
        'Engaged with trending audio and creator try-on hauls',
      ],
    },
    strategy:
      'Modeled an authentic TikTok creative playbook inspired by organic creator try-on hauls and "How I Style It" videos. Avoided polished television-style ads in favor of raw phone-camera aesthetic, relatable captions, and high-energy transitions matching trending beats.',
    campaignStructure: [
      {
        stage: 'Trend Discovery Campaign',
        objective: 'Traffic & Product Page Views',
        adSetsOrGroups: ['Interest: Apparel & Accessories + Gen Z Trend Affinity', 'Broad Female Demographic 18–28'],
        biddingAndBudget: 'Lowest Cost bidding with creative split-testing on 3 different styling concepts.',
      },
      {
        stage: 'Instant Re-Engagement',
        objective: 'Conversions / Completed Orders',
        adSetsOrGroups: ['Viewed 75% of StyleHub Videos', 'Profile & Store Bio Visitors (Last 14 Days)'],
        biddingAndBudget: 'Target Cost bidding offering a limited-time seasonal discount code.',
      },
    ],
    sampleAdCopy: {
      headlines: [
        '3 Ways To Style One Oversized Tee',
        'The Jacket Everyone’s Been Asking About',
        'Affordable Fits That Look Designer',
      ],
      primaryText: [
        'Which fit are you wearing: 1, 2, or 3? Tap to shop the complete StyleHub collection with free exchanges.',
        'Stop overpaying for basic fits. Grab our viral essential bundle before stock runs out. Tap below!',
      ],
      callToAction: 'Shop Now',
      hookOrAngle: 'Outfit inspiration meets budget-friendly styling tips.',
    },
    creativeMockup: {
      format: '9:16 Creator Haul & Transition Video Concept',
      conceptDescription:
        'Quick jump-cuts of an everyday creator snapping their fingers to swap between 3 styled outfits. Clean on-screen text labels indicating product names and prices. Ending with a clear arrow pointing down to the TikTok shop button.',
      visualNotes: 'Natural bedroom/apartment backdrop, relatable aesthetic, high-energy lighting.',
    },
    optimizationApproach: [
      'Iterated on opening text hooks every 7 days (e.g., comparing "Stop scrolling if you need new fits" vs. "3 outfits under $30").',
      'Tracked cost per link click (CPC) across each creator angle to eliminate low-converting creative concepts.',
      'Rotated background audio tracks to keep pace with algorithmic audio popularity trends on TikTok.',
    ],
    sampleMetrics: [
      { label: 'Video Completion Target', value: '18% – 22%', context: 'Benchmarked for 10-15 second short-form styling clips' },
      { label: 'Target CPC', value: '< $0.45', context: 'Simulated cost-per-click efficiency on broad fashion targeting' },
      { label: 'Creative Rotation', value: 'Every 7–10 Days', context: 'Planned cadence to preempt TikTok ad fatigue' },
    ],
  },
  {
    id: 'smartstore-multiplatform',
    title: 'SmartStore — Multi-Platform Advertising Strategy',
    brand: 'SmartStore',
    tagline: 'Modern Smart Home & Ergonomic Lifestyle E-Commerce',
    category: 'Multi-Platform',
    disclaimer: 'Self-Initiated Concept Project — Portfolio Demonstration',
    objective: 'Orchestrate a unified full-funnel advertising ecosystem harmonizing Meta Ads, Google Ads, and TikTok Ads to drive sustainable e-commerce growth.',
    targetAudience: {
      primary: 'Tech-savvy homeowners, apartment renters, and home-office professionals seeking intuitive smart living gadgets.',
      demographics: 'Ages 24–48, tech enthusiasts and convenience seekers.',
      interestsAndBehaviors: [
        'Smart home automation (lighting, plugs, ambient tech)',
        'Active searchers looking for setup reviews and comparisons',
        'Multi-channel shoppers who research before purchasing',
      ],
    },
    strategy:
      'Created a strategic division of labor across platforms: TikTok Ads drives viral top-of-funnel discovery through product demonstration hooks. Meta Ads handles middle-of-funnel consideration through carousel feature breakdowns and social proof retargeting. Google Search Ads harvests high-intent brand and product-specific search queries, preventing lost sales to competitors.',
    campaignStructure: [
      {
        stage: 'Platform 1: TikTok Ads (Discovery & Awareness)',
        objective: 'Drive Massive Cold Engagement & Hook Curiosity',
        adSetsOrGroups: ['Broad Tech & Smart Home Enthusiasts (9:16 Short-form "Problem / Solution" demos)'],
        biddingAndBudget: '35% of overall monthly advertising allocation.',
      },
      {
        stage: 'Platform 2: Meta Ads (Consideration & Retargeting)',
        objective: 'Nurture Traffic & Educate With Carousels',
        adSetsOrGroups: ['Engaged Video Watchers + Website Visitors (Past 30 Days)', 'Lookalikes of Top Buyers'],
        biddingAndBudget: '40% of overall monthly advertising allocation.',
      },
      {
        stage: 'Platform 3: Google Search Ads (Intent Capture)',
        objective: 'Close Ready-to-Buy Prospects',
        adSetsOrGroups: ['[brand terms]', '[smart home automation kit]', '"best ergonomic smart desk accessory"'],
        biddingAndBudget: '25% of overall budget dedicated to exact/phrase match intent.',
      },
    ],
    sampleAdCopy: {
      headlines: [
        'Smart Home Living Made Effortless.',
        'Save 40% On Energy With Smart Lighting.',
        'Shop SmartStore Certified Home Gear.',
      ],
      primaryText: [
        'Transform your apartment into an automated sanctuary. Controlled from your phone, works with voice assistants, and installs in under 5 minutes without tools.',
        'Looking for the smart gadgets you saw on your feed? Get authentic warranty-backed devices with 2-day delivery from SmartStore.',
      ],
      callToAction: 'Explore Smart Living',
      hookOrAngle: 'Seamless lifestyle convenience and energy efficiency.',
    },
    creativeMockup: {
      format: 'Omni-Channel Cohesive Design Mockup',
      conceptDescription:
        'A unified visual identity where TikTok short demos direct viewers to an optimized landing page, followed by Meta dynamic product retargeting ads echoing the same color palette, and Google Search Ads capturing search traffic with matching headlines.',
      visualNotes: 'Consistent brand typography, color harmony, and seamless multi-channel experience.',
    },
    optimizationApproach: [
      'Multi-touch channel attribution analysis: monitoring how TikTok awareness lifts Google brand search volume.',
      'Cross-platform budget reallocation: shifting weekly capital into the platform delivering the lowest blended CPA.',
      'Unified UTM taxonomy across all campaigns to maintain clean Google Analytics reporting.',
      'Consistent brand tone and pricing across all three ad networks to avoid consumer friction.',
    ],
    sampleMetrics: [
      { label: 'Platform Division', value: '35% TikTok / 40% Meta / 25% Google', context: 'Strategic budget distribution across channels' },
      { label: 'Attribution Model Target', value: 'Blended CPA Focus', context: 'Holistic multi-channel efficiency framework' },
      { label: 'Illustrative Conversion Rate', value: '2.8% – 3.4%', context: 'Demonstration target on unified landing pages' },
    ],
  },
];

export const WORK_EXPERIENCE: Experience[] = [
  {
    role: 'Technical Content Engineer',
    company: 'Intellectual Works',
    location: 'Lahore, Pakistan',
    period: 'April 2024 – January 2026',
    type: 'Full-time',
    responsibilities: [
      'Digital document review and systematic verification for high-precision workflows.',
      'Data accuracy and quality checking across extensive information repositories.',
      'Document formatting, structuring, and digital organization.',
      'Working with Microsoft Office suites and specialized internal systems to maintain data integrity.',
    ],
  },
  {
    role: 'Computer Operator & Record Assistant',
    company: 'Tech Solutions',
    location: 'Lahore, Pakistan',
    period: '2021 – 2023',
    type: 'Full-time',
    responsibilities: [
      'Computerized data entry and digital record archiving.',
      'Record management and structured categorization of institutional files.',
      'Data verification, error spotting, and consistency audits.',
      'Microsoft Office operations, spreadsheet maintenance, and report preparation.',
    ],
  },
];

export const EDUCATION_LIST: Education[] = [
  {
    degree: 'BS Mass Communication',
    institution: 'Virtual University of Pakistan',
    location: 'Lahore, Pakistan',
    period: '2024 – 2027 (Expected)',
    status: 'In Progress',
  },
  {
    degree: 'Bachelor of Arts',
    institution: 'University of the Punjab',
    location: 'Lahore, Pakistan',
    period: '2020 – 2022',
    status: 'Completed',
  },
];

export const CERTIFICATIONS: Certification[] = [
  {
    title: 'Google Fundamentals of Digital Marketing',
    issuer: 'Google Digital Garage',
    status: 'Completed',
    yearOrDetails: 'Foundational Certification',
    skillsFocus: ['Digital marketing foundations', 'Search ecosystem', 'Audience basics', 'Online presence strategy'],
  },
  {
    title: 'Google Ads Search Training & Certification',
    issuer: 'Google Skillshop',
    status: 'Credential Issued',
    yearOrDetails: 'Specialized Search Certification',
    skillsFocus: ['Search campaign setup', 'Keyword strategy', 'Ad assets & bidding', 'Quality Score mechanics'],
  },
  {
    title: 'HP LIFE — Social Media Marketing',
    issuer: 'HP LIFE',
    status: 'Completed',
    yearOrDetails: 'Social Advertising Module',
    skillsFocus: ['Social media campaign planning', 'Target audience definition', 'Digital marketing principles'],
  },
  {
    title: 'Saylor Academy — Digital Marketing',
    issuer: 'Saylor Academy',
    status: 'Completed',
    yearOrDetails: 'Comprehensive Coursework',
    skillsFocus: ['Marketing communications', 'Digital advertising frameworks', 'Consumer behavior online'],
  },
  {
    title: 'Pak Angels — Generative & Agentic AI Training',
    issuer: 'Pak Angels',
    status: 'Completed',
    yearOrDetails: 'Cohort 11',
    skillsFocus: ['AI tools in marketing workflows', 'Prompt engineering for copy', 'Workflow automation concepts'],
  },
  {
    title: 'Pak Angels — Top Performer Award',
    issuer: 'Pak Angels',
    status: 'Completed',
    yearOrDetails: 'Excellence Recognition',
    skillsFocus: ['Distinction in coursework execution', 'Practical project delivery', 'Cohort performance'],
  },
  {
    title: 'DigiSkills — Digital Marketing, Freelancing, SEO & Affiliate Marketing',
    issuer: 'DigiSkills.pk (Ministry of IT & Telecom)',
    status: 'In Progress',
    yearOrDetails: 'Comprehensive Hands-on Program',
    skillsFocus: ['Paid advertising fundamentals', 'Professional freelancing skills', 'Market research & analytics'],
  },
];
