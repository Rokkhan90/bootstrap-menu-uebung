// Übersetzungen für die verschiedenen Sprachen
const translations = {
    de: {
        welcomeMessage: "Willkommen bei Mama Africa",
        description: "Authentische afrikanische und österreichische Küche",
        menuTitle: "Tagesmenü",
        dish1Title: "Egusi-Suppe",
        dish1Description: "Würzige Suppe mit Spinat Fleisch und Melonenkernen.",
        dish2Title: "Wiener Schnitzel",
        dish2Description: "Klassisches Kalbschnitzel mit Petersilienkartoffel und Zitronenscheibe.",
        dish3Title: "Jollof Reis",
        dish3Description: "Westafrikanischer Reis mit Tomaten, Paprika und Hühnchen."
    },
    en: {
        welcomeMessage: "Welcome to Mama Africa",
        description: "Authentic African and Austrian cuisine",
        menuTitle: "Daily Menu",
        dish1Title: "Egusi Soup",
        dish1Description: "Spicy soup with spinach, meat, and melon seeds.",
        dish2Title: "Viennese Schnitzel",
        dish2Description: "Classic veal schnitzel with parsley potatoes and lemon slice.",
        dish3Title: "Jollof Rice",
        dish3Description: "West African rice with tomatoes, peppers, and chicken."
    },
    es: {
        welcomeMessage: "Bienvenido a Mama Africa",
        description: "Cocina africana y austriaca auténtica",
        menuTitle: "Menú del día",
        dish1Title: "Sopa Egusi",
        dish1Description: "Sopa picante con espinacas, carne y semillas de melón.",
        dish2Title: "Schnitzel Vienés",
        dish2Description: "Clásico escalope de ternera con papas al perejil y rodaja de limón.",
        dish3Title: "Arroz Jollof",
        dish3Description: "Arroz de África Occidental con tomates, pimientos y pollo."
    }
};

// Funktion zum Ändern der Sprache
function changeLanguage(lang) {
    document.getElementById("welcomeMessage").textContent = translations[lang].welcomeMessage;
    document.getElementById("description").textContent = translations[lang].description;
    document.getElementById("menuTitle").textContent = translations[lang].menuTitle;
    document.getElementById("dish1Title").textContent = translations[lang].dish1Title;
    document.getElementById("dish1Description").textContent = translations[lang].dish1Description;
    document.getElementById("dish2Title").textContent = translations[lang].dish2Title;
    document.getElementById("dish2Description").textContent = translations[lang].dish2Description;
    document.getElementById("dish3Title").textContent = translations[lang].dish3Title;
    document.getElementById("dish3Description").textContent = translations[lang].dish3Description;
}