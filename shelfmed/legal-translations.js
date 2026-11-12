// Official ShelfMed Multilingual Legal Translations (9 Languages: EN, AF, ZU, SW, ES, FR, DE, PT, NL)
// Covers POPIA (South Africa), EU/UK GDPR, CCPA/CPRA, COPPA, LGPD, and Google Play Health & Trader Policies (v1.1.4)

window.SHELFMED_PRIVACY_I18N = {
  en: {
    title: 'Privacy Policy for <span class="text-gradient">ShelfMed</span>',
    subtitle: 'Controller: REEDERDEVELOPMENTS (PTY) LTD • App: <code class="text-cyan-300">com.reederdevelopments.shelfmed</code> • POPIA / GDPR / CCPA / Google Play Compliant',
    effective: 'Effective & Updated: November 12, 2026 (v1.1.4)',
    backBtn: 'Back to ShelfMed',
    guideLink: '10 Problems Guide',
    tosLink: 'Terms of Service',
    contactHeading: 'Data Protection & Information Officer Contact',
    contactDesc: 'For any privacy inquiries, POPIA (South Africa), EU/UK GDPR, CCPA/CPRA, or LGPD data subject requests, contact our Information Officer:',
    sections: [
      {
        h: 'Introduction, Data Controller Identity & Regulatory Scope',
        b: '<p><strong>REEDERDEVELOPMENTS (PTY) LTD</strong> trading as <strong>ReederDevelopments</strong> ("we", "us", "our", or "Responsible Party / Data Controller"), domiciled in Somerset West, Western Cape, Republic of South Africa, respects your fundamental right to medical and personal privacy. We engineered <strong>ShelfMed: Medicine Tracker</strong> (Android package: <code>com.reederdevelopments.shelfmed</code>, version 1.1.4 and subsequent releases) using a strict <strong>Zero-Cloud, Local-First Privacy Architecture</strong>.</p><p>This Privacy Policy complies with the South African Protection of Personal Information Act, 2013 (<strong>POPIA</strong>), the European Union and United Kingdom General Data Protection Regulation (<strong>GDPR / UK GDPR</strong>), the California Consumer Privacy Act / California Privacy Rights Act (<strong>CCPA / CPRA</strong>), Brazil\'s <strong>LGPD</strong>, the Children\'s Online Privacy Protection Act (<strong>COPPA</strong>), and the <strong>Google Play Developer Program Policies</strong> (including Health Apps &amp; User Data policies).</p>'
      },
      {
        h: 'Zero-Cloud Medical Architecture & Local-First Data Storage',
        b: '<p>ShelfMed operates <strong>without central cloud servers, mandatory user accounts, or remote databases</strong> storing your personal or household health records.</p><ul class="list-disc list-inside space-y-1.5 text-slate-300"><li><strong>100% On-Device Encrypted SQLite Database:</strong> All family profiles, medicine cabinet inventories, batch/lot numbers, expiry dates, "Once Opened" (PAO) liquid shelf-life dates, scheduled reminders, symptom/temperature logs, and dosage administration records are stored exclusively on your physical Android device in an isolated, encrypted local SQLite database.</li><li><strong>Zero Access or Sale of Health Data:</strong> ReederDevelopments cannot view, access, harvest, profile, monetize, or sell your medical cabinet records, prescriptions, or family health history under any circumstances.</li></ul>'
      },
      {
        h: 'Categories of Information Processed Strictly On-Device',
        b: '<p>When you use ShelfMed, the following information is processed and stored <strong>solely on your local device</strong>:</p><ul class="list-disc list-inside space-y-1.5 text-slate-300"><li><strong>Household &amp; Family Profiles:</strong> Names/nicknames, age groups, optional weight/allergies entered by you for pediatric or adult dosage tracking, and local Parent PIN cryptographic hashes.</li><li><strong>Medication Inventory &amp; Logs:</strong> Medication names, active ingredients, SAHPRA/international schedule classifications (S0–S6), stock quantities, expiry dates, batch numbers, fractional doses, and timestamped consumption logs.</li><li><strong>Doctor Visit Exports:</strong> PDF and CSV reports are generated locally on your device and shared only when you explicitly invoke the Android system share sheet.</li></ul>'
      },
      {
        h: 'On-Device AI OCR, Camera & Barcode Scanning (Google ML Kit)',
        b: '<p>ShelfMed uses your device camera to scan medication boxes, pharmacy labels, GS1 DataMatrix codes, EAN/UPC barcodes, and Household Sync QR codes.</p><ul class="list-disc list-inside space-y-1.5 text-slate-300"><li><strong>100% On-Device Processing:</strong> Optical Character Recognition (OCR) and barcode decoding are performed locally in your device\'s RAM using on-device <strong>Google ML Kit</strong> models and our interactive manual cropper.</li><li><strong>No Image Uploads:</strong> Camera frames and cropped label photos are never uploaded to ReederDevelopments or external cloud AI training servers.</li></ul>'
      },
      {
        h: 'Household Device-to-Device Synchronization & End-to-End Encryption (AES-256)',
        b: '<p>ShelfMed allows optional peer-to-peer synchronization between trusted household devices without storing health data in the cloud:</p><ul class="list-disc list-inside space-y-1.5 text-slate-300"><li><strong>Local Wi-Fi Sync (mDNS / Bonjour):</strong> Devices on the same local Wi-Fi network discover and communicate directly peer-to-peer on your local network.</li><li><strong>Zero-Knowledge Encrypted Relay:</strong> When paired household devices are on separate networks (e.g., mobile data), sync packets pass through an ephemeral WebSockets routing relay. All payloads are <strong>End-to-End Encrypted (E2EE) on your device using AES-256 encryption</strong> derived from your private QR pairing key prior to transmission. Neither the relay nor ReederDevelopments possesses your decryption key or can inspect the payload.</li></ul>'
      },
      {
        h: 'Third-Party Services, Advertising (Google AdMob) & Public Clinical APIs',
        b: '<p>ShelfMed integrates strictly limited third-party components to deliver core functionality and support free distribution:</p><ul class="list-disc list-inside space-y-1.5 text-slate-300"><li><strong>Google AdMob &amp; User Messaging Platform (UMP / IAB TCF v2.2):</strong> Free versions of ShelfMed display advertisements via Google AdMob. Subject to your regional consent choices (managed via Google\'s certified UMP consent dialog in EEA/UK/compatible regions), AdMob may collect your Android Advertising ID (AAID), coarse IP-based location, and ad interaction diagnostics to serve personalized or non-personalized ads and prevent fraud. Your local medical cabinet data is <strong>never</strong> shared with AdMob. Review <a href="https://policies.google.com/technologies/partner-sites" target="_blank" rel="noopener" class="text-cyan-400 underline">Google\'s Privacy &amp; Terms</a>.</li><li><strong>OpenFDA, RxNorm &amp; DailyMed Public Clinical APIs:</strong> When you search for an international medication not found in the embedded offline catalog, the App queries the public U.S. FDA (OpenFDA) / NIH RxNorm endpoints. Only the searched medication string and standard HTTP request headers (IP address) are transmitted to return clinical label metadata.</li></ul>'
      },
      {
        h: 'Android Device Permissions & Legal Basis for Processing',
        b: '<p>Under GDPR Art. 6(1)(a)/(b) and POPIA Section 11, ShelfMed requests only the minimum necessary Android permissions:</p><ul class="list-disc list-inside space-y-1.5 text-slate-300"><li><strong>Camera (<code>android.permission.CAMERA</code>):</strong> Optional; triggered only when you scan a medicine box, barcode, or sync QR code.</li><li><strong>Exact Alarms &amp; Notifications (<code>POST_NOTIFICATIONS</code>, <code>SCHEDULE_EXACT_ALARM</code>):</strong> Used to deliver time-critical medication dosage and expiry reminders locally on your device.</li><li><strong>Network &amp; Local Wi-Fi State (<code>INTERNET</code>, <code>ACCESS_WIFI_STATE</code>, <code>CHANGE_WIFI_MULTICAST_STATE</code>):</strong> Used for local mDNS family discovery, encrypted relay routing, OpenFDA lookups, and AdMob ad delivery.</li></ul>'
      },
      {
        h: 'Children\'s Privacy & Pediatric Profiles (COPPA, GDPR-K & POPIA Sec. 34–35)',
        b: '<p>ShelfMed is designed for use by adults, parents, and guardians managing household medications. We do not knowingly collect, transmit, or store personal information from children under the age of 13 (or 16/18 where applicable by law) on any external server. Any child or infant profiles created by a parent or guardian inside ShelfMed (such as weight-based Panado/Calpol dosage logs) remain 100% locally stored on the parent\'s device and can be locked behind the built-in <strong>Parent PIN</strong>.</p>'
      },
      {
        h: 'Your Statutory Privacy Rights (POPIA, GDPR, UK GDPR, CCPA/CPRA & LGPD)',
        b: '<p>Depending on your jurisdiction, you have statutory rights including:</p><ul class="list-disc list-inside space-y-1.5 text-slate-300"><li><strong>Right of Access &amp; Data Portability:</strong> View all your records directly in the App and export them anytime in machine-readable CSV or formatted PDF via the Doctor Visit Export tool.</li><li><strong>Right to Rectification &amp; Erasure ("Right to be Forgotten"):</strong> Edit or delete any profile, medicine item, or dosage log directly inside the App at any time.</li><li><strong>Right to Opt-Out of Targeted Advertising / Consent Withdrawal:</strong> Reset or delete your Android Advertising ID in <em>Android Settings &rarr; Google &rarr; Ads</em>, or update your AdMob consent preferences in the App settings.</li><li><strong>Right to Lodge a Complaint:</strong> South African residents may contact the <em>Information Regulator (South Africa)</em> at <code>inforeg@justice.gov.za</code>; EEA/UK residents may contact their local Data Protection Authority.</li></ul>'
      },
      {
        h: 'Data Retention, Security Safeguards & Instant Deletion',
        b: '<p>Because all personal and medical records reside exclusively on your device, your data is retained only for as long as you keep it on your phone. You can instantaneously and permanently destroy all stored data at any time by:</p><ol class="list-decimal list-inside space-y-1 text-slate-200"><li>Using the in-app Delete / Reset options;</li><li>Navigating to <strong>Android Settings &rarr; Apps &rarr; ShelfMed &rarr; Storage &rarr; Clear Data</strong>; or</li><li>Uninstalling ShelfMed from your device.</li></ol>'
      },
      {
        h: 'Changes to This Privacy Policy & Version Governance',
        b: '<p>We may update this Privacy Policy periodically to reflect new application features or regulatory requirements. Material updates will be published at <code>https://reederdevelopments.co.za/shelfmed/privacy.html</code> with an updated effective date and revision version.</p>'
      }
    ]
  },
  af: {
    title: 'Privaatheidsbeleid vir <span class="text-gradient">ShelfMed</span>',
    subtitle: 'Verantwoordelike Party: REEDERDEVELOPMENTS (EDMS) BPK • Pakket: <code class="text-cyan-300">com.reederdevelopments.shelfmed</code> • POPIA / GDPR / CCPA Voldoenend',
    effective: 'Effektiewe Datum: 12 November 2026 (v1.1.4)',
    backBtn: 'Terug na ShelfMed',
    guideLink: '10 Probleme Gids',
    tosLink: 'Diensvoorwaardes',
    contactHeading: 'Inligtingsbeampte & Regskontak (POPIA / GDPR)',
    contactDesc: 'Vir enige privaatheidsnavrae of POPIA / GDPR versoeke, kontak ons Inligtingsbeampte:',
    sections: [
      {
        h: 'Inleiding, Identiteit van Verantwoordelike Party & Omvang',
        b: '<p><strong>REEDERDEVELOPMENTS (EDMS) BPK</strong> wat handeldryf as <strong>ReederDevelopments</strong> ("ons", gevestig in Somerset-Wes, Wes-Kaap, Suid-Afrika) respekteer jou fundamentele reg op mediese privaatheid. <strong>ShelfMed: Medicine Tracker</strong> (<code>com.reederdevelopments.shelfmed</code>, v1.1.4+) is gebou met \'n streng <strong>Geen-Wolk, Plaaslik-Eerste Privaatheidsargitektuur</strong> ter volle nakoming van die Suid-Afrikaanse Wet op die Beskerming van Persoonlike Inligting (<strong>POPIA</strong>), die Europese/VK <strong>GDPR</strong>, <strong>CCPA/CPRA</strong>, <strong>COPPA</strong> en <strong>Google Play</strong> se Gesondheidsbeleide.</p>'
      },
      {
        h: 'Geen-Wolk Mediese Argitektuur & Plaaslike Berging',
        b: '<p>ShelfMed werk <strong>sonder sentrale wolkbedieners, gebruikersrekeninge of afstanddatabasisse</strong> wat jou mediese rekords stoor.</p><ul class="list-disc list-inside space-y-1.5"><li><strong>100% Op-Toestel Geënkripteerde SQLite-databasis:</strong> Alle gesinsprofiele, medisynekasvoorraad, vervaldatums, "Sodra Oopgemaak" (PAO) datums en dosislogboeke bly uitsluitlik op jou fisiese Android-toestel.</li><li><strong>Geen Toegang of Verkoop van Mediese Data:</strong> ReederDevelopments kan nooit jou medisynekasdata sien, lees of verkoop nie.</li></ul>'
      },
      {
        h: 'Kategorieë Data Wat Uitsluitlik Op Jou Toestel Verwerk Word',
        b: '<p>Alle gesinsprofiele, gewig/ouderdom-notas, medisynevoorraad (SAHPRA S0–S6 skedules), lotnommers, vervaldatums, ouer-PIN-slotte en Doktersbesoek PDF/CSV-uitvoere word 100% plaaslik op jou toestel geskep en gestoor.</p>'
      },
      {
        h: 'Op-Toestel KI-OCR, Kamera & Strepiekodeskandering (Google ML Kit)',
        b: '<p>Wanneer jy \'n medisyneboks, strepiekode of QR-kode skandeer, verwerk <strong>Google ML Kit</strong> die kamerabeeld uitsluitlik in die plaaslike geheue (RAM) van jou toestel. Geen foto\'s van jou medisyne-etikette word ooit na enige wolkbediener opgelaai nie.</p>'
      },
      {
        h: 'Toestel-tot-Toestel Gesinsinchronisasie & AES-256 Enkripsie',
        b: '<p>Gesinstoestelle op dieselfde Wi-Fi-netwerk sinkroniseer direk (mDNS/Bonjour). Oor sellulêre netwerke word pakkies deur \'n tydelike WebSockets-aflos gestuur wat <strong>op jou toestel met AES-256 end-tot-end geënkripteer (E2EE)</strong> word voordat dit jou foon verlaat. Niemand behalwe jou gekoppelde gesinstoestelle kan die data ontsyfer nie.</p>'
      },
      {
        h: 'Derdeparty-dienste: Google AdMob & OpenFDA Kliniese API',
        b: '<p><strong>Google AdMob:</strong> Vertoon advertensies in die gratis toepassing (onderhewig aan toestemming via Google UMP / IAB TCF v2.2) en mag toestel-advertensie-ID\'s gebruik. Jou mediese data word nooit met AdMob gedeel nie.<br><strong>OpenFDA / RxNorm API:</strong> Wanneer jy na \'n internasionale medisyne soek, word slegs die medisyne-soekterm na die publieke OpenFDA API gestuur.</p>'
      },
      {
        h: 'Toestemmings op Android & Regsgrondslag',
        b: '<p><strong>Kamera:</strong> Vir etiket-OCR, strepiekodes en QR-sinkronisasie.<br><strong>Kennisgewings &amp; Eksakte Alarms:</strong> Om geskeduleerde medisyne- en vervaldatum-herinneringe stiptelik te lewer.<br><strong>Plaaslike Netwerk / Wi-Fi:</strong> Vir plaaslike gesinsinchronisasie en API-opsoeke.</p>'
      },
      {
        h: 'Kinderprivaatheid (POPIA Art. 34–35, COPPA & GDPR-K)',
        b: '<p>ShelfMed versamel geen persoonlike inligting van kinders op enige bediener nie. Kinderprofiele wat deur ouers/voogde geskep word vir koors- en dosisopsporing word uitsluitlik plaaslik op die ouer se foon gestoor en deur die Ouer-PIN beskerm.</p>'
      },
      {
        h: 'Jou Statutêre Regte (POPIA, GDPR & CCPA)',
        b: '<p>Jy het volle reg op toegang, regstelling, dataportabiliteit (via CSV/PDF-uitvoer), uitwissing en onttrekking van advertensietoestemming via jou Android-instellings. Suid-Afrikaanse inwoners kan ook die Inligtingsreguleerder (<code>inforeg@justice.gov.za</code>) kontak.</p>'
      },
      {
        h: 'Databehoud, Sekuriteit & Onmiddellike Uitwissing',
        b: '<p>Omdat alle rekords op jou toestel woon, kan jy alle data enige tyd onmiddellik en permanent uitvee deur: (1) Toepassingdata in Android-instellings skoon te maak, of (2) ShelfMed te deïnstalleer.</p>'
      },
      {
        h: 'Wysigings aan Hierdie Privaatheidsbeleid',
        b: '<p>Enige opdaterings sal op <code>https://reederdevelopments.co.za/shelfmed/privacy.html</code> gepubliseer word met \'n opgedateerde effektiewe datum.</p>'
      }
    ]
  },
  zu: {
    title: 'Inqubomgomo Yobumfihlo ye-<span class="text-gradient">ShelfMed</span>',
    subtitle: 'Umlawuli Wedatha: REEDERDEVELOPMENTS (PTY) LTD • Uhlelo: <code class="text-cyan-300">com.reederdevelopments.shelfmed</code> • Ihambisana ne-POPIA / GDPR / Google Play',
    effective: 'Usuku Lokusebenza: 12 Novemba 2026 (v1.1.4)',
    backBtn: 'Buyela ku-ShelfMed',
    guideLink: 'Umhlahlandlela Wezinkinga eziyi-10',
    tosLink: 'Imigomo Yesevisi',
    contactHeading: 'Imininingwane Yesikhungo Sokuvikelwa Kwemininingwane (POPIA)',
    contactDesc: 'Uma unemibuzo mayelana nobumfihlo noma amalungelo akho ngaphansi kwe-POPIA / GDPR, xhumana nathi:',
    sections: [
      {
        h: 'Isingeniso kanye Nokuhambisana Nomthetho (POPIA & GDPR)',
        b: '<p>I-<strong>REEDERDEVELOPMENTS (PTY) LTD</strong> ("ReederDevelopments", ezinze e-Somerset West, eNingizimu Afrika) iyalihlonipha ilungelo lakho lobumfihlo bezempilo. Uhlelo lwe-<strong>ShelfMed: Medicine Tracker</strong> (<code>com.reederdevelopments.shelfmed</code>, v1.1.4+) lwakhiwe ngesakhiwo esiqinile se-<strong>Zero-Cloud, Local-First</strong> ngokuhambisana nomthetho waseNingizimu Afrika i-<strong>POPIA</strong>, i-<strong>GDPR</strong>, i-<strong>CCPA</strong> kanye nemigomo ye-<strong>Google Play</strong>.</p>'
      },
      {
        h: 'Ukugcinwa Kwemininingwane Yezempilo Kudivayisi Yakho Kuphela (Zero-Cloud)',
        b: '<p>I-ShelfMed ayinawo amaseva amafu agcina imininingwane yakho yezempilo. Yonke imininingwane yomndeni, ikhabhinethi yemithi, izinsuku zokuphelelwa yisikhathi kanye namarekhodi emithamo kugcinwa kuphela kudivayisi yakho ye-Android kusizindalwazi esibethelwe se-SQLite. Asikwazi ukubona, ukufinyelela noma ukuthengisa imininingwane yakho yezempilo.</p>'
      },
      {
        h: 'Imininingwane Ecubungulwa Kudivayisi Yakho',
        b: '<p>Amaphrofayela amalungu omndeni, amagama emithi (SAHPRA S0–S6), izinombolo ze-batch, izinsuku zokuphelelwa yisikhathi, i-PIN yomzali kanye nemibiko ye-PDF/CSV kadokotela kuhlala kuphela ocingweni lwakho.</p>'
      },
      {
        h: 'Ukuskena kwe-AI OCR kanye Nekhamera (Google ML Kit)',
        b: '<p>Ukuskena amabhokisi emithi namabhakhodi kwenziwa ngaphakathi kudivayisi yakho kusetshenziswa i-<strong>Google ML Kit</strong>. Izithombe zekhamera azithunyelwa kumaseva angaphandle.</p>'
      },
      {
        h: 'Ukuvumelanisa Komndeni Nokubethela kwe-AES-256 (E2EE)',
        b: '<p>Amadivayisi omndeni axhumana ngqo nge-Wi-Fi noma ngesiteshi esibethelwe nge-<strong>AES-256 End-to-End Encryption</strong>. Akekho umuntu wangaphandle ongakwazi ukufunda idatha yakho.</p>'
      },
      {
        h: 'Izinsizakalo Zezinkampani Zangaphandle (Google AdMob & OpenFDA)',
        b: '<p><strong>Google AdMob:</strong> Ibonisa izikhangiso ngokuhambisana nemvume yakho (Google UMP). Idatha yakho yemithi ayinikezwa i-AdMob.<br><strong>OpenFDA API:</strong> Isetshenziselwa ukusesha imininingwane yemithi yomhlaba wonke.</p>'
      },
      {
        h: 'Izimvume Zedivayisi Ye-Android',
        b: '<p><strong>Ikhamera:</strong> Ukuskena amalebula emithi kanye nama-QR code.<br><strong>Izaziso nama-Alamu:</strong> Ukuthumela izikhumbuzo zemithamo ngesikhathi.<br><strong>Inethiwekhi ne-Wi-Fi:</strong> Ukuvumelanisa amadivayisi omndeni.</p>'
      },
      {
        h: 'Ubumfihlo Bezingane (POPIA & COPPA)',
        b: '<p>Asiqoqi imininingwane yezingane kumaseva ethu. Amaphrofayela ezingane afakwa ngabazali ahlala kudivayisi yomzali kuphela futhi avikelwe nge-Parent PIN.</p>'
      },
      {
        h: 'Amalungelo Akho Angokomthetho (POPIA, GDPR & CCPA)',
        b: '<p>Unelungelo lokufinyelela, ukukhipha idatha yakho (PDF/CSV), ukulungisa kanye nokusula yonke imininingwane yakho noma nini.</p>'
      },
      {
        h: 'Ukugcinwa Kwemininingwane Nokusulwa Ngokushesha',
        b: '<p>Ungasula yonke idatha yakho ngokushesha ngokusula idatha yohlelo kuzilungiselelo ze-Android noma ngokukhipha (uninstall) uhlelo lwe-ShelfMed.</p>'
      },
      {
        h: 'Izinguquko Kule Nqubomgomo Yobumfihlo',
        b: '<p>Noma yiziphi izinguquko zizoshicilelwa kuleli khasi kanye nosuku olusha lokusebenza.</p>'
      }
    ]
  },
  sw: {
    title: 'Sera ya Faragha ya <span class="text-gradient">ShelfMed</span>',
    subtitle: 'Mdhibiti wa Data: REEDERDEVELOPMENTS (PTY) LTD • Programu: <code class="text-cyan-300">com.reederdevelopments.shelfmed</code> • POPIA / GDPR / CCPA / Google Play',
    effective: 'Tarehe ya Kuanza Kutumika: 12 Novemba 2026 (v1.1.4)',
    backBtn: 'Rudi kwenye ShelfMed',
    guideLink: 'Mwongozo wa Matatizo 10',
    tosLink: 'Masharti ya Huduma',
    contactHeading: 'Mawasiliano ya Afisa Ulinzi wa Data',
    contactDesc: 'Kwa maswali yoyote ya faragha au haki za kisheria chini ya POPIA / GDPR, wasiliana nasi:',
    sections: [
      {
        h: 'Utangulizi na Utambulisho wa Mdhibiti wa Data',
        b: '<p><strong>REEDERDEVELOPMENTS (PTY) LTD</strong> ("ReederDevelopments", Afrika Kusini) inaheshimu haki yako ya faragha ya kiafya. Programu ya <strong>ShelfMed: Medicine Tracker</strong> (<code>com.reederdevelopments.shelfmed</code>, v1.1.4+) imeundwa kwa mfumo wa <strong>Bila Wingu (Zero-Cloud, Local-First)</strong> unaozingatia sheria za <strong>POPIA</strong>, <strong>GDPR</strong>, <strong>CCPA</strong>, <strong>COPPA</strong> na sera za <strong>Google Play</strong>.</p>'
      },
      {
        h: 'Uhifadhi wa Data Kwenye Kifaa Pekee (Sera ya Zero-Cloud)',
        b: '<p>ShelfMed haina seva za wingu zinazohifadhi taarifa zako za afya. Wasifu wote wa familia, orodha ya dawa, tarehe za mwisho wa matumizi na kumbukumbu za dozi huhifadhiwa pekee kwenye simu yako katika hifadhidata iliyosimbwa ya SQLite. Hatuwezi kuona wala kuuza data yako ya matibabu.</p>'
      },
      {
        h: 'Aina za Data Zinazochakatwa Kwenye Kifaa Chako',
        b: '<p>Wasifu wa wanafamilia, majina ya dawa, viambato hai, kumbukumbu za dozi, PIN ya Mzazi na ripoti za Daktari (PDF/CSV) husalia kwenye kifaa chako pekee.</p>'
      },
      {
        h: 'Uchanganuzi wa Kamera, AI OCR na Misimbopau (Google ML Kit)',
        b: '<p>Uchanganuzi wa maandishi ya lebo za dawa na misimbopau hufanyika moja kwa moja kwenye kifaa chako kupitia <strong>Google ML Kit</strong> bila kupakia picha kwenye seva yoyote.</p>'
      },
      {
        h: 'Usawazishaji wa Vifaa vya Familia na Usimbaji Fiche wa AES-256 (E2EE)',
        b: '<p>Vifaa vya familia husawazisha moja kwa moja kupitia Wi-Fi (mDNS) au kupitia relay iliyosimbwa kikamilifu kwa <strong>AES-256 End-to-End Encryption</strong> kabla ya kutumwa.</p>'
      },
      {
        h: 'Huduma za Wahusika wa Tatu (Google AdMob & OpenFDA)',
        b: '<p><strong>Google AdMob:</strong> Huonyesha matangazo kulingana na idhini yako (Google UMP). Data yako ya dawa haishirikiwi kamwe na AdMob.<br><strong>OpenFDA API:</strong> Hutumika kutafuta maelezo ya dawa za kimataifa za umma.</p>'
      },
      {
        h: 'Ruhusa za Kifaa cha Android',
        b: '<p><strong>Kamera:</strong> Kusoma lebo za dawa na misimbo ya QR.<br><strong>Arifa na Kengele:</strong> Kukumbusha muda wa kumeza dawa na tarehe za kuharibika.<br><strong>Mtandao na Wi-Fi:</strong> Kwa usawazishaji wa familia na utafutaji wa OpenFDA.</p>'
      },
      {
        h: 'Faragha ya Watoto (COPPA, GDPR-K & POPIA)',
        b: '<p>Hatukusanyi data ya watoto kwenye seva yoyote. Wasifu wa watoto unaowekwa na wazazi huhifadhiwa kwenye simu ya mzazi pekee na kulindwa kwa PIN ya Mzazi.</p>'
      },
      {
        h: 'Haki Zako za Kisheria za Faragha (POPIA, GDPR & CCPA)',
        b: '<p>Una haki kamili ya kufikia, kuhamisha (PDF/CSV), kusahihisha na kufuta kabisa data yako wakati wowote.</p>'
      },
      {
        h: 'Udhibiti wa Data na Ufutaji wa Papo Hapo',
        b: '<p>Unaweza kufuta data yote mara moja kupitia Mipangilio ya Android (Futa Data ya Programu) au kwa kuondoa (uninstall) programu ya ShelfMed.</p>'
      },
      {
        h: 'Mabadiliko ya Sera Hii ya Faragha',
        b: '<p>Mabadiliko yoyote yatachapishwa kwenye ukurasa huu pamoja na tarehe mpya ya kuanza kutumika.</p>'
      }
    ]
  },
  es: {
    title: 'Política de Privacidad de <span class="text-gradient">ShelfMed</span>',
    subtitle: 'Responsable del Tratamiento: REEDERDEVELOPMENTS (PTY) LTD • App: <code class="text-cyan-300">com.reederdevelopments.shelfmed</code> • Cumple con RGPD / POPIA / CCPA / Google Play',
    effective: 'Fecha de Entrada en Vigor: 12 de noviembre de 2026 (v1.1.4)',
    backBtn: 'Volver a ShelfMed',
    guideLink: 'Guía de 10 Problemas',
    tosLink: 'Términos de Servicio',
    contactHeading: 'Contacto del Delegado de Protección de Datos (DPO)',
    contactDesc: 'Para consultas de privacidad o ejercer sus derechos bajo el RGPD (UE/Reino Unido), CCPA o POPIA:',
    sections: [
      {
        h: 'Introducción, Identidad del Responsable y Alcance Legal',
        b: '<p><strong>REEDERDEVELOPMENTS (PTY) LTD</strong> ("ReederDevelopments", con domicilio en Somerset West, Sudáfrica) respeta su derecho fundamental a la privacidad médica. Hemos desarrollado <strong>ShelfMed: Medicine Tracker</strong> (<code>com.reederdevelopments.shelfmed</code>, v1.1.4+) con una estricta <strong>Arquitectura Cero-Nube y Local-First</strong>, en cumplimiento con el Reglamento General de Protección de Datos (<strong>RGPD / GDPR</strong>), la <strong>POPIA</strong>, la <strong>CCPA/CPRA</strong>, <strong>COPPA</strong> y las Políticas de Datos de Salud de <strong>Google Play</strong>.</p>'
      },
      {
        h: 'Arquitectura Médica Cero-Nube y Almacenamiento 100% Local',
        b: '<p>ShelfMed funciona <strong>sin servidores centrales en la nube, sin cuentas obligatorias ni bases de datos remotas</strong> que almacenen su historial médico.</p><ul class="list-disc list-inside space-y-1.5"><li><strong>Base de Datos SQLite Cifrada en el Dispositivo:</strong> Todos los perfiles familiares, inventario del botiquín, lotes, fechas de caducidad, fechas tras apertura (PAO) y registros de dosis se guardan exclusivamente en su dispositivo Android.</li><li><strong>Cero Acceso o Venta de Datos de Salud:</strong> ReederDevelopments jamás puede ver, acceder ni vender sus datos médicos.</li></ul>'
      },
      {
        h: 'Categorías de Datos Procesados Estrictamente en su Dispositivo',
        b: '<p>Los perfiles de miembros del hogar, pesos/alergias para dosis pediátricas, medicamentos, códigos PIN parentales y los informes PDF/CSV para el médico se procesan y almacenan únicamente en su teléfono.</p>'
      },
      {
        h: 'Escaneo IA OCR, Cámara y Códigos de Barras en el Dispositivo (Google ML Kit)',
        b: '<p>El reconocimiento óptico de caracteres (OCR) y la lectura de códigos de barras GS1/EAN se ejecutan localmente en la memoria RAM de su teléfono mediante <strong>Google ML Kit</strong>. Las imágenes de la cámara nunca se suben a servidores externos.</p>'
      },
      {
        h: 'Sincronización Familiar entre Dispositivos y Cifrado Extremo a Extremo (AES-256)',
        b: '<p>Los dispositivos del hogar en la misma red Wi-Fi se sincronizan directamente (mDNS). En redes móviles, los paquetes viajan a través de un relé WebSockets efímero <strong>cifrado de extremo a extremo (E2EE) con AES-256 en su dispositivo</strong> antes de enviarse.</p>'
      },
      {
        h: 'Servicios de Terceros: Google AdMob y API Clínica OpenFDA',
        b: '<p><strong>Google AdMob (UMP / IAB TCF v2.2):</strong> Muestra anuncios según su consentimiento regional y puede recopilar identificadores publicitarios del dispositivo. Sus datos médicos locales jamás se comparten con AdMob.<br><strong>OpenFDA / RxNorm API:</strong> Al buscar medicamentos internacionales, solo se envía el término de búsqueda a la API pública de la FDA.</p>'
      },
      {
        h: 'Permisos de Android y Base Jurídica (RGPD Art. 6)',
        b: '<p><strong>Cámara:</strong> Escaneo de cajas de medicamentos y códigos QR.<br><strong>Alarmas Exactas y Notificaciones:</strong> Envío puntual de recordatorios de dosis y caducidad.<br><strong>Red y Wi-Fi Local:</strong> Sincronización familiar local y consultas a OpenFDA.</p>'
      },
      {
        h: 'Privacidad Infantil (COPPA, RGPD-K y POPIA)',
        b: '<p>No recopilamos datos personales de menores en ningún servidor. Los perfiles infantiles creados por los padres permanecen 100% en el teléfono del adulto y protegidos por el PIN Parental.</p>'
      },
      {
        h: 'Sus Derechos Legales de Privacidad (RGPD, CCPA, LGPD y POPIA)',
        b: '<p>Usted dispone de los derechos de acceso, rectificación, portabilidad (exportación PDF/CSV), supresión inmediata y revocación del consentimiento publicitario desde los ajustes de Android.</p>'
      },
      {
        h: 'Retención de Datos, Seguridad y Eliminación Instantánea',
        b: '<p>Puede eliminar permanentemente todos sus datos en cualquier momento borrando los datos de la aplicación en los Ajustes de Android o desinstalando ShelfMed.</p>'
      },
      {
        h: 'Modificaciones de esta Política de Privacidad',
        b: '<p>Cualquier actualización se publicará en <code>https://reederdevelopments.co.za/shelfmed/privacy.html</code> indicando la nueva fecha de vigencia.</p>'
      }
    ]
  },
  fr: {
    title: 'Politique de Confidentialité de <span class="text-gradient">ShelfMed</span>',
    subtitle: 'Responsable du Traitement : REEDERDEVELOPMENTS (PTY) LTD • App : <code class="text-cyan-300">com.reederdevelopments.shelfmed</code> • Conforme RGPD / POPIA / CCPA / Google Play',
    effective: 'Date d\'Entrée en Vigueur : 12 novembre 2026 (v1.1.4)',
    backBtn: 'Retour à ShelfMed',
    guideLink: 'Guide des 10 Problèmes',
    tosLink: 'Conditions d\'Utilisation',
    contactHeading: 'Contact du Délégué à la Protection des Données (DPO)',
    contactDesc: 'Pour toute question relative à la confidentialité ou à vos droits RGPD / POPIA / CCPA :',
    sections: [
      {
        h: 'Introduction, Identité du Responsable et Cadre Réglementaire',
        b: '<p><strong>REEDERDEVELOPMENTS (PTY) LTD</strong> (« ReederDevelopments », basé à Somerset West, Afrique du Sud) respecte votre droit fondamental à la confidentialité médicale. <strong>ShelfMed: Medicine Tracker</strong> (<code>com.reederdevelopments.shelfmed</code>, v1.1.4+) a été conçu selon une <strong>Architecture Zéro-Cloud et 100% Locale</strong>, conformément au <strong>RGPD</strong> européen, à la loi <strong>POPIA</strong>, au <strong>CCPA/CPRA</strong>, à la loi <strong>COPPA</strong> et aux règles de <strong>Google Play</strong> relatives aux données de santé.</p>'
      },
      {
        h: 'Architecture Médicale Zéro-Cloud et Stockage Local',
        b: '<p>ShelfMed fonctionne <strong>sans serveur cloud central, sans compte utilisateur obligatoire et sans base de données distante</strong>.</p><ul class="list-disc list-inside space-y-1.5"><li><strong>Base SQLite Chiffrée sur l\'Appareil :</strong> Tous les profils familiaux, l\'inventaire de l\'armoire à pharmacie, les dates de péremption, le suivi après ouverture (PAO) et l\'historique des doses restent exclusivement sur votre appareil Android.</li><li><strong>Aucun Accès ni Vente de Données de Santé :</strong> ReederDevelopments ne peut ni consulter, ni collecter, ni vendre vos données médicales.</li></ul>'
      },
      {
        h: 'Catégories de Données Traitées Strictement sur l\'Appareil',
        b: '<p>Les profils des membres du foyer, les poids/allergies, les médicaments, le code PIN parental et les rapports PDF/CSV pour le médecin sont générés et stockés uniquement sur votre téléphone.</p>'
      },
      {
        h: 'Scan IA OCR, Caméra et Codes-Barres sur l\'Appareil (Google ML Kit)',
        b: '<p>La reconnaissance optique de caractères (OCR) et le décodage des codes-barres GS1/EAN s\'effectuent localement dans la mémoire vive de votre téléphone via <strong>Google ML Kit</strong>. Aucune photo n\'est envoyée sur un serveur.</p>'
      },
      {
        h: 'Synchronisation Familiale et Chiffrement de Bout en Bout (AES-256)',
        b: '<p>Les appareils d\'un même foyer se synchronisent directement en Wi-Fi local (mDNS) ou via un relais WebSockets éphémère dont les paquets sont <strong>chiffrés de bout en bout (E2EE) en AES-256 sur votre appareil</strong> avant tout transfert.</p>'
      },
      {
        h: 'Services Tiers : Google AdMob et API Clinique OpenFDA',
        b: '<p><strong>Google AdMob (UMP / IAB TCF v2.2) :</strong> Diffuse des annonces selon vos choix de consentement et peut utiliser l\'identifiant publicitaire Android. Vos données médicales ne sont jamais partagées avec AdMob.<br><strong>OpenFDA API :</strong> Seul le nom du médicament recherché est transmis à l\'API publique de la FDA.</p>'
      },
      {
        h: 'Autorisations Android et Base Légale (RGPD Art. 6)',
        b: '<p><strong>Caméra :</strong> Scan des boîtes de médicaments et codes QR.<br><strong>Alarmes Exactes et Notifications :</strong> Rappels ponctuels de prise et d\'expiration.<br><strong>Réseau et Wi-Fi :</strong> Synchronisation familiale locale et requêtes OpenFDA.</p>'
      },
      {
        h: 'Protection des Enfants (COPPA, RGPD-K et POPIA)',
        b: '<p>Aucune donnée personnelle d\'enfant n\'est collectée sur un serveur. Les profils pédiatriques créés par les parents restent 100% locaux sur le téléphone du parent et protégés par le code PIN parental.</p>'
      },
      {
        h: 'Vos Droits Légaux (RGPD, POPIA et CCPA)',
        b: '<p>Vous disposez à tout moment d\'un droit d\'accès, de rectification, de portabilité (export PDF/CSV), d\'effacement et de retrait du consentement publicitaire.</p>'
      },
      {
        h: 'Conservation des Données et Suppression Immédiate',
        b: '<p>Vous pouvez effacer définitivement toutes vos données à tout moment en vidant le stockage de l\'application dans les Paramètres Android ou en désinstallant ShelfMed.</p>'
      },
      {
        h: 'Modifications de cette Politique de Confidentialité',
        b: '<p>Toute mise à jour sera publiée sur <code>https://reederdevelopments.co.za/shelfmed/privacy.html</code> avec une nouvelle date d\'entrée en vigueur.</p>'
      }
    ]
  },
  de: {
    title: 'Datenschutzerklärung für <span class="text-gradient">ShelfMed</span>',
    subtitle: 'Verantwortlicher: REEDERDEVELOPMENTS (PTY) LTD • App: <code class="text-cyan-300">com.reederdevelopments.shelfmed</code> • DSGVO / POPIA / CCPA / Google Play Konform',
    effective: 'Gültig ab: 12. November 2026 (v1.1.4)',
    backBtn: 'Zurück zu ShelfMed',
    guideLink: '10-Probleme-Leitfaden',
    tosLink: 'Nutzungsbedingungen',
    contactHeading: 'Datenschutzbeauftragter & Rechtlicher Kontakt (DSGVO)',
    contactDesc: 'Für Datenschutzanfragen oder Betroffenenrechte gemäß DSGVO (EU/UK), POPIA oder CCPA kontaktieren Sie uns:',
    sections: [
      {
        h: 'Einleitung, Verantwortlicher & Geltungsbereich',
        b: '<p>Die <strong>REEDERDEVELOPMENTS (PTY) LTD</strong> („ReederDevelopments", Sitz in Somerset West, Südafrika) schützt Ihre medizinische Privatsphäre. <strong>ShelfMed: Medicine Tracker</strong> (<code>com.reederdevelopments.shelfmed</code>, v1.1.4+) wurde mit einer strikten <strong>Zero-Cloud-, Local-First-Architektur</strong> entwickelt und erfüllt die Anforderungen der europäischen Datenschutz-Grundverordnung (<strong>DSGVO / GDPR</strong>), des südafrikanischen <strong>POPIA</strong>, des <strong>CCPA/CPRA</strong>, <strong>COPPA</strong> sowie der <strong>Google Play</strong>-Richtlinien für Gesundheits-Apps.</p>'
      },
      {
        h: 'Zero-Cloud-Architektur & 100% Lokale Datenspeicherung',
        b: '<p>ShelfMed arbeitet <strong>ohne zentrale Cloud-Server, ohne Benutzerkonten und ohne externe Datenbanken</strong> für Ihre Gesundheitsdaten.</p><ul class="list-disc list-inside space-y-1.5"><li><strong>Verschlüsselte On-Device SQLite-Datenbank:</strong> Alle Familienprofile, Hausapotheken-Bestände, Chargennummern, Verfallsdaten, Haltbarkeiten nach Anbruch (PAO) und Einnahmeprotokolle werden ausschließlich lokal auf Ihrem Android-Gerät gespeichert.</li><li><strong>Kein Zugriff &amp; Kein Verkauf von Gesundheitsdaten:</strong> ReederDevelopments kann Ihre Medikamentendaten niemals einsehen, abrufen oder verkaufen.</li></ul>'
      },
      {
        h: 'Kategorien Lokal Verarbeiteter Daten',
        b: '<p>Haushaltsprofile, Gewichts-/Altersangaben für Kinderdosierungen, Medikamentenlisten, Eltern-PIN-Hashes und Arztberichte (PDF/CSV) verbleiben vollständig auf Ihrem Smartphone.</p>'
      },
      {
        h: 'Lokaler KI-OCR-, Kamera- & Barcode-Scan (Google ML Kit)',
        b: '<p>Die Texterkennung (OCR) und das Scannen von GS1/EAN-Barcodes erfolgen lokal im Arbeitsspeicher Ihres Geräts über <strong>Google ML Kit</strong>. Kamerabilder werden niemals auf externe Server hochgeladen.</p>'
      },
      {
        h: 'Gerät-zu-Gerät-Familiensynchronisation & AES-256-Verschlüsselung',
        b: '<p>Geräte im selben WLAN synchronisieren direkt Peer-to-Peer (mDNS). Über mobile Netzwerke werden Datenpakete vor dem Versand auf Ihrem Gerät mit <strong>AES-256 Ende-zu-Ende-verschlüsselt (E2EE)</strong>.</p>'
      },
      {
        h: 'Drittanbieter-Dienste: Google AdMob & OpenFDA API',
        b: '<p><strong>Google AdMob (UMP / IAB TCF v2.2):</strong> Zeigt Werbung gemäß Ihrer Einwilligung an und kann Werbe-IDs erfassen. Ihre lokalen Gesundheitsdaten werden niemals an AdMob übermittelt.<br><strong>OpenFDA API:</strong> Bei der Suche nach internationalen Medikamenten wird nur der Suchbegriff an die öffentliche FDA-API gesendet.</p>'
      },
      {
        h: 'Android-Berechtigungen & Rechtsgrundlage (Art. 6 DSGVO)',
        b: '<p><strong>Kamera:</strong> Scannen von Medikamentenschachteln und QR-Codes.<br><strong>Exakte Alarme &amp; Benachrichtigungen:</strong> Pünktliche Einnahme- und Ablauferinnerungen.<br><strong>Netzwerk &amp; WLAN:</strong> Lokale Familiensynchronisation und OpenFDA-Abfragen.</p>'
      },
      {
        h: 'Datenschutz für Kinder (COPPA, DSGVO & POPIA)',
        b: '<p>Wir erfassen keine personenbezogenen Daten von Kindern auf Servern. Von Eltern angelegte Kinderprofile bleiben zu 100 % lokal auf dem Elterngerät und sind durch die Eltern-PIN geschützt.</p>'
      },
      {
        h: 'Ihre Datenschutzrechte (DSGVO, POPIA & CCPA)',
        b: '<p>Sie haben jederzeit das Recht auf Auskunft, Berichtigung, Datenübertragbarkeit (PDF/CSV-Export), Löschung sowie den Widerruf Ihrer Werbeeinwilligung.</p>'
      },
      {
        h: 'Datenspeicherung, Sicherheit & Sofortige Löschung',
        b: '<p>Sie können sämtliche Daten jederzeit sofort und unwiderruflich löschen, indem Sie in den Android-Einstellungen die App-Daten löschen oder ShelfMed deinstallieren.</p>'
      },
      {
        h: 'Änderungen dieser Datenschutzerklärung',
        b: '<p>Aktualisierungen werden unter <code>https://reederdevelopments.co.za/shelfmed/privacy.html</code> mit aktualisiertem Gültigkeitsdatum veröffentlicht.</p>'
      }
    ]
  },
  pt: {
    title: 'Política de Privacidade do <span class="text-gradient">ShelfMed</span>',
    subtitle: 'Controlador de Dados: REEDERDEVELOPMENTS (PTY) LTD • App: <code class="text-cyan-300">com.reederdevelopments.shelfmed</code> • Compatível com LGPD / RGPD / POPIA / Google Play',
    effective: 'Data de Vigência: 12 de novembro de 2026 (v1.1.4)',
    backBtn: 'Voltar ao ShelfMed',
    guideLink: 'Guia dos 10 Problemas',
    tosLink: 'Termos de Serviço',
    contactHeading: 'Contato do Encarregado de Proteção de Dados (DPO / LGPD)',
    contactDesc: 'Para dúvidas de privacidade ou solicitações sob a LGPD (Brasil), RGPD (UE/Portugal) ou POPIA:',
    sections: [
      {
        h: 'Introdução, Identidade do Controlador e Escopo Legal',
        b: '<p>A <strong>REEDERDEVELOPMENTS (PTY) LTD</strong> ("ReederDevelopments", sediada em Somerset West, África do Sul) respeita o seu direito fundamental à privacidade médica. O <strong>ShelfMed: Medicine Tracker</strong> (<code>com.reederdevelopments.shelfmed</code>, v1.1.4+) foi desenvolvido com uma <strong>Arquitetura Zero-Nuvem e 100% Local</strong>, em total conformidade com a Lei Geral de Proteção de Dados do Brasil (<strong>LGPD</strong>), o <strong>RGPD / GDPR</strong> europeu, a <strong>POPIA</strong>, a <strong>CCPA</strong>, a <strong>COPPA</strong> e as Políticas de Saúde do <strong>Google Play</strong>.</p>'
      },
      {
        h: 'Arquitetura Médica Zero-Nuvem e Armazenamento Local',
        b: '<p>O ShelfMed opera <strong>sem servidores centrais em nuvem, sem contas de usuário obrigatórias e sem bancos de dados remotos</strong>.</p><ul class="list-disc list-inside space-y-1.5"><li><strong>Banco de Dados SQLite Criptografado no Dispositivo:</strong> Todos os perfis familiares, estoque da farmácia caseira, lotes, prazos de validade, validade após aberto (PAO) e registros de doses ficam armazenados exclusivamente no seu dispositivo Android.</li><li><strong>Zero Acesso ou Venda de Dados de Saúde:</strong> A ReederDevelopments jamais pode visualizar, acessar ou vender seus dados médicos.</li></ul>'
      },
      {
        h: 'Categorias de Dados Processados Estritamente no Dispositivo',
        b: '<p>Perfis da família, pesos/alergias para doses pediátricas, medicamentos, PIN Parental e relatórios PDF/CSV para consultas médicas permanecem exclusivamente no seu celular.</p>'
      },
      {
        h: 'Leitura IA OCR, Câmera e Código de Barras no Dispositivo (Google ML Kit)',
        b: '<p>O reconhecimento de texto (OCR) e a leitura de códigos de barras GS1/EAN ocorrem localmente na memória RAM do seu aparelho via <strong>Google ML Kit</strong>. Nenhuma foto é enviada para servidores externos.</p>'
      },
      {
        h: 'Sincronização Familiar entre Dispositivos e Criptografia Ponta a Ponta (AES-256)',
        b: '<p>Dispositivos na mesma rede Wi-Fi sincronizam diretamente (mDNS). Em redes móveis, os pacotes passam por um relé WebSockets efêmero <strong>criptografado de ponta a ponta (E2EE) com AES-256 no seu aparelho</strong> antes do envio.</p>'
      },
      {
        h: 'Serviços de Terceiros: Google AdMob e API Clínica OpenFDA',
        b: '<p><strong>Google AdMob (UMP / IAB TCF v2.2):</strong> Exibe anúncios conforme seu consentimento regional. Seus dados médicos locais nunca são compartilhados com a AdMob.<br><strong>OpenFDA API:</strong> Ao pesquisar medicamentos internacionais, apenas o nome pesquisado é enviado à API pública da FDA.</p>'
      },
      {
        h: 'Permissões do Android e Base Legal (LGPD Art. 7 / RGPD Art. 6)',
        b: '<p><strong>Câmera:</strong> Digitalização de caixas de remédios e códigos QR.<br><strong>Alarmes Exatos e Notificações:</strong> Lembretes pontuais de doses e validade.<br><strong>Rede e Wi-Fi Local:</strong> Sincronização familiar local e consultas OpenFDA.</p>'
      },
      {
        h: 'Privacidade Infantil (LGPD Art. 14, COPPA e RGPD-K)',
        b: '<p>Não coletamos dados de crianças em nenhum servidor. Perfis infantis criados pelos pais ficam 100% armazenados localmente no celular do responsável e protegidos pelo PIN Parental.</p>'
      },
      {
        h: 'Seus Direitos Legais de Privacidade (LGPD, RGPD, POPIA e CCPA)',
        b: '<p>Você possui direito de acesso, correção, portabilidade (exportação PDF/CSV), eliminação imediata e revogação de consentimento publicitário.</p>'
      },
      {
        h: 'Retenção de Dados, Segurança e Exclusão Instantânea',
        b: '<p>Você pode apagar permanentemente todos os dados a qualquer momento limpando os dados do aplicativo nas Configurações do Android ou desinstalando o ShelfMed.</p>'
      },
      {
        h: 'Alterações nesta Política de Privacidade',
        b: '<p>Eventuais atualizações serão publicadas em <code>https://reederdevelopments.co.za/shelfmed/privacy.html</code> com a data de revisão atualizada.</p>'
      }
    ]
  },
  nl: {
    title: 'Privacybeleid voor <span class="text-gradient">ShelfMed</span>',
    subtitle: 'Verwerkingsverantwoordelijke: REEDERDEVELOPMENTS (PTY) LTD • App: <code class="text-cyan-300">com.reederdevelopments.shelfmed</code> • AVG (GDPR) / POPIA / CCPA Conform',
    effective: 'Ingangsdatum: 12 november 2026 (v1.1.4)',
    backBtn: 'Terug naar ShelfMed',
    guideLink: '10 Problemen Gids',
    tosLink: 'Servicevoorwaarden',
    contactHeading: 'Contact Functionaris voor Gegevensbescherming (AVG / GDPR)',
    contactDesc: 'Voor privacyvragen of verzoeken onder de AVG (GDPR), POPIA of CCPA kunt u contact opnemen via:',
    sections: [
      {
        h: 'Inleiding, Verwerkingsverantwoordelijke & Toepassingsgebied',
        b: '<p><strong>REEDERDEVELOPMENTS (PTY) LTD</strong> ("ReederDevelopments", gevestigd te Somerset West, Zuid-Afrika) respecteert uw fundamentele recht op medische privacy. <strong>ShelfMed: Medicine Tracker</strong> (<code>com.reederdevelopments.shelfmed</code>, v1.1.4+) is gebouwd met een strikte <strong>Zero-Cloud, Local-First Architectuur</strong> in volledige overeenstemming met de Europese Algemene Verordening Gegevensbescherming (<strong>AVG / GDPR</strong>), <strong>POPIA</strong>, <strong>CCPA/CPRA</strong>, <strong>COPPA</strong> en het gezondheidsbeleid van <strong>Google Play</strong>.</p>'
      },
      {
        h: 'Zero-Cloud Medische Architectuur & 100% Lokale Opslag',
        b: '<p>ShelfMed werkt <strong>zonder centrale cloudservers, zonder verplichte gebruikersaccounts en zonder externe databases</strong> voor uw gezondheidsgegevens.</p><ul class="list-disc list-inside space-y-1.5"><li><strong>Versleutelde SQLite-database op uw Toestel:</strong> Alle gezinsprofielen, thuisapotheek-voorraden, batchnummers, vervaldatums, houdbaarheid na openen (PAO) en dosislogboeken worden uitsluitend lokaal op uw Android-toestel opgeslagen.</li><li><strong>Geen Toegang of Verkoop van Medische Data:</strong> ReederDevelopments kan uw medische gegevens nooit inzien, verzamelen of verkopen.</li></ul>'
      },
      {
        h: 'Gegevenscategorieën die Uitsluitend Lokaal Worden Verwerkt',
        b: '<p>Gezinsprofielen, gewicht/leeftijd voor kinderdoseringen, medicijnvoorraden, Ouder-PIN-hashes en PDF/CSV-exportrapporten voor de huisarts blijven 100% op uw eigen telefoon.</p>'
      },
      {
        h: 'Lokale AI OCR-, Camera- & Barcodescanning (Google ML Kit)',
        b: '<p>Tekstherkenning (OCR) en het scannen van GS1/EAN-barcodes vinden lokaal plaats in het werkgeheugen (RAM) van uw toestel via <strong>Google ML Kit</strong>. Camerabeelden worden nooit naar externe servers geüpload.</p>'
      },
      {
        h: 'Toestel-naar-Toestel Gezinssynchronisatie & AES-256 Versleuteling',
        b: '<p>Toestellen op hetzelfde wifi-netwerk synchroniseren rechtstreeks peer-to-peer (mDNS). Via mobiele netwerken worden datapakketten op uw toestel <strong>end-to-end versleuteld (E2EE) met AES-256</strong> voordat ze worden verzonden.</p>'
      },
      {
        h: 'Diensten van Derden: Google AdMob & OpenFDA API',
        b: '<p><strong>Google AdMob (UMP / IAB TCF v2.2):</strong> Toont advertenties op basis van uw toestemmingsvoorkeuren. Uw lokale medische gegevens worden nooit gedeeld met AdMob.<br><strong>OpenFDA API:</strong> Bij het opzoeken van internationale medicijnen wordt alleen de zoekterm naar de openbare FDA API verzonden.</p>'
      },
      {
        h: 'Android-toestemmingen & Rechtsgrondslag (Art. 6 AVG)',
        b: '<p><strong>Camera:</strong> Scannen van medicijndoosjes en QR-codes.<br><strong>Exacte Alarmen &amp; Meldingen:</strong> Stipte medicijn- en vervaldatumherinneringen.<br><strong>Netwerk &amp; Wifi:</strong> Lokale gezinssynchronisatie en OpenFDA-zoekopdrachten.</p>'
      },
      {
        h: 'Privacy van Kinderen (COPPA, AVG & POPIA)',
        b: '<p>Wij verzamelen geen persoonsgegevens van kinderen op servers. Kinderprofielen die door ouders worden aangemaakt blijven 100% lokaal op het toestel van de ouder en worden beschermd door de Ouder-PIN.</p>'
      },
      {
        h: 'Uw Wettelijke Privacyrechten (AVG / GDPR, POPIA & CCPA)',
        b: '<p>U heeft te allen tijde recht op inzage, rectificatie, gegevensoverdraagbaarheid (PDF/CSV-export), wissing en het intrekken van advertentietoestemming.</p>'
      },
      {
        h: 'Gegevensbewaring, Beveiliging & Directe Verwijdering',
        b: '<p>U kunt alle opgeslagen gegevens op elk moment direct en permanent wissen via Android-instellingen (App-gegevens wissen) of door ShelfMed te verwijderen.</p>'
      },
      {
        h: 'Wijzigingen in dit Privacybeleid',
        b: '<p>Eventuele wijzigingen worden gepubliceerd op <code>https://reederdevelopments.co.za/shelfmed/privacy.html</code> met een bijgewerkte ingangsdatum.</p>'
      }
    ]
  }
};

window.SHELFMED_TOS_I18N = {
  en: {
    title: 'Terms of Service for <span class="text-gradient">ShelfMed</span>',
    subtitle: 'Publisher &amp; Trader: REEDERDEVELOPMENTS (PTY) LTD • App: <code class="text-cyan-300">com.reederdevelopments.shelfmed</code>',
    effective: 'Effective & Updated: November 12, 2026 (v1.1.4)',
    backBtn: 'Back to ShelfMed',
    guideLink: '10 Problems Guide',
    privacyLink: 'Privacy Policy',
    medBannerTitle: 'CRITICAL MEDICAL & CLINICAL DISCLAIMER — NOT A MEDICAL DEVICE',
    medBannerText: 'ShelfMed is a personal and household inventory organizer and dosage log designed solely for informational and record-keeping purposes. It is NOT a regulated medical device and does NOT provide medical advice, clinical diagnosis, prescription verification, or medical treatment. Always verify every medication name, strength, dosage instruction, active ingredient, and expiry date against physical manufacturer packaging and consult a qualified doctor or pharmacist.',
    contactHeading: 'Official Developer & Google Play Trader Disclosures',
    contactDesc: 'In accordance with Google Play Trader Status requirements and international consumer protection laws, ShelfMed is developed, published, and supported by REEDERDEVELOPMENTS (PTY) LTD (Somerset West, Western Cape, Republic of South Africa):',
    sections: [
      {
        h: 'Binding Agreement, Trader Identity & Application Scope',
        b: '<p>These Terms of Service and End-User License Agreement ("Terms") constitute a legally binding contract between you ("User" or "you") and <strong>REEDERDEVELOPMENTS (PTY) LTD</strong> trading as <strong>ReederDevelopments</strong> ("Developer", "Trader", "we", "us", or "our") governing your download, installation, access, and use of the <strong>ShelfMed: Medicine Tracker</strong> mobile application (Android package: <code>com.reederdevelopments.shelfmed</code>, v1.1.4 and all updates, collectively the "App").</p><p>By downloading, installing, or using ShelfMed, you confirm that you have read, understood, and agree to be bound by these Terms and our <a href="privacy.html" class="text-cyan-400 underline">Privacy Policy</a>. If you do not agree, do not install or use the App.</p>'
      },
      {
        h: 'No Medical Advice & Mandatory Clinical Verification by User',
        b: '<p>ShelfMed is an organizational tool, <strong>not</strong> a clinical decision support system or medical device.</p><ul class="list-disc list-inside space-y-1.5 text-slate-300"><li><strong>Mandatory Physical Label Check:</strong> Features including AI OCR box scanning, manual cropper, GS1 DataMatrix/barcode parsing, the embedded South African (SAHPRA S0–S6) &amp; OpenFDA medication catalogs, Duplicate Active Ingredient alerts, Fractional Dose calculators, FEFO (First-Expired, First-Out) suggestions, and "Once Opened" (PAO) liquid expiry timers are convenience aids only. Optical character recognition and external databases can contain inaccuracies or omissions. <strong>You must manually verify every medication name, concentration/strength, dosage, active ingredient, and expiry date against the physical manufacturer packaging and your pharmacist\'s label before administering any dose.</strong></li><li><strong>Consult Healthcare Professionals:</strong> Never disregard professional medical advice or delay seeking medical care because of information displayed within ShelfMed.</li></ul>'
      },
      {
        h: 'Emergency Services & Poison Control Directory Disclaimer',
        b: '<p>ShelfMed includes quick-dial shortcuts to emergency numbers and Poison Information Helplines (such as the South African Poison Information Helpline <code>0861 555 777</code> and international equivalents). These numbers are provided strictly as a reference convenience. ReederDevelopments is not an emergency service provider. In any suspected overdose, adverse reaction, or medical emergency, immediately contact your local emergency medical services or go to the nearest hospital emergency room.</p>'
      },
      {
        h: 'End-User License Grant & Acceptable Use Restrictions',
        b: '<p>Subject to your compliance with these Terms, ReederDevelopments grants you a personal, limited, non-exclusive, non-transferable, revocable license to install and use ShelfMed on Android devices that you own or control for personal, household, and non-commercial use. You agree not to: (a) copy, modify, or redistribute the App or its curated medication catalogs; (b) reverse-engineer, decompile, or attempt to extract the source code of ShelfMed except where expressly permitted by mandatory law; (c) abuse, flood, or disrupt the encrypted peer-to-peer WebSockets routing relay; or (d) use the App for commercial pharmacy dispensing or unlawful distribution of scheduled substances.</p>'
      },
      {
        h: 'Local-First Storage, User Backup Responsibility & Household QR Sync',
        b: '<p>Because ShelfMed stores all health records locally on your device in an encrypted SQLite database and operates with zero cloud servers:</p><ul class="list-disc list-inside space-y-1.5 text-slate-300"><li><strong>Backup Responsibility:</strong> ReederDevelopments cannot recover your cabinet inventory or dosage history if your device is lost, stolen, damaged, factory-reset, or if you uninstall the App without maintaining a paired household device or exported backup.</li><li><strong>Household QR Pairing &amp; Parent PIN Security:</strong> You are solely responsible for restricting access to your Family Sync QR codes and maintaining the confidentiality of your Parent PIN.</li></ul>'
      },
      {
        h: 'Android Alarms, Battery Optimization & Notification Reliability',
        b: '<p>Scheduled medication and expiry notifications rely on your Android operating system\'s alarm manager, notification permissions, and OEM battery optimization settings (e.g., Doze mode or background app restrictions). ReederDevelopments does not warrant that notifications will always fire without delay or interruption, and you remain solely responsible for remembering and administering scheduled medications on time.</p>'
      },
      {
        h: 'Advertisements (Google AdMob), Purchases & Google Play Terms',
        b: '<p>Your download and use of ShelfMed is subject to the <a href="https://play.google.com/intl/en_us/about/play-terms/" target="_blank" rel="noopener" class="text-cyan-400 underline">Google Play Terms of Service</a>. Free versions of the App may display advertisements via Google AdMob. Any optional in-app purchases or subscriptions processed via Google Play Billing are governed by Google Play\'s refund and billing policies and applicable mandatory consumer protection statutes.</p>'
      },
      {
        h: 'Intellectual Property Rights & Public Reference Attributions',
        b: '<p>All intellectual property rights in ShelfMed—including source code, UI design, branding, icons, and software architecture—are owned exclusively by <strong>REEDERDEVELOPMENTS (PTY) LTD</strong>. Clinical reference lookups utilize public-domain or open government datasets (such as U.S. FDA OpenFDA, NIH RxNorm, and WHO INN nomenclature) in accordance with their respective public terms; such agencies do not endorse ShelfMed.</p>'
      },
      {
        h: 'Disclaimer of Warranties ("AS IS") & Limitation of Liability',
        b: '<p>To the maximum extent permitted by applicable law, ShelfMed is provided <strong>"AS IS"</strong> and <strong>"AS AVAILABLE"</strong> without warranties of any kind, whether express, implied, or statutory, including implied warranties of merchantability, fitness for a particular medical or clinical purpose, accuracy, or non-infringement.</p><p>To the fullest extent permitted by law, <strong>REEDERDEVELOPMENTS (PTY) LTD</strong> and its directors, employees, and affiliates shall not be liable for any direct, indirect, incidental, special, consequential, or exemplary damages—including without limitation adverse health outcomes, medication overdoses, duplicate dosing, missed doses, OCR or barcode misreads, expired medication ingestion, or loss of local data—arising out of or relating to your use of ShelfMed. Nothing in these Terms excludes or limits liability that cannot be excluded under mandatory consumer protection law (including the South African Consumer Protection Act, 2008 or EEA/UK consumer statutes).</p>'
      },
      {
        h: 'Indemnification, Severability & Termination',
        b: '<p>You agree to indemnify and hold harmless ReederDevelopments from any claims, liabilities, or expenses arising from your breach of these Terms or misuse of the App. If any provision of these Terms is held to be invalid or unenforceable, the remaining provisions shall remain in full force and effect. You may terminate these Terms at any time by uninstalling ShelfMed from all of your devices.</p>'
      },
      {
        h: 'Governing Law, Jurisdiction & Consumer Rights',
        b: '<p>These Terms are governed by and construed in accordance with the laws of the <strong>Republic of South Africa</strong>, including the Electronic Communications and Transactions Act (ECTA) and the Consumer Protection Act (CPA), without regard to conflict of law principles. Consumers residing in the European Economic Area (EEA), the United Kingdom, Brazil, or other jurisdictions additionally retain the protection of mandatory provisions of the consumer laws of their country of residence.</p>'
      }
    ]
  },
  af: {
    title: 'Diensvoorwaardes vir <span class="text-gradient">ShelfMed</span>',
    subtitle: 'Uitgewer &amp; Handelaar: REEDERDEVELOPMENTS (EDMS) BPK • Toepassing: <code class="text-cyan-300">com.reederdevelopments.shelfmed</code>',
    effective: 'Effektiewe Datum: 12 November 2026 (v1.1.4)',
    backBtn: 'Terug na ShelfMed',
    guideLink: '10 Probleme Gids',
    privacyLink: 'Privaatheidsbeleid',
    medBannerTitle: 'BELANGRIKE MEDIESE VRYWARING — NIE \'N MEDIESE TOESTEL NIE',
    medBannerText: 'ShelfMed is \'n persoonlike medisynekas-organiseerder en dosislogboek slegs vir inligtings- en rekordhoudingsdoeleindes. Dit is NIE \'n mediese toestel nie en verskaf GEEN mediese advies, diagnose of voorskrifverifikasie nie. Verifieer altyd elke medisyne-naam, sterkte, aktiewe bestanddeel en vervaldatum teen die fisiese verpakking en raadpleeg \'n dokter of apteker.',
    contactHeading: 'Amptelike Ontwikkelaar & Google Play Handelaarbesonderhede',
    contactDesc: 'In ooreenstemming met Google Play Handelaarvereistes word ShelfMed ontwikkel en ondersteun deur REEDERDEVELOPMENTS (EDMS) BPK (Somerset-Wes, Wes-Kaap, Suid-Afrika):',
    sections: [
      {
        h: 'Bindende Ooreenkoms, Handelaar-identiteit & Omvang',
        b: '<p>Hierdie Diensvoorwaardes ("Voorwaardes") vorm \'n wetlik bindende ooreenkoms tussen jou en <strong>REEDERDEVELOPMENTS (EDMS) BPK</strong> wat handeldryf as <strong>ReederDevelopments</strong> vir die aflaai en gebruik van <strong>ShelfMed: Medicine Tracker</strong> (<code>com.reederdevelopments.shelfmed</code>, v1.1.4+).</p>'
      },
      {
        h: 'Geen Mediese Advies & Verpligte Fisiese Etiketverifikasie',
        b: '<p>KI-OCR-skandering, strepiekodes, die SAHPRA (S0–S6) en OpenFDA katalogusse, waarskuwings vir dubbele aktiewe bestanddele, FEFO-voorraad en "Sodra Oopgemaak" (PAO) tydhouers is slegs hulpmiddels. OCR en databasisse kan foute bevat. <strong>Jy moet elke medisyne-naam, sterkte, dosis en vervaldatum fisies teen die oorspronklike verpakking en aptekersetiket kontroleer voordat enige medikasie toegedien word.</strong></p>'
      },
      {
        h: 'Nooddienste & Gifinligtingshulplyn Vrywaring',
        b: '<p>Kortpaaie na noodnommers (soos die SA Gifinligtingshulplyn <code>0861 555 777</code>) word slegs as gerief verskaf. In enige noodgeval of vermoedelike oordosis, skakel onmiddellik jou plaaslike nooddienste of gaan na die naaste hospitaal.</p>'
      },
      {
        h: 'Gebruikerslisensie & Aanvaarbare Gebruik',
        b: '<p>ReederDevelopments verleen aan jou \'n persoonlike, nie-eksklusiewe, herroepbare lisensie vir persoonlike huishoudelike gebruik. Jy mag nie die toepassing omgekeerd-ingenieur (reverse-engineer), kommersieel gebruik of die geënkripteerde sinchronisasie-aflos misbruik nie.</p>'
      },
      {
        h: 'Plaaslike Berging, Rugsteunverantwoordelikheid & Gesins-QR-Sekuriteit',
        b: '<p>Omdat ShelfMed geen wolkbedieners gebruik nie, kan ReederDevelopments nie jou data herstel as jou foon verloor, beskadig of teruggestel word sonder \'n plaaslike rugsteun of gekoppelde gesinstoestel nie. Jy is verantwoordelik vir die beveiliging van jou Ouer-PIN en QR-kodes.</p>'
      },
      {
        h: 'Android Alarms, Battery-optimering & Kennisgewings',
        b: '<p>Herinneringe hang af van jou Android-toestel se stelselinstellings en battery-optimering. Jy bly self verantwoordelik om medikasie betyds toe te dien.</p>'
      },
      {
        h: 'Advertensies (Google AdMob) & Google Play Voorwaardes',
        b: '<p>Jou gebruik van ShelfMed is ook onderhewig aan die <a href="https://play.google.com/intl/en_us/about/play-terms/" target="_blank" rel="noopener" class="text-cyan-400 underline">Google Play Diensvoorwaardes</a>.</p>'
      },
      {
        h: 'Intellektuele Eiendomsregte',
        b: '<p>Alle regte op die ShelfMed-toepassing behoort aan <strong>REEDERDEVELOPMENTS (EDMS) BPK</strong>. Jy behou volle eienaarskap van jou persoonlike medisyne-rekords op jou toestel.</p>'
      },
      {
        h: 'Vrywaring van Waarborge ("SOOS DIT IS") & Beperking van Aanspreeklikheid',
        b: '<p>Sover die wet dit toelaat, word ShelfMed "SOOS DIT IS" ("AS IS") verskaf sonder enige waarborge. ReederDevelopments is nie aanspreeklik vir enige skade, verkeerde dosisse, gemiste alarms, OCR-foute of dataverlies nie, behalwe waar aanspreeklikheid nie kragtens die Suid-Afrikaanse Wet op Verbruikersbeskerming (CPA) uitgesluit kan word nie.</p>'
      },
      {
        h: 'Vrywaring, Skeibaarheid & Beëindiging',
        b: '<p>Indien enige bepaling ongeldig verklaar word, bly die oorblywende bepalings ten volle van krag. Jy kan hierdie Voorwaardes enige tyd beëindig deur ShelfMed te deïnstalleer.</p>'
      },
      {
        h: 'Toepaslike Reg (Republiek van Suid-Afrika) & Verbruikersregte',
        b: '<p>Hierdie Voorwaardes word beheer deur die wette van die <strong>Republiek van Suid-Afrika</strong>, terwyl internasionale verbruikers ook beskerm word deur verpligte verbruikerswette van hul woonland.</p>'
      }
    ]
  },
  zu: {
    title: 'Imigomo Yesevisi ye-<span class="text-gradient">ShelfMed</span>',
    subtitle: 'Umshicileli: REEDERDEVELOPMENTS (PTY) LTD • Uhlelo: <code class="text-cyan-300">com.reederdevelopments.shelfmed</code>',
    effective: 'Usuku Lokusebenza: 12 Novemba 2026 (v1.1.4)',
    backBtn: 'Buyela ku-ShelfMed',
    guideLink: 'Umhlahlandlela Wezinkinga eziyi-10',
    privacyLink: 'Inqubomgomo Yobumfihlo',
    medBannerTitle: 'ISaziso Esibalulekile Sezokwelapha — AKULONA ITHULUZI LEZOKWELAPHA',
    medBannerText: 'I-ShelfMed iyithuluzi lokuhlela ikhabhinethi yemithi yasekhaya nokubhala imithamo kuphela. Ayinikezi izeluleko zezokwelapha noma ukuxilonga. Qinisekisa njalo igama lomuthi, amandla awo, umthamo nosuku lokuphelelwa yisikhathi ebhokisini lomuthi langempela futhi ubonane nodokotela noma usokhemisi.',
    contactHeading: 'Imininingwane Yomthuthukisi kanye ne-Google Play Trader',
    contactDesc: 'Uhlelo lwe-ShelfMed lwakhiwe futhi lushicilelwe yi-REEDERDEVELOPMENTS (PTY) LTD (Somerset West, Western Cape, South Africa):',
    sections: [
      {
        h: 'Isivumelwano Esibophayo Ngokomthetho',
        b: '<p>Le Migomo Yesevisi iyisivumelwano esibophayo phakathi kwakho ne-<strong>REEDERDEVELOPMENTS (PTY) LTD</strong> ("ReederDevelopments") sokusebenzisa uhlelo lwe-<strong>ShelfMed: Medicine Tracker</strong> (<code>com.reederdevelopments.shelfmed</code>, v1.1.4+).</p>'
      },
      {
        h: 'Akukho Seluleko Sezokwelapha & Isibopho Sokuqinisekisa Amalebula',
        b: '<p>Ukuskena kwe-AI OCR, amabhakhodi, uhlu lwemithi lwe-SAHPRA (S0–S6) ne-OpenFDA kanye nezexwayiso zemithamo kungamathuluzi okusiza kuphela. <strong>Kufanele uhlole ngesandla wonke amagama emithi, izithako ezisebenzayo, imithamo kanye nezinsuku zokuphelelwa yisikhathi ebhokisini langempela lomuthi ngaphambi kokuphuza noma ukunikeza umuthi.</strong></p>'
      },
      {
        h: 'Izinsizakaloimo Eziphuthumayo & Inombolo Yobuthi (0861 555 777)',
        b: '<p>Izinombolo eziphuthumayo zinikezwa njengosizo lokushaya ucingo ngokushesha kuphela. Uma kukhona isimo esiphuthumayo noma ukuphuza umuthi ngokweqile, shayela abezimo eziphuthumayo noma uye esibhedlela ngokushesha.</p>'
      },
      {
        h: 'Ilayisensi Yomsebenzisi Nokusebenzisa Okwamukelekayo',
        b: '<p>Unikezwa ilayisensi yomuntu siqu neyomndeni okungeyona eyezohwebo. Awuvumelekile ukuguqula ikhodi yohlelo noma ukusebenzisa uhlelo ngokungemthetho.</p>'
      },
      {
        h: 'Ukugcinwa Kwedatha Kudivayisi kanye Nokuvikelwa kwe-PIN',
        b: '<p>Njengoba i-ShelfMed ingasebenzisi amaseva amafu, awukwazi ukubuyisa idatha yakho uma ucingo lwakhoantshontshwa nomaonakala ngaphandle kwe-backup. Unesibopho sokugcina i-Parent PIN nama-QR code akho ephephile.</p>'
      },
      {
        h: 'Ama-Alamu e-Android kanye Nezikhumbuzo',
        b: '<p>Izaziso zemithi zincike kuzilungiseleloocingo lwakho lwe-Android nebhethri. Unesibopho sokukhumbula nokuphuza imithi ngesikhathi.</p>'
      },
      {
        h: 'Izikhangiso (Google AdMob) kanye Nemigomo ye-Google Play',
        b: '<p>Ukusebenzisa kwakho i-ShelfMed kuhambisana ne-<a href="https://play.google.com/intl/en_us/about/play-terms/" target="_blank" rel="noopener" class="text-cyan-400 underline">Migomo Yesevisi ye-Google Play</a>.</p>'
      },
      {
        h: 'Amalungelo Obunikaziempahla Yengqondo',
        b: '<p>Wonke amalungelo ohlelo lwe-ShelfMed angawa-<strong>REEDERDEVELOPMENTS (PTY) LTD</strong>.</p>'
      },
      {
        h: 'Ukuzihlangula kanye Nokukhawulelwa Kwesibopho ("NJENGOBA INJALO")',
        b: '<p>I-ShelfMed inikezwa "NJENGOBA INJALO" ("AS IS"). I-ReederDevelopments ngeke ibe nesibopho sokulimala, iphutha lomthamo, iphutha le-OCR noma ukulahleka kwedatha ngaphandle kwalapho umthetho uvimbela khona.</p>'
      },
      {
        h: 'Ukuphela Kwesivumelwano',
        b: '<p>Ungaqeda le Migomo noma nini ngokukhipha (uninstall) uhlelo lwe-ShelfMed ocingweni lwakho.</p>'
      },
      {
        h: 'Umthetho Obusayo (IRiphabhulikhi YaseNingizimu Afrika)',
        b: '<p>Le Migomo ibuswa yimithetho <strong>yeRiphabhulikhi YaseNingizimu Afrika</strong> kanye nemithetho evikela abathengi.</p>'
      }
    ]
  },
  sw: {
    title: 'Masharti ya Huduma ya <span class="text-gradient">ShelfMed</span>',
    subtitle: 'Mchapishaji: REEDERDEVELOPMENTS (PTY) LTD • Programu: <code class="text-cyan-300">com.reederdevelopments.shelfmed</code>',
    effective: 'Tarehe ya Kuanza Kutumika: 12 Novemba 2026 (v1.1.4)',
    backBtn: 'Rudi kwenye ShelfMed',
    guideLink: 'Mwongozo wa Matatizo 10',
    privacyLink: 'Sera ya Faragha',
    medBannerTitle: 'KANUSHO MUHIMU LA KITABIBU — SI KIFAA CHA KITABIBU',
    medBannerText: 'ShelfMed ni programu ya kupanga kabati la dawa za nyumbani na kumbukumbu za dozi kwa madhumuni ya taarifa pekee. SI kifaa cha kitabibu na HAITOI ushauri wa daktari au utambuzi wa magonjwa. Hakikisha unakagua kila jina la dawa, nguvu, dozi na tarehe ya mwisho wa matumizi kwenye pakiti halisi ya dawa na uwasiliane na daktari au mfamasia.',
    contactHeading: 'Taarifa Rasmi za Msanidi Programu na Google Play Trader',
    contactDesc: 'Kwa mujibu wa mahitaji ya Google Play Trader, ShelfMed inaendelezwa na REEDERDEVELOPMENTS (PTY) LTD (Somerset West, Afrika Kusini):',
    sections: [
      {
        h: 'Mkataba wa Kisheria na Upeo wa Programu',
        b: '<p>Masharti haya ya Huduma ni mkataba wa kisheria kati yako na <strong>REEDERDEVELOPMENTS (PTY) LTD</strong> ("ReederDevelopments") kuhusu matumizi ya programu ya <strong>ShelfMed: Medicine Tracker</strong> (<code>com.reederdevelopments.shelfmed</code>, v1.1.4+).</p>'
      },
      {
        h: 'Hakuna Ushauri wa Kitabibu & Wajibu wa Kuhakiki Lebo Halisi',
        b: '<p>Uchanganuzi wa AI OCR, misimbopau, orodha za dawa za SAHPRA/OpenFDA, na tahadhari za viambato vinavyofanana ni visaidizi tu. <strong>Lazima uhakiki kwa macho kila jina la dawa, nguvu, kipimo na tarehe ya kuharibika kwenye boksi halisi la mtengenezaji na lebo ya mfamasia kabla ya kumpa mtu yeyote dawa.</strong></p>'
      },
      {
        h: 'Huduma za Dharura na Simu za Kudhibiti Sumu',
        b: '<p>Nambari za simu za dharura na vituo vya sumu zimetolewa kwa urahisi wa kupiga simu tu. Katika dharura yoyote ya kiafya au kuzidisha dozi, piga simu ya dharura au nenda hospitali mara moja.</p>'
      },
      {
        h: 'Leseni ya Mtumiaji na Matumizi Yanayokubalika',
        b: '<p>Unapewa leseni ya kibinafsi na ya kifamilia isiyo ya kibiashara. Hairuhusiwi kuiga msimbo wa programu au kutumia programu kwa biashara haramu ya dawa.</p>'
      },
      {
        h: 'Uhifadhi wa Kifaa, Wajibu wa Nakala Rudufu na Usalama wa QR',
        b: '<p>Kwa kuwa ShelfMed haihifadhi data kwenye wingu, hatuwezi kurejesha data yako ikiwa simu yako itapotea au kuharibika bila nakala rudufu. Unawajibika kulinda PIN yako ya Mzazi na misimbo ya QR ya familia.</p>'
      },
      {
        h: 'Kengele za Android na Uboreshaji wa Betri',
        b: '<p>Arifa za kumeza dawa zinategemea mipangilio ya mfumo wa Android na betri ya simu yako. Unabaki na jukumu kamili la kukumbuka na kutoa dawa kwa wakati.</p>'
      },
      {
        h: 'Matangazo (Google AdMob) na Masharti ya Google Play',
        b: '<p>Matumizi ya ShelfMed pia yanaongozwa na <a href="https://play.google.com/intl/en_us/about/play-terms/" target="_blank" rel="noopener" class="text-cyan-400 underline">Masharti ya Huduma ya Google Play</a>.</p>'
      },
      {
        h: 'Haki Miliki',
        b: '<p>Haki zote za programu ya ShelfMed ni mali ya <strong>REEDERDEVELOPMENTS (PTY) LTD</strong>.</p>'
      },
      {
        h: 'Kanusho la Dhamana ("KAMA ILIVYO") na Kikomo cha Dhima',
        b: '<p>ShelfMed inatolewa "KAMA ILIVYO" ("AS IS") bila dhamana yoyote. ReederDevelopments haitawajibika kwa madhara yoyote ya kiafya, makosa ya dozi, makosa ya OCR au upotevu wa data kwa kiwango cha juu kinachoruhusiwa na sheria.</p>'
      },
      {
        h: 'Kusitishwa kwa Matumizi',
        b: '<p>Unaweza kusitisha Masharti haya wakati wowote kwa kuondoa (uninstall) ShelfMed kwenye vifaa vyako.</p>'
      },
      {
        h: 'Sheria Inayotumika (Jamhuri ya Afrika Kusini)',
        b: '<p>Masharti haya yanaongozwa na sheria za <strong>Jamhuri ya Afrika Kusini</strong> pamoja na sheria za lazima za ulinzi wa watumiaji katika nchi yako.</p>'
      }
    ]
  },
  es: {
    title: 'Términos de Servicio de <span class="text-gradient">ShelfMed</span>',
    subtitle: 'Editor y Comerciante: REEDERDEVELOPMENTS (PTY) LTD • App: <code class="text-cyan-300">com.reederdevelopments.shelfmed</code>',
    effective: 'Fecha de Vigencia: 12 de noviembre de 2026 (v1.1.4)',
    backBtn: 'Volver a ShelfMed',
    guideLink: 'Guía de 10 Problemas',
    privacyLink: 'Política de Privacidad',
    medBannerTitle: 'DESCARGO DE RESPONSABILIDAD MÉDICA CRÍTICO — NO ES UN DISPOSITIVO MÉDICO',
    medBannerText: 'ShelfMed es un organizador de botiquín familiar y registro de dosis diseñado exclusivamente con fines informativos. NO es un dispositivo médico regulado y NO ofrece consejo médico, diagnóstico clínico ni validación de recetas. Verifique siempre cada nombre de medicamento, concentración, principio activo, dosis y fecha de caducidad con el envase físico original y consulte a un médico o farmacéutico.',
    contactHeading: 'Información Oficial del Desarrollador y Comerciante en Google Play',
    contactDesc: 'En cumplimiento con los requisitos de Comerciante de Google Play y las leyes internacionales de protección al consumidor, ShelfMed es publicado por REEDERDEVELOPMENTS (PTY) LTD (Somerset West, Sudáfrica):',
    sections: [
      {
        h: 'Acuerdo Vinculante, Identidad del Comerciante y Alcance',
        b: '<p>Estos Términos de Servicio y Contrato de Licencia de Usuario Final ("Términos") constituyen un acuerdo legalmente vinculante entre usted y <strong>REEDERDEVELOPMENTS (PTY) LTD</strong> ("ReederDevelopments") que regula la descarga y el uso de <strong>ShelfMed: Medicine Tracker</strong> (<code>com.reederdevelopments.shelfmed</code>, v1.1.4+).</p>'
      },
      {
        h: 'Ausencia de Consejo Médico y Verificación Física Obligatoria',
        b: '<p>El escaneo IA OCR, la lectura de códigos de barras GS1/EAN, los catálogos de medicamentos (SAHPRA / OpenFDA), las alertas de principios activos duplicados, el control FEFO y el temporizador tras apertura (PAO) son herramientas de ayuda. El reconocimiento óptico y las bases de datos pueden contener errores. <strong>Usted debe verificar manualmente cada nombre de medicamento, concentración, dosis y fecha de caducidad en la caja física original y en la etiqueta de su farmacéutico antes de administrar cualquier dosis.</strong></p>'
      },
      {
        h: 'Servicios de Emergencia y Centros de Toxicología',
        b: '<p>Los accesos directos a números de emergencia y centros de toxicología se proporcionan únicamente como referencia rápida. En caso de emergencia médica o sospecha de sobredosis, llame inmediatamente a los servicios de emergencia locales o acuda al hospital más cercano.</p>'
      },
      {
        h: 'Licencia de Uso Personal y Restricciones',
        b: '<p>ReederDevelopments le otorga una licencia personal, limitada, no exclusiva y revocable para uso doméstico no comercial. Queda prohibido realizar ingeniería inversa, redistribuir la aplicación o abusar del relé cifrado de sincronización.</p>'
      },
      {
        h: 'Almacenamiento Local, Copias de Seguridad y Seguridad QR',
        b: '<p>Dado que ShelfMed no almacena sus datos en servidores en la nube, ReederDevelopments no puede recuperar su información si pierde, daña o formatea su teléfono sin una copia de seguridad o dispositivo familiar vinculado. Usted es responsable de custodiar su PIN Parental y sus códigos QR de sincronización.</p>'
      },
      {
        h: 'Alarmas de Android, Optimización de Batería y Recordatorios',
        b: '<p>Las notificaciones programadas dependen del sistema operativo Android y de los ajustes de ahorro de batería de su teléfono. Usted sigue siendo el único responsable de administrar los medicamentos a tiempo.</p>'
      },
      {
        h: 'Publicidad (Google AdMob), Compras y Términos de Google Play',
        b: '<p>El uso de ShelfMed está sujeto asimismo a los <a href="https://play.google.com/intl/en_us/about/play-terms/" target="_blank" rel="noopener" class="text-cyan-400 underline">Términos de Servicio de Google Play</a>.</p>'
      },
      {
        h: 'Derechos de Propiedad Intelectual',
        b: '<p>Todos los derechos de propiedad intelectual sobre ShelfMed pertenecen a <strong>REEDERDEVELOPMENTS (PTY) LTD</strong>. Usted conserva la propiedad de sus registros personales almacenados en su dispositivo.</p>'
      },
      {
        h: 'Exclusión de Garantías ("TAL CUAL") y Limitación de Responsabilidad',
        b: '<p>En la máxima medida permitida por la ley, ShelfMed se proporciona "TAL CUAL" ("AS IS") sin garantías de ningún tipo. ReederDevelopments no será responsable de daños directos o indirectos, errores de dosificación, lecturas OCR inexactas, alarmas omitidas o pérdida de datos locales, sin perjuicio de los derechos irrenunciables del consumidor.</p>'
      },
      {
        h: 'Indemnización, Divisibilidad y Terminación',
        b: '<p>Si alguna cláusula se declara inválida, el resto permanecerá en vigor. Puede rescindir estos Términos en cualquier momento desinstalando ShelfMed.</p>'
      },
      {
        h: 'Ley Aplicable y Derechos Internacionales del Consumidor',
        b: '<p>Estos Términos se rigen por las leyes de la <strong>República de Sudáfrica</strong>, respetando siempre las disposiciones imperativas de protección al consumidor de su país de residencia (UE, Reino Unido, Latinoamérica, etc.).</p>'
      }
    ]
  },
  fr: {
    title: 'Conditions d\'Utilisation de <span class="text-gradient">ShelfMed</span>',
    subtitle: 'Éditeur &amp; Professionnel : REEDERDEVELOPMENTS (PTY) LTD • App : <code class="text-cyan-300">com.reederdevelopments.shelfmed</code>',
    effective: 'Date d\'Entrée en Vigueur : 12 novembre 2026 (v1.1.4)',
    backBtn: 'Retour à ShelfMed',
    guideLink: 'Guide des 10 Problèmes',
    privacyLink: 'Politique de Confidentialité',
    medBannerTitle: 'AVERTISSEMENT MÉDICAL CRITIQUE — CECI N\'EST PAS UN DISPOSITIF MÉDICAL',
    medBannerText: 'ShelfMed est un outil personnel de gestion d\'armoire à pharmacie et de suivi de prises à usage strictement informatif. Ce n\'est PAS un dispositif médical homologué et il ne fournit AUCUN avis médical, diagnostic ou validation d\'ordonnance. Vérifiez toujours chaque nom de médicament, dosage, substance active et date de péremption sur l\'emballage physique d\'origine et consultez un médecin ou un pharmacien.',
    contactHeading: 'Informations Légales de l\'Éditeur (Statut Professionnel Google Play)',
    contactDesc: 'Conformément aux exigences Google Play et au droit de la consommation, ShelfMed est édité par REEDERDEVELOPMENTS (PTY) LTD (Somerset West, Afrique du Sud) :',
    sections: [
      {
        h: 'Acceptation des Conditions et Champ d\'Application',
        b: '<p>Les présentes Conditions d\'Utilisation et Contrat de Licence Utilisateur Final (« Conditions ») forment un contrat juridiquement contraignant entre vous et <strong>REEDERDEVELOPMENTS (PTY) LTD</strong> (« ReederDevelopments ») régissant l\'utilisation de <strong>ShelfMed: Medicine Tracker</strong> (<code>com.reederdevelopments.shelfmed</code>, v1.1.4+).</p>'
      },
      {
        h: 'Absence d\'Avis Médical et Vérification Physique Obligatoire',
        b: '<p>Le scan IA OCR, la lecture de codes-barres GS1/EAN, les catalogues médicamenteux (SAHPRA / OpenFDA), les alertes de doublons de substances actives, le tri FEFO et le suivi après ouverture (PAO) sont fournis à titre d\'aide uniquement. L\'OCR et les bases publiques peuvent comporter des erreurs. <strong>Vous devez vérifier manuellement chaque nom, dosage, posologie et date de péremption sur la boîte physique et l\'étiquette du pharmacien avant toute administration.</strong></p>'
      },
      {
        h: 'Services d\'Urgence et Centres Antipoison',
        b: '<p>Les numéros d\'urgence et de centres antipoison sont fournis à titre purement indicatif. En cas d\'urgence médicale ou de suspicion de surdosage, appelez immédiatement les secours locaux (15 / 112 / 911) ou rendez-vous aux urgences.</p>'
      },
      {
        h: 'Licence d\'Utilisation et Restrictions',
        b: '<p>ReederDevelopments vous concède une licence personnelle, non exclusive et révocable pour un usage domestique et non commercial. Il est interdit de décompiler l\'application, de la redistribuer ou de perturber le relais chiffré de synchronisation.</p>'
      },
      {
        h: 'Stockage Local, Responsabilité de Sauvegarde et Sécurité QR',
        b: '<p>ShelfMed fonctionnant sans cloud, ReederDevelopments ne peut pas récupérer vos données en cas de perte, vol ou réinitialisation de votre téléphone sans sauvegarde locale ou appareil familial jumelé. Vous êtes responsable de la confidentialité de votre code PIN parental et de vos codes QR.</p>'
      },
      {
        h: 'Alarmes Android, Batterie et Fiabilité des Rappels',
        b: '<p>Les notifications dépendent du système Android et des réglages d\'économie de batterie de votre appareil. Vous demeurez seul responsable de la prise ponctuelle de vos médicaments.</p>'
      },
      {
        h: 'Publicités (Google AdMob) et Conditions Google Play',
        b: '<p>Votre utilisation de ShelfMed est également soumise aux <a href="https://play.google.com/intl/en_us/about/play-terms/" target="_blank" rel="noopener" class="text-cyan-400 underline">Conditions d\'Utilisation de Google Play</a>.</p>'
      },
      {
        h: 'Propriété Intellectuelle',
        b: '<p>Tous les droits de propriété intellectuelle relatifs à ShelfMed appartiennent exclusivement à <strong>REEDERDEVELOPMENTS (PTY) LTD</strong>.</p>'
      },
      {
        h: 'Exclusion de Garantie (« EN L\'ÉTAT ») et Limitation de Responsabilité',
        b: '<p>Dans toute la mesure permise par la loi, ShelfMed est fourni « EN L\'ÉTAT » (« AS IS ») sans garantie d\'aucune sorte. ReederDevelopments décline toute responsabilité en cas de dommage, erreur de dosage, erreur de lecture OCR, rappel manqué ou perte de données, sous réserve des droits impératifs des consommateurs.</p>'
      },
      {
        h: 'Indemnisation, Divisibilité et Résiliation',
        b: '<p>Si une disposition est jugée invalide, les autres dispositions restent pleinement en vigueur. Vous pouvez résilier ces Conditions à tout moment en désinstallant ShelfMed.</p>'
      },
      {
        h: 'Droit Applicable et Protection Internationale des Consommateurs',
        b: '<p>Les présentes Conditions sont régies par le droit de la <strong>République d\'Afrique du Sud</strong>, sans préjudice des dispositions impératives protectrices des consommateurs de votre pays de résidence (UE, Royaume-Uni, Canada, etc.).</p>'
      }
    ]
  },
  de: {
    title: 'Nutzungsbedingungen für <span class="text-gradient">ShelfMed</span>',
    subtitle: 'Herausgeber &amp; Händler: REEDERDEVELOPMENTS (PTY) LTD • App: <code class="text-cyan-300">com.reederdevelopments.shelfmed</code>',
    effective: 'Gültig ab: 12. November 2026 (v1.1.4)',
    backBtn: 'Zurück zu ShelfMed',
    guideLink: '10-Probleme-Leitfaden',
    privacyLink: 'Datenschutzerklärung',
    medBannerTitle: 'WICHTIGER MEDIZINISCHER HAFTUNGSAUSSCHLUSS — KEIN MEDIZINPRODUKT',
    medBannerText: 'ShelfMed ist ein persönlicher Hausapotheken-Organizer und ein Einnahmeprotokoll ausschließlich zu Informations- und Dokumentationszwecken. Es ist KEIN zertifiziertes Medizinprodukt und ersetzt KEINE ärztliche Beratung, Diagnose oder Apothekerprüfung. Überprüfen Sie jeden Medikamentennamen, Wirkstoff, jede Stärke, Dosierung und jedes Verfallsdatum immer anhand der Originalverpackung und konsultieren Sie einen Arzt oder Apotheker.',
    contactHeading: 'Offizielle Entwickler- & Google Play Händlerangaben (Impressum)',
    contactDesc: 'Gemäß den Google Play-Anforderungen und Verbraucherschutzgesetzen wird ShelfMed entwickelt und veröffentlicht von REEDERDEVELOPMENTS (PTY) LTD (Somerset West, Südafrika):',
    sections: [
      {
        h: 'Vertragsgegenstand, Anbieteridentität & Geltungsbereich',
        b: '<p>Diese Nutzungsbedingungen und der Endbenutzer-Lizenzvertrag („Bedingungen") bilden einen rechtsverbindlichen Vertrag zwischen Ihnen und der <strong>REEDERDEVELOPMENTS (PTY) LTD</strong> („ReederDevelopments") über die Nutzung der App <strong>ShelfMed: Medicine Tracker</strong> (<code>com.reederdevelopments.shelfmed</code>, v1.1.4+).</p>'
      },
      {
        h: 'Keine Medizinische Beratung & Pflicht zur Physischen Kontrolle',
        b: '<p>KI-OCR-Texterkennung, GS1/EAN-Barcodescanner, Medikamentenkataloge (SAHPRA / OpenFDA), Warnungen vor doppelten Wirkstoffen, FEFO-Bestandsführung und Haltbarkeitstimer nach Anbruch (PAO) dienen lediglich als Hilfsmittel. OCR-Scans und Datenbanken können Fehler aufweisen. <strong>Sie sind verpflichtet, jeden Medikamentennamen, jede Wirkstärke, Dosierung und jedes Verfallsdatum vor jeder Einnahme anhand der physischen Originalverpackung und des Apothekenetiketts manuell zu überprüfen.</strong></p>'
      },
      {
        h: 'Notrufdienste & Giftnotruf-Verzeichnis',
        b: '<p>Kurzwahlfunktionen für Notruf- und Giftnotrufnummern dienen ausschließlich der schnellen Orientierung. Kontaktieren Sie bei medizinischen Notfällen oder Verdacht auf Überdosierung sofort den örtlichen Rettungsdienst (z. B. 112).</p>'
      },
      {
        h: 'Lizenzgewährung & Zulässige Nutzung',
        b: '<p>Sie erhalten eine persönliche, einfache, widerrufliche Lizenz zur privaten, nicht-kommerziellen Nutzung im Haushalt. Reverse Engineering, unbefugte Weitergabe oder Missbrauch des Synchronisations-Relays sind untersagt.</p>'
      },
      {
        h: 'Lokale Datenspeicherung, Backup-Pflicht & QR-Sicherheit',
        b: '<p>Da ShelfMed ohne Cloud-Server arbeitet, kann ReederDevelopments Ihre Daten bei Verlust, Defekt oder Zurücksetzen Ihres Smartphones ohne lokales Backup oder gekoppeltes Familiengerät nicht wiederherstellen. Sie sind für den Schutz Ihrer Eltern-PIN und QR-Codes verantwortlich.</p>'
      },
      {
        h: 'Android-Alarme, Akku-Optimierung & Erinnerungen',
        b: '<p>Planmäßige Erinnerungen hängen vom Android-Betriebssystem und den Energiespareinstellungen Ihres Geräts ab. Die rechtzeitige Medikamenteneinnahme liegt in Ihrer alleinigen Verantwortung.</p>'
      },
      {
        h: 'Werbung (Google AdMob) & Google Play-Nutzungsbedingungen',
        b: '<p>Für den Download und die Nutzung gelten ergänzend die <a href="https://play.google.com/intl/en_us/about/play-terms/" target="_blank" rel="noopener" class="text-cyan-400 underline">Google Play-Nutzungsbedingungen</a>.</p>'
      },
      {
        h: 'Geistiges Eigentum',
        b: '<p>Sämtliche Schutzrechte an ShelfMed verbleiben bei der <strong>REEDERDEVELOPMENTS (PTY) LTD</strong>.</p>'
      },
      {
        h: 'Gewährleistungsausschluss („WIE BESEHEN") & Haftungsbeschränkung',
        b: '<p>Soweit gesetzlich zulässig, wird ShelfMed „WIE BESEHEN" („AS IS") ohne Gewährleistung bereitgestellt. ReederDevelopments haftet nicht für gesundheitliche Folgen, Dosierungsfehler, OCR-Lesefehler, verpasste Erinnerungen oder Datenverlust, soweit keine zwingende gesetzliche Haftung (z. B. bei Vorsatz, grober Fahrlässigkeit oder zwingendem Verbraucherrecht) besteht.</p>'
      },
      {
        h: 'Salvatorische Klausel & Kündigung',
        b: '<p>Sollte eine Bestimmung unwirksam sein, bleibt die Wirksamkeit der übrigen Bestimmungen unberührt. Sie können diese Bedingungen jederzeit durch Deinstallation der App beenden.</p>'
      },
      {
        h: 'Anwendbares Recht & Internationale Verbraucherrechte',
        b: '<p>Es gilt das Recht der <strong>Republik Südafrika</strong>. Für Verbraucher mit gewöhnlichem Aufenthalt in der EU, dem EWR, der Schweiz oder dem Vereinigten Königreich bleiben zwingende verbraucherschützende Vorschriften ihres Wohnsitzstaates unberührt.</p>'
      }
    ]
  },
  pt: {
    title: 'Termos de Serviço do <span class="text-gradient">ShelfMed</span>',
    subtitle: 'Publicador e Comerciante: REEDERDEVELOPMENTS (PTY) LTD • App: <code class="text-cyan-300">com.reederdevelopments.shelfmed</code>',
    effective: 'Data de Vigência: 12 de novembro de 2026 (v1.1.4)',
    backBtn: 'Voltar ao ShelfMed',
    guideLink: 'Guia dos 10 Problemas',
    privacyLink: 'Política de Privacidade',
    medBannerTitle: 'AVISO MÉDICO CRÍTICO — NÃO É UM DISPOSITIVO MÉDICO',
    medBannerText: 'O ShelfMed é um organizador de farmácia caseira e registro de doses destinado exclusivamente a fins informativos. NÃO é um dispositivo médico regulamentado e NÃO fornece aconselhamento médico, diagnóstico clínico ou prescrição. Verifique sempre cada nome de medicamento, dosagem, princípio ativo e prazo de validade na embalagem física original e consulte um médico ou farmacêutico.',
    contactHeading: 'Identificação Oficial do Desenvolvedor e Comerciante no Google Play',
    contactDesc: 'Em conformidade com os requisitos do Google Play e leis de defesa do consumidor, o ShelfMed é desenvolvido e publicado por REEDERDEVELOPMENTS (PTY) LTD (Somerset West, África do Sul):',
    sections: [
      {
        h: 'Contrato Vinculativo, Identidade do Comerciante e Escopo',
        b: '<p>Estes Termos de Serviço e Contrato de Licença de Usuário Final ("Termos") constituem um contrato legalmente vinculativo entre você e a <strong>REEDERDEVELOPMENTS (PTY) LTD</strong> ("ReederDevelopments") referente ao uso do aplicativo <strong>ShelfMed: Medicine Tracker</strong> (<code>com.reederdevelopments.shelfmed</code>, v1.1.4+).</p>'
      },
      {
        h: 'Ausência de Aconselhamento Médico e Verificação Física Obrigatória',
        b: '<p>A leitura IA OCR, códigos de barras GS1/EAN, catálogos de medicamentos (SAHPRA / OpenFDA), alertas de princípio ativo duplicado, controle FEFO e validade após aberto (PAO) são apenas recursos auxiliares. O OCR e bancos de dados públicos podem conter imprecisões. <strong>Você deve conferir manualmente cada nome de medicamento, concentração, dose e data de validade na caixa física original e na etiqueta da farmácia antes de administrar qualquer medicamento.</strong></p>'
      },
      {
        h: 'Serviços de Emergência e Centros de Intoxicação',
        b: '<p>Atalhos para números de emergência e centros de intoxicação são fornecidos apenas para conveniência. Em qualquer emergência médica ou suspeita de superdosagem, acione imediatamente o serviço de emergência local (SAMU 192 / 112) ou procure o hospital mais próximo.</p>'
      },
      {
        h: 'Concessão de Licença e Uso Aceitável',
        b: '<p>A ReederDevelopments concede uma licença pessoal, limitada, não exclusiva e revogável para uso doméstico e não comercial. É proibido realizar engenharia reversa, redistribuir o aplicativo ou abusar do relé criptografado de sincronização.</p>'
      },
      {
        h: 'Armazenamento Local, Responsabilidade de Backup e Segurança QR',
        b: '<p>Como o ShelfMed opera sem servidores em nuvem, a ReederDevelopments não pode recuperar seus dados caso seu celular seja perdido, danificado ou formatado sem backup local ou aparelho familiar pareado. Você é responsável por proteger seu PIN Parental e códigos QR.</p>'
      },
      {
        h: 'Alarmes do Android, Otimização de Bateria e Lembretes',
        b: '<p>Notificações agendadas dependem do sistema operacional Android e das configurações de economia de bateria do aparelho. Você permanece exclusivamente responsável por administrar medicamentos no horário correto.</p>'
      },
      {
        h: 'Publicidade (Google AdMob) e Termos do Google Play',
        b: '<p>O uso do ShelfMed também está sujeito aos <a href="https://play.google.com/intl/en_us/about/play-terms/" target="_blank" rel="noopener" class="text-cyan-400 underline">Termos de Serviço do Google Play</a>.</p>'
      },
      {
        h: 'Propriedade Intelectual',
        b: '<p>Todos os direitos de propriedade intelectual sobre o ShelfMed pertencem exclusivamente à <strong>REEDERDEVELOPMENTS (PTY) LTD</strong>.</p>'
      },
      {
        h: 'Isenção de Garantias ("NO ESTADO EM QUE SE ENCONTRA") e Limitação de Responsabilidade',
        b: '<p>Na extensão máxima permitida por lei, o ShelfMed é fornecido "NO ESTADO EM QUE SE ENCONTRA" ("AS IS"). A ReederDevelopments não se responsabiliza por danos diretos ou indiretos, erros de dosagem, falhas de leitura OCR, alarmes perdidos ou perda de dados locais, respeitados os direitos inderrogáveis do consumidor (incluindo o CDC brasileiro e leis europeias).</p>'
      },
      {
        h: 'Indenização, Independência das Cláusulas e Rescisão',
        b: '<p>Caso qualquer disposição seja considerada inválida, as demais permanecerão em pleno vigor. Você pode encerrar estes Termos a qualquer momento desinstalando o ShelfMed.</p>'
      },
      {
        h: 'Lei Aplicável e Direitos Internacionais do Consumidor',
        b: '<p>Estes Termos são regidos pelas leis da <strong>República da África do Sul</strong>, assegurando-se aos consumidores residentes no Brasil, Portugal, União Europeia e demais países a proteção das normas obrigatórias de defesa do consumidor de sua jurisdição.</p>'
      }
    ]
  },
  nl: {
    title: 'Servicevoorwaarden voor <span class="text-gradient">ShelfMed</span>',
    subtitle: 'Uitgever &amp; Handelaar: REEDERDEVELOPMENTS (PTY) LTD • App: <code class="text-cyan-300">com.reederdevelopments.shelfmed</code>',
    effective: 'Ingangsdatum: 12 november 2026 (v1.1.4)',
    backBtn: 'Terug naar ShelfMed',
    guideLink: '10 Problemen Gids',
    privacyLink: 'Privacybeleid',
    medBannerTitle: 'BELANGRIJKE MEDISCHE DISCLAIMER — GEEN MEDISCH HULPMIDDEL',
    medBannerText: 'ShelfMed is een persoonlijke thuisapotheek-organizer en medicijnlogboek uitsluitend bedoeld voor informatieve doeleinden. Het is GEEN gecertificeerd medisch hulpmiddel en geeft GEEN medisch advies, diagnose of receptcontrole. Controleer altijd elke medicijnnaam, sterkte, werkzame stof, dosering en vervaldatum aan de hand van de fysieke originele verpakking en raadpleeg een arts of apotheker.',
    contactHeading: 'Officiële Ontwikkelaar- & Google Play Handelaarsgegevens',
    contactDesc: 'In overeenstemming met de vereisten van Google Play en het consumentenrecht wordt ShelfMed uitgegeven door REEDERDEVELOPMENTS (PTY) LTD (Somerset West, Zuid-Afrika):',
    sections: [
      {
        h: 'Bindende Overeenkomst, Identiteit van de Handelaar & Toepassingsgebied',
        b: '<p>Deze Servicevoorwaarden en Licentieovereenkomst voor Eindgebruikers ("Voorwaarden") vormen een juridisch bindende overeenkomst tussen u en <strong>REEDERDEVELOPMENTS (PTY) LTD</strong> ("ReederDevelopments") voor het gebruik van <strong>ShelfMed: Medicine Tracker</strong> (<code>com.reederdevelopments.shelfmed</code>, v1.1.4+).</p>'
      },
      {
        h: 'Geen Medisch Advies & Verplichte Fysieke Controle door Gebruiker',
        b: '<p>AI OCR-tekstherkenning, GS1/EAN-barcodescans, medicijncatalogi (SAHPRA / OpenFDA), waarschuwingen voor dubbele werkzame stoffen, FEFO-voorraadbeheer en houdbaarheid na openen (PAO) zijn uitsluitend hulpmiddelen. OCR en databases kunnen fouten bevatten. <strong>U dient elke medicijnnaam, sterkte, dosering en vervaldatum handmatig te controleren op de fysieke verpakking en het apotheeketiket voordat u medicatie toedient.</strong></p>'
      },
      {
        h: 'Nooddiensten & Antigifcentrum-verwijzingen',
        b: '<p>Snelkoppelingen naar noodnummers en vergiftigingencentra worden enkel voor uw gemak aangeboden. Bel bij een medisch noodgeval of vermoedelijke overdosis direct het lokale noodnummer (bijv. 112).</p>'
      },
      {
        h: 'Licentieverlening & Aanvaardbaar Gebruik',
        b: '<p>ReederDevelopments verleent u een persoonlijke, niet-exclusieve, herroepbare licentie voor particulier huishoudelijk gebruik. Reverse-engineering, herdistributie of misbruik van de versleutelde synchronisatie-relay is niet toegestaan.</p>'
      },
      {
        h: 'Lokale Opslag, Back-upverantwoordelijkheid & QR-beveiliging',
        b: '<p>Omdat ShelfMed zonder cloudservers werkt, kan ReederDevelopments uw gegevens niet herstellen als uw telefoon verloren gaat, beschadigd raakt of wordt gereset zonder lokale back-up of gekoppeld gezinstoestel. U bent zelf verantwoordelijk voor het beveiligen van uw Ouder-PIN en QR-codes.</p>'
      },
      {
        h: 'Android-alarmen, Batterij-optimalisatie & Herinneringen',
        b: '<p>Geplande meldingen zijn afhankelijk van het Android-besturingssysteem en de batterij-instellingen van uw toestel. U blijft zelf verantwoordelijk voor het tijdig innemen of toedienen van medicijnen.</p>'
      },
      {
        h: 'Advertenties (Google AdMob) & Google Play-voorwaarden',
        b: '<p>Op uw gebruik van ShelfMed zijn tevens de <a href="https://play.google.com/intl/en_us/about/play-terms/" target="_blank" rel="noopener" class="text-cyan-400 underline">Servicevoorwaarden van Google Play</a> van toepassing.</p>'
      },
      {
        h: 'Intellectuele Eigendomsrechten',
        b: '<p>Alle intellectuele eigendomsrechten op ShelfMed berusten bij <strong>REEDERDEVELOPMENTS (PTY) LTD</strong>.</p>'
      },
      {
        h: 'Afwijzing van Garanties ("AS IS") & Beperking van Aansprakelijkheid',
        b: '<p>Voor zover wettelijk toegestaan wordt ShelfMed geleverd "ZOALS HET IS" ("AS IS") zonder enige garantie. ReederDevelopments is niet aansprakelijk voor gezondheidsschade, doseringsfouten, OCR-leesfouten, gemiste herinneringen of dataverlies, onverminderd dwingendrechtelijke consumentenbescherming.</p>'
      },
      {
        h: 'Scheidbaarheid & Beëindiging',
        b: '<p>Indien een bepaling ongeldig blijkt, blijven de overige bepalingen volledig van kracht. U kunt deze Voorwaarden op elk moment beëindigen door ShelfMed te verwijderen.</p>'
      },
      {
        h: 'Toepasselijk Recht & Consumentenrechten',
        b: '<p>Op deze Voorwaarden is het recht van de <strong>Republiek Zuid-Afrika</strong> van toepassing, onverminderd de dwingende bepalingen van het consumentenrecht van uw woonland (zoals Nederland of België).</p>'
      }
    ]
  }
};
