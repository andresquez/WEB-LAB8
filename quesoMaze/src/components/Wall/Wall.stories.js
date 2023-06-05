import Wall from "./Wall";

export default {
    title: "Maze/Wall",
    component: Wall,
    tags: ["autodocs"],
    argTypes: {},
}

export const Pacman = {
    args: {
        type: 'pacman',
    },
}

export const Dirt = {
    args: {
        type: 'dirt',
    },
}
