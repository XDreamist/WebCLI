export const commandDatabase = {
    "youtube": [ "https://www.youtube.com", "OPENING 'YOUTUBE'...." ],
    "discord": [ "https://discord.com/channels/@me", "OPENING 'DISCORD'...." ],
    "github": [ "https://github.com/", "OPENING 'GITHUB'...." ],
    "gpt": [ "https://chat.openai.com/", "OPENING 'GPT'...." ],
    "pixabay": [ "https://pixabay.com/", "OPENING 'PIXABAY'...." ],
    "notion": [ "https://www.notion.so", "OPENING 'NOTION'...." ],
    "wazir": [ "https://wazirx.com/funds", "OPENING 'WAZIR'...." ],
    "tradeview": [ "https://in.tradingview.com/", "OPENING 'TRADINGVIEW'...." ],

    "show repo": [ "https://github.com/XDreamist/WebCLI", "OPENING REPO...." ],
    "show cv": [ `${getBaseUrl()}/src/resume/resume.html`, "SHOWING CV...." ],
    "download cv": [ `${getBaseUrl()}/public/resume/Umesh P.pdf`, "DOWNLOADING CV...." ],
    "edit bot": [ "https://studio.botpress.cloud/64aa5b7b-ffcc-430f-90e5-ef6cf1f7b859/home", "SHOWING BOT...." ]
};

function getBaseUrl() {
    const url = window.location.href;

    if (url.includes('index.html')) {
        return url.replace('index.html', '');
    }

    return url;
}

// Make sure to only retrieve data from sorted Messages after it's count has increased and not before.
// Make it aware of the environment. Where it is, what site it is, what kind of purpose it serves.
// Make it aware of all the features in the site such as games, resume, commands, portfolio, contact, etc.
// Add more commands to turn off mouse cursor, the UI elements which can be altered for a new look or something.