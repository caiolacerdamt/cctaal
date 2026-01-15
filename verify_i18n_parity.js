
import fs from 'fs';
import path from 'path';

const localesDir = path.join(process.cwd(), 'public', 'locales');
const languages = ['en', 'pt', 'es', 'zh'];

function flattenKeys(obj, prefix = '') {
    let keys = [];
    for (const key in obj) {
        if (typeof obj[key] === 'object' && obj[key] !== null) {
            keys = keys.concat(flattenKeys(obj[key], `${prefix}${key}.`));
        } else {
            keys.push(`${prefix}${key}`);
        }
    }
    return keys;
}

function loadLocale(lang) {
    const filePath = path.join(localesDir, lang, 'translation.json');
    if (!fs.existsSync(filePath)) {
        console.error(`Missing translation file for: ${lang}`);
        return null;
    }
    return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

const localeData = {};
languages.forEach(lang => {
    localeData[lang] = loadLocale(lang);
});

const enKeys = new Set(flattenKeys(localeData['en']));
let hasErrors = false;

languages.forEach(lang => {
    if (lang === 'en') return;

    const keys = new Set(flattenKeys(localeData[lang]));

    // Check for missing keys (present in EN but missing in LANG)
    const missing = [...enKeys].filter(k => !keys.has(k));
    if (missing.length > 0) {
        console.error(`\n[${lang}] MISSING keys (present in EN):`);
        missing.forEach(k => console.error(`  - ${k}`));
        hasErrors = true;
    }

    // Check for extra keys (present in LANG but missing in EN)
    const extra = [...keys].filter(k => !enKeys.has(k));
    if (extra.length > 0) {
        console.warn(`\n[${lang}] EXTRA keys (not in EN):`);
        extra.forEach(k => console.warn(`  - ${k}`));
    }
});

if (!hasErrors) {
    console.log("SUCCESS: All translation files have matching structure!");
} else {
    console.log("\nFAILURE: Found missing translation keys.");
    process.exit(1);
}
