// es6 polyfill
import 'core-js/fn/array/find-index';

import iActionsheet from './components/actionsheet';
import iAddress from './components/address';
import iAgree from './components/agree';
import iAlert from './components/alert';
import iBadge from './components/badge';
import iBlur from './components/blur';
import iButton from './components/button';
import iButtonTab from './components/button-tab';
import iCalendar from './components/calendar';
import iCard from './components/card';
import iCell from './components/cell';
import iCellBox from './components/cell-box';
import iCellFormPreview from './components/cell-form-preview';
import iChecker from './components/checker';
import iChecklist from './components/checklist';
import iCircle from './components/circle';
import iClocker from './components/clocker';
import iColorPicker from './components/color-picker';
import iConfirm from './components/confirm';
import iCountdown from './components/countdown';
import iCountup from './components/countup';
import iDatetime from './components/datetime';
import iDatetimeRange from './components/datetime-range';
import iDialog from './components/dialog';
import iDivider from './components/divider';
import iEmotion from './components/emotion';
import iFlexbox from './components/flexbox';
import iFormPreview from './components/form-preview';
import iGrid from './components/grid';
import iGroup from './components/group';
import iGroupTitle from './components/group-title';
import iHeader from './components/header';
import iHr from './components/hr';
import { iIcon, fIcon } from './components/icon';
import iImg from './components/img';
import iInlineCalendar from './components/inline-calendar';
import iInlineDesc from './components/inline-desc';
import iInlineNumber from './components/inline-number';
import iInput from './components/input';
import iLoading from './components/loading';
import iLoadMore from './components/load-more';
import iMarquee from './components/marquee';
import iMasker from './components/masker';
import iMsg from './components/msg';
import iNumber from './components/number';
import iNumberRoller from './components/number-roller';
import iPanel from './components/panel';
import iPicker from './components/picker';
import iPopover from './components/popover';
import iPopup from './components/popup';
import iPopupPicker from './components/popup-picker';
import iPreviewer from './components/previewer';
import iProgress from './components/progress';
import iQrcode from './components/qrcode';
import iRadio from './components/radio';
import iRange from './components/range';
import iRater from './components/rater';
import iScroller from './components/scroller';
import iSearch from './components/search';
import iSelector from './components/selector';
import iSpinner from './components/spinner';
import iStep from './components/step';
import iSticky from './components/sticky';
import iSwipeout from './components/swipeout';
import iSwiper from './components/swiper';
import iSwitch from './components/switch';
import iTab from './components/tab';
import iTabbar from './components/tabbar';
import iTextarea from './components/textarea';
import iTimeline from './components/timeline';
import iTip from './components/tip';
import iToast from './components/toast';
import iVideo from './components/video';
import iViewBox from './components/viewbox';
import iWepayInput from './components/wepay-input';

import TransferDom from './directives/transfer-dom'

import locale from './locale';

const fview = {
	iActionsheet,
    iAddress,
    iAgree,
    iAlert,
    iBadge,
    iBlur,
    iButton,
    iButtonTab, iButtonTabItem: iButtonTab.Item,
    iCalendar,
    iCard,
    iCell,
    iCellBox,
    iCellFormPreview,
    iChecker, iCheckerItem: iChecker.Item,
    iChecklist,
    iCircle,
    iClocker,
    iColorPicker,
    iConfirm,
    iCountdown,
    iCountup,
    iDatetime,
    iDatetimeRange,
    iDialog,
    iDivider,
    iEmotion,
    iFlexbox, iFlexboxItem: iFlexbox.Item,
    iFormPreview,
    iGrid, iGridItem: iGrid.Item,
    iGroup,
    iGroupTitle,
    iHeader,
    iHr,
    // icon-start
    iIcon,
    fIcon,
    // icon-end
    iImg,
    iInlineCalendar,
    iInlineDesc,
    iInlineNumber,
    iInput,
    iLoading,
    iLoadMore,
    iMarquee, iMarqueeItem: iMarquee.Item,
    iMasker,
    iMsg,
    iNumber,
    iNumberRoller,
    iPanel,
    iPicker,
    iPopup,
    iPopupPicker,
    iPopover,
    iPreviewer,
    iProgress,
    iQrcode,
    iRadio,
    iRange,
    iRater,
    iScroller,
    iSearch,
    iSelector,
    iSpinner,
    iStep, iStepItem: iStep.Item,
    iSticky,
    iSwipeout, iSwipeoutItem: iSwipeout.Item, iSwipeoutButton: iSwipeout.Button,
    iSwiper, iSwiperItem: iSwiper.Item,
    iSwitch,
    iTab, iTabItem: iTab.Item,
    iTabbar, iTabbarItem: iTabbar.Item,
    iTextarea,
    iTimeline, iTimelineItem: iTimeline.Item,
    iTip,
    iToast,
    iVideo,
    iViewBox,
    iWepayInput
};

const install = function (Vue, opts = {}) {
    locale.use(opts.locale);
    locale.i18n(opts.i18n);

    Object.keys(fview).forEach((key) => {
        Vue.component(key, fview[key]);
    });

    Vue.prototype.$Alert = iAlert;
    Vue.prototype.$Confirm = iConfirm;
    Vue.prototype.$Loading = iLoading;
    Vue.prototype.$Toast = iToast;

    Vue.directive('transfer-dom', TransferDom);
};

// auto install
if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
}

module.exports = Object.assign(fview, {install});   // eslint-disable-line no-undef
