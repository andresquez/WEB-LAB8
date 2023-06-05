import Floor from './Floor';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
export default {
    title: 'Maze/Floor',
    component: Floor,
    tags: ['autodocs'],
}

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
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

export const Finish = {
    args: {
        type: 'goal',
    },
}