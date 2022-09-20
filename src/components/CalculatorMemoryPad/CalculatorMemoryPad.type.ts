import { MEMORY_PAD_SIGN } from 'lib/constants';

export interface CalculatorMemoryPadProps {
	sign: typeof MEMORY_PAD_SIGN[keyof typeof MEMORY_PAD_SIGN];
}
