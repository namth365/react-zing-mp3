import icons from "./icons"

const {MdOutlineLibraryMusic, TbChartArcs, MdMultilineChart, MdWifiTethering, MdOutlineFeed } = icons
export const sidebarMenu = [
    {
        path: 'mymusic',
        text: 'Cá Nhân',
        icons: <MdOutlineLibraryMusic size={24} />
    },
    {
        path: '',
        text: 'Khám Phá',
        end: true,
        icons: <TbChartArcs size={24} />
    },
    {
        path: 'zing-chart',
        text: '#zing-chart',
        icons: <MdMultilineChart size={24} />
    },
    {
        path: 'radio',
        text: 'Radio',
        icons: <MdWifiTethering size={24} />
    },
    {
        path: 'the-loai-nghe-si',
        text: 'Theo Dõi',
        icons: <MdOutlineFeed size={24} />
    }
]