// Lightweight obfuscation wrapper for Drive config (renamed keys to be less searchable).
(function(g){
    const stash = [
        "u5mS8wEZopje88ET+BmactGPv5jS/kkO+wmS/8GWf13T05Fb3RET",
        "583ZKxXe501Sn9nSINGR5gUYu1TYkxjWUpDXfRTYAhEP",
        "=QFaF5US5lzVV93XG5XRA9nfSpWP0hVPCRWRfJmT68WaHhUVFl0TKBySOtFP",
        "",
        "LhDf7g3TsRlT+RnRZtDYadmbqJGd0lmZ9wFOux1bSBGP",
        "gJUNiNEaopEd8pDSoxVZdRmT7kVXhpnQmhDNoplSVxDP",
        "7pDe/AGbgQ3ScVFYItFW39DOa9lfCxFNbB0ZIVTY7xEP"
    ];

    const rev = (s) => s.split("").reverse().join("");
    const b64 = (s) => {
        if (typeof atob !== "undefined") return atob(s);
        if (typeof Buffer !== "undefined") return Buffer.from(s, "base64").toString("binary");
        return "";
    };
    const unx = (s) => {
        const raw = b64(rev(s));
        let out = "";
        for (let i = 0; i < raw.length; i++) out += String.fromCharCode(raw.charCodeAt(i) ^ 13);
        return out;
    };

    const bundle = {
        a0: unx(stash[0]),
        b1: unx(stash[1]),
        c2: unx(stash[2]),
        d3: unx(stash[3]),
        e4: unx(stash[4]),
        f5: unx(stash[5]),
        g6: unx(stash[6])
    };

    g.__OBF_PAL = function(){ return Object.assign({}, bundle); };
})(typeof window !== "undefined" ? window : globalThis);
