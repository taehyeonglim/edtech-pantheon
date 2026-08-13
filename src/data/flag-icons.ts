export type FlagIcon = {
  code: string;
  file: string;
  alt: string;
};

export const flagIconByEmoji: Record<string, FlagIcon> = {
  "🇺🇸": { code: "US", file: "us.svg", alt: "미국 국기" },
  "🇷🇺": { code: "RU", file: "ru.svg", alt: "러시아 국기" },
  "🇨🇦": { code: "CA", file: "ca.svg", alt: "캐나다 국기" },
  "🇿🇦": { code: "ZA", file: "za.svg", alt: "남아프리카공화국 국기" },
  "🇨🇭": { code: "CH", file: "ch.svg", alt: "스위스 국기" },
  "🇦🇺": { code: "AU", file: "au.svg", alt: "호주 국기" },
  "🇬🇧": { code: "GB", file: "gb.svg", alt: "영국 국기" },
  "🇳🇱": { code: "NL", file: "nl.svg", alt: "네덜란드 국기" },
  "🇵🇹": { code: "PT", file: "pt.svg", alt: "포르투갈 국기" },
};

export const getFlagIcons = (flag: string) =>
  flag.split(" ").map((item) => flagIconByEmoji[item]).filter((item): item is FlagIcon => Boolean(item));

export const countryFlagByName: Record<string, FlagIcon> = {
  미국: flagIconByEmoji["🇺🇸"],
  러시아: flagIconByEmoji["🇷🇺"],
  캐나다: flagIconByEmoji["🇨🇦"],
  남아프리카공화국: flagIconByEmoji["🇿🇦"],
  스위스: flagIconByEmoji["🇨🇭"],
  호주: flagIconByEmoji["🇦🇺"],
  영국: flagIconByEmoji["🇬🇧"],
  네덜란드: flagIconByEmoji["🇳🇱"],
  포르투갈: flagIconByEmoji["🇵🇹"],
};
