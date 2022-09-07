export const maekStartNumberAndEndNumber = (endNumber: number): { startNumber: number; endNumber: number } => ({
	startNumber: endNumber - 2,
	endNumber,
});

export default {
	maekStartNumberAndEndNumber,
};
