const m = require('mithril');

let root = document.body;

let CharGeneralInfo = {
    view: () => {
        let generalInfoM = m("div.genInfo", [
            m("label.charName", "Character Name"),
            m("input.charName", {type: "text"})
        ]);

        return generalInfoM;
    }
}

m.mount(root, CharGeneralInfo);