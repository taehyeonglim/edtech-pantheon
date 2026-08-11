# EdTech Pantheon

교육공학의 사상을 사람과 관계와 근거로 읽는 공개 시각 아카이브입니다.

## Local development

```bash
npm install
npm run dev
```

## Build

```bash
npm run check
npm run build
```

## Editorial model

콘텐츠는 `src/data/pioneers.ts`, `src/data/relationships.ts`, `src/data/sources.ts`에 구조화되어 있습니다. 핵심 주장과 관계는 반드시 출처 ID를 참조해야 하며, `A`는 원저서·원논문, `B`는 동료평가 연구·학술 단행본, `C`는 기관 자료를 의미합니다. 출처·이미지 정책은 사이트의 `/methodology/`에서 확인할 수 있습니다.

## License

코드와 자체 제작 도식은 MIT License로 공개합니다. 외부 원문·서지·이미지의 저작권과 라이선스는 각 자료의 원 권리자에게 있습니다.
