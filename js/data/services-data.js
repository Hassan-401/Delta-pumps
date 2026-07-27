/* ============================================
   DELTA PUMP - Services Detail Data
   Content for service.html?service=<slug>
   Each text value has { ar, en } for the
   global language toggle.
   ============================================ */

const SERVICES_DATA = {

    /* ============ 1. WATER WELL DRILLING ============ */
    'well-drilling': {
        image: 'assets/images/services/حفر ابار.webp',
        title: {
            ar: 'حفر آبار المياه',
            en: 'Water Well Drilling'
        },
        intro: {
            ar: 'تتميز دلتا بامب بخبرة عريقة تمتد لأكثر من 25 عاماً في مجال حفر آبار المياه الجوفية للمشاريع الزراعية والصناعية في مصر. نحن لا نحفر مجرد ثقب في الأرض، بل نبني محطة مياه متكاملة تضمن لك أعلى تدفق مائي بأفضل تكلفة استثمارية لمتر الحفر.',
            en: 'Delta Pump brings over 25 years of experience in drilling groundwater wells for agricultural and industrial projects in Egypt. We do not just drill a hole in the ground — we build a complete water station that guarantees the highest water flow at the best investment cost per drilled meter.'
        },
        tip: {
            ar: 'الخطوة صفر (سر النجاح): قبل بدء الحفر، نعتمد على الدراسات الجيوفيزيائية وجسات التربة لتحديد نقطة الحفر المثالية وعمق خزان المياه بدقة، مما يوفر عليك مبالغ طائلة ويضمن نجاح المشروع بنسبة 100%.',
            en: 'Step zero (the secret of success): before drilling begins, we rely on geophysical studies and soil testing to precisely locate the ideal drilling point and aquifer depth — saving you significant costs and ensuring 100% project success.'
        },
        sections: [
            {
                icon: 'fas fa-tools',
                title: {
                    ar: 'كيف ندير عملية الحفر؟ (خطوات هندسية صارمة)',
                    en: 'How Do We Manage the Drilling Process? (Strict Engineering Steps)'
                },
                ordered: true,
                bullets: [
                    {
                        ar: 'اختيار طريقة الحفر: نستخدم أحدث الحفارات (الروتاري، الدقاق، أو النصف ميكانيكي) بما يتناسب تماماً مع صلابة وطبيعة التكوين الجيولوجي للأرض.',
                        en: 'Choosing the drilling method: we use the latest rigs (rotary, percussion, or semi-mechanical) perfectly matched to the hardness and nature of the geological formation.'
                    },
                    {
                        ar: 'تنزيل المواسير والغلاف الزلطي: نختار مواسير (UPVC أو حديد سيملس) بأقطار تتحمل الضغط العالي، مع وضع غلاف زلطي نقي لحماية فلاتر البئر من الرمال والشوائب.',
                        en: 'Installing pipes and gravel pack: we select pipes (UPVC or seamless steel) with diameters that withstand high pressure, and place a clean gravel pack to protect the well filters from sand and impurities.'
                    },
                    {
                        ar: 'تطهير وتنمية البئر: تنظيف مسام الخزان الجوفي بضخ كميات هائلة من الهواء لضمان خروج مياه نقية وصافية تماماً.',
                        en: 'Well development and cleaning: cleaning the aquifer pores by pumping massive amounts of air to ensure completely pure, clear water.'
                    },
                    {
                        ar: 'تجربة الضخ (Pump Test): الخطوة الحاسمة لقياس "التصرف الفعلي" للبئر (كمية المياه المتاحة)، وهي الخطوة التي نحدد على أساسها المعدات التشغيلية.',
                        en: 'Pump Test: the decisive step to measure the actual well yield (available water quantity) — the step on which we base the selection of operating equipment.'
                    }
                ]
            },
            {
                icon: 'fas fa-heart-pulse',
                title: {
                    ar: 'قلب البئر النابض (ماذا بعد الحفر؟)',
                    en: 'The Beating Heart of the Well (What Comes After Drilling?)'
                },
                text: {
                    ar: 'البئر بدون نظام سحب احترافي هو مجرد حفرة! بعد نجاح الحفر وتحديد قدرة بئرك، تأتي الخطوة الأهم على الإطلاق: اختيار الطلمبة والموتور المتوافقين تماماً مع عمق البئر وحجم المياه المطلوب سحبها، لضمان عمل المنظومة لسنوات طويلة دون أعطال أو احتراق للمعدات.',
                    en: 'A well without a professional pumping system is just a hole! After successful drilling and determining your well capacity, the most important step of all comes: choosing the pump and motor perfectly matched to the well depth and required water volume, to keep the system running for many years without failures or burned-out equipment.'
                }
            }
        ],
        shop: {
            title: {
                ar: 'وفر وقتك، وجهّز بئرك بأقوى المعدات مباشرة من متجرنا',
                en: 'Save Time — Equip Your Well with the Best Equipment Directly from Our Store'
            },
            links: [
                {
                    icon: 'fas fa-droplet',
                    href: 'store-listing.html?category=pumps',
                    ar: 'اضغط هنا لتصفح وشراء طلمبات الأعماق (Pumps) من متجر دلتا بامب',
                    en: 'Click here to browse and buy deep pumps from the Delta Pump store'
                },
                {
                    icon: 'fas fa-bolt',
                    href: 'store-listing.html?category=motors',
                    ar: 'اضغط هنا لتصفح وشراء مواتير الغواطس (Motors) من متجر دلتا بامب',
                    en: 'Click here to browse and buy submersible motors from the Delta Pump store'
                }
            ]
        }
    },

    /* ============ 2. GROUNDWATER WELL MAINTENANCE ============ */
    'wells-maintenance': {
        image: 'assets/images/services/صيانه ابار المياه.webp',
        title: {
            ar: 'صيانة ابار المياه جوفية',
            en: 'Groundwater Well Maintenance'
        },
        intro: {
            ar: 'بعد إتمام عملية حفر الآبار بنجاح، تصبح صيانة آبار المياه الجوفية الدورية والتطهير المستمر لشبكة المياه خط الدفاع الأول لحماية استثمارك وضمان تدفق مياه نقية خالية من الملوثات والرمال طوال العمر الافتراضي للبئر.',
            en: 'After a successful drilling operation, periodic groundwater well maintenance and continuous purification of the water network become the first line of defense to protect your investment and ensure clean water flow free of contaminants and sand throughout the well\'s lifespan.'
        },
        tip: {
            ar: 'كيف نحدد مشكلة البئر بدقة؟ قبل البدء في أعمال التطهير أو معالجة الهبوط المائي، نعتمد أولاً على تصوير الآبار تليفزيونيًا باستخدام كاميرات أعماق متطورة، لرصد أي شروخ في المواسير أو انسداد في الفلاتر، مما يضمن صيانة دقيقة ومبنية على أسس علمية واضحة.',
            en: 'How do we diagnose the well problem precisely? Before starting purification or treating water level decline, we first rely on well video camera inspection using advanced deep-well cameras to detect pipe cracks or filter blockages — ensuring accurate maintenance built on clear scientific grounds.'
        },
        sections: [
            {
                icon: 'fas fa-shield-halved',
                title: {
                    ar: 'خطوات وإرشادات أساسية لحماية بئرك (الفحص السنوي)',
                    en: 'Essential Steps & Guidelines to Protect Your Well (Annual Inspection)'
                },
                text: {
                    ar: 'نوصي دائماً بإجراء فحص ميكانيكي وكيميائي شامل سنوياً للتأكد من سلامة البئر التشغيلية ونظافته:',
                    en: 'We always recommend a comprehensive annual mechanical and chemical inspection to verify the operational integrity and cleanliness of the well:'
                },
                bullets: [
                    {
                        ar: 'مراقبة جودة المياه: اختبار مياه البئر فوراً عند ملاحظة أي تغيير مفاجئ في طعم أو رائحة أو مظهر المياه، أو في حال تكرار النزلات المعوية لضمان خلوها من البكتيريا القولونية والنترات.',
                        en: 'Water quality monitoring: test the well water immediately upon noticing any sudden change in taste, odor, or appearance, or in case of recurring intestinal illness, to ensure it is free of coliform bacteria and nitrates.'
                    },
                    {
                        ar: 'سلامة الهيكل الخارجي: التحقق المستمر من سلامة غطاء البئر الخارجي، والتأكد من أن قمة البئر ترتفع عن سطح الأرض بمقدار قدم واحد على الأقل لمنع تسرب مياه السيول أو الملوثات السطحية.',
                        en: 'External structure integrity: continuously check the well cap and make sure the wellhead rises at least one foot above ground level to prevent flood water or surface contaminants from seeping in.'
                    },
                    {
                        ar: 'فصل الكيماويات والنفايات: تأمين مسافة فصل مناسبة وآمنة هندسياً بين موقع البئر وأنظمة الصرف أو خزانات الأسمدة والمواد الكيميائية لمنع حدوث أي تلوث للخزان الجوفي.',
                        en: 'Separating chemicals and waste: secure an engineering-safe separation distance between the well site and drainage systems or fertilizer and chemical tanks to prevent aquifer contamination.'
                    }
                ]
            },
            {
                icon: 'fas fa-arrows-rotate',
                title: {
                    ar: 'أعمال التطهير وإعادة التأهيل الشاملة',
                    en: 'Comprehensive Purification & Rehabilitation Works'
                },
                text: {
                    ar: 'عندما يتراجع إنتاج البئر أو تظهر الرمال، يتدخل فريقنا الفني باستخدام أحدث قواذف الهواء ووحدات الضخ لتنظيف الغلاف الزلطي، وغسيل الفلاتر، وإعادة فتح مسام التربة الحاملة للمياه ليعود البئر لكفاءته الأصلية.',
                    en: 'When well production declines or sand appears, our technical team intervenes using the latest air-lift and pumping units to clean the gravel pack, wash the filters, and reopen the pores of the water-bearing soil so the well returns to its original efficiency.'
                }
            }
        ],
        shop: {
            title: {
                ar: 'هل تحتاج محطتك إلى قطع غيار أو طلمبات بديلة؟',
                en: 'Does Your Station Need Spare Parts or Replacement Pumps?'
            },
            text: {
                ar: 'في كثير من الأحيان، تنتج مشاكل البئر عن تراجع كفاءة المضخة أو احتراق الموتور بسبب تقادم العمر الافتراضي. يمكنك الآن تصفح واختيار طلمبات جديدة ومقاومة للملوحة مباشرة من متجرنا لتأمين منظومة السحب لديك.',
                en: 'Well problems often result from declining pump efficiency or a burned-out motor due to age. You can now browse and choose new, salinity-resistant pumps directly from our store to secure your pumping system.'
            },
            links: [
                {
                    icon: 'fas fa-droplet',
                    href: 'store-listing.html?category=pumps',
                    ar: 'اضغط هنا لتصفح وشراء طلمبات الأعماق من متجر دلتا بامب',
                    en: 'Click here to browse and buy deep pumps from the Delta Pump store'
                }
            ]
        }
    },

    /* ============ 3. WELL VIDEO CAMERA INSPECTION ============ */
    'wells-filming': {
        image: 'assets/images/services/Wells philming.webp',
        title: {
            ar: 'تصوير الآبار تليفزيونيًا',
            en: 'Well Video Camera Inspection'
        },
        intro: {
            ar: 'في عالم حفر الآبار، "ما لا تراه العين لا يمكن علاجه". تقدم دلتا بامب خدمة تصوير الآبار تليفزيونياً باستخدام كاميرات رؤية ليلية متطورة بزاوية 360 درجة، لنضع بين يديك تقريراً مرئياً دقيقاً عن حالة بئرك من الداخل، مما يوفر عليك تكاليف الصيانة غير الضرورية ويمنع الكوارث الميكانيكية قبل وقوعها.',
            en: 'In the world of well drilling, "what the eye cannot see cannot be treated." Delta Pump offers well video inspection using advanced 360-degree night-vision cameras, delivering a precise visual report on the internal condition of your well — saving you unnecessary maintenance costs and preventing mechanical disasters before they happen.'
        },
        tip: {
            ar: 'لماذا التصوير قبل أي قرار فني؟ لا نتخذ قراراً بصيانة وتطهير البئر أو تغيير نوع الطلمبة إلا بعد التصوير، لأننا نرى حالة الفلاتر ومستوى الرواسب في القاع، مما يضمن أن الحل الفني الذي نقدمه هو الحل الأصح والأوفر لتكلفة مشروعك.',
            en: 'Why film before any technical decision? We never decide on well maintenance, purification, or pump replacement until after inspection — because we see the condition of the filters and sediment level at the bottom, ensuring the technical solution we offer is the most correct and cost-effective for your project.'
        },
        sections: [
            {
                icon: 'fas fa-clipboard-list',
                title: {
                    ar: 'ماذا نرى داخل بئرك؟ (تقرير الفحص الشامل)',
                    en: 'What Do We See Inside Your Well? (The Comprehensive Inspection Report)'
                },
                text: {
                    ar: 'بفضل تقنيات التصوير فائق الجودة، نقوم بفحص وتوثيق 10 نقاط حيوية لضمان سلامة بئرك:',
                    en: 'Thanks to high-quality imaging technology, we inspect and document 10 vital points to ensure your well\'s integrity:'
                },
                ordered: true,
                bullets: [
                    {
                        ar: 'استلام الآبار الجديدة: التأكد من مطابقة البئر للمواصفات المتعاقد عليها قبل الاستلام النهائي.',
                        en: 'New well handover: verifying the well matches the contracted specifications before final acceptance.'
                    },
                    {
                        ar: 'البيانات الهيدروليكية: قياس دقيق لمستوى المياه الساكن وتحديد عمق البئر الفعلي.',
                        en: 'Hydraulic data: precise measurement of the static water level and actual well depth.'
                    },
                    {
                        ar: 'السلامة الإنشائية: فحص حالة مواسير الـ (Casing) للتأكد من خلوها من أي شروخ أو انهيارات، والتحقق من إحكام ربط الجلب.',
                        en: 'Structural integrity: inspecting the casing pipes for cracks or collapses, and verifying the tightness of the couplings.'
                    },
                    {
                        ar: 'كشف التسريبات: تحديد أي تسريبات مياه للطبقات المعزولة التي قد تؤثر على جودة المياه أو نسبتها.',
                        en: 'Leak detection: identifying any water leaks from isolated layers that may affect water quality or quantity.'
                    },
                    {
                        ar: 'نظافة البئر: فحص حالة الفلاتر ونظافة القاع من الرواسب لضمان كفاءة السحب.',
                        en: 'Well cleanliness: checking the condition of the filters and bottom sediment to ensure pumping efficiency.'
                    },
                    {
                        ar: 'التخطيط التشغيلي: تحديد الارتفاع الأمثل لإنزال وتركيب طلمبات الأعماق لتجنب سحب الرمال.',
                        en: 'Operational planning: determining the optimal depth for installing deep pumps to avoid drawing sand.'
                    }
                ]
            },
            {
                icon: 'fas fa-camera',
                title: {
                    ar: 'مميزات تقنية الكاميرا في دلتا بامب',
                    en: 'Delta Pump Camera Technology Features'
                },
                bullets: [
                    {
                        ar: 'صورة فائقة الوضوح (HD): إمكانية تكبير المشاهد (Zoom) لرؤية أدق التفاصيل في شروخ المواسير.',
                        en: 'High-definition (HD) image: zoom capability to see the finest details in pipe cracks.'
                    },
                    {
                        ar: 'إضاءة LED قوية: لرؤية واضحة جداً في الأعماق السحيقة والبيئات المائية المعتمة.',
                        en: 'Powerful LED lighting: crystal-clear vision at extreme depths and in dark aquatic environments.'
                    },
                    {
                        ar: 'رؤية محيطية 360 درجة: فحص كامل لجدار البئر في مسار واحد، مما يضمن عدم تفويت أي نقطة ضعف.',
                        en: '360-degree panoramic view: complete inspection of the well wall in a single pass, ensuring no weak point is missed.'
                    }
                ]
            },
            {
                icon: 'fas fa-file-lines',
                title: {
                    ar: 'احم استثمارك بتقرير فني مرئي',
                    en: 'Protect Your Investment with a Visual Technical Report'
                },
                text: {
                    ar: 'لا تغامر بإنزال مضخة باهظة الثمن في بئر لا تعرف حالته. اطلب خدمة الفحص بالكاميرا الآن واحصل على تقرير فني شامل يحدد حالة بئرك التشغيلية.',
                    en: 'Do not risk lowering an expensive pump into a well of unknown condition. Request the camera inspection service now and get a comprehensive technical report on your well\'s operational state.'
                }
            }
        ]
    },

    /* ============ 4. GEOPHYSICAL STUDIES & SOIL TESTING ============ */
    'geophysical-studies': {
        image: 'assets/images/services/geophysics studies.webp',
        title: {
            ar: 'الدراسات الجيوفيزيائية وجسات التربة',
            en: 'Geophysical Studies & Soil Testing'
        },
        intro: {
            ar: 'تعتبر الدراسات الجيوفيزيائية وجسات التربة الخطوة العلمية الأهم والركيزة الأساسية التي تضمن نجاح أي مشروع مائي أو زراعي، وحمايتك تماماً من مخاطر الحفر العشوائي.',
            en: 'Geophysical studies and soil testing are the most important scientific step and the essential foundation that ensures the success of any water or agricultural project, fully protecting you from the risks of random drilling.'
        },
        tip: {
            ar: 'الخطوة التمهيدية الأهم: تُجرى هذه الجسات كخطوة استباقية حاسمة تسبق عملية حفر آبار المياه، وذلك لتحديد نقطة الحفر المثالية وتوفير التكاليف الضخمة عبر تجنب الأماكن الجافة أو الصخرية المعقدة.',
            en: 'The most important preliminary step: these tests are carried out as a decisive proactive step before water well drilling, to determine the ideal drilling point and save massive costs by avoiding dry or complex rocky locations.'
        },
        sections: [
            {
                icon: 'fas fa-brain',
                title: {
                    ar: 'ما هي جسات الجيوفيزيك؟',
                    en: 'What Is Geophysical Testing?'
                },
                text: {
                    ar: 'الجيوفيزياء هي الاستخدام العملي لعلوم فيزياء الأرض، حيث نعتمد على قياس الخصائص الفيزيائية للطبقات تحت السطحية بدقة متناهية. تساعد هذه العملية في الاستكشاف والتنقيب عن خزانات المياه الجوفية وتحديد طبيعة البنى الجيولوجية ومقدار الشذوذ فيها لتجنب المفاجآت أثناء العمل.',
                    en: 'Geophysics is the practical application of earth physics, where we precisely measure the physical properties of subsurface layers. This process helps explore and prospect for groundwater reservoirs and determine the nature of geological structures and their anomalies, avoiding surprises during work.'
                }
            },
            {
                icon: 'fas fa-chart-column',
                title: {
                    ar: 'أهمية الدراسة لمشروعك (لماذا لا غنى عنها؟)',
                    en: 'Why the Study Is Indispensable for Your Project'
                },
                text: {
                    ar: 'تساعدك دراستنا المعتمدة في رسم خريطة كاملة للبئر المستقبلي قبل وضع أول معدة في الأرض:',
                    en: 'Our certified study helps you draw a complete map of the future well before any equipment touches the ground:'
                },
                bullets: [
                    {
                        ar: 'تحديد وجود المياه: التأكد اليقيني من وجود خزان جوفي مائي في أرضك.',
                        en: 'Confirming water presence: certainty about the existence of a groundwater aquifer on your land.'
                    },
                    {
                        ar: 'نوعية وملوحة المياه: معرفة جودة المياه (عذبة أم مالحة) ونسبة الملوحة التقريبية لتحديد ملاءمتها للزراعة أو الاستخدام.',
                        en: 'Water quality and salinity: knowing the water quality (fresh or saline) and the approximate salinity ratio to determine its suitability for agriculture or use.'
                    },
                    {
                        ar: 'العمق والموقع الأنسب: تحديد العمق الدقيق المطلوب الوصول إليه، والموقع الأفضل للحفر لضمان أعلى تدفق.',
                        en: 'Optimal depth and location: determining the exact required depth and the best drilling location to ensure maximum flow.'
                    },
                    {
                        ar: 'اختيار المعدات: مساعدة الطاقم الهندسي في اتخاذ القرار السليم بشأن نوع الحفارة والمعدات المناسبة لطبيعة التربة.',
                        en: 'Equipment selection: helping the engineering team make the right decision on the rig type and equipment suited to the soil nature.'
                    }
                ]
            },
            {
                icon: 'fas fa-gem',
                title: {
                    ar: 'مميزات الخدمة مع دلتا بامب',
                    en: 'Service Advantages with Delta Pump'
                },
                bullets: [
                    {
                        ar: 'أحدث الأجهزة العالمية: نعتمد على تقنيات رصد ومسح متطورة تضمن لك أدق النتائج الجيوفيزيائية.',
                        en: 'The latest global equipment: we rely on advanced sensing and surveying technologies that guarantee the most accurate geophysical results.'
                    },
                    {
                        ar: 'طاقم استشاري متخصص: فريق من كبار الجيولوجيين والمهندسين ذوي الخبرة الطويلة في المسح الجيوفيزيائي بمصر.',
                        en: 'A specialized consulting team: senior geologists and engineers with long experience in geophysical surveying in Egypt.'
                    },
                    {
                        ar: 'سرعة وأفضل تكلفة: إنجاز دقيق للدراسات وإصدار التقارير الهندسية بأفضل أسعار الجسات في السوق.',
                        en: 'Speed and best cost: precise completion of studies and engineering reports at the best survey prices in the market.'
                    }
                ]
            }
        ],
        shop: {
            title: {
                ar: 'التخطيط الذكي لبئرك من المتجر',
                en: 'Smart Planning for Your Well from the Store'
            },
            text: {
                ar: 'بعد انتهاء الدراسة الاستكشافية وتحديد مواصفات بئرك، يمكنك البدء فوراً في استكشاف وتأمين المعدات والمستلزمات الأساسية لتجهيز محطتك بالكامل وبأعلى معايير الجودة من متجرنا الإلكتروني.',
                en: 'After the exploratory study is complete and your well specifications are set, you can immediately start exploring and securing the essential equipment and supplies to fully equip your station at the highest quality standards from our online store.'
            },
            links: [
                {
                    icon: 'fas fa-store',
                    href: 'store.html',
                    ar: 'اضغط هنا لتصفح مستلزمات الآبار الكاملة من متجر دلتا بامب',
                    en: 'Click here to browse the complete well supplies from the Delta Pump store'
                }
            ]
        }
    },

    /* ============ 5. FREE TECHNICAL CONSULTATIONS ============ */
    'consultations': {
        image: 'assets/images/services/conslutations.webp',
        title: {
            ar: 'استشارات فنية مجانية',
            en: 'Free Technical Consultations'
        },
        intro: {
            ar: 'في مشاريع حفر الآبار والطاقة الشمسية، "المعلومة الصحيحة في الوقت الصحيح توفر عليك مئات الآلاف". إيماناً منا بأهمية التوجيه السليم وحماية استثماراتك، تقدم دلتا بامب خدمة الاستشارات الفنية المجانية لعملائها ولغير عملائها. نضع بين يديك خلاصة خبرة هندسية وميدانية تمتد لأكثر من 25 عاماً في مصر.',
            en: 'In well drilling and solar energy projects, "the right information at the right time saves you hundreds of thousands." Believing in the importance of sound guidance and protecting your investments, Delta Pump offers free technical consultations to clients and non-clients alike. We put at your disposal the essence of over 25 years of engineering and field experience in Egypt.'
        },
        tip: {
            ar: 'نحن نعمل كـ "مستشارك الأمين"، جنباً إلى جنب معك في كل خطوة لضمان تشغيل محطتك المائية أو الشمسية بأعلى كفاءة وأقل تكلفة ممكنة.',
            en: 'We act as your "trusted advisor," side by side with you at every step, to ensure your water or solar station operates at the highest efficiency and lowest possible cost.'
        },
        sections: [
            {
                icon: 'fas fa-comments',
                title: {
                    ar: 'في ماذا يمكننا مساعدتك؟ (مجالات الاستشارة)',
                    en: 'How Can We Help You? (Consultation Areas)'
                },
                text: {
                    ar: 'تغطي استشاراتنا جميع المراحل الهندسية والتشغيلية لمشروعك، ونجيب على كافة أسئلتك بوضوح:',
                    en: 'Our consultations cover all engineering and operational stages of your project, and we answer all your questions clearly:'
                },
                ordered: true,
                bullets: [
                    {
                        ar: 'مرحلة ما قبل المشروع: تقييم الأرض، وتقديم النصح حول ضرورة إجراء الدراسات الجيوفيزيائية وجسات التربة لضمان وجود المياه وتحديد الملوحة والعمق المتوقع.',
                        en: 'Pre-project stage: evaluating the land and advising on the need for geophysical studies and soil testing to confirm water presence and determine expected salinity and depth.'
                    },
                    {
                        ar: 'التخطيط المالي والهندسي: تحديد التكلفة التقديرية بدقة لمشروعك، واختيار طريقة حفر بئر المياه الأنسب لطبيعة أرضك لتجنب أي انهيارات.',
                        en: 'Financial and engineering planning: accurately estimating your project cost and choosing the well drilling method best suited to your land to avoid collapses.'
                    },
                    {
                        ar: 'اختيار المعدات الصحيحة: بناءً على نتائج الحفر وتجارب الضخ، نساعدك في الحسابات الدقيقة لاختيار القدرة الحصانية المناسبة لطلمبات ومواتير الأعماق، أو تصميم أحمال محطة الطاقة الشمسية الخاصة بك.',
                        en: 'Choosing the right equipment: based on drilling results and pump tests, we help with precise calculations to select the right horsepower for deep pumps and motors, or design your solar station loads.'
                    },
                    {
                        ar: 'حلول الأعطال المعقدة: تقديم تشخيص فني دقيق وحلول سريعة لأي مشاكل طارئة تواجهك (مثل انسداد البئر بالرمال، احتراق المواتير، هبوط المعدات، أو تراجع كمية المياه)، وتوجيهك لخدمة صيانة وتطهير الآبار الجوفية إذا استلزم الأمر.',
                        en: 'Complex fault solutions: providing precise technical diagnosis and quick solutions for any emergency problems (such as sand blockage, burned motors, equipment drops, or reduced water yield), and directing you to the groundwater well maintenance service if needed.'
                    }
                ]
            },
            {
                icon: 'fas fa-gem',
                title: {
                    ar: 'لماذا تستشير خبراء دلتا بامب؟',
                    en: 'Why Consult Delta Pump Experts?'
                },
                bullets: [
                    {
                        ar: 'خدمة مجانية تماماً: نقدم النصيحة الهندسية الخالصة لخدمة القطاع الزراعي والصناعي، دون أي رسوم، سواء تعاقدت معنا لتنفيذ المشروع أم لا.',
                        en: 'Completely free service: we offer pure engineering advice to serve the agricultural and industrial sectors, without any fees, whether or not you contract us for the project.'
                    },
                    {
                        ar: 'خبرة ميدانية طويلة: نصائحنا ليست مجرد نظريات أكاديمية، بل هي نتاج عقود من العمل الشاق والممارسة في أصعب التضاريس والظروف داخل مصر.',
                        en: 'Long field experience: our advice is not just academic theory — it is the product of decades of hard work and practice in the toughest terrains and conditions in Egypt.'
                    }
                ]
            }
        ],
        shop: {
            title: {
                ar: 'وفرنا عليك عناء البحث عن المعدات',
                en: 'We Saved You the Trouble of Searching for Equipment'
            },
            text: {
                ar: 'بعد حصولك على الاستشارة الفنية وتحديد المعدات التي يحتاجها مشروعك بدقة، يمكنك العثور على تشكيلة من أفضل العلامات التجارية العالمية والمحلية المعتمدة بأسعار تنافسية مباشرة في متجرنا.',
                en: 'After receiving your technical consultation and precisely identifying the equipment your project needs, you can find a selection of the best certified global and local brands at competitive prices directly in our store.'
            },
            links: [
                {
                    icon: 'fas fa-store',
                    href: 'store.html',
                    ar: 'تصفح متجر دلتا بامب الشامل للمعدات المائية والطاقة الشمسية',
                    en: 'Browse the comprehensive Delta Pump store for water and solar equipment'
                }
            ]
        }
    },

    /* ============ 6. SUPPLY OF DEEP PUMPS & MOTORS ============ */
    'pumps-supply': {
        image: 'assets/images/services/توريد طلمبات.webp',
        title: {
            ar: 'توريد طلمبات و مواتير أعماق',
            en: 'Supply of Deep Pumps & Motors'
        },
        intro: {
            ar: 'تمتلك دلتا بامب خبرة هندسية وميدانية تتجاوز 25 عاماً في توريد وتركيب وتصميم منظومات طلمبات الأعماق الغاطسة ومواتير الغطس في مصر. نوفر الحلول المتكاملة والآمنة لمشروعات الري الزراعي العملاقة والمشاريع الصناعية الكبرى، معتمدين على فريق استشاري متخصص يضمن لك أعلى معايير الجودة وأطول عمر افتراضي للمعدات.',
            en: 'Delta Pump has over 25 years of engineering and field experience in supplying, installing, and designing submersible deep pump and motor systems in Egypt. We provide integrated, safe solutions for large agricultural irrigation and major industrial projects, backed by a specialized consulting team that guarantees the highest quality standards and the longest equipment lifespan.'
        },
        tip: {
            ar: 'نصيحة هندسية هامة: اختيار طلمبة وموتور الأعماق لا يتم عشوائياً، بل يجب أن يتوافق تماماً مع نتائج تجارب الضخ الفعلي التي تُجرى فور الانتهاء من حفر آبار المياه لتحديد الهبوط الديناميكي للمياه. كما ننصح دوماً بربطها باستخدام كابلات طلمبات أعماق معزولة بحرياً لحماية المنظومة من أي ماس كهربائي.',
            en: 'Important engineering advice: choosing a deep pump and motor is not random — it must perfectly match the actual pump test results conducted right after water well drilling to determine the dynamic water drawdown. We also always recommend connecting them with marine-insulated deep pump cables to protect the system from any short circuit.'
        },
        sections: [
            {
                icon: 'fas fa-medal',
                title: {
                    ar: 'أفضل العلامات التجارية العالمية لطلمبات ومواتير الأعماق',
                    en: 'The Best Global Brands of Deep Pumps & Motors'
                },
                text: {
                    ar: 'نحن وكلاء وموزعون معتمدون لأقوى الماركات العالمية الموثوقة في السوق المصري والتي أثبتت كفاءة تشغيلية استثنائية:',
                    en: 'We are authorized agents and distributors of the strongest trusted global brands in the Egyptian market, proven for exceptional operational efficiency:'
                },
                bullets: [
                    {
                        ar: 'الماركات الرائدة المتوفرة لدينا: شاكتي الهندية (Shakti)، جرندفوس (Grundfos)، فانسان، وتموت، جولد، إيبارا، وغيرها من الأسماء الموثوقة عالمياً.',
                        en: 'Leading brands available: Indian Shakti, Grundfos, Vansan, Wilo, Gould, Ebara, and other globally trusted names.'
                    },
                    {
                        ar: 'تشكيلة كاملة من القدرات: نوفر كافة القدرات الحصانية والأقطار لتناسب جميع أعماق الآبار وأحجام التدفق المطلوبة.',
                        en: 'A complete range of capacities: we supply all horsepower ratings and diameters to suit all well depths and required flow volumes.'
                    }
                ]
            },
            {
                icon: 'fas fa-screwdriver-wrench',
                title: {
                    ar: 'خدمات الدعم والصيانة المتكاملة (مركز خدمة معتمد)',
                    en: 'Integrated Support & Maintenance Services (Certified Service Center)'
                },
                text: {
                    ar: 'لا نكتفي بالتوريد فحسب، بل نضمن استمرارية عمل محطتك بكفاءة 100% عبر مراكز الصيانة التابعة لنا:',
                    en: 'We do not stop at supply — we ensure your station keeps running at 100% efficiency through our service centers:'
                },
                bullets: [
                    {
                        ar: 'فحص وتشخيص الأعطال: استخدام أحدث تقنيات الفحص الإلكتروني لتحديد كفاءة الأمبير ومقاومة العزل بدقة.',
                        en: 'Fault inspection and diagnosis: using the latest electronic testing technologies to precisely measure amperage efficiency and insulation resistance.'
                    },
                    {
                        ar: 'الإصلاح وتوفير قطع الغيار: صيانة شاملة للمحركات وتغيير الأجزاء التالفة بقطع غيار أصلية ومضمونة لجميع العلامات التجارية.',
                        en: 'Repair and spare parts: comprehensive motor maintenance and replacement of damaged parts with original, guaranteed spare parts for all brands.'
                    },
                    {
                        ar: 'عقود الصيانة الدورية: برامج فحص وتطهير دورية للحفاظ على كفاءة الرفع والحد من استهلاك الطاقة الكهربائية.',
                        en: 'Periodic maintenance contracts: regular inspection and purification programs to maintain lifting efficiency and reduce electrical energy consumption.'
                    }
                ]
            }
        ],
        shop: {
            title: {
                ar: 'تصفح واطلب معدات السحب لبئرك الآن',
                en: 'Browse & Order Pumping Equipment for Your Well Now'
            },
            text: {
                ar: 'احصل على أفضل الأسعار التنافسية في مصر واطلع على المواصفات الفنية الدقيقة لكافة الطلمبات والمواتير المتاحة مباشرة من خلال متجرنا الإلكتروني بضغطة زر واحدة.',
                en: 'Get the best competitive prices in Egypt and view the precise technical specifications of all available pumps and motors directly through our online store with a single click.'
            },
            links: [
                {
                    icon: 'fas fa-droplet',
                    href: 'store-listing.html?category=pumps',
                    ar: 'اضغط هنا لتصفح وشراء طلمبات الأعماق من متجر دلتا بامب',
                    en: 'Click here to browse and buy deep pumps from the Delta Pump store'
                },
                {
                    icon: 'fas fa-bolt',
                    href: 'store-listing.html?category=motors',
                    ar: 'اضغط هنا لتصفح وشراء مواتير الغواطس من متجر دلتا بامب',
                    en: 'Click here to browse and buy submersible motors from the Delta Pump store'
                }
            ]
        }
    },

    /* ============ 7. SUPPLY OF SOLAR INVERTERS ============ */
    'inverters-supply': {
        image: 'assets/images/services/inverters.webp',
        title: {
            ar: 'توريد إنفرترات الطاقة الشمسية',
            en: 'Supply of Solar Inverters'
        },
        intro: {
            ar: 'إذا كانت الألواح الشمسية هي القلب الذي يضخ الطاقة، فإن إنفرترات (عاكسات) الطاقة الشمسية هي "العقل المدبر" الذي يدير هذه المنظومة. فهي المسؤولة عن تحويل التيار المستمر (DC) إلى تيار متردد (AC) وتحسين كفاءة التشغيل، مما يجعلها المكون الأهم لنجاح محطات الري الزراعي والمشاريع الصناعية في مصر.',
            en: 'If solar panels are the heart that pumps energy, solar inverters are the "mastermind" that manages the system. They convert direct current (DC) to alternating current (AC) and optimize operating efficiency, making them the most important component for the success of agricultural irrigation stations and industrial projects in Egypt.'
        },
        tip: {
            ar: 'ترابط المنظومة الذكية: مهما كانت جودة ألواح الطاقة الشمسية المستخدمة لديك، فلن تستفيد من طاقتها القصوى بدون إنفرتر احترافي مزود بتقنية تتبع نقطة الطاقة العظمى (MPPT). هذا الإنفرتر هو خط الحماية الأول والأهم لتشغيل طلمبات ومواتير الأعماق بسلاسة تامة دون أعطال فنية.',
            en: 'Smart system integration: no matter how good your solar panels are, you will not get their maximum power without a professional inverter equipped with Maximum Power Point Tracking (MPPT) technology. This inverter is the first and most important line of protection for running deep pumps and motors smoothly without technical failures.'
        },
        sections: [
            {
                icon: 'fas fa-star',
                title: {
                    ar: 'أفضل أنواع الإنفرترات المتاحة في مصر (Tier 1)',
                    en: 'The Best Inverter Types Available in Egypt (Tier 1)'
                },
                ordered: true,
                bullets: [
                    {
                        ar: 'إنفرتر Veichi (فيتشي) - كفاءة التشغيل الشاق: يُعد الخيار الأول والمفضل لمحطات الري العملاقة في السوق المصري. يعتمد على أحدث تقنيات MPPT لضمان أعلى كفاءة، مزود بنظام تبديل تلقائي (Hybrid) بين الطاقة الشمسية وشبكة الكهرباء، ومصمم بهيكل قوي يتحمل حرارة وغبار المناطق الصحراوية.',
                        en: 'Veichi inverter — heavy-duty efficiency: the first and preferred choice for large irrigation stations in the Egyptian market. It uses the latest MPPT technology for maximum efficiency, features automatic hybrid switching between solar power and the grid, and is built with a rugged body that withstands desert heat and dust.'
                    },
                    {
                        ar: 'إنفرتر Frecon (فريكُن) - تصميم متطور واستهلاك مثالي: يتميز بقدرة فائقة على تحمل تذبذب التيار وسلاسة في التشغيل. يتحمل جهد دخل عالي (حتى 900V DC)، ويدعم التحويل التلقائي المستقر لضمان عدم انقطاع المياه، مع واجهة برمجة سهلة ومرنة جداً.',
                        en: 'Frecon inverter — advanced design and ideal consumption: exceptional tolerance to current fluctuations and smooth operation. It handles high input voltage (up to 900V DC) and supports stable automatic switching to ensure uninterrupted water, with a very easy and flexible programming interface.'
                    },
                    {
                        ar: 'إنفرتر Must (ماست) - بطل الأنظمة المنفصلة (Off-Grid): الخيار الأمثل للمزارع والمنازل البعيدة تماماً عن شبكة الكهرباء الحكومية. يوفر نظام شحن ذكي جداً لحماية البطاريات وإطالة عمرها الافتراضي، مع قدرة عالية على تشغيل الأحمال الحساسة والإضاءة بكفاءة.',
                        en: 'Must inverter — the off-grid champion: the ideal choice for farms and homes completely away from the government grid. It provides a very smart charging system to protect batteries and extend their lifespan, with high capability to run sensitive loads and lighting efficiently.'
                    },
                    {
                        ar: 'خيارات أخرى موثوقة (INVT & Delixi): إنفرتر INVT بتكنولوجيا متطورة وأداء شديد الاستقرار في الظروف المناخية القاسية، وإنفرتر Delixi الذي يجمع بين الأداء القوي والتكلفة الاقتصادية المناسبة.',
                        en: 'Other trusted options (INVT & Delixi): the INVT inverter with advanced technology and highly stable performance in harsh climates, and the Delixi inverter combining strong performance with suitable economical cost.'
                    }
                ]
            }
        ],
        shop: {
            title: {
                ar: 'اختر العقل المدبر لمحطتك الآن!',
                en: 'Choose the Mastermind of Your Station Now!'
            },
            text: {
                ar: 'لا تترك كفاءة محطتك للصدفة. تصفح الآن مجموعتنا المختارة من أفضل الإنفرترات (العاكسات) ومغيرات السرعة، واطلع على المواصفات الفنية لتحديد القدرة المناسبة لحجم محطتك مباشرة من متجرنا.',
                en: 'Do not leave your station\'s efficiency to chance. Browse our curated collection of the best inverters and variable-speed drives, and check the technical specifications to determine the right capacity for your station directly from our store.'
            },
            links: [
                {
                    icon: 'fas fa-bolt',
                    href: 'store-listing.html?category=inverters',
                    ar: 'اضغط هنا لتصفح وشراء إنفرترات الطاقة الشمسية من متجر دلتا بامب',
                    en: 'Click here to browse and buy solar inverters from the Delta Pump store'
                }
            ]
        }
    },

    /* ============ 8. SUPPLY OF SOLAR PANELS ============ */
    'solar-panels-supply': {
        image: 'assets/images/services/الواح الطاقه الشمسيه.webp',
        title: {
            ar: 'توريد ألواح الطاقة الشمسية',
            en: 'Supply of Solar Panels'
        },
        intro: {
            ar: 'تُعد ألواح الطاقة الشمسية الركيزة الأساسية لبناء أي نظام طاقة نظيفة متكامل، وتؤثر جودتها وكفاءتها بشكل مباشر على حجم إنتاج الكهرباء واستدامة المنظومة، خاصة في المشاريع الزراعية وحلول الري الكبرى في مصر. نوفر لك في دلتا بامب أحدث الألواح العالمية من الفئة الأولى (Tier 1) بأسعار تنافسية تضمن لك أعلى إنتاجية وأسرع فترة لاسترداد رأس المال.',
            en: 'Solar panels are the fundamental pillar of any complete clean energy system. Their quality and efficiency directly affect electricity production and system sustainability, especially in agricultural projects and major irrigation solutions in Egypt. At Delta Pump, we supply the latest Tier 1 global panels at competitive prices, ensuring the highest productivity and the fastest return on investment.'
        },
        tip: {
            ar: 'نصيحة المنظومة المتكاملة: لضمان أقصى أداء، لا بد من اختيار إنفرترات الطاقة الشمسية بدقة لتتوافق مع قدرة الألواح، مما يضمن تشغيل طلمبات الأعماق والمواتير الغاطسة بسلاسة تامة طوال ساعات النهار.',
            en: 'Integrated system advice: to guarantee maximum performance, solar inverters must be precisely selected to match panel capacity, ensuring deep pumps and submersible motors run smoothly throughout daylight hours.'
        },
        sections: [
            {
                icon: 'fas fa-sun',
                title: {
                    ar: 'أفضل الماركات العالمية المتاحة لدينا',
                    en: 'The Best Global Brands We Offer'
                },
                text: {
                    ar: 'سواء كنت تؤسس محطة ري لمزرعتك أو نظاماً هندسياً متكاملاً، نوفر لك خيارات رائدة تعتمد على تقنية N-Type فائقة الكفاءة:',
                    en: 'Whether you are building an irrigation station for your farm or a complete engineered system, we offer leading options based on high-efficiency N-Type technology:'
                },
                bullets: [
                    {
                        ar: 'Jinko Solar (سلسلة Tiger Neo): الأوسع انتشاراً والأعلى كفاءة في تحمل الأجواء الحارة.',
                        en: 'Jinko Solar (Tiger Neo series): the most widespread and the most efficient in hot climates.'
                    },
                    {
                        ar: 'Trina Solar (سلسلة Vertex): متانة تصنيع استثنائية وأداء قوي يتحمل قسوة البيئة الصحراوية.',
                        en: 'Trina Solar (Vertex series): exceptional build quality and strong performance that withstands harsh desert environments.'
                    },
                    {
                        ar: 'Risen Energy (تكنولوجيا Hyper-ion): الحل التكنولوجي المبتكر بأقل معدل تدهور سنوي وعمر افتراضي ممتد.',
                        en: 'Risen Energy (Hyper-ion technology): the innovative technological solution with the lowest annual degradation rate and extended lifespan.'
                    },
                    {
                        ar: 'Canadian Solar (سلسلة HiKu): التوازن المثالي والموثوق بين السعر الاقتصادي والكفاءة العالية.',
                        en: 'Canadian Solar (HiKu series): the ideal, trusted balance between economical price and high efficiency.'
                    }
                ]
            }
        ],
        shop: {
            title: {
                ar: 'تصفح حلول الطاقة الشمسية في متجرنا',
                en: 'Browse Solar Energy Solutions in Our Store'
            },
            text: {
                ar: 'بإمكانك الآن الاطلاع على مواصفات الألواح، العاكسات، والبطاريات، واختيار ما يناسب احتياجات محطتك الشمسية مباشرة من مكان واحد.',
                en: 'You can now view the specifications of panels, inverters, and batteries, and choose what suits your solar station needs directly from one place.'
            },
            links: [
                {
                    icon: 'fas fa-solar-panel',
                    href: 'store-solar.html',
                    ar: 'اضغط هنا لتصفح قسم الطاقة الشمسية المتكامل في متجر دلتا بامب',
                    en: 'Click here to browse the complete solar energy section in the Delta Pump store'
                }
            ]
        }
    },

    /* ============ 9. WELL PIPES: SEAMLESS & STEEL ============ */
    'steel-pipes-supply': {
        image: 'assets/images/services/توريد مواسير.webp',
        title: {
            ar: 'توريد مواسير الآبار: سيملس وحديد',
            en: 'Well Pipes Supply: Seamless & Steel'
        },
        intro: {
            ar: 'تعتبر جودة مواسير تبطين الآبار هي حجر الأساس لمشروع مائي ناجح ومستدام؛ لذلك نقدم لعملائنا في دلتا بامب أفضل أنواع المواسير السيملس (Seamless - بدون لحام) ومواسير الحديد عالية الصلابة والمصممة خصيصاً لتحمل ضغوط التربة الهائلة وضمان تدفق المياه بأقصى درجات الكفاءة والأمان.',
            en: 'The quality of well casing pipes is the cornerstone of a successful, sustainable water project. That is why Delta Pump offers its clients the best seamless (weld-free) and high-rigidity steel pipes, specially designed to withstand enormous soil pressures and ensure water flow at maximum efficiency and safety.'
        },
        tip: {
            ar: 'متى تختار المواسير السيملس؟ يُعد الاعتماد على المواسير الحديدية والسيملس خياراً هندسياً إجبارياً عند حفر آبار المياه في التربة الصخرية المعقدة أو عند النزول لأعماق سحيقة جداً، حيث لا يمكن للمواسير البلاستيكية تحمل هذه الضغوط الميكانيكية الهائلة.',
            en: 'When to choose seamless pipes? Relying on steel and seamless pipes is a mandatory engineering choice when drilling water wells in complex rocky soil or when descending to extreme depths, where plastic pipes cannot withstand these enormous mechanical pressures.'
        },
        sections: [
            {
                icon: 'fas fa-ruler-combined',
                title: {
                    ar: 'مواصفات هندسية دقيقة لكل مشروع',
                    en: 'Precise Engineering Specifications for Every Project'
                },
                text: {
                    ar: 'سواء كنت تؤسس مشروعاً زراعياً ضخماً أو بئراً إنتاجياً للمصانع، نوفر لك الأبعاد والسماكات القياسية التي تحتاجها بالضبط:',
                    en: 'Whether you are establishing a large agricultural project or a production well for factories, we provide exactly the standard dimensions and thicknesses you need:'
                },
                bullets: [
                    {
                        ar: 'أقطار متنوعة وواسعة: تتراوح من 6 إلى 16 بوصة لتستوعب كافة أحجام طلمبات غواطس الأعماق.',
                        en: 'Wide range of diameters: from 6 to 16 inches to accommodate all sizes of submersible deep pumps.'
                    },
                    {
                        ar: 'سماكة فائقة وجدران صلبة: يتراوح سمك جدار الحديد من 5 إلى 12 ملم، مما يمنح البئر قوة هيكلية استثنائية لمقاومة الانهيارات وعمراً افتراضياً يمتد لعقود.',
                        en: 'Superior thickness and solid walls: steel wall thickness ranges from 5 to 12 mm, giving the well exceptional structural strength against collapse and a lifespan of decades.'
                    }
                ]
            },
            {
                icon: 'fas fa-gem',
                title: {
                    ar: 'مزايا تجعل مواسيرنا السيملس اختيارك الأول',
                    en: 'Advantages That Make Our Seamless Pipes Your First Choice'
                },
                bullets: [
                    {
                        ar: 'كتلة واحدة صلبة وبدون نقاط ضعف: تصنيعها بطريقة السحب الحر (بدون لحام طولي أو عرضي) يجعلها خالية تماماً من عيوب التصنيع المقترنة باللحام، مما يضمن مقاومة فائقة للصدمات وضغوط التربة.',
                        en: 'One solid mass with no weak points: manufactured by free drawing (no longitudinal or transverse welding), making them completely free of welding-related defects and ensuring superior resistance to shocks and soil pressure.'
                    },
                    {
                        ar: 'مقاومة ممتازة للتآكل: يتم فحص واختيار خامات الحديد بعناية لضمان تحمل أعلى درجات ملوحة التربة والمياه الجوفية، مما يحافظ على نقاء بئرك ويحميه من الصدأ.',
                        en: 'Excellent corrosion resistance: steel materials are carefully inspected and selected to withstand the highest soil and groundwater salinity levels, keeping your well pure and protected from rust.'
                    },
                    {
                        ar: 'أبعاد قياسية وتركيب سهل: دقة متناهية في أقطار المواسير تضمن سرعة وسلاسة عملية إنزال خط التبطين (Casing) داخل البئر دون أي عوائق ميكانيكية.',
                        en: 'Standard dimensions and easy installation: extreme precision in pipe diameters ensures a fast, smooth casing installation inside the well without any mechanical obstacles.'
                    }
                ]
            }
        ],
        shop: {
            title: {
                ar: 'اطلب الكمية والمواصفات التي تحتاجها الآن',
                en: 'Order the Quantity & Specifications You Need Now'
            },
            text: {
                ar: 'تصفح قسم المواسير في متجرنا الإلكتروني واطلع على التشكيلة المتاحة لتجهيز مشروعك مباشرة وبأعلى معايير الأمان.',
                en: 'Browse the pipes section in our online store and view the available selection to equip your project directly at the highest safety standards.'
            },
            links: [
                {
                    icon: 'fas fa-industry',
                    href: 'store-listing.html?category=iron-pipes',
                    ar: 'اضغط هنا لتصفح وشراء مواسير الآبار من متجر دلتا بامب',
                    en: 'Click here to browse and buy well pipes from the Delta Pump store'
                }
            ]
        }
    },

    /* ============ 10. UPVC PLASTIC PIPES ============ */
    'upvc-pipes': {
        image: 'assets/images/services/مواسير بلاستيك.webp',
        title: {
            ar: 'مواسير بلاستيك UPVC',
            en: 'UPVC Plastic Pipes'
        },
        intro: {
            ar: 'تعتبر دلتا بامب الشركة الرائدة في توريد مواسير البلاستيك UPVC في مصر. نوفر مواسير طلمبات الأعماق وآبار المياه البلاستيكية بأقطار وضغوط مختلفة، تلبي كافة المتطلبات الهندسية لضمان أعلى كفاءة وأطول عمر افتراضي لمشروعك.',
            en: 'Delta Pump is the leading company in supplying UPVC plastic pipes in Egypt. We provide plastic deep pump and water well pipes in various diameters and pressure ratings, meeting all engineering requirements to ensure the highest efficiency and longest lifespan for your project.'
        },
        tip: {
            ar: 'نصيحة الخبراء: اختيار نوع وضغط المواسير المناسب هي الخطوة الأهم مباشرة بعد الانتهاء من عملية حفر وتجهيز بئر المياه، وذلك لضمان عدم حدوث أي انهيارات للتربة داخل البئر مستقبلاً.',
            en: 'Expert advice: choosing the right pipe type and pressure rating is the most important step immediately after completing well drilling and equipping — to ensure no soil collapses occur inside the well in the future.'
        },
        sections: [
            {
                icon: 'fas fa-ruler',
                title: {
                    ar: 'أقطار وضغوط تناسب كل احتياجاتك',
                    en: 'Diameters & Pressures for All Your Needs'
                },
                text: {
                    ar: 'سواء كان مشروعك زراعياً أو صناعياً، نوفر لك تشكيلة متكاملة:',
                    en: 'Whether your project is agricultural or industrial, we offer a complete range:'
                },
                bullets: [
                    {
                        ar: 'الأقطار المتاحة: (2، 3، 4، 5، و6 بوصة) لتناسب حجم التدفق المائي المطلوب.',
                        en: 'Available diameters: (2, 3, 4, 5, and 6 inches) to match the required water flow volume.'
                    },
                    {
                        ar: 'قوة تحمل الضغط: (16 بار، 26 بار، 37 بار) لضمان الأمان التام داخل البئر وتحمل ضغوط المياه العالية.',
                        en: 'Pressure ratings: (16 bar, 26 bar, 37 bar) to ensure complete safety inside the well and withstand high water pressures.'
                    }
                ]
            },
            {
                icon: 'fas fa-medal',
                title: {
                    ar: 'ماركات موثوقة ومضمونة',
                    en: 'Trusted & Guaranteed Brands'
                },
                text: {
                    ar: 'نحن وكلاء وموردون لأفضل العلامات التجارية لضمان الجودة العالية:',
                    en: 'We are agents and suppliers of the best brands to guarantee high quality:'
                },
                bullets: [
                    {
                        ar: 'مواسير UPVC للآبار: مصر النور، مصر الحجاز، دلتا مصر، الشريف، الأمل، وغيرها من الأسماء الرائدة.',
                        en: 'UPVC well pipes: Misr El-Nour, Misr El-Hegaz, Delta Misr, El-Sherif, El-Amal, and other leading names.'
                    },
                    {
                        ar: 'مواسير الطلمبات: وتر جت، أشريفاد، بور باور، كاستيل، سودر شان.',
                        en: 'Pump pipes: Water Jet, Ashirvad, Bore Power, Castle, Sudarshan.'
                    }
                ]
            }
        ],
        shop: {
            title: {
                ar: 'جاهز لطلب الكمية التي تحتاجها؟',
                en: 'Ready to Order the Quantity You Need?'
            },
            text: {
                ar: 'وفر وقتك ومجهودك، تصفح الآن قسم المواسير في متجرنا الإلكتروني واطلع على المواصفات والأسعار المتاحة بضغطة زر.',
                en: 'Save your time and effort — browse the pipes section in our online store now and view the available specifications and prices with a click of a button.'
            },
            links: [
                {
                    icon: 'fas fa-grip-lines',
                    href: 'store-listing.html?category=pipes',
                    ar: 'اضغط هنا لتصفح وشراء مواسير UPVC من متجر دلتا بامب',
                    en: 'Click here to browse and buy UPVC pipes from the Delta Pump store'
                }
            ]
        }
    },

    /* ============ 11. DEEP PUMP CABLES ============ */
    'pump-cables': {
        image: 'assets/images/services/كابلات طلمبات الاعماق.webp',
        title: {
            ar: 'كابلات طلمبات اعماق',
            en: 'Deep Pump Cables'
        },
        intro: {
            ar: 'تعتبر الكابلات البحرية بمثابة شريان الحياة الرئيسي ونظام التغذية الكهربائية الأساسي لآبار المياه الجوفية. ندرك في دلتا بامب أن أي خلل أو ضعف في عزل الكابل الكهربائي قد يؤدي فوراً إلى توقف المنظومة بالكامل، أو تدمير واحتراق المحركات الغاطسة المكلفة. لذلك، نوفر لك أقوى كابلات طلمبات الأعماق المعتمدة والمصممة خصيصاً للعمل الشاق تحت الماء وبالأعماق السحيقة بأمان تام.',
            en: 'Marine cables are the main lifeline and primary electrical feeding system for groundwater wells. At Delta Pump, we understand that any defect or weakness in cable insulation can immediately shut down the entire system or destroy and burn out costly submersible motors. That is why we supply the strongest certified deep pump cables, specially designed for heavy-duty underwater work at extreme depths with complete safety.'
        },
        tip: {
            ar: 'نصيحة الحماية الفنية: اختيار مساحة مقطع النحاس وطول الكابل ليس عشوائياً، بل يعتمد بشكل مباشر على قدرة وسحب أمبير طلمبات ومواتير الأعماق المستخدمة؛ حيث يقوم مهندسونا بحساب نسبة الفقد في الجهد الكهربائي (Voltage Drop) لضمان وصول تيار مستقر يحمي المحرك من التلف.',
            en: 'Technical protection advice: choosing the copper cross-section and cable length is not random — it depends directly on the power and amperage draw of the deep pumps and motors used. Our engineers calculate the voltage drop to ensure a stable current that protects the motor from damage.'
        },
        sections: [
            {
                icon: 'fas fa-shield-halved',
                title: {
                    ar: 'مواصفات هندسية تضمن الأمان المطلق للبئر',
                    en: 'Engineering Specifications That Guarantee Absolute Well Safety'
                },
                text: {
                    ar: 'تتميز الكابلات البحرية التي نوفرها لعملائنا بمواصفات قياسية تجعلها الخيار الأكثر اعتمادية في مصر:',
                    en: 'The marine cables we supply feature standard specifications that make them the most reliable choice in Egypt:'
                },
                bullets: [
                    {
                        ar: 'عزل PVC مزدوج ومحكم: طبقتان من مادة الـ PVC فائقة الجودة لضمان العزل التام ضد الرطوبة والمياه الجوفية وتحمل الضغوط الميكانيكية العالية أثناء الإنزال.',
                        en: 'Double, tight PVC insulation: two layers of premium PVC to ensure complete insulation against moisture and groundwater, withstanding high mechanical stress during installation.'
                    },
                    {
                        ar: 'نحاس أحمر نقي 100%: نعتمد على كابلات ذات نقاوة قصوى للنحاس لضمان أعلى توصيلية كهربائية، والحد من استهلاك الطاقة وتقليل الانبعاثات الحرارية داخل السلك.',
                        en: '100% pure red copper: we rely on cables with maximum copper purity to ensure the highest electrical conductivity, reduce energy consumption, and minimize heat emission inside the wire.'
                    },
                    {
                        ar: 'تقنية الحماية والمنع الذاتي: مدعومة بمواد داخلية ذكية تمنع تسرب الرطوبة وتمدد المياه داخل السلك في حال حدوث أي خدش خارجي طفيف، مما يمنع الماس الكهربائي تماماً.',
                        en: 'Self-sealing protection technology: supported by smart internal materials that prevent moisture ingress and water spread inside the wire in case of minor external scratches, completely preventing short circuits.'
                    }
                ]
            },
            {
                icon: 'fas fa-medal',
                title: {
                    ar: 'أشهر الماركات المعتمدة في السوق المصري',
                    en: 'The Most Popular Certified Brands in the Egyptian Market'
                },
                text: {
                    ar: 'نوفر تشكيلة واسعة من الكابلات البحرية الموثوقة التي أثبتت كفاءتها في البيئات الزراعية والصناعية الشاقة:',
                    en: 'We supply a wide range of trusted marine cables proven in demanding agricultural and industrial environments:'
                },
                bullets: [
                    {
                        ar: 'الكابلات البحرية التركية: الماركات الرائدة عالمياً في عزل الغواطس (مثل كابلات توران وكابلات شاركت وانبيل وسيفال).',
                        en: 'Turkish marine cables: globally leading brands in submersible insulation (such as Turan, Carkit, Enbil, and Seval cables).'
                    },
                    {
                        ar: 'الكابلات البحرية المصرية: مصنعة وفقاً لأعلى معايير الجودة ومطابقة للمواصفات العالمية (مثل نسلا وغيرها).',
                        en: 'Egyptian marine cables: manufactured to the highest quality standards and compliant with international specifications (such as Nesla and others).'
                    }
                ]
            }
        ],
        shop: {
            title: {
                ar: 'أمّن منظومة بئرك الكهربائية الآن',
                en: 'Secure Your Well\'s Electrical System Now'
            },
            text: {
                ar: 'احم محرك بئرك من التذبذب أو التوقف المفاجئ. تصفح الآن التشكيلة الكاملة من الكابلات البحرية بمختلف المقاطع (القطاعات) والقدرات، واطلع على المواصفات الفنية لتطلب ما يناسب عمق بئرك مباشرة من متجرنا.',
                en: 'Protect your well motor from fluctuations or sudden shutdown. Browse the full range of marine cables in various cross-sections and capacities, and check the technical specifications to order what suits your well depth directly from our store.'
            },
            links: [
                {
                    icon: 'fas fa-plug',
                    href: 'store-listing.html?category=cables',
                    ar: 'اضغط هنا لتصفح وشراء كابلات طلمبات الأعماق من متجر دلتا بامب',
                    en: 'Click here to browse and buy deep pump cables from the Delta Pump store'
                }
            ]
        }
    }
};

