// @ = nouns
// % verbs
// # adjes
var paragraphs = [
    {
    	// 0
        "text": `You wake up from a nap under a tree. The sky is clear (a little cloudy with a black cloud afar off) but where you are, it is clear. You scan your perimeter before you gather your things. As you get up and % the tree, you see a @ walk over. Do you follow it?`,
        "left": `Let's go!`,
        "right" : `Nah.`,
        "nouns": 1,
        "verbs": 1,
        "adjes": 0
    },
    {
    	// 1
    	"text": `You realize that @ stole your attractive neighbor's @. You think of that attractive neighbor, but you also remember that you are lost! You unsheathe your blade but hesitate because you may have the ability to talk to @ (?) and might also gather information on where the heck you are. But your heart beats with justice! You can't give them the chance! What do you do?`,
    	"left": `Unsheathe thy blade!`,
    	"right": `I want to know more.`,
    	"nouns": 3,
    	"verbs": 0,
    	"adjes": 0
    },
    {
    	// 2
    	"text": `You stand up and move along your merry way. You take in the scenery as # @. During your travels, a large @ blocks your path, do you % it?`,
    	"left": `Just, do it.`,
    	"right": `Just, NOT do it.`,
    	"nouns": 2,
    	"verbs": 1,
    	"adjes": 1
    },
    {
    	// 3
    	"text": `You clench your behind, grab your blade, and leap towards the... @? Gah! That beast! It shape-shifted! Or did it not? No matter! Good thing you were on the track team in high school! Your boots dig deeper into the dirt as you're ready to spring into action. Each step springs and propels you forward as the dust gets left behind your trail. You totally have super cool sword throwing skills, your @ told you that you were very good at it! Do you throw the sword?`,
    	"left": `Throw`,
    	"right": `Don't throw`,
    	"nouns": 2,
    	"verbs": 0,
    	"adjes": 0
    },

    {
    	// 4
    	"text": `As you approach the @ ...wait what? Blasted thing, it Shape-shifts! How do I approach it now? I can't just # on over and start a conversation...but I'll do so anyway. "Hello, kind Shapesh... I mean @'. It cannot reply for it does not speak English, or perhaps in its current form, it does not have a mouth. It keeps walking. Perhaps I can make it a mouth...perhaps I should keep following it.`,
    	"left": `Make a mouth`,
    	"right": `Follow it`,
    	"nouns": 2,
    	"verbs": 0,
    	"adjes": 1
    },
    {
    	// 5
    	"text": 'You choose to do it. A # @ sees you doing it. The reputation you have built up over years is about to crumble. It shakes its head in shame, you can see it mutter the words "# weirdo". Strength fills your # heart with @. ',
    	"left": `Eliminate it`,
    	"right": `Run and Hide for life`,
    	"nouns": 2,
    	"verbs": 0,
    	"adjes": 3
    },
    {
    	// 6
    	"text": `the nearby @ appreciates your respectfulness, because of that it picks you up and %s you to a pretty @. It sways your heart.`,
    	"left": `Follow it`,
    	"right": `Ignore it`,
    	"nouns": 2,
    	"verbs": 1,
    	"adjes": 0
    },
    {
    	// 7
    	"text": `You aim as best as you can. You take aim steady, and launch your sword as it spins towards it! Your sword has left your eye as you keep it on the # shapeshifting @. You hear a clang of the sword yet it did not hit your target! You look over to see that your sword hit a surprisingly hard @. Well, where did your # sword go? It flies in the air as the hilt hit your head! Thus, on the ground, lying asleep yet again`,
    	"left": ` `,
    	"right": ` `,
    	"nouns": 2,
    	"verbs": 2,
    	"adjes": 0
    },
    {
    	// 8
    	"text": `You realize you are a pacifist and don’t actually part with your blade. Why would you have a blade to begin with anyway? You stop chasing, plant your throne on the ground and walk home. You ask a talking @ that was conveniently next to you when you stopped. You carry on your merry way as you % and % anything you find on your way.`,
    	"left": ` `,
    	"right": ` `,
    	"nouns": 1,
    	"verbs": 2,
    	"adjes": 0
    },
    {
    	// 9
    	"text": `You take sword and gently slash a mouth, or maybe not cause it already has one. What is it this time? A @? No matter. It moves into a # ruined house and % it. I walked, here it goes insane. It exclaims, [Name], prepare to witness what I can do. It rises up as it % and %. The # @ comes up, then a @ as it % and % over and under. I slowly walk out the broken structure, that neighbor’s whatever is a shapeshifter too, its a @ now. Maaan I think i need to go back to the tree.`,
    	"left": ` `,
    	"right": ` `,
    	"nouns": 4,
    	"verbs": 5,
    	"adjes": 2
    },
    {
    	// 10
    	"text": `You follow it again, and realize its not worth your time. What is it now? A @? You dont care, Its time to put down the controller <name>, and stop playing. Wake up, this is a video game, you’ve been putting off real life. You have to let it go, the @ happened 10 years ago. We were drinking that night, it's not your fault.`,
    	"left": ` `,
    	"right": ` `,
    	"nouns": 2,
    	"verbs": 0,
    	"adjes": 0
    },
    {
    	// 11
    	"text": `Your blade % it. Successfully removing all evidences… or so you think. Around you, you see dozens @. Every single one of them looks at you with disgust, you run and hide into the forest in shame.`,
    	"left": ` `,
    	"right": ` `,
    	"nouns": 1,
    	"verbs": 1,
    	"adjes": 0
    },
    {
    	// 12
    	"text": `With your tail behind your leg, you run away into the forest. The blade in your hand speaks but its muffled by your heavy breathing. Tears form in your eye from the embarrassment, blocking your vision. Unknowingly you jump of a cliff into the sea. Sadly, your blade tried to tell you of said cliff.`,
    	"left": ` `,
    	"right": ` `,
    	"nouns": 0,
    	"verbs": 0,
    	"adjes": 0
    },
    {
    	// 13
    	"text": `You follow the beautiful thing. You say “ You are so # and #, nothing can best you”. Swayed by your words. You live happily ever after.`,
    	"left": ` `,
    	"right": ` `,
    	"nouns": 0,
    	"verbs": 0,
    	"adjes": 2
    },
    {
    	// 14
    	"text": ` A witch appear in a # boom. “HA you are the most #, #  person I ever met. Now you are curse with forever loneliness” The witch disappears, depression settles in.you feel like a big pile of # @. Even your swords gets up and leaves you. With no feeling to adventure, you go back home.`,
    	"left": ` `,
    	"right": ` `,
    	"nouns": 1,
    	"verbs": 0,
    	"adjes": 4
    }
]
