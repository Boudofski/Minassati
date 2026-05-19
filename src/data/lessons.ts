export type LessonDifficulty = "مبتدئ" | "متوسط" | "عائلي";

export type LessonSection = {
  heading: string;
  content: string;
};

export type Lesson = {
  slug: string;
  category: string;
  title: string;
  ageRange: string;
  difficulty: LessonDifficulty;
  readingTime: string;
  summary: string;
  bodySections: LessonSection[];
  whatChildLearns: string[];
  parentNote: string;
  activity: string;
  relatedLessons: string[];
  relatedQuestions: string[];
  tags: string[];
  featured?: boolean;
  // Backward-compatible aliases used by existing cards/routes.
  duration: string;
  age: string;
  level: LessonDifficulty;
  objectives: string[];
  body: string[];
  takeaways: string[];
  relatedSlugs: string[];
};

type LessonSeed = {
  slug: string;
  title: string;
  focus: string;
  activity: string;
  difficulty?: LessonDifficulty;
  ageRange?: string;
  readingTime?: string;
  featured?: boolean;
};

const categoryMeta: Record<string, { title: string; tone: string; parent: string; tags: string[] }> = {
  aqeedah: {
    title: "العقيدة",
    tone: "يبني قلب الطفل على محبة الله والثقة به وفهم أصول الإيمان بلغة قريبة.",
    parent: "اجعل الحديث عن العقيدة حديث محبة وطمأنينة، وابدأ بما يراه الطفل من نعم الله حوله.",
    tags: ["عقيدة", "إيمان", "توحيد"],
  },
  fiqh: {
    title: "الفقه",
    tone: "يشرح العبادات اليومية بخطوات عملية تجعل الطفل يفهم قبل أن يحفظ.",
    parent: "علّم الحكم بالقدوة والرفق، واحتفل بالمحاولة الصحيحة قبل طلب الكمال.",
    tags: ["فقه", "عبادة", "تطبيق"],
  },
  seerah: {
    title: "السيرة النبوية",
    tone: "يربط الطفل بالنبي ﷺ من خلال مواقف رحيمة وقصص تبني القدوة.",
    parent: "اقرأ السيرة كقصة حياة لا كمعلومات منفصلة، واسأل الطفل: ماذا نتعلم من هذا الموقف؟",
    tags: ["سيرة", "النبي", "قدوة"],
  },
  akhlaq: {
    title: "الأخلاق",
    tone: "يحوّل القيم الإسلامية إلى سلوك يومي في البيت والمدرسة واللعب.",
    parent: "الأخلاق تُكتسب بالمشاهدة والتكرار؛ اختر خلقاً واحداً كل أسبوع وطبقه مع الطفل.",
    tags: ["أخلاق", "سلوك", "تربية"],
  },
  quran: {
    title: "القرآن الكريم",
    tone: "يجعل القرآن رفيقاً يومياً للطفل قراءةً واستماعاً وفهماً وحفظاً.",
    parent: "اجعل وقت القرآن قصيراً ثابتاً ومحبباً، ولا تربطه بالضغط أو المقارنة.",
    tags: ["قرآن", "حفظ", "تدبر"],
  },
  hadith: {
    title: "الحديث النبوي",
    tone: "يشرح أحاديث قصيرة جامعة بمعانٍ عملية تناسب عمر الطفل.",
    parent: "حديث واحد مع تطبيق واحد أفضل من حفظ أحاديث كثيرة بلا معنى عملي.",
    tags: ["حديث", "سنة", "تطبيق"],
  },
  duaa: {
    title: "الأدعية والأذكار",
    tone: "يبني عادة ذكر الله في الصباح والمساء والطعام والنوم والمواقف اليومية.",
    parent: "اربط الذكر بموقفه الطبيعي حتى يشعر الطفل أنه عون وطمأنينة لا واجب ثقيل.",
    tags: ["أذكار", "دعاء", "طمأنينة"],
  },
  adab: {
    title: "الآداب الإسلامية",
    tone: "يعلم الطفل آداب التعامل والكلام والطعام والبيت والمسجد بطريقة لطيفة.",
    parent: "اختر أدباً واحداً ودرّبه عملياً في موقف حقيقي، ثم أثنِ على التطبيق.",
    tags: ["آداب", "تعامل", "أسرة"],
  },
};

const seeds: Record<string, LessonSeed[]> = {
  aqeedah: [
    { slug: "what-is-iman", title: "ما معنى الإيمان؟", focus: "أركان الإيمان الستة وأن الإيمان يظهر في القلب والكلام والعمل", activity: "اطلب من الطفل أن يذكر نعمة يحبها ثم يقول: الحمد لله على هذه النعمة.", featured: true },
    { slug: "who-is-allah", title: "من هو الله؟", focus: "معرفة الله من خلال الخلق والرزق والرحمة والحفظ", activity: "اخرجوا إلى مكان مفتوح وعدّوا ثلاث نعم ترونها حولكم." },
    { slug: "beautiful-names-of-allah", title: "أسماء الله الحسنى", focus: "التعرف على الرحمن والرزاق والحفيظ والسميع والبصير بأمثلة يومية", activity: "اصنعوا بطاقة صغيرة لاسم من أسماء الله واكتبوا مثالاً من حياة الطفل.", featured: true },
    { slug: "believing-in-angels", title: "الإيمان بالملائكة", focus: "الملائكة خلق كريم يطيع الله ويكتب الحسنات ويحفظ بأمر الله", activity: "اسأل الطفل: أي عمل جميل تحب أن تكتبه الملائكة لك اليوم؟" },
    { slug: "believing-in-books", title: "الإيمان بالكتب", focus: "الله أنزل كتباً تهدي الناس والقرآن خاتمها والمحفوظ منها", activity: "خصصوا رفاً جميلاً للمصحف وعلّم الطفل احترامه." },
    { slug: "believing-in-messengers", title: "الإيمان بالرسل", focus: "الرسل جاءوا لهداية الناس إلى عبادة الله والأخلاق الجميلة", activity: "اختاروا نبياً واحداً وتحدثوا عن صفة جميلة فيه." },
    { slug: "the-last-day", title: "اليوم الآخر", focus: "الإيمان بالآخرة يشجع الطفل على الخير والعدل والرحمة", activity: "اكتبوا عملاً صغيراً صالحاً فعله الطفل اليوم واحتفظوا به في صندوق الخير.", difficulty: "متوسط" },
    { slug: "what-is-qadar", title: "القدر خيره وشره", focus: "الثقة بحكمة الله عند الفرح والصعوبة مع العمل والاجتهاد", activity: "تحدثوا عن موقف صعب انتهى بخير واشكروا الله عليه.", difficulty: "متوسط" },
    { slug: "love-and-fear-of-allah", title: "محبة الله ورجاؤه", focus: "التوازن بين محبة الله ورجائه والحياء من معصيته دون تخويف", activity: "اكتبوا ثلاث طرق نظهر بها حبنا لله هذا الأسبوع.", difficulty: "عائلي" },
    { slug: "tawheed-for-kids", title: "التوحيد للصغار", focus: "عبادة الله وحده وشكره ودعاؤه والاعتماد عليه", activity: "علّم الطفل دعاءً قصيراً يطلب فيه من الله حاجته.", featured: true },
  ],
  fiqh: [
    { slug: "why-do-we-pray", title: "لماذا نصلي؟", focus: "الصلاة صلة يومية بالله وراحة للقلب ونظام للحياة", activity: "جهزوا سجادة صغيرة وركناً هادئاً للصلاة في البيت.", featured: true },
    { slug: "how-to-make-wudu", title: "كيف نتوضأ؟", focus: "خطوات الوضوء بالترتيب ومعنى الطهارة قبل الصلاة", activity: "تدربوا على الوضوء عملياً واجعل الطفل يشرح الخطوات." },
    { slug: "pillars-of-prayer", title: "أركان الصلاة", focus: "القيام والتكبير والفاتحة والركوع والسجود والطمأنينة", activity: "صلّوا ركعتين ببطء مع شرح كل انتقال.", difficulty: "متوسط" },
    { slug: "prayer-times", title: "أوقات الصلاة", focus: "الصلاة لها أوقات محددة تعلم الطفل النظام والارتباط بالله", activity: "اصنعوا جدولاً أسبوعياً لأوقات الصلاة وضعوا نجمة عند كل محاولة." },
    { slug: "fasting-in-ramadan", title: "الصيام في رمضان", focus: "معنى الصيام وحكمة الصبر والشكر والرحمة بالفقراء", activity: "جرّبوا صيام ساعة أو نصف يوم حسب قدرة الطفل.", difficulty: "متوسط" },
    { slug: "zakat-and-charity", title: "الزكاة والصدقة", focus: "المال نعمة نشكر الله عليها بمساعدة المحتاجين", activity: "اصنعوا صندوق صدقة صغيراً يضع فيه الطفل شيئاً كل أسبوع." },
    { slug: "halal-and-haram", title: "الحلال والحرام", focus: "أوامر الله تحمي الإنسان وتعلمه الاختيار الصحيح", activity: "ناقشوا موقفاً يومياً واسألوا: ما الاختيار الذي يرضي الله؟", difficulty: "عائلي" },
    { slug: "friday-prayer", title: "يوم الجمعة", focus: "فضائل الجمعة وآدابها وقراءة الكهف والصلاة على النبي ﷺ", activity: "اجعلوا للجمعة روتيناً عائلياً قصيراً: اغتسال، دعاء، صلاة على النبي." },
    { slug: "cleanliness-in-islam", title: "النظافة في الإسلام", focus: "الطهارة والنظافة من الإيمان وتشمل الجسد واللباس والمكان", activity: "رتبوا مكان الصلاة معاً وسمّوه ركن الطهارة." },
    { slug: "eid-etiquette", title: "آداب العيد", focus: "العيد فرح وشكر وصلة رحم وتكبير ولباس حسن", activity: "اكتبوا بطاقة تهنئة لقريب أو جار في العيد." },
  ],
  seerah: [
    { slug: "birth-of-prophet", title: "مولد النبي ﷺ", focus: "مولده في مكة ونشأته يتيماً محفوظاً برعاية الله", activity: "ارسموا خريطة بسيطة لمكة وتحدثوا عن البيت الحرام.", featured: true },
    { slug: "character-of-prophet", title: "أخلاق النبي ﷺ", focus: "الصدق والأمانة والرحمة والحلم في حياة النبي", activity: "اختاروا خلقاً نبوياً وطبقوه في موقف عائلي.", featured: true },
    { slug: "first-revelation", title: "نزول الوحي", focus: "بداية الرسالة بكلمة اقرأ وأهمية العلم والقرآن", activity: "اقرأوا أول آيات سورة العلق وتحدثوا عن قيمة العلم.", difficulty: "متوسط" },
    { slug: "prophet-in-makkah", title: "الدعوة في مكة", focus: "الصبر والثبات والرحمة رغم الأذى", activity: "احكوا موقفاً صبر فيه الطفل على شيء صعب." },
    { slug: "hijra-story", title: "الهجرة النبوية", focus: "التوكل والتخطيط والصحبة الصالحة في الهجرة", activity: "ارسموا طريقاً من مكة إلى المدينة واكتبوا عليه كلمة التوكل.", difficulty: "متوسط" },
    { slug: "building-madinah", title: "بناء المدينة", focus: "المؤاخاة والمسجد والنظام الاجتماعي في المدينة", activity: "ساعد الطفل على عمل خدمة صغيرة لأخ أو جار." },
    { slug: "mercy-in-seerah", title: "رحمة النبي ﷺ", focus: "رحمته بالأطفال والضعفاء والحيوان والخصوم", activity: "نفذوا عمل رحمة واحداً اليوم واكتبوه في دفتر الرحمة.", featured: true },
    { slug: "prophet-and-children", title: "النبي ﷺ والأطفال", focus: "كيف كان النبي يلاطف الأطفال ويحترم مشاعرهم", activity: "امنح الطفل وقتاً تحاوره فيه بلا مقاطعة." },
    { slug: "conquest-of-makkah", title: "فتح مكة", focus: "العفو عند المقدرة ونقاء القلب من الانتقام", activity: "تحدثوا عن شخص سامحناه وكيف شعرنا بعد العفو.", difficulty: "متوسط" },
    { slug: "farewell-sermon", title: "خطبة الوداع", focus: "حقوق الناس والعدل والأمانة وكرامة الإنسان", activity: "اكتبوا قاعدة عدل واحدة تلتزم بها الأسرة هذا الأسبوع.", difficulty: "عائلي" },
  ],
  akhlaq: [
    { slug: "truthfulness", title: "الصدق", focus: "الصدق يرضي الله ويبني الثقة حتى إن كان صعباً", activity: "احكِ موقفاً كان الصدق فيه شجاعة.", featured: true },
    { slug: "amanah", title: "الأمانة", focus: "حفظ الأشياء والوعود والمشاعر من الأمانة", activity: "أعط الطفل أمانة صغيرة يحافظ عليها ليوم كامل." },
    { slug: "mercy-to-animals", title: "الرحمة بالحيوان", focus: "الإسلام يعلّم الرفق بكل مخلوق وعدم إيذائه", activity: "ضعوا ماءً لطائر أو أطعموا حيواناً بأمان." },
    { slug: "respecting-parents", title: "بر الوالدين", focus: "الكلمة الطيبة والمساعدة والدعاء من بر الوالدين", activity: "اختر خدمة واحدة يقدمها الطفل لوالديه اليوم." },
    { slug: "patience-for-kids", title: "الصبر", focus: "الصبر قوة داخلية تساعد الطفل عند الانتظار والضيق", activity: "درّبوا الطفل على نفس عميق ودعاء قصير عند الغضب." },
    { slug: "gratitude", title: "الشكر", focus: "الشكر لله وللناس يحفظ النعم ويزيد المحبة", activity: "اكتبوا ثلاث نعم في بطاقة الحمد لله.", featured: true },
    { slug: "cooperation", title: "التعاون", focus: "المسلم يساعد أهله وأصدقاءه في الخير", activity: "أنجزوا مهمة منزلية جماعية خلال عشر دقائق." },
    { slug: "forgiveness", title: "العفو", focus: "العفو يحرر القلب ويقوي العلاقات", activity: "علّم الطفل جملة: سامحتك وأحب أن نبدأ من جديد.", difficulty: "متوسط" },
    { slug: "modesty", title: "الحياء", focus: "الحياء خلق جميل يجعل الإنسان رقيقاً محترماً", activity: "ناقشوا فرق الحياء عن الخجل بطريقة بسيطة.", difficulty: "عائلي" },
    { slug: "good-friendship", title: "اختيار الصديق", focus: "الصاحب الصالح يعين على الخير والخلق الجميل", activity: "اكتبوا صفات الصديق الطيب في ورقة ملونة." },
  ],
  quran: [
    { slug: "start-learning-quran", title: "كيف أبدأ مع القرآن؟", focus: "وقت قصير ثابت واستماع جيد وتكرار بلا ضغط", activity: "اختاروا خمس دقائق يومية للقرآن بعد صلاة أو قبل النوم.", featured: true },
    { slug: "quran-etiquette", title: "آداب تلاوة القرآن", focus: "الطهارة والإنصات والتدبر واحترام المصحف", activity: "رتبوا مكاناً جميلاً للمصحف وقراءة الأسرة." },
    { slug: "surah-al-fatiha", title: "سورة الفاتحة", focus: "معاني الحمد والاستعانة والهداية في الفاتحة", activity: "اقرأوا الفاتحة ببطء وتوقفوا عند كلمة اهدنا.", featured: true },
    { slug: "short-surahs-plan", title: "خطة السور القصيرة", focus: "بدء الحفظ من الإخلاص والفلق والناس والكوثر", activity: "كرروا سورة قصيرة ثلاث مرات بصوت القارئ ثم بصوت الطفل." },
    { slug: "tajweed-basics", title: "أساسيات التجويد", focus: "التجويد تحسين القراءة بإعطاء الحروف حقها دون تعقيد", activity: "اختاروا حرفاً واحداً وتدربوا على نطقه الصحيح.", difficulty: "متوسط" },
    { slug: "listening-to-quran", title: "الاستماع للقرآن", focus: "الاستماع عبادة ووسيلة للحفظ والطمأنينة", activity: "استمعوا لخمس آيات قبل النوم مع إغلاق المشتتات." },
    { slug: "memorization-review", title: "مراجعة الحفظ", focus: "المراجعة اليومية القصيرة تثبت الحفظ أكثر من الحفظ الطويل", activity: "استخدموا جدول ثلاث خانات: حفظت، راجعت، فهمت." },
    { slug: "quran-meanings", title: "فهم معاني القرآن", focus: "شرح كلمة أو معنى واحد يجعل التلاوة أقرب للقلب", activity: "اختاروا كلمة من سورة قصيرة واسألوا: ماذا تعني؟", difficulty: "متوسط" },
    { slug: "juz-amma-for-kids", title: "جزء عم للأطفال", focus: "سور قصيرة قوية المعنى مناسبة لبداية الحفظ", activity: "ابدأوا بسورة النبأ أو الضحى حسب عمر الطفل." },
    { slug: "quran-in-home", title: "القرآن في البيت", focus: "جعل القرآن صوتاً ومعنى وروتيناً دافئاً في المنزل", activity: "حددوا مجلس قرآن عائلياً مرة في الأسبوع.", difficulty: "عائلي" },
  ],
  hadith: [
    { slug: "hadith-intentions", title: "إنما الأعمال بالنيات", focus: "النية تجعل العمل الصغير عظيماً عند الله", activity: "قبل عمل خير، اسأل الطفل: لمن نفعل هذا؟", featured: true },
    { slug: "hadith-good-word", title: "الكلمة الطيبة صدقة", focus: "الكلام الجميل عمل صالح يؤثر في قلوب الناس", activity: "قولوا ثلاث كلمات طيبة لأفراد الأسرة اليوم.", featured: true },
    { slug: "hadith-smile", title: "تبسمك في وجه أخيك صدقة", focus: "الابتسامة عبادة سهلة تنشر المحبة", activity: "اجعلوا يوم الابتسامة في البيت." },
    { slug: "hadith-no-harm", title: "لا ضرر ولا ضرار", focus: "المسلم لا يؤذي نفسه ولا غيره في اللعب والكلام", activity: "راجعوا لعبة جماعية واسألوا: كيف نجعلها آمنة للجميع؟", difficulty: "متوسط" },
    { slug: "hadith-cleanliness", title: "الطهور شطر الإيمان", focus: "النظافة والطهارة جزء من جمال الإسلام", activity: "رتب الطفل حقيبته أو غرفته بنية النظافة." },
    { slug: "hadith-mercy", title: "من لا يَرحم لا يُرحم", focus: "الرحمة أساس التعامل مع الصغير والكبير", activity: "نفذوا موقف رحمة مع أخ أصغر أو حيوان." },
    { slug: "hadith-easy-religion", title: "يسر الإسلام", focus: "الدين يربي على الرفق والتدرج ولا يحب التشدد", activity: "اختر عبادة صغيرة وثابتة بدلاً من مهمة كبيرة متقطعة.", difficulty: "عائلي" },
    { slug: "hadith-love-for-brother", title: "أحب لأخيك ما تحب لنفسك", focus: "المسلم يفرح بالخير لغيره كما يفرح لنفسه", activity: "شارك شيئاً تحبه مع أخ أو صديق." },
    { slug: "hadith-strong-believer", title: "المؤمن القوي", focus: "القوة تشمل الإيمان والجسم والعلم والصبر", activity: "اجمعوا بين رياضة خفيفة وذكر قصير." },
    { slug: "hadith-seeking-knowledge", title: "طلب العلم", focus: "العلم النافع طريق إلى رضا الله وخدمة الناس", activity: "اختاروا سؤالاً دينياً وابحثوا عن جواب موثوق معاً." },
  ],
  duaa: [
    { slug: "morning-adhkar-lesson", title: "أذكار الصباح", focus: "بداية اليوم بذكر الله وشكره وطلب الحفظ", activity: "اختاروا ذكراً واحداً للصباح ورددوه عند الإفطار.", featured: true },
    { slug: "evening-adhkar-lesson", title: "أذكار المساء", focus: "إغلاق اليوم بالطمأنينة والاستعانة بالله", activity: "رددوا ذكراً قصيراً بعد المغرب مع العائلة." },
    { slug: "sleep-awake-duaa", title: "دعاء النوم والاستيقاظ", focus: "ربط النوم والاستيقاظ باسم الله والحمد له", activity: "ضعوا بطاقة دعاء النوم قرب سرير الطفل." },
    { slug: "eating-drinking-duaa", title: "دعاء الطعام والشراب", focus: "البسملة والحمد والشكر عند الطعام", activity: "ليكن الطفل قائد البسملة على المائدة." },
    { slug: "leaving-home-duaa", title: "دعاء الخروج من البيت", focus: "التوكل على الله عند بداية المشوار", activity: "رددوا الدعاء عند الباب لمدة أسبوع." },
    { slug: "entering-home-duaa", title: "دعاء دخول البيت", focus: "ذكر الله عند دخول البيت يجلب البركة", activity: "علقوا بطاقة صغيرة عند المدخل." },
    { slug: "duaa-for-parents", title: "الدعاء للوالدين", focus: "بر الوالدين بالدعاء والشكر والكلمة الطيبة", activity: "اجعل الطفل يدعو لوالديه بعد صلاة واحدة." },
    { slug: "duaa-when-afraid", title: "دعاء عند الخوف", focus: "الذكر يطمئن القلب عند القلق والظلام والوحدة", activity: "اتفقوا على ذكر قصير يقوله الطفل عند الخوف.", difficulty: "عائلي" },
    { slug: "duaa-for-rain", title: "دعاء المطر", focus: "رؤية المطر فرصة للشكر والدعاء", activity: "عند نزول المطر قولوا: اللهم صيبا نافعا." },
    { slug: "istighfar-for-kids", title: "الاستغفار للصغار", focus: "الاستغفار عودة لطيفة إلى الله بعد الخطأ", activity: "بعد خطأ بسيط، علم الطفل: أستغفر الله وأصلح ما فعلت.", featured: true },
  ],
  adab: [
    { slug: "greeting-etiquette", title: "آداب السلام", focus: "السلام دعاء بالأمان والمحبة وينشر الألفة", activity: "اجعلوا مسابقة: من يبدأ بالسلام هذا اليوم؟", featured: true },
    { slug: "eating-etiquette", title: "آداب الطعام", focus: "البسملة والأكل باليمين والحمد وعدم الإسراف", activity: "طبّقوا ثلاثة آداب على مائدة اليوم." },
    { slug: "speech-etiquette", title: "آداب الكلام", focus: "الكلمة الطيبة والصدق وعدم المقاطعة وحسن الاستماع", activity: "تدربوا على دقيقة استماع بلا مقاطعة." },
    { slug: "entering-home-etiquette", title: "آداب دخول البيت", focus: "السلام والاستئذان والرفق بأهل البيت", activity: "يدخل الطفل البيت بالسلام ثلاث مرات متتالية." },
    { slug: "entering-mosque-etiquette", title: "آداب المسجد", focus: "السكينة والنظافة وخفض الصوت واحترام بيت الله", activity: "زوروا المسجد وطبقوا أدباً واحداً بوضوح." },
    { slug: "visiting-etiquette", title: "آداب الزيارة", focus: "الاستئذان وحسن الجلوس وشكر المضيف", activity: "قبل زيارة قريبة راجعوا ثلاث قواعد بسيطة." },
    { slug: "screen-etiquette", title: "آداب الشاشة", focus: "الوقت أمانة والمحتوى يجب أن يكون نافعاً وآمناً", activity: "اتفقوا على وقت شاشة واضح ومحتوى مفيد.", difficulty: "عائلي" },
    { slug: "clean-room-etiquette", title: "آداب الغرفة والنظام", focus: "ترتيب المكان من شكر النعمة واحترام أهل البيت", activity: "رتب الطفل زاوية صغيرة وينوي النظافة." },
    { slug: "road-etiquette", title: "آداب الطريق", focus: "غض البصر وكف الأذى والسلام ومساعدة المحتاج", activity: "أزيلوا أذى بسيطاً من الطريق بأمان." },
    { slug: "privacy-etiquette", title: "آداب الاستئذان", focus: "احترام خصوصية الآخرين في الغرف والأغراض والكلام", activity: "تدربوا على طرق الباب وانتظار الإذن.", difficulty: "متوسط" },
  ],
};

function buildLesson(category: string, seed: LessonSeed, index: number): Lesson {
  const meta = categoryMeta[category];
  const ageRange = seed.ageRange ?? (seed.difficulty === "عائلي" ? "6-12 سنة مع الأسرة" : index % 3 === 0 ? "8-12 سنة" : "6-10 سنوات");
  const difficulty = seed.difficulty ?? (index % 5 === 0 ? "متوسط" : "مبتدئ");
  const readingTime = seed.readingTime ?? `${7 + (index % 5)} دقائق`;
  const bodySections = [
    {
      heading: "الفكرة الأساسية",
      content: `${seed.focus}. نبدأ مع الطفل من معنى واضح وقريب، ثم نربطه بموقف يراه في البيت أو المدرسة حتى لا يبقى الدرس مجرد معلومة محفوظة.`,
    },
    {
      heading: "كيف نشرحها للطفل؟",
      content: `استخدم كلمات قصيرة وأسئلة مفتوحة: ماذا تلاحظ؟ ماذا تشعر؟ كيف نطبق هذا اليوم؟ هذا الأسلوب يجعل درس ${seed.title} حواراً دافئاً لا اختباراً.`,
    },
    {
      heading: "تطبيق يومي",
      content: `اختر سلوكاً واحداً صغيراً مرتبطاً بالدرس وكرره لمدة أسبوع. التكرار الهادئ يصنع أثراً تربوياً أقوى من الشرح الطويل.`,
    },
  ];
  const whatChildLearns = [
    `يفهم معنى ${seed.title} بلغة مناسبة لعمره.`,
    "يربط المعرفة الإسلامية بسلوك يومي واضح.",
    "يتعلم أن الإسلام رحمة ونظام وطمأنينة.",
  ];
  const relatedLessons = seeds[category]
    .filter((item) => item.slug !== seed.slug)
    .slice(0, 3)
    .map((item) => item.slug);

  return {
    slug: seed.slug,
    category,
    title: seed.title,
    ageRange,
    difficulty,
    readingTime,
    summary: `${seed.focus} بأسلوب عربي بسيط ودافئ مناسب للأطفال من 6 إلى 12 سنة.`,
    bodySections,
    whatChildLearns,
    parentNote: `${meta.parent} لا تجعل الدرس طويلاً؛ خمس دقائق صادقة مع تطبيق عملي تكفي لبداية قوية.`,
    activity: seed.activity,
    relatedLessons,
    relatedQuestions: relatedLessons.map((slug) => `${slug}-question`),
    tags: meta.tags,
    featured: seed.featured,
    duration: readingTime,
    age: ageRange,
    level: difficulty,
    objectives: whatChildLearns,
    body: bodySections.map((section) => `${section.heading}: ${section.content}`),
    takeaways: whatChildLearns,
    relatedSlugs: relatedLessons,
  };
}

export const lessons: Lesson[] = Object.entries(seeds).flatMap(([category, items]) =>
  items.map((seed, index) => buildLesson(category, seed, index))
);

export function getLessonsByCategory(category: string): Lesson[] {
  return lessons.filter((lesson) => lesson.category === category);
}

export function getLesson(category: string, slug: string): Lesson | undefined {
  return lessons.find((lesson) => lesson.category === category && lesson.slug === slug);
}

export function getLessonBySlug(slug: string): Lesson | undefined {
  return lessons.find((lesson) => lesson.slug === slug);
}

export function getRelatedLessons(slugs: string[], category?: string): Lesson[] {
  const related = lessons.filter((lesson) => slugs.includes(lesson.slug));
  if (related.length > 0) return related;
  return lessons.filter((lesson) => !category || lesson.category === category).slice(0, 3);
}

export function getFeaturedLessons(count = 8): Lesson[] {
  return lessons.filter((lesson) => lesson.featured).slice(0, count);
}
