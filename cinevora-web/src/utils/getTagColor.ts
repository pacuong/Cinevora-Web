export const getTagColor = (ageRating: string): string => {
  switch (ageRating) {
    case "P":
      return "green";
    case "C13":
      return "yellow";
    case "C16":
      return "orange";
    default:
      return "red";
  }
};
