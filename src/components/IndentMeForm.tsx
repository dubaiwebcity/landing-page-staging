'use client';

export interface IndentMeFieldMap {
    from: string; // key in the submitted form data
    to: string;   // IndentMe field name e.g. "field_1"
}

export interface IndentMeFormConfig {
    domain: string;
    id: string;
    locale: string;
    key: string;
    fields: IndentMeFieldMap[];
}

function readCookie(name: string): string | null {
    const nameEQ = name + '=';
    const cookies = document.cookie.split(';');
    for (const cookie of cookies) {
        const c = cookie.trimStart();
        if (c.startsWith(nameEQ)) return c.substring(nameEQ.length);
    }
    return null;
}

export async function submitIndentMeForm(
    data: Record<string, string>,
    config: IndentMeFormConfig
): Promise<unknown> {
    console.log('Submitting IndentMe form with data:', data);
    if (!config.fields || config.fields.length === 0) {
        throw new Error('No fields configured for IndentMe form');
    }

    // Read UTM cookie set by IndentMeAnalytics
    const utms: Record<string, string> = {};
    const utmCookie = readCookie('_indent_utmz');
    if (utmCookie) {
        const [source, medium, term, campaign, content] = utmCookie.split('|').map((s) => s.trim());
        utms['utm_source'] = source ?? '';
        utms['utm_medium'] = medium ?? '';
        utms['utm_term'] = term ?? '';
        utms['utm_campaign'] = campaign ?? '';
        utms['utm_content'] = content ?? '';
    }

    // Referer: prefer the cookie set by IndentMeAnalytics, fallback to document.referrer
    const refererCookie = readCookie('_indent_utmz_referer');
    if (refererCookie && refererCookie.trim() !== '') {
        utms['referer'] = refererCookie;
    } else if (document.referrer) {
        utms['referer'] = document.referrer;
    }

    // Map form fields from their source names to IndentMe field names
    // and compute the honeypot field key (mirrors the PHP logic)
    let honeyPot = config.fields.length;
    const mappedFields: Record<string, string> = {};

    for (const map of config.fields) {
        mappedFields[map.to] = data[map.from] ?? '';
        const fieldIndex = parseInt(map.to.replace('field_', ''), 10);
        if (!isNaN(fieldIndex)) {
            honeyPot += fieldIndex;
        }
    }

    // Honeypot field must be empty for the submission to be accepted
    mappedFields[`field_${honeyPot}`] = '';

    // Normalise branch to IndentMe's expected slug format (EN and AR labels)
    const branchSlugMap: Record<string, string> = {
        'riyadh':   'riyadh',
        'jeddah':   'jeddah',
        'al ahsa':  'al-ahsa',
        'الرياض':   'riyadh',
        'جدة':      'jeddah',
        'الأحساء':  'al-ahsa',
    };
    const rawBranch = (data['branch'] ?? '').toLowerCase().trim();
    const branchSlug = branchSlugMap[rawBranch] ?? '';

    const payload = new FormData();
    payload.append('key', config.key);
    payload.append('timestamp', String(Math.floor(Date.now() / 1000)));
    for (const [k, v] of Object.entries(mappedFields)) payload.append(k, v);
    for (const [k, v] of Object.entries(utms)) payload.append(k, v);
    if (branchSlug) payload.append('_branch', branchSlug);

    const response = await fetch(
        `https://${config.domain}/form/bnoon/${config.id}/${config.locale}`,
        {
            method: 'POST',
            headers: { accept: 'application/json' },
            body: payload,
        }
    );
    

    if (!response.ok) {
        throw new Error('IndentMe form submission failed');
    }

    return response.json();
}
