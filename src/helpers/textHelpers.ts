export const turkishToEnglish = (text: string) => {
  const turkishChars = {
    ç: "c",
    ğ: "g",
    ı: "i",
    ö: "o",
    ş: "s",
    ü: "u",
    İ: "I"
  };
  return text.replace(
    /[çğıöşüİ]/g,
    (letter) => turkishChars[letter as keyof typeof turkishChars]
  );
};
