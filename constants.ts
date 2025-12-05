import { 
  Lock, 
  Lightbulb, 
  Tv, 
  Blinds, 
  UserRound, 
  Droplets, 
  Zap, 
  Thermometer, 
  CloudRain, 
  ShieldAlert 
} from 'lucide-react';
import { PricingItem, FeatureItem } from './types';

export const COMPANY_NAME = "丸石智能家居";
export const TAGLINE = "科技融入生活，打造極致舒適";

export const PRICING_LIST: PricingItem[] = [
  { id: '1', name: '智能主控台', price: '$700 /套', description: '智能家居的大腦', icon: Zap },
  { id: '2', name: '智能門鎖', price: '$3000 /套', description: '支援遙距功能、指紋密碼', icon: Lock },
  { id: '3', name: '智能燈具開關', price: '$400 /支燈', description: '不連燈具，支援遙距及聯動', icon: Lightbulb },
  { id: '4', name: '冷氣智能開關', price: '$500 /套', description: '溫控自動化必備', icon: Thermometer },
  { id: '5', name: '窗戶開關連雨水感應', price: '$2000 /套', description: '自動防雨、通風', icon: CloudRain },
  { id: '6', name: '智能窗簾開關', price: '$600 /套', description: '定時開關、語音控制', icon: Blinds },
  { id: '7', name: '人體存在感應', price: '$300 /套', description: '精準判斷人在/人走', icon: UserRound },
  { id: '8', name: '煙霧感應器', price: '$300 /套', description: '火災預警', icon: ShieldAlert },
  { id: '9', name: '水浸感應+出水閥', price: '$1200 /套', description: '漏水自動截斷水源', icon: Droplets },
  { id: '10', name: '其他電器聯動', price: '$300-800 /套', description: '電視、音響、浴室寶等', icon: Tv },
];

export const AUTOMATION_FEATURES: FeatureItem[] = [
  {
    title: "照明系統自動化",
    description: "智能燈光隨心而動，營造完美氛圍。",
    details: [
      "遙距控制開關，隨時隨地管理家中燈光",
      "回家/出門模式：一鍵全開或全關",
      "人體感應：人在燈常亮，人走自動關燈，節能又方便"
    ],
    icon: Lightbulb
  },
  {
    title: "環境溫控管理",
    description: "利用雷達與傳感器，實現恆溫舒適。",
    details: [
      "感應是否有人，自動聯動冷氣、風扇及抽氣扇",
      "監察用電量，有效節省家庭開支",
      "實時監控電器狀態，確保運作正常"
    ],
    icon: Thermometer
  },
  {
    title: "窗簾與窗戶聯動",
    description: "自然光線與通風的智能管家。",
    details: [
      "設定時間自動開關窗簾，早晨喚醒，夜晚隱私",
      "配合雨水感應系統，下雨自動關窗",
      "提升生活幸福感，告別手動煩惱"
    ],
    icon: Blinds
  }
];

export const SAFETY_FEATURES: FeatureItem[] = [
  {
    title: "環境監測與反應",
    description: "全天候監控家中環境數據。",
    details: [
      "溫度及濕度探測：自動判斷是否開啟除濕或冷氣",
      "空氣監察：數值異常時自動啟動抽氣系統",
      "雨水傳感器：檢測降雨，自動關閉窗戶，解決打風撇雨問題"
    ],
    icon: CloudRain
  },
  {
    title: "災害預警與防護",
    description: "主動式防護，保障家人財產安全。",
    details: [
      "煙霧感應器：聯動警報系統，即時通知",
      "水浸傳感器：監測漏水，自動聯動關閉出水閥",
      "有效預防水浸及火災風險，作出即時反應"
    ],
    icon: ShieldAlert
  }
];
