const JSDELIVR_IMAGES_BASE =
  "https://cdn.jsdelivr.net/gh/Naam-8/The-Court@main/public/images";

const imageUrl = (filename) => `${JSDELIVR_IMAGES_BASE}/${filename}`;

export const IMAGES = {
  hero: imageUrl("hero-tennis.jpg"),
  clubBg: imageUrl("club-tennis-bg.png"),
  matchPlay: imageUrl("match-play.png"),
  coachingSessions: imageUrl("coaching-sessions.png"),
  openCourt: imageUrl("open-court.png"),
  matchPlayAfter: imageUrl("match-play-after.png"),
  coachingSessionsAfter: imageUrl("coaching-sessions-after.png"),
  openCourtAfter: imageUrl("open-court-after.png"),
  tennisRacket: imageUrl("tennis-racket-1.png"),
  sliderOneWAd: imageUrl("slider_one_wad.jpeg"),
  sliderOneAd: imageUrl("slider_one_ad.jpeg"),
  logo: imageUrl("Bayon.svg"),
  compWithAd: imageUrl("comp_ad.gif"),
  compWithoutAd: imageUrl("comp_wad.gif"),
  padel: imageUrl("padel.png"),
  skeletonPadel: imageUrl("skeleton_padel.png"),
};

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Solutions", href: "#solutions" },
  { label: "Virtual Ads", href: "#virtual-ads" },
  { label: "Connect", href: "#join" },
];

export const gameCards = [
  {
    title: "Broadcast-native integration",
    description:
      "Seamlessly blend sponsor messaging into live racquet sports feeds without disrupting the rhythm of play or the clarity of the action.",
    beforeSrc: IMAGES.sliderOneWAd,
    afterSrc: IMAGES.sliderOneAd,
  },
];

export const membershipPlans = [
  {
    title: "Rights holders & leagues",
    subtitle: "Protect the sport, grow its value",
    features: [
      "New commercial inventory without changing the field of play",
      "Region-specific feeds from a unified production",
      "Tools designed for racquet sports calendars and formats",
    ],
    highlighted: false,
  },
  {
    title: "Broadcasters",
    subtitle: "Broadcast-first virtual advertising",
    features: [
      "Non-disruptive brand integration into live and replay workflows",
      "Flexible templates for linear, OTT, and digital distribution",
      "Operationally lightweight set-up with existing production teams",
    ],
    highlighted: false,
  },
  {
    title: "Sponsors & brands",
    subtitle: "More relevant, more contextual",
    features: [
      "Context-aware brand presence around every rally",
      "Audience and market-specific creative without re-shoots",
      "Consistent presentation across tournaments and venues",
    ],
    highlighted: true,
  },
];
