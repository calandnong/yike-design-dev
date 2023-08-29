export interface OptionsProps {
  /**
   * 选项的标签，若不设置则默认与value相同
   */
  label?: string | number;
  /**
   * 选项的值
   */
  value?: string | number | boolean | object;
  /**
   * 是否禁用该选项
   */
  disabled?: boolean;
}
