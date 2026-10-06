export interface ITimerangeOption {
  /**
   * A name to use for the enum / option.
   *
   * Example: \
   * '7 days ago'
   */
  label: string;
  /**
   * A value to use for the enum / option.
   *
   * Example: \
   * 'SEVEN_DAYS'
   */
  value: string;

  icon?: string;
  type: number;
}
