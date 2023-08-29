import Select from './src/select.vue';
import Options from './src/options.vue';
import { withInstall } from '../utils/index';
export const YkSelect = withInstall(Select);
export const YkOptions = withInstall(Options);
export const SelectComponent = {
  YkSelect,
  YkOptions,
};

export default SelectComponent;
export * from './src/index';
