# initial idea 


├algorithm-visualizer/
│
├── frontend/
│
│   ├── public/
│   │
│   ├── src/
│   │
│   │   ├── app/
│   │   │   ├── App.tsx
│   │   │   ├── providers.tsx
│   │   │   └── theme.ts
│   │   │
│   │   ├── assets/
│   │   │   ├── fonts/
│   │   │   ├── icons/
│   │   │   ├── images/
│   │   │   └── svg/
│   │   │
│   │   ├── components/
│   │   │   ├── common/
│   │   │   │   ├── EmptyState/
│   │   │   │   ├── Error/
│   │   │   │   └── Loading/
│   │   │   │
│   │   │   ├── layout/
│   │   │   │   ├── Footer/
│   │   │   │   ├── Navbar/
│   │   │   │   └── Sidebar/
│   │   │   │
│   │   │   └── ui/
│   │   │       ├── Badge/
│   │   │       ├── Button/
│   │   │       ├── Card/
│   │   │       ├── Dropdown/
│   │   │       ├── Input/
│   │   │       ├── Modal/
│   │   │       ├── Select/
│   │   │       └── Tooltip/
│   │   │
│   │   ├── data/
│   │   │
│   │   ├── features/
│   │   │
│   │   │   ├── algorithms/
│   │   │   │
│   │   │   │   ├── components/
│   │   │   │   ├── hooks/
│   │   │   │   ├── pages/
│   │   │   │   ├── services/
│   │   │   │   ├── types/
│   │   │   │   ├── utils/
│   │   │   │   └── index.ts
│   │   │   │
│   │   │   ├── data-structures/
│   │   │   │
│   │   │   │   ├── components/
│   │   │   │   ├── hooks/
│   │   │   │   ├── pages/
│   │   │   │   ├── services/
│   │   │   │   ├── types/
│   │   │   │   ├── utils/
│   │   │   │   └── index.ts
│   │   │   │
│   │   │   ├── visualizer/
│   │   │   │
│   │   │   │   ├── animations/
│   │   │   │   ├── controls/
│   │   │   │   ├── engine/
│   │   │   │   ├── render/
│   │   │   │   ├── components/
│   │   │   │   ├── hooks/
│   │   │   │   ├── types/
│   │   │   │   ├── utils/
│   │   │   │   └── index.ts
│   │   │   │
│   │   │   ├── search/
│   │   │   │
│   │   │   └── home/
│   │   │
│   │   ├── hooks/
│   │   │   ├── useDebounce.ts
│   │   │   ├── useLocalStorage.ts
│   │   │   ├── useTheme.ts
│   │   │   └── useWindowSize.ts
│   │   │
│   │   ├── layouts/
│   │   │   ├── MainLayout.tsx
│   │   │   └── VisualizerLayout.tsx
│   │   │
│   │   ├── pages/
│   │   │   ├── Home/
│   │   │   ├── About/
│   │   │   ├── NotFound/
│   │   │   └── index.ts
│   │   │
│   │   ├── router/
│   │   │   ├── routes.tsx
│   │   │   └── index.tsx
│   │   │
│   │   ├── services/
│   │   │   ├── api.ts
│   │   │   ├── algorithm.service.ts
│   │   │   ├── dataStructure.service.ts
│   │   │   └── user.service.ts
│   │   │
│   │   ├── styles/
│   │   │   ├── globals.css
│   │   │   ├── animations.css
│   │   │   └── scrollbar.css
│   │   │
│   │   ├── types/
│   │   │   ├── Algorithm.ts
│   │   │   ├── Card.ts
│   │   │   ├── DataStructure.ts
│   │   │   └── User.ts
│   │   │
│   │   ├── utils/
│   │   │   ├── formatBigO.ts
│   │   │   ├── randomArray.ts
│   │   │   ├── sleep.ts
│   │   │   └── swap.ts
│   │   │
│   │   ├── main.tsx
│   │   └── vite-env.d.ts
│   │
│   ├── package.json
│   └── vite.config.ts
│
├── backend/
│   ├── src/
│   ├── pom.xml
│   └── ...
│
├── docs/
│   ├── diagrams/
│   ├── api/
│   └── architecture/
│
├── docker-compose.yml
├── README.md
└── .gitignore




# useful documentation 

[tailwindcss](https://tailwindcss.com/docs/installation/using-vite)
[Motion](https://motion.dev/docs/react)
[react](https://react.dev/learn)


# apearance 

dracula 

| Token | Hex | RGB | HSL | Usage |
|--------|-----|-----|-----|-------|
| Background | `#282A36` | `40, 42, 54` | `231°, 15%, 18%` | Main background |
| Current Line | `#6272A4` | `98, 114, 164` | `225°, 27%, 51%` | Semantic current line highlight token |
| Selection | `#44475A` | `68, 71, 90` | `232°, 14%, 31%` | Text selection |
| Foreground | `#F8F8F2` | `248, 248, 242` | `60°, 30%, 96%` | Default text |
| Comment | `#6272A4` | `98, 114, 164` | `225°, 27%, 51%` | Comments, disabled code |
| Red | `#FF5555` | `255, 85, 85` | `0°, 100%, 67%` | Errors, warnings, deletion |
| Orange | `#FFB86C` | `255, 184, 108` | `31°, 100%, 71%` | Numbers, constants, booleans |
| Yellow | `#F1FA8C` | `241, 250, 140` | `65°, 92%, 76%` | Strings, text content |
| Green | `#50FA7B` | `80, 250, 123` | `135°, 94%, 65%` | Functions, methods, inherited classes |
| Cyan | `#8BE9FD` | `139, 233, 253` | `191°, 97%, 77%` | Classes, types, support, regex |
| Purple | `#BD93F9` | `189, 147, 249` | `265°, 89%, 78%` | Instance reserved words, constants |
| Pink | `#FF79C6` | `255, 121, 198` | `326°, 100%, 74%` | Keywords, storage types |





