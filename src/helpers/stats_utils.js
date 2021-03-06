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
      return "ðŠðŧ";
    case "speed":
      return "ððŧââïļ";
    case "durability":
      return "â";
    case "power":
      return "ðĨ";
    case "combat":
      return "ðĪš";
    case "intelligence":
      return "ð§ ";
    default:
      return "";
  }
};
