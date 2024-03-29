import { atom } from 'recoil';
import { IScrollHeight, IVisible, IWallet } from './types';

export const navAtom = atom<string | null>({
    key: 'navState',
    default: null,
});

export const scrollHeightAtom = atom<IScrollHeight>({
    key: 'scrollHeight',
    default: {
        scrollHeight: 0,
        currentY: 0,
        progressY: 0,
        direction: null,
    },
});

export const walletAtom = atom<IWallet | null>({
    key: 'wallet',
    default: {
        account: '',
        balance: '',
    },
});

export const windowInfoAtom = atom({
    key: 'windowInfo',
    default: {
        width: window.innerWidth,
        zoomLevel: window.devicePixelRatio,
    },
});

export const visibleAtom = atom<IVisible>({
    key: 'visibleAtom',
    default: {
        overlay: false,
        mobileMenu: false,
    },
});

export const isDarkAtom = atom({
    key: 'isDark',
    default: window.localStorage.getItem('mode') === 'dark' ? true : false,
});

export const toastAtom = atom({
    key: 'toast',
    default: {
        msg: '',
        visible: false,
    },
});

export const introLoadingAtom = atom({
    key: 'introLoading',
    default: false,
});
