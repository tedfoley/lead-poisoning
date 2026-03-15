/* ========================================
   THE SILENT EPIDEMIC - Interactive Application
   ======================================== */

// ========================================
// DATA
// ========================================

const SITES = [
    {
        name: "Kabwe, Zambia",
        lat: -14.4469, lng: 28.4464,
        severity: "critical",
        type: "Mining legacy",
        affected: "200,000+",
        maxBLL: "427.8 µg/dL",
        soilLead: "60,000 mg/kg",
        deaths: "Multiple fatalities",
        summary: "One of the most polluted places on Earth. A colonial-era lead mine operated from 1902–1994, leaving 6.4 million tons of uncovered toxic waste.",
        detail: `<p>Over 95% of children living near the former mine have elevated blood lead levels. The average blood lead level in the Kasanda neighborhood is <strong>60.2 µg/dL</strong> — nearly 12× the CDC benchmark. Some children have been measured at levels as high as 427.8 µg/dL.</p>
        <p>Soil contamination reaches 60,000 mg/kg — 300× the US EPA hazard threshold. Despite a $65.6 million World Bank remediation project (2016–2024), the source of contamination — the waste dumps — was never addressed. A 2025 Human Rights Watch report found the government issued <em>additional</em> mining licenses, and children as young as 7 work in contaminated lead waste.</p>
        <p>A class action lawsuit by 140,000 women and children is pending against Anglo American South Africa.</p>`
    },
    {
        name: "Zamfara State, Nigeria",
        lat: 12.17, lng: 6.25,
        severity: "critical",
        type: "Artisanal gold mining",
        affected: "17,000+",
        maxBLL: "700 µg/dL",
        soilLead: "100,000+ ppm",
        deaths: "400+ children",
        summary: "The deadliest lead poisoning outbreak in modern history. Over 400 children died from lead-rich gold ore processing in homes.",
        detail: `<p>Discovered in March 2010 when MSF investigated unexplained child deaths. Artisanal gold mining of lead-rich ore had turned family homes into death traps — soil in compounds exceeded 100,000 ppm (250× the safe limit).</p>
        <p>Blood lead levels were unprecedented in medical literature: mean of <strong>119 µg/dL</strong>, with some children reaching 700 µg/dL. In affected villages, one-fourth of all children under 5 had died in the preceding year.</p>
        <p>MSF provided chelation therapy to 2,349 children, reducing average BLLs from 173 to under 20 µg/dL. Pure Earth removed 27,000 cubic meters of contaminated soil from 820 residences. At least 43 additional villages beyond the original 7 had confirmed cases.</p>`
    },
    {
        name: "Thiaroye-sur-Mer, Senegal",
        lat: 14.74, lng: -17.38,
        severity: "critical",
        type: "Informal battery recycling",
        affected: "950+",
        maxBLL: "613.9 µg/dL",
        soilLead: "302,000 mg/kg",
        deaths: "18 children",
        summary: "18 children under 5 died in three months from lead poisoning caused by informal battery recycling to make fishing weights.",
        detail: `<p>Since 1995, residents of this Dakar suburb had been breaking apart used car batteries to make fishing weights. In October 2007, a "lead rush" intensified when Indian traders offered to buy lead-contaminated soil at 60 cents/kg. Women dug up contaminated dirt with shovels and sifted lead in their homes.</p>
        <p>Between November 2007 and March 2008, 18 children died from lead encephalopathy. All 81 people tested were poisoned — children's blood lead levels ranged from 39.8 to <strong>613.9 µg/dL</strong> (mean 129.5). Soil lead reached 302,000 mg/kg (30.2% lead by weight).</p>
        <p>Blacksmith Institute (now Pure Earth) remediated the area, reducing children's average BLL from >150 to 53.5 µg/dL. The case became a model for addressing informal battery recycling worldwide.</p>`
    },
    {
        name: "Owino Uhuru, Mombasa, Kenya",
        lat: -4.05, lng: 39.66,
        severity: "critical",
        type: "Battery smelter",
        affected: "3,000+",
        maxBLL: "420 µg/dL",
        soilLead: "109,000 mg/kg",
        deaths: "20-100 (disputed)",
        summary: "An Indian-owned battery smelter operated 50 meters from a community of 3,000, poisoning residents for 7 years before being shut down.",
        detail: `<p>Kenya Metal Refineries EPZ began recycling lead-acid batteries in 2007. Workers handled toxic batteries with bare hands; lead wastewater flowed through a wall hole into the community and reached the municipal water system.</p>
        <p>Phyllis Omido — the "East African Erin Brockovich" who discovered her own baby was being poisoned through her breast milk — led a years-long campaign to close the plant, winning the Goldman Environmental Prize in 2015.</p>
        <p>In 2020, a Kenyan court awarded 1.3 billion KSh (~$12 million) in damages. In December 2024, the Supreme Court restored compensation after government appeals. As of 2025, the government has still not paid.</p>`
    },
    {
        name: "Ogijo, Nigeria",
        lat: 6.69, lng: 3.52,
        severity: "severe",
        type: "Battery recycling factories",
        affected: "20,000+",
        maxBLL: "38 µg/dL",
        soilLead: "18,647 ppm (dust)",
        deaths: "Unknown",
        summary: "Ground zero for Nigeria's battery recycling crisis. Every factory worker tested was poisoned; over 50% of children had dangerous blood lead levels.",
        detail: `<p>Multiple battery recycling factories operate in this Lagos-adjacent area, processing hundreds of thousands of tons of used batteries annually. Testing of 70 residents found every factory worker was poisoned and over 50% of children had BLLs causing lifelong cognitive harm.</p>
        <p>An elementary school's soil contained 1,901 ppm of lead — nearly 5× the EPA limit. A hotel room near a factory had 18,647 ppm in dust. Recycled lead from Ogijo factories (including True Metals) was exported to Ford, GM, Tesla, and commodity trader Trafigura.</p>
        <p>Nigerian authorities sealed several facilities in 2025, but residents report some operations have resumed.</p>`
    },
    {
        name: "Agbogbloshie, Accra, Ghana",
        lat: 5.55, lng: -0.22,
        severity: "severe",
        type: "E-waste & battery recycling",
        affected: "30,000+",
        maxBLL: "18.8 µg/dL",
        soilLead: "6,106 mg/kg",
        deaths: "Unknown",
        summary: "One of the world's largest e-waste dumpsites. Workers burned cables and smelted batteries in the open air. Demolished in 2021 but recycling scattered across Accra.",
        detail: `<p>Located less than 1 km from central Accra, Agbogbloshie hosted up to 30,000 people in an open-air e-waste and battery recycling operation. Over 50% of soil samples exceeded EPA lead standards, with burning sites reaching 6,106 mg/kg.</p>
        <p>An estimated 1.7 million children in Ghana have blood lead levels above 5 µg/dL. Three of Ghana's six major battery recycling plants are Indian-operated. As one former EPA Ghana official noted: "Indian companies came to take advantage of our loose monitoring regime."</p>
        <p>The scrapyard was demolished by the Ghanaian government in July 2021, but informal recycling simply scattered across the city.</p>`
    },
    {
        name: "Dar es Salaam, Tanzania",
        lat: -6.79, lng: 39.28,
        severity: "elevated",
        type: "Battery recycling factories",
        affected: "Unknown",
        maxBLL: "18.85 µg/dL (workers)",
        soilLead: "23,200 ppm (avg)",
        deaths: "Unknown",
        summary: "About 2 million used batteries are available annually. Youth break them with machetes, drain acid into the ground, and sell lead scrap.",
        detail: `<p>Tanzania generates approximately 8,440 tonnes of used battery waste annually, with only two formal recycling plants. A 2024 study of 60 workers in two recycling factories found mean blood lead levels of 18.85 µg/dL in the most exposed section.</p>
        <p>A seven-nation study found soil lead levels averaging 23,200 ppm around recycling plants — with peaks reaching 14% lead by weight. Pure Earth and UNEP have launched projects to develop national ULAB management strategies.</p>`
    },
    {
        name: "Douala, Cameroon",
        lat: 4.05, lng: 9.77,
        severity: "elevated",
        type: "Battery recycling (Metafrique)",
        affected: "Unknown",
        maxBLL: "Not measured",
        soilLead: "19,000 mg/kg",
        deaths: "Unknown",
        summary: "Indian-owned Metafrique Cameroun operates with zero air pollution controls. Recycled lead is mixed into cooking pots used across the country.",
        detail: `<p>Metafrique Cameroun, linked to Indian company Metssa Trading, operates in Douala with what investigators rated as 0 out of 100 for air pollution control and health protection.</p>
        <p>Soil outside the plant contains 19,000 mg/kg of lead — approximately 50× the EPA residential threshold. Near food vendors, levels are 6–8× the EPA's level of concern.</p>
        <p>An additional alarming finding: recycled lead is mixed with aluminum to make artisanal cooking pots used in restaurants and homes across Cameroon.</p>`
    },
    {
        name: "Pointe-Noire, Republic of Congo",
        lat: -4.78, lng: 11.87,
        severity: "severe",
        type: "Battery recycling (Metssa)",
        affected: "Unknown",
        maxBLL: "53 µg/dL (15-month-old)",
        soilLead: "Not measured",
        deaths: "Unknown",
        summary: "Metssa Congo/Metafrique operations caused every tested person to exceed WHO thresholds. A 15-month-old child had 53 µg/dL — 9× the WHO action level.",
        detail: `<p>In the Vindoulou neighborhood of Pointe-Noire, Metssa Congo/Metafrique battery recycling operations contaminated the surrounding community. Every person tested exceeded the WHO action threshold of 5 µg/dL.</p>
        <p>A 15-month-old child tested at 53 µg/dL — more than 10× the reference level. An 8-year-old tested above 45 µg/dL, and a 13-year-old's levels increased over a 4-month monitoring period. The environment minister suspended operations after a failed audit, but some operations reportedly resumed.</p>`
    },
    {
        name: "Blantyre, Malawi",
        lat: -15.79, lng: 35.00,
        severity: "elevated",
        type: "Solar battery recycling",
        affected: "Unknown",
        maxBLL: "Not widely tested",
        soilLead: "Not widely tested",
        deaths: "Unknown",
        summary: "Malawi's solar boom is creating a toxic legacy. Technicians recycle solar batteries on busy market streets, releasing 100× the lethal oral dose per battery.",
        detail: `<p>With 75% of Malawi's population (15 million people) lacking grid electricity, the government has embraced off-grid solar. But the lead-acid batteries powering these systems often fail within one year and enter informal recycling.</p>
        <p>University of Manchester researchers found that each informally recycled battery releases 3.5–4.7 kg of lead pollution — equivalent to 100× the lethal oral dose. About 48% of the battery's lead enters the environment as dust and shrapnel.</p>
        <p>Self-taught technicians use knives and charcoal stoves in busy market streets, unaware of the toxicity. Malawi has no comprehensive extended producer responsibility framework for solar batteries.</p>`
    },
    // Global comparison sites
    {
        name: "Dhaka, Bangladesh",
        lat: 23.81, lng: 90.41,
        severity: "comparison",
        type: "Informal battery recycling",
        affected: "35.5 million children",
        maxBLL: "Widespread >5 µg/dL",
        soilLead: "119,000 mg/kg (peak)",
        deaths: "~30,000-38,000/year",
        summary: "Fourth most-affected country globally. Over 1,100 informal ULAB recycling operations. 80% of urban children have elevated blood lead.",
        detail: `<p>Bangladesh has 35.5 million children with elevated blood lead levels — the fourth highest in the world. Over 1,100 informal battery recycling operations process 97% of the country's lead batteries.</p>
        <p>Stanford researchers identified nearly 300 contaminated sites and ~700,000 people living within toxic zones. A remediation study at Kathgora achieved 96% soil lead reduction at $40,300 per site, though child BLLs decreased only 35%.</p>
        <p>An estimated 30,000–38,000 deaths annually are attributable to lead exposure, with an average IQ loss of 6.9 points per child — costing ~$16 billion/year (~6% of GDP).</p>`
    },
    {
        name: "Dong Mai Village, Vietnam",
        lat: 20.93, lng: 106.03,
        severity: "comparison",
        type: "Battery recycling village",
        affected: "109+ children",
        maxBLL: "65+ µg/dL",
        soilLead: "3,940 mg/kg (pre-remediation)",
        deaths: "Unknown",
        summary: "All 109 children tested had elevated blood lead; 28% needed urgent chelation. After intervention, levels dropped 67% within one year.",
        detail: `<p>Dong Mai village in northern Vietnam was a concentrated battery recycling community. All 109 children tested had elevated BLLs, with 28% at or above 45 µg/dL (9× the US limit).</p>
        <p>After Pure Earth's 2013–2015 intervention — including soil remediation, community education, and regulatory enforcement — child BLLs dropped by 67%, from a median of 40.4 to 13.3 µg/dL within one year. This demonstrated that targeted intervention works rapidly when properly implemented.</p>`
    }
];

// ========================================
// NAVIGATION
// ========================================

const nav = document.getElementById('nav');
let lastScrollY = 0;

window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    if (scrollY > window.innerHeight * 0.8) {
        nav.classList.add('visible');
    } else {
        nav.classList.remove('visible');
    }
    lastScrollY = scrollY;

    // Update active nav link
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 100 && rect.bottom >= 100) {
            const id = section.id;
            document.querySelectorAll('.nav-link').forEach(link => {
                link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
            });
        }
    });
});

// ========================================
// HERO COUNTER ANIMATION
// ========================================

function animateCounters() {
    const counters = document.querySelectorAll('.hero-stat-number');
    counters.forEach(counter => {
        const target = parseFloat(counter.dataset.target);
        const isDecimal = target % 1 !== 0;
        const duration = 2000;
        const startTime = performance.now();

        function update(currentTime) {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            const current = target * eased;

            if (isDecimal) {
                counter.textContent = current.toFixed(1);
            } else {
                counter.textContent = Math.round(current).toLocaleString();
            }

            if (progress < 1) {
                requestAnimationFrame(update);
            }
        }
        requestAnimationFrame(update);
    });
}

// Start counter animation when hero is in view
const heroObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateCounters();
            heroObserver.disconnect();
        }
    });
}, { threshold: 0.5 });

heroObserver.observe(document.querySelector('.hero'));

// ========================================
// SCROLL ANIMATIONS
// ========================================

const fadeElements = document.querySelectorAll(
    '.comparison-card, .chart-container, .process-step, .stat-highlight, .callout-box, .iq-card, .big-number-card, .timeline-card, .solution-card, .source-category'
);

fadeElements.forEach(el => el.classList.add('fade-in'));

const fadeObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

fadeElements.forEach(el => fadeObserver.observe(el));

// ========================================
// LEAFLET MAP
// ========================================

const map = L.map('leaflet-map', {
    center: [5, 20],
    zoom: 3,
    minZoom: 2,
    maxZoom: 10,
    scrollWheelZoom: false,
    zoomControl: true
});

L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/attributions">CARTO</a>',
    maxZoom: 19
}).addTo(map);

const severityColors = {
    critical: '#c0392b',
    severe: '#e67e22',
    elevated: '#f1c40f',
    comparison: '#3498db'
};

const severityRadius = {
    critical: 14,
    severe: 11,
    elevated: 9,
    comparison: 8
};

SITES.forEach(site => {
    const color = severityColors[site.severity];
    const radius = severityRadius[site.severity];

    // Pulse animation for critical sites — added FIRST so it renders behind the marker
    if (site.severity === 'critical') {
        L.circleMarker([site.lat, site.lng], {
            radius: radius + 4,
            fillColor: color,
            color: color,
            weight: 2,
            opacity: 0,
            fillOpacity: 0.3,
            interactive: false, // does NOT capture clicks/hover
            className: 'pulse-marker'
        }).addTo(map);
    }

    // Main interactive marker — added AFTER pulse so it's on top and receives events
    const marker = L.circleMarker([site.lat, site.lng], {
        radius: radius,
        fillColor: color,
        color: '#fff',
        weight: 2,
        opacity: 0.9,
        fillOpacity: 0.8
    }).addTo(map);

    // Hover tooltip (shows on mouseover, lightweight)
    const severityLabel = site.severity === 'comparison' ? 'Global Comparison' : site.severity.charAt(0).toUpperCase() + site.severity.slice(1);
    marker.bindTooltip(
        `<strong>${site.name}</strong><br><span style="color:${color};font-weight:600;font-size:11px;text-transform:uppercase;">${severityLabel}</span><br><span style="font-size:12px;color:#666;">${site.type} · ${site.affected} affected</span>`,
        { direction: 'top', offset: [0, -radius - 4], className: 'map-tooltip' }
    );

    // Click popup (shows full detail + link)
    const popupContent = `
        <h4>${site.name}</h4>
        <p class="popup-severity ${site.severity}">${severityLabel}</p>
        <p>${site.summary}</p>
        <span class="popup-link" onclick="showSiteDetail('${site.name.replace(/'/g, "\\'")}')">Read the full story →</span>
    `;

    marker.bindPopup(popupContent, { maxWidth: 300 });

    // Enlarge marker on hover for visual feedback
    marker.on('mouseover', function () {
        this.setRadius(radius + 3);
        this.setStyle({ weight: 3 });
    });
    marker.on('mouseout', function () {
        this.setRadius(radius);
        this.setStyle({ weight: 2 });
    });
});

// ========================================
// SITE DETAIL PANEL
// ========================================

function showSiteDetail(name) {
    const site = SITES.find(s => s.name === name);
    if (!site) return;

    const panel = document.getElementById('site-detail');
    const content = document.getElementById('site-detail-content');

    content.innerHTML = `
        <span class="site-tag ${site.severity}">${site.severity === 'comparison' ? 'Global Comparison' : site.severity}</span>
        <h3>${site.name}</h3>
        <p class="site-location">${site.type}</p>
        <div class="site-stats">
            <div class="site-stat-item">
                <div class="stat-value">${site.affected}</div>
                <div class="stat-label">People affected</div>
            </div>
            <div class="site-stat-item">
                <div class="stat-value">${site.maxBLL}</div>
                <div class="stat-label">Peak blood lead level</div>
            </div>
            <div class="site-stat-item">
                <div class="stat-value">${site.soilLead}</div>
                <div class="stat-label">Soil contamination</div>
            </div>
            <div class="site-stat-item">
                <div class="stat-value">${site.deaths}</div>
                <div class="stat-label">Deaths reported</div>
            </div>
        </div>
        <div class="site-narrative">${site.detail}</div>
    `;

    panel.classList.remove('hidden');
    panel.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function closeSiteDetail() {
    document.getElementById('site-detail').classList.add('hidden');
}

// Make showSiteDetail available globally
window.showSiteDetail = showSiteDetail;

// ========================================
// CHART.JS CONFIGURATION
// ========================================

Chart.defaults.font.family = "'Inter', -apple-system, BlinkMacSystemFont, sans-serif";
Chart.defaults.font.size = 13;
Chart.defaults.plugins.legend.display = false;
Chart.defaults.animation.duration = 1200;
Chart.defaults.animation.easing = 'easeOutQuart';

const chartTextColor = '#6e6e73';
const chartGridColor = 'rgba(0, 0, 0, 0.06)';
const chartGridColorDark = 'rgba(255, 255, 255, 0.08)';

// ========================================
// CHART 1: Children by Region
// ========================================

new Chart(document.getElementById('childrenByRegionChart'), {
    type: 'bar',
    data: {
        labels: ['South Asia', 'Sub-Saharan\nAfrica', 'East Asia\n& Pacific', 'Middle East\n& N. Africa', 'Latin America\n& Caribbean', 'Europe &\nCentral Asia', 'High-Income\nCountries'],
        datasets: [{
            data: [49, 47, 28, 35, 20, 12, 5],
            backgroundColor: [
                '#d4380d', '#e8572a', '#ff6b35', '#e67e22', '#f0a050', '#f5c088', '#ddd'
            ],
            borderRadius: 6,
            borderSkipped: false,
            maxBarThickness: 52
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: true,
        aspectRatio: 1.8,
        plugins: {
            tooltip: {
                callbacks: {
                    label: ctx => `${ctx.parsed.y}% of children above 5 µg/dL`
                }
            }
        },
        scales: {
            y: {
                beginAtZero: true,
                max: 60,
                ticks: {
                    color: chartTextColor,
                    callback: v => v + '%'
                },
                grid: { color: chartGridColor }
            },
            x: {
                ticks: {
                    color: chartTextColor,
                    font: { size: 11 },
                    maxRotation: 0
                },
                grid: { display: false }
            }
        }
    }
});

// ========================================
// CHART 2: BLL Comparison
// ========================================

new Chart(document.getElementById('bllComparisonChart'), {
    type: 'bar',
    data: {
        labels: ['South Asia', 'Middle East\n& N. Africa', 'Sub-Saharan\nAfrica', 'East Asia\n& Pacific', 'Latin America\n& Caribbean', 'Europe &\nCentral Asia', 'High-Income'],
        datasets: [{
            data: [6.2, 5.2, 5.1, 3.5, 3.0, 2.3, 1.3],
            backgroundColor: ctx => {
                const val = ctx.parsed?.y || 0;
                if (val >= 5) return '#d4380d';
                if (val >= 3.5) return '#e67e22';
                if (val >= 2) return '#f0a050';
                return '#27ae60';
            },
            borderRadius: 6,
            borderSkipped: false,
            maxBarThickness: 52
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: true,
        aspectRatio: 1.8,
        plugins: {
            tooltip: {
                callbacks: {
                    label: ctx => `Mean BLL: ${ctx.parsed.y} µg/dL`
                }
            }
        },
        scales: {
            y: {
                beginAtZero: true,
                max: 8,
                ticks: {
                    color: chartTextColor,
                    callback: v => v + ' µg/dL'
                },
                grid: { color: chartGridColor }
            },
            x: {
                ticks: {
                    color: chartTextColor,
                    font: { size: 11 },
                    maxRotation: 0
                },
                grid: { display: false }
            }
        }
    }
});

// ========================================
// CHART 3: Recycling Rates
// ========================================

const isDarkSection = (id) => {
    const el = document.getElementById(id);
    return el && el.closest('.section-dark');
};

new Chart(document.getElementById('recyclingRatesChart'), {
    type: 'bar',
    data: {
        labels: ['United States', 'Europe', 'China', 'India', 'Bangladesh', 'Sub-Saharan\nAfrica'],
        datasets: [
            {
                label: 'Formal recycling',
                data: [97, 97, 45, 10, 30, 5],
                backgroundColor: '#27ae60',
                borderRadius: 6,
                borderSkipped: false,
                maxBarThickness: 40
            },
            {
                label: 'Informal recycling',
                data: [3, 3, 55, 90, 70, 95],
                backgroundColor: '#c0392b',
                borderRadius: 6,
                borderSkipped: false,
                maxBarThickness: 40
            }
        ]
    },
    options: {
        responsive: true,
        maintainAspectRatio: true,
        aspectRatio: 1.8,
        plugins: {
            legend: {
                display: true,
                position: 'top',
                labels: {
                    color: '#f5f5f7',
                    padding: 20,
                    usePointStyle: true,
                    pointStyle: 'circle'
                }
            },
            tooltip: {
                callbacks: {
                    label: ctx => `${ctx.dataset.label}: ${ctx.parsed.y}%`
                }
            }
        },
        scales: {
            y: {
                stacked: true,
                max: 100,
                ticks: {
                    color: 'rgba(255,255,255,0.5)',
                    callback: v => v + '%'
                },
                grid: { color: chartGridColorDark }
            },
            x: {
                stacked: true,
                ticks: {
                    color: 'rgba(255,255,255,0.5)',
                    font: { size: 11 },
                    maxRotation: 45,
                    minRotation: 0,
                    autoSkip: false
                },
                grid: { display: false }
            }
        }
    }
});

// ========================================
// CHART 4: Solar Boom
// ========================================

new Chart(document.getElementById('solarBoomChart'), {
    type: 'line',
    data: {
        labels: ['2018', '2019', '2020', '2021', '2022', '2023', '2024', '2025'],
        datasets: [
            {
                label: 'Solar imports to Africa (MW)',
                data: [2500, 3200, 3000, 4200, 5800, 7500, 9379, 15032],
                borderColor: '#f0a050',
                backgroundColor: 'rgba(240, 160, 80, 0.1)',
                borderWidth: 3,
                fill: true,
                tension: 0.4,
                pointRadius: 4,
                pointBackgroundColor: '#f0a050'
            },
            {
                label: 'Off-grid waste (tonnes, est.)',
                data: [2200, 3800, 12000, 16000, 22000, 30000, 40000, 55000],
                borderColor: '#c0392b',
                backgroundColor: 'rgba(192, 57, 43, 0.1)',
                borderWidth: 3,
                fill: true,
                tension: 0.4,
                pointRadius: 4,
                pointBackgroundColor: '#c0392b',
                yAxisID: 'y1'
            }
        ]
    },
    options: {
        responsive: true,
        maintainAspectRatio: true,
        aspectRatio: 1.8,
        interaction: {
            mode: 'index',
            intersect: false
        },
        plugins: {
            legend: {
                display: true,
                position: 'top',
                labels: {
                    color: 'rgba(255,255,255,0.7)',
                    padding: 16,
                    usePointStyle: true,
                    pointStyle: 'circle'
                }
            }
        },
        scales: {
            y: {
                type: 'linear',
                position: 'left',
                ticks: {
                    color: 'rgba(255,255,255,0.5)',
                    callback: v => (v / 1000) + 'K MW'
                },
                grid: { color: chartGridColorDark }
            },
            y1: {
                type: 'linear',
                position: 'right',
                ticks: {
                    color: 'rgba(255,255,255,0.5)',
                    callback: v => (v / 1000) + 'K t'
                },
                grid: { display: false }
            },
            x: {
                ticks: { color: 'rgba(255,255,255,0.5)' },
                grid: { display: false }
            }
        }
    }
});

// ========================================
// CHART 5: IQ Dose-Response
// ========================================

new Chart(document.getElementById('iqDoseResponseChart'), {
    type: 'line',
    data: {
        labels: ['0', '1', '2.4', '5', '7.5', '10', '15', '20', '25', '30'],
        datasets: [{
            label: 'Cumulative IQ points lost',
            data: [0, 0.6, 1.2, 2.5, 3.5, 5.1, 6.1, 7.0, 7.5, 8.0],
            borderColor: '#d4380d',
            backgroundColor: 'rgba(212, 56, 13, 0.08)',
            borderWidth: 3,
            fill: true,
            tension: 0.4,
            pointRadius: 6,
            pointBackgroundColor: '#d4380d',
            pointBorderColor: '#fff',
            pointBorderWidth: 2
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: true,
        aspectRatio: 2.5,
        plugins: {
            tooltip: {
                callbacks: {
                    title: ctx => `Blood lead: ${ctx[0].label} µg/dL`,
                    label: ctx => `${ctx.parsed.y.toFixed(1)} IQ points lost`
                }
            },
            annotation: {}
        },
        scales: {
            y: {
                reverse: true,
                beginAtZero: true,
                max: 10,
                title: {
                    display: true,
                    text: 'IQ Points Lost',
                    color: chartTextColor
                },
                ticks: {
                    color: chartTextColor,
                    callback: v => '-' + v
                },
                grid: { color: chartGridColor }
            },
            x: {
                title: {
                    display: true,
                    text: 'Blood Lead Level (µg/dL)',
                    color: chartTextColor
                },
                ticks: { color: chartTextColor },
                grid: { color: chartGridColor }
            }
        }
    }
});

// ========================================
// CHART 6: IQ Distribution by Region
// ========================================

new Chart(document.getElementById('iqDistributionChart'), {
    type: 'doughnut',
    data: {
        labels: ['South Asia', 'Sub-Saharan Africa', 'East Asia & Pacific', 'Middle East & N. Africa', 'Latin America & Caribbean', 'Europe & Central Asia', 'High-Income'],
        datasets: [{
            data: [37, 22, 20, 9, 5, 3, 4],
            backgroundColor: [
                '#d4380d', '#e8572a', '#ff6b35', '#e67e22', '#f0a050', '#f5c088', '#ddd'
            ],
            borderWidth: 2,
            borderColor: '#fff'
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: true,
        aspectRatio: 1.2,
        cutout: '55%',
        plugins: {
            legend: {
                display: true,
                position: 'bottom',
                labels: {
                    color: chartTextColor,
                    padding: 12,
                    usePointStyle: true,
                    pointStyle: 'circle',
                    font: { size: 12 }
                }
            },
            tooltip: {
                callbacks: {
                    label: ctx => `${ctx.label}: ${ctx.parsed}% (${Math.round(765 * ctx.parsed / 100)}M IQ points)`
                }
            }
        }
    }
});

// ========================================
// CHART 7: GDP Cost by Region
// ========================================

new Chart(document.getElementById('gdpCostChart'), {
    type: 'bar',
    data: {
        labels: ['Sub-Saharan\nAfrica', 'Latin America\n& Caribbean', 'Asia', 'High-Income\nCountries'],
        datasets: [{
            data: [4.03, 2.04, 1.88, 1.2],
            backgroundColor: [
                '#d4380d', '#e67e22', '#f0a050', '#27ae60'
            ],
            borderRadius: 6,
            borderSkipped: false,
            maxBarThickness: 64
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: true,
        aspectRatio: 1.8,
        indexAxis: 'y',
        plugins: {
            tooltip: {
                callbacks: {
                    label: ctx => `${ctx.parsed.x}% of GDP`
                }
            }
        },
        scales: {
            x: {
                beginAtZero: true,
                max: 5,
                ticks: {
                    color: 'rgba(255,255,255,0.5)',
                    callback: v => v + '%'
                },
                grid: { color: chartGridColorDark }
            },
            y: {
                ticks: {
                    color: 'rgba(255,255,255,0.7)',
                    font: { size: 13 }
                },
                grid: { display: false }
            }
        }
    }
});

// ========================================
// CHART 8: Death Comparison
// ========================================

new Chart(document.getElementById('deathComparisonChart'), {
    type: 'bar',
    data: {
        labels: [
            'Lead-related\nCVD',
            'Tobacco\nSmoking',
            'PM2.5 Air\nPollution',
            'HIV/AIDS +\nMalaria + TB',
            'Unsafe\nWater/Sanitation'
        ],
        datasets: [{
            data: [5.5, 5.0, 4.5, 2.9, 1.5],
            backgroundColor: [
                '#d4380d', '#6e6e73', '#6e6e73', '#6e6e73', '#6e6e73'
            ],
            borderRadius: 6,
            borderSkipped: false,
            maxBarThickness: 52
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: true,
        aspectRatio: 1.8,
        plugins: {
            tooltip: {
                callbacks: {
                    label: ctx => `${ctx.parsed.y}M deaths per year`
                }
            }
        },
        scales: {
            y: {
                beginAtZero: true,
                max: 7,
                ticks: {
                    color: 'rgba(255,255,255,0.5)',
                    callback: v => v + 'M'
                },
                grid: { color: chartGridColorDark }
            },
            x: {
                ticks: {
                    color: 'rgba(255,255,255,0.5)',
                    font: { size: 11 },
                    maxRotation: 45,
                    minRotation: 0,
                    autoSkip: false
                },
                grid: { display: false }
            }
        }
    }
});

// ========================================
// SMOOTH SCROLL FOR NAV LINKS
// ========================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

// ========================================
// PULSE ANIMATION CSS INJECTION
// ========================================

const style = document.createElement('style');
style.textContent = `
    .pulse-marker {
        animation: pulse-ring 2s ease-out infinite;
    }
    @keyframes pulse-ring {
        0% { opacity: 0.6; stroke-width: 2; }
        50% { opacity: 0; stroke-width: 20; }
        100% { opacity: 0; stroke-width: 20; }
    }
`;
document.head.appendChild(style);
