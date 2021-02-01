import { Colors } from '../enums/colors';
import { Sizes } from '../enums/sizes';

export interface Product {
  name: string;
  size: Sizes;
  color?: Colors;
  amount?: number;
}
