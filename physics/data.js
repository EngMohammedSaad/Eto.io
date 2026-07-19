const physicsData = [
    // ==========================================
    // --- الوحدة الأولى: الكهربية التيارية ---
    // ==========================================
    {
        id: "electric_current",
        category: "electricity",
        mainFormula: "\\( I = \\frac{Q}{t} \\)",
        nameAr: "شدة التيار الكهربي",
        nameEn: "Electric Current",
        descAr: "معدل تدفق الشحنات الكهربية خلال مقطع من موصل في الثانية الواحدة.",
        descEn: "Rate of flow of electric charges.",
        variations: [
            { formula: "I α Q", xLabel: "كمية الشحنة (Q)", yLabel: "التيار (I)", labels: [1, 2, 3, 4], dataPoints: [2, 4, 6, 8], relationAr: "طردية", relationEn: "Direct" }
        ],
        calcMethods: [
            {
                nameAr: "الأساسي", nameEn: "Basic",
                inputs: [{ id: "Q", labelAr: "الشحنة (Q)", labelEn: "Charge (Q)" }, { id: "t", labelAr: "الزمن (t)", labelEn: "Time (t)" }],
                calculate: (vals) => vals.Q / vals.t
            }
        ],
        calcResultUnit: "A"
    },
    {
        id: "ohm_law",
        category: "electricity",
        mainFormula: "\\( V = I \\cdot R \\)",
        nameAr: "قانون أوم",
        nameEn: "Ohm's Law",
        descAr: "يوضح العلاقة بين فرق الجهد، شدة التيار، والمقاومة.",
        descEn: "Relates voltage, current, and resistance.",
        variations: [
            { formula: "V = I × R", xLabel: "التيار (I)", yLabel: "الجهد (V)", labels: [1, 2, 3, 4, 5], dataPoints: [5, 10, 15, 20, 25], relationAr: "طردية", relationEn: "Direct" }
        ],
        calcMethods: [
            {
                nameAr: "الأساسي", nameEn: "Basic",
                inputs: [{ id: "I", labelAr: "التيار (I)", labelEn: "Current (I)" }, { id: "R", labelAr: "المقاومة (R)", labelEn: "Resistance (R)" }],
                calculate: (vals) => vals.I * vals.R
            }
        ],
        calcResultUnit: "V"
    },
    {
        id: "electric_power",
        category: "electricity",
        mainFormula: "\\( P_w = V \\cdot I = I^2 R = \\frac{V^2}{R} \\)",
        nameAr: "القدرة الكهربية",
        nameEn: "Electric Power",
        descAr: "الطاقة الكهربية المستنفذة في الثانية الواحدة.",
        descEn: "Electrical energy consumed per unit time.",
        variations: [
            { formula: "P_w α I²", xLabel: "مربع التيار (I²)", yLabel: "القدرة (P_w)", labels: [1, 4, 9, 16], dataPoints: [10, 40, 90, 160], relationAr: "طردية", relationEn: "Direct" }
        ],
        calcMethods: [
            {
                nameAr: "بمعلومية V و I", nameEn: "Using V and I",
                inputs: [{ id: "V", labelAr: "الجهد (V)", labelEn: "Voltage (V)" }, { id: "I", labelAr: "التيار (I)", labelEn: "Current (I)" }],
                calculate: (vals) => vals.V * vals.I
            },
            {
                nameAr: "بمعلومية I و R", nameEn: "Using I and R",
                inputs: [{ id: "I", labelAr: "التيار (I)", labelEn: "Current (I)" }, { id: "R", labelAr: "المقاومة (R)", labelEn: "Resistance (R)" }],
                calculate: (vals) => Math.pow(vals.I, 2) * vals.R
            },
            {
                nameAr: "بمعلومية V و R", nameEn: "Using V and R",
                inputs: [{ id: "V", labelAr: "الجهد (V)", labelEn: "Voltage (V)" }, { id: "R", labelAr: "المقاومة (R)", labelEn: "Resistance (R)" }],
                calculate: (vals) => Math.pow(vals.V, 2) / vals.R
            }
        ],
        calcResultUnit: "W"
    },
    {
        id: "ohm_closed_circuit",
        category: "electricity",
        mainFormula: "\\( V = V_B - I \\cdot r \\)",
        nameAr: "قانون أوم للدوائر المغلقة",
        nameEn: "Ohm's Law for Closed Circuits",
        descAr: "قانون أوم للدائرة المغلقة لتعيين فرق الجهد بين طرفي بطارية أثناء التفريغ.",
        descEn: "Terminal voltage of a discharging battery.",
        variations: [
            { formula: "V = V_B - I r", xLabel: "التيار (I)", yLabel: "فرق الجهد (V)", labels: [0, 1, 2, 3, 4], dataPoints: [12, 10, 8, 6, 4], relationAr: "تناقصية (خطي)", relationEn: "Decreasing Linear" }
        ],
        calcMethods: [
            {
                nameAr: "الأساسي", nameEn: "Basic",
                inputs: [{ id: "VB", labelAr: "القوة الدافعة (VB)", labelEn: "EMF (VB)" }, { id: "I", labelAr: "التيار (I)", labelEn: "Current (I)" }, { id: "r", labelAr: "مقاومة داخلية (r)", labelEn: "Internal Res (r)" }],
                calculate: (vals) => vals.VB - (vals.I * vals.r)
            }
        ],
        calcResultUnit: "V"
    },
    {
        id: "resistance_factors",
        category: "electricity",
        mainFormula: "\\( R = \\rho_e \\frac{L}{A} \\)",
        nameAr: "المقاومة الكهربية لموصل",
        nameEn: "Electrical Resistance",
        descAr: "لحساب المقاومة الكهربية بمعلومية المقاومة النوعية والطول والمساحة.",
        descEn: "Factors affecting conductor resistance.",
        variations: [
            { formula: "R α L", xLabel: "الطول (L)", yLabel: "المقاومة (R)", labels: [5, 10, 15, 20], dataPoints: [2, 4, 6, 8], relationAr: "طردية", relationEn: "Direct" }
        ],
        calcMethods: [
            {
                nameAr: "الأساسي", nameEn: "Basic",
                inputs: [{ id: "rho", labelAr: "مقاومة نوعية (ρ)", labelEn: "Resistivity (ρ)" }, { id: "L", labelAr: "الطول (L)", labelEn: "Length (L)" }, { id: "A", labelAr: "المساحة (A)", labelEn: "Area (A)" }],
                calculate: (vals) => (vals.rho * vals.L) / vals.A
            }
        ],
        calcResultUnit: "Ω"
    },

    // =======================================================
    // --- الوحدة الثانية: التأثير المغناطيسي وأجهزة القياس ---
    // =======================================================
    {
        id: "magnetic_flux",
        category: "magnetism",
        mainFormula: "\\( \\Phi_m = B \\cdot A \\cdot \\sin(\\theta) \\)",
        nameAr: "الفيض المغناطيسي",
        nameEn: "Magnetic Flux",
        descAr: "إجمالي خطوط الفيض المغناطيسي المارة عمودياً بمساحة معينة.",
        descEn: "Total magnetic field passing through a given area.",
        variations: [
            { formula: "Φ_m α sin(θ)", xLabel: "جيب الزاوية sin(θ)", yLabel: "الفيض (Φ_m)", labels: [0, 0.5, 0.707, 0.866, 1], dataPoints: [0, 5, 7.07, 8.66, 10], relationAr: "طردية", relationEn: "Direct" }
        ],
        calcMethods: [
            {
                nameAr: "الأساسي", nameEn: "Basic",
                inputs: [{ id: "B", labelAr: "كثافة الفيض (B)", labelEn: "Flux Density (B)" }, { id: "A", labelAr: "المساحة (A)", labelEn: "Area (A)" }, { id: "theta", labelAr: "الزاوية بالدرجات (θ)", labelEn: "Angle (θ)" }],
                calculate: (vals) => vals.B * vals.A * Math.sin(vals.theta * Math.PI / 180)
            }
        ],
        calcResultUnit: "Wb"
    },
    {
        id: "magnetic_wire",
        category: "magnetism",
        mainFormula: "\\( B = \\frac{\\mu \\cdot I}{2\\pi \\cdot d} \\)",
        nameAr: "كثافة الفيض لسلك مستقيم",
        nameEn: "Magnetic Field (Straight Wire)",
        descAr: "لحساب كثافة الفيض المغناطيسي الناشئ عن مرور تيار في سلك مستقيم.",
        descEn: "Magnetic flux density around a straight current-carrying wire.",
        variations: [
            { formula: "B α 1/d", xLabel: "المسافة (d)", yLabel: "كثافة الفيض (B)", labels: [1, 2, 3, 4], dataPoints: [100, 50, 33.3, 25], relationAr: "عكسية", relationEn: "Inverse" }
        ],
        calcMethods: [
            {
                nameAr: "الأساسي", nameEn: "Basic",
                inputs: [{ id: "mu", labelAr: "النفاذية (μ)", labelEn: "Permeability (μ)" }, { id: "I", labelAr: "التيار (I)", labelEn: "Current (I)" }, { id: "d", labelAr: "البعد (d)", labelEn: "Distance (d)" }],
                calculate: (vals) => (vals.mu * vals.I) / (2 * Math.PI * vals.d)
            }
        ],
        calcResultUnit: "T"
    },
    {
        id: "magnetic_circular_coil",
        category: "magnetism",
        mainFormula: "\\( B = \\frac{\\mu \\cdot N \\cdot I}{2r} \\)",
        nameAr: "كثافة الفيض لملف دائري",
        nameEn: "Magnetic Field (Circular Coil)",
        descAr: "لحساب كثافة الفيض لملف دائري عند مركزه.",
        descEn: "Magnetic flux density at the center of a circular coil.",
        variations: [
            { formula: "B α 1/r", xLabel: "نصف القطر (r)", yLabel: "كثافة الفيض (B)", labels: [1, 2, 3, 4], dataPoints: [100, 50, 33.3, 25], relationAr: "عكسية", relationEn: "Inverse" }
        ],
        calcMethods: [
            {
                nameAr: "الأساسي", nameEn: "Basic",
                inputs: [{ id: "mu", labelAr: "النفاذية (μ)", labelEn: "Permeability (μ)" }, { id: "N", labelAr: "عدد اللفات (N)", labelEn: "Turns (N)" }, { id: "I", labelAr: "التيار (I)", labelEn: "Current (I)" }, { id: "r", labelAr: "نصف القطر (r)", labelEn: "Radius (r)" }],
                calculate: (vals) => (vals.mu * vals.N * vals.I) / (2 * vals.r)
            }
        ],
        calcResultUnit: "T"
    },
    {
        id: "magnetic_solenoid",
        category: "magnetism",
        mainFormula: "\\( B = \\frac{\\mu \\cdot N \\cdot I}{L} \\)",
        nameAr: "كثافة الفيض لملف لولبي",
        nameEn: "Magnetic Field (Solenoid)",
        descAr: "كثافة الفيض المغناطيسي عند نقطة على محور الملف اللولبي.",
        descEn: "Magnetic flux density on the axis of a solenoid.",
        variations: [
            { formula: "B α I", xLabel: "التيار (I)", yLabel: "كثافة الفيض (B)", labels: [1, 2, 3, 4], dataPoints: [15, 30, 45, 60], relationAr: "طردية", relationEn: "Direct" }
        ],
        calcMethods: [
            {
                nameAr: "الأساسي", nameEn: "Basic",
                inputs: [{ id: "mu", labelAr: "النفاذية (μ)", labelEn: "Permeability (μ)" }, { id: "N", labelAr: "اللفات (N)", labelEn: "Turns (N)" }, { id: "I", labelAr: "التيار (I)", labelEn: "Current (I)" }, { id: "L", labelAr: "طول الملف (L)", labelEn: "Length (L)" }],
                calculate: (vals) => (vals.mu * vals.N * vals.I) / vals.L
            }
        ],
        calcResultUnit: "T"
    },
    {
        id: "magnetic_force",
        category: "magnetism",
        mainFormula: "\\( F = B \\cdot I \\cdot L \\cdot \\sin(\\theta) \\)",
        nameAr: "القوة المغناطيسية على سلك",
        nameEn: "Magnetic Force on Wire",
        descAr: "القوة المؤثرة على سلك مستقيم يمر به تيار وموضوع في مجال مغناطيسي.",
        descEn: "Force acting on a current-carrying wire in a magnetic field.",
        variations: [
            { formula: "F α L", xLabel: "الطول (L)", yLabel: "القوة (F)", labels: [1, 2, 3, 4], dataPoints: [5, 10, 15, 20], relationAr: "طردية", relationEn: "Direct" }
        ],
        calcMethods: [
            {
                nameAr: "الأساسي", nameEn: "Basic",
                inputs: [{ id: "B", labelAr: "الكثافة (B)", labelEn: "Field (B)" }, { id: "I", labelAr: "التيار (I)", labelEn: "Current (I)" }, { id: "L", labelAr: "الطول (L)", labelEn: "Length (L)" }, { id: "theta", labelAr: "الزاوية (θ)", labelEn: "Angle (θ)" }],
                calculate: (vals) => vals.B * vals.I * vals.L * Math.sin(vals.theta * Math.PI / 180)
            }
        ],
        calcResultUnit: "N"
    },
    {
        id: "magnetic_torque",
        category: "magnetism",
        mainFormula: "\\( \\tau = B \\cdot I \\cdot A \\cdot N \\cdot \\sin(\\theta) \\)",
        nameAr: "عزم الازدواج المغناطيسي",
        nameEn: "Magnetic Torque",
        descAr: "عزم الازدواج المؤثر على ملف يمر به تيار موضوع في مجال مغناطيسي.",
        descEn: "Torque acting on a current-carrying coil in a magnetic field.",
        variations: [
            { formula: "τ α sin(θ)", xLabel: "الزاوية (θ)", yLabel: "العزم (τ)", labels: [0, 30, 90, 150, 180], dataPoints: [0, 5, 10, 5, 0], relationAr: "جيبية", relationEn: "Sinusoidal" }
        ],
        calcMethods: [
            {
                nameAr: "الأساسي", nameEn: "Basic",
                inputs: [{ id: "B", labelAr: "الفيض (B)", labelEn: "Field (B)" }, { id: "I", labelAr: "التيار (I)", labelEn: "Current (I)" }, { id: "A", labelAr: "المساحة (A)", labelEn: "Area (A)" }, { id: "N", labelAr: "اللفات (N)", labelEn: "Turns (N)" }, { id: "theta", labelAr: "الزاوية (θ)", labelEn: "Angle (θ)" }],
                calculate: (vals) => vals.B * vals.I * vals.A * vals.N * Math.sin(vals.theta * Math.PI / 180)
            }
        ],
        calcResultUnit: "N.m"
    },
    {
        id: "magnetic_dipole",
        category: "magnetism",
        mainFormula: "\\( \\vec{md} = I \\cdot A \\cdot N \\)",
        nameAr: "عزم ثنائي القطب المغناطيسي",
        nameEn: "Magnetic Dipole Moment",
        descAr: "كمية متجهة عمودية على مساحة الملف و تعتمد على التيار والمساحة واللفات.",
        descEn: "Vector quantity perpendicular to the coil area.",
        variations: [
            { formula: "md α I", xLabel: "التيار (I)", yLabel: "عزم ثنائي القطب", labels: [1, 2, 3, 4], dataPoints: [2, 4, 6, 8], relationAr: "طردية", relationEn: "Direct" }
        ],
        calcMethods: [
            {
                nameAr: "الأساسي", nameEn: "Basic",
                inputs: [{ id: "I", labelAr: "التيار (I)", labelEn: "Current (I)" }, { id: "A", labelAr: "المساحة (A)", labelEn: "Area (A)" }, { id: "N", labelAr: "اللفات (N)", labelEn: "Turns (N)" }],
                calculate: (vals) => vals.I * vals.A * vals.N
            }
        ],
        calcResultUnit: "A.m²"
    },
    {
        id: "ammeter_shunt",
        category: "measurements",
        mainFormula: "\\( R_s = \\frac{I_g \\cdot R_g}{I - I_g} \\)",
        nameAr: "مجزئ التيار (الأميتر)",
        nameEn: "Ammeter Shunt Resistance",
        descAr: "مقاومة صغيرة توصل على التوازي لتحويل الجلفانومتر إلى أميتر.",
        descEn: "Small resistance in parallel to convert galvanometer to ammeter.",
        variations: [
            { formula: "I α 1/R_s", xLabel: "مجزئ التيار (R_s)", yLabel: "أقصى تيار (I)", labels: [0.1, 0.2, 0.5, 1], dataPoints: [100, 50, 20, 10], relationAr: "عكسية", relationEn: "Inverse" }
        ],
        calcMethods: [
            {
                nameAr: "الأساسي", nameEn: "Basic",
                inputs: [{ id: "Ig", labelAr: "تيار الجلفانومتر", labelEn: "Galv. Current" }, { id: "Rg", labelAr: "مقاومة الجلفانومتر", labelEn: "Galv. Res" }, { id: "I", labelAr: "التيار الكلي (I)", labelEn: "Total Current" }],
                calculate: (vals) => (vals.Ig * vals.Rg) / (vals.I - vals.Ig)
            }
        ],
        calcResultUnit: "Ω"
    },
    {
        id: "voltmeter_multiplier",
        category: "measurements",
        mainFormula: "\\( R_m = \\frac{V - V_g}{I_g} \\)",
        nameAr: "مضاعف الجهد (الفولتميتر)",
        nameEn: "Voltmeter Multiplier",
        descAr: "مقاومة كبيرة توصل على التوالي لتحويل الجلفانومتر إلى فولتميتر.",
        descEn: "Large resistance in series to convert galvanometer to voltmeter.",
        variations: [
            { formula: "V α R_m", xLabel: "مضاعف الجهد (R_m)", yLabel: "أقصى فرق جهد (V)", labels: [1000, 2000, 3000, 4000], dataPoints: [10, 20, 30, 40], relationAr: "طردية", relationEn: "Direct" }
        ],
        calcMethods: [
            {
                nameAr: "الأساسي", nameEn: "Basic",
                inputs: [{ id: "V", labelAr: "الجهد الكلي (V)", labelEn: "Total Voltage" }, { id: "Vg", labelAr: "جهد الجلفانومتر", labelEn: "Galv. Voltage" }, { id: "Ig", labelAr: "تيار الجلفانومتر", labelEn: "Galv. Current" }],
                calculate: (vals) => (vals.V - vals.Vg) / vals.Ig
            }
        ],
        calcResultUnit: "Ω"
    },

    // ============================================
    // --- الوحدة الثالثة: الحث الكهرومغناطيسي ---
    // ============================================
    {
        id: "faraday_law",
        category: "induction",
        mainFormula: "\\( e.m.f = -N \\frac{\\Delta\\Phi_m}{\\Delta t} \\)",
        nameAr: "قانون فاراداي",
        nameEn: "Faraday's Law of Induction",
        descAr: "ق.د.ك المستحثة تتناسب طردياً مع المعدل الزمني لقطع خطوط الفيض (إشارة سالب لقاعدة لنز).",
        descEn: "Induced EMF is directly proportional to the rate of change of magnetic flux.",
        variations: [
            { formula: "e.m.f α ΔΦm/Δt", xLabel: "معدل التغير (ΔΦ/Δt)", yLabel: "ق.د.ك (EMF)", labels: [1, 2, 3, 4], dataPoints: [10, 20, 30, 40], relationAr: "طردية", relationEn: "Direct" }
        ],
        calcMethods: [
            {
                nameAr: "الأساسي", nameEn: "Basic",
                inputs: [{ id: "N", labelAr: "اللفات (N)", labelEn: "Turns (N)" }, { id: "dPhi", labelAr: "التغير في الفيض", labelEn: "Flux Change" }, { id: "dt", labelAr: "الزمن (Δt)", labelEn: "Time (Δt)" }],
                calculate: (vals) => -vals.N * (vals.dPhi / vals.dt)
            }
        ],
        calcResultUnit: "V"
    },
    {
        id: "wire_induction",
        category: "induction",
        mainFormula: "\\( e.m.f = -B \\cdot L \\cdot v \\cdot \\sin(\\theta) \\)",
        nameAr: "ق.د.ك في سلك مستقيم",
        nameEn: "EMF in a Straight Wire",
        descAr: "القوة الدافعة الكهربية المستحثة المتولدة في سلك يتحرك في مجال مغناطيسي.",
        descEn: "EMF generated in a wire moving through a magnetic field.",
        variations: [
            { formula: "e.m.f α v", xLabel: "السرعة (v)", yLabel: "ق.د.ك (EMF)", labels: [10, 20, 30, 40], dataPoints: [2, 4, 6, 8], relationAr: "طردية", relationEn: "Direct" }
        ],
        calcMethods: [
            {
                nameAr: "الأساسي", nameEn: "Basic",
                inputs: [{ id: "B", labelAr: "الفيض (B)", labelEn: "Field (B)" }, { id: "L", labelAr: "طول السلك (L)", labelEn: "Length (L)" }, { id: "v", labelAr: "السرعة (v)", labelEn: "Velocity (v)" }, { id: "theta", labelAr: "الزاوية (θ)", labelEn: "Angle (θ)" }],
                calculate: (vals) => -vals.B * vals.L * vals.v * Math.sin(vals.theta * Math.PI / 180)
            }
        ],
        calcResultUnit: "V"
    },
    {
        id: "mutual_induction",
        category: "induction",
        mainFormula: "\\( e.m.f_2 = -M \\frac{\\Delta I_1}{\\Delta t} \\)",
        nameAr: "الحث المتبادل بين ملفين",
        nameEn: "Mutual Induction",
        descAr: "تولد ق.د.ك مستحثة في ملف نتيجة تغير التيار في ملف آخر مجاور.",
        descEn: "EMF induced in a coil due to changing current in an adjacent coil.",
        variations: [
            { formula: "e.m.f_2 α ΔI/Δt", xLabel: "معدل تغير التيار", yLabel: "ق.د.ك (EMF2)", labels: [1, 2, 3, 4], dataPoints: [5, 10, 15, 20], relationAr: "طردية", relationEn: "Direct" }
        ],
        calcMethods: [
            {
                nameAr: "الأساسي", nameEn: "Basic",
                inputs: [{ id: "M", labelAr: "معامل الحث المتبادل", labelEn: "Mutual Inductance (M)" }, { id: "dI", labelAr: "تغير التيار (ΔI)", labelEn: "Current Change" }, { id: "dt", labelAr: "الزمن (Δt)", labelEn: "Time (Δt)" }],
                calculate: (vals) => -vals.M * (vals.dI / vals.dt)
            }
        ],
        calcResultUnit: "V"
    },
    {
        id: "self_induction",
        category: "induction",
        mainFormula: "\\( e.m.f = -L \\frac{\\Delta I}{\\Delta t} \\)",
        nameAr: "الحث الذاتي لملف",
        nameEn: "Self Induction",
        descAr: "تولد ق.د.ك مستحثة في نفس الملف تقاوم التغير في التيار المار به.",
        descEn: "EMF induced in a coil opposing the change in its own current.",
        variations: [
            { formula: "e.m.f α ΔI/Δt", xLabel: "معدل تغير التيار", yLabel: "ق.د.ك (EMF)", labels: [2, 4, 6, 8], dataPoints: [10, 20, 30, 40], relationAr: "طردية", relationEn: "Direct" }
        ],
        calcMethods: [
            {
                nameAr: "الأساسي", nameEn: "Basic",
                inputs: [{ id: "L", labelAr: "معامل الحث الذاتي", labelEn: "Self Inductance (L)" }, { id: "dI", labelAr: "تغير التيار (ΔI)", labelEn: "Current Change" }, { id: "dt", labelAr: "الزمن (Δt)", labelEn: "Time (Δt)" }],
                calculate: (vals) => -vals.L * (vals.dI / vals.dt)
            }
        ],
        calcResultUnit: "V"
    },
    {
        id: "ac_dynamo",
        category: "induction",
        mainFormula: "\\( e.m.f_{max} = N \\cdot A \\cdot B \\cdot 2\\pi f \\)",
        nameAr: "المولد الكهربي (الدينامو العظمى)",
        nameEn: "AC Generator (Max EMF)",
        descAr: "لحساب ق.د.ك المستحثة العظمي المتولدة في الدينامو.",
        descEn: "Maximum Induced EMF generated in an AC dynamo.",
        variations: [
            { formula: "e.m.f(max) α f", xLabel: "التردد (f)", yLabel: "القيمة العظمى", labels: [50, 100, 150, 200], dataPoints: [100, 200, 300, 400], relationAr: "طردية", relationEn: "Direct" }
        ],
        calcMethods: [
            {
                nameAr: "الأساسي", nameEn: "Basic",
                inputs: [{ id: "N", labelAr: "اللفات (N)", labelEn: "Turns (N)" }, { id: "A", labelAr: "المساحة (A)", labelEn: "Area (A)" }, { id: "B", labelAr: "الفيض (B)", labelEn: "Field (B)" }, { id: "f", labelAr: "التردد (f)", labelEn: "Freq (f)" }],
                calculate: (vals) => vals.N * vals.A * vals.B * 2 * Math.PI * vals.f
            }
        ],
        calcResultUnit: "V"
    },
    {
        id: "transformer_efficiency",
        category: "induction",
        mainFormula: "\\( \\eta = \\frac{V_s \\cdot I_s}{V_p \\cdot I_p} \\times 100 \\)",
        nameAr: "كفاءة المحول الكهربي",
        nameEn: "Transformer Efficiency",
        descAr: "النسبة بين القدرة الناتجة في الملف الثانوي إلى القدرة المستهلكة في الملف الابتدائي.",
        descEn: "Ratio of output power to input power in a transformer.",
        variations: [
            { formula: "η = (Ps / Pp) %", xLabel: "قدرة الابتدائي (Pp)", yLabel: "قدرة الثانوي (Ps)", labels: [100, 200, 300, 400], dataPoints: [90, 180, 270, 360], relationAr: "طردية (بميل الكفاءة)", relationEn: "Direct (Slope = η)" }
        ],
        calcMethods: [
            {
                nameAr: "الأساسي", nameEn: "Basic",
                inputs: [{ id: "Vs", labelAr: "جهد الثانوي (Vs)", labelEn: "Sec Voltage" }, { id: "Is", labelAr: "تيار الثانوي (Is)", labelEn: "Sec Current" }, { id: "Vp", labelAr: "جهد الابتدائي (Vp)", labelEn: "Pri Voltage" }, { id: "Ip", labelAr: "تيار الابتدائي (Ip)", labelEn: "Pri Current" }],
                calculate: (vals) => ((vals.Vs * vals.Is) / (vals.Vp * vals.Ip)) * 100
            }
        ],
        calcResultUnit: "%"
    },

    // ============================================
    // --- الوحدة الرابعة: دوائر التيار المتردد ---
    // ============================================
    {
        id: "inductive_reactance",
        category: "electricity",
        mainFormula: "\\( X_L = 2\\pi \\cdot f \\cdot L \\)",
        nameAr: "المفاعلة الحثية لملف",
        nameEn: "Inductive Reactance",
        descAr: "الممانعة التي يلقاها التيار المتردد في ملف بسبب حثه الذاتي.",
        descEn: "Opposition of an inductor to AC current.",
        variations: [
            { formula: "X_L α f", xLabel: "التردد (f)", yLabel: "المفاعلة (X_L)", labels: [50, 100, 150, 200], dataPoints: [31.4, 62.8, 94.2, 125.6], relationAr: "طردية", relationEn: "Direct" }
        ],
        calcMethods: [
            {
                nameAr: "الأساسي", nameEn: "Basic",
                inputs: [{ id: "f", labelAr: "التردد (f)", labelEn: "Frequency (f)" }, { id: "L", labelAr: "معامل الحث (L)", labelEn: "Inductance (L)" }],
                calculate: (vals) => 2 * Math.PI * vals.f * vals.L
            }
        ],
        calcResultUnit: "Ω"
    },
    {
        id: "capacitive_reactance",
        category: "electricity",
        mainFormula: "\\( X_C = \\frac{1}{2\\pi \\cdot f \\cdot C} \\)",
        nameAr: "المفاعلة السعوية لمكثف",
        nameEn: "Capacitive Reactance",
        descAr: "الممانعة التي يلقاها التيار المتردد في مكثف بسبب سعته.",
        descEn: "Opposition of a capacitor to AC current.",
        variations: [
            { formula: "X_C α 1/f", xLabel: "التردد (f)", yLabel: "المفاعلة (X_C)", labels: [50, 100, 150, 200], dataPoints: [100, 50, 33.3, 25], relationAr: "عكسية", relationEn: "Inverse" }
        ],
        calcMethods: [
            {
                nameAr: "الأساسي", nameEn: "Basic",
                inputs: [{ id: "f", labelAr: "التردد (f)", labelEn: "Frequency (f)" }, { id: "C", labelAr: "سعة المكثف (C)", labelEn: "Capacitance (C)" }],
                calculate: (vals) => 1 / (2 * Math.PI * vals.f * vals.C)
            }
        ],
        calcResultUnit: "Ω"
    },
    {
        id: "rlc_impedance",
        category: "electricity",
        mainFormula: "\\( Z = \\sqrt{R^2 + (X_L - X_C)^2} \\)",
        nameAr: "المعاوقة الكلية لدائرة RLC",
        nameEn: "Impedance of RLC Circuit",
        descAr: "مكافئ المقاومة والمفاعلة الحثية والسعوية في دائرة تيار متردد.",
        descEn: "Total opposition in an AC circuit containing R, L, and C.",
        variations: [
            { formula: "Z vs f", xLabel: "التردد (f)", yLabel: "المعاوقة (Z)", labels: [10, 30, 50, 70, 90], dataPoints: [50, 20, 10, 20, 50], relationAr: "منحنى رنين (حرف V)", relationEn: "Resonance Curve" }
        ],
        calcMethods: [
            {
                nameAr: "الأساسي", nameEn: "Basic",
                inputs: [{ id: "R", labelAr: "المقاومة (R)", labelEn: "Resistance" }, { id: "XL", labelAr: "مفاعلة حثية (XL)", labelEn: "Ind. Reactance" }, { id: "XC", labelAr: "مفاعلة سعوية (XC)", labelEn: "Cap. Reactance" }],
                calculate: (vals) => Math.sqrt(Math.pow(vals.R, 2) + Math.pow(vals.XL - vals.XC, 2))
            }
        ],
        calcResultUnit: "Ω"
    },
    {
        id: "resonance_frequency",
        category: "electricity",
        mainFormula: "\\( f = \\frac{1}{2\\pi\\sqrt{L \\cdot C}} \\)",
        nameAr: "تردد الرنين",
        nameEn: "Resonance Frequency",
        descAr: "التردد الذي تتساوى عنده المفاعلة الحثية مع السعوية وتصبح المعاوقة أقل ما يمكن.",
        descEn: "Frequency at which XL = XC and impedance is minimal.",
        variations: [
            { formula: "f α 1/√(LC)", xLabel: "الجذر التربيعي لـ LC", yLabel: "تردد الرنين (f)", labels: [1, 2, 3, 4], dataPoints: [100, 50, 33.3, 25], relationAr: "عكسية", relationEn: "Inverse" }
        ],
        calcMethods: [
            {
                nameAr: "الأساسي", nameEn: "Basic",
                inputs: [{ id: "L", labelAr: "الحث الذاتي (L)", labelEn: "Inductance (L)" }, { id: "C", labelAr: "سعة المكثف (C)", labelEn: "Capacitance (C)" }],
                calculate: (vals) => 1 / (2 * Math.PI * Math.sqrt(vals.L * vals.C))
            }
        ],
        calcResultUnit: "Hz"
    },

    // ===================================
    // --- الوحدة الخامسة: الفيزياء الحديثة ---
    // ===================================
    {
        id: "photon_energy",
        category: "modern",
        mainFormula: "\\( E = h\\nu = \\frac{h \\cdot c}{\\lambda} \\)",
        nameAr: "طاقة الفوتون (بلانك)",
        nameEn: "Photon Energy (Planck)",
        descAr: "طاقة الكم (الفوتون) تتناسب طردياً مع تردده وعكسياً مع طوله الموجي.",
        descEn: "Energy of a photon is proportional to its frequency.",
        variations: [
            { formula: "E α ν", xLabel: "التردد (ν)", yLabel: "الطاقة (E)", labels: [1, 2, 3, 4], dataPoints: [10, 20, 30, 40], relationAr: "طردية", relationEn: "Direct" }
        ],
        calcMethods: [
            {
                nameAr: "بمعلومية التردد (ν)", nameEn: "Using Frequency (ν)",
                inputs: [{ id: "h", labelAr: "ثابت بلانك (h)", labelEn: "Planck Const (h)" }, { id: "v", labelAr: "التردد (ν)", labelEn: "Frequency (ν)" }],
                calculate: (vals) => vals.h * vals.v
            },
            {
                nameAr: "بمعلومية الطول الموجي (λ)", nameEn: "Using Wavelength (λ)",
                inputs: [{ id: "h", labelAr: "ثابت بلانك (h)", labelEn: "Planck Const (h)" }, { id: "c", labelAr: "سرعة الضوء (c)", labelEn: "Light Speed (c)" }, { id: "lambda", labelAr: "الطول الموجي (λ)", labelEn: "Wavelength (λ)" }],
                calculate: (vals) => (vals.h * vals.c) / vals.lambda
            }
        ],
        calcResultUnit: "J"
    },
    {
        id: "photoelectric_effect",
        category: "modern",
        mainFormula: "\\( K.E_{max} = h\\nu - E_w \\)",
        nameAr: "التأثير الكهروضوئي (أينشتاين)",
        nameEn: "Photoelectric Effect",
        descAr: "طاقة حركة الإلكترون المنبعث عندما تكون طاقة الفوتون الساقط أكبر من دالة الشغل.",
        descEn: "Kinetic energy of emitted electron equals photon energy minus work function.",
        variations: [
            { formula: "K.E α ν", xLabel: "التردد (ν)", yLabel: "طاقة الحركة (K.E)", labels: ["ν_c", "2ν_c", "3ν_c", "4ν_c"], dataPoints: [0, 10, 20, 30], relationAr: "طردية (تقطع محور السينات)", relationEn: "Linear with x-intercept" }
        ],
        calcMethods: [
            {
                nameAr: "الأساسي", nameEn: "Basic",
                inputs: [{ id: "h", labelAr: "ثابت بلانك (h)", labelEn: "Planck (h)" }, { id: "v", labelAr: "التردد (ν)", labelEn: "Frequency (ν)" }, { id: "Ew", labelAr: "دالة الشغل (Ew)", labelEn: "Work Func (Ew)" }],
                calculate: (vals) => (vals.h * vals.v) - vals.Ew
            }
        ],
        calcResultUnit: "J"
    },
    {
        id: "de_broglie",
        category: "modern",
        mainFormula: "\\( \\lambda = \\frac{h}{m \\cdot v} = \\frac{h}{P_L} \\)",
        nameAr: "علاقة دي براولي",
        nameEn: "De Broglie Equation",
        descAr: "لتعيين الطول الموجي للموجة المادية المصاحبة لأي جسيم متحرك.",
        descEn: "Wavelength associated with a moving particle.",
        variations: [
            { formula: "λ α 1/P_L", xLabel: "كمية التحرك (P_L)", yLabel: "الطول الموجي (λ)", labels: [1, 2, 3, 4], dataPoints: [100, 50, 33.3, 25], relationAr: "عكسية", relationEn: "Inverse" }
        ],
        calcMethods: [
            {
                nameAr: "بمعلومية الكتلة والسرعة", nameEn: "Using Mass and Velocity",
                inputs: [{ id: "h", labelAr: "ثابت بلانك (h)", labelEn: "Planck (h)" }, { id: "m", labelAr: "الكتلة (m)", labelEn: "Mass (m)" }, { id: "v", labelAr: "السرعة (v)", labelEn: "Velocity (v)" }],
                calculate: (vals) => vals.h / (vals.m * vals.v)
            },
            {
                nameAr: "بمعلومية كمية التحرك", nameEn: "Using Momentum (PL)",
                inputs: [{ id: "h", labelAr: "ثابت بلانك (h)", labelEn: "Planck (h)" }, { id: "PL", labelAr: "كمية التحرك (PL)", labelEn: "Momentum (PL)" }],
                calculate: (vals) => vals.h / vals.PL
            }
        ],
        calcResultUnit: "m"
    },
    {
        id: "mass_energy",
        category: "modern",
        mainFormula: "\\( E = m \\cdot c^2 \\)",
        nameAr: "معادلة أينشتاين للكتلة والطاقة",
        nameEn: "Mass-Energy Equivalence",
        descAr: "تكافؤ الكتلة والطاقة (الأساس العلمي للقنبلة الذرية).",
        descEn: "Energy equivalent of a given mass.",
        variations: [
            { formula: "E α m", xLabel: "الكتلة (m)", yLabel: "الطاقة (E)", labels: [1, 2, 3, 4], dataPoints: [9, 18, 27, 36], relationAr: "طردية", relationEn: "Direct" }
        ],
        calcMethods: [
            {
                nameAr: "الأساسي", nameEn: "Basic",
                inputs: [{ id: "m", labelAr: "الكتلة (m)", labelEn: "Mass (m)" }, { id: "c", labelAr: "سرعة الضوء (c)", labelEn: "Light Speed (c)" }],
                calculate: (vals) => vals.m * Math.pow(vals.c, 2)
            }
        ],
        calcResultUnit: "J"
    },
    {
        id: "photon_beam_force",
        category: "modern",
        mainFormula: "\\( F = \\frac{2 P_w}{c} \\)",
        nameAr: "القوة المؤثرة لشعاع فوتونات",
        nameEn: "Force of Photon Beam",
        descAr: "القوة التي يؤثر بها شعاع ضوئي عند سقوطه وانعكاسه من سطح.",
        descEn: "Force exerted by a reflecting beam of photons.",
        variations: [
            { formula: "F α P_w", xLabel: "القدرة الضوئية (P_w)", yLabel: "القوة (F)", labels: [10, 20, 30, 40], dataPoints: [2, 4, 6, 8], relationAr: "طردية", relationEn: "Direct" }
        ],
        calcMethods: [
            {
                nameAr: "الأساسي", nameEn: "Basic",
                inputs: [{ id: "Pw", labelAr: "القدرة (Pw)", labelEn: "Power (Pw)" }, { id: "c", labelAr: "سرعة الضوء (c)", labelEn: "Light Speed (c)" }],
                calculate: (vals) => (2 * vals.Pw) / vals.c
            }
        ],
        calcResultUnit: "N"
    },

    // ===================================
    // --- الأطياف الذرية والإلكترونيات ---
    // ===================================
    {
        id: "bohr_radius",
        category: "modern",
        mainFormula: "\\( 2\\pi r = n \\cdot \\lambda \\)",
        nameAr: "تقدير نصف قطر مدار بور",
        nameEn: "Bohr Orbit Radius",
        descAr: "العلاقة بين محيط المدار، رقم المدار، والطول الموجي المصاحب للإلكترون.",
        descEn: "Relates orbit circumference to principal quantum number and wavelength.",
        variations: [
            { formula: "r α n", xLabel: "رقم المدار (n)", yLabel: "نصف القطر (r)", labels: [1, 2, 3, 4], dataPoints: [10, 20, 30, 40], relationAr: "طردية", relationEn: "Direct" }
        ],
        calcMethods: [
            {
                nameAr: "الأساسي", nameEn: "Basic",
                inputs: [{ id: "n", labelAr: "رقم المدار (n)", labelEn: "Orbit Number (n)" }, { id: "lambda", labelAr: "الطول الموجي (λ)", labelEn: "Wavelength (λ)" }],
                calculate: (vals) => (vals.n * vals.lambda) / (2 * Math.PI)
            }
        ],
        calcResultUnit: "m"
    },
    {
        id: "hydrogen_energy_level",
        category: "modern",
        mainFormula: "\\( E_n = -\\frac{13.6}{n^2} \\text{ eV} \\)",
        nameAr: "طاقة المستوى في ذرة الهيدروجين",
        nameEn: "Energy Level (Hydrogen)",
        descAr: "حساب طاقة الإلكترون في مستوى طاقة معين لذرة الهيدروجين بوحدة الإلكترون فولت.",
        descEn: "Calculate energy of the nth level in a hydrogen atom (in eV).",
        variations: [
            { formula: "E_n α -1/n²", xLabel: "رقم المستوى (n)", yLabel: "الطاقة بالـ eV", labels: [1, 2, 3, 4], dataPoints: [-13.6, -3.4, -1.51, -0.85], relationAr: "تزايدية سالبة", relationEn: "Negative Increasing" }
        ],
        calcMethods: [
            {
                nameAr: "الأساسي", nameEn: "Basic",
                inputs: [{ id: "n", labelAr: "رقم المستوى (n)", labelEn: "Level (n)" }],
                calculate: (vals) => -13.6 / Math.pow(vals.n, 2)
            }
        ],
        calcResultUnit: "eV"
    },
    {
        id: "transistor_alpha",
        category: "modern",
        mainFormula: "\\( \\alpha_e = \\frac{I_c}{I_e} \\)",
        nameAr: "ثابت التوزيع للترانزستور",
        nameEn: "Transistor Alpha (Current Gain)",
        descAr: "النسبة بين تيار المجمع وتيار الباعث.",
        descEn: "Ratio of collector current to emitter current.",
        variations: [
            { formula: "I_c α I_e", xLabel: "تيار الباعث (I_e)", yLabel: "تيار المجمع (I_c)", labels: [10, 20, 30, 40], dataPoints: [9.8, 19.6, 29.4, 39.2], relationAr: "طردية", relationEn: "Direct" }
        ],
        calcMethods: [
            {
                nameAr: "الأساسي", nameEn: "Basic",
                inputs: [{ id: "Ic", labelAr: "تيار المجمع (Ic)", labelEn: "Collector (Ic)" }, { id: "Ie", labelAr: "تيار الباعث (Ie)", labelEn: "Emitter (Ie)" }],
                calculate: (vals) => vals.Ic / vals.Ie
            }
        ],
        calcResultUnit: ""
    },
    {
        id: "transistor_beta",
        category: "modern", 
        mainFormula: "\\( \\beta_e = \\frac{I_c}{I_b} = \\frac{\\alpha_e}{1 - \\alpha_e} \\)",
        nameAr: "نسبة التكبير في الترانزستور",
        nameEn: "Transistor Beta",
        descAr: "نسبة التكبير، وهي النسبة بين تيار المجمع وتيار القاعدة.",
        descEn: "Ratio of collector current to base current.",
        variations: [
            { formula: "I_c α I_b", xLabel: "تيار القاعدة (I_b)", yLabel: "تيار المجمع (I_c)", labels: [1, 2, 3, 4], dataPoints: [50, 100, 150, 200], relationAr: "طردية", relationEn: "Direct" }
        ],
        calcMethods: [
            {
                nameAr: "الأساسي", nameEn: "Basic",
                inputs: [{ id: "Ic", labelAr: "تيار المجمع (Ic)", labelEn: "Collector (Ic)" }, { id: "Ib", labelAr: "تيار القاعدة (Ib)", labelEn: "Base (Ib)" }],
                calculate: (vals) => vals.Ic / vals.Ib
            }
        ],
        calcResultUnit: ""
    }
];