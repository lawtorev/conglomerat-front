if (typeof WH === "undefined") {
    window.WH = {Data: {}, PageMeta: {}, staticUrl: "https://wow.zamimg.com", wowheadRemote: true}
}
WH.isTouch = function () {
    if (!WH.wowheadRemote && typeof Platform !== "undefined") {
        WH.isTouch = function () {
            return Platform.isTouch()
        }
    } else {
        var b = navigator.userAgent || navigator.vendor || window.opera;
        var a = {isMobile: false, isTablet: false};
        if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(b) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(b.substr(0, 4))) {
            a.isMobile = true
        }
        if (!a.isMobile && /(android|ipad|playbook|silk)/i.test(b)) {
            a.isTablet = true
        }
        WH.isTouch = (function (c) {
            return c.isMobile || c.isTablet
        }).bind(null, a);
        WH.isMobile = (function (c) {
            return c
        }).bind(null, a.isMobile);
        WH.isTablet = (function (c) {
            return c
        }).bind(null, a.isTablet)
    }
    return WH.isTouch()
};
if (typeof $WowheadPower === "undefined") {
    var $WowheadPower = new function () {
        var Z = {
            "-1000": {name: "Mount", path: "mount", data: {}, maxId: 50000},
            "-1001": {name: "Recipe", path: "recipe", data: {}, maxId: 500000},
            1: {name: "NPC", path: "npc", data: {}, maxId: 500000},
            2: {name: "Object", path: "object", data: {}, maxId: 750000},
            3: {name: "Item", path: "item", data: {}, maxId: 500000},
            4: {name: "Item Set", path: "item-set", data: {}, maxId: 10000, minId: -5000},
            5: {name: "Quest", path: "quest", data: {}, maxId: 100000},
            6: {name: "Spell", path: "spell", data: {}, maxId: 500000},
            7: {name: "Zone", path: "zone", data: {}, maxId: 50000},
            10: {name: "Achievement", path: "achievement", data: {}, maxId: 50000},
            12: {name: "Holiday", path: "event", data: {}, maxId: 10000},
            17: {name: "Currency", path: "currency", data: {}, maxId: 10000},
            20: {name: "Building", path: "building", data: {}, maxId: 1000},
            21: {name: "Follower", path: "follower", data: {}, maxId: 10000},
            22: {name: "Mission Ability", path: "mission-ability", data: {}, maxId: 10000},
            23: {name: "Mission", path: "mission", data: {}, maxId: 10000},
            25: {name: "Ship", path: "ship", data: {}, maxId: 10000},
            26: {name: "Threat", path: "threat", data: {}, maxId: 1000},
            27: {name: "Resource", path: "resource", data: {}, maxId: 100, minId: 0},
            28: {name: "Champion", path: "champion", data: {}, maxId: 10000},
            30: {name: "Order Advancement", path: "order-advancement", data: {}, maxId: 5000},
            38: {name: "BFA Champion", path: "bfa-champion", data: {}, maxId: 10000},
            40: {name: "Affix", path: "affix", data: {}, maxId: 1000},
            42: {name: "Azerite Essence Power", path: "azerite-essence-power", data: {}, maxId: 1000},
            43: {name: "Azerite Essence", path: "azerite-essence", data: {}, maxId: 100},
            44: {name: "Storyline", path: "storyline", data: {}, maxId: 10000},
            46: {name: "Adventure Combatant Ability", path: "adventure-combatant-ability", data: {}, maxId: 10000},
            100: {name: "Guide", path: "guide", data: {}},
            101: {name: "Transmog Set", path: "transmog-set", data: {}, maxId: 50000},
            110: {name: "Outfit", path: "outfit", data: {}},
            200: {name: "Pet Ability", path: "pet-ability", data: {}, maxId: 10000}
        };
        var L = WH.wowheadRemote;
        var aO = L;
        var x = false;
        var aw = {applyto: 3}, I = document.getElementsByTagName("head")[0], aK,
            aB = {attach: 3, attachToIcon: 1, attachWithoutScreenshot: 4, "float": 0, floatWithoutIcon: 5, screen: 2},
            w = 550, aS = {colorLinks: "colorlinks", iconizeLinks: "iconizelinks", renameLinks: "renamelinks"}, ah, A,
            Q, au, m, an, ar, aq, am = aB["float"], C = false, ab = null, B = 1, z = 1, aG = -1, l = 0, b = 1, K = 0,
            ac = 1, aA = 2, d = 3, ak = 4, u = 5, aa = 1, R = 2, t = 3, j = 4, aE = 5, ae = 6, U = 7, V = 10, k = 12,
            T = 13, h = 17, aC = 20, Y = 21, y = 22, aF = 23, q = 25, af = 26, n = 27, J = 28, aR = 30, aM = 38, a = 40,
            aJ = 42, P = 43, F = 44, aD = 46;
        TYPE_GUIDE = 100, TYPE_TRANSMOGSET = 101, TYPE_OUTFIT = 110, TYPE_PETABILITY = 200, ICONIZE_TYPES = [V, P, aJ, t, ae], CURSOR_HSPACE = 15, CURSOR_VSPACE = 15, _LANG = {
            0: {
                achievementComplete: "Achievement earned by $1 on $2/$3/$4",
                loading: "Loading…",
                noResponse: "No response from server :(",
                notFound: "%s Not Found"
            },
            1: {
                achievementComplete: "$1이(가) $2/$3/$4에 업적을 달성함",
                loading: "로딩 중…",
                noResponse: "서버가 응답하지 않습니다 :(",
                notFound: "%s 을(를) 찾을 수 없음"
            },
            2: {
                achievementComplete: "Haut-fait reçu par $1 le $2/$3/$4",
                loading: "Chargement…",
                noResponse: "Pas de réponse du serveur :(",
                notFound: "%s non trouvé"
            },
            3: {
                achievementComplete: "Erfolg wurde von $1 am $3.$2.$4 errungen",
                loading: "Lädt…",
                noResponse: "Keine Antwort vom Server :(",
                notFound: "%s nicht gefunden"
            },
            4: {achievementComplete: "$1在$2/$3/$4上获得成就", loading: "正在载入…", noResponse: "服务器没有响应 :(", notFound: "%s未找到"},
            6: {
                achievementComplete: "Logro conseguido por $1 el $2/$3/$4",
                loading: "Cargando…",
                noResponse: "No hay respuesta del servidor :(",
                notFound: "%s no encontrado/a"
            },
            7: {
                achievementComplete: "$1 получил(а) это достижение $2/$3/$4",
                loading: "Загрузка…",
                noResponse: "Нет ответа от сервера :(",
                notFound: "%s не найдено"
            },
            8: {
                achievementComplete: "Conquista conseguida por $1 em $3/$2/$4",
                loading: "Carregando…",
                noResponse: "Sem resposta do servidor :(",
                notFound: "%s não encontrado(a)"
            },
            9: {
                achievementComplete: "Impresa compiuta da $1 su $2/$3/$4",
                loading: "Caricamento…",
                noResponse: "Nessuna risposta dal server :(",
                notFound: "%s Non Trovato"
            }
        }, STEALTH_TYPES = [TYPE_GUIDE];
        var X = new function () {
            var aX = {};
            var aW = {};
            var aV = {};
            var aU = {};
            this.fetch = function (a1, a4) {
                if (!aU.hasOwnProperty(a1) || aU[a1].hasOwnProperty(a4)) {
                    return
                }
                aU[a1][a4] = ac;
                aX[a1][a4] = [];
                var a2 = WH.dataEnvTerm[a4];
                switch (a4) {
                    case WH.dataEnv.BETA:
                        a2 = WH.BETA_DOMAIN || a2;
                        break;
                    case WH.dataEnv.MAIN:
                        a2 = "www";
                        break
                }
                var a0 = ag(a2) + aW[a1];
                var a3 = WH.getDataBuild(a4);
                a0 += (a3 !== "0") ? "&" + a3 : "";
                a0 += "&json";
                WH.xhrJsonRequest(a0, (function (a5, a7, a6) {
                    if (!a6) {
                        WH.error("Wowhead tooltips failed to load scaling data for " + at(a5));
                        return
                    }
                    X.setData(a5, a7, a6)
                }).bind(null, a1, a4))
            };
            this.getSpellsBySpec = function (a0, a1) {
                var a2 = Q || WH.getDataEnv();
                this.registerCallback(T, a2, function () {
                    var a4 = aV[T][a2];
                    var a3 = [];
                    if (a4.specMap.hasOwnProperty(a0)) {
                        a3 = a4["class"][a4.specMap[a0]].concat(a4.spec[a0] || [])
                    }
                    a1(a3)
                })
            };
            this.isLoaded = function (a0, a1) {
                if (!aU.hasOwnProperty(a0)) {
                    return true
                }
                if (aU[a0][a1] === ak) {
                    aY();
                    return true
                }
                return false
            };
            this.registerCallback = function (a0, a2, a1) {
                if (this.isLoaded(a0, a2)) {
                    window.requestAnimationFrame(a1);
                    return
                }
                if (!aX[a0].hasOwnProperty(a2)) {
                    this.fetch(a0, a2)
                }
                aX[a0][a2].push(a1)
            };
            this.setData = function (a1, a3, a2) {
                aU[a1][a3] = ak;
                aX[a1][a3] = aX[a1][a3] || [];
                aV[a1][a3] = a2;
                aY();
                var a0 = aX[a1][a3];
                while (a0.length) {
                    a0.shift()()
                }
            };

            function aZ() {
                aW[t] = "/data/item-scaling";
                aW[ae] = "/data/spell-scaling";
                aW[T] = "/data/spec-spells";
                for (var a0 in aW) {
                    if (!aW.hasOwnProperty(a0)) {
                        continue
                    }
                    aU[a0] = {};
                    aX[a0] = {};
                    aV[a0] = {}
                }
            }

            function aY() {
                var a1 = Q || WH.getDataEnv();
                var a0;
                if (a0 = aV[t][a1]) {
                    WH.staminaFactor = a0.staminaByIlvl;
                    WH.convertRatingToPercent.RB = a0.combatRatingsBase;
                    WH.convertRatingToPercent.LH = a0.ratingsToPercentLH;
                    WH.convertRatingToPercent.RM = a0.ratingsToPercentRM;
                    WH.convertRatingToPercent.LT = a0.ratingsToPercentLT;
                    WH.convertScalingFactor.SV = a0.itemScalingValue;
                    WH.convertScalingFactor.SD = a0.scalingFactors;
                    WH.curvePoints = a0.curvePoints;
                    WH.applyStatModifications.ScalingData = a0.scalingData;
                    WH.Data.artifactKnowledgeMultiplier = a0.artifactKnowledgeMultiplier;
                    WH.Data.bonusItemEffects = a0.bonusEffects
                }
                if (a0 = aV[ae][a1]) {
                    WH.convertScalingSpell.SV = a0.scalingValue;
                    WH.convertScalingSpell.SpellInformation = a0.spellInformation;
                    WH.convertScalingSpell.RandPropPoints = a0.randPropPoints
                }
            }

            aZ()
        };
        this.setScales = X.setData;
        var p = {0: "enus", 1: "kokr", 2: "frfr", 3: "dede", 4: "zhcn", 6: "eses", 7: "ruru", 8: "ptbr", 9: "itit"};
        var W = {
            getId: function () {
                return 0
            }, getName: function () {
                return "enus"
            }
        };
        if (typeof aL === "undefined") {
            var aL = {
                tooltip_genericrating: '<span class="q2">Equip: Increases your $1 by <!--rtg$2-->$3&nbsp;<small>(<!--rtg%$2-->0&nbsp;@&nbsp;L<!--lvl-->0)</small>.</span><br />',
                tooltip_reforged: "Reforged ($1 $2 &rarr; $1 $3)",
                traits: {
                    agi: ["Agility", "Agi", "Agi"],
                    arcres: ["Arcane resistance", "Arcane Resist", "ArcR"],
                    arcsplpwr: ["Arcane spell power", "Arcane Power", "ArcP"],
                    armor: ["Armor", "Armor", "Armor"],
                    armorbonus: ["Additional armor", "Bonus Armor", "AddAr"],
                    armorpenrtng: ["Armor penetration rating", "Armor Pen", "Pen"],
                    atkpwr: ["Attack power", "AP", "AP"],
                    block: ["Block value", "Block Value", "BkVal"],
                    blockrtng: ["Block rating", "Block", "Block"],
                    critstrkrtng: ["Critical strike rating", "Crit", "Crit"],
                    defrtng: ["Defense rating", "Defense", "Def"],
                    dmg: ["Weapon damage", "Damage", "Dmg"],
                    dmgmax1: ["Maximum damage", "Max Damage", "Max"],
                    dmgmin1: ["Minimum damage", "Min Damage", "Min"],
                    dodgertng: ["Dodge rating", "Dodge", "Dodge"],
                    dps: ["Damage per second", "DPS", "DPS"],
                    exprtng: ["Expertise rating", "Expertise", "Exp"],
                    firres: ["Fire resistance", "Fire Resist", "FirR"],
                    firsplpwr: ["Fire spell power", "Fire Power", "FireP"],
                    frores: ["Frost resistance", "Frost Resist", "FroR"],
                    frosplpwr: ["Frost spell power", "Frost Power", "FroP"],
                    hastertng: ["Haste rating", "Haste", "Haste"],
                    health: ["Health", "Health", "Hlth"],
                    healthrgn: ["Health regeneration", "HP5", "HP5"],
                    hitrtng: ["Hit rating", "Hit", "Hit"],
                    holres: ["Holy resistance", "Holy Resist", "HolR"],
                    holsplpwr: ["Holy spell power", "Holy Power", "HolP"],
                    "int": ["Intellect", "Int", "Int"],
                    level: ["Level", "Level", "Lvl"],
                    mana: ["Mana", "Mana", "Mana"],
                    manargn: ["Mana regeneration", "MP5", "MP5"],
                    mastrtng: ["Mastery rating", "Mastery", "Mastery"],
                    mleatkpwr: ["Melee attack power", "Melee AP", "AP"],
                    mlecritstrkrtng: ["Melee critical strike rating", "Melee Crit", "Crit"],
                    mledmgmax: ["Melee maximum damage", "Melee Max Damage", "Max"],
                    mledmgmin: ["Melee minimum damage", "Melee Min Damage", "Min"],
                    mledps: ["Melee DPS", "Melee DPS", "DPS"],
                    mlehastertng: ["Melee haste rating", "Melee Haste", "Haste"],
                    mlehitrtng: ["Melee hit rating", "Melee Hit", "Hit"],
                    mlespeed: ["Melee speed", "Melee Speed", "Speed"],
                    natres: ["Nature resistance", "Nature Resist", "NatR"],
                    natsplpwr: ["Nature spell power", "Nature Power", "NatP"],
                    nsockets: ["Number of sockets", "Sockets", "Sockt"],
                    parryrtng: ["Parry rating", "Parry", "Parry"],
                    reqarenartng: ["Required personal and team arena rating", "Req Rating", "Rating"],
                    reqlevel: ["Required level", "Req Level", "Level"],
                    resirtng: ["PvP Resilience rating", "PvP Resilience", "Resil"],
                    rgdatkpwr: ["Ranged attack power", "Ranged AP", "RAP"],
                    rgdcritstrkrtng: ["Ranged critical strike rating", "Ranged Crit", "Crit"],
                    rgddmgmax: ["Ranged maximum damage", "Ranged Max Damage", "Max"],
                    rgddmgmin: ["Ranged minimum damage", "Ranged Min Damage", "Min"],
                    rgddps: ["Ranged DPS", "Ranged DPS", "DPS"],
                    rgdhastertng: ["Ranged haste rating", "Ranged Haste", "Haste"],
                    rgdhitrtng: ["Ranged hit rating", "Ranged Hit", "Hit"],
                    rgdspeed: ["Ranged speed", "Ranged Speed", "Speed"],
                    sepbasestats: "Base stats",
                    sepdefensivestats: "Defensive stats",
                    sepindividualstats: "Individual stats",
                    sepoffensivestats: "Offensive stats",
                    sepresistances: "Resistances",
                    sepweaponstats: "Weapon stats",
                    shares: ["Shadow resistance", "Shadow Resist", "ShaR"],
                    shasplpwr: ["Shadow spell power", "Shadow Power", "ShaP"],
                    speed: ["Speed", "Speed", "Speed"],
                    spi: ["Spirit", "Spi", "Spi"],
                    splcritstrkrtng: ["Spell critical strike rating", "Spell Crit", "Crit"],
                    spldmg: ["Damage done by spells", "Spell Damage", "Dmg"],
                    splheal: ["Healing done by spells", "Healing", "Heal"],
                    splpwr: ["Spell power", "Spell Power", "SP"],
                    splhastertng: ["Spell haste rating", "Spell Haste", "Haste"],
                    splhitrtng: ["Spell hit rating", "Spell Hit", "Hit"],
                    splpen: ["Spell penetration", "Spell Pen", "Pen"],
                    sta: ["Stamina", "Sta", "Sta"],
                    str: ["Strength", "Str", "Str"],
                    pvppower: ["PvP Power", "PvPPower", "PvPPower"]
                }
            }
        }

        function ap() {
            if (WH.Tooltip) {
                WH.wowheadRemotePreload = true
            }
            if (L) {
                if (!WH.wowheadRemotePreload) {
                    let jsFiles = ["basic.js?34"];
                    if (g("iconSize")) {
                        jsFiles.push("global/WH/Icon.js?2")
                    }
                    for (let i = 0, jsFile; jsFile = jsFiles[i]; i++) {
                        let script = document.createElement("script");
                        script.src = WH.staticUrl + "/js/" + jsFile;
                        I.appendChild(script)
                    }
                }
            } else {
                N();
                r(function () {
                    W = window.Locale;
                    X.fetch(t, WH.getDataEnv());
                    X.fetch(ae, WH.getDataEnv())
                })
            }
        }

        function av() {
            var aV = g("hide");
            if (!aV) {
                return
            }
            if (typeof aK !== "undefined") {
                return
            }
            if (!document.styleSheets) {
                return
            }
            var aW = document.createElement("style");
            aW.type = "text/css";
            I.appendChild(aW);
            if (!window.createPopup) {
                I.appendChild(document.createTextNode(""))
            }
            aK = document.styleSheets[document.styleSheets.length - 1];
            for (var aU in aV) {
                if (!aV.hasOwnProperty(aU) || !aV[aU]) {
                    continue
                }
                if (aK.insertRule) {
                    aK.insertRule(".wowhead-tooltip .whtt-" + aU + "{display: none}", aK.cssRules.length)
                } else {
                    if (aK.addRule) {
                        aK.addRule(".wowhead-tooltip .whtt-" + aU, "display: none", -1)
                    }
                }
            }
        }

        this.getEntity = function (aV, aY, aX, aU) {
            var aW = aQ(aV);
            aW[aY] = aW[aY] || {};
            aW[aY][aX] = aW[aY][aX] || {};
            aW[aY][aX][aU] = aW[aY][aX][aU] || {status: K, callbacks: [], data: {}};
            return aW[aY][aX][aU]
        };

        function aQ(aU) {
            if (typeof Z[aU] !== "object") {
                throw new Error("Wowhead tooltips could not find config for entity #" + aU)
            }
            return Z[aU].data
        }

        function aH(aU) {
            if (typeof Z[aU] !== "object") {
                WH.error("Wowhead tooltips could not find config for entity #" + aU);
                return undefined
            }
            if (!WH.wowheadRemote || !Z[aU].hasOwnProperty("maxId")) {
                return undefined
            }
            return {min: Z[aU].hasOwnProperty("minId") ? Z[aU].minId : 1, max: Z[aU].maxId}
        }

        function at(aU) {
            if (typeof Z[aU] !== "object") {
                WH.error("Wowhead tooltips could not find config for entity #" + aU);
                return "Entity"
            }
            return Z[aU].name
        }

        function al(aU) {
            if (typeof Z[aU] !== "object") {
                WH.error("Wowhead tooltips could not find config for entity #" + aU);
                return "unknown"
            }
            return Z[aU].path
        }

        function c(aU, aV) {
            var aW = _LANG[aU] || _LANG[0];
            return aW[aV] || ""
        }

        function g(aV) {
            var aU = O();
            if (!aU) {
                return null
            }
            if (!aU.hasOwnProperty(aV)) {
                if (aS[aV] && aU.hasOwnProperty(aS[aV])) {
                    return aU[aS[aV]]
                }
                return null
            }
            return aU[aV]
        }

        function O() {
            if (typeof whTooltips === "object") {
                return whTooltips
            }
            if (typeof wowhead_tooltips === "object") {
                return wowhead_tooltips
            }
            return null
        }

        function N() {
            if (C) {
                return
            }
            C = true;
            WH.aE(document, "keydown", function (aU) {
                aU = WH.normalizeEvent(aU);
                switch (aU.keyCode) {
                    case 27:
                        $WowheadPower.clearTouchTooltip();
                        WH.Tooltip.hide();
                        break
                }
            });
            if (WH.isTouch()) {
                f()
            } else {
                WH.aE(document, "mouseover", D)
            }
        }

        this.attachTouchTooltips = function (aU) {
            if (!WH.isTouch()) {
                return
            }
            if (aU && aU.nodeType === 1) {
                f(aU)
            }
        };

        function r(aU) {
            if (document.readyState === "loading") {
                document.addEventListener("DOMContentLoaded", aU)
            } else {
                aU()
            }
        }

        function ai(aU) {
            if (!aU.dataset || aU.dataset.hasWhTouchEvent === "true") {
                return
            }
            if (aU.onclick == null) {
                aU.onclick = o
            } else {
                WH.aE(aU, "click", o)
            }
            aU.dataset.hasWhTouchEvent = "true"
        }

        function f(aU) {
            if (!WH.isTouch()) {
                return
            }
            r(function () {
                aU = aU || document.body;
                var aW = WH.gE(aU, "a");
                for (var aX = 0, aV = aW.length; aX < aV; aX++) {
                    ai(aW[aX])
                }
            })
        }

        this.init = function () {
            if (g("iconSize") && typeof Icon === "undefined") {
                setTimeout($WowheadPower.init, 10);
                return
            }
            if (L) {
                if (!WH.wowheadRemotePreload) {
                    WH.ae(I, WH.ce("link", {
                        type: "text/css",
                        href: WH.staticUrl + "/css/basic.css?&14",
                        rel: "stylesheet"
                    }));
                    if (g("iconSize")) {
                        WH.ae(I, WH.ce("link", {
                            type: "text/css",
                            href: WH.staticUrl + "/css/global/icon.css",
                            rel: "stylesheet"
                        }))
                    }
                }
            }
            N();
            r(function () {
                if (g("renameLinks") || g("colorLinks") || g("iconizeLinks") || g("iconSize")) {
                    for (var aU = 0; aU < document.links.length; aU++) {
                        var aV = document.links[aU];
                        E(aV)
                    }
                    av()
                } else {
                    if (document.querySelectorAll) {
                        var aW = document.querySelectorAll('a[href*="wowhead.com/talent-calc/embed/"]');
                        for (var aU = 0; aU < aW.length; aU++) {
                            E(aW[aU])
                        }
                    }
                }
            })
        };

        function H(aU) {
            var aV = WH.getCursorPos(aU);
            ar = aV.x;
            aq = aV.y
        }

        function aj(aV, aW) {
            if (aV.classList) {
                for (let i = 0, len = aW.length; i < len; i++) {
                    aV.classList.add(aW[i])
                }
            } else {
                for (var aU = 0; aU < aW.length; aU++) {
                    if ((" " + aV.className + " ").indexOf(" " + aW[aU] + " ") < 0) {
                        aV.className = (aV.className ? aV.className + " " : "") + aW[aU]
                    }
                }
            }
        }

        function E(aX, bj) {
            if (bj && aX.dataset && aX.dataset.simpleTooltip) {
                if (!WH.isTouch() && !aX.onmouseout) {
                    if (aX.dataset.tooltipMode !== "attach") {
                        aX.onmousemove = ay
                    }
                    aX.onmouseout = ad
                }
                WH.Tooltip.show(aX, aX.dataset.simpleTooltip.length < 30 ? '<div class="no-wrap">' + aX.dataset.simpleTooltip + "</div>" : aX.dataset.simpleTooltip);
                return b
            }
            if (aX.nodeName !== "A" && aX.nodeName !== "AREA") {
                return aG
            }
            var a1 = aX.rel;
            try {
                if (aX.dataset && aX.dataset.hasOwnProperty("wowhead")) {
                    a1 = aX.dataset.wowhead
                } else {
                    if (aX.getAttribute && aX.getAttribute("data-wowhead")) {
                        a1 = aX.getAttribute("data-wowhead")
                    }
                }
            } catch (bp) {
                void (0)
            }
            if ((!aX.href.length && !a1) || (a1 && /^np\b/.test(a1)) || (aX.getAttribute("data-disable-wowhead-tooltip") === "true") || (WH.isTouch() && aX.getAttribute("data-disable-wowhead-touch-tooltip") === "true")) {
                return l
            }
            var bg, bf, be, aV, bm = {};
            var a2 = /^https?:\/\/(?:[^/]+\.)?classic\.(?:[^/]+\.)?wowhead\.com\/talent-calc\/embed\/[^#]+/;
            if (L && (aV = aX.href.match(a2))) {
                aX.parentNode.replaceChild(WH.ce("div", {
                    style: {
                        maxWidth: "750px",
                        maxHeight: "513px",
                        margin: "10px auto"
                    }, className: "wowhead-embed wowhead-embed-talent-calc"
                }, WH.ce("div", {
                    style: {
                        position: "relative",
                        width: "100%",
                        height: 0,
                        paddingTop: "68.4%"
                    }
                }, WH.ce("iframe", {
                    src: aV[0],
                    width: "100%",
                    height: "100%",
                    style: {border: 0, left: 0, position: "absolute", top: 0, borderRadius: "6px"},
                    sandbox: "allow-scripts allow-top-navigation"
                }))), aX);
                return b
            }
            m = bm;
            var a0 = function (br, bs, bt) {
                switch (bs) {
                    case"buff":
                    case"map":
                    case"noimage":
                    case"nomajor":
                    case"notip":
                    case"premium":
                    case"pvp":
                    case"sock":
                    case"text":
                    case"twcata":
                    case"twmists":
                    case"twtbc":
                    case"twwotlk":
                        bm[bs] = true;
                        break;
                    case"artk":
                    case"c":
                    case"class":
                    case"dd":
                    case"ddsize":
                    case"diff":
                    case"diffnew":
                    case"ench":
                    case"gem1lvl":
                    case"gem2lvl":
                    case"gem3lvl":
                    case"ilvl":
                    case"level":
                    case"lvl":
                    case"nlc":
                    case"pwr":
                    case"q":
                    case"rand":
                    case"rank":
                    case"spec":
                    case"tink":
                    case"upgd":
                        bm[bs] = parseInt(bt);
                        break;
                    case"abil":
                    case"azerite-essence-powers":
                    case"azerite-powers":
                    case"bonus":
                    case"cri":
                    case"forg":
                    case"gem1bonus":
                    case"gem2bonus":
                    case"gem3bonus":
                    case"gems":
                    case"know":
                    case"pcs":
                    case"rewards":
                        bm[bs] = bt.split(":");
                        break;
                    case"build":
                    case"domain":
                    case"who":
                        bm[bs] = bt;
                        break;
                    case"image":
                        if (bt === "premium") {
                            bm[bt] = true
                        } else {
                            bm[bs] = bt ? ("_" + bt) : ""
                        }
                        break;
                    case"transmog":
                        if (bt === "hidden") {
                            bm[bs] = bt
                        } else {
                            bm[bs] = parseInt(bt)
                        }
                        break;
                    case"when":
                        bm[bs] = new Date(parseInt(bt));
                        break
                }
            };
            if (aw.applyto & 1) {
                bf = 2;
                be = 3;
                if (aX.href.indexOf("http://") == 0 || aX.href.indexOf("https://") == 0) {
                    bg = 1;
                    aV = aX.href.match(/^https?:\/\/(.+?)?\.?(?:wowhead)\.com(?:\:\d+)?\/\??(item|quest|spell|zone|achievement|event|itemset|item-set|transmog-set|outfit|guide|statistic|currency|npc|object|pet-ability|petability|building|follower|champion|bfa-champion|garrisonability|mission-ability|mission|ship|threat|resource|order-advancement|affix|azerite-essence|azerite-essence-power|storyline|adventure-combatant-ability|mount|recipe)[=/](?:[^/?&#]+-)?(-?\d+(?:\.\d+)?)/);
                    if (!aV) {
                        aV = aX.href.match(/^https?:\/\/(.+?)?\.?(?:wowhead)\.com(?:\:\d+)?\/(guide)s\/([^\?&#]+)/)
                    }
                    z = 0
                } else {
                    aV = aX.href.match(/()\/\??(item|quest|spell|zone|achievement|event|itemset|item-set|transmog-set|outfit|statistic|currency|npc|object|pet-ability|petability|building|follower|champion|bfa-champion|garrisonability|mission-ability|mission|ship|threat|resource|order-advancement|affix|azerite-essence|azerite-essence-power|storyline|adventure-combatant-ability|guide|mount|recipe)[=/](?:[^/?&#]+-)?(-?\d+(?:\.\d+)?)/);
                    if (!aV) {
                        aV = aX.href.match(/()\/(guide)s\/([^\?&#]+)/)
                    }
                    z = 1
                }
            }
            if (aV == null && a1 && (aw.applyto & 2)) {
                bg = 0;
                bf = 1;
                be = 2;
                aV = a1.match(/(item|quest|spell|zone|achievement|event|itemset|item-set|transmog-set|outfit|statistic|currency|npc|object|pet-ability|petability|building|follower|champion|bfa-champion|garrisonability|mission-ability|mission|ship|threat|resource|order-advancement|affix|azerite-essence|azerite-essence-power|storyline|adventure-combatant-ability|guide|mount|recipe).?(-?\d+(?:\.\d+)?)/);
                z = 1
            }
            if (!aV) {
                return l
            }
            aX.href.replace(/([a-zA-Z0-9-]+)=?([^&?#]*)/g, a0);
            if (a1) {
                a1.replace(/([a-zA-Z0-9-]+)=?([^&?#]*)/g, a0)
            }
            if (bm.gems && bm.gems.length > 0) {
                var bk;
                for (bk = Math.min(3, bm.gems.length - 1); bk >= 0; --bk) {
                    if (parseInt(bm.gems[bk])) {
                        break
                    }
                }
                ++bk;
                if (bk == 0) {
                    delete bm.gems
                } else {
                    if (bk < bm.gems.length) {
                        bm.gems = bm.gems.slice(0, bk)
                    }
                }
            }
            var aW = ["bonus", "gem1bonus", "gem2bonus", "gem3bonus"];
            for (var bb = 0, a3; a3 = aW[bb]; bb++) {
                if (bm[a3] && bm[a3].length > 0) {
                    for (bk = Math.min(16, bm[a3].length - 1); bk >= 0; --bk) {
                        if (parseInt(bm[a3][bk])) {
                            break
                        }
                    }
                    ++bk;
                    if (bk == 0) {
                        delete bm[a3]
                    } else {
                        if (bk < bm[a3].length) {
                            bm[a3] = bm[a3].slice(0, bk)
                        }
                    }
                }
            }
            if (bm.abil && bm.abil.length > 0) {
                var bk, bo = [], bi;
                for (bk = 0; bk < Math.min(8, bm.abil.length); bk++) {
                    if (bi = parseInt(bm.abil[bk])) {
                        bo.push(bi)
                    }
                }
                if (bo.length == 0) {
                    delete bm.abil
                } else {
                    bm.abil = bo
                }
            }
            if (bm.rewards && bm.rewards.length > 0) {
                var bk;
                for (bk = Math.min(3, bm.rewards.length - 1); bk >= 0; --bk) {
                    if (/^\d+.\d+$/.test(bm.rewards[bk])) {
                        break
                    }
                }
                ++bk;
                if (bk == 0) {
                    delete bm.rewards
                } else {
                    if (bk < bm.rewards.length) {
                        bm.rewards = bm.rewards.slice(0, bk)
                    }
                }
            }
            an = aX;
            var bq = null;
            var bh = W.getId();
            var aU = WH.getDataEnv();
            if (bm.domain) {
                bq = bm.domain.toLowerCase()
            } else {
                if (bg && aV[bg]) {
                    bq = aV[bg].toLowerCase().replace(/(?:^|\.)(staging|dev)$/, "")
                }
            }
            if (bq !== null) {
                aU = WH.dataEnv.MAIN;
                bh = WH.getLocaleFromDomain(bq);
                if ((new RegExp("\\b" + WH.BETA_DOMAIN + "\\b")).test(bq)) {
                    aU = WH.dataEnv.BETA
                } else {
                    if (/^sl|shadow$/.test(bq)) {
                        aU = WH.dataEnv.BETA
                    } else {
                        for (var a9 in WH.dataEnv) {
                            if (!WH.dataEnv.hasOwnProperty(a9) || !WH.dataEnvTerm.hasOwnProperty(WH.dataEnv[a9])) {
                                continue
                            }
                            if ((new RegExp("\\b" + WH.dataEnvTerm[WH.dataEnv[a9]] + "\\b")).test(bq)) {
                                aU = WH.dataEnv[a9];
                                break
                            }
                        }
                    }
                }
            }
            if (aU === WH.dataEnv.PTR && !WH.isPtrActive()) {
                aU = WH.dataEnv.MAIN
            }
            if (aU === WH.dataEnv.BETA && !WH.isBetaActive()) {
                aU = WH.dataEnv.MAIN
            }
            if ([WH.dataEnv.BETA, WH.dataEnv.PTR].indexOf(aU) >= 0) {
                bh = 0
            }
            if (aX.href.indexOf("#") != -1 && document.location.href.indexOf(aV[bf] + "=" + aV[be]) != -1) {
                return l
            }
            var a6 = false;
            if (WH.isTouch()) {
                if ("innerWidth" in window) {
                    a6 = window.innerWidth < w
                } else {
                    var bn = document.documentElement || document.body;
                    a6 = !isNaN(bn.clientWidth) && bn.clientWidth < w
                }
            }
            am = aB["float"];
            if (a6) {
                am = aB.screen
            } else {
                if ((aX.parentNode.className.indexOf("icon") === 0 && aX.parentNode.nodeName === "DIV") || aX.dataset.whattach === "icon" || aX.dataset.tooltipMode === "icon") {
                    am = aB.attachToIcon
                } else {
                    if (WH.isTouch() || aX.dataset.whattach === "true" || aX.dataset.tooltipMode === "attach") {
                        am = aB.attach
                    } else {
                        var a5 = aX.parentNode;
                        var a4 = 0;
                        while (a5) {
                            if (a5.className && a5.className.indexOf("menu-inner") === 0) {
                                am = aB.attachWithoutScreenshot;
                                break
                            }
                            a4++;
                            if (a4 > 9) {
                                break
                            }
                            a5 = a5.parentNode
                        }
                    }
                }
            }
            if (!WH.isTouch() && !aX.onmouseout) {
                if (am === aB["float"]) {
                    aX.onmousemove = ay
                }
                aX.onmouseout = ad
            }
            if (am === aB["float"] && aX.dataset.whtticon === "false") {
                am = aB.floatWithoutIcon
            }
            var a7 = aV[bf];
            var aZ = WH.getTypeIdFromTypeString(a7);
            var aY = aV[be];
            if (bj) {
                x = true;
                H(bj);
                WH.Tooltip.showingTooltip = true;
                if (typeof aX.overrideTooltip == "object") {
                    var ba = aX.overrideTooltip.html;
                    var a8 = aX.overrideTooltip.html2;
                    if (typeof aX.overrideTooltip.htmlGenerator == "function") {
                        ba = aX.overrideTooltip.htmlGenerator(aX.overrideTooltip)
                    }
                    if (typeof aX.overrideTooltip.html2Generator == "function") {
                        a8 = aX.overrideTooltip.html2Generator(aX.overrideTooltip)
                    }
                    if (aX.overrideTooltip.spanClass) {
                        ba = '<span class="' + aX.overrideTooltip.spanClass + '">' + ba + "</span>";
                        if (a8) {
                            a8 = '<span class="' + aX.overrideTooltip.spanClass + '">' + a8 + "</span>"
                        }
                    }
                    aP(bh, ba, aX.overrideTooltip.icon, aX.overrideTooltip.map, aX.overrideTooltip.spellData, a8, aX.overrideTooltip.image, aX.overrideTooltip.imageClass)
                } else {
                    e(aZ, aY, aU, bh, bm)
                }
            }
            if (bj || !O()) {
                return b
            }
            var bc = $WowheadPower.getEntity(aZ, ao(aZ, aY, bm), aU, bh);
            var bd = [];
            if ((g("renameLinks") && aX.getAttribute("data-wh-rename-link") !== "false") || aX.getAttribute("data-wh-rename-link") === "true") {
                bd.push(function () {
                    delete aX.dataset.whIconAdded;
                    aX.innerHTML = "<span>" + bc.data.name + "</span>"
                })
            }
            var bl = aX.getAttribute("data-wh-icon-size");
            if ((bl || g("iconizeLinks")) && ICONIZE_TYPES.indexOf(aZ) !== -1) {
                if (!bl) {
                    bl = g("iconSize")
                }
                bd.push(function () {
                    if (bc.data.icon && aX.dataset.whIconAdded !== "true") {
                        az(aX, bc.data, bl)
                    }
                })
            }
            if (g("colorLinks") && aZ === t) {
                bd.push(function () {
                    aj(aX, ["q" + bc.data.quality])
                })
            }
            if (bd.length) {
                if (bc.status === K || bc.status === ac) {
                    bc.callbacks = bc.callbacks.concat(bd);
                    if (bc.status === K) {
                        ax(aZ, aY, aU, bh, true, bm)
                    }
                } else {
                    if (bc.status === ak || bc.status === u) {
                        while (bd.length) {
                            bd.shift()()
                        }
                    }
                }
            }
            return b
        }

        function az(aV, aW, aU) {
            if (!aU || typeof WH.Icon === "undefined" || !WH.Icon.isValidSize(aU)) {
                aU = "tiny"
            }
            var aX = aW.icon.toLocaleLowerCase();
            if (aU === "tiny") {
                aj(aV, ["icontinyl"]);
                if (aV.style.setProperty) {
                    aV.style.setProperty("padding-left", "18px", "important")
                } else {
                    aV.style.paddingLeft = "18px"
                }
                aV.style.verticalAlign = "center";
                aV.style.background = "url(" + WH.staticUrl + "/images/wow/icons/tiny/" + aX + ".gif) left center no-repeat"
            } else {
                if (aV.getAttribute("data-wh-icon-added") === "true") {
                    return
                }
                WH.aef(aV, WH.Icon.create(aX, aU, null, {span: true}))
            }
            aV.setAttribute("data-wh-icon-added", "true")
        }

        function D(aW) {
            aW = WH.normalizeEvent(aW);
            var aV = aW._target;
            var aU = 0;
            while (aV != null && aU < 5 && E(aV, aW) === aG) {
                aV = aV.parentNode;
                ++aU
            }
        }

        function o(aX) {
            aX = WH.normalizeEvent(aX);
            var aW = this;
            if (aW.hasWHTouchTooltip === true) {
                return
            }
            var aV = 0;
            var aU;
            while (aW != null && aV < 5 && (aU = E(aW, aX)) === aG) {
                aW = aW.parentNode;
                ++aV
            }
            if (aU === b) {
                if (ab !== null) {
                    ab.removeAttribute("data-showing-touch-tooltip");
                    ab.hasWHTouchTooltip = false
                }
                ab = aW;
                ab.hasWHTouchTooltip = true;
                if (aX.stopPropagation) {
                    aX.stopPropagation()
                }
                if (aX.preventDefault) {
                    aX.preventDefault()
                }
                return false
            }
        }

        function ay(aU) {
            aU = WH.normalizeEvent(aU);
            H(aU);
            WH.Tooltip.move(ar, aq, 0, 0, CURSOR_HSPACE, CURSOR_VSPACE)
        }

        function ad() {
            ah = null;
            an = null;
            WH.Tooltip.hide()
        }

        function ag(aW) {
            if (!WH.isDev()) {
                return "https://" + aW + ".wowhead.com"
            }
            var aU = document.location.hostname.split(".");
            aU = aU[aU.length - 3];
            if (aW === "www") {
                aW = aU
            } else {
                aW = aW + "." + aU
            }
            var aV = "https://" + aW + ".wowhead.com";
            if (document.location.port !== "") {
                aV += ((document.location.port.indexOf(":") < 0) ? ":" : "") + document.location.port
            }
            if (document.location.protocol !== "https:") {
                aV = aV.replace(/^https:/, "http:")
            }
            return aV
        }

        function s(aV) {
            var aU = "tooltip";
            if (m && m.buff) {
                aU = "buff"
            }
            if (m && m.text) {
                aU = "text"
            }
            if (m && m.premium) {
                aU = "tooltip_premium"
            }
            return aU + (aV || "")
        }

        function aN() {
            return (m && m.text) ? "text_icon" : "icon"
        }

        function aT() {
            return (m && m.buff ? "buff" : "") + "spells"
        }

        function v(aU) {
            if (typeof aU === "undefined") {
                return "image_NONE"
            }
            return "image" + aU
        }

        function e(aZ, aV, aW, a1, aX) {
            if (!aX) {
                aX = {}
            }
            var a0 = ao(aZ, aV, aX);
            ah = aZ;
            A = a0;
            Q = aW;
            au = a1;
            m = aX;
            X.isLoaded(aZ, aW);
            var aY = $WowheadPower.getEntity(aZ, a0, aW, a1);
            if (aY.status === ak || aY.status === d) {
                var a2 = aY.data[v(aX.image)];
                var a3 = aY.data["image" + aX.image + "_class"];
                var aU = G(aZ, aV, aW);
                if (aU) {
                    a2 = aU[0];
                    a3 = aU[1]
                }
                aP(a1, aY.data[s()], aY.data[aN()], aY.data.map, aY.data[aT()], aY.data[s(2)], a2, a3)
            } else {
                if (aY.status === ac || aY.status === u) {
                    if (WH.inArray(STEALTH_TYPES, aZ) == -1) {
                        aP(a1, c(a1, "loading"))
                    }
                } else {
                    ax(aZ, aV, aW, a1, WH.inArray(STEALTH_TYPES, aZ) != -1, aX)
                }
            }
        }

        function ax(a4, aV, aW, a7, a3, aX) {
            var a5 = ao(a4, aV, aX);
            var aZ = $WowheadPower.getEntity(a4, a5, aW, a7);
            if (aZ.status !== K && aZ.status !== aA) {
                return
            }
            aZ.status = ac;
            var a1 = aH(a4);
            if (a1 && (parseInt(aV, 10) < a1.min || parseInt(aV, 10) > a1.max)) {
                $WowheadPower.register(a4, aV, aW, a7, {error: "ID is out of range"});
                return
            }
            if (!a3) {
                aZ.timer = setTimeout(S.bind(this, a4, a5, aW, a7), 333)
            }
            var a8 = [];
            for (var a0 in aX) {
                switch (a0) {
                    case"spec":
                        if (a4 === ae || a4 === aJ) {
                            break
                        }
                    case"abil":
                    case"artk":
                    case"azerite-essence-powers":
                    case"azerite-powers":
                    case"bonus":
                    case"build":
                    case"class":
                    case"dd":
                    case"ddsize":
                    case"diff":
                    case"diffnew":
                    case"ench":
                    case"gem1bonus":
                    case"gem1lvl":
                    case"gem2bonus":
                    case"gem2lvl":
                    case"gem3bonus":
                    case"gem3lvl":
                    case"gems":
                    case"ilvl":
                    case"level":
                    case"lvl":
                    case"nlc":
                    case"nomajor":
                    case"pvp":
                    case"q":
                    case"rand":
                    case"rank":
                    case"rewards":
                    case"sock":
                    case"tink":
                    case"transmog":
                    case"twcata":
                    case"twmists":
                    case"twtbc":
                    case"twwotlk":
                    case"upgd":
                        if (typeof aX[a0] === "object") {
                            a8.push(a0 + "=" + aX[a0].join(":"))
                        } else {
                            if (aX[a0] === true) {
                                a8.push(a0)
                            } else {
                                a8.push(a0 + "=" + aX[a0])
                            }
                        }
                        break
                }
            }
            var aY = WH.getDomainFromLocale(a7);
            switch (aW) {
                case WH.dataEnv.MAIN:
                    break;
                case WH.dataEnv.BETA:
                    if (WH.BETA_DOMAIN) {
                        aY += (aY ? "." : "") + WH.BETA_DOMAIN;
                        break
                    }
                default:
                    aY += (aY ? "." : "") + WH.dataEnvTerm[aW]
            }
            if (!aY) {
                aY = "www"
            }
            var a2 = ag(aY);
            if (aW === WH.dataEnv.PTR || aW === WH.dataEnv.BETA) {
                if (WH.getDataBuild(aW) !== "0") {
                    a8.push(WH.getDataBuild(aW))
                }
            }
            if (!X.isLoaded(a4, aW)) {
                X.fetch(a4, aW)
            }
            if (a4 == t && aX && aX.hasOwnProperty("lvl") && !X.isLoaded(ae, aW)) {
                X.fetch(ae, aW)
            }
            var aU = a8.length ? "?" + a8.join("&") : "";
            var a6 = a2 + "/tooltip/" + al(a4) + "/" + aV + aU;
            WH.xhrJsonRequest(a6, (function (bb, be, ba, bd, a9, bc) {
                if (!bc) {
                    WH.error("Wowhead tooltips failed to load data for " + at(bb) + " #" + be);
                    return
                } else {
                    if (bc.error) {
                        WH.error("Wowhead tooltip request responded with an error", bc.error, at(bb) + " #" + be)
                    }
                }
                $WowheadPower.register(bb, ba, bd, a9, bc)
            }).bind(null, a4, aV, a5, aW, a7))
        }

        function aP(bc, bf, a2, be, aU, bm, aW, a1) {
            av();
            if (!x) {
                return
            }
            if (an && an._fixTooltip) {
                bf = an._fixTooltip(bf, ah, A, an)
            }
            var bi = false;
            if (!bf) {
                bf = c(bc, "notFound").replace("%s", at(ah));
                a2 = "inv_misc_questionmark";
                bi = true
            } else {
                if (m != null) {
                    if (WH.reforgeStats && m.forg && WH.reforgeStats[m.forg]) {
                        var a0 = WH.reforgeStats[m.forg];
                        var bv = [a0.i1];
                        for (var bs in WH.individualToGlobalStat) {
                            if (WH.individualToGlobalStat[bs] == bv[0]) {
                                bv.push(bs)
                            }
                        }
                        var bq;
                        if ((bq = bf.match(new RegExp("(<!--(stat|rtg)(" + bv.join("|") + ")-->)[+-]?([0-9]+)"))) && !bf.match(new RegExp("<!--(stat|rtg)" + a0.i2 + "-->[+-]?[0-9]+"))) {
                            var bn = Math.floor(bq[4] * a0.v), bl = aL.traits[a0.s2][0];
                            if (a0.i2 == 6) {
                                bf = bf.replace("<!--rs-->", "<br />+" + bn + " " + bl)
                            } else {
                                bf = bf.replace("<!--rr-->", WH.sprintfGlobal(aL.tooltip_genericrating, bl.toLowerCase(), a0.i2, bn))
                            }
                            bf = bf.replace(bq[0], bq[1] + (bq[4] - bn));
                            bf = bf.replace("<!--rf-->", '<span class="q2">' + WH.sprintfGlobal(aL.tooltip_reforged, bn, aL.traits[a0.s1][2], aL.traits[a0.s2][2]) + "</span><br />")
                        }
                    }
                    if (m.pcs && m.pcs.length) {
                        var bp = 0;
                        for (var bs = 0, a6 = m.pcs.length; bs < a6; ++bs) {
                            var bq;
                            var bb = new RegExp("<span><!--si([0-9]+:)*" + m.pcs[bs] + '(:[0-9]+)*--><a href="/??item=(\\d+)">(.+?)</a></span>');
                            if (bq = bf.match(bb)) {
                                var bu = !isNaN(parseInt(au)) ? p[au] : "enus";
                                var a4 = (WH.isSet("g_items") && g_items[m.pcs[bs]]) ? g_items[m.pcs[bs]]["name_" + bu] : bq[4];
                                var aY = '<a href="/item=' + bq[3] + '">' + a4 + "</a>";
                                var ba = '<span class="q13"><!--si' + m.pcs[bs] + "-->" + aY + "</span>";
                                bf = bf.replace(bq[0], ba);
                                ++bp
                            }
                        }
                        if (bp > 0) {
                            bf = bf.replace("(0/", "(" + bp + "/");
                            bf = bf.replace(new RegExp("<span>\\(([0-" + bp + "])\\)", "g"), '<span class="q2">($1)')
                        }
                    }
                    if (m.know && m.know.length) {
                        bf = WH.setTooltipSpells(bf, m.know, aU)
                    }
                    if (m.lvl && !m.ilvl) {
                        bf = WH.setTooltipLevel(bf, (m.lvl ? m.lvl : WH.maxLevel), m.buff)
                    }
                    if (m.who && m.when) {
                        bf = bf.replace("<table><tr><td><br />", '<table><tr><td><br /><span class="q2">' + WH.sprintf(c(bc, "achievementComplete"), m.who, m.when.getMonth() + 1, m.when.getDate(), m.when.getFullYear()) + "</span><br /><br />");
                        bf = bf.replace(/class="q0"/g, 'class="r3"')
                    }
                    if (m.notip && aW) {
                        bf = "";
                        a2 = null
                    }
                    if ((ah == TYPE_PETABILITY) && m.pwr) {
                        bf = bf.replace(/<!--sca-->(\d+)<!--sca-->/g, function (bw, bx) {
                            return Math.floor(parseInt(bx) * (1 + 0.05 * m.pwr))
                        })
                    }
                    if ((ah == V) && m.cri) {
                        for (var bs = 0; bs < m.cri.length; bs++) {
                            bf = bf.replace(new RegExp("<!--cr" + parseInt(m.cri[bs]) + ":[^<]+", "g"), '<span class="q2">$&</span>')
                        }
                    }
                }
            }
            if (!aO && WH.isSet("g_user") && ((WH.isRetailTree(Q) && ("lists" in g_user) && WH.isSet("g_completion")) || (WH.isClassicTree(Q) && g_user.characterProfiles && g_user.characterProfiles.length))) {
                var aZ = "";
                var aV = (WH.isRetailTree(Q) && (ah in g_types) && (g_types[ah] in g_completion)) ? g_completion[g_types[ah]] : false;
                var a5 = $WowheadPower.getEntity(ah, A);
                if (aV && (ah == aE)) {
                    if (bi || bf === c(bc, "loading") || (a5.hasOwnProperty("worldquesttype") && a5.worldquesttype != 0) || (a5.hasOwnProperty("daily") && a5.daily != 0) || (a5.hasOwnProperty("weekly") && a5.weekly != 0)) {
                        aV = false
                    }
                }
                var bh = !(aV && (ah in g_completion_categories) && WH.inArray(g_completion_categories[ah], a5.completion_category) === -1);
                var bg = /^-?\d+(?:\.\d+)?/.exec(A);
                bg = (bg && bg.length) ? bg[0] : A;
                if (aV) {
                    for (var bt in g_user.lists) {
                        var br = g_user.lists[bt];
                        if (!(br.id in aV)) {
                            continue
                        }
                        var a7 = (WH.inArray(aV[br.id], bg) != -1);
                        if (!a7 && !bh) {
                            continue
                        }
                        aZ += '<br><span class="progress-icon ' + (a7 ? "progress-8" : "progress-0") + '"></span> ';
                        aZ += br.character + " - " + br.realm + " " + br.region
                    }
                }
                if (WH.isClassicTree(Q) && ah === aE) {
                    for (var aX, bs = 0; aX = g_user.characterProfiles[bs]; bs++) {
                        var a7 = (WH.inArray(aX.quests, bg) != -1);
                        if (!a7 && !bh) {
                            continue
                        }
                        aZ += '<br><span class="progress-icon ' + (a7 ? "progress-8" : "progress-0");
                        aZ += '"></span> ' + aX.name + " - " + aX.realm
                    }
                }
                if (aZ != "") {
                    bf += '<br><span class="q">' + window.LANG.completion + ":</span>" + aZ
                }
            }
            if (!L && ah == t && WH.isSet("g_completion") && ("bagscans" in g_completion) && WH.isRetailTree(Q)) {
                var a8 = /^\d+/.exec(A);
                if (a8) {
                    a8 = a8[0]
                } else {
                    a8 = -1
                }
                var bo = [];
                for (var bd in g_completion.bagscans) {
                    bo.push(bd)
                }
                var bk = "";
                while (bd = bo.pop()) {
                    if (g_completion.bagscans[bd].items.hasOwnProperty(a8)) {
                        bk += '<tr><td class="q2" style="text-align: right">' + g_completion.bagscans[bd].items[a8] + '&nbsp;</td><td style="white-space: nowrap">' + g_completion.bagscans[bd].name + "</td></tr>"
                    }
                }
                if (bk != "") {
                    bf += '<br><span class="q">' + window.LANG.tooltip_bagscanner + "</span><br><table>" + bk + "</table>"
                }
            }
            if (!L && ah == TYPE_TRANSMOGSET && typeof WH.getPreferredTransmogRace !== "undefined") {
                var a3 = WH.getPreferredTransmogRace();
                bf = bf.replace(/\/modelviewer\/([^\/]+)\/webthumbs\/transmog\/\d+\/\d+\//g, "/modelviewer/$1/webthumbs/transmog/" + a3.race + "/" + (a3.gender - 1) + "/")
            }
            if (!L && bf && (m.diff || m.diffnew || m.noimage)) {
                aW = "";
                a1 = ""
            }
            bf = bf.replace("http://", "https://");
            if (m.map && be && be.getMap) {
                bm = be.getMap()
            }
            var bj = function (by, bw) {
                if (ah !== by.type || A !== by.id || Q !== by.dataEnv || au !== by.locale || m !== by.params) {
                    return
                }
                switch (am) {
                    case aB.screen:
                        WH.Tooltip.showInScreen(an, bw, null, bm, aW, a1, a2);
                        break;
                    case aB.attachToIcon:
                    case aB.attach:
                        var bx = WH.isElementFixedPosition(an);
                        WH.Tooltip.setIcon(am === aB.attachToIcon ? null : a2, bx);
                        WH.Tooltip.show(an, bw, null, null, null, bm, aW, a1, bx);
                        break;
                    case aB.attachWithoutScreenshot:
                        var bx = WH.isElementFixedPosition(an);
                        WH.Tooltip.setIcon(a2, bx);
                        WH.Tooltip.show(an, bw, null, null, null, bm, null, null, bx);
                        break;
                    case aB.floatWithoutIcon:
                        var bx = WH.isElementFixedPosition(an);
                        WH.Tooltip.setIcon(null, bx);
                        WH.Tooltip.showAtXY(bw, ar, aq, CURSOR_HSPACE, CURSOR_VSPACE, bm, aW, a1, bx);
                        break;
                    case aB["float"]:
                    default:
                        var bx = WH.isElementFixedPosition(an);
                        WH.Tooltip.setIcon(a2, bx);
                        WH.Tooltip.showAtXY(bw, ar, aq, CURSOR_HSPACE, CURSOR_VSPACE, bm, aW, a1, bx)
                }
            };
            var a9 = {type: ah, id: A, dataEnv: Q, locale: au, params: m};
            aI(bf, aU, bj.bind(this, a9), a9)
        }

        function aI(aV, aW, aY, aX) {
            switch (aX.type) {
                case aJ:
                    var aU = $WowheadPower.getEntity(aX.type, aX.id, aX.dataEnv, aX.locale);
                    if (aX.params.spec && !(aX.params.know && aX.params.know.length)) {
                        X.getSpellsBySpec(aX.params.spec, function (aZ) {
                            aV = aV.replace(/<!--embed:([^>]+)-->/g, function (a0, a1) {
                                return WH.setTooltipSpells(aU.data.embeds[a1].tooltip, aZ, aU.data.embeds[a1].spells)
                            });
                            aY(aV)
                        });
                        break
                    } else {
                        aV = aV.replace(/<!--embed:([^>]+)-->/g, function (aZ, a0) {
                            return WH.setTooltipSpells(aU.data.embeds[a0].tooltip, aX.params.know, aU.data.embeds[a0].spells)
                        })
                    }
                    window.requestAnimationFrame(aY.bind(null, aV));
                    break;
                case ae:
                    if (aX.params.spec && !(aX.params.know && aX.params.know.length)) {
                        X.getSpellsBySpec(aX.params.spec, function (aZ) {
                            aV = WH.setTooltipSpells(aV, aZ, aW);
                            aY(aV)
                        });
                        break
                    }
                    window.requestAnimationFrame(aY.bind(null, aV));
                    break;
                default:
                    window.requestAnimationFrame(aY.bind(null, aV))
            }
        }

        function S(aW, aY, aX, aU) {
            if (ah == aW && A == aY && Q == aX && au == aU) {
                aP(aU, c(aU, "loading"));
                var aV = $WowheadPower.getEntity(aW, aY, aX, aU);
                aV.timer = setTimeout(M.bind(this, aW, aY, aX, aU), 3850)
            }
        }

        function M(aW, aY, aX, aU) {
            var aV = $WowheadPower.getEntity(aW, aY, aX, aU);
            aV.status = aA;
            if (ah == aW && A == aY && Q == aX && au == aU) {
                aP(aU, c(aU, "noResponse"))
            }
        }

        function ao(aU, aW, aV) {
            if (aV.build) {
                return aW + "build" + aV.build
            }
            return aW + (aV.rand ? "r" + aV.rand : "") + (aV.ench ? "e" + aV.ench : "") + (aV.gems ? "g" + aV.gems.join(",") : "") + (aV.sock ? "s" : "") + (aV.upgd ? "u" + aV.upgd : "") + (aV.twtbc ? "twtbc" : "") + (aV.twwotlk ? "twwotlk" : "") + (aV.twcata ? "twcata" : "") + (aV.twmists ? "twmists" : "") + (aV.ilvl ? "ilvl" + aV.ilvl : "") + (aV.lvl ? "lvl" + aV.lvl : "") + (aV.gem1lvl ? "g1lvl" + aV.gem1lvl : "") + (aV.gem2lvl ? "g2lvl" + aV.gem2lvl : "") + (aV.gem3lvl ? "g3lvl" + aV.gem3lvl : "") + (aV.artk ? "ak" + aV.artk : "") + (aV.nlc ? "nlc" + aV.nlc : "") + (aV.transmog ? "transmog" + aV.transmog : "") + (aV.tink ? "tink" + aV.tink : "") + (aV.pvp ? "pvp" : "") + (aV.bonus ? "b" + aV.bonus.join(",") : "") + (aV.gem1bonus ? "g1b" + aV.gem1bonus.join(",") : "") + (aV.gem2bonus ? "g2b" + aV.gem2bonus.join(",") : "") + (aV.gem3bonus ? "g3b" + aV.gem3bonus.join(",") : "") + (aV.q ? "q" + aV.q : "") + (aV.level ? "level" + aV.level : "") + (aV.abil ? "abil" + aV.abil.join(",") : "") + (aV.dd ? "dd" + aV.dd : "") + (aV.ddsize ? "ddsize" + aV.ddsize : "") + (aV.diff == ae ? "diff" + aV.diff : "") + (aV.rank ? "rank" + aV.rank : "") + (aV["class"] ? "class" + aV["class"] : "") + (aU !== ae && aV.spec ? "spec" + aV.spec : "") + (aV.rewards ? "rewards" + aV.rewards.join(":") : "") + (aV["azerite-powers"] ? "azPowers" + aV["azerite-powers"] : "") + (aV["azerite-essence-powers"] ? "aePowers" + aV["azerite-essence-powers"] : "") + (aV.nomajor ? "nomajor" : "")
        }

        this.clearTouchTooltip = function (aU) {
            if (ab) {
                if (aU !== true) {
                    ab.removeAttribute("data-showing-touch-tooltip")
                }
                ab.hasWHTouchTooltip = false
            }
            ab = null;
            if (aU !== true) {
                WH.qsa("[data-showing-touch-tooltip]").forEach(function (aV) {
                    delete aV.dataset.showingTouchTooltip
                })
            }
            if (WH.Tooltip.screen) {
                WH.Tooltip.screenInnerWrapper.scrollTop = 0;
                WH.Tooltip.screenInnerWrapper.scrollLeft = 0;
                WH.Tooltip.screen.style.display = "none";
                WH.Tooltip.mobileTooltipShown = false
            }
            WH.Tooltip.hide();
            $WowheadPower.setParent()
        };

        function G(aU, aW, aV) {
            if (L) {
                return false
            }
            if (!WH.User.isPremium()) {
                return false
            }
            if (WH.Tooltip.hideScreenshots) {
                return false
            }
            let entity = WH.Gatherer.get(aU, aW, aV, true);
            if (entity && entity.screenshot && entity.screenshot.id) {
                return [WH.getScreenshotUrl(entity.screenshot.id, "small", {imageType: entity.screenshot.imageType}), "screenshot"]
            }
            return false
        }

        this.register = function (a1, aV, aW, a2, a0) {
            var aZ = this.getEntity(a1, aV, aW, a2);
            if (a0.hasOwnProperty("additionalIds")) {
                var aX = a0.additionalIds;
                delete a0.additionalIds;
                if (aX.length) {
                    for (var a3 = 0; a3 < aX.length; a3++) {
                        this.register(a1, aX[a3], aW, a2, a0)
                    }
                }
            }
            if (!X.isLoaded(a1, aW)) {
                aZ.status = u;
                X.registerCallback(a1, aW, this.register.bind(this, a1, aV, aW, a2, a0));
                return
            }
            if ((typeof aV === "string" && (aV.indexOf("lvl") === 0 || aV.match(/[^i]lvl/))) && !X.isLoaded(ae, aW)) {
                aZ.status = u;
                X.registerCallback(ae, aW, this.register.bind(this, a1, aV, aW, a2, a0));
                return
            }
            if (aZ.timer) {
                clearTimeout(aZ.timer);
                delete aZ.timer
            }
            if (!WH.wowheadRemote && a0.map) {
                if (aZ.data.map == null) {
                    aZ.data.map = new Mapper({parent: WH.ce("div"), zoom: 3, zoomable: false, buttons: false})
                }
                aZ.data.map.update(a0.map);
                delete a0.map
            }
            for (var aY in a0) {
                if (!a0.hasOwnProperty(aY)) {
                    continue
                }
                aZ.data[aY] = a0[aY]
            }
            switch (aZ.status) {
                case ac:
                case u:
                case K:
                    if (aZ.data[s()]) {
                        aZ.status = ak
                    } else {
                        aZ.status = d
                    }
            }
            if (WH.Tooltip.showingTooltip && ah == a1 && A == aV && Q == aW && au == a2) {
                var a4 = aZ.data[v(m.image)];
                var a5 = aZ.data["image" + m.image + "_class"];
                var aU = G(a1, aV, aW);
                if (aU) {
                    a4 = aU[0];
                    a5 = aU[1]
                }
                aP(a2, aZ.data[s()], aZ.data.icon, aZ.data.map, aZ.data[aT()], aZ.data[s(2)], a4, a5)
            }
            while (aZ.callbacks.length) {
                aZ.callbacks.shift()()
            }
        };
        this.request = function (aW, aZ, aY, aU, aX) {
            if (!aX) {
                aX = {}
            }
            if (aU === undefined) {
                aU = W.getId()
            }
            if (!aY) {
                aY = WH.getDataEnv()
            }
            var aV = ao(aW, aZ, aX);
            this.getEntity(aW, aV, aY, aU);
            ax(aW, aZ, aY, aU, true, aX)
        };
        this.triggerTooltip = function (aV, aU) {
            E(aV, aU || {target: aV})
        };
        this.refreshLinks = function (aV) {
            if (aV === true || g("renameLinks") || g("colorLinks") || g("iconizeLinks")) {
                var aU = WH.isTouch();
                for (var aW = 0; aW < document.links.length; aW++) {
                    var aY = document.links[aW];
                    var aX = aY.parentNode;
                    var aZ = false;
                    while (aX != null) {
                        if ((" " + aX.className + " ").replace(/[\n\t]/g, " ").indexOf(" wowhead-tooltip ") > -1) {
                            aZ = true;
                            break
                        }
                        aX = aX.parentNode
                    }
                    if (!aZ) {
                        E(aY);
                        if (aU) {
                            ai(aY)
                        }
                    }
                }
            }
            this.hideTooltip()
        };
        this.setParent = function (aU) {
            WH.Tooltip.reset();
            WH.Tooltip.prepare(aU, WH.isElementFixedPosition(aU))
        };
        this.replaceWithTooltip = function (a4, a0, aV, aW, a2, aX) {
            if (!aX) {
                aX = {}
            }
            if (a2 === undefined) {
                a2 = W.getId()
            }
            if (!aW) {
                aW = WH.getDataEnv()
            }
            if (typeof a4 == "string") {
                a4 = document.getElementById(a4)
            }
            if (!a4) {
                return false
            }
            var a1 = ao(a0, aV, aX);
            var aY = this.getEntity(a0, a1, aW, a2);
            switch (aY.status) {
                case ak:
                    if (!a4.parentNode) {
                        return true
                    }
                    while (a4.hasChildNodes()) {
                        a4.removeChild(a4.firstChild)
                    }
                    var aU = ["wowhead-tooltip-inline"];
                    if (aY.data.icon) {
                        aU.push("wowhead-tooltip-inline-icon")
                    }
                    aj(a4, aU);
                    var aZ = aY.data[s()];
                    var a3 = function (a5) {
                        WH.Tooltip.append(a4, a5, true, aY.data.icon)
                    };
                    aI(aZ, aY.data[aT()], a3, {type: a0, id: aV, dataEnv: aW, locale: a2, params: aX});
                    return true;
                case ac:
                case K:
                    aY.callbacks.push(this.replaceWithTooltip.bind(this, a4, a0, aV, aW, a2, aX));
                    this.request(a0, aV, aW, a2, aX);
                    return true
            }
            return false
        };
        if (L) {
            this.set = function (aU) {
                WH.cO(aw, aU)
            };
            this.showTooltip = function (aW, aV, aU) {
                H(aW);
                aP(0, aV, aU)
            };
            this.hideTooltip = function () {
                if (typeof WH === "undefined" || typeof WH.Tooltip === "undefined" || typeof WH.Tooltip.hide !== "function") {
                    return
                }
                WH.Tooltip.hide()
            };
            this.moveTooltip = function (aU) {
                ay(aU)
            }
        } else {
            this.disableCompletion = function () {
                aO = true
            }
        }
        ap()
    }
}
;