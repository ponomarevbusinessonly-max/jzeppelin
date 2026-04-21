// Translation dictionaries for J.Zeppelin.
// Each locale mirrors the same shape. Sections read strings via useDict().
// EN is the source of truth — keep keys in sync when adding content.

export const dictionaries = {
  en: {
    // ── Navbar ──
    nav: {
      products: 'Products',
      why: 'Why',
      buy: 'Buy',
      map: 'Map',
      aiAnalysis: 'AI Analysis ✦',
      faq: 'FAQ',
      productsItems: {
        drinkCheck: 'Drink Check Test',
        multiDrug:  'Multi-Drug Test',
        thcParent:  'THC Parent Test',
      },
    },

    // ── Hero ──
    hero: {
      headline: [['Your', 'Night,'], ['Your', 'Rules']],
      subtitle:
        "Spiked drinks happen. Bad trips happen. J.Zeppelin makes sure you know before it's too late — with fast, discreet tests you can use anywhere.",
      cta: 'See our tests',
    },

    // ── Products ──
    products: {
      heading: 'Our Tests',
      howToUse: 'How to use',
      details: 'Details',
      items: {
        drink: {
          name: 'DRINK CHECK TEST',
          description:
            '6 beverage sticker tests. Detects GHB, Ketamine, Flunitrazepam in drinks.',
        },
        multi: {
          name: 'MULTI-DRUG TEST',
          description:
            '9-panel oral fluid test. Detects OPI, MET, BZO, COC, AMP, MDMA, BUP, MTD, THC.',
        },
        thc: {
          name: 'THC PARENT TEST',
          description:
            'Oral fluid test. Detects Δ9-THC parent compound (not the metabolite).',
        },
      },
    },

    // ── Why ──
    why: {
      heading: 'WHY J.ZEPPELIN',
      lead: 'We made it simple on purpose.',
      body1:
        "Drug testing shouldn't require a lab, a prescription, or a chemistry degree. J.Zeppelin tests are designed for real situations. A club, a house party, a stranger's drink. You get a clear result in minutes, no expertise needed.",
      body2:
        "We don't judge the night you're having. We just make sure you get home from it.",
      features: [
        { label: 'Fast.',      text: 'Results in 5 minutes.' },
        { label: 'Foolproof.', text: 'No training required.' },
        { label: 'Discreet.',  text: 'Fits in your pocket. Looks like nothing.' },
      ],
      disclaimer: '*Not for medical or forensic use. For personal safety only.',
    },

    // ── Where to buy ──
    buy: {
      heading: 'Where to Buy',
      subheading: 'Coming soon in Germany and across the EU.',
      emailPlaceholder: 'your@email.com',
      submit: 'Notify me',
      thanks: "Thank you. We'll let you know.",
    },

    // ── Incident map ──
    map: {
      heading: 'Incident Map',
      subheading:
        'User-submitted reports of substance detection across Europe. Click a pin to see details.',
      report: '+ Report an incident',
      submitted: 'Report submitted. Thank you for keeping the community informed.',
      note: 'All reports are anonymous by default. Data is community-submitted and unverified.',
    },

    // ── Drink Check Test page ──
    drinkCheck: {
      badge: '6 sticker tests per pack',
      subtitle: 'A discreet beverage sticker test that detects the three most common spiking substances in 1–3 minutes — without altering your drink.',
      backHome: 'Back to home',
      whatItDetects: 'What it detects',
      howToUse: 'How to use',
      keyFacts: 'Key facts',
      limitations: 'Limitations',
      videos: 'Videos',
      videoHowToUse: 'How to use',
      videoAbout: 'About the product',
      ctaText: 'Available soon in Germany and across the EU.',
      ctaBtn: 'Where to buy →',
      substances: [
        { name: 'GHB', full: 'Gamma-hydroxybutyric acid', result: 'Spot turns BLUE',       note: 'Colorless, odorless. One of the most common drink-spiking agents.' },
        { name: 'KET', full: 'Ketamine HCl',              result: 'Spot turns BLUE',       note: 'Dissociative anesthetic. Used in powder or liquid form.' },
        { name: 'FLZ', full: 'Flunitrazepam / Rohypnol',  result: 'Spot turns RED-PURPLE', note: 'Powerful benzodiazepine. Causes memory loss and sedation.' },
      ],
      steps: [
        { num: '01', title: 'Stick it',        text: 'Remove the release paper and stick the sticker onto the back of your mobile phone or another flat surface.' },
        { num: '02', title: 'Apply a drop',    text: 'Apply a single drop of your drink to the test area — it should cover all 3 test spots.' },
        { num: '03', title: 'Wait 1–3 min',    text: 'Wait until the test spots are completely dry. This takes 1 to 3 minutes.' },
        { num: '04', title: 'Read the result', text: 'GHB or KET spot turns blue → positive. FLZ spot turns red-purple → positive. DO NOT DRINK if any spot changes color.' },
      ],
      facts: [
        'Single-use sticker — discreet and pocket-sized',
        'Results in 1–3 minutes',
        'Works in cocktails, beer, wine, and non-alcoholic drinks',
        '6 tests per pack',
        'No lab equipment needed',
        'Anonymous use — no app or account required',
      ],
      limitationsList: [
        'Not suitable for milk products, creamy or oily beverages.',
        'Blue or red-purple colored drinks may produce a false positive result.',
        'Discard any suspect beverage immediately — do not taste it.',
        'For personal use and reference only. A positive result should never be used as the sole basis for determining the presence of illegal drugs.',
        'This is a personal safety aid, not a certified diagnostic device. If you feel unwell — seek help immediately regardless of the test result.',
      ],
    },

    // ── Footer ──
    footer: {
      tagline: "He checks so you don't have to.",
      explore: 'Explore',
      legal: 'Legal',
      importer: 'EU Importer: UcanDrive GmbH, EMittelstr. 5-5A, 12529 Schönefeld, Germany',
      disclaimer: 'Non-IVD consumer product. For personal use only.',
      copyright: 'All rights reserved.',
      navLinks: [
        { key: 'products', label: 'Products',       href: '/#products' },
        { key: 'why',      label: 'Why J.Zeppelin', href: '/#why' },
        { key: 'buy',      label: 'Where to Buy',   href: '/#buy' },
        { key: 'map',      label: 'Incident Map',   href: '/#map' },
        { key: 'faq',      label: 'FAQ',            href: '/faq' },
      ],
      legalLinks: [
        { key: 'privacy',       label: 'Privacy Policy',       href: '/privacy' },
        { key: 'cookies',       label: 'Cookie Policy',        href: '/cookies' },
        { key: 'terms',         label: 'Terms of Use',         href: '/terms' },
        { key: 'withdrawal',    label: 'Right of Withdrawal',  href: '/withdrawal' },
        { key: 'accessibility', label: 'Accessibility',        href: '/accessibility' },
        { key: 'imprint',       label: 'Imprint',              href: '/imprint' },
      ],
    },
  },

  uk: {
    // ── Navbar ──
    nav: {
      products: 'Продукти',
      why: 'Чому ми',
      buy: 'Купити',
      map: 'Мапа',
      aiAnalysis: 'AI-аналіз ✦',
      faq: 'FAQ',
      productsItems: {
        drinkCheck: 'Тест напоїв',
        multiDrug:  'Мульти-тест',
        thcParent:  'Тест на активний THC',
      },
    },

    // ── Hero ──
    hero: {
      headline: [['Твоя', 'Ніч,'], ['Твої', 'Правила']],
      subtitle:
        'Підмішані напої трапляються. Погані тріпи трапляються. J.Zeppelin дає тобі дізнатися про це раніше, ніж стане пізно — швидкими й непомітними тестами, якими можна скористатися будь-де.',
      cta: 'Наші тести',
    },

    // ── Products ──
    products: {
      heading: 'Наші тести',
      howToUse: 'Як користуватися',
      details: 'Докладніше',
      items: {
        drink: {
          name: 'ТЕСТ НАПОЇВ',
          description:
            '6 тест-стікерів для напоїв. Виявляє GHB, кетамін, флунітразепам у напоях.',
        },
        multi: {
          name: 'МУЛЬТИ-ТЕСТ',
          description:
            '9-панельний тест слини. Виявляє OPI, MET, BZO, COC, AMP, MDMA, BUP, MTD, THC.',
        },
        thc: {
          name: 'ТЕСТ НА АКТИВНИЙ THC',
          description:
            'Тест слини. Виявляє саме Δ9-THC — активну речовину, а не метаболіт.',
        },
      },
    },

    // ── Why ──
    why: {
      heading: 'ЧОМУ J.ZEPPELIN',
      lead: 'Ми зробили це простим навмисно.',
      body1:
        'Тест на наркотики не має вимагати лабораторії, рецепта чи ступеня з хімії. Тести J.Zeppelin створені для реальних ситуацій — клуб, вечірка, напій від незнайомця. Зрозумілий результат за лічені хвилини, без спеціальних навичок.',
      body2:
        'Ми не осуджуємо твою ніч. Ми просто хочемо, щоб ти повернувся з неї додому.',
      features: [
        { label: 'Швидко.',       text: 'Результат за 5 хвилин.' },
        { label: 'Надійно.',      text: 'Не потрібно нічого вчити.' },
        { label: 'Непомітно.',    text: 'Влазить у кишеню. Не схоже ні на що.' },
      ],
      disclaimer:
        '*Не для медичного або судово-експертного використання. Лише для особистої безпеки.',
    },

    // ── Where to buy ──
    buy: {
      heading: 'Де купити',
      subheading: 'Незабаром у Німеччині та по всьому ЄС.',
      emailPlaceholder: 'ваш@email.com',
      submit: 'Повідомити мене',
      thanks: 'Дякуємо. Ми повідомимо вас.',
    },

    // ── Incident map ──
    map: {
      heading: 'Мапа інцидентів',
      subheading:
        'Повідомлення від користувачів про виявлення речовин по всій Європі. Натисніть на позначку, щоб переглянути деталі.',
      report: '+ Повідомити про інцидент',
      submitted: 'Повідомлення надіслано. Дякуємо, що дбаєте про спільноту.',
      note:
        'Усі повідомлення за замовчуванням анонімні. Дані подані спільнотою й не перевірені.',
    },

    // ── Drink Check Test page ──
    drinkCheck: {
      badge: '6 стікерних тестів в упаковці',
      subtitle: 'Непомітний стікерний тест для напоїв, який виявляє три найпоширеніші речовини для підмішування за 1–3 хвилини — не змінюючи смаку.',
      backHome: 'На головну',
      whatItDetects: 'Що виявляє',
      howToUse: 'Як використовувати',
      keyFacts: 'Ключові факти',
      limitations: 'Обмеження',
      videos: 'Відео',
      videoHowToUse: 'Як використовувати',
      videoAbout: 'Про продукт',
      ctaText: 'Незабаром у Німеччині та по всьому ЄС.',
      ctaBtn: 'Де купити →',
      substances: [
        { name: 'GHB', full: 'Гамма-гідроксимасляна кислота', result: 'Пляма СИНІЄ',              note: 'Безбарвна, без запаху. Один із найпоширеніших засобів підмішування.' },
        { name: 'KET', full: 'Кетамін HCl',                   result: 'Пляма СИНІЄ',              note: 'Дисоціативний анестетик. Використовується у вигляді порошку або рідини.' },
        { name: 'FLZ', full: 'Флунітразепам / Рогіпнол',      result: 'Пляма ЧЕРВОНІЄ-ФІОЛЕТОВІЄ', note: 'Потужний бензодіазепін. Викликає втрату пам\'яті та седацію.' },
      ],
      steps: [
        { num: '01', title: 'Приклейте',         text: 'Зніміть захисний папір і приклейте стікер на задню кришку телефону або іншу рівну поверхню.' },
        { num: '02', title: 'Нанесіть краплю',   text: 'Нанесіть одну краплю напою на зону тестування — вона має покрити всі 3 тест-точки.' },
        { num: '03', title: 'Зачекайте 1–3 хв',  text: 'Зачекайте, доки тест-точки повністю висохнуть. Це займає 1–3 хвилини.' },
        { num: '04', title: 'Зчитайте результат', text: 'Синя пляма GHB або KET → позитивний. Червоно-фіолетова пляма FLZ → позитивний. НЕ ПИЙТЕ, якщо будь-яка пляма змінила колір.' },
      ],
      facts: [
        'Одноразовий стікер — непомітний і кишеньковий',
        'Результат за 1–3 хвилини',
        'Працює в коктейлях, пиві, вині та безалкогольних напоях',
        '6 тестів в упаковці',
        'Не потребує лабораторного обладнання',
        'Анонімне використання — жодних програм чи акаунту',
      ],
      limitationsList: [
        'Не придатний для молочних продуктів, кремових або жирних напоїв.',
        'Напої синього або червоно-фіолетового кольору можуть давати хибнопозитивний результат.',
        'Негайно викиньте підозрілий напій — не куштуйте його.',
        'Лише для особистого використання та орієнтиру. Позитивний результат не є єдиною підставою для встановлення наявності незаконних речовин.',
        'Це засіб особистої безпеки, а не сертифікований діагностичний пристрій. Якщо вам погано — негайно зверніться по допомогу незалежно від результату тесту.',
      ],
    },

    // ── Footer ──
    footer: {
      tagline: 'Він перевіряє — щоб тобі не довелося.',
      explore: 'Навігація',
      legal: 'Документи',
      importer:
        'Імпортер у ЄС: UcanDrive GmbH, EMittelstr. 5-5A, 12529 Schönefeld, Німеччина',
      disclaimer: 'Споживчий продукт (non-IVD). Лише для особистого використання.',
      copyright: 'Усі права захищено.',
      navLinks: [
        { key: 'products', label: 'Продукти',         href: '/uk#products' },
        { key: 'why',      label: 'Чому J.Zeppelin',  href: '/uk#why' },
        { key: 'buy',      label: 'Де купити',        href: '/uk#buy' },
        { key: 'map',      label: 'Мапа інцидентів',  href: '/uk#map' },
        { key: 'faq',      label: 'FAQ',              href: '/faq' },
      ],
      legalLinks: [
        { key: 'privacy',       label: 'Політика конфіденційності', href: '/privacy' },
        { key: 'cookies',       label: 'Політика cookies',          href: '/cookies' },
        { key: 'terms',         label: 'Умови використання',        href: '/terms' },
        { key: 'withdrawal',    label: 'Право на відмову',          href: '/withdrawal' },
        { key: 'accessibility', label: 'Доступність',               href: '/accessibility' },
        { key: 'imprint',       label: 'Вихідні дані',              href: '/imprint' },
      ],
    },
  },
};

export const DEFAULT_LOCALE = 'en';
export const SUPPORTED_LOCALES = ['en', 'uk'];
