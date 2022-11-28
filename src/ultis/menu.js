import icons from "./icons"

const {MdOutlineLibraryMusic, TbChartArcs, HiOutlineChartPie, MdOutlineFeed } = icons
export const sidebarMenu = [
    {
        path: 'mymusic',
        text: 'Ca Nhan',
        icons: <MdOutlineLibraryMusic size={24} />
    },
    {
        path: '',
        text: 'Kham Pha',
        end: true,
        icons: <TbChartArcs size={24} />
    },
    {
        path: 'zing-chart',
        text: '#zing-chart',
        icons: <HiOutlineChartPie size={24} />
    },
    {
        path: 'follow',
        text: 'Theo Doi',
        icons: <MdOutlineFeed size={24} />
    }
]