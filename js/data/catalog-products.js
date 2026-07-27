/* ============================================
   DELTA PUMP - Store Catalog Placeholder Data
   Sample/demo data for the store catalog (Solar + Pumps sections).
   Replace with real products, images, prices, and specs.
   ============================================ */

window.CATALOG_SECTIONS = [
    {
        id: 'solar',
        slug: 'solar',
        nameAr: 'قسم الطاقة الشمسية',
        nameEn: 'Solar Energy Section',
        descAr: 'الطاقة الشمسية ومشتملاتها',
        descEn: 'Solar energy and its components',
        image: 'assets/images/services/الواح الطاقه الشمسيه.webp',
        url: 'store-solar.html'
    },
    {
        id: 'pumps',
        slug: 'pumps',
        nameAr: 'قسم الطلمبات بمشتملاتها',
        nameEn: 'Pumps & Accessories Section',
        descAr: 'كل ما يتعلق بمشتملات طلمبات الاعماق',
        descEn: 'Everything related to deep pumps accessories',
        image: 'assets/images/services/توريد طلمبات.webp',
        url: 'store-pumps.html'
    },
    {
        id: 'iron-pipes-wells',
        slug: 'ironpipes',
        nameAr: 'قسم مواسير الحديد والابار',
        nameEn: 'Iron & Well Pipes Section',
        descAr: 'كل ما يتعلق بمواسير الحفر ومواسير الطلمبات والسيلس',
        descEn: 'Everything related to drilling pipes, pump pipes, and seamless pipes',
        image: 'assets/images/services/توريد مواسير.webp',
        url: 'store-ironpipes.html'
    }
];

window.CATALOG_CATEGORIES = [
    // ============ SOLAR ============
    {
        id: 'panels',
        section: 'solar',
        nameAr: 'ألواح شمسية',
        nameEn: 'Solar Panels',
        descAr: 'ألواح شمسية عالية الكفاءة',
        descEn: 'High-efficiency solar panels',
        image: 'assets/images/services/الواح الطاقه الشمسيه.webp'
    },
    {
        id: 'inverters',
        section: 'solar',
        nameAr: 'عاكسات',
        nameEn: 'Inverters',
        descAr: 'إنفرترات لضخ الطاقة الشمسية',
        descEn: 'Inverters for solar pumping',
        image: 'assets/images/services/inverters.webp'
    },
    {
        id: 'batteries',
        section: 'solar',
        nameAr: 'بطاريات',
        nameEn: 'Batteries',
        descAr: 'بطاريات تخزين الطاقة الشمسية بمختلف أنواعها وتقنياتها.',
        descEn: 'Solar energy storage batteries of various types and technologies.',
        image: 'assets/images/services/battery.webp'
    },

    // ============ PUMPS & ACCESSORIES ============
    {
        id: 'pumps',
        section: 'pumps',
        nameAr: 'طلمبات',
        nameEn: 'Pumps',
        descAr: 'طلمبات غاطسة عالية الكفاءة من أفضل الماركات العالمية',
        descEn: 'High-efficiency submersible pumps from the best global brands',
        image: 'assets/images/services/توريد طلمبات.webp'
    },
    {
        id: 'well-group',
        section: 'pumps',
        nameAr: 'مجموعة البئر',
        nameEn: 'Well Group',
        descAr: 'مكونات البئر الأساسية والتوصيفات',
        descEn: 'Essential well components and fittings',
        image: 'assets/images/services/حفر ابار.webp'
    },
    {
        id: 'motors',
        section: 'pumps',
        nameAr: 'مواتير',
        nameEn: 'Motors',
        descAr: 'مواتير أعماق غاطسة ومتينة',
        descEn: 'Durable submersible deep well motors',
        image: 'assets/images/services/صيانه ابار المياه.webp'
    },
    {
        id: 'protection-panels',
        section: 'pumps',
        nameAr: 'لوحات الحماية',
        nameEn: 'Protection Panels',
        descAr: 'لوحات حماية للطلمبات',
        descEn: 'Protection panels for pumps',
        image: 'assets/images/services/inverters.webp'
    },
    {
        id: 'pipes',
        section: 'pumps',
        nameAr: 'مواسير',
        nameEn: 'Pipes',
        descAr: 'مواسير جميع الأنواع',
        descEn: 'All types of pipes',
        image: 'assets/images/services/مواسير بلاستيك.webp'
    },
    {
        id: 'cables',
        section: 'pumps',
        nameAr: 'كابلات',
        nameEn: 'Cables',
        descAr: 'كابلات بحرية لطلمبات الأعماق',
        descEn: 'Marine cables for deep well pumps',
        image: 'assets/images/services/كابلات طلمبات الاعماق.webp'
    },

    // ============ IRON & WELL PIPES ============
    {
        id: 'iron-pipes',
        section: 'iron-pipes-wells',
        nameAr: 'مواسير حديدية',
        nameEn: 'Iron Pipes',
        descAr: 'مواسير حفر حديدية قوية',
        descEn: 'Strong iron drilling pipes',
        image: 'assets/images/services/توريد مواسير.webp'
    }
];

window.CATALOG_PRODUCTS = [
    // ============ SOLAR PANELS ============
    {
        id: 'panel-risen-630-topcon',
        category: 'panels',
        brand: 'Risen Energy',
        nameAr: 'لوح شمسي رايزن 630 واط TOPCon ثنائي الوجه',
        nameEn: 'Risen 630W TOPCon Bifacial Solar Panel',
        image: 'assets/images/services/الواح الطاقه الشمسيه.webp',
        available: true,
        descAr: 'لوح شمسي ثنائي الوجه بتقنية TOPCon من رايزن إنرجي، يوفر كفاءة تحويل عالية ومقاومة ممتازة للظروف الجوية القاسية، مناسب لمحطات الطاقة الشمسية الكبيرة ومشاريع الري.',
        descEn: 'A bifacial TOPCon solar panel from Risen Energy, offering high conversion efficiency and excellent resistance to harsh weather conditions, suitable for large solar power stations and irrigation projects.',
        specs: [
            { labelAr: 'القدرة', labelEn: 'Power Output', value: '630 واط' },
            { labelAr: 'التقنية', labelEn: 'Technology', value: 'TOPCon ثنائي الوجه' },
            { labelAr: 'الكفاءة', labelEn: 'Efficiency', value: '22.3%' },
            { labelAr: 'الأبعاد', labelEn: 'Dimensions', value: '2384x1303x35 ملم' },
            { labelAr: 'الوزن', labelEn: 'Weight', value: '34.6 كجم' },
            { labelAr: 'الضمان', labelEn: 'Warranty', value: '25 سنة' }
        ]
    },
    {
        id: 'panel-risen-635-topcon',
        category: 'panels',
        brand: 'Risen Energy',
        nameAr: 'لوح شمسي رايزن 635 واط TOPCon ثنائي الوجه',
        nameEn: 'Risen 635W TOPCon Bifacial Solar Panel',
        image: 'assets/images/services/الواح الطاقه الشمسيه.webp',
        available: true,
        descAr: 'لوح شمسي ثنائي الوجه بتقنية TOPCon من رايزن إنرجي بقدرة أعلى، مثالي لتعظيم إنتاجية المساحة المحدودة في مشاريع الري بالطاقة الشمسية.',
        descEn: 'A higher-output bifacial TOPCon solar panel from Risen Energy, ideal for maximizing yield on limited space in solar irrigation projects.',
        specs: [
            { labelAr: 'القدرة', labelEn: 'Power Output', value: '635 واط' },
            { labelAr: 'التقنية', labelEn: 'Technology', value: 'TOPCon ثنائي الوجه' },
            { labelAr: 'الكفاءة', labelEn: 'Efficiency', value: '22.5%' },
            { labelAr: 'الأبعاد', labelEn: 'Dimensions', value: '2384x1303x35 ملم' },
            { labelAr: 'الوزن', labelEn: 'Weight', value: '34.8 كجم' },
            { labelAr: 'الضمان', labelEn: 'Warranty', value: '25 سنة' }
        ]
    },
    {
        id: 'panel-canadian-710-topbihiku7',
        category: 'panels',
        brand: 'Canadian Solar',
        nameAr: 'لوح شمسي كانادين سولار 710 واط TOPBiHiKu7 ثنائي الوجه',
        nameEn: 'Canadian Solar 710W TOPBiHiKu7 Bifacial Panel',
        image: 'assets/images/services/الواح الطاقه الشمسيه.webp',
        available: true,
        descAr: 'لوح شمسي عالي القدرة من كانادين سولار بتقنية TOPBiHiKu7 ثنائية الوجه، مصمم لمحطات الطاقة الشمسية واسعة النطاق مع أعلى معدل إنتاجية للمتر المربع.',
        descEn: 'A high-power bifacial TOPBiHiKu7 panel from Canadian Solar, designed for utility-scale solar stations with the highest output per square meter.',
        specs: [
            { labelAr: 'القدرة', labelEn: 'Power Output', value: '710 واط' },
            { labelAr: 'التقنية', labelEn: 'Technology', value: 'TOPBiHiKu7 ثنائي الوجه' },
            { labelAr: 'الكفاءة', labelEn: 'Efficiency', value: '22.8%' },
            { labelAr: 'الأبعاد', labelEn: 'Dimensions', value: '2384x1303x35 ملم' },
            { labelAr: 'الوزن', labelEn: 'Weight', value: '37.5 كجم' },
            { labelAr: 'الضمان', labelEn: 'Warranty', value: '25 سنة' }
        ]
    },
    {
        id: 'panel-jinko-630-tiger-neo',
        category: 'panels',
        brand: 'Jinko Solar',
        nameAr: 'لوح شمسي جينكو سولار Tiger Neo N-Type 630 واط',
        nameEn: 'Jinko Solar Tiger Neo N-Type 630W',
        image: 'assets/images/services/الواح الطاقه الشمسيه.webp',
        available: true,
        descAr: 'لوح شمسي من سلسلة Tiger Neo بتقنية N-Type من جينكو سولار، يجمع بين الأداء العالي في درجات الحرارة المرتفعة والتحمل الطويل الأمد.',
        descEn: 'A Tiger Neo series N-Type panel from Jinko Solar, combining high performance at elevated temperatures with long-term durability.',
        specs: [
            { labelAr: 'القدرة', labelEn: 'Power Output', value: '630 واط' },
            { labelAr: 'التقنية', labelEn: 'Technology', value: 'N-Type Tiger Neo' },
            { labelAr: 'الكفاءة', labelEn: 'Efficiency', value: '22.4%' },
            { labelAr: 'الأبعاد', labelEn: 'Dimensions', value: '2382x1134x30 ملم' },
            { labelAr: 'الوزن', labelEn: 'Weight', value: '32.6 كجم' },
            { labelAr: 'الضمان', labelEn: 'Warranty', value: '25 سنة' }
        ]
    },
    {
        id: 'panel-jinko-615-tiger-neo',
        category: 'panels',
        brand: 'Jinko Solar',
        nameAr: 'لوح شمسي جينكو سولار Tiger Neo N-Type 615 واط',
        nameEn: 'Jinko Solar Tiger Neo N-Type 615W',
        image: 'assets/images/services/الواح الطاقه الشمسيه.webp',
        available: true,
        descAr: 'خيار موثوق من سلسلة Tiger Neo بتقنية N-Type، يوفر توازناً جيداً بين السعر والأداء لمشاريع حفر وتشغيل الآبار بالطاقة الشمسية.',
        descEn: 'A reliable option from the Tiger Neo N-Type series, offering a good balance of price and performance for solar-powered well projects.',
        specs: [
            { labelAr: 'القدرة', labelEn: 'Power Output', value: '615 واط' },
            { labelAr: 'التقنية', labelEn: 'Technology', value: 'N-Type Tiger Neo' },
            { labelAr: 'الكفاءة', labelEn: 'Efficiency', value: '22.1%' },
            { labelAr: 'الأبعاد', labelEn: 'Dimensions', value: '2382x1134x30 ملم' },
            { labelAr: 'الوزن', labelEn: 'Weight', value: '32.2 كجم' },
            { labelAr: 'الضمان', labelEn: 'Warranty', value: '25 سنة' }
        ]
    },
    {
        id: 'panel-risen-650-topcon',
        category: 'panels',
        brand: 'Risen Energy',
        nameAr: 'لوح شمسي رايزن 650 واط TOPCon ثنائي الوجه',
        nameEn: 'Risen 650W TOPCon Bifacial Panel',
        image: 'assets/images/services/الواح الطاقه الشمسيه.webp',
        available: true,
        descAr: 'أعلى قدرة في تشكيلة رايزن TOPCon، مناسب لمشاريع الطاقة الشمسية واسعة النطاق التي تتطلب أقصى إنتاجية ممكنة.',
        descEn: 'The highest-wattage option in the Risen TOPCon lineup, suited for large-scale solar projects requiring maximum possible output.',
        specs: [
            { labelAr: 'القدرة', labelEn: 'Power Output', value: '650 واط' },
            { labelAr: 'التقنية', labelEn: 'Technology', value: 'TOPCon ثنائي الوجه' },
            { labelAr: 'الكفاءة', labelEn: 'Efficiency', value: '22.8%' },
            { labelAr: 'الأبعاد', labelEn: 'Dimensions', value: '2384x1303x35 ملم' },
            { labelAr: 'الوزن', labelEn: 'Weight', value: '35.1 كجم' },
            { labelAr: 'الضمان', labelEn: 'Warranty', value: '25 سنة' }
        ]
    },
    {
        id: 'panel-jinko-635-tiger-neo',
        category: 'panels',
        brand: 'Jinko Solar',
        nameAr: 'لوح شمسي جينكو سولار Tiger Neo N-Type 635 واط',
        nameEn: 'Jinko Solar Tiger Neo N-Type 635W',
        image: 'assets/images/services/الواح الطاقه الشمسيه.webp',
        available: true,
        descAr: 'إصدار محسّن من سلسلة Tiger Neo بمعدل تحويل أعلى، يقلل عدد الألواح المطلوبة للوصول لنفس القدرة الإجمالية.',
        descEn: 'An enhanced version of the Tiger Neo series with a higher conversion rate, reducing the number of panels needed to reach the same total output.',
        specs: [
            { labelAr: 'القدرة', labelEn: 'Power Output', value: '635 واط' },
            { labelAr: 'التقنية', labelEn: 'Technology', value: 'N-Type Tiger Neo' },
            { labelAr: 'الكفاءة', labelEn: 'Efficiency', value: '22.6%' },
            { labelAr: 'الأبعاد', labelEn: 'Dimensions', value: '2382x1134x30 ملم' },
            { labelAr: 'الوزن', labelEn: 'Weight', value: '32.9 كجم' },
            { labelAr: 'الضمان', labelEn: 'Warranty', value: '25 سنة' }
        ]
    },
    {
        id: 'panel-jinko-625-tiger-neo',
        category: 'panels',
        brand: 'Jinko Solar',
        nameAr: 'لوح شمسي جينكو سولار Tiger Neo N-Type 625 واط',
        nameEn: 'Jinko Solar Tiger Neo N-Type 625W',
        image: 'assets/images/services/الواح الطاقه الشمسيه.webp',
        available: true,
        descAr: 'خيار متوسط القدرة من سلسلة Tiger Neo، يجمع بين الكفاءة العالية والسعر التنافسي لمعظم مشاريع الري الزراعي.',
        descEn: 'A mid-power option from the Tiger Neo series, combining high efficiency and competitive pricing for most agricultural irrigation projects.',
        specs: [
            { labelAr: 'القدرة', labelEn: 'Power Output', value: '625 واط' },
            { labelAr: 'التقنية', labelEn: 'Technology', value: 'N-Type Tiger Neo' },
            { labelAr: 'الكفاءة', labelEn: 'Efficiency', value: '22.3%' },
            { labelAr: 'الأبعاد', labelEn: 'Dimensions', value: '2382x1134x30 ملم' },
            { labelAr: 'الوزن', labelEn: 'Weight', value: '32.5 كجم' },
            { labelAr: 'الضمان', labelEn: 'Warranty', value: '25 سنة' }
        ]
    },

    // ============ INVERTERS ============
    {
        id: 'inverter-delixi-1r5-1p5kw',
        category: 'inverters',
        brand: 'Delixi',
        nameAr: 'عاكس مضخة ديلكسي CDI-SPDG1R5S2 1.5 كيلوواط',
        nameEn: 'Delixi CDI-SPDG1R5S2 Pump Inverter 1.5kW',
        image: 'assets/images/services/inverters.webp',
        available: true,
        descAr: 'عاكس مضخة أحادي الطور من ديلكسي بقدرة 1.5 كيلوواط، مناسب لتشغيل الطلمبات الصغيرة والمتوسطة بالطاقة الشمسية مباشرة دون الحاجة لبطاريات.',
        descEn: 'A single-phase Delixi pump inverter rated at 1.5kW, suitable for running small to medium pumps directly on solar power without batteries.',
        specs: [
            { labelAr: 'القدرة', labelEn: 'Power Rating', value: '1.5 كيلوواط' },
            { labelAr: 'الطور', labelEn: 'Phase', value: 'أحادي الطور' },
            { labelAr: 'فولت الدخل', labelEn: 'Input Voltage', value: 'DC 220-450 فولت' },
            { labelAr: 'درجة الحماية', labelEn: 'Protection Rating', value: 'IP65' },
            { labelAr: 'الضمان', labelEn: 'Warranty', value: 'سنتان' }
        ]
    },
    {
        id: 'inverter-delixi-4r0-4kw',
        category: 'inverters',
        brand: 'Delixi',
        nameAr: 'عاكس مضخة ديلكسي CDI-SPDG4R0T4 4.0 كيلوواط',
        nameEn: 'Delixi CDI-SPDG4R0T4 Pump Inverter 4.0kW',
        image: 'assets/images/services/inverters.webp',
        available: true,
        descAr: 'عاكس ثلاثي الطور بقدرة 4 كيلوواط من ديلكسي، يدعم خوارزمية تتبع نقطة الاستطاعة القصوى (MPPT) لأعلى كفاءة استغلال للطاقة الشمسية.',
        descEn: 'A three-phase 4kW Delixi inverter supporting MPPT algorithm for maximum solar energy utilization efficiency.',
        specs: [
            { labelAr: 'القدرة', labelEn: 'Power Rating', value: '4.0 كيلوواط' },
            { labelAr: 'الطور', labelEn: 'Phase', value: 'ثلاثي الطور' },
            { labelAr: 'فولت الدخل', labelEn: 'Input Voltage', value: 'DC 220-800 فولت' },
            { labelAr: 'درجة الحماية', labelEn: 'Protection Rating', value: 'IP65' },
            { labelAr: 'الضمان', labelEn: 'Warranty', value: 'سنتان' }
        ]
    },
    {
        id: 'inverter-delixi-355-355kw',
        category: 'inverters',
        brand: 'Delixi',
        nameAr: 'عاكس مضخة ديلكسي CDI-SPDG355T4 355 كيلوواط',
        nameEn: 'Delixi CDI-SPDG355T4 Pump Inverter 355kW',
        image: 'assets/images/services/inverters.webp',
        available: true,
        descAr: 'عاكس صناعي عالي القدرة مخصص لمحطات ضخ المياه الكبيرة ومشاريع الري واسعة النطاق.',
        descEn: 'A high-power industrial inverter designed for large water pumping stations and large-scale irrigation projects.',
        specs: [
            { labelAr: 'القدرة', labelEn: 'Power Rating', value: '355 كيلوواط' },
            { labelAr: 'الطور', labelEn: 'Phase', value: 'ثلاثي الطور' },
            { labelAr: 'فولت الدخل', labelEn: 'Input Voltage', value: 'DC 500-820 فولت' },
            { labelAr: 'درجة الحماية', labelEn: 'Protection Rating', value: 'IP54' },
            { labelAr: 'الضمان', labelEn: 'Warranty', value: 'سنتان' }
        ]
    },
    {
        id: 'inverter-delixi-160-160kw',
        category: 'inverters',
        brand: 'Delixi',
        nameAr: 'عاكس مضخة ديلكسي CDI-SPDG160T4 160 كيلوواط',
        nameEn: 'Delixi CDI-SPDG160T4 Pump Inverter 160kW',
        image: 'assets/images/services/inverters.webp',
        available: true,
        descAr: 'عاكس متوسط إلى عالي القدرة مناسب لتشغيل مجموعات الطلمبات الغاطسة في مشاريع الاستصلاح الزراعي.',
        descEn: 'A medium-to-high power inverter suitable for running groups of submersible pumps in agricultural reclamation projects.',
        specs: [
            { labelAr: 'القدرة', labelEn: 'Power Rating', value: '160 كيلوواط' },
            { labelAr: 'الطور', labelEn: 'Phase', value: 'ثلاثي الطور' },
            { labelAr: 'فولت الدخل', labelEn: 'Input Voltage', value: 'DC 500-820 فولت' },
            { labelAr: 'درجة الحماية', labelEn: 'Protection Rating', value: 'IP54' },
            { labelAr: 'الضمان', labelEn: 'Warranty', value: 'سنتان' }
        ]
    },
    {
        id: 'inverter-delixi-015-15kw',
        category: 'inverters',
        brand: 'Delixi',
        nameAr: 'عاكس مضخة ديلكسي CDI-SPDG015T4 15 كيلوواط',
        nameEn: 'Delixi CDI-SPDG015T4 Pump Inverter 15kW',
        image: 'assets/images/services/inverters.webp',
        available: true,
        descAr: 'خيار متوازن للمزارع متوسطة الحجم، يجمع بين موثوقية التشغيل وسهولة الصيانة.',
        descEn: 'A balanced option for medium-sized farms, combining operational reliability with ease of maintenance.',
        specs: [
            { labelAr: 'القدرة', labelEn: 'Power Rating', value: '15 كيلوواط' },
            { labelAr: 'الطور', labelEn: 'Phase', value: 'ثلاثي الطور' },
            { labelAr: 'فولت الدخل', labelEn: 'Input Voltage', value: 'DC 220-800 فولت' },
            { labelAr: 'درجة الحماية', labelEn: 'Protection Rating', value: 'IP65' },
            { labelAr: 'الضمان', labelEn: 'Warranty', value: 'سنتان' }
        ]
    },
    {
        id: 'inverter-delixi-132-132kw',
        category: 'inverters',
        brand: 'Delixi',
        nameAr: 'عاكس مضخة ديلكسي CDI-SPDG132T4 132 كيلوواط',
        nameEn: 'Delixi CDI-SPDG132T4 Pump Inverter 132kW',
        image: 'assets/images/services/inverters.webp',
        available: true,
        descAr: 'عاكس ثلاثي الطور مخصص لمحطات الري الكبيرة التي تتطلب تشغيل عدة طلمبات في وقت واحد.',
        descEn: 'A three-phase inverter designed for large irrigation stations requiring multiple pumps to run simultaneously.',
        specs: [
            { labelAr: 'القدرة', labelEn: 'Power Rating', value: '132 كيلوواط' },
            { labelAr: 'الطور', labelEn: 'Phase', value: 'ثلاثي الطور' },
            { labelAr: 'فولت الدخل', labelEn: 'Input Voltage', value: 'DC 500-820 فولت' },
            { labelAr: 'درجة الحماية', labelEn: 'Protection Rating', value: 'IP54' },
            { labelAr: 'الضمان', labelEn: 'Warranty', value: 'سنتان' }
        ]
    },
    {
        id: 'inverter-delixi-400-400kw',
        category: 'inverters',
        brand: 'Delixi',
        nameAr: 'عاكس مضخة ديلكسي CDI-SPDG400T4 400 كيلوواط',
        nameEn: 'Delixi CDI-SPDG400T4 Pump Inverter 400kW',
        image: 'assets/images/services/inverters.webp',
        available: true,
        descAr: 'أعلى قدرة في تشكيلة ديلكسي، مخصص لأكبر محطات ضخ المياه بالطاقة الشمسية في المشاريع الصناعية والزراعية الكبرى.',
        descEn: 'The highest-power option in the Delixi lineup, designed for the largest solar water pumping stations in major industrial and agricultural projects.',
        specs: [
            { labelAr: 'القدرة', labelEn: 'Power Rating', value: '400 كيلوواط' },
            { labelAr: 'الطور', labelEn: 'Phase', value: 'ثلاثي الطور' },
            { labelAr: 'فولت الدخل', labelEn: 'Input Voltage', value: 'DC 500-820 فولت' },
            { labelAr: 'درجة الحماية', labelEn: 'Protection Rating', value: 'IP54' },
            { labelAr: 'الضمان', labelEn: 'Warranty', value: 'سنتان' }
        ]
    },

    // ============ BATTERIES ============
    {
        id: 'battery-livoltek-volta-200ah',
        category: 'batteries',
        brand: 'Livoltek',
        nameAr: 'بطارية جل ديب سيكل 200 أمبير 12 فولت من Livoltek',
        nameEn: 'Livoltek 200Ah 12V Deep Cycle GEL Battery',
        image: 'assets/images/services/battery.webp',
        available: true,
        descAr: 'بطارية جل عميقة التفريغ من Livoltek، مصممة لتخزين طاقة الألواح الشمسية بأمان لفترات طويلة مع أقل معدل تفريغ ذاتي.',
        descEn: 'A deep-cycle GEL battery from Livoltek, designed to safely store solar energy for long periods with a minimal self-discharge rate.',
        specs: [
            { labelAr: 'الفولت', labelEn: 'Nominal Voltage', value: '12 فولت' },
            { labelAr: 'السعة', labelEn: 'Nominal Capacity (20hr)', value: '200 أمبير/ساعة' },
            { labelAr: 'المقاومة الداخلية', labelEn: 'Internal Resistance', value: '4.3 ملي أوم' },
            { labelAr: 'الوزن', labelEn: 'Weight', value: '56.5 كجم' },
            { labelAr: 'التقنية', labelEn: 'Technology', value: 'GEL, Deep Cycle' },
            { labelAr: 'الأبعاد', labelEn: 'Dimensions', value: '522x239x216 ملم' },
            { labelAr: 'العمر التصميمي', labelEn: 'Design Life', value: '12 سنة' },
            { labelAr: 'معدل التفريغ الذاتي', labelEn: 'Self Discharge Rate', value: '3% شهرياً' }
        ]
    },
    {
        id: 'battery-livoltek-volta-100ah',
        category: 'batteries',
        brand: 'Livoltek',
        nameAr: 'بطارية جل ديب سيكل 100 أمبير 12 فولت من Livoltek',
        nameEn: 'Livoltek 100Ah 12V Deep Cycle GEL Battery',
        image: 'assets/images/services/battery.webp',
        available: true,
        descAr: 'نسخة أصغر من بطارية Livoltek GEL، مناسبة لأنظمة الطاقة الشمسية الصغيرة والمتوسطة في المزارع والمشاريع المنزلية.',
        descEn: 'A smaller version of the Livoltek GEL battery, suitable for small to medium solar systems in farms and home projects.',
        specs: [
            { labelAr: 'الفولت', labelEn: 'Nominal Voltage', value: '12 فولت' },
            { labelAr: 'السعة', labelEn: 'Nominal Capacity (20hr)', value: '100 أمبير/ساعة' },
            { labelAr: 'المقاومة الداخلية', labelEn: 'Internal Resistance', value: '6.1 ملي أوم' },
            { labelAr: 'الوزن', labelEn: 'Weight', value: '28.7 كجم' },
            { labelAr: 'التقنية', labelEn: 'Technology', value: 'GEL, Deep Cycle' },
            { labelAr: 'الأبعاد', labelEn: 'Dimensions', value: '330x173x220 ملم' },
            { labelAr: 'العمر التصميمي', labelEn: 'Design Life', value: '12 سنة' },
            { labelAr: 'معدل التفريغ الذاتي', labelEn: 'Self Discharge Rate', value: '3% شهرياً' }
        ]
    },
    {
        id: 'battery-livoltek-lithium-100ah',
        category: 'batteries',
        brand: 'Livoltek',
        nameAr: 'بطارية ليثيوم 100 أمبير 12 فولت من Livoltek',
        nameEn: 'Livoltek Lithium 100Ah 12V Battery',
        image: 'assets/images/services/battery.webp',
        available: true,
        descAr: 'بطارية ليثيوم خفيفة الوزن وعالية الكفاءة، بعمر تشغيلي أطول بكثير من بطاريات الرصاص الحمضي التقليدية.',
        descEn: 'A lightweight, high-efficiency lithium battery with a much longer operational life than traditional lead-acid batteries.',
        specs: [
            { labelAr: 'الفولت', labelEn: 'Nominal Voltage', value: '12 فولت' },
            { labelAr: 'السعة', labelEn: 'Nominal Capacity (20hr)', value: '100 أمبير/ساعة' },
            { labelAr: 'المقاومة الداخلية', labelEn: 'Internal Resistance', value: '2.8 ملي أوم' },
            { labelAr: 'الوزن', labelEn: 'Weight', value: '12.4 كجم' },
            { labelAr: 'التقنية', labelEn: 'Technology', value: 'LiFePO4' },
            { labelAr: 'الأبعاد', labelEn: 'Dimensions', value: '330x173x220 ملم' },
            { labelAr: 'العمر التصميمي', labelEn: 'Design Life', value: '15 سنة' },
            { labelAr: 'معدل التفريغ الذاتي', labelEn: 'Self Discharge Rate', value: '2% شهرياً' }
        ]
    },

    // ============ PUMPS ============
    {
        id: 'pump-shakti-10hp-6in',
        category: 'pumps',
        brand: 'Shakti',
        nameAr: 'طلمبية شاكتي 10 حصان 6 بوصة بداية 4 و 6 بوصة',
        nameEn: 'Shakti Pump 10HP 6" Starting 4" & 6"',
        image: 'assets/images/services/توريد طلمبات.webp',
        available: true,
        descAr: 'طلمبة غاطسة من شاكتي بقدرة 10 حصان، مصنوعة بالكامل من الاستانلس ستيل لمقاومة التآكل، مناسبة لآبار الري الزراعي متوسطة العمق.',
        descEn: 'A 10HP Shakti submersible pump, made entirely of stainless steel for corrosion resistance, suitable for medium-depth agricultural irrigation wells.',
        specs: [
            { labelAr: 'الماركة', labelEn: 'Brand', value: 'Shakti' },
            { labelAr: 'بلد المنشأ', labelEn: 'Country of Origin', value: 'الهند' },
            { labelAr: 'القدرة', labelEn: 'Power', value: '10 حصان' },
            { labelAr: 'الكيلوواط', labelEn: 'Kilowatts', value: '7.5 كيلو وات' },
            { labelAr: 'قطر الطلمبة', labelEn: 'Pump Diameter', value: '6 بوصة' },
            { labelAr: 'المخرج', labelEn: 'Outlet', value: '4 بوصة' },
            { labelAr: 'المادة', labelEn: 'Material', value: 'Stainless Steel' },
            { labelAr: 'بداية الطلمبة', labelEn: 'Starting Size', value: '4 و 6 بوصة' }
        ],
        extraTable: {
            titleAr: 'التصرف (م³/ساعة)',
            titleEn: 'Flow Rate (m³/hr)',
            type: 'flow',
            headerAr: ['التصرف', 'الرفع'],
            headerEn: ['Flow', 'Head'],
            rows: [
                ['78', '14m'], ['70', '22m'], ['60', '31m'], ['50', '35m'], ['40', '41m'], ['20', '52m'], ['0', '58m']
            ]
        }
    },
    {
        id: 'pump-shakti-15hp-6in',
        category: 'pumps',
        brand: 'Shakti',
        nameAr: 'طلمبية شاكتي 15 حصان 6 بوصة بداية 6 و 7 بوصة',
        nameEn: 'Shakti Pump 15HP 6" Starting 6" & 7"',
        image: 'assets/images/services/توريد طلمبات.webp',
        available: true,
        descAr: 'طلمبة غاطسة بقدرة 15 حصان من شاكتي، توفر تصرفاً أعلى للمياه وتناسب آبار الري متوسطة إلى عالية العمق.',
        descEn: 'A 15HP Shakti submersible pump, providing higher water flow and suitable for medium-to-deep irrigation wells.',
        specs: [
            { labelAr: 'الماركة', labelEn: 'Brand', value: 'Shakti' },
            { labelAr: 'بلد المنشأ', labelEn: 'Country of Origin', value: 'الهند' },
            { labelAr: 'القدرة', labelEn: 'Power', value: '15 حصان' },
            { labelAr: 'الكيلوواط', labelEn: 'Kilowatts', value: '11 كيلو وات' },
            { labelAr: 'قطر الطلمبة', labelEn: 'Pump Diameter', value: '6 بوصة' },
            { labelAr: 'المخرج', labelEn: 'Outlet', value: '4 بوصة' },
            { labelAr: 'المادة', labelEn: 'Material', value: 'Stainless Steel' },
            { labelAr: 'بداية الطلمبة', labelEn: 'Starting Size', value: '6 و 7 بوصة' }
        ],
        extraTable: {
            titleAr: 'التصرف (م³/ساعة)',
            titleEn: 'Flow Rate (m³/hr)',
            type: 'flow',
            headerAr: ['التصرف', 'الرفع'],
            headerEn: ['Flow', 'Head'],
            rows: [
                ['110', '18m'], ['95', '28m'], ['80', '38m'], ['65', '46m'], ['45', '54m'], ['25', '60m'], ['0', '66m']
            ]
        }
    },
    {
        id: 'pump-shakti-20hp-6in',
        category: 'pumps',
        brand: 'Shakti',
        nameAr: 'طلمبية شاكتي 20 حصان 6 بوصة بداية 6 بوصة',
        nameEn: 'Shakti Pump 20HP 6" Starting 6"',
        image: 'assets/images/services/توريد طلمبات.webp',
        available: true,
        descAr: 'طلمبة غاطسة بقدرة 20 حصان، مصممة لمشاريع الري واسعة النطاق التي تتطلب معدلات ضخ مرتفعة باستمرار.',
        descEn: 'A 20HP submersible pump, designed for large-scale irrigation projects requiring consistently high pumping rates.',
        specs: [
            { labelAr: 'الماركة', labelEn: 'Brand', value: 'Shakti' },
            { labelAr: 'بلد المنشأ', labelEn: 'Country of Origin', value: 'الهند' },
            { labelAr: 'القدرة', labelEn: 'Power', value: '20 حصان' },
            { labelAr: 'الكيلوواط', labelEn: 'Kilowatts', value: '15 كيلو وات' },
            { labelAr: 'قطر الطلمبة', labelEn: 'Pump Diameter', value: '6 بوصة' },
            { labelAr: 'المخرج', labelEn: 'Outlet', value: '4 بوصة' },
            { labelAr: 'المادة', labelEn: 'Material', value: 'Stainless Steel' },
            { labelAr: 'بداية الطلمبة', labelEn: 'Starting Size', value: '6 بوصة' }
        ],
        extraTable: {
            titleAr: 'التصرف (م³/ساعة)',
            titleEn: 'Flow Rate (m³/hr)',
            type: 'flow',
            headerAr: ['التصرف', 'الرفع'],
            headerEn: ['Flow', 'Head'],
            rows: [
                ['140', '20m'], ['120', '32m'], ['100', '44m'], ['80', '54m'], ['55', '62m'], ['30', '68m'], ['0', '74m']
            ]
        }
    },
    {
        id: 'pump-grundfos-25hp-6in',
        category: 'pumps',
        brand: 'Grundfos',
        nameAr: 'طلمبية جروندفوس 25 حصان 6 بوصة بداية 6 و 7 بوصة',
        nameEn: 'Grundfos Pump 25HP 6" Starting 6" & 7"',
        image: 'assets/images/services/توريد طلمبات.webp',
        available: true,
        descAr: 'طلمبة غاطسة من جروندفوس بقدرة 25 حصان، بتصميم دنماركي موثوق وكفاءة طاقة عالية لمشاريع الري الكبيرة.',
        descEn: 'A 25HP Grundfos submersible pump, with reliable Danish engineering and high energy efficiency for large irrigation projects.',
        specs: [
            { labelAr: 'الماركة', labelEn: 'Brand', value: 'Grundfos' },
            { labelAr: 'بلد المنشأ', labelEn: 'Country of Origin', value: 'الدنمارك' },
            { labelAr: 'القدرة', labelEn: 'Power', value: '25 حصان' },
            { labelAr: 'الكيلوواط', labelEn: 'Kilowatts', value: '18.5 كيلو وات' },
            { labelAr: 'قطر الطلمبة', labelEn: 'Pump Diameter', value: '6 بوصة' },
            { labelAr: 'المخرج', labelEn: 'Outlet', value: '4 بوصة' },
            { labelAr: 'المادة', labelEn: 'Material', value: 'Stainless Steel' },
            { labelAr: 'بداية الطلمبة', labelEn: 'Starting Size', value: '6 و 7 بوصة' }
        ],
        extraTable: {
            titleAr: 'التصرف (م³/ساعة)',
            titleEn: 'Flow Rate (m³/hr)',
            type: 'flow',
            headerAr: ['التصرف', 'الرفع'],
            headerEn: ['Flow', 'Head'],
            rows: [
                ['170', '24m'], ['150', '38m'], ['125', '50m'], ['100', '60m'], ['70', '68m'], ['40', '74m'], ['0', '80m']
            ]
        }
    },
    {
        id: 'pump-grundfos-30hp-8in',
        category: 'pumps',
        brand: 'Grundfos',
        nameAr: 'طلمبية جروندفوس 30 حصان 8 بوصة بداية 6 بوصة',
        nameEn: 'Grundfos Pump 30HP 8" Starting 6"',
        image: 'assets/images/services/توريد طلمبات.webp',
        available: true,
        descAr: 'طلمبة غاطسة بقدرة 30 حصان وقطر 8 بوصة، الخيار الأمثل للآبار عالية الإنتاجية ومشاريع الاستصلاح الزراعي الكبرى.',
        descEn: 'A 30HP, 8-inch submersible pump, the ideal choice for high-yield wells and major agricultural reclamation projects.',
        specs: [
            { labelAr: 'الماركة', labelEn: 'Brand', value: 'Grundfos' },
            { labelAr: 'بلد المنشأ', labelEn: 'Country of Origin', value: 'الدنمارك' },
            { labelAr: 'القدرة', labelEn: 'Power', value: '30 حصان' },
            { labelAr: 'الكيلوواط', labelEn: 'Kilowatts', value: '22 كيلو وات' },
            { labelAr: 'قطر الطلمبة', labelEn: 'Pump Diameter', value: '8 بوصة' },
            { labelAr: 'المخرج', labelEn: 'Outlet', value: '5 بوصة' },
            { labelAr: 'المادة', labelEn: 'Material', value: 'Stainless Steel' },
            { labelAr: 'بداية الطلمبة', labelEn: 'Starting Size', value: '6 بوصة' }
        ],
        extraTable: {
            titleAr: 'التصرف (م³/ساعة)',
            titleEn: 'Flow Rate (m³/hr)',
            type: 'flow',
            headerAr: ['التصرف', 'الرفع'],
            headerEn: ['Flow', 'Head'],
            rows: [
                ['210', '26m'], ['185', '42m'], ['155', '56m'], ['120', '66m'], ['85', '74m'], ['45', '80m'], ['0', '86m']
            ]
        }
    },
    {
        id: 'pump-grundfos-3hp-4in',
        category: 'pumps',
        brand: 'Grundfos',
        nameAr: 'طلمبية جروندفوس 3 حصان 4 بوصة',
        nameEn: 'Grundfos Pump 3HP 4"',
        image: 'assets/images/services/توريد طلمبات.webp',
        available: true,
        descAr: 'طلمبة غاطسة صغيرة بقدرة 3 حصان، مناسبة للآبار المنزلية والمزارع الصغيرة.',
        descEn: 'A small 3HP submersible pump, suitable for home wells and small farms.',
        specs: [
            { labelAr: 'الماركة', labelEn: 'Brand', value: 'Grundfos' },
            { labelAr: 'بلد المنشأ', labelEn: 'Country of Origin', value: 'الدنمارك' },
            { labelAr: 'القدرة', labelEn: 'Power', value: '3 حصان' },
            { labelAr: 'الكيلوواط', labelEn: 'Kilowatts', value: '2.2 كيلو وات' },
            { labelAr: 'قطر الطلمبة', labelEn: 'Pump Diameter', value: '4 بوصة' },
            { labelAr: 'المخرج', labelEn: 'Outlet', value: '2 بوصة' },
            { labelAr: 'المادة', labelEn: 'Material', value: 'Stainless Steel' },
            { labelAr: 'بداية الطلمبة', labelEn: 'Starting Size', value: '4 بوصة' }
        ],
        extraTable: {
            titleAr: 'التصرف (م³/ساعة)',
            titleEn: 'Flow Rate (m³/hr)',
            type: 'flow',
            headerAr: ['التصرف', 'الرفع'],
            headerEn: ['Flow', 'Head'],
            rows: [
                ['18', '10m'], ['15', '16m'], ['12', '22m'], ['8', '27m'], ['4', '31m'], ['0', '34m']
            ]
        }
    },
    {
        id: 'pump-shakti-12r5hp-6in',
        category: 'pumps',
        brand: 'Shakti',
        nameAr: 'طلمبية شاكتي 12.5 حصان 6 بوصة بداية 6 بوصة',
        nameEn: 'Shakti Pump 12.5HP 6" Starting 6"',
        image: 'assets/images/services/توريد طلمبات.webp',
        available: true,
        descAr: 'طلمبة غاطسة متوسطة القدرة من شاكتي، خيار متوازن بين التكلفة ومعدل الضخ لمزارع المساحات المتوسطة.',
        descEn: 'A mid-power Shakti submersible pump, a balanced choice between cost and flow rate for medium-sized farms.',
        specs: [
            { labelAr: 'الماركة', labelEn: 'Brand', value: 'Shakti' },
            { labelAr: 'بلد المنشأ', labelEn: 'Country of Origin', value: 'الهند' },
            { labelAr: 'القدرة', labelEn: 'Power', value: '12.5 حصان' },
            { labelAr: 'الكيلوواط', labelEn: 'Kilowatts', value: '9.3 كيلو وات' },
            { labelAr: 'قطر الطلمبة', labelEn: 'Pump Diameter', value: '6 بوصة' },
            { labelAr: 'المخرج', labelEn: 'Outlet', value: '4 بوصة' },
            { labelAr: 'المادة', labelEn: 'Material', value: 'Stainless Steel' },
            { labelAr: 'بداية الطلمبة', labelEn: 'Starting Size', value: '6 بوصة' }
        ],
        extraTable: {
            titleAr: 'التصرف (م³/ساعة)',
            titleEn: 'Flow Rate (m³/hr)',
            type: 'flow',
            headerAr: ['التصرف', 'الرفع'],
            headerEn: ['Flow', 'Head'],
            rows: [
                ['95', '16m'], ['82', '25m'], ['68', '34m'], ['55', '41m'], ['35', '47m'], ['15', '51m'], ['0', '55m']
            ]
        }
    },
    {
        id: 'pump-shakti-17r5hp-6in',
        category: 'pumps',
        brand: 'Shakti',
        nameAr: 'طلمبية شاكتي 17.5 حصان 6 بوصة بداية 6 بوصة',
        nameEn: 'Shakti Pump 17.5HP 6" Starting 6"',
        image: 'assets/images/services/توريد طلمبات.webp',
        available: true,
        descAr: 'طلمبة غاطسة بقدرة 17.5 حصان، توفر معدل ضخ مرتفع مع استهلاك طاقة محسّن مقارنة بالفئة الأعلى.',
        descEn: 'A 17.5HP submersible pump, offering a high flow rate with optimized power consumption compared to the higher tier.',
        specs: [
            { labelAr: 'الماركة', labelEn: 'Brand', value: 'Shakti' },
            { labelAr: 'بلد المنشأ', labelEn: 'Country of Origin', value: 'الهند' },
            { labelAr: 'القدرة', labelEn: 'Power', value: '17.5 حصان' },
            { labelAr: 'الكيلوواط', labelEn: 'Kilowatts', value: '13 كيلو وات' },
            { labelAr: 'قطر الطلمبة', labelEn: 'Pump Diameter', value: '6 بوصة' },
            { labelAr: 'المخرج', labelEn: 'Outlet', value: '4 بوصة' },
            { labelAr: 'المادة', labelEn: 'Material', value: 'Stainless Steel' },
            { labelAr: 'بداية الطلمبة', labelEn: 'Starting Size', value: '6 بوصة' }
        ],
        extraTable: {
            titleAr: 'التصرف (م³/ساعة)',
            titleEn: 'Flow Rate (m³/hr)',
            type: 'flow',
            headerAr: ['التصرف', 'الرفع'],
            headerEn: ['Flow', 'Head'],
            rows: [
                ['125', '19m'], ['108', '30m'], ['90', '40m'], ['72', '48m'], ['50', '55m'], ['28', '60m'], ['0', '64m']
            ]
        }
    },

    // ============ MOTORS ============
    {
        id: 'motor-shakti-10hp-6in',
        category: 'motors',
        brand: 'Shakti',
        nameAr: 'موتور غاطس شاكتي 10 حصان 6 بوصة',
        nameEn: 'Shakti Submersible Motor 10HP 6"',
        image: 'assets/images/services/صيانه ابار المياه.webp',
        available: true,
        descAr: 'موتور غاطس بقدرة 10 حصان من شاكتي، مقاوم للرمال والاهتزاز، مصمم للعمل المستمر في آبار المياه الجوفية.',
        descEn: 'A 10HP Shakti submersible motor, sand and vibration resistant, designed for continuous operation in groundwater wells.',
        specs: [
            { labelAr: 'الماركة', labelEn: 'Brand', value: 'Shakti' },
            { labelAr: 'بلد المنشأ', labelEn: 'Country of Origin', value: 'الهند' },
            { labelAr: 'القدرة', labelEn: 'Power', value: '10 حصان' },
            { labelAr: 'الكيلوواط', labelEn: 'Kilowatts', value: '7.5 كيلو وات' },
            { labelAr: 'القطر', labelEn: 'Diameter', value: '6 بوصة' },
            { labelAr: 'الحمل المحوري', labelEn: 'Thrust Load', value: 'kN 35' },
            { labelAr: 'تحمل الحرارة', labelEn: 'Heat Tolerance', value: '60 درجة مئوية' }
        ],
        extraTable: {
            titleAr: 'بيانات التشغيل',
            titleEn: 'Operating Data',
            type: 'operating',
            groups: [
                {
                    labelAr: 'عند جهد 380 فولت', labelEn: 'At 380V', rows: [
                        { labelAr: 'سرعة الدوران', labelEn: 'Rotation Speed', value: '2890 لفة/دقيقة' },
                        { labelAr: 'أمبير بدء الحركة', labelEn: 'Starting Current', value: '620 أمبير' },
                        { labelAr: 'أمبير التشغيل الطبيعي', labelEn: 'Running Current', value: '160 أمبير' }
                    ]
                },
                {
                    labelAr: 'عند جهد 400 فولت', labelEn: 'At 400V', rows: [
                        { labelAr: 'سرعة الدوران', labelEn: 'Rotation Speed', value: '2905 لفة/دقيقة' },
                        { labelAr: 'أمبير بدء الحركة', labelEn: 'Starting Current', value: '595 أمبير' },
                        { labelAr: 'أمبير التشغيل الطبيعي', labelEn: 'Running Current', value: '154 أمبير' }
                    ]
                },
                {
                    labelAr: 'عند جهد 415 فولت', labelEn: 'At 415V', rows: [
                        { labelAr: 'سرعة الدوران', labelEn: 'Rotation Speed', value: '2915 لفة/دقيقة' },
                        { labelAr: 'أمبير بدء الحركة', labelEn: 'Starting Current', value: '578 أمبير' },
                        { labelAr: 'أمبير التشغيل الطبيعي', labelEn: 'Running Current', value: '150 أمبير' }
                    ]
                }
            ]
        }
    },
    {
        id: 'motor-shakti-15hp-6in',
        category: 'motors',
        brand: 'Shakti',
        nameAr: 'موتور غاطس شاكتي 15 حصان 6 بوصة',
        nameEn: 'Shakti Submersible Motor 15HP 6"',
        image: 'assets/images/services/صيانه ابار المياه.webp',
        available: true,
        descAr: 'موتور غاطس بقدرة 15 حصان، يوفر عزماً أعلى لتشغيل الطلمبات ذات الرفع المرتفع.',
        descEn: 'A 15HP submersible motor, providing higher torque for pumps with high lift requirements.',
        specs: [
            { labelAr: 'الماركة', labelEn: 'Brand', value: 'Shakti' },
            { labelAr: 'بلد المنشأ', labelEn: 'Country of Origin', value: 'الهند' },
            { labelAr: 'القدرة', labelEn: 'Power', value: '15 حصان' },
            { labelAr: 'الكيلوواط', labelEn: 'Kilowatts', value: '11 كيلو وات' },
            { labelAr: 'القطر', labelEn: 'Diameter', value: '6 بوصة' },
            { labelAr: 'الحمل المحوري', labelEn: 'Thrust Load', value: 'kN 42' },
            { labelAr: 'تحمل الحرارة', labelEn: 'Heat Tolerance', value: '60 درجة مئوية' }
        ],
        extraTable: {
            titleAr: 'بيانات التشغيل',
            titleEn: 'Operating Data',
            type: 'operating',
            groups: [
                {
                    labelAr: 'عند جهد 380 فولت', labelEn: 'At 380V', rows: [
                        { labelAr: 'سرعة الدوران', labelEn: 'Rotation Speed', value: '2890 لفة/دقيقة' },
                        { labelAr: 'أمبير بدء الحركة', labelEn: 'Starting Current', value: '870 أمبير' },
                        { labelAr: 'أمبير التشغيل الطبيعي', labelEn: 'Running Current', value: '224 أمبير' }
                    ]
                },
                {
                    labelAr: 'عند جهد 400 فولت', labelEn: 'At 400V', rows: [
                        { labelAr: 'سرعة الدوران', labelEn: 'Rotation Speed', value: '2905 لفة/دقيقة' },
                        { labelAr: 'أمبير بدء الحركة', labelEn: 'Starting Current', value: '835 أمبير' },
                        { labelAr: 'أمبير التشغيل الطبيعي', labelEn: 'Running Current', value: '215 أمبير' }
                    ]
                },
                {
                    labelAr: 'عند جهد 415 فولت', labelEn: 'At 415V', rows: [
                        { labelAr: 'سرعة الدوران', labelEn: 'Rotation Speed', value: '2915 لفة/دقيقة' },
                        { labelAr: 'أمبير بدء الحركة', labelEn: 'Starting Current', value: '805 أمبير' },
                        { labelAr: 'أمبير التشغيل الطبيعي', labelEn: 'Running Current', value: '208 أمبير' }
                    ]
                }
            ]
        }
    },
    {
        id: 'motor-grundfos-20hp-8in',
        category: 'motors',
        brand: 'Grundfos',
        nameAr: 'موتور غاطس جروندفوس 20 حصان 8 بوصة',
        nameEn: 'Grundfos Submersible Motor 20HP 8"',
        image: 'assets/images/services/صيانه ابار المياه.webp',
        available: true,
        descAr: 'موتور غاطس جروندفوس بقدرة 20 حصان وقطر 8 بوصة، بمعايير جودة أوروبية للاستخدام الصناعي الشاق.',
        descEn: 'A 20HP, 8-inch Grundfos submersible motor, built to European quality standards for heavy industrial use.',
        specs: [
            { labelAr: 'الماركة', labelEn: 'Brand', value: 'Grundfos' },
            { labelAr: 'بلد المنشأ', labelEn: 'Country of Origin', value: 'الدنمارك' },
            { labelAr: 'القدرة', labelEn: 'Power', value: '20 حصان' },
            { labelAr: 'الكيلوواط', labelEn: 'Kilowatts', value: '15 كيلو وات' },
            { labelAr: 'القطر', labelEn: 'Diameter', value: '8 بوصة' },
            { labelAr: 'الحمل المحوري', labelEn: 'Thrust Load', value: 'kN 55' },
            { labelAr: 'تحمل الحرارة', labelEn: 'Heat Tolerance', value: '65 درجة مئوية' }
        ],
        extraTable: {
            titleAr: 'بيانات التشغيل',
            titleEn: 'Operating Data',
            type: 'operating',
            groups: [
                {
                    labelAr: 'عند جهد 380 فولت', labelEn: 'At 380V', rows: [
                        { labelAr: 'سرعة الدوران', labelEn: 'Rotation Speed', value: '2900 لفة/دقيقة' },
                        { labelAr: 'أمبير بدء الحركة', labelEn: 'Starting Current', value: '1120 أمبير' },
                        { labelAr: 'أمبير التشغيل الطبيعي', labelEn: 'Running Current', value: '288 أمبير' }
                    ]
                },
                {
                    labelAr: 'عند جهد 400 فولت', labelEn: 'At 400V', rows: [
                        { labelAr: 'سرعة الدوران', labelEn: 'Rotation Speed', value: '2912 لفة/دقيقة' },
                        { labelAr: 'أمبير بدء الحركة', labelEn: 'Starting Current', value: '1075 أمبير' },
                        { labelAr: 'أمبير التشغيل الطبيعي', labelEn: 'Running Current', value: '277 أمبير' }
                    ]
                },
                {
                    labelAr: 'عند جهد 415 فولت', labelEn: 'At 415V', rows: [
                        { labelAr: 'سرعة الدوران', labelEn: 'Rotation Speed', value: '2920 لفة/دقيقة' },
                        { labelAr: 'أمبير بدء الحركة', labelEn: 'Starting Current', value: '1040 أمبير' },
                        { labelAr: 'أمبير التشغيل الطبيعي', labelEn: 'Running Current', value: '268 أمبير' }
                    ]
                }
            ]
        }
    },
    {
        id: 'motor-grundfos-25hp-8in',
        category: 'motors',
        brand: 'Grundfos',
        nameAr: 'موتور غاطس جروندفوس 25 حصان 8 بوصة',
        nameEn: 'Grundfos Submersible Motor 25HP 8"',
        image: 'assets/images/services/صيانه ابار المياه.webp',
        available: true,
        descAr: 'موتور غاطس بقدرة 25 حصان من جروندفوس، مناسب لتشغيل الطلمبات كبيرة السعة في المشاريع الصناعية والزراعية.',
        descEn: 'A 25HP Grundfos submersible motor, suitable for driving high-capacity pumps in industrial and agricultural projects.',
        specs: [
            { labelAr: 'الماركة', labelEn: 'Brand', value: 'Grundfos' },
            { labelAr: 'بلد المنشأ', labelEn: 'Country of Origin', value: 'الدنمارك' },
            { labelAr: 'القدرة', labelEn: 'Power', value: '25 حصان' },
            { labelAr: 'الكيلوواط', labelEn: 'Kilowatts', value: '18.5 كيلو وات' },
            { labelAr: 'القطر', labelEn: 'Diameter', value: '8 بوصة' },
            { labelAr: 'الحمل المحوري', labelEn: 'Thrust Load', value: 'kN 62' },
            { labelAr: 'تحمل الحرارة', labelEn: 'Heat Tolerance', value: '65 درجة مئوية' }
        ],
        extraTable: {
            titleAr: 'بيانات التشغيل',
            titleEn: 'Operating Data',
            type: 'operating',
            groups: [
                {
                    labelAr: 'عند جهد 380 فولت', labelEn: 'At 380V', rows: [
                        { labelAr: 'سرعة الدوران', labelEn: 'Rotation Speed', value: '2900 لفة/دقيقة' },
                        { labelAr: 'أمبير بدء الحركة', labelEn: 'Starting Current', value: '1380 أمبير' },
                        { labelAr: 'أمبير التشغيل الطبيعي', labelEn: 'Running Current', value: '352 أمبير' }
                    ]
                },
                {
                    labelAr: 'عند جهد 400 فولت', labelEn: 'At 400V', rows: [
                        { labelAr: 'سرعة الدوران', labelEn: 'Rotation Speed', value: '2912 لفة/دقيقة' },
                        { labelAr: 'أمبير بدء الحركة', labelEn: 'Starting Current', value: '1325 أمبير' },
                        { labelAr: 'أمبير التشغيل الطبيعي', labelEn: 'Running Current', value: '338 أمبير' }
                    ]
                },
                {
                    labelAr: 'عند جهد 415 فولت', labelEn: 'At 415V', rows: [
                        { labelAr: 'سرعة الدوران', labelEn: 'Rotation Speed', value: '2920 لفة/دقيقة' },
                        { labelAr: 'أمبير بدء الحركة', labelEn: 'Starting Current', value: '1280 أمبير' },
                        { labelAr: 'أمبير التشغيل الطبيعي', labelEn: 'Running Current', value: '325 أمبير' }
                    ]
                }
            ]
        }
    },
    {
        id: 'motor-shakti-30hp-10in',
        category: 'motors',
        brand: 'Shakti',
        nameAr: 'موتور غاطس شاكتي 30 حصان 10 بوصة',
        nameEn: 'Shakti Submersible Motor 30HP 10"',
        image: 'assets/images/services/صيانه ابار المياه.webp',
        available: true,
        descAr: 'موتور غاطس بقدرة 30 حصان وقطر 10 بوصة، الخيار الأمثل لآبار الإنتاج العالي.',
        descEn: 'A 30HP, 10-inch submersible motor, the optimal choice for high-yield production wells.',
        specs: [
            { labelAr: 'الماركة', labelEn: 'Brand', value: 'Shakti' },
            { labelAr: 'بلد المنشأ', labelEn: 'Country of Origin', value: 'الهند' },
            { labelAr: 'القدرة', labelEn: 'Power', value: '30 حصان' },
            { labelAr: 'الكيلوواط', labelEn: 'Kilowatts', value: '22 كيلو وات' },
            { labelAr: 'القطر', labelEn: 'Diameter', value: '10 بوصة' },
            { labelAr: 'الحمل المحوري', labelEn: 'Thrust Load', value: 'kN 78' },
            { labelAr: 'تحمل الحرارة', labelEn: 'Heat Tolerance', value: '60 درجة مئوية' }
        ],
        extraTable: {
            titleAr: 'بيانات التشغيل',
            titleEn: 'Operating Data',
            type: 'operating',
            groups: [
                {
                    labelAr: 'عند جهد 380 فولت', labelEn: 'At 380V', rows: [
                        { labelAr: 'سرعة الدوران', labelEn: 'Rotation Speed', value: '2890 لفة/دقيقة' },
                        { labelAr: 'أمبير بدء الحركة', labelEn: 'Starting Current', value: '1640 أمبير' },
                        { labelAr: 'أمبير التشغيل الطبيعي', labelEn: 'Running Current', value: '418 أمبير' }
                    ]
                },
                {
                    labelAr: 'عند جهد 400 فولت', labelEn: 'At 400V', rows: [
                        { labelAr: 'سرعة الدوران', labelEn: 'Rotation Speed', value: '2905 لفة/دقيقة' },
                        { labelAr: 'أمبير بدء الحركة', labelEn: 'Starting Current', value: '1570 أمبير' },
                        { labelAr: 'أمبير التشغيل الطبيعي', labelEn: 'Running Current', value: '400 أمبير' }
                    ]
                },
                {
                    labelAr: 'عند جهد 415 فولت', labelEn: 'At 415V', rows: [
                        { labelAr: 'سرعة الدوران', labelEn: 'Rotation Speed', value: '2915 لفة/دقيقة' },
                        { labelAr: 'أمبير بدء الحركة', labelEn: 'Starting Current', value: '1512 أمبير' },
                        { labelAr: 'أمبير التشغيل الطبيعي', labelEn: 'Running Current', value: '385 أمبير' }
                    ]
                }
            ]
        }
    },
    {
        id: 'motor-grundfos-5hp-4in',
        category: 'motors',
        brand: 'Grundfos',
        nameAr: 'موتور غاطس جروندفوس 5 حصان 4 بوصة',
        nameEn: 'Grundfos Submersible Motor 5HP 4"',
        image: 'assets/images/services/صيانه ابار المياه.webp',
        available: true,
        descAr: 'موتور غاطس صغير بقدرة 5 حصان من جروندفوس، مناسب للآبار المنزلية والمزارع الصغيرة.',
        descEn: 'A small 5HP Grundfos submersible motor, suitable for home wells and small farms.',
        specs: [
            { labelAr: 'الماركة', labelEn: 'Brand', value: 'Grundfos' },
            { labelAr: 'بلد المنشأ', labelEn: 'Country of Origin', value: 'الدنمارك' },
            { labelAr: 'القدرة', labelEn: 'Power', value: '5 حصان' },
            { labelAr: 'الكيلوواط', labelEn: 'Kilowatts', value: '3.7 كيلو وات' },
            { labelAr: 'القطر', labelEn: 'Diameter', value: '4 بوصة' },
            { labelAr: 'الحمل المحوري', labelEn: 'Thrust Load', value: 'kN 18' },
            { labelAr: 'تحمل الحرارة', labelEn: 'Heat Tolerance', value: '55 درجة مئوية' }
        ],
        extraTable: {
            titleAr: 'بيانات التشغيل',
            titleEn: 'Operating Data',
            type: 'operating',
            groups: [
                {
                    labelAr: 'عند جهد 380 فولت', labelEn: 'At 380V', rows: [
                        { labelAr: 'سرعة الدوران', labelEn: 'Rotation Speed', value: '2850 لفة/دقيقة' },
                        { labelAr: 'أمبير بدء الحركة', labelEn: 'Starting Current', value: '310 أمبير' },
                        { labelAr: 'أمبير التشغيل الطبيعي', labelEn: 'Running Current', value: '82 أمبير' }
                    ]
                },
                {
                    labelAr: 'عند جهد 400 فولت', labelEn: 'At 400V', rows: [
                        { labelAr: 'سرعة الدوران', labelEn: 'Rotation Speed', value: '2865 لفة/دقيقة' },
                        { labelAr: 'أمبير بدء الحركة', labelEn: 'Starting Current', value: '295 أمبير' },
                        { labelAr: 'أمبير التشغيل الطبيعي', labelEn: 'Running Current', value: '78 أمبير' }
                    ]
                },
                {
                    labelAr: 'عند جهد 415 فولت', labelEn: 'At 415V', rows: [
                        { labelAr: 'سرعة الدوران', labelEn: 'Rotation Speed', value: '2878 لفة/دقيقة' },
                        { labelAr: 'أمبير بدء الحركة', labelEn: 'Starting Current', value: '284 أمبير' },
                        { labelAr: 'أمبير التشغيل الطبيعي', labelEn: 'Running Current', value: '75 أمبير' }
                    ]
                }
            ]
        }
    },
    {
        id: 'motor-shakti-7r5hp-4in',
        category: 'motors',
        brand: 'Shakti',
        nameAr: 'موتور غاطس شاكتي 7.5 حصان 4 بوصة',
        nameEn: 'Shakti Submersible Motor 7.5HP 4"',
        image: 'assets/images/services/صيانه ابار المياه.webp',
        available: true,
        descAr: 'موتور غاطس بقدرة 7.5 حصان، خيار موثوق للآبار متوسطة العمق بتكلفة معقولة.',
        descEn: 'A 7.5HP submersible motor, a reliable choice for medium-depth wells at a reasonable cost.',
        specs: [
            { labelAr: 'الماركة', labelEn: 'Brand', value: 'Shakti' },
            { labelAr: 'بلد المنشأ', labelEn: 'Country of Origin', value: 'الهند' },
            { labelAr: 'القدرة', labelEn: 'Power', value: '7.5 حصان' },
            { labelAr: 'الكيلوواط', labelEn: 'Kilowatts', value: '5.5 كيلو وات' },
            { labelAr: 'القطر', labelEn: 'Diameter', value: '4 بوصة' },
            { labelAr: 'الحمل المحوري', labelEn: 'Thrust Load', value: 'kN 26' },
            { labelAr: 'تحمل الحرارة', labelEn: 'Heat Tolerance', value: '55 درجة مئوية' }
        ],
        extraTable: {
            titleAr: 'بيانات التشغيل',
            titleEn: 'Operating Data',
            type: 'operating',
            groups: [
                {
                    labelAr: 'عند جهد 380 فولت', labelEn: 'At 380V', rows: [
                        { labelAr: 'سرعة الدوران', labelEn: 'Rotation Speed', value: '2870 لفة/دقيقة' },
                        { labelAr: 'أمبير بدء الحركة', labelEn: 'Starting Current', value: '465 أمبير' },
                        { labelAr: 'أمبير التشغيل الطبيعي', labelEn: 'Running Current', value: '120 أمبير' }
                    ]
                },
                {
                    labelAr: 'عند جهد 400 فولت', labelEn: 'At 400V', rows: [
                        { labelAr: 'سرعة الدوران', labelEn: 'Rotation Speed', value: '2885 لفة/دقيقة' },
                        { labelAr: 'أمبير بدء الحركة', labelEn: 'Starting Current', value: '445 أمبير' },
                        { labelAr: 'أمبير التشغيل الطبيعي', labelEn: 'Running Current', value: '115 أمبير' }
                    ]
                },
                {
                    labelAr: 'عند جهد 415 فولت', labelEn: 'At 415V', rows: [
                        { labelAr: 'سرعة الدوران', labelEn: 'Rotation Speed', value: '2895 لفة/دقيقة' },
                        { labelAr: 'أمبير بدء الحركة', labelEn: 'Starting Current', value: '428 أمبير' },
                        { labelAr: 'أمبير التشغيل الطبيعي', labelEn: 'Running Current', value: '112 أمبير' }
                    ]
                }
            ]
        }
    },

    // ============ WELL GROUP ============
    {
        id: 'well-iron-head',
        category: 'well-group',
        brand: 'حديد الآبار',
        nameAr: 'وش بئر حديد',
        nameEn: 'Iron Well Head',
        image: 'assets/images/services/حفر ابار.webp',
        available: true,
        descAr: 'وش بئر مصنوع من الحديد المقاوم للصدأ، يضمن غلقاً محكماً للبئر وحماية شبكة المواسير والكابلات الداخلية.',
        descEn: 'A well head made of rust-resistant iron, ensuring a tight seal for the well and protecting internal pipes and cables.',
        specs: [
            { labelAr: 'المادة', labelEn: 'Material', value: 'الحديد' },
            { labelAr: 'الأقطار المتاحة', labelEn: 'Available Diameters', value: '6, 8, 10, 12, 14 بوصة' },
            { labelAr: 'المميزات', labelEn: 'Features', value: 'قوة تحمل عالية، حماية فائقة للبئر، سهولة التركيب' }
        ]
    },
    {
        id: 'well-iron-elbow',
        category: 'well-group',
        brand: 'حديد الآبار',
        nameAr: 'كوع حديد لكظ الطرد',
        nameEn: 'Iron Discharge Elbow',
        image: 'assets/images/services/حفر ابار.webp',
        available: true,
        descAr: 'كوع حديد بفلنجة، يستخدم لتوجيه خط الطرد من الطلمبة الغاطسة بزاوية مناسبة مع أعلى متانة.',
        descEn: 'A flanged iron elbow, used to direct the discharge line from the submersible pump at a suitable angle with maximum durability.',
        specs: [
            { labelAr: 'المادة', labelEn: 'Material', value: 'الحديد الزهر' },
            { labelAr: 'الأقطار المتاحة', labelEn: 'Available Diameters', value: '4, 6, 8 بوصة' },
            { labelAr: 'المميزات', labelEn: 'Features', value: 'مقاومة للضغط العالي، سهولة الصيانة' }
        ]
    },
    {
        id: 'well-water-meter',
        category: 'well-group',
        brand: 'حديد الآبار',
        nameAr: 'عداد مياه للآبار',
        nameEn: 'Well Water Meter',
        image: 'assets/images/services/حفر ابار.webp',
        available: true,
        descAr: 'عداد مياه دقيق لقياس كميات المياه المستخرجة من البئر، مطلوب لاستيفاء اشتراطات ترخيص حفر بئر مياه.',
        descEn: 'An accurate water meter for measuring the quantities of water extracted from the well, required for meeting well drilling permit requirements.',
        specs: [
            { labelAr: 'المادة', labelEn: 'Material', value: 'برونز ونحاس' },
            { labelAr: 'الأقطار المتاحة', labelEn: 'Available Diameters', value: '2, 3, 4 بوصة' },
            { labelAr: 'المميزات', labelEn: 'Features', value: 'دقة قياس عالية، معتمد من الجهات الرسمية' }
        ]
    },
    {
        id: 'well-pump-end-cap',
        category: 'well-group',
        brand: 'حديد الآبار',
        nameAr: 'نهاية طلمبية',
        nameEn: 'Pump End Cap',
        image: 'assets/images/services/حفر ابار.webp',
        available: true,
        descAr: 'قطعة نهاية معدنية للطلمبة الغاطسة، تحمي المروحة السفلية وتمنع دخول الرواسب.',
        descEn: 'A metal end cap for the submersible pump, protecting the lower impeller and preventing sediment intrusion.',
        specs: [
            { labelAr: 'المادة', labelEn: 'Material', value: 'استانلس ستيل' },
            { labelAr: 'الأقطار المتاحة', labelEn: 'Available Diameters', value: '4, 6 بوصة' },
            { labelAr: 'المميزات', labelEn: 'Features', value: 'مقاومة كاملة للتآكل، تركيب سريع' }
        ]
    },
    {
        id: 'well-iron-valve',
        category: 'well-group',
        brand: 'حديد الآبار',
        nameAr: 'والب بئر حديد',
        nameEn: 'Iron Well Valve',
        image: 'assets/images/services/حفر ابار.webp',
        available: true,
        descAr: 'صمام حديد للتحكم في تدفق المياه من البئر، يستخدم لغلق أو فتح خط الطرد الرئيسي حسب الحاجة.',
        descEn: 'An iron valve for controlling the water flow from the well, used to open or close the main discharge line as needed.',
        specs: [
            { labelAr: 'المادة', labelEn: 'Material', value: 'الحديد الزهر' },
            { labelAr: 'الأقطار المتاحة', labelEn: 'Available Diameters', value: '4, 6, 8, 10 بوصة' },
            { labelAr: 'المميزات', labelEn: 'Features', value: 'إغلاق محكم، عمر تشغيلي طويل' }
        ]
    },
    {
        id: 'well-pump-start-fitting',
        category: 'well-group',
        brand: 'حديد الآبار',
        nameAr: 'بداية طلمبية استانلس',
        nameEn: 'Stainless Pump Start Fitting',
        image: 'assets/images/services/حفر ابار.webp',
        available: true,
        descAr: 'وصلة بداية استانلس ستيل تُركّب أعلى الطلمبة الغاطسة لتسهيل تنزيلها داخل البئر بأمان.',
        descEn: 'A stainless steel start fitting installed at the top of the submersible pump to facilitate safely lowering it into the well.',
        specs: [
            { labelAr: 'المادة', labelEn: 'Material', value: 'استانلس ستيل' },
            { labelAr: 'الأقطار المتاحة', labelEn: 'Available Diameters', value: '4, 6, 7 بوصة' },
            { labelAr: 'المميزات', labelEn: 'Features', value: 'مقاومة كاملة للصدأ، توافق مع جميع الماركات' }
        ]
    },

    // ============ PROTECTION PANELS ============
    {
        id: 'panel-himel-10hp-3phase',
        category: 'protection-panels',
        brand: 'Himel',
        nameAr: 'لوحة كنترول وحماية هيمل 10 حصان 3 فاز',
        nameEn: 'Himel Control & Protection Panel 10HP 3-Phase',
        image: 'assets/images/services/inverters.webp',
        available: true,
        descAr: 'لوحة كنترول وحماية من هيمل الفرنسية، تحمي موتور الطلمبة من التحميل الزائد وارتفاع درجة الحرارة وأعطال الفولت.',
        descEn: 'A control and protection panel from the French brand Himel, protecting the pump motor from overload, overheating, and voltage faults.',
        specs: [
            { labelAr: 'بلد المنشأ', labelEn: 'Country of Origin', value: 'فرنسا' },
            { labelAr: 'القدرة', labelEn: 'Power', value: '10 حصان' },
            { labelAr: 'الشركة المصنعة', labelEn: 'Manufacturer', value: 'Himel' },
            { labelAr: 'مصدر الطاقة', labelEn: 'Power Source', value: '3 فاز 380 فولت' }
        ]
    },
    {
        id: 'panel-himel-20hp-3phase',
        category: 'protection-panels',
        brand: 'Himel',
        nameAr: 'لوحة كنترول وحماية هيمل 20 حصان 3 فاز',
        nameEn: 'Himel Control & Protection Panel 20HP 3-Phase',
        image: 'assets/images/services/inverters.webp',
        available: true,
        descAr: 'لوحة حماية هيمل بقدرة أعلى، مناسبة لتشغيل موتورات الطلمبات متوسطة الحجم بأمان تام.',
        descEn: 'A higher-power Himel protection panel, suitable for safely operating medium-sized pump motors.',
        specs: [
            { labelAr: 'بلد المنشأ', labelEn: 'Country of Origin', value: 'فرنسا' },
            { labelAr: 'القدرة', labelEn: 'Power', value: '20 حصان' },
            { labelAr: 'الشركة المصنعة', labelEn: 'Manufacturer', value: 'Himel' },
            { labelAr: 'مصدر الطاقة', labelEn: 'Power Source', value: '3 فاز 380 فولت' }
        ]
    },
    {
        id: 'panel-himel-25hp-3phase',
        category: 'protection-panels',
        brand: 'Himel',
        nameAr: 'لوحة كنترول وحماية هيمل 25 حصان 3 فاز',
        nameEn: 'Himel Control & Protection Panel 25HP 3-Phase',
        image: 'assets/images/services/inverters.webp',
        available: true,
        descAr: 'لوحة كنترول متكاملة تشمل مؤشرات حالة التشغيل وحماية ضد الجفاف (Dry Run) لحماية الطلمبة والموتور.',
        descEn: 'An integrated control panel including operating status indicators and dry-run protection to safeguard the pump and motor.',
        specs: [
            { labelAr: 'بلد المنشأ', labelEn: 'Country of Origin', value: 'فرنسا' },
            { labelAr: 'القدرة', labelEn: 'Power', value: '25 حصان' },
            { labelAr: 'الشركة المصنعة', labelEn: 'Manufacturer', value: 'Himel' },
            { labelAr: 'مصدر الطاقة', labelEn: 'Power Source', value: '3 فاز 380 فولت' }
        ]
    },
    {
        id: 'panel-himel-30hp-3phase',
        category: 'protection-panels',
        brand: 'Himel',
        nameAr: 'لوحة كنترول وحماية هيمل 30 حصان 3 فاز',
        nameEn: 'Himel Control & Protection Panel 30HP 3-Phase',
        image: 'assets/images/services/inverters.webp',
        available: true,
        descAr: 'لوحة حماية بقدرة 30 حصان، مزودة بقواطع أوتوماتيكية عالية الجودة لضمان استمرارية التشغيل.',
        descEn: 'A 30HP protection panel, equipped with high-quality automatic breakers to ensure continuous operation.',
        specs: [
            { labelAr: 'بلد المنشأ', labelEn: 'Country of Origin', value: 'فرنسا' },
            { labelAr: 'القدرة', labelEn: 'Power', value: '30 حصان' },
            { labelAr: 'الشركة المصنعة', labelEn: 'Manufacturer', value: 'Himel' },
            { labelAr: 'مصدر الطاقة', labelEn: 'Power Source', value: '3 فاز 380 فولت' }
        ]
    },
    {
        id: 'panel-himel-50hp-3phase',
        category: 'protection-panels',
        brand: 'Himel',
        nameAr: 'لوحة كنترول وحماية هيمل 50 حصان 3 فاز',
        nameEn: 'Himel Control & Protection Panel 50HP 3-Phase',
        image: 'assets/images/services/inverters.webp',
        available: true,
        descAr: 'لوحة حماية بقدرة 50 حصان لتشغيل موتورات الطلمبات كبيرة الحجم في مشاريع الري الصناعية.',
        descEn: 'A 50HP protection panel for operating large pump motors in industrial irrigation projects.',
        specs: [
            { labelAr: 'بلد المنشأ', labelEn: 'Country of Origin', value: 'فرنسا' },
            { labelAr: 'القدرة', labelEn: 'Power', value: '50 حصان' },
            { labelAr: 'الشركة المصنعة', labelEn: 'Manufacturer', value: 'Himel' },
            { labelAr: 'مصدر الطاقة', labelEn: 'Power Source', value: '3 فاز 380 فولت' }
        ]
    },
    {
        id: 'panel-himel-75hp-3phase',
        category: 'protection-panels',
        brand: 'Himel',
        nameAr: 'لوحة كنترول وحماية هيمل 75 حصان 3 فاز',
        nameEn: 'Himel Control & Protection Panel 75HP 3-Phase',
        image: 'assets/images/services/inverters.webp',
        available: true,
        descAr: 'لوحة حماية عالية القدرة مخصصة لمحطات الضخ الكبيرة، بمكونات مطابقة لمعايير IEC.',
        descEn: 'A high-power protection panel designed for large pumping stations, with components meeting IEC standards.',
        specs: [
            { labelAr: 'بلد المنشأ', labelEn: 'Country of Origin', value: 'فرنسا' },
            { labelAr: 'القدرة', labelEn: 'Power', value: '75 حصان' },
            { labelAr: 'الشركة المصنعة', labelEn: 'Manufacturer', value: 'Himel' },
            { labelAr: 'مصدر الطاقة', labelEn: 'Power Source', value: '3 فاز 380 فولت' }
        ]
    },
    {
        id: 'panel-himel-60hp-3phase',
        category: 'protection-panels',
        brand: 'Himel',
        nameAr: 'لوحة كنترول وحماية هيمل 60 حصان 3 فاز',
        nameEn: 'Himel Control & Protection Panel 60HP 3-Phase',
        image: 'assets/images/services/inverters.webp',
        available: true,
        descAr: 'لوحة كنترول وحماية بقدرة 60 حصان، توازن جيد بين الفئة المتوسطة والكبيرة لمشاريع الاستصلاح.',
        descEn: 'A 60HP control and protection panel, a good balance between the medium and large tiers for reclamation projects.',
        specs: [
            { labelAr: 'بلد المنشأ', labelEn: 'Country of Origin', value: 'فرنسا' },
            { labelAr: 'القدرة', labelEn: 'Power', value: '60 حصان' },
            { labelAr: 'الشركة المصنعة', labelEn: 'Manufacturer', value: 'Himel' },
            { labelAr: 'مصدر الطاقة', labelEn: 'Power Source', value: '3 فاز 380 فولت' }
        ]
    },

    // ============ PIPES ============
    {
        id: 'pipe-astral-3in-17bar',
        category: 'pipes',
        brand: 'ASTRAL',
        nameAr: 'مواسير أسترال 3 ASTRAL UPVC بار 17',
        nameEn: 'ASTRAL 3" UPVC Pipe 17 Bar',
        image: 'assets/images/services/مواسير بلاستيك.webp',
        available: true,
        descAr: 'ماسورة UPVC هندية الصنع من أسترال، مقاومة للأملاح والصدأ ومناسبة لتبطين آبار المياه الجوفية.',
        descEn: 'An Indian-made UPVC pipe from ASTRAL, resistant to salts and rust, suitable for lining groundwater wells.',
        specs: [
            { labelAr: 'الماركة', labelEn: 'Brand', value: 'ASTRAL Bore Well' },
            { labelAr: 'بلد المنشأ', labelEn: 'Country of Origin', value: 'الهند' },
            { labelAr: 'القطر', labelEn: 'Diameter', value: 'Inch 3' },
            { labelAr: 'الضغط', labelEn: 'Pressure', value: '17 بار' },
            { labelAr: 'طريقة الربط', labelEn: 'Joint Type', value: 'سن وصلية' }
        ]
    },
    {
        id: 'pipe-astral-2in-17bar',
        category: 'pipes',
        brand: 'ASTRAL',
        nameAr: 'مواسير أسترال 2 ASTRAL UPVC بار 17',
        nameEn: 'ASTRAL 2" UPVC Pipe 17 Bar',
        image: 'assets/images/services/مواسير بلاستيك.webp',
        available: true,
        descAr: 'ماسورة UPVC بقطر أصغر من أسترال، مناسبة لآبار الري المنزلية والمزارع الصغيرة.',
        descEn: 'A smaller-diameter UPVC pipe from ASTRAL, suitable for home irrigation wells and small farms.',
        specs: [
            { labelAr: 'الماركة', labelEn: 'Brand', value: 'ASTRAL Bore Well' },
            { labelAr: 'بلد المنشأ', labelEn: 'Country of Origin', value: 'الهند' },
            { labelAr: 'القطر', labelEn: 'Diameter', value: 'Inch 2' },
            { labelAr: 'الضغط', labelEn: 'Pressure', value: '17 بار' },
            { labelAr: 'طريقة الربط', labelEn: 'Joint Type', value: 'سن وصلية' }
        ]
    },
    {
        id: 'pipe-astral-5in-26bar',
        category: 'pipes',
        brand: 'ASTRAL',
        nameAr: 'مواسير أسترال 5 ASTRAL UPVC بار 26',
        nameEn: 'ASTRAL 5" UPVC Pipe 26 Bar',
        image: 'assets/images/services/مواسير بلاستيك.webp',
        available: true,
        descAr: 'ماسورة UPVC عالية الضغط من أسترال، مناسبة للآبار العميقة ذات الضغط التشغيلي المرتفع.',
        descEn: 'A high-pressure UPVC pipe from ASTRAL, suitable for deep wells with high operating pressure.',
        specs: [
            { labelAr: 'الماركة', labelEn: 'Brand', value: 'ASTRAL Bore Well' },
            { labelAr: 'بلد المنشأ', labelEn: 'Country of Origin', value: 'الهند' },
            { labelAr: 'القطر', labelEn: 'Diameter', value: 'Inch 5' },
            { labelAr: 'الضغط', labelEn: 'Pressure', value: '26 بار' },
            { labelAr: 'طريقة الربط', labelEn: 'Joint Type', value: 'سن وصلية' }
        ]
    },
    {
        id: 'pipe-astral-6in-16bar',
        category: 'pipes',
        brand: 'ASTRAL',
        nameAr: 'مواسير أسترال 6 ASTRAL UPVC بار 16',
        nameEn: 'ASTRAL 6" UPVC Pipe 16 Bar',
        image: 'assets/images/services/مواسير بلاستيك.webp',
        available: true,
        descAr: 'ماسورة UPVC كبيرة القطر من أسترال، مصممة لآبار الإنتاجية العالية.',
        descEn: 'A large-diameter UPVC pipe from ASTRAL, designed for high-yield wells.',
        specs: [
            { labelAr: 'الماركة', labelEn: 'Brand', value: 'ASTRAL Bore Well' },
            { labelAr: 'بلد المنشأ', labelEn: 'Country of Origin', value: 'الهند' },
            { labelAr: 'القطر', labelEn: 'Diameter', value: 'Inch 6' },
            { labelAr: 'الضغط', labelEn: 'Pressure', value: '16 بار' },
            { labelAr: 'طريقة الربط', labelEn: 'Joint Type', value: 'سن وصلية' }
        ]
    },
    {
        id: 'pipe-faba-2in-16bar',
        category: 'pipes',
        brand: 'FABA',
        nameAr: 'مواسير فابا 2 بوصة 16 بار',
        nameEn: 'FABA 2" Pipe 16 Bar',
        image: 'assets/images/services/مواسير بلاستيك.webp',
        available: true,
        descAr: 'ماسورة فابا اقتصادية بقطر 2 بوصة، خيار موثوق للمشاريع محدودة الميزانية.',
        descEn: 'An economical FABA pipe with a 2-inch diameter, a reliable option for budget-conscious projects.',
        specs: [
            { labelAr: 'الماركة', labelEn: 'Brand', value: 'FABA' },
            { labelAr: 'بلد المنشأ', labelEn: 'Country of Origin', value: 'مصر' },
            { labelAr: 'القطر', labelEn: 'Diameter', value: 'Inch 2' },
            { labelAr: 'الضغط', labelEn: 'Pressure', value: '16 بار' },
            { labelAr: 'طريقة الربط', labelEn: 'Joint Type', value: 'سن وصلية' }
        ]
    },
    {
        id: 'pipe-faba-3in-16bar',
        category: 'pipes',
        brand: 'FABA',
        nameAr: 'مواسير فابا 3 بوصة 16 بار',
        nameEn: 'FABA 3" Pipe 16 Bar',
        image: 'assets/images/services/مواسير بلاستيك.webp',
        available: true,
        descAr: 'ماسورة فابا بقطر 3 بوصة، متوازنة بين الجودة والسعر لمعظم أعمال حفر الآبار الزراعية.',
        descEn: 'A 3-inch FABA pipe, balanced between quality and price for most agricultural well drilling work.',
        specs: [
            { labelAr: 'الماركة', labelEn: 'Brand', value: 'FABA' },
            { labelAr: 'بلد المنشأ', labelEn: 'Country of Origin', value: 'مصر' },
            { labelAr: 'القطر', labelEn: 'Diameter', value: 'Inch 3' },
            { labelAr: 'الضغط', labelEn: 'Pressure', value: '16 بار' },
            { labelAr: 'طريقة الربط', labelEn: 'Joint Type', value: 'سن وصلية' }
        ]
    },
    {
        id: 'pipe-faba-2in-26bar',
        category: 'pipes',
        brand: 'FABA',
        nameAr: 'مواسير فابا 2 بوصة 26 بار',
        nameEn: 'FABA 2" Pipe 26 Bar',
        image: 'assets/images/services/مواسير بلاستيك.webp',
        available: true,
        descAr: 'نسخة عالية الضغط من ماسورة فابا 2 بوصة، مناسبة للآبار الأعمق ذات الضغط التشغيلي المرتفع.',
        descEn: 'A high-pressure version of the FABA 2-inch pipe, suitable for deeper wells with higher operating pressure.',
        specs: [
            { labelAr: 'الماركة', labelEn: 'Brand', value: 'FABA' },
            { labelAr: 'بلد المنشأ', labelEn: 'Country of Origin', value: 'مصر' },
            { labelAr: 'القطر', labelEn: 'Diameter', value: 'Inch 2' },
            { labelAr: 'الضغط', labelEn: 'Pressure', value: '26 بار' },
            { labelAr: 'طريقة الربط', labelEn: 'Joint Type', value: 'سن وصلية' }
        ]
    },
    {
        id: 'pipe-faba-6in-26bar',
        category: 'pipes',
        brand: 'FABA',
        nameAr: 'مواسير فابا 6 بوصة 26 بار',
        nameEn: 'FABA 6" Pipe 26 Bar',
        image: 'assets/images/services/مواسير بلاستيك.webp',
        available: true,
        descAr: 'ماسورة فابا كبيرة القطر وعالية الضغط، مناسبة لآبار الإنتاج الصناعي واسعة النطاق.',
        descEn: 'A large-diameter, high-pressure FABA pipe, suitable for large-scale industrial production wells.',
        specs: [
            { labelAr: 'الماركة', labelEn: 'Brand', value: 'FABA' },
            { labelAr: 'بلد المنشأ', labelEn: 'Country of Origin', value: 'مصر' },
            { labelAr: 'القطر', labelEn: 'Diameter', value: 'Inch 6' },
            { labelAr: 'الضغط', labelEn: 'Pressure', value: '26 بار' },
            { labelAr: 'طريقة الربط', labelEn: 'Joint Type', value: 'سن وصلية' }
        ]
    },

    // ============ CABLES ============
    {
        id: 'cable-aristoncavi-1x16',
        category: 'cables',
        brand: 'ARISTONCAVI',
        nameAr: 'كابل بحري أريستون كافي 1x16 مم إيطالي',
        nameEn: 'ARISTONCAVI 1x16mm Italian Marine Cable',
        image: 'assets/images/services/كابلات طلمبات الاعماق.webp',
        available: true,
        descAr: 'كابل بحري إيطالي الصنع من أريستون كافي، معزول بالكامل لضمان التشغيل الآمن تحت الماء لطلمبات الأعماق.',
        descEn: 'An Italian-made marine cable from ARISTONCAVI, fully insulated to ensure safe underwater operation for deep well pumps.',
        specs: [
            { labelAr: 'بلد المنشأ', labelEn: 'Country of Origin', value: 'إيطاليا' },
            { labelAr: 'العزل', labelEn: 'Insulation', value: 'PVC فئة T12' },
            { labelAr: 'المقطع', labelEn: 'Cross Section', value: 'mm² 1x16' },
            { labelAr: 'خامة الموصل', labelEn: 'Conductor Material', value: 'نحاس أحمر مجدول عرن 5، ملحن كهربائياً' },
            { labelAr: 'الوزن التقريبي', labelEn: 'Approx. Weight', value: '198 كجم/كم' },
            { labelAr: 'المقاومة القصوى', labelEn: 'Max Resistance', value: '1.24 أوم/كم' },
            { labelAr: 'العلامة التجارية', labelEn: 'Brand', value: 'ARISTONCAVI' }
        ]
    },
    {
        id: 'cable-aristoncavi-1x25',
        category: 'cables',
        brand: 'ARISTONCAVI',
        nameAr: 'كابل بحري أريستون كافي 1x25 مم إيطالي',
        nameEn: 'ARISTONCAVI 1x25mm Italian Marine Cable',
        image: 'assets/images/services/كابلات طلمبات الاعماق.webp',
        available: true,
        descAr: 'كابل بمقطع أكبر من أريستون كافي، مناسب لموتورات الطلمبات متوسطة القدرة.',
        descEn: 'A larger cross-section cable from ARISTONCAVI, suitable for medium-power pump motors.',
        specs: [
            { labelAr: 'بلد المنشأ', labelEn: 'Country of Origin', value: 'إيطاليا' },
            { labelAr: 'العزل', labelEn: 'Insulation', value: 'PVC فئة T12' },
            { labelAr: 'المقطع', labelEn: 'Cross Section', value: 'mm² 1x25' },
            { labelAr: 'خامة الموصل', labelEn: 'Conductor Material', value: 'نحاس أحمر مجدول عرن 5، ملحن كهربائياً' },
            { labelAr: 'الوزن التقريبي', labelEn: 'Approx. Weight', value: '285 كجم/كم' },
            { labelAr: 'المقاومة القصوى', labelEn: 'Max Resistance', value: '0.79 أوم/كم' },
            { labelAr: 'العلامة التجارية', labelEn: 'Brand', value: 'ARISTONCAVI' }
        ]
    },
    {
        id: 'cable-aristoncavi-1x35',
        category: 'cables',
        brand: 'ARISTONCAVI',
        nameAr: 'كابل بحري أريستون كافي 1x35 مم إيطالي',
        nameEn: 'ARISTONCAVI 1x35mm Italian Marine Cable',
        image: 'assets/images/services/كابلات طلمبات الاعماق.webp',
        available: true,
        descAr: 'كابل بمقطع 35 مم مناسب لموتورات الطلمبات عالية القدرة ومسافات التغذية الطويلة.',
        descEn: 'A 35mm cross-section cable suitable for high-power pump motors and long feed distances.',
        specs: [
            { labelAr: 'بلد المنشأ', labelEn: 'Country of Origin', value: 'إيطاليا' },
            { labelAr: 'العزل', labelEn: 'Insulation', value: 'PVC فئة T12' },
            { labelAr: 'المقطع', labelEn: 'Cross Section', value: 'mm² 1x35' },
            { labelAr: 'خامة الموصل', labelEn: 'Conductor Material', value: 'نحاس أحمر مجدول عرن 5، ملحن كهربائياً' },
            { labelAr: 'الوزن التقريبي', labelEn: 'Approx. Weight', value: '392 كجم/كم' },
            { labelAr: 'المقاومة القصوى', labelEn: 'Max Resistance', value: '0.55 أوم/كم' },
            { labelAr: 'العلامة التجارية', labelEn: 'Brand', value: 'ARISTONCAVI' }
        ]
    },
    {
        id: 'cable-aristoncavi-1x95',
        category: 'cables',
        brand: 'ARISTONCAVI',
        nameAr: 'كابل بحري أريستون كافي 1x95 مم إيطالي',
        nameEn: 'ARISTONCAVI 1x95mm Italian Marine Cable',
        image: 'assets/images/services/كابلات طلمبات الاعماق.webp',
        available: true,
        descAr: 'كابل بمقطع كبير 95 مم، مخصص لموتورات الطلمبات الصناعية عالية القدرة.',
        descEn: 'A large 95mm cross-section cable, dedicated to high-power industrial pump motors.',
        specs: [
            { labelAr: 'بلد المنشأ', labelEn: 'Country of Origin', value: 'إيطاليا' },
            { labelAr: 'العزل', labelEn: 'Insulation', value: 'PVC فئة T12' },
            { labelAr: 'المقطع', labelEn: 'Cross Section', value: 'mm² 1x95' },
            { labelAr: 'خامة الموصل', labelEn: 'Conductor Material', value: 'نحاس أحمر مجدول عرن 5، ملحن كهربائياً' },
            { labelAr: 'الوزن التقريبي', labelEn: 'Approx. Weight', value: '980 كجم/كم' },
            { labelAr: 'المقاومة القصوى', labelEn: 'Max Resistance', value: '0.21 أوم/كم' },
            { labelAr: 'العلامة التجارية', labelEn: 'Brand', value: 'ARISTONCAVI' }
        ]
    },
    {
        id: 'cable-untel-3x16',
        category: 'cables',
        brand: 'ÜNTEL',
        nameAr: 'كابل ÜNTEL 3x16',
        nameEn: 'ÜNTEL 3x16 Cable',
        image: 'assets/images/services/كابلات طلمبات الاعماق.webp',
        available: true,
        descAr: 'كابل ثلاثي الأنوية من ÜNTEL التركية، مناسب لتغذية موتورات الطلمبات الثلاثية الطور.',
        descEn: 'A three-core cable from the Turkish brand ÜNTEL, suitable for feeding three-phase pump motors.',
        specs: [
            { labelAr: 'بلد المنشأ', labelEn: 'Country of Origin', value: 'تركيا' },
            { labelAr: 'العزل', labelEn: 'Insulation', value: 'T12 فئة PVC' },
            { labelAr: 'المقطع', labelEn: 'Cross Section', value: 'mm² 3x16' },
            { labelAr: 'خامة الموصل', labelEn: 'Conductor Material', value: 'نحاس أحمر مجدول عرن 5، ملحن كهربائياً' },
            { labelAr: 'الوزن التقريبي', labelEn: 'Approx. Weight', value: '706 كجم/كم' },
            { labelAr: 'المقاومة القصوى', labelEn: 'Max Resistance', value: '1.21 أوم/كم' },
            { labelAr: 'العلامة التجارية', labelEn: 'Brand', value: 'ÜNTEL' }
        ]
    },
    {
        id: 'cable-untel-3x25',
        category: 'cables',
        brand: 'ÜNTEL',
        nameAr: 'كابل ÜNTEL 3x25',
        nameEn: 'ÜNTEL 3x25 Cable',
        image: 'assets/images/services/كابلات طلمبات الاعماق.webp',
        available: true,
        descAr: 'كابل ثلاثي الأنوية بمقطع أكبر من ÜNTEL، مناسب لموتورات ثلاثية الطور عالية القدرة.',
        descEn: 'A larger cross-section three-core cable from ÜNTEL, suitable for high-power three-phase motors.',
        specs: [
            { labelAr: 'بلد المنشأ', labelEn: 'Country of Origin', value: 'تركيا' },
            { labelAr: 'العزل', labelEn: 'Insulation', value: 'T12 فئة PVC' },
            { labelAr: 'المقطع', labelEn: 'Cross Section', value: 'mm² 3x25' },
            { labelAr: 'خامة الموصل', labelEn: 'Conductor Material', value: 'نحاس أحمر مجدول عرن 5، ملحن كهربائياً' },
            { labelAr: 'الوزن التقريبي', labelEn: 'Approx. Weight', value: '1085 كجم/كم' },
            { labelAr: 'المقاومة القصوى', labelEn: 'Max Resistance', value: '0.78 أوم/كم' },
            { labelAr: 'العلامة التجارية', labelEn: 'Brand', value: 'ÜNTEL' }
        ]
    }
];

