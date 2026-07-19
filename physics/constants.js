const physicsConstants = [
    // --- ثوابت كونية وكهرومغناطيسية ---
    { symbol: "c", nameAr: "سرعة الضوء في الفراغ", nameEn: "Speed of Light", val: "\\(3 \\times 10^8\\)", unit: "m/s" },
    { symbol: "G", nameAr: "ثابت الجذب العام", nameEn: "Gravitational Constant", val: "\\(6.674 \\times 10^{-11}\\)", unit: "N.m²/kg²" },
    { symbol: "g", nameAr: "عجلة الجاذبية الأرضية", nameEn: "Standard Gravity", val: "\\(9.80665\\)", unit: "m/s²" },
    { symbol: "h", nameAr: "ثابت بلانك", nameEn: "Planck's Constant", val: "\\(6.626 \\times 10^{-34}\\)", unit: "J.s" },
    { symbol: "\\hbar", nameAr: "ثابت بلانك المخفض (ديراك)", nameEn: "Reduced Planck Constant", val: "\\(1.054 \\times 10^{-34}\\)", unit: "J.s" },
    { symbol: "e", nameAr: "الشحنة الأولية (شحنة الإلكترون)", nameEn: "Elementary Charge", val: "\\(1.602 \\times 10^{-19}\\)", unit: "C" },
    { symbol: "\\mu_0", nameAr: "النفاذية المغناطيسية للفراغ", nameEn: "Vacuum Permeability", val: "\\(4\\pi \\times 10^{-7}\\)", unit: "T.m/A" },
    { symbol: "\\varepsilon_0", nameAr: "السماحية الكهربية للفراغ", nameEn: "Vacuum Permittivity", val: "\\(8.854 \\times 10^{-12}\\)", unit: "F/m" },
    { symbol: "k", nameAr: "ثابت كولوم", nameEn: "Coulomb's Constant", val: "\\(8.987 \\times 10^9\\)", unit: "N.m²/C²" },

    // --- ثوابت ذرية ودون ذرية ---
    { symbol: "m_e", nameAr: "كتلة الإلكترون", nameEn: "Electron Mass", val: "\\(9.109 \\times 10^{-31}\\)", unit: "kg" },
    { symbol: "m_p", nameAr: "كتلة البروتون", nameEn: "Proton Mass", val: "\\(1.672 \\times 10^{-27}\\)", unit: "kg" },
    { symbol: "m_n", nameAr: "كتلة النيوترون", nameEn: "Neutron Mass", val: "\\(1.674 \\times 10^{-27}\\)", unit: "kg" },
    { symbol: "R_H", nameAr: "ثابت ريدبرج", nameEn: "Rydberg Constant", val: "\\(1.097 \\times 10^7\\)", unit: "m^{-1}" },
    { symbol: "a_0", nameAr: "نصف قطر بور", nameEn: "Bohr Radius", val: "\\(5.291 \\times 10^{-11}\\)", unit: "m" },
    { symbol: "\\alpha", nameAr: "ثابت البناء الدقيق", nameEn: "Fine-structure Constant", val: "\\(1 / 137.035\\)", unit: "dimensionless" },
    { symbol: "\\mu_B", nameAr: "ماجنيتون بور", nameEn: "Bohr Magneton", val: "\\(9.274 \\times 10^{-24}\\)", unit: "J/T" },

    // --- ثوابت كيميائية وحرارية ---
    { symbol: "N_A", nameAr: "عدد أفوجادرو", nameEn: "Avogadro's Number", val: "\\(6.022 \\times 10^{23}\\)", unit: "mol^{-1}" },
    { symbol: "R", nameAr: "الثابت العام للغازات", nameEn: "Universal Gas Constant", val: "\\(8.314\\)", unit: "J/(mol.K)" },
    { symbol: "k_B", nameAr: "ثابت بولتزمان", nameEn: "Boltzmann Constant", val: "\\(1.380 \\times 10^{-23}\\)", unit: "J/K" },
    { symbol: "\\sigma", nameAr: "ثابت ستيفان-بولتزمان", nameEn: "Stefan-Boltzmann Constant", val: "\\(5.670 \\times 10^{-8}\\)", unit: "W/(m².K⁴)" },
    { symbol: "b", nameAr: "ثابت فين", nameEn: "Wien's Displacement Constant", val: "\\(2.897 \\times 10^{-3}\\)", unit: "m.K" },
    { symbol: "F", nameAr: "ثابت فاراداي", nameEn: "Faraday Constant", val: "\\(9.648 \\times 10^4\\)", unit: "C/mol" },
    { symbol: "amu (u)", nameAr: "وحدة الكتل الذرية", nameEn: "Atomic Mass Unit", val: "\\(1.660 \\times 10^{-27}\\)", unit: "kg" },

    // --- ثوابت فلكية ---
    { symbol: "M_\\oplus", nameAr: "كتلة الأرض", nameEn: "Earth Mass", val: "\\(5.972 \\times 10^{24}\\)", unit: "kg" },
    { symbol: "R_\\oplus", nameAr: "نصف قطر الأرض", nameEn: "Earth Radius", val: "\\(6.371 \\times 10^6\\)", unit: "m" },
    { symbol: "M_\\odot", nameAr: "كتلة الشمس", nameEn: "Solar Mass", val: "\\(1.989 \\times 10^{30}\\)", unit: "kg" },
    { symbol: "AU", nameAr: "الوحدة الفلكية", nameEn: "Astronomical Unit", val: "\\(1.496 \\times 10^{11}\\)", unit: "m" }
];

const physicsConversions = [
    // --- تحويلات الأطوال (Length) ---
    { nameAr: "بيكومتر إلى متر", nameEn: "pm to m", from: "pm", to: "m", factor: "\\(\\times 10^{-12}\\)" },
    { nameAr: "أنجستروم إلى متر", nameEn: "Angstrom to m", from: "Å", to: "m", factor: "\\(\\times 10^{-10}\\)" },
    { nameAr: "نانومتر إلى متر", nameEn: "nm to m", from: "nm", to: "m", factor: "\\(\\times 10^{-9}\\)" },
    { nameAr: "ميكرومتر إلى متر", nameEn: "μm to m", from: "μm", to: "m", factor: "\\(\\times 10^{-6}\\)" },
    { nameAr: "ملليمتر إلى متر", nameEn: "mm to m", from: "mm", to: "m", factor: "\\(\\times 10^{-3}\\)" },
    { nameAr: "سنتيمتر إلى متر", nameEn: "cm to m", from: "cm", to: "m", factor: "\\(\\times 10^{-2}\\)" },
    { nameAr: "كيلومتر إلى متر", nameEn: "km to m", from: "km", to: "m", factor: "\\(\\times 10^3\\)" },
    { nameAr: "بوصة إلى متر", nameEn: "Inch to m", from: "in", to: "m", factor: "\\(\\times 0.0254\\)" },
    { nameAr: "قدم إلى متر", nameEn: "Foot to m", from: "ft", to: "m", factor: "\\(\\times 0.3048\\)" },
    { nameAr: "ياردة إلى متر", nameEn: "Yard to m", from: "yd", to: "m", factor: "\\(\\times 0.9144\\)" },
    { nameAr: "ميل بري إلى متر", nameEn: "Mile to m", from: "mi", to: "m", factor: "\\(\\times 1609.34\\)" },
    { nameAr: "ميل بحري إلى متر", nameEn: "Nautical Mile to m", from: "nmi", to: "m", factor: "\\(\\times 1852\\)" },
    { nameAr: "سنة ضوئية إلى متر", nameEn: "Light Year to m", from: "ly", to: "m", factor: "\\(\\times 9.461 \\times 10^{15}\\)" },
    { nameAr: "فرسخ فلكي إلى متر", nameEn: "Parsec to m", from: "pc", to: "m", factor: "\\(\\times 3.086 \\times 10^{16}\\)" },

    // --- تحويلات المساحة (Area) ---
    { nameAr: "ملليمتر مربع إلى متر مربع", nameEn: "mm² to m²", from: "mm²", to: "m²", factor: "\\(\\times 10^{-6}\\)" },
    { nameAr: "سنتيمتر مربع إلى متر مربع", nameEn: "cm² to m²", from: "cm²", to: "m²", factor: "\\(\\times 10^{-4}\\)" },
    { nameAr: "كيلومتر مربع إلى متر مربع", nameEn: "km² to m²", from: "km²", to: "m²", factor: "\\(\\times 10^6\\)" },
    { nameAr: "هكتار إلى متر مربع", nameEn: "Hectare to m²", from: "ha", to: "m²", factor: "\\(\\times 10^4\\)" },
    { nameAr: "فدان إلى متر مربع", nameEn: "Acre to m²", from: "acre", to: "m²", factor: "\\(\\times 4046.86\\)" },
    { nameAr: "بارن إلى متر مربع (فيزياء نووية)", nameEn: "Barn to m²", from: "b", to: "m²", factor: "\\(\\times 10^{-28}\\)" },

    // --- تحويلات الحجم (Volume) ---
    { nameAr: "سنتيمتر مكعب إلى متر مكعب", nameEn: "cm³ to m³", from: "cm³ (cc)", to: "m³", factor: "\\(\\times 10^{-6}\\)" },
    { nameAr: "لتر إلى متر مكعب", nameEn: "Liter to m³", from: "L", to: "m³", factor: "\\(\\times 10^{-3}\\)" },
    { nameAr: "جالون أمريكي إلى لتر", nameEn: "US Gallon to L", from: "gal (US)", to: "L", factor: "\\(\\times 3.785\\)" },
    { nameAr: "جالون إمبراطوري إلى لتر", nameEn: "UK Gallon to L", from: "gal (UK)", to: "L", factor: "\\(\\times 4.546\\)" },

    // --- تحويلات الكتلة (Mass) ---
    { nameAr: "ملليجرام إلى كيلوجرام", nameEn: "mg to kg", from: "mg", to: "kg", factor: "\\(\\times 10^{-6}\\)" },
    { nameAr: "جرام إلى كيلوجرام", nameEn: "g to kg", from: "g", to: "kg", factor: "\\(\\times 10^{-3}\\)" },
    { nameAr: "طن متري إلى كيلوجرام", nameEn: "Tonne to kg", from: "t", to: "kg", factor: "\\(\\times 10^3\\)" },
    { nameAr: "أوقية (أونصة) إلى كيلوجرام", nameEn: "Ounce to kg", from: "oz", to: "kg", factor: "\\(\\times 0.02835\\)" },
    { nameAr: "رطل (باوند) إلى كيلوجرام", nameEn: "Pound to kg", from: "lb", to: "kg", factor: "\\(\\times 0.45359\\)" },
    { nameAr: "سلاج (Slug) إلى كيلوجرام", nameEn: "Slug to kg", from: "slug", to: "kg", factor: "\\(\\times 14.5939\\)" },

    // --- تحويلات الزمن (Time) ---
    { nameAr: "دقيقة إلى ثانية", nameEn: "Minute to s", from: "min", to: "s", factor: "\\(\\times 60\\)" },
    { nameAr: "ساعة إلى ثانية", nameEn: "Hour to s", from: "h", to: "s", factor: "\\(\\times 3600\\)" },
    { nameAr: "يوم إلى ثانية", nameEn: "Day to s", from: "d", to: "s", factor: "\\(\\times 86400\\)" },
    { nameAr: "سنة (تقريبية) إلى ثانية", nameEn: "Year to s", from: "yr", to: "s", factor: "\\(\\times 3.1536 \\times 10^7\\)" },

    // --- تحويلات الطاقة (Energy) ---
    { nameAr: "إلكترون فولت إلى جول", nameEn: "eV to Joule", from: "eV", to: "J", factor: "\\(\\times 1.602 \\times 10^{-19}\\)" },
    { nameAr: "مليون إلكترون فولت إلى جول", nameEn: "MeV to Joule", from: "MeV", to: "J", factor: "\\(\\times 1.602 \\times 10^{-13}\\)" },
    { nameAr: "إرج إلى جول", nameEn: "Erg to Joule", from: "erg", to: "J", factor: "\\(\\times 10^{-7}\\)" },
    { nameAr: "سعر حراري إلى جول", nameEn: "Calorie to Joule", from: "cal", to: "J", factor: "\\(\\times 4.184\\)" },
    { nameAr: "كيلو وات ساعة إلى جول", nameEn: "kWh to Joule", from: "kWh", to: "J", factor: "\\(\\times 3.6 \\times 10^6\\)" },
    { nameAr: "وحدة حرارية بريطانية إلى جول", nameEn: "BTU to Joule", from: "BTU", to: "J", factor: "\\(\\times 1055.06\\)" },

    // --- تحويلات القوة والضغط (Force & Pressure) ---
    { nameAr: "داين إلى نيوتن", nameEn: "Dyne to Newton", from: "dyn", to: "N", factor: "\\(\\times 10^{-5}\\)" },
    { nameAr: "ضغط جوي قياسي إلى باسكال", nameEn: "atm to Pascal", from: "atm", to: "Pa", factor: "\\(\\times 1.013 \\times 10^5\\)" },
    { nameAr: "بار إلى باسكال", nameEn: "Bar to Pascal", from: "bar", to: "Pa", factor: "\\(\\times 10^5\\)" },
    { nameAr: "ميلليمتر زئبق (تور) إلى باسكال", nameEn: "mmHg (Torr) to Pascal", from: "Torr", to: "Pa", factor: "\\(\\times 133.322\\)" },
    { nameAr: "رطل لكل بوصة مربعة إلى باسكال", nameEn: "psi to Pascal", from: "psi", to: "Pa", factor: "\\(\\times 6894.76\\)" },

    // --- تحويلات القدرة (Power) ---
    { nameAr: "حصان ميكانيكي إلى وات", nameEn: "Horsepower (Mech) to Watt", from: "hp", to: "W", factor: "\\(\\times 745.7\\)" },
    { nameAr: "حصان متري إلى وات", nameEn: "Horsepower (Metric) to Watt", from: "hp (M)", to: "W", factor: "\\(\\times 735.5\\)" },

    // --- تحويلات التردد (Frequency) ---
    { nameAr: "كيلو هرتز إلى هرتز", nameEn: "kHz to Hz", from: "kHz", to: "Hz", factor: "\\(\\times 10^3\\)" },
    { nameAr: "ميجا هرتز إلى هرتز", nameEn: "MHz to Hz", from: "MHz", to: "Hz", factor: "\\(\\times 10^6\\)" },
    { nameAr: "جيجا هرتز إلى هرتز", nameEn: "GHz to Hz", from: "GHz", to: "Hz", factor: "\\(\\times 10^9\\)" },
    { nameAr: "تيرا هرتز إلى هرتز", nameEn: "THz to Hz", from: "THz", to: "Hz", factor: "\\(\\times 10^{12}\\)" }
];