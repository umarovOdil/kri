
const fs = require('fs');

const content = fs.readFileSync('c:\\Users\\DELL\\Desktop\\kri\\src\\components\\home\\UzbekistanMap.vue', 'utf8');

// Regex to find path tags
const pathTagRegex = /<path\s+([^>]+)>/g;

let match;
const results = [];

while ((match = pathTagRegex.exec(content)) !== null) {
    const attrs = match[1];
    
    const dMatch = /d="([^"]+)"/.exec(attrs);
    const idMatch = /id="([^"]+)"/.exec(attrs);
    const titleMatch = /title="([^"]+)"/.exec(attrs);

    if (!dMatch || !idMatch) continue;

    const d = dMatch[1];
    const id = idMatch[1];
    const title = titleMatch ? titleMatch[1] : id;

    // Normalize string: replace commas with spaces, split by spaces
    const tokens = d.replace(/,/g, ' ').replace(/([a-zA-Z])/g, ' $1 ').trim().split(/\s+/);
    
    let minX = Infinity, maxX = -Infinity, minY = Infinity, maxY = -Infinity;
    let cx = 0, cy = 0;
    
    for (let i = 0; i < tokens.length; i++) {
        const t = tokens[i];
        if (!t) continue;
        
        if (t === 'm' || t === 'M') {
            const x = parseFloat(tokens[++i]);
            const y = parseFloat(tokens[++i]);
            cx = x; 
            cy = y;
            if (!isNaN(cx)) {
                minX = Math.min(minX, cx); maxX = Math.max(maxX, cx);
                minY = Math.min(minY, cy); maxY = Math.max(maxY, cy);
            }
        } else if (t === 'z' || t === 'Z') {
            continue;
        } else if (!isNaN(parseFloat(t))) {
            const dx = parseFloat(t);
            const dy = parseFloat(tokens[++i]);
            cx += dx;
            cy += dy;
            if (!isNaN(cx)) {
                minX = Math.min(minX, cx); maxX = Math.max(maxX, cx);
                minY = Math.min(minY, cy); maxY = Math.max(maxY, cy);
            }
        }
    }
    
    results.push({
        id,
        title,
        cx: (minX + maxX) / 2,
        cy: (minY + maxY) / 2
    });
}

console.log(JSON.stringify(results, null, 2));
