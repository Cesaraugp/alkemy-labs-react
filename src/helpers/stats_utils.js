export const statsColorHandler = (statName) => {
  switch (statName) {
    case "strength":
      return "danger";
    case "speed":
      return "warning";
    case "durability":
      return "success";
    case "power":
      return "purple";
    case "combat":
      return "orange";
    default:
      return "primary";
  }
};

export const statsEmojiHandler = (statName) => {
  switch (statName) {
    case "strength":
      return "💪🏻";
    case "speed":
      return "🏃🏻‍♂️";
    case "durability":
      return "➕";
    case "power":
      return "💥";
    case "combat":
      return "🤺";
    case "intelligence":
      return "🧠";
    default:
      return "";
  }
};
