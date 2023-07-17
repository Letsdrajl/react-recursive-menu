import {MenuItem} from "@/types/MenuTypes";

export const sampleMenu: MenuItem<any>[] = [
    {
        id: 1,
        name: "Ich bin das erste Item",
        child: null
    },
    {
        id: 2,
        name: "Ich gehe tiefer!",
        child: getPlayers()
    }
]

function getPlayers() {
    return [
        {
            id: 1,
            name: "Tobias Coleman",
            child: null
        },
        {
            id: 2,
            name: "Panda",
            child: () => {console.log("Ich mach was!")}
        },
        {
            id: 2,
            name: "Ich bring dich zurück!",
            child: 'back'
        }
    ]
}
