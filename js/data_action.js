data_action = [
    {
        title: "Attacco",
        optional: "Regola Standard",
        icon: "crossed-swords",
        subtitle: "Attacco in mischia o a distanza",
        description: "Esegui un attacco in mischia o a distanza con la tua arma o con il tuo Colpo Senz'Armi",
        reference: "PHB, pgs. 192,194-195.",
        bullets: [
            "Alcune capacità, come l'<i>Attacco Extra</i> del guerriero, ti permettono di effettuare più di un attacco con questa azione. Ognuno di questi attacchi richiede un tiro per colpire separato e possono essere indirizzati a più bersagli. Ti puoi muovere tra un attacco e l'altro.",
            "Quando attacchi con un'arma da mischia leggera, puoi usare la tua azione bonus per attaccare con l'altra mano (guarda l'azione bonus <i>Attaccare con la seconda mano</i>).",
            "<b>Colpo Senz'Armi</b>. Con colpo senz'armi, puoi causare danni (1 + Modificatore di Forza), <i>Afferrare<i>, o <i>Spingere<i>. ",
            "Alcune condizioni garantiscono vantaggio all'attacco: attacchi contro bersagli accecati, paralizzati, pietrificati, trattenuti, storditi o svenuti; attacchi in mischia contro bersagli proni; attacchi da attaccanti invisibili o nascosti.",
            "Alcune condizioni garantiscono svantaggio all'attacco: attacchi contro bersagli invisibili o nascosti; attacchi a distanza contro bersagli proni; attacchi da bersagli accecati, spaventati, avvelenati o trattenuti.",
            "Puoi estrarre o riporre la tua arma come parte della tua azione di attacco."
        ]
    },
    {
        title: "Afferrare",
        optional: "Regola Standard",
        icon: "grab",
        subtitle: "Colpo Senz'Armi",
        description: "Tenti di afferrare o lottare con una creatura",
        reference: "PHB, pg. 195.",
        bullets: [
            "Puoi usare l'azione di <i>Attacco</i> per effettuare un colpo senz'armi per afferrare una creatura. Se sei in grado di effettuare attacchi multipli con la tua azione di Attacco, questo attacco rimpiazza uno di questi.",
            "Il bersaglio del tuo attacco deve essere al massimo di una taglia più grande di te, e deve essere entro la tua portata.",
            "Il bersaglio deve superare un tiro salvezza su Forza o Destrezza (il bersaglio sceglie quale), o subisce la condizione Afferrato. La CD per il tiro salvezza e per qualsiasi tentativo di fuga è uguale a 8 più il tuo modificatore di Forza e il tuo Bonus Competenza."
        ]
    },
    {
        title: "Spingere",
        optional: "Regola Standard",
        icon: "hand",
        subtitle: "Colpo Senz'Armi",
        description: "Spingi una creatura, per renderla prona o per spingerla lontano da te",
        reference: "PHB, pg. 195. / DMG, pg. 272",
        bullets: [
            "Usando l'azione di <i>Attacco</i>, puoi effettuare un colpo senz'armi per spingere una creatura. Se sei in grado di effettuare attacchi multipli con la tua azione di Attacco, questo attacco rimpiazza uno di questi.",
            "Il bersaglio del tuo attacco deve essere al massimo di una taglia più grande di te, e deve essere entro la tua portata.",
            "Il bersaglio deve superare un tiro salvezza su Forza o Destrezza (il bersaglio sceglie quale), o viene spinto 1,5 metri (5 feet) lontano da te oppure subisce la condizione Prono. La CD per il tiro salvezza e per qualsiasi tentativo di fuga è uguale a 8 più il tuo modificatore di Forza e il tuo Bonus Competenza."
        ]
    },
    {
        title: "Shove Aside*",
        optional: "Optional rule",
        icon: "hand",
        subtitle: "Special melee attack",
        description: "Shove a creature, either to knock it prone or push it aside from you",
        reference: "PHB, pg. 195. / DMG, page 272",
        bullets: [
            "(Optional Rule):",
            "With this option, a creature uses the special shove attack to force a target to the side.",
            "The attacker has disadvantage on its Strength (Athletics) check when it does so.",
            "If that check is successful, the attacker moves the target 5 feet to a different space within its reach."
        ]
    },
    {
        title: "Cast a spell",
        optional: "Standard rule",
        icon: "magic-swirl",
        subtitle: "Cast time of 1 action",
        description: "Cast a spell with a casting time of 1 action",
        reference: "PHB, pg. 192.",
        bullets: [
            "You can't cast a spell with you action and a different spell with your bonus action in the same turn, except if the action is used to cast a cantrip.",
            "The target of a spell must be within the spell's range. To target something, you must have a clear path to it, so it can't be behind total cover.",
            "Spells with material components do not consume the material unless explicitly stated. Unless the cost of a material is given, you can assume that the cost is negligible and the material is simply available in a component pouch.",
            "Some spells require you to maintain concentration in order to keep their magic active. If you lose concentration, such a spell ends. You lose concentration on a spell if you cast another spell that requires concentration or when you are incapacitated. Each time you take damage, you must make a Constitution saving throw to maintain your concentration. The DC equals 10 or half the damage you take, whichever number is higher."
        ]
    },
    {
        title: "Dash",
        optional: "Standard rule",
        icon: "sprint",
        subtitle: "Double movement speed",
        description: "Gain extra movement for the current turn",
        reference: "PHB, pg. 192.",
        bullets: [
            "The increase equals your speed, after applying any modifiers."
        ]
    },
    {
        title: "Disengage",
        optional: "Standard rule",
        icon: "journey",
        subtitle: "Prevent opportunity attacks",
        description: "Your movement doesn't provoke opportunity attacks for the rest of the turn",
        reference: "PHB, pg. 192.",
        bullets: [
        ]
    },
    {
        title: "Dodge",
        optional: "Standard rule",
        icon: "aura",
        subtitle: "Increase defenses",
        description: "Focus entirely on avoiding attacks",
        reference: "PHB, pg. 192.",
        bullets: [
            "Until the start of your next turn, any attack roll made against you has disadvantage if you can see the attacker, and you make Dexterity saving throws with advantage.",
            "You lose this benefit if you are <i>incapacitated</i> or if your speed drops to 0."
        ]
    },
    {
        title: "Escape",
        optional: "Standard rule",
        icon: "manacles",
        subtitle: "Escape a grapple",
        description: "Escape a grapple",
        reference: "PHB, pg. 195.",
        bullets: [
            "To escape a grapple, you must succeed on a Strength (Athletics) or Dexterity (Acrobatics) against the grappler's escape DC.",
            "Escaping other conditions that restrain you (such as manacles) may require a Dexterity or Strength check, as specified by the condition."
        ]
    },
    {
        title: "Help",
        optional: "Standard rule",
        icon: "telepathy",
        subtitle: "Grant an ally advantage",
        description: "Grant an ally advantage on an ability check or attack",
        reference: "PHB, pg. 192.",
        bullets: [
            "<b>Assist an Ability Check.<b> Choose one of your skill or tool proficiencies and one ally who is near enough for you to assist verbally or physically when they make an ability check. That ally has Advantage on the next ability check they make with the chosen skill or tool. This benefit expires if the ally doesn’t use it before the start of your next turn. The DM has final say on whether your assistance is possible..",
            "<b>Assist an Attack roll.<b> You momentarily distract an enemy within 5 feet of you, giving Advantage to the next attack roll by one of your allies against that enemy. This benefit expires at the start of your next turn."
        ]
    },
    {
        title: "Use Object",
        optional: "Standard rule",
        icon: "snatch",
        subtitle: "Interact, use special abilities",
        description: "Interact with a second object or use special object abilities",
        reference: "PHB, pg. 193.",
        bullets: [
            "You can interact with one object for free during your turn (such as drawing a weapon or opening a door). If you want to interact with a second object, use this action.",
            "When an object requires your action for its use, you also take this action."
        ]
    },
    {
        title: "Don shield",
        optional: "Standard rule",
        icon: "round-shield",
        subtitle: "Equip or unequip a shield",
        description: "Equip or unequip a shield",
        reference: "PHB, pgs. 144-146.",
        bullets: [
            "A shield always takes an action to equip or unequip.",
            "Armor takes several minutes to equip or unequip."
        ]
    },
    {
        title: "Hide",
        optional: "Standard rule",
        icon: "hood",
        subtitle: "Attempt to hide",
        description: "Attempt to hide",
        reference: "PHB, pg. 192.",
        bullets: [
            "To Hide, you must succeed on a DC 15 Dexterity (Stealth) check.",
            "To Hide, you must be Heavily Obscured or behind Three-Quarters Cover or Total Cover, and you must be out of any enemy’s line of sight; if you can see a creature, you can discern whether it can see you.",
            "On a successful check, you have the Invisible condition. Make note of your check’s total, which is the DC for a creature to find you with a Wisdom (Perception) check.",
            "If you make noise (such as shouting a warning or knocking over a vase), you give away your position.",
            "The condition ends on you immediately after any of the following occurs: you make a sound louder than a whisper, an enemy finds you, you make an attack roll, or you cast a spell with a Verbal component."
        ]
    },
    {
        title: "Search",
        optional: "Standard rule",
        icon: "magnifying-glass",
        subtitle: "Attempt to find something",
        description: "Devote your attention to finding something",
        reference: "PHB, pg. 193.",
        bullets: [
            "When you take the Search action, you make a Wisdom check to discern something that isn’t obvious. The DM might have you make a Wisdom (Perception) check or an Intelligence (Investigation) check."
        ]
    },
    {
        title: "Study",
        optional: "Standard rule",
        icon: "black-book",
        subtitle: "Attempt to recall  something",
        description: "Devote your attention to recalling something",
        reference: "PHB, pg. 193.",
        bullets: [
            "When you take the Study action, you make an Intelligence check to recall information. This is usually a knowledge check."
        ]
    },
    {
        title: "Ready",
        optional: "Standard rule",
        icon: "stopwatch",
        subtitle: "Choose trigger and action",
        description: "Choose a trigger and a response reaction",
        reference: "PHB, pg. 193.",
        bullets: [
            "First, you decide what perceivable circumstance will trigger your reaction.",
            "Then, you choose the action you will take in response to that trigger, or you choose to move up to your speed in response to it.",
            "When the trigger occurs, you can either take your reaction right after the trigger finishes or ignore the trigger.",
            "When you ready a spell, you cast it as normal but hold its energy, which you release with your reaction when the trigger occurs. To be readied, a spell must have a casting time of 1 action, and holding onto the spell's magic requires concentration"
        ]
    },
    {
        title: "Use class feature",
        optional: "Standard rule",
        icon: "embrassed-energy",
        subtitle: "Some features use actions",
        description: "Use a racial or class feature that uses an action",
        reference: "See class page for more information.",
        bullets: [

        ]
    },
    {
        title: "Stabilize a creature",
        optional: "Standard rule",
        icon: "first-aid",
        subtitle: "Aid a dying creature",
        description: "Stop a dying creature from needing to make death saving throws",
        reference: "PHB, pg. 197.",
        bullets: [
            "Make a Wisdom (Medicine) check with DC 10",
            "On a success, the creature is stable and no longer needs to make death saving throws",
            "A stable creature regains 1 hit point after 1d4 hours"
        ]
    },
    {
        title: "Improvise",
        optional: "Standard rule",
        icon: "juggler",
        subtitle: "Any action not on this list",
        description: "Perform any action you can imagine",
        reference: "PHB, pg. 193.",
        bullets: [
            "When you describe an action not detailed elsewhere in the rules, the DM tells you whether that action is possible and what kind of roll you need to make, if any, to determine success or failure."
        ]
    },
    {
        title: "Disarm*",
        optional: "Optional rule",
        icon: "sword-break",
        subtitle: "Knock item out of enemy's grasp",
        description: "A creature can use a weapon attack to knock a weapon or another item from a target's grasp.",
        reference: "DMG, page 271",
        bullets: [
            "(Optional Rule):",
            "The attacker makes an attack roll contested by the target's Strength (Athletics) check or Dexterity (Acrobatics) check.",
            "If the attacker wins the contest, the attack causes no damage or other ill effect, but the defender drops the item.",
            "The attacker has disadvantage on its attack roll if the target is holding the item with two or more hands.",
            "The target has advantage on its ability check if it is larger than the attacking creature, or disadvantage if it is smaller."

        ]
    },
    {
        title: "Overrun*",
        optional: "Optional rule",
        icon: "shield-bash",
        subtitle: "Run through a hostile space",
        description: "When a creature tries to move through a hostile creature's space, the mover can try to force its way through by overrunning the hostile creature.",
        reference: "DMG, page 272",
        bullets: [
            "(Optional Rule):",
            "As an action, the mover makes a Strength (Athletics) check contested by the hostile creature's Strength (Athletics) check.",
            "The creature attempting the overrun has advantage on this check if it is larger than the hostile creature, or disadvantage if it is smaller.",
            "If the mover wins the contest, it can move through the hostile creature's space once this turn."
        ]
    },
    {
        title: "Tumble*",
        optional: "Optional rule",
        icon: "tumble",
        subtitle: "Tumble through a hostile space",
        description: "A creature can try to tumble through a hostile creature's space, ducking and weaving past the opponent.",
        reference: "DMG, page 272",
        bullets: [
            "(Optional Rule):",
            "As an action, the tumbler makes a Dexterity (Acrobatics) check contested by the hostile creature's Dexterity (Acrobatics) check.",
            "If the tumbler wins the contest, it can move through the hostile creature's space once this turn."
        ]
    },
    {
        title: "Mark*",
        optional: "Optional rule",
        icon: "cross-mark",
        subtitle: "Give Advantage on Opportunity Attacks",
        description: "This option makes it easier for melee combatants to harry each other with opportunity attacks.",
        reference: "DMG, page 271",
        bullets: [
            "(Optional Rule):",
            "When a creature makes a melee attack, it can also mark its target.",
            "Until the end of the attacker's next turn, any opportunity attack it makes against the marked target has advantage.",
            "The opportunity attack doesn't expend the attacker's reaction",
            "The attacker can't make the attack if anything, such as the incapacitated condition or the shocking grasp spell, is preventing it from taking reactions.",
            "The attacker is limited to one opportunity attack per turn.",
        ]
    },
    {
        title: "Climb onto a bigger creature*",
        optional: "Optional rule",
        icon: "mountain-climbing",
        subtitle: "Climb a bigger creature",
        description: "If one creature wants to jump onto another creature, it can do so by grappling. A suitably large opponent can be treated as terrain for the purpose of jumping onto its back or clinging to a limb.",
        reference: "DMG, page 271",
        bullets: [
            "(Optional Rule):",
            "After making any ability checks necessary to get into position and onto the larger creature, the smaller creature uses its action to make a Strength (Athletics) or Dexterity (Acrobatics) check contested by the target's Dexterity (Acrobatics) check.",
            "If it wins the contest, the smaller creature successfully moves into the target creature's space.",
            "The smaller creature moves with the target and has advantage on attack rolls against it.",
        ]
    }
]
