import HomeTimeView from "@/views/Home/HomeTimeView.vue";
import HomeShowView from "@/views/Home/HomeShowView.vue";
import HomeIndexView from "@/views/Home/HomeIndexView.vue";

import AccountIndexView from "@/views/Account/AccountIndexView.vue";
import AccountAuthorizeView from "@/views/Account/AccountAuthorizeView.vue";
import AccountKuaishouView from "@/views/Account/AccountKuaishouView.vue";
import AccountHugeView from "@/views/Account/AccountHugeView.vue";

import HugeIndexView from "@/views/HugeNew/HugeIndexView.vue";
import HugeDataAccountView from "@/views/HugeNew/HugeDataAccountView.vue";
import HugeDataAdvertiseView from "@/views/HugeNew/HugeDataAdvertiseView.vue";
import HugeLandingPageView from "@/views/HugeNew/HugeLandingPageView.vue";
import HugeDataProductView from "@/views/HugeNew/HugeDataProductView.vue";
import HugeNoticeView from "@/views/HugeNew/HugeNoticeView.vue";
import HugeOrderView from "@/views/HugeNew/HugeOrderView.vue";

import KsIndexView from "@/views/KuaishouEngine/KsIndexView.vue";
import KsAccountDataView from "@/views/KuaishouEngine/KsAccountDataView.vue";
import KsPlanDataView from "@/views/KuaishouEngine/KsPlanDataView.vue";
import KsOrderView from "@/views/KuaishouEngine/KsOrderView.vue";

import CMIndexView from "@/views/CommentManage/CMIndexView.vue";
import CmReplyKeywordView from "@/views/CommentManage/CmReplyKeywordView.vue";
import CmBlockWordView from "@/views/CommentManage/CmBlockWordView.vue";
import CmReplyRecordView from "@/views/CommentManage/CmReplyRecordView.vue";
import CmAdvertiseReplayView from "@/views/CommentManage/CmAdvertiseReplayView.vue";

import SonAccountIndexView from "@/views/SonAccount/SonAccountIndexView.vue";
import SonTeamManageView from "@/views/SonAccount/SonTeamManageView.vue";
import SonTeamDataView from "@/views/SonAccount/SonTeamDataView.vue";

export default [
  // 首页
  {
    path: "homepage",
    name: "homepage",
    label: "主页",
    icon: "House",
    component: HomeIndexView,
    children: [
      {
        path: "time",
        name: "time",
        label: "时间线",
        component: HomeTimeView,
      },
      {
        path: "show",
        name: "show",
        label: "大屏展示",
        component: HomeShowView,
      },
    ],
  },
  // 账号管理
  {
    path: "account",
    name: "account",
    label: "账号管理",
    icon: "Memo",
    component: AccountIndexView,
    children: [
      {
        path: "authorize",
        name: "authorize",
        label: "授权",
        component: AccountAuthorizeView,
      },
      {
        path: "atKuaishou",
        name: "atKuaishou",
        label: "快手磁力账号",
        component: AccountKuaishouView,
      },
      {
        path: "atHuge",
        name: "atHuge",
        label: "巨量广告主",
        component: AccountHugeView,
      },
    ],
  },
  // 巨量
  {
    path: "huge",
    name: "huge",
    label: "巨量【新】",
    icon: "DataAnalysis",
    component: HugeIndexView,
    children: [
      {
        path: "hgDataAccount",
        name: "hgdataAccount",
        label: "账号数据",
        component: HugeDataAccountView,
      },
      {
        path: "hgDataAd",
        name: "hgDataAd",
        label: "广告数据",
        component: HugeDataAdvertiseView,
      },
      {
        path: "hgLandingPage",
        name: "hgLandingPage",
        label: "落地页",
        component: HugeLandingPageView,
      },
      {
        path: "hgDataProduct",
        name: "hgDataProduct",
        label: "商品库",
        component: HugeDataProductView,
      },
      {
        path: "hgOrder",
        name: "hgOrder",
        label: "订单",
        component: HugeOrderView,
      },
      {
        path: "hgNotice",
        name: "hgNotice",
        label: "通知",
        component: HugeNoticeView,
      },
    ],
  },
  // 快手
  {
    path: "ks",
    name: "ks",
    label: "快手磁力引擎",
    icon: "OfficeBuilding",
    component: KsIndexView,
    children: [
      {
        path: "ksDataAccount",
        name: "ksDataAccount",
        label: "账号数据[快手]",
        component: KsAccountDataView,
      },
      {
        path: "ksDataPlan",
        name: "ksDataPlan",
        label: "计划数据[快手]",
        component: KsPlanDataView,
      },
      {
        path: "ksOrder",
        name: "ksOrder",
        label: "订单[快手]",
        component: KsOrderView,
      },
    ],
  },
  // 评论
  {
    path: "comment",
    name: "comment",
    label: "评论管理",
    icon: "Help",
    component: CMIndexView,
    children: [
      {
        path: "cmReplayKey",
        name: "cmReplayKey",
        label: "自动回复关键字",
        component: CmReplyKeywordView,
      },
      {
        path: "cmBlockKey",
        name: "cmBlockKey",
        label: "屏蔽词",
        component: CmBlockWordView,
      },
      {
        path: "cmReplayRecord",
        name: "cmReplayRecord",
        label: "回复记录",
        component: CmReplyRecordView,
      },
      {
        path: "cmAdReplay",
        name: "cmAdReplay",
        label: "广告回复内容",
        component: CmAdvertiseReplayView,
      },
    ],
  },
  //子账号
  {
    path: "sonAccount",
    name: "sonAccount",
    label: "子账户",
    icon: "Money",
    component: SonAccountIndexView,
    children: [
      {
        path: "sonTeamManage",
        name: "sonTeamManage",
        label: "成员管理",
        component: SonTeamManageView,
      },
      {
        path: "sonTeamData",
        name: "sonTeamData",
        label: "成员数据",
        component: SonTeamDataView,
      },
    ],
  },
];
