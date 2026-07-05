// Central data for the marketing site and every themed wedding micro-site.
// Everything here is plain/serializable so it can pass from Server to Client
// Components. Icons are referenced by string keys and resolved in the UI.

export type SectionKind = 'invitation' | 'journey' | 'menu' | 'plan'

export interface InvitationContent {
  couple: string
  date: string
  time: string
  place: string
  message: string
  note?: string
}

export interface JourneyStep {
  title: string
  text: string
}
export interface JourneyContent {
  intro: string
  steps: JourneyStep[]
}

export interface MenuCourse {
  label: string
  name: string
  desc: string
}
export interface MenuContent {
  note: string
  courses: MenuCourse[]
}

export interface PlanTable {
  name: string
  guests: string[]
}
export interface PlanTimelineItem {
  time: string
  text: string
}
export interface PlanContent {
  note: string
  // A plan section is either a seating chart (tables) or a schedule (timeline)
  tables?: PlanTable[]
  timeline?: PlanTimelineItem[]
}

export interface WeddingSection {
  id: string
  kind: SectionKind
  icon: string
  navLabel: string
  navTeaser: string
  reveal: string
  detailTitle: string
  invitation?: InvitationContent
  journey?: JourneyContent
  menu?: MenuContent
  plan?: PlanContent
}

export interface ThemeColors {
  bg: string
  panel: string
  panelBorder: string
  accent: string
  accentSoft: string
  text: string
  muted: string
}

export interface Theme {
  slug: string
  name: string
  franchise: string
  heroTitle: string
  heroSubtitle: string
  tagline: string
  heroImage: string
  previewVideo?: string
  status: 'ready' | 'new'
  colors: ThemeColors
  sections: WeddingSection[]
}

const thankYou = 'Děkujeme, že jste součástí našeho příběhu'

export const themes: Theme[] = [
  // 1 — Pán prstenů
  {
    slug: 'pan-prstenu',
    name: 'Pán prstenů',
    franchise: 'Středozem',
    heroTitle: 'Vítejte ve Středozemi',
    heroSubtitle: 'Před svatbou začíná dobrodružství',
    tagline: 'Epické fantasy dobrodružství pro milovníky Středozemě.',
    heroImage: '/themes/pan-prstenu-hero.png',
    previewVideo: '/videos/pan-prstenu-ukazka.mp4',
    status: 'ready',
    colors: {
      bg: '#12100b',
      panel: '#1c1810',
      panelBorder: 'rgba(197,160,86,0.35)',
      accent: '#d8b25a',
      accentSoft: 'rgba(216,178,90,0.14)',
      text: '#efe6d2',
      muted: '#b6a582',
    },
    sections: [
      {
        id: 'prsten',
        kind: 'invitation',
        icon: 'gem',
        navLabel: 'Prsten',
        navTeaser: 'Jeden prsten vládne všem',
        reveal: 'Jeden prsten vládne všem',
        detailTitle: 'Svatební prsteny',
        invitation: {
          couple: 'J & M',
          date: '5. 7. 2026',
          time: '15:00',
          place: 'Hrad ve Středozemi',
          message:
            'Naše prsteny jsou symbolem lásky, věrnosti a společné cesty životem.',
          note: 'Dámský prsten: zlato 585/1000, vsazený diamant. Pánský prsten: zlato 585/1000, matný povrch.',
        },
      },
      {
        id: 'cesta',
        kind: 'journey',
        icon: 'map',
        navLabel: 'Cesta',
        navTeaser: 'Naše výprava napříč mapou',
        reveal: 'Cesta začíná jediným krokem',
        detailTitle: 'Naše cesta',
        journey: {
          intro: 'Každé velké dobrodružství má svůj začátek.',
          steps: [
            { title: 'Jak jsme se poznali', text: 'Potkali jsme se díky společným přátelům a od té doby jdeme spolu.' },
            { title: 'Co jsme prožili', text: 'Společné výlety, dobrodružství, radosti i těžké chvíle.' },
            { title: 'Co nás čeká dál', text: 'Společná cesta pokračuje a tohle je teprve začátek.' },
          ],
        },
      },
      {
        id: 'hostina',
        kind: 'menu',
        icon: 'utensils',
        navLabel: 'Plátýnko prostírej',
        navTeaser: 'Kouzlo a jídlo se objeví',
        reveal: 'Plátýnko, prostírej se!',
        detailTitle: 'Svatební menu',
        menu: {
          note: 'Hostina hodná hodovní síně.',
          courses: [
            { label: 'Předkrm', name: 'Carpaccio z hovězí svíčkové', desc: 'S rukolou a parmazánem.' },
            { label: 'Polévka', name: 'Hříbkový krém', desc: 'S bylinkovými krutony.' },
            { label: 'Hlavní chod', name: 'Pečená vepřová panenka', desc: 'S omáčkou a gratinovanými brambory.' },
            { label: 'Dezert', name: 'Čokoládový dort', desc: 'S lesním ovocem.' },
          ],
        },
      },
      {
        id: 'stul',
        kind: 'plan',
        icon: 'users',
        navLabel: 'U kulatého stolu',
        navTeaser: 'Stůl se točí přes celou obrazovku',
        reveal: 'U kulatého stolu',
        detailTitle: 'Zasedací pořádek',
        plan: {
          note: 'Rozmístění hostů po hodovní síni.',
          tables: [
            { name: 'Stůl 1', guests: ['Nevěsta', 'Ženich', 'Rodiče nevěsty', 'Rodiče ženicha', 'Svědci'] },
            { name: 'Stůl 2', guests: ['Babička', 'Dědeček', 'Teta Jana', 'Strýc Petr'] },
            { name: 'Stůl 3', guests: ['Kamarád 1', 'Kamarád 2', 'Kamarád 3'] },
            { name: 'Stůl 4', guests: ['Kamarádka 1', 'Kamarádka 2', 'Kamarádka 3'] },
          ],
        },
      },
    ],
  },

  // 2 — Harry Potter
  {
    slug: 'harry-potter',
    name: 'Harry Potter',
    franchise: 'Kouzelnický svět',
    heroTitle: 'Vítejte na naší svatbě',
    heroSubtitle: 'Kouzlo začíná naším příběhem',
    tagline: 'Kouzelnický svatební den plný magie a překvapení.',
    heroImage: '/themes/harry-potter-hero.png',
    status: 'ready',
    colors: {
      bg: '#0c1120',
      panel: '#131a2e',
      panelBorder: 'rgba(198,161,74,0.35)',
      accent: '#c9a24a',
      accentSoft: 'rgba(201,162,74,0.14)',
      text: '#e9e3d0',
      muted: '#9fa8bd',
    },
    sections: [
      {
        id: 'pozvanka',
        kind: 'invitation',
        icon: 'scroll',
        navLabel: 'Naše pozvánka',
        navTeaser: 'Animace otevření dopisu',
        reveal: 'Srdečně Vás zveme',
        detailTitle: 'Naše pozvánka',
        invitation: {
          couple: 'Anna & Tomáš',
          date: '5. 7. 2026',
          time: '15:00',
          place: 'Bradavický hrad',
          message: 'Přijďte s námi oslavit lásku, která přetrvá kouzla i čas.',
          note: 'Srdečně Vás zveme na náš kouzelnický svatební den.',
        },
      },
      {
        id: 'cesta',
        kind: 'journey',
        icon: 'train',
        navLabel: 'Cesta do Bradavic',
        navTeaser: 'Animace cesty vlakem',
        reveal: 'Nástupiště 9¾',
        detailTitle: 'Cesta do Bradavic',
        journey: {
          intro: 'Od nástupiště 9¾ až po Velkou síň — naše společná cesta začíná.',
          steps: [
            { title: 'Doprava', text: 'Bradavický expres i běžné spojení. Detaily rádi upřesníme.' },
            { title: 'Ubytování', text: 'Zajištěné pokoje poblíž místa obřadu.' },
            { title: 'Praktické detaily', text: 'Vše podstatné k hladkému průběhu dne.' },
          ],
        },
      },
      {
        id: 'hostina',
        kind: 'menu',
        icon: 'utensils',
        navLabel: 'Svatební hostina',
        navTeaser: 'Animace rozsvícení svíček',
        reveal: 'Hostina hodná Bradavic',
        detailTitle: 'Svatební hostina',
        menu: {
          note: 'Připravili jsme pro vás hostinu hodnou Bradavic.',
          courses: [
            { label: 'Předkrm', name: 'Dýňová polévka', desc: 'S dýňovými semínky.' },
            { label: 'Hlavní chod', name: 'Pečené kuřecí prsíčko', desc: 'S bylinkovou omáčkou a brambory.' },
            { label: 'Vegetariánská volba', name: 'Krémové rizoto', desc: 'S houbami a parmazánem.' },
            { label: 'Dezert', name: 'Čokoládový dort', desc: 'S malinami.' },
          ],
        },
      },
      {
        id: 'den',
        kind: 'plan',
        icon: 'clock',
        navLabel: 'Čarodějnický den',
        navTeaser: 'Animace přesýpacích hodin',
        reveal: 'Harmonogram dne',
        detailTitle: 'Harmonogram dne',
        plan: {
          note: 'Vše podstatné, co potřebujete vědět o našem dni.',
          timeline: [
            { time: '14:30', text: 'Příchod hostů a uvítací lektvar' },
            { time: '15:00', text: 'Obřad v kouzelnické síni' },
            { time: '16:00', text: 'Společné foto' },
            { time: '17:00', text: 'Svatební hostina' },
            { time: '19:00', text: 'Kouzelné hry a zábava' },
            { time: '21:00', text: 'Tanec a večerní překvapení' },
          ],
        },
      },
    ],
  },

  // 3 — Shrek
  {
    slug: 'shrek',
    name: 'Shrek',
    franchise: 'Držákovo království',
    heroTitle: 'Vítejte v Držákovo Království!',
    heroSubtitle: 'Tvé magické dobrodružství začíná!',
    tagline: 'Bažinaté dobrodružství s humorem — láska je naše bažina.',
    heroImage: '/themes/shrek-hero.png',
    status: 'ready',
    colors: {
      bg: '#0f1608',
      panel: '#182310',
      panelBorder: 'rgba(163,177,64,0.4)',
      accent: '#c7cf5a',
      accentSoft: 'rgba(199,207,90,0.14)',
      text: '#e8ecc9',
      muted: '#a6b184',
    },
    sections: [
      {
        id: 'prsten',
        kind: 'invitation',
        icon: 'gem',
        navLabel: 'Pravá láska',
        navTeaser: 'Pravá láska překoná vše',
        reveal: 'Dvě duše, jedna bažina… Navždy.',
        detailTitle: 'Svatební prsteny',
        invitation: {
          couple: 'Shrek & Fiona',
          date: '5. 7. 2026',
          time: '15:00',
          place: 'Držákova bažina',
          message: 'Pravá láska překoná vše — i draka, i bažinu.',
          note: 'Prsten „Věčná Bažina": zlato 14 kt, zelený smaragd. Prstýnek „Fionina Láska": zlato 14 kt, peridot.',
        },
      },
      {
        id: 'cesta',
        kind: 'journey',
        icon: 'map',
        navLabel: 'Za sedmero horami',
        navTeaser: 'Animace kroků přes mapu',
        reveal: 'Za sedmero horami…',
        detailTitle: 'Naše cesta',
        journey: {
          intro: 'Kde to všechno začalo — od bažiny až po Zámek.',
          steps: [
            { title: 'Naše setkání', text: 'Naší první pohledy plné překvapení a osudu.' },
            { title: 'První polibek', text: 'Pod hvězdami bažiny jsme našli jeden druhého.' },
            { title: 'První večeře', text: 'Bažinové hody, společný smích a cibulové prstýnky.' },
            { title: 'Žádost', text: 'Klečel jsem v bažině, srdce bušilo, a ona řekla… ANO!' },
          ],
        },
      },
      {
        id: 'hodovani',
        kind: 'menu',
        icon: 'utensils',
        navLabel: 'Bažinové hodování',
        navTeaser: 'Kouzlo a jídlo se objeví',
        reveal: 'Bažinové hodování',
        detailTitle: 'Svatební menu',
        menu: {
          note: 'Tajné recepty přímo z bažiny.',
          courses: [
            { label: 'Předkrm', name: 'Cibulačka s krutonky', desc: 'Z bažiny a s česnekovým chlebíkem.' },
            { label: 'Hlavní chod', name: 'Bažinová pečeně', desc: 'S bylinkovou omáčkou a kukuřičné klasy.' },
            { label: 'Dezert', name: 'Perníčkové placičky', desc: 'Se sirupem z lesního ovoce a šlehačkou.' },
            { label: 'Nápoj', name: 'Swamp Punch', desc: 'Tajný recept a medovina z květin bažiny.' },
          ],
        },
      },
      {
        id: 'ples',
        kind: 'plan',
        icon: 'users',
        navLabel: 'Královský ples',
        navTeaser: 'Stůl se točí přes celou obrazovku',
        reveal: 'Královský ples',
        detailTitle: 'Zasedací pořádek',
        plan: {
          note: 'Rozmístění hostů království.',
          tables: [
            { name: 'Swamp', guests: ['Shrek', 'Fiona', 'Oslík', 'Oslíkova matka', 'Kocour v botách'] },
            { name: 'Castle', guests: ['Král Harold', 'Královna Lillian', 'Princ Charming', 'Popelka', 'Sněhurka'] },
            { name: "Donkey's Stable", guests: ['Dřevorubec', 'Muffin Man', 'Ogři přátelé', 'Zlý vlk'] },
          ],
        },
      },
    ],
  },

  // 4 — Croodsovi
  {
    slug: 'croodsovi',
    name: 'Croodsovi',
    franchise: 'Pravěké dobrodružství',
    heroTitle: 'Vítejte v pravěku',
    heroSubtitle: 'Nová éra naší rodiny začíná',
    tagline: 'Pravěké dobrodružství pro rodinu, která drží při sobě.',
    heroImage: '/themes/croodsovi-hero.png',
    status: 'new',
    colors: {
      bg: '#1a0f08',
      panel: '#25160c',
      panelBorder: 'rgba(224,138,66,0.38)',
      accent: '#e8994a',
      accentSoft: 'rgba(232,153,74,0.15)',
      text: '#f2e2cf',
      muted: '#c19a7a',
    },
    sections: [
      {
        id: 'prsten',
        kind: 'invitation',
        icon: 'gem',
        navLabel: 'Kámen lásky',
        navTeaser: 'První oheň naší lásky',
        reveal: 'Objevujeme nový svět — spolu',
        detailTitle: 'Naše pozvánka',
        invitation: {
          couple: 'Guy & Eep',
          date: '5. 7. 2026',
          time: '15:00',
          place: 'Skalní jeskyně',
          message: 'Přestali jsme se schovávat a vydali se za sluncem — společně.',
          note: 'Prstýnky z leštěného kamene a mušlí, vyrobené vlastníma rukama.',
        },
      },
      {
        id: 'cesta',
        kind: 'journey',
        icon: 'mountain',
        navLabel: 'Za sluncem',
        navTeaser: 'Cesta z jeskyně do zítřka',
        reveal: 'Zítřek existuje!',
        detailTitle: 'Naše cesta',
        journey: {
          intro: 'Od tmavé jeskyně až po barevný nový svět.',
          steps: [
            { title: 'Setkání', text: 'On přinesl oheň, ona odvahu opustit jeskyni.' },
            { title: 'Dobrodružství', text: 'Prošli jsme divokým světem plným zázraků.' },
            { title: 'Budoucnost', text: 'Nepřestaneme objevovat — a to je teprve začátek.' },
          ],
        },
      },
      {
        id: 'hodovani',
        kind: 'menu',
        icon: 'utensils',
        navLabel: 'Pravěká hostina',
        navTeaser: 'Oheň a jídlo se objeví',
        reveal: 'Pravěká hostina',
        detailTitle: 'Svatební menu',
        menu: {
          note: 'Vše ugrilované na otevřeném ohni.',
          courses: [
            { label: 'Předkrm', name: 'Pečená vejce ptáka Roka', desc: 'S bylinkami z divočiny.' },
            { label: 'Hlavní chod', name: 'Grilované maso na ohni', desc: 'S opečenými hlízami.' },
            { label: 'Příloha', name: 'Divoké ovoce a ořechy', desc: 'Nasbírané téhož rána.' },
            { label: 'Dezert', name: 'Med divokých včel', desc: 'S křupavými semínky.' },
          ],
        },
      },
      {
        id: 'plan',
        kind: 'plan',
        icon: 'users',
        navLabel: 'Kolem ohně',
        navTeaser: 'Rodina se sejde u ohniště',
        reveal: 'Kolem ohně',
        detailTitle: 'Zasedací pořádek',
        plan: {
          note: 'Rozmístění tlupy kolem ohniště.',
          tables: [
            { name: 'Ohniště 1', guests: ['Guy', 'Eep', 'Grug', 'Ugga', 'Babička'] },
            { name: 'Ohniště 2', guests: ['Thunk', 'Sandy', 'Belt', 'Sousedé'] },
            { name: 'Ohniště 3', guests: ['Přátelé z údolí', 'Lovci', 'Sběrači'] },
          ],
        },
      },
    ],
  },

  // 5 — Tom a Jerry
  {
    slug: 'tom-a-jerry',
    name: 'Tom a Jerry',
    franchise: 'Klasická animace',
    heroTitle: 'Vítejte na velkolepé oslavě',
    heroSubtitle: 'Honička skončila u oltáře',
    tagline: 'Hravá retro klasika plná humoru a nostalgie.',
    heroImage: '/themes/tom-a-jerry-hero.png',
    status: 'new',
    colors: {
      bg: '#141018',
      panel: '#1f1826',
      panelBorder: 'rgba(214,168,92,0.36)',
      accent: '#e0b25c',
      accentSoft: 'rgba(224,178,92,0.14)',
      text: '#efe7d8',
      muted: '#b3a5b8',
    },
    sections: [
      {
        id: 'prsten',
        kind: 'invitation',
        icon: 'scroll',
        navLabel: 'Pozvánka',
        navTeaser: 'Animace roztažené role filmu',
        reveal: 'A je to! Berou se!',
        detailTitle: 'Naše pozvánka',
        invitation: {
          couple: 'Tom & Jerry',
          date: '5. 7. 2026',
          time: '15:00',
          place: 'Velký sál',
          message: 'Po letech honičky konečně tančíme na stejné straně.',
          note: 'Vstup v duchu klasické černobílé grotesky vítán.',
        },
      },
      {
        id: 'cesta',
        kind: 'journey',
        icon: 'map',
        navLabel: 'Naše honička',
        navTeaser: 'Animace stop přes dům',
        reveal: 'Od honičky k lásce',
        detailTitle: 'Naše cesta',
        journey: {
          intro: 'Každá dobrá honička jednou skončí — u oltáře.',
          steps: [
            { title: 'První setkání', text: 'Jedna past, jeden úprk a jiskra byla na světě.' },
            { title: 'Nekonečné dobrodružství', text: 'Roky plné smíchu, rošťáren a smíření.' },
            { title: 'Happy end', text: 'Zjistili jsme, že jsme lepší tým než soupeři.' },
          ],
        },
      },
      {
        id: 'hostina',
        kind: 'menu',
        icon: 'utensils',
        navLabel: 'Hostina',
        navTeaser: 'Sýrová věž se objeví',
        reveal: 'Sýrová hostina',
        detailTitle: 'Svatební menu',
        menu: {
          note: 'Menu, na kterém by si pochutnal i Jerry.',
          courses: [
            { label: 'Předkrm', name: 'Výběr zrajících sýrů', desc: 'S ořechy a medem.' },
            { label: 'Hlavní chod', name: 'Zapečené lasagne', desc: 'S bylinkami a parmazánem.' },
            { label: 'Volba', name: 'Sýrové fondue', desc: 'S pečivem a zeleninou.' },
            { label: 'Dezert', name: 'Cheesecake', desc: 'S lesním ovocem.' },
          ],
        },
      },
      {
        id: 'plan',
        kind: 'plan',
        icon: 'clock',
        navLabel: 'Program dne',
        navTeaser: 'Animace budíku',
        reveal: 'Program dne',
        detailTitle: 'Harmonogram dne',
        plan: {
          note: 'Aby nikdo nezmeškal žádnou scénu.',
          timeline: [
            { time: '14:30', text: 'Příchod hostů' },
            { time: '15:00', text: 'Obřad' },
            { time: '16:00', text: 'Společné foto' },
            { time: '17:00', text: 'Hostina' },
            { time: '19:00', text: 'Hry a zábava' },
            { time: '21:00', text: 'Večerní tanec' },
          ],
        },
      },
    ],
  },

  // 6 — Avatar
  {
    slug: 'avatar',
    name: 'Avatar',
    franchise: 'Svět Pandory',
    heroTitle: 'Vítejte na Pandoře',
    heroSubtitle: 'Vidím tě',
    tagline: 'Zářivý svět Pandory a spojení dvou duší.',
    heroImage: '/themes/avatar-hero.png',
    status: 'new',
    colors: {
      bg: '#061019',
      panel: '#0c1a26',
      panelBorder: 'rgba(72,168,214,0.4)',
      accent: '#49b6dc',
      accentSoft: 'rgba(73,182,220,0.14)',
      text: '#dbeaf2',
      muted: '#8fb2c4',
    },
    sections: [
      {
        id: 'pouto',
        kind: 'invitation',
        icon: 'scroll',
        navLabel: 'Pouto',
        navTeaser: 'Bioluminiscenční pozvánka',
        reveal: 'Vidím tě',
        detailTitle: 'Naše pozvánka',
        invitation: {
          couple: 'Jake & Neytiri',
          date: '5. 7. 2026',
          time: '15:00',
          place: 'Strom duší',
          message: 'Spojili jsme svá pouta navždy — jako lid Na’vi.',
          note: 'Obřad se koná pod korunami zářícího lesa.',
        },
      },
      {
        id: 'cesta',
        kind: 'journey',
        icon: 'mountain',
        navLabel: 'Cesta lesem',
        navTeaser: 'Animace přes létající hory',
        reveal: 'Naučila mě vidět',
        detailTitle: 'Naše cesta',
        journey: {
          intro: 'Od prvního letu až po strom duší.',
          steps: [
            { title: 'Setkání', text: 'Cizinec v novém světě a dcera lesa.' },
            { title: 'Sblížení', text: 'Naučili jsme se létat a důvěřovat si.' },
            { title: 'Spojení', text: 'Naše pouta se stala jedním.' },
          ],
        },
      },
      {
        id: 'hostina',
        kind: 'menu',
        icon: 'utensils',
        navLabel: 'Hostina lesa',
        navTeaser: 'Zářivé plody se objeví',
        reveal: 'Hostina lesa',
        detailTitle: 'Svatební menu',
        menu: {
          note: 'Dary zářícího lesa Pandory.',
          courses: [
            { label: 'Předkrm', name: 'Salát ze světélkujících plodů', desc: 'S bylinkovým dresinkem.' },
            { label: 'Hlavní chod', name: 'Pečené maso lovu', desc: 'S kořeny a zeleninou.' },
            { label: 'Volba', name: 'Zeleninové curry', desc: 'S exotickým kořením.' },
            { label: 'Dezert', name: 'Nektarový krém', desc: 'Z květů Pandory.' },
          ],
        },
      },
      {
        id: 'plan',
        kind: 'plan',
        icon: 'users',
        navLabel: 'Kmen',
        navTeaser: 'Kruh kmene se rozzáří',
        reveal: 'Kruh kmene',
        detailTitle: 'Zasedací pořádek',
        plan: {
          note: 'Rozmístění kmene kolem stromu.',
          tables: [
            { name: 'Kruh 1', guests: ['Jake', 'Neytiri', 'Rodiče', 'Svědci'] },
            { name: 'Kruh 2', guests: ['Nejbližší kmene', 'Přátelé', 'Lovci'] },
            { name: 'Kruh 3', guests: ['Hosté z lesa', 'Sběrači', 'Děti kmene'] },
          ],
        },
      },
    ],
  },

  // 7 — Simpsonovi
  {
    slug: 'simpsonovi',
    name: 'Simpsonovi',
    franchise: 'Springfield',
    heroTitle: 'Vítejte ve Springfieldu',
    heroSubtitle: 'Ď-húú! Bereme se!',
    tagline: 'Barevná, vtipná oslava v duchu Springfieldu.',
    heroImage: '/themes/simpsonovi-hero.png',
    status: 'new',
    colors: {
      bg: '#0f1206',
      panel: '#191d0a',
      panelBorder: 'rgba(240,205,60,0.42)',
      accent: '#f2cf3c',
      accentSoft: 'rgba(242,207,60,0.15)',
      text: '#f0efd2',
      muted: '#a9b07a',
    },
    sections: [
      {
        id: 'pozvanka',
        kind: 'invitation',
        icon: 'scroll',
        navLabel: 'Pozvánka',
        navTeaser: 'Animace mraků z úvodní znělky',
        reveal: 'Ď-húú! Bereme se!',
        detailTitle: 'Naše pozvánka',
        invitation: {
          couple: 'Homer & Marge',
          date: '5. 7. 2026',
          time: '15:00',
          place: 'Springfield',
          message: 'Přijďte oslavit lásku, koblihy a rodinu.',
          note: 'Dress code: cokoliv žluťoučkého vítáno.',
        },
      },
      {
        id: 'cesta',
        kind: 'journey',
        icon: 'map',
        navLabel: 'Naše cesta',
        navTeaser: 'Animace ulicemi Springfieldu',
        reveal: 'Od Vočka až k oltáři',
        detailTitle: 'Naše cesta',
        journey: {
          intro: 'Příběh, který by vydal na celou sérii.',
          steps: [
            { title: 'Jak jsme se poznali', text: 'Na střední — a od té doby neodloučitelní.' },
            { title: 'Co jsme prožili', text: 'Smích, chaos a nekonečná láska.' },
            { title: 'Co nás čeká', text: 'Ještě mnoho společných epizod.' },
          ],
        },
      },
      {
        id: 'hostina',
        kind: 'menu',
        icon: 'utensils',
        navLabel: 'Hostina',
        navTeaser: 'Věž koblih se objeví',
        reveal: 'Koblihová hostina',
        detailTitle: 'Svatební menu',
        menu: {
          note: 'Menu, které by schválil i Homer.',
          courses: [
            { label: 'Předkrm', name: 'Křupavé předkrmy', desc: 'S dipy a omáčkami.' },
            { label: 'Hlavní chod', name: 'Grilovaná žebra', desc: 'S pečenými brambory.' },
            { label: 'Volba', name: 'Burger menu', desc: 'S domácími hranolky.' },
            { label: 'Dezert', name: 'Růžové koblihy', desc: 'S barevným posypem.' },
          ],
        },
      },
      {
        id: 'plan',
        kind: 'plan',
        icon: 'clock',
        navLabel: 'Program dne',
        navTeaser: 'Animace televizní znělky',
        reveal: 'Program dne',
        detailTitle: 'Harmonogram dne',
        plan: {
          note: 'Kompletní program dne ve Springfieldu.',
          timeline: [
            { time: '14:30', text: 'Příchod hostů' },
            { time: '15:00', text: 'Obřad' },
            { time: '16:00', text: 'Společné foto' },
            { time: '17:00', text: 'Hostina' },
            { time: '19:00', text: 'Zábava a hry' },
            { time: '21:00', text: 'Večerní tanec' },
          ],
        },
      },
    ],
  },

  // 8 — Rick a Morty
  {
    slug: 'rick-a-morty',
    name: 'Rick a Morty',
    franchise: 'Multivesmír',
    heroTitle: 'Vítejte v multivesmíru',
    heroSubtitle: 'Wubba lubba dub dub!',
    tagline: 'Šílené sci-fi dobrodružství napříč dimenzemi.',
    heroImage: '/themes/rick-a-morty-hero.png',
    status: 'new',
    colors: {
      bg: '#08131a',
      panel: '#0e1f28',
      panelBorder: 'rgba(86,208,166,0.4)',
      accent: '#57d3a6',
      accentSoft: 'rgba(87,211,166,0.14)',
      text: '#dcf1ea',
      muted: '#8fbcae',
    },
    sections: [
      {
        id: 'portal',
        kind: 'invitation',
        icon: 'scroll',
        navLabel: 'Portál',
        navTeaser: 'Animace otevření portálu',
        reveal: 'Vstupte do dimenze C-137',
        detailTitle: 'Naše pozvánka',
        invitation: {
          couple: 'Rick & Morty',
          date: '5. 7. 2026',
          time: '15:00',
          place: 'Dimenze C-137',
          message: 'Napříč nekonečnými vesmíry jsme si vybrali právě tenhle den.',
          note: 'Portálová zbraň bude k dispozici u vstupu.',
        },
      },
      {
        id: 'cesta',
        kind: 'journey',
        icon: 'map',
        navLabel: 'Naše dobrodružství',
        navTeaser: 'Animace skoků mezi dimenzemi',
        reveal: 'Napříč dimenzemi',
        detailTitle: 'Naše cesta',
        journey: {
          intro: 'Nekonečné vesmíry, jedna společná cesta.',
          steps: [
            { title: 'První skok', text: 'Náhodné setkání v jedné z nekonečných dimenzí.' },
            { title: 'Dobrodružství', text: 'Přežili jsme to nejšílenější, co multivesmír nabídl.' },
            { title: 'Navždy', text: 'Sto let dobrodružství — Rick a Morty forever.' },
          ],
        },
      },
      {
        id: 'hostina',
        kind: 'menu',
        icon: 'utensils',
        navLabel: 'Mezidimenzní hostina',
        navTeaser: 'Jídlo z jiné dimenze se objeví',
        reveal: 'Mezidimenzní hostina',
        detailTitle: 'Svatební menu',
        menu: {
          note: 'Suroviny dovezené z nejlepších dimenzí.',
          courses: [
            { label: 'Předkrm', name: 'Meeseeks tapas', desc: 'Rychlé a k dokonalosti.' },
            { label: 'Hlavní chod', name: 'Szechuan pečeně', desc: 'S legendární omáčkou.' },
            { label: 'Volba', name: 'Plumbus grill', desc: 'Vegetariánská varianta.' },
            { label: 'Dezert', name: 'Portálový cheesecake', desc: 'Se zelenou polevou.' },
          ],
        },
      },
      {
        id: 'plan',
        kind: 'plan',
        icon: 'users',
        navLabel: 'Zasedačka dimenzí',
        navTeaser: 'Stoly se přesouvají mezi dimenzemi',
        reveal: 'Zasedačka dimenzí',
        detailTitle: 'Zasedací pořádek',
        plan: {
          note: 'Rozmístění napříč dimenzemi.',
          tables: [
            { name: 'Dimenze C-137', guests: ['Rick', 'Morty', 'Beth', 'Jerry', 'Summer'] },
            { name: 'Citadela', guests: ['Rick z jiné dimenze', 'Morty přátelé', 'Rada Ricků'] },
            { name: 'Mezivesmír', guests: ['Mr. Meeseeks', 'Birdperson', 'Squanchy'] },
          ],
        },
      },
    ],
  },
]

export function getTheme(slug: string): Theme | undefined {
  return themes.find((t) => t.slug === slug)
}

export const THANK_YOU = thankYou
