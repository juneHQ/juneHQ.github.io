export type IconType = 'icon' | 'newIcon' | 'logo' | 'illustration' | null;

export interface IIcon {
  iconType: IconType;
  name: string;
  [key: string]: any;
}
