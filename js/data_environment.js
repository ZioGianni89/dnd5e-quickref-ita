data_environment_obscurance = [
    {
        title: "Leggermente oscurata",
        optional: "Regola Standard",
        icon: "bleeding-eye",
        subtitle: "Svantaggio su Percezione",
        description: "Luce fioca, nebbia a banchi, boscaglia moderata",
        reference: "PHB, pg. 183.",
        bullets: [
            "Le creature ottengono Svantaggio alle prove su Saggezza (Percezione) basate sulla vista."
        ]
    },
    {
        title: "Pesantemente oscurata",
        optional: "Regola Standard",
        icon: "lightning-tear",
        subtitle: "Effettivamente cieco",
        description: "Oscurità, nebbia fitta, boscaglia folta",
        reference: "PHB, pg. 183.",
        bullets: [
            "Una creatura in un'area pesantemente oscurata viene afflitta dalla condizione <b>Accecato</b>."
        ]
    }
]

data_environment_light = [
    {
        title: "Luce intensa",
        optional: "Regola Standard",
        icon: "star-pupil",
        subtitle: "Visione normale",
        description: "La luce intensa permette alla maggioranza delle creature di vedere normalmente",
        reference: "PHB, pg. 183.",
        bullets: [
            "Le giornate nuvolose forniscono comunque luce intensa, come torce, lanterne, fuochi e altre fonti di illuminazione con uno specifico raggio d'azione."
        ]
    },
    {
        title: "Luce fioca",
        optional: "Regola Standard",
        icon: "semi-closed-eye",
        subtitle: "Leggermente oscurato",
        description: "Luce fioca, chiamata anche ombre",
        reference: "PHB, pg. 183.",
        bullets: [
            "Crea un'area leggermente oscurata.",
            "Un'area di luce fioca è solitamente il confine tra una fonte di luce intensa, come una torcia, e l'oscurità circostante.",
            "La luce morbida del tramonto e dell'alba viene considerata luce fioca. Una particolarmente brillante luna piena può inondare il terreno di luce fioca."
        ]
    },
    {
        title: "Oscurità",
        optional: "Regola Standard",
        icon: "worried-eyes",
        subtitle: "Pesantemente oscurato",
        description: "L'oscurità crea un'area pesantemente oscurata",
        reference: "PHB, pg. 183.",
        bullets: [
            "Crea un'area pesantemente oscurata.",
            "I personaggi affrontano l'oscurità all'aperto di notte, entro i confini di un dungeon non illuminato o un deposito sotteraneo, o in un'area di oscurità magica."
        ]
    }
]

data_environment_vision = [
    {
        title: "Vista cieca",
        optional: "Regola Standard",
        icon: "one-eyed",
        subtitle: "Percepisci senza vista",
        description: "Percepisci l'ambiente circostante senza affidarti alla vista, entro un determinato raggio",
        reference: "PHB, pg. 183.",
        bullets: [
            "Creature senza occhi, come le melme, e creature con ecolocalizzazione o sensi potenziati, come pipistrelli e draghi puri, hanno questo senso."
        ]
    },
    {
        title: "Scurovisione",
        optional: "Regola Standard",
        icon: "semi-closed-eye",
        subtitle: "Visione limitata nell'oscurità",
        description: "Una creatura con scurovisione può vedere meglio in condizioni di buio o scarsa luce, entro un determinato raggio",
        reference: "PHB, pgs. 183-184.",
        bullets: [
            "Entro la distanza specifita, una creatura con scurovisione può vedere nel buio come se il buio fosse luce fioca, quindi per quanto concerne questa creatura le aree di oscurità sono solo leggermente oscurate.",
            "Comunque, la creatura non può distinguere i colori nel buio, solo tonalità di grigio.",
            "Tante creature nel mondo di D&D, specialmente quelle che vivono sottoterra, possiedono scurovisione."
        ]
    },
    {
        title: "Visione del vero",
        optional: "Regola Standard",
        icon: "eye-shield",
        subtitle: "Vedi nel buio",
        description: "Una creatura con visione del vero può vedere tutto nella sua vera forma, indipendentemente dall'ambiente",
        reference: "PHB, pg. 184.",
        bullets: [
            "Una creatura con visione del vero può, fino ad una determinata distanza, vedere in oscurità normale e magica, vedere creature e oggetti invisibili, individuare automaticamente illusioni ottiche e superare tiri salvezza contro di loro, percepire la forma originale di un mutaforma o di una creatura trasformata dalla magia.",
            "Inoltre, la creatura può vedere nel Piano Etereo."
        ]
    }
]

data_environment_cover = [
    {
        title: "Mezza copertura",
        optional: "Regola Standard",
        icon: "broken-shield",
        subtitle: "Muri bassi, mobilio, creature",
        description: "Un bersaglio ottiene mezza copertura se un un ostacolo blocca almeno metà del suo corpo",
        reference: "PHB, pg. 196.",
        bullets: [
            "L'ostacolo può essere un muro basso, un grosso pezzo di mobilio, uno stretto tronco d'albero, o una creatura, indifferentemente se quella creatura sia nemica o alleata.",
            "Un bersaglio con mezza copertura ottiene un bonus +2 alla CA e ai tiri salvezza su Destrezza.",
            "Se un bersaglio è dietro pià fonti di copertura, si applica solo la copertura maggiore."
        ]
    },
    {
        title: "Tre quarti di copertura",
        optional: "Regola Standard",
        icon: "cracked-shield",
        subtitle: "Grata, feritoia, grosso tronco",
        description: "Un bersaglio ottiene tre quarti di copertura se circa tre quarti del suo corpo è coperto da un ostacolo",
        reference: "PHB, pg. 196.",
        bullets: [
            "L'ostacolo può essere una grata, una feritoia o un grosso tronco d'albero.",
            "Un bersaglio con tre quarti di copertura ottiene un bouns +5 alla CA e ai tiri salvezza su Destrezza.",
            "Se un bersaglio è dietro pià fonti di copertura, si applica solo la copertura maggiore."
        ]
    },
    {
        title: "Copertura totale",
        optional: "Regola Standard",
        icon: "shield",
        subtitle: "Totalmente nascosto",
        description: "Un bersaglio ottiene copertura totale se è completamente nascosto da un ostacolo",
        reference: "PHB, pg. 196.",
        bullets: [
            "Un bersaglio con copertura totale non può essere bersagliato direttamente da un attacco o un incantesimo, sebbene alcuni incantesimi possono raggiungere il bersaglio includendolo nell'area di effetto.",
            "Se un bersaglio è dietro pià fonti di copertura, si applica solo la copertura maggiore."
        ]
    }
]
