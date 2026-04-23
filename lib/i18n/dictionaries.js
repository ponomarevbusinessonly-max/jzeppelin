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

    // ── THC Parent Test page ──
    thcParent: {
      badge: 'Oral fluid · Δ9-THC · Cut-off 50 ng/mL',
      subtitle: 'Detects the active Δ9-THC compound in oral fluid — not the metabolite. Designed to indicate recent exposure, not past use weeks ago.',
      backHome: 'Back to home',
      whatMakesDifferent: 'What makes it different',
      detectionWindow: 'Detection window',
      howToUse: 'How to use',
      saturationNote: '⚠ Full saturation of the sponge is critical. Insufficient oral fluid will produce false or invalid results.',
      keyFacts: 'Key facts',
      limitations: 'Limitations',
      videos: 'Videos',
      videoHowToUse: 'How to use',
      videoAbout: 'About the product',
      ctaText: 'Available soon in Germany and across the EU.',
      ctaBtn: 'Where to buy →',
      comparisons: [
        { label: 'Standard THC test', detects: 'THC-COOH (metabolite)',       window: 'Days to weeks',   note: 'Shows past use — not current impairment.', highlight: false },
        { label: 'THC Parent Test',   detects: 'Δ9-THC (parent compound)',    window: 'Up to ~14 hours', note: 'Reflects recent exposure, not old metabolites.', highlight: true },
      ],
      steps: [
        { num: '01', title: 'Collect oral fluid', text: 'Insert the sponge collector into your mouth and actively swab the inside for at least 3 minutes until the sponge is fully saturated. Press it between tongue and teeth to help. No hard spots should be felt when done.' },
        { num: '02', title: 'Fill the chamber',   text: 'Unscrew the collection chamber. Press the sponge fully against the strainer to release oral fluid up to the arrowed level. Screw it back tightly. Discard the collector.' },
        { num: '03', title: 'Apply to cassette',  text: 'Shake the chamber for 10 seconds. Snap the tip open, invert it and transfer 3 drops (~120 μL) into the specimen well (S) of the test cassette. Start the timer.' },
        { num: '04', title: 'Read at 5 minutes',  text: 'Two lines (C + T) = NEGATIVE. One line in C only = POSITIVE — Δ9-THC detected above 50 ng/mL. No C line = INVALID. Do not read after 15 minutes.' },
      ],
      facts: [
        'Detects Δ9-THC (active compound) — not THC-COOH metabolite',
        'Cut-off: 50 ng/mL in oral fluid',
        'Detection window: up to ~14 hours after use',
        'Read results at 5 minutes — invalid after 15 min',
        '96.4% agreement with GC/MS laboratory method',
        'CE-marked · IVD · Hangzhou AllTest Biotech',
        'EC Representative: MedNet EC-REP GmbH, Münster, Germany',
      ],
      limitationsList: [
        'Provides a qualitative, preliminary result only. GC/MS is the preferred confirmatory method.',
        'A negative result does not guarantee a drug-free specimen — the drug may be present below the 50 ng/mL cut-off level.',
        'For in vitro diagnostic use. Not for legal or forensic determination of drug use.',
        'Store at 2–30 °C. Do not freeze. Do not use after the expiration date.',
        'The used collector and cassette must be discarded according to local regulations.',
      ],
    },

    // ── Multi-Drug Test page ──
    multiDrug: {
      badge: '9-panel oral fluid test · CE IVD',
      subtitle: 'A rapid oral fluid immunoassay that simultaneously screens for 9 substance classes — stimulants, opioids, benzodiazepines, MDMA and cannabis. Non-invasive, no lab needed.',
      backHome: 'Back to home',
      panels: '9 Panels',
      cutoffNote: 'Cut-off values in ng/mL oral fluid.',
      howToUse: 'How to use',
      collectionNote: '⚠ Do not eat, drink, chew gum or use tobacco products for at least 10 minutes before collection. Store at 15–30 °C before use.',
      keyFacts: 'Key facts',
      limitations: 'Limitations',
      videos: 'Videos',
      videoHowToUse: 'How to use',
      videoAbout: 'About the product',
      ctaText: 'Available soon in Germany and across the EU.',
      ctaBtn: 'Where to buy →',
      steps: [
        { num: '01', title: 'Swab your gums',    text: 'Remove the device cap. Place the absorbent tip against your upper and lower jaws. Actively swab around the gums on both sides of your mouth 10–15 times to saturate the collector.' },
        { num: '02', title: 'Collect the fluid', text: 'Insert the absorbent tip into the device and hold it until oral fluid flows into the test windows (~60 seconds). Remove the collector and start the timer.' },
        { num: '03', title: 'Read at 3–10 min',  text: 'Place on a flat surface. Read at 3 minutes. If all lines are visible at 3 min → result is ready. If any line is missing at 3 min → wait and re-read at 10 minutes. Do not read after 15 minutes.' },
        { num: '04', title: 'Interpret result',  text: 'Two lines (C + T) = NEGATIVE for that substance. One line in C only = POSITIVE. No line in C = INVALID. Alcohol strip (if present): read color at 3–5 minutes against the chart.' },
      ],
      facts: [
        '9 substance panels in a single test',
        'Results in 3–10 minutes',
        'Non-invasive oral fluid (saliva) collection',
        'Includes alcohol strip indicator (0.02% cut-off)',
        'CE-marked · IVD · Hangzhou AllTest Biotech',
        'EC Representative: MedNet EC-REP GmbH, Münster, Germany',
      ],
      limitationsList: [
        'Provides a qualitative, preliminary result only. GC/MS is the preferred confirmatory method.',
        'A negative result does not guarantee a drug-free specimen — a drug may be present below the cut-off level.',
        'The alcohol strip is highly sensitive to alcohol vapors in the air (e.g. disinfectants, perfumes). Test away from such environments.',
        'For in vitro diagnostic use. Not for legal or forensic determination of drug use.',
        'Do not use after the expiration date. Store in sealed pouch at 2–30 °C. Do not freeze.',
      ],
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

    // ── FAQ page ──
    faq: {
      subtitle: 'Everything you need to know about J.Zeppelin tests and how to use them.',
      groups: [
        {
          topic: 'Our Products',
          items: [
            {
              q: 'What substances can the DRINK CHECK TEST detect?',
              a: 'The DRINK CHECK TEST detects GHB (gamma-hydroxybutyric acid), Ketamine and Flunitrazepam (Rohypnol) — the three most commonly used drink-spiking substances. Place the sticker on a beverage; it reacts within seconds.',
            },
            {
              q: 'What is the MULTI-DRUG TEST used for?',
              a: 'A 9-panel oral-fluid (saliva) test that screens for Opiates, Methamphetamine, Benzodiazepines, Cocaine, Amphetamine, MDMA, Buprenorphine, Methadone and THC. Used for personal-safety and harm-reduction purposes.',
            },
            {
              q: 'What makes the THC PARENT TEST different?',
              a: 'Standard THC tests detect the metabolite THC-COOH, which stays in the body for days or weeks. The THC Parent Test detects Δ9-THC itself — the active compound — so it only shows positive during active impairment, not residual past use.',
            },
            {
              q: 'Are the tests single-use?',
              a: 'Yes — all J.Zeppelin tests are single-use for accuracy and hygiene. The DRINK CHECK pack contains 6 sticker tests. The MULTI-DRUG and THC PARENT tests each come as individual cassettes.',
            },
          ],
        },
        {
          topic: 'Usage & Accuracy',
          items: [
            {
              q: 'How accurate are the tests?',
              a: 'Our tests follow CE-marked rapid-test standards with >99% accuracy for target substances at clinically relevant concentrations. No rapid test is 100% infallible — if you feel unsafe, trust your instincts regardless of the result.',
            },
            {
              q: 'Can I use the DRINK CHECK TEST on any drink?',
              a: 'Yes — it works on most beverages including cocktails, beer and non-alcoholic drinks. High-sugar or carbonated drinks may slightly affect sensitivity. Apply the sticker to a small sample for best results.',
            },
            {
              q: 'How do I read the result?',
              a: 'Oral-fluid tests: two lines = negative, one line (control only) = positive, no lines = invalid. DRINK CHECK sticker: a color change indicates the presence of a substance. Detailed instructions are included in every pack.',
            },
          ],
        },
        {
          topic: 'Legal & Availability',
          items: [
            {
              q: 'Are the tests legal in the EU?',
              a: 'Yes — our tests are sold as personal-safety tools and are not classified as prescription medical devices. They comply with CE marking requirements for in-vitro diagnostic devices.',
            },
            {
              q: 'Where can I buy J.Zeppelin tests?',
              a: "We're currently launching in Germany and expanding across the EU. Leave your email on the main page to be notified when tests are available in your region or online.",
            },
          ],
        },
        {
          topic: 'Community',
          items: [
            {
              q: 'Is the Incident Map data verified?',
              a: 'No — the Incident Map is entirely community-submitted and anonymous. Reports are not verified by J.Zeppelin. The map exists to raise awareness, not as a scientific or legal data source.',
            },
          ],
        },
      ],
      contact: {
        heading: 'Still curious?',
        lead: 'Ask us anything. We reply within 1–2 business days at',
        namePh: 'Your name',
        emailPh: 'your@email.com',
        messagePh: 'Your question…',
        privacy: 'We never share your email.',
        sendBtn: 'Send question',
        sending: 'Sending…',
        successHead: 'Message sent',
        successText: "Thanks! We'll get back to you at the email you provided.",
        errGeneric: 'Something went wrong. Please try again.',
        footerPre: 'Prefer email? Reach us directly at',
      },
    },

    // ── AI Analysis page ──
    aiAnalysis: {
      badge: 'Coming Soon',
      headline: ['AI Test', 'Analysis'],
      subtitle: 'Upload a photo of your J.Zeppelin test strip and our AI will instantly tell you — positive or negative.',
      steps: [
        { step: '01', title: 'Photograph', text: 'Take a clear photo of your test strip after use.' },
        { step: '02', title: 'Upload',     text: 'Upload it here — no account required.' },
        { step: '03', title: 'Result',     text: 'AI reads the lines and returns a clear positive / negative verdict.' },
      ],
      ctaPre: 'Want early access?',
      ctaLink: 'Leave your email',
      ctaPost: 'on the main page.',
      uploader: {
        lockedLabel: 'Not available yet',
        drop: 'Drop your test photo here or click to upload',
        types: 'JPG, PNG up to 10MB',
      },
    },

    // ── Footer ──
    footer: {
      tagline: "He checks so you don't have to.",
      explore: 'Explore',
      legal: 'Legal',
      importer: 'EU Importer: UcanDrive GmbH, Mittelstraße 5 / 5A, 12529 Schönefeld, Germany',
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

    // ── THC Parent Test page ──
    thcParent: {
      badge: 'Слина · Δ9-THC · Поріг 50 нг/мл',
      subtitle: 'Виявляє активний Δ9-THC у слині — не метаболіт. Створений для визначення нещодавнього впливу, а не вживання тижні тому.',
      backHome: 'На головну',
      whatMakesDifferent: 'Чим він відрізняється',
      detectionWindow: 'Вікно виявлення',
      howToUse: 'Як використовувати',
      saturationNote: '⚠ Повне насичення губки є критичним. Недостатня кількість слини дасть хибний або недійсний результат.',
      keyFacts: 'Ключові факти',
      limitations: 'Обмеження',
      videos: 'Відео',
      videoHowToUse: 'Як використовувати',
      videoAbout: 'Про продукт',
      ctaText: 'Незабаром у Німеччині та по всьому ЄС.',
      ctaBtn: 'Де купити →',
      comparisons: [
        { label: 'Стандартний тест на THC', detects: 'THC-COOH (метаболіт)',        window: 'Дні та тижні',    note: 'Показує минуле вживання — не поточний стан.', highlight: false },
        { label: 'Тест на активний THC',    detects: 'Δ9-THC (активна речовина)',   window: 'До ~14 годин',   note: 'Відображає нещодавній вплив, а не старі метаболіти.', highlight: true },
      ],
      steps: [
        { num: '01', title: 'Зберіть слину',         text: 'Вставте губчастий колектор у рот і активно протирайте зсередини щонайменше 3 хвилини, доки губка повністю насититься. Притискайте між язиком і зубами. Після завершення твердих ділянок відчуватися не повинно.' },
        { num: '02', title: 'Заповніть камеру',       text: 'Відкрутіть збірну камеру. Щільно притисніть губку до фільтра, щоб вивільнити рідину до рівня стрілки. Закрутіть назад. Утилізуйте колектор.' },
        { num: '03', title: 'Нанесіть на касету',     text: 'Струсіть камеру 10 секунд. Відкрийте кінчик, переверніть і перенесіть 3 краплі (~120 мкл) у лунку зразка (S) тестової касети. Запустіть таймер.' },
        { num: '04', title: 'Зчитайте через 5 хвилин', text: 'Дві смужки (C + T) = НЕГАТИВНИЙ. Лише одна смужка в C = ПОЗИТИВНИЙ — Δ9-THC вище 50 нг/мл. Немає смужки C = НЕДІЙСНИЙ. Не читайте після 15 хвилин.' },
      ],
      facts: [
        'Виявляє Δ9-THC (активну речовину) — не метаболіт THC-COOH',
        'Поріг: 50 нг/мл у слині',
        'Вікно виявлення: до ~14 годин після вживання',
        'Зчитування через 5 хвилин — недійсний після 15 хв',
        '96,4% відповідності лабораторному методу GC/MS',
        'CE-маркування · IVD · Hangzhou AllTest Biotech',
        'Представник у ЄС: MedNet EC-REP GmbH, Мюнстер, Німеччина',
      ],
      limitationsList: [
        'Надає лише якісний попередній результат. Підтвердження методом GC/MS є кращим варіантом.',
        'Негативний результат не гарантує відсутності речовин — їх концентрація може бути нижче порогу 50 нг/мл.',
        'Для діагностики in vitro. Не призначений для юридичного або судово-медичного визначення вживання речовин.',
        'Зберігайте при 2–30 °C. Не заморожуйте. Не використовуйте після закінчення терміну придатності.',
        'Використані колектор і касета повинні утилізуватися відповідно до місцевих норм.',
      ],
    },

    // ── Multi-Drug Test page ──
    multiDrug: {
      badge: '9-панельний тест слини · CE IVD',
      subtitle: 'Швидкий імунохроматографічний тест слини, який одночасно визначає 9 класів речовин — стимулятори, опіоїди, бензодіазепіни, MDMA та канабіс. Неінвазивний, без лабораторії.',
      backHome: 'На головну',
      panels: '9 панелей',
      cutoffNote: 'Порогові значення в нг/мл слини.',
      howToUse: 'Як використовувати',
      collectionNote: '⚠ Не їжте, не пийте, не жуйте гумку та не вживайте тютюнові вироби щонайменше 10 хвилин перед збором. Зберігайте при 15–30 °C до використання.',
      keyFacts: 'Ключові факти',
      limitations: 'Обмеження',
      videos: 'Відео',
      videoHowToUse: 'Як використовувати',
      videoAbout: 'Про продукт',
      ctaText: 'Незабаром у Німеччині та по всьому ЄС.',
      ctaBtn: 'Де купити →',
      steps: [
        { num: '01', title: 'Протріть ясна',       text: 'Зніміть кришку пристрою. Притисніть абсорбуючий кінчик до верхньої та нижньої щелепи. Активно протирайте ясна з обох боків рота 10–15 разів, щоб насичити колектор.' },
        { num: '02', title: 'Зберіть рідину',       text: 'Вставте абсорбуючий кінчик у пристрій і тримайте, доки слина не заповнить вікна тесту (~60 секунд). Вийміть колектор і запустіть таймер.' },
        { num: '03', title: 'Зчитайте за 3–10 хв', text: 'Покладіть на рівну поверхню. Зчитайте через 3 хвилини. Якщо всі смужки видно — результат готовий. Якщо якась смужка відсутня — зачекайте й повторіть через 10 хвилин. Не читайте після 15 хвилин.' },
        { num: '04', title: 'Інтерпретуйте',        text: 'Дві смужки (C + T) = НЕГАТИВНИЙ для цієї речовини. Лише одна смужка в C = ПОЗИТИВНИЙ. Немає смужки в C = НЕДІЙСНИЙ. Спиртова смужка (якщо є): зчитайте колір через 3–5 хвилин за таблицею.' },
      ],
      facts: [
        '9 речовинних панелей в одному тесті',
        'Результат за 3–10 хвилин',
        'Неінвазивний збір слини',
        'Включає індикатор алкоголю (поріг 0,02%)',
        'CE-маркування · IVD · Hangzhou AllTest Biotech',
        'Представник у ЄС: MedNet EC-REP GmbH, Мюнстер, Німеччина',
      ],
      limitationsList: [
        'Надає лише якісний попередній результат. Підтвердження методом GC/MS є кращим варіантом.',
        'Негативний результат не гарантує відсутності речовин — вони можуть бути нижче порогового рівня.',
        'Спиртова смужка чутлива до парів алкоголю в повітрі (дезінфектанти, парфуми). Проводьте тест подалі від таких середовищ.',
        'Для діагностики in vitro. Не призначений для юридичного або судово-медичного визначення вживання речовин.',
        'Не використовуйте після закінчення терміну придатності. Зберігайте в запечатаному пакеті при 2–30 °C. Не заморожуйте.',
      ],
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

    // ── FAQ page ──
    faq: {
      subtitle: 'Усе, що потрібно знати про тести J.Zeppelin і як ними користуватися.',
      groups: [
        {
          topic: 'Наші продукти',
          items: [
            {
              q: 'Які речовини виявляє ТЕСТ НАПОЇВ?',
              a: 'Тест напоїв виявляє GHB (гамма-гідроксимасляну кислоту), кетамін і флунітразепам (рогіпнол) — три найпоширеніші речовини, якими підмішують напої. Наклейте стікер на напій — він реагує за лічені секунди.',
            },
            {
              q: 'Для чого використовується МУЛЬТИ-ТЕСТ?',
              a: '9-панельний тест слини, який виявляє опіати, метамфетамін, бензодіазепіни, кокаїн, амфетамін, MDMA, бупренорфін, метадон і THC. Використовується для особистої безпеки та зменшення шкоди.',
            },
            {
              q: 'Чим відрізняється ТЕСТ НА АКТИВНИЙ THC?',
              a: 'Стандартні тести на THC виявляють метаболіт THC-COOH, який залишається в організмі днями або тижнями. Тест на активний THC виявляє сам Δ9-THC — активну речовину — тож дає позитивний результат лише під час фактичного впливу, а не після вживання тижні тому.',
            },
            {
              q: 'Тести одноразові?',
              a: 'Так — усі тести J.Zeppelin одноразові для точності та гігієни. Упаковка DRINK CHECK містить 6 тест-стікерів. Мульти-тест і тест на активний THC постачаються як окремі касети.',
            },
          ],
        },
        {
          topic: 'Використання та точність',
          items: [
            {
              q: 'Наскільки точні тести?',
              a: 'Наші тести відповідають стандартам швидких тестів з маркуванням CE, забезпечуючи точність понад 99% для цільових речовин у клінічно значущих концентраціях. Жоден швидкий тест не є 100% безпомилковим — якщо відчуваєте небезпеку, довіряйте інтуїції незалежно від результату.',
            },
            {
              q: 'Чи можна використовувати ТЕСТ НАПОЇВ на будь-якому напої?',
              a: 'Так — він працює з більшістю напоїв, включно з коктейлями, пивом і безалкогольними напоями. Напої з високим вмістом цукру або газовані можуть дещо впливати на чутливість. Для найкращого результату наносьте невелику краплю на стікер.',
            },
            {
              q: 'Як зчитати результат?',
              a: 'Тести слини: дві лінії = негативний, одна лінія (лише контрольна) = позитивний, жодної лінії = недійсний. Стікер DRINK CHECK: зміна кольору вказує на присутність речовини. Детальна інструкція є в кожній упаковці.',
            },
          ],
        },
        {
          topic: 'Легальність і доступність',
          items: [
            {
              q: 'Чи легальні тести в ЄС?',
              a: 'Так — наші тести продаються як засоби особистої безпеки і не класифікуються як рецептурні медичні пристрої. Вони відповідають вимогам маркування CE для in-vitro діагностичних пристроїв.',
            },
            {
              q: 'Де можна купити тести J.Zeppelin?',
              a: 'Ми запускаємо продажі в Німеччині та розширюємось по ЄС. Залиште свою електронну пошту на головній сторінці, щоб отримати повідомлення, коли тести стануть доступні у вашому регіоні або онлайн.',
            },
          ],
        },
        {
          topic: 'Спільнота',
          items: [
            {
              q: 'Чи перевіряються дані на Мапі інцидентів?',
              a: 'Ні — Мапа інцидентів повністю заповнюється спільнотою і є анонімною. J.Zeppelin не перевіряє повідомлення. Мапа існує для підвищення обізнаності, а не як наукове чи юридичне джерело даних.',
            },
          ],
        },
      ],
      contact: {
        heading: 'Ще маєте запитання?',
        lead: 'Запитайте нас про що завгодно. Ми відповідаємо протягом 1–2 робочих днів на',
        namePh: 'Ваше імʼя',
        emailPh: 'ваш@email.com',
        messagePh: 'Ваше запитання…',
        privacy: 'Ми ніколи не передаємо вашу електронну пошту.',
        sendBtn: 'Надіслати запитання',
        sending: 'Надсилання…',
        successHead: 'Повідомлення надіслано',
        successText: 'Дякуємо! Ми відповімо на вказану вами електронну пошту.',
        errGeneric: 'Щось пішло не так. Будь ласка, спробуйте ще раз.',
        footerPre: 'Віддаєте перевагу електронній пошті? Пишіть напряму на',
      },
    },

    // ── AI Analysis page ──
    aiAnalysis: {
      badge: 'Незабаром',
      headline: ['AI-аналіз', 'тестів'],
      subtitle: 'Завантажте фото свого тест-смужки J.Zeppelin — і наш ШІ миттєво скаже: позитивний чи негативний.',
      steps: [
        { step: '01', title: 'Сфотографуйте', text: 'Зробіть чітке фото тест-смужки після використання.' },
        { step: '02', title: 'Завантажте',    text: 'Завантажте фото тут — акаунт не потрібен.' },
        { step: '03', title: 'Результат',     text: 'ШІ прочитає лінії та видасть чіткий вердикт: позитивний / негативний.' },
      ],
      ctaPre: 'Хочете ранній доступ?',
      ctaLink: 'Залиште свою пошту',
      ctaPost: 'на головній сторінці.',
      uploader: {
        lockedLabel: 'Поки недоступно',
        drop: 'Перетягніть фото тесту сюди або натисніть, щоб завантажити',
        types: 'JPG, PNG до 10 МБ',
      },
    },

    // ── Footer ──
    footer: {
      tagline: 'Він перевіряє — щоб тобі не довелося.',
      explore: 'Навігація',
      legal: 'Документи',
      importer:
        'Імпортер у ЄС: UcanDrive GmbH, Mittelstraße 5 / 5A, 12529 Schönefeld, Німеччина',
      distributorHeading: 'Дистриб\u2019ютор в Україні',
      distributorLines: [
        'ТОВ «ЗАРОС УКРАЇНА»',
        'Юр. адреса: 08140, Київська обл., Бучанський р-н., с. Білогородка, вул. Компресорна, 3',
        'Код ЄДРПОУ 44255340',
        'ІПН 442553426564',
        'Тел. +38 (093) 777 07 97',
        'Директор Радченко М.А.',
      ],
      disclaimer: 'Споживчий продукт (non-IVD). Лише для особистого використання.',
      copyright: 'Усі права захищено.',
      navLinks: [
        { key: 'products', label: 'Продукти',         href: '/uk#products' },
        { key: 'why',      label: 'Чому J.Zeppelin',  href: '/uk#why' },
        { key: 'buy',      label: 'Де купити',        href: '/uk#buy' },
        { key: 'map',      label: 'Мапа інцидентів',  href: '/uk#map' },
        { key: 'faq',      label: 'FAQ',              href: '/uk/faq' },
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

  de: {
    // ── Navbar ──
    nav: {
      products: 'Produkte',
      why: 'Warum wir',
      buy: 'Kaufen',
      map: 'Karte',
      aiAnalysis: 'KI-Analyse ✦',
      faq: 'FAQ',
      productsItems: {
        drinkCheck: 'Getränke-Test',
        multiDrug:  'Multi-Drogen-Test',
        thcParent:  'Aktiv-THC-Test',
      },
    },

    // ── Hero ──
    hero: {
      headline: [['Deine', 'Nacht,'], ['Deine', 'Regeln']],
      subtitle:
        'K.-o.-Tropfen passieren. Schlechte Trips passieren. J.Zeppelin sorgt dafür, dass du es früh genug weißt — mit schnellen, diskreten Tests, die du überall einsetzen kannst.',
      cta: 'Unsere Tests',
    },

    // ── Products ──
    products: {
      heading: 'Unsere Tests',
      howToUse: 'Anwendung',
      details: 'Details',
      items: {
        drink: {
          name: 'GETRÄNKE-TEST',
          description:
            '6 Sticker-Tests für Getränke. Erkennt GHB, Ketamin und Flunitrazepam in Drinks.',
        },
        multi: {
          name: 'MULTI-DROGEN-TEST',
          description:
            '9-Panel-Speicheltest. Erkennt OPI, MET, BZO, COC, AMP, MDMA, BUP, MTD, THC.',
        },
        thc: {
          name: 'AKTIV-THC-TEST',
          description:
            'Speicheltest. Erkennt direkt Δ9-THC — die Wirksubstanz, nicht den Metaboliten.',
        },
      },
    },

    // ── Why ──
    why: {
      heading: 'WARUM J.ZEPPELIN',
      lead: 'Wir haben es bewusst einfach gemacht.',
      body1:
        'Ein Drogentest sollte weder Labor, Rezept noch Chemiestudium erfordern. J.Zeppelin-Tests sind für reale Situationen gemacht — Club, Hausparty, der Drink von einem Fremden. Klares Ergebnis in wenigen Minuten, ganz ohne Fachwissen.',
      body2:
        'Wir bewerten deine Nacht nicht. Wir sorgen nur dafür, dass du heil nach Hause kommst.',
      features: [
        { label: 'Schnell.',    text: 'Ergebnis in 5 Minuten.' },
        { label: 'Idiotensicher.', text: 'Keine Schulung nötig.' },
        { label: 'Diskret.',    text: 'Passt in die Tasche. Sieht nach nichts aus.' },
      ],
      disclaimer:
        '*Nicht für medizinische oder forensische Zwecke. Nur für die persönliche Sicherheit.',
    },

    // ── Where to buy ──
    buy: {
      heading: 'Wo kaufen',
      subheading: 'Bald in Deutschland und in ganz Europa.',
      emailPlaceholder: 'deine@email.de',
      submit: 'Benachrichtigen',
      thanks: 'Danke. Wir melden uns.',
    },

    // ── Incident map ──
    map: {
      heading: 'Vorfallskarte',
      subheading:
        'Von Nutzern gemeldete Substanzfunde in ganz Europa. Klicke auf eine Markierung für Details.',
      report: '+ Vorfall melden',
      submitted: 'Meldung gesendet. Danke, dass du die Community informierst.',
      note:
        'Alle Meldungen sind standardmäßig anonym. Daten werden von der Community eingereicht und sind nicht verifiziert.',
    },

    // ── THC Parent Test page ──
    thcParent: {
      badge: 'Speichel · Δ9-THC · Cut-off 50 ng/mL',
      subtitle: 'Erkennt das aktive Δ9-THC im Speichel — nicht den Metaboliten. Zeigt aktuellen Konsum, nicht Rückstände von vor Wochen.',
      backHome: 'Zur Startseite',
      whatMakesDifferent: 'Was ihn unterscheidet',
      detectionWindow: 'Nachweisfenster',
      howToUse: 'Anwendung',
      saturationNote: '⚠ Der Schwamm muss vollständig gesättigt sein. Zu wenig Speichel führt zu falschen oder ungültigen Ergebnissen.',
      keyFacts: 'Kernfakten',
      limitations: 'Einschränkungen',
      videos: 'Videos',
      videoHowToUse: 'Anwendung',
      videoAbout: 'Über das Produkt',
      ctaText: 'Bald in Deutschland und in ganz Europa verfügbar.',
      ctaBtn: 'Wo kaufen →',
      comparisons: [
        { label: 'Standard-THC-Test', detects: 'THC-COOH (Metabolit)',       window: 'Tage bis Wochen',   note: 'Zeigt vergangenen Konsum — nicht aktuelle Wirkung.', highlight: false },
        { label: 'Aktiv-THC-Test',    detects: 'Δ9-THC (Wirksubstanz)',      window: 'Bis ca. 14 Stunden', note: 'Spiegelt aktuellen Konsum, nicht alte Metaboliten.', highlight: true },
      ],
      steps: [
        { num: '01', title: 'Speichel entnehmen', text: 'Führe den Schwammkollektor in den Mund und wische mindestens 3 Minuten aktiv die Innenseite ab, bis der Schwamm vollständig gesättigt ist. Presse ihn zwischen Zunge und Zähnen. Am Ende dürfen keine harten Stellen mehr spürbar sein.' },
        { num: '02', title: 'Kammer befüllen',    text: 'Schraube die Sammelkammer auf. Presse den Schwamm gegen das Sieb, bis der Speichel bis zur Pfeilmarkierung steigt. Fest zuschrauben. Kollektor entsorgen.' },
        { num: '03', title: 'Auf Kassette geben', text: 'Schüttle die Kammer 10 Sekunden. Öffne die Spitze, drehe sie um und gib 3 Tropfen (~120 μL) in das Probenfeld (S) der Testkassette. Timer starten.' },
        { num: '04', title: 'Nach 5 Minuten ablesen', text: 'Zwei Linien (C + T) = NEGATIV. Nur eine Linie bei C = POSITIV — Δ9-THC über 50 ng/mL nachgewiesen. Keine C-Linie = UNGÜLTIG. Nach 15 Minuten nicht mehr ablesen.' },
      ],
      facts: [
        'Erkennt Δ9-THC (Wirksubstanz) — nicht den Metaboliten THC-COOH',
        'Cut-off: 50 ng/mL im Speichel',
        'Nachweisfenster: bis ca. 14 Stunden nach Konsum',
        'Ergebnis nach 5 Minuten ablesen — nach 15 Minuten ungültig',
        '96,4% Übereinstimmung mit GC/MS-Labormethode',
        'CE-gekennzeichnet · IVD · Hangzhou AllTest Biotech',
        'EC-Vertreter: MedNet EC-REP GmbH, Münster, Deutschland',
      ],
      limitationsList: [
        'Liefert nur ein qualitatives, vorläufiges Ergebnis. GC/MS ist die bevorzugte Bestätigungsmethode.',
        'Ein negatives Ergebnis garantiert keine drogenfreie Probe — eine Substanz kann unterhalb des Cut-offs von 50 ng/mL vorhanden sein.',
        'Für In-vitro-Diagnostik. Nicht für juristische oder forensische Feststellung von Drogenkonsum.',
        'Bei 2–30 °C lagern. Nicht einfrieren. Nach Ablaufdatum nicht verwenden.',
        'Gebrauchten Kollektor und Kassette gemäß lokalen Vorschriften entsorgen.',
      ],
    },

    // ── Multi-Drug Test page ──
    multiDrug: {
      badge: '9-Panel-Speicheltest · CE IVD',
      subtitle: 'Schneller Speichel-Immunoassay, der 9 Substanzklassen gleichzeitig prüft — Stimulanzien, Opioide, Benzodiazepine, MDMA und Cannabis. Nicht-invasiv, kein Labor nötig.',
      backHome: 'Zur Startseite',
      panels: '9 Panels',
      cutoffNote: 'Cut-off-Werte in ng/mL Speichel.',
      howToUse: 'Anwendung',
      collectionNote: '⚠ Vor der Probenentnahme mindestens 10 Minuten nichts essen, trinken, Kaugummi kauen oder Tabak konsumieren. Vor Gebrauch bei 15–30 °C lagern.',
      keyFacts: 'Kernfakten',
      limitations: 'Einschränkungen',
      videos: 'Videos',
      videoHowToUse: 'Anwendung',
      videoAbout: 'Über das Produkt',
      ctaText: 'Bald in Deutschland und in ganz Europa verfügbar.',
      ctaBtn: 'Wo kaufen →',
      steps: [
        { num: '01', title: 'Zahnfleisch abstreichen',    text: 'Kappe entfernen. Den saugfähigen Kopf an Ober- und Unterkiefer halten. Aktiv an beiden Seiten des Mundes 10–15 Mal über das Zahnfleisch streichen, bis der Kollektor gesättigt ist.' },
        { num: '02', title: 'Speichel sammeln',          text: 'Den saugfähigen Kopf in das Gerät einführen und halten, bis Speichel in die Testfenster fließt (~60 Sekunden). Kollektor entnehmen, Timer starten.' },
        { num: '03', title: 'Nach 3–10 Min. ablesen',     text: 'Auf eine ebene Fläche legen. Nach 3 Minuten ablesen. Sind alle Linien sichtbar → Ergebnis ist bereit. Fehlt eine Linie nach 3 Min → nach 10 Min erneut ablesen. Nach 15 Minuten nicht mehr ablesen.' },
        { num: '04', title: 'Ergebnis interpretieren',    text: 'Zwei Linien (C + T) = NEGATIV für diese Substanz. Nur C = POSITIV. Keine C-Linie = UNGÜLTIG. Alkohol-Streifen (falls vorhanden): Farbe nach 3–5 Minuten mit der Tabelle vergleichen.' },
      ],
      facts: [
        '9 Substanz-Panels in einem Test',
        'Ergebnis in 3–10 Minuten',
        'Nicht-invasive Speichelprobe',
        'Inklusive Alkohol-Streifen (0,02% Cut-off)',
        'CE-gekennzeichnet · IVD · Hangzhou AllTest Biotech',
        'EC-Vertreter: MedNet EC-REP GmbH, Münster, Deutschland',
      ],
      limitationsList: [
        'Liefert nur ein qualitatives, vorläufiges Ergebnis. GC/MS ist die bevorzugte Bestätigungsmethode.',
        'Ein negatives Ergebnis garantiert keine drogenfreie Probe — eine Substanz kann unterhalb des Cut-offs vorhanden sein.',
        'Der Alkohol-Streifen reagiert sehr empfindlich auf Alkoholdämpfe in der Luft (z. B. Desinfektionsmittel, Parfüm). Fernab solcher Umgebungen testen.',
        'Für In-vitro-Diagnostik. Nicht für juristische oder forensische Feststellung von Drogenkonsum.',
        'Nach Ablaufdatum nicht verwenden. Im versiegelten Beutel bei 2–30 °C lagern. Nicht einfrieren.',
      ],
    },

    // ── Drink Check Test page ──
    drinkCheck: {
      badge: '6 Sticker-Tests pro Packung',
      subtitle: 'Ein diskreter Getränke-Sticker-Test, der die drei häufigsten K.-o.-Substanzen in 1–3 Minuten erkennt — ohne deinen Drink zu verändern.',
      backHome: 'Zur Startseite',
      whatItDetects: 'Was erkannt wird',
      howToUse: 'Anwendung',
      keyFacts: 'Kernfakten',
      limitations: 'Einschränkungen',
      videos: 'Videos',
      videoHowToUse: 'Anwendung',
      videoAbout: 'Über das Produkt',
      ctaText: 'Bald in Deutschland und in ganz Europa verfügbar.',
      ctaBtn: 'Wo kaufen →',
      substances: [
        { name: 'GHB', full: 'Gamma-Hydroxybuttersäure', result: 'Punkt wird BLAU',       note: 'Farb- und geruchlos. Eine der häufigsten K.-o.-Substanzen.' },
        { name: 'KET', full: 'Ketamin-Hydrochlorid',      result: 'Punkt wird BLAU',       note: 'Dissoziatives Anästhetikum. In Pulver- oder flüssiger Form.' },
        { name: 'FLZ', full: 'Flunitrazepam / Rohypnol',  result: 'Punkt wird ROT-LILA',   note: 'Starkes Benzodiazepin. Verursacht Gedächtnisverlust und Sedierung.' },
      ],
      steps: [
        { num: '01', title: 'Aufkleben',         text: 'Trägerpapier entfernen und den Sticker auf die Rückseite deines Handys oder eine glatte Fläche kleben.' },
        { num: '02', title: 'Tropfen auftragen', text: 'Einen einzelnen Tropfen deines Drinks auf das Testfeld geben — er sollte alle 3 Testpunkte bedecken.' },
        { num: '03', title: '1–3 Min. warten',   text: 'Warte, bis die Testpunkte vollständig getrocknet sind. Das dauert 1 bis 3 Minuten.' },
        { num: '04', title: 'Ergebnis ablesen',  text: 'GHB- oder KET-Punkt wird blau → positiv. FLZ-Punkt wird rot-lila → positiv. NICHT TRINKEN, falls sich ein Punkt verfärbt.' },
      ],
      facts: [
        'Einmalsticker — diskret und handtaschentauglich',
        'Ergebnis in 1–3 Minuten',
        'Funktioniert in Cocktails, Bier, Wein und alkoholfreien Drinks',
        '6 Tests pro Packung',
        'Keine Laborausrüstung nötig',
        'Anonyme Nutzung — keine App, kein Konto',
      ],
      limitationsList: [
        'Nicht geeignet für Milchprodukte, cremige oder ölige Getränke.',
        'Blaue oder rot-lila gefärbte Getränke können ein falsch-positives Ergebnis verursachen.',
        'Verdächtigen Drink sofort wegschütten — nicht probieren.',
        'Nur zur persönlichen Orientierung. Ein positives Ergebnis ist nie alleinige Grundlage für den Nachweis illegaler Substanzen.',
        'Dies ist ein Hilfsmittel für die persönliche Sicherheit, kein zertifiziertes Diagnostikgerät. Bei Unwohlsein — sofort Hilfe holen, unabhängig vom Testergebnis.',
      ],
    },

    // ── FAQ page ──
    faq: {
      subtitle: 'Alles, was du über J.Zeppelin-Tests und ihre Anwendung wissen musst.',
      groups: [
        {
          topic: 'Unsere Produkte',
          items: [
            {
              q: 'Welche Substanzen erkennt der GETRÄNKE-TEST?',
              a: 'Der GETRÄNKE-TEST erkennt GHB (Gamma-Hydroxybuttersäure), Ketamin und Flunitrazepam (Rohypnol) — die drei am häufigsten für K.-o.-Tropfen verwendeten Substanzen. Sticker am Drink anbringen, er reagiert binnen Sekunden.',
            },
            {
              q: 'Wofür wird der MULTI-DROGEN-TEST verwendet?',
              a: 'Ein 9-Panel-Speicheltest, der auf Opiate, Methamphetamin, Benzodiazepine, Kokain, Amphetamin, MDMA, Buprenorphin, Methadon und THC prüft. Für persönliche Sicherheit und Harm Reduction.',
            },
            {
              q: 'Was macht den AKTIV-THC-TEST besonders?',
              a: 'Standard-THC-Tests erkennen den Metaboliten THC-COOH, der Tage bis Wochen im Körper bleibt. Der Aktiv-THC-Test erkennt Δ9-THC selbst — die Wirksubstanz — er zeigt also nur während aktiver Wirkung positiv, nicht bei Rückständen früherer Nutzung.',
            },
            {
              q: 'Sind die Tests Einwegprodukte?',
              a: 'Ja — alle J.Zeppelin-Tests sind Einwegprodukte für Genauigkeit und Hygiene. Die GETRÄNKE-TEST-Packung enthält 6 Sticker-Tests. MULTI-DROGEN-TEST und AKTIV-THC-TEST gibt es als einzelne Kassetten.',
            },
          ],
        },
        {
          topic: 'Anwendung & Genauigkeit',
          items: [
            {
              q: 'Wie genau sind die Tests?',
              a: 'Unsere Tests entsprechen CE-geprüften Schnelltest-Standards mit >99% Genauigkeit für Zielsubstanzen bei klinisch relevanten Konzentrationen. Kein Schnelltest ist zu 100% unfehlbar — wenn du dich unsicher fühlst, vertraue deinem Bauchgefühl, unabhängig vom Ergebnis.',
            },
            {
              q: 'Kann ich den GETRÄNKE-TEST mit jedem Getränk verwenden?',
              a: 'Ja — er funktioniert mit den meisten Getränken, inklusive Cocktails, Bier und alkoholfreien Drinks. Stark zuckerhaltige oder kohlensäurehaltige Getränke können die Empfindlichkeit leicht beeinflussen. Für beste Ergebnisse eine kleine Probe auf den Sticker geben.',
            },
            {
              q: 'Wie lese ich das Ergebnis ab?',
              a: 'Speicheltests: zwei Linien = negativ, eine Linie (nur Kontrolle) = positiv, keine Linie = ungültig. GETRÄNKE-TEST-Sticker: Farbveränderung zeigt eine Substanz an. Detaillierte Anleitung liegt jeder Packung bei.',
            },
          ],
        },
        {
          topic: 'Rechtliches & Verfügbarkeit',
          items: [
            {
              q: 'Sind die Tests in der EU legal?',
              a: 'Ja — unsere Tests werden als Hilfsmittel für die persönliche Sicherheit verkauft und gelten nicht als verschreibungspflichtige Medizinprodukte. Sie erfüllen die Anforderungen der CE-Kennzeichnung für In-vitro-Diagnostika.',
            },
            {
              q: 'Wo kann ich J.Zeppelin-Tests kaufen?',
              a: 'Wir starten gerade in Deutschland und expandieren europaweit. Hinterlasse deine E-Mail auf der Startseite, um benachrichtigt zu werden, sobald Tests in deiner Region oder online verfügbar sind.',
            },
          ],
        },
        {
          topic: 'Community',
          items: [
            {
              q: 'Sind die Daten der Vorfallskarte verifiziert?',
              a: 'Nein — die Vorfallskarte wird ausschließlich von der Community eingereicht und ist anonym. Meldungen werden von J.Zeppelin nicht verifiziert. Die Karte dient der Aufklärung, nicht als wissenschaftliche oder juristische Datenquelle.',
            },
          ],
        },
      ],
      contact: {
        heading: 'Noch Fragen?',
        lead: 'Frag uns alles. Wir antworten innerhalb von 1–2 Werktagen unter',
        namePh: 'Dein Name',
        emailPh: 'deine@email.de',
        messagePh: 'Deine Frage…',
        privacy: 'Wir geben deine E-Mail niemals weiter.',
        sendBtn: 'Frage senden',
        sending: 'Wird gesendet…',
        successHead: 'Nachricht gesendet',
        successText: 'Danke! Wir melden uns an die angegebene E-Mail-Adresse.',
        errGeneric: 'Etwas ist schiefgelaufen. Bitte versuche es erneut.',
        footerPre: 'Lieber per E-Mail? Schreib direkt an',
      },
    },

    // ── AI Analysis page ──
    aiAnalysis: {
      badge: 'Bald verfügbar',
      headline: ['KI-Test', 'Analyse'],
      subtitle: 'Lade ein Foto deines J.Zeppelin-Teststreifens hoch und unsere KI sagt dir sofort: positiv oder negativ.',
      steps: [
        { step: '01', title: 'Fotografieren', text: 'Mach ein klares Foto deines Teststreifens nach der Anwendung.' },
        { step: '02', title: 'Hochladen',     text: 'Lade es hier hoch — kein Konto nötig.' },
        { step: '03', title: 'Ergebnis',      text: 'Die KI liest die Linien und liefert ein klares Positiv-/Negativ-Urteil.' },
      ],
      ctaPre: 'Early Access gewünscht?',
      ctaLink: 'Hinterlasse deine E-Mail',
      ctaPost: 'auf der Startseite.',
      uploader: {
        lockedLabel: 'Noch nicht verfügbar',
        drop: 'Testfoto hier ablegen oder klicken zum Hochladen',
        types: 'JPG, PNG bis 10 MB',
      },
    },

    // ── Footer ──
    footer: {
      tagline: 'Er prüft, damit du es nicht musst.',
      explore: 'Navigation',
      legal: 'Rechtliches',
      importer: 'EU-Importeur: UcanDrive GmbH, Mittelstraße 5 / 5A, 12529 Schönefeld, Deutschland',
      disclaimer: 'Non-IVD-Verbraucherprodukt. Nur zum privaten Gebrauch.',
      copyright: 'Alle Rechte vorbehalten.',
      navLinks: [
        { key: 'products', label: 'Produkte',     href: '/de#products' },
        { key: 'why',      label: 'Warum J.Zeppelin', href: '/de#why' },
        { key: 'buy',      label: 'Wo kaufen',    href: '/de#buy' },
        { key: 'map',      label: 'Vorfallskarte', href: '/de#map' },
        { key: 'faq',      label: 'FAQ',          href: '/de/faq' },
      ],
      legalLinks: [
        { key: 'privacy',       label: 'Datenschutz',       href: '/privacy' },
        { key: 'cookies',       label: 'Cookie-Richtlinie', href: '/cookies' },
        { key: 'terms',         label: 'Nutzungsbedingungen', href: '/terms' },
        { key: 'withdrawal',    label: 'Widerrufsrecht',    href: '/withdrawal' },
        { key: 'accessibility', label: 'Barrierefreiheit',  href: '/accessibility' },
        { key: 'imprint',       label: 'Impressum',         href: '/imprint' },
      ],
    },
  },
};

export const DEFAULT_LOCALE = 'en';
export const SUPPORTED_LOCALES = ['en', 'uk', 'de'];
