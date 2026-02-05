
const fs = require('fs');

const content = fs.readFileSync('c:\\Users\\DELL\\Desktop\\kri\\src\\components\\home\\UzbekistanMap.vue', 'utf8');

// Regex to find paths
const pathRegex = /<path d="([^"]+)"\s+(?:.*?)id="([^"]+)"(?:.*?)title="([^"]+)"/g;

let match;
const results = [];

while ((match = pathRegex.exec(content)) !== null) {
    const d = match[1];
    const id = match[2];
    const title = match[3];

    // Simple parser for "m x,y dx,dy dx,dy ..."
    // Note: The d attribute in the file seems to use 'm' (relative) but usually the first 'm' is absolute.
    // Let's verify standard: "m" indicates that the first move is absolute if it's the start, but subsequent pairs are relative.
    // However, looking at the file: "m 676...,291... -1.51,-1.77"
    // So first pair is absolute, rest are relative.
    
    // We need to handle other commands if present. The file seems to mostly use 'm' and 'l' implicitly (after m, numbers are lines) or 'z'.
    // Let's look at one example: "m 676.69007,291.55972 -1.51,-1.77 ..."
    // It seems to be just numbers after the initial 'm'.
    // Let's assume all follow: "m startX,startY dx,dy dx,dy ..." and maybe "z" at end.
    
    // Normalize string: replace commas with spaces, split by spaces
    const tokens = d.replace(/,/g, ' ').replace(/([a-zA-Z])/g, ' $1 ').trim().split(/\s+/);
    
    let minX = Infinity, maxX = -Infinity, minY = Infinity, maxY = -Infinity;
    let cx = 0, cy = 0;
    
    for (let i = 0; i < tokens.length; i++) {
        const t = tokens[i];
        if (t === 'm' || t === 'M') {
            const x = parseFloat(tokens[++i]);
            const y = parseFloat(tokens[++i]);
            cx = x; 
            cy = y;
            if (t === 'm' && i > 1) { // checking if it's not the first command for relative logic? 
                // Actually for 'm', the first pair is always absolute if it's the start of path.
                // Subsequent pairs for 'm' are treated as 'l' (relative lines).
                // Wait, if it is 'm' then subsequent pairs are implicit l (relative)
                // But the file has "m 676... ...".
            }
            minX = Math.min(minX, cx); maxX = Math.max(maxX, cx);
            minY = Math.min(minY, cy); maxY = Math.max(maxY, cy);
        } else if (t === 'z' || t === 'Z') {
            continue;
        } else if (!isNaN(parseFloat(t))) {
            // Implicit relative line to?
            // If the previous command was 'm' (lowercase), subsequent pairs are relative line-to.
            const dx = parseFloat(t);
            const dy = parseFloat(tokens[++i]);
            cx += dx;
            cy += dy;
            minX = Math.min(minX, cx); maxX = Math.max(maxX, cx);
            minY = Math.min(minY, cy); maxY = Math.max(maxY, cy);
        }
    }
    
    results.push({
        id,
        title,
        centerX: (minX + maxX) / 2,
        centerY: (minY + maxY) / 2,
        minX, maxX, minY, maxY
    });
}

console.log(JSON.stringify(results, null, 2));
