export const pricingPlans = [
  {
     id: crypto.randomUUID(),
    name: "Free",
    price: "₦0",
    description: "Perfect for small businesses with basic goals and targets",
    featuresTitle: "Free Plan features",
    popular: false,
    cardStyle: "card-bg",
    buttonStyle: "default",
    features: [
      {
        icon: "building-office",
        text: "Up to 1 businesses",
      },
      {
        icon: "users",
        text: "Up to 2 employees per business",
      },
      {
        icon: "sparkles",
        text: "AI-generated goals",
      },
    ],
  },

  {
     id: crypto.randomUUID(),
    name: "Basic",
    price: "₦4,999",
    description: "Best for growing businesses optimizing team workflow",
    featuresTitle: "Basic Plan features",
    popular: false,
    cardStyle: "card-bg",
    buttonStyle: "default",
    features: [
      {
        icon: "building-office",
        text: "Up to 2 businesses",
      },
      {
        icon: "users",
        text: "Up to 5 employees per business",
      },
      {
        icon: "sparkles",
        text: "AI-generated goals",
      },
    ],
  },

  {
    id: crypto.randomUUID(),
    name: "Standard",
    price: "₦9,999",
    description: "Highly recommended for mid sized businesses",
    featuresTitle: "Standard Plan features",
    popular: true,
    cardStyle: "bg-popular",
    buttonStyle: "popular",
    features: [
      {
        icon: "building-office",
        text: "Up to 4 businesses",
      },
      {
        icon: "users",
        text: "Up to 7 employees per business",
      },
      {
        icon: "sparkles",
        text: "AI-generated goals",
      },
      {
        icon: "chart-bar",
        text: "Business analysis",
      },
    ],
  },

  {
    id: crypto.randomUUID(),
    name: "Premium",
    price: "₦14,999",
    description: "Perfect for larger businesses seeking more control",
    featuresTitle: "Premium Plan features",
    popular: false,
    cardStyle: "card-bg",
    buttonStyle: "default",
    features: [
      {
        icon: "building-office",
        text: "Up to 6 businesses",
      },
      {
        icon: "users",
        text: "Up to 15 employees per business",
      },
      {
        icon: "sparkles",
        text: "AI-generated goals",
      },
      {
        icon: "chart-bar",
        text: "Business analysis",
      },
    ],
  },
];