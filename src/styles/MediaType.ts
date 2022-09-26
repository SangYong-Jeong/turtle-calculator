export enum DeviceLabel {
	phones,
	portraitTablets,
	landscapeTablets,
	laptops,
	desktops,
}

export const DeviceSize = {
	PHONE: '600px',
	PORTRAIT_TABLETS: '600px',
	LANDSCAPE_TABLETS: '768px',
	LAPTOPS: '992px',
	DESKTOP: '1200px',
} as const;

export interface DeviceConditionAndSize {
	condition: 'min-width' | 'max-width';
	size: typeof DeviceSize[keyof typeof DeviceSize];
}

interface MedaiDevicesSize {
	phones: DeviceConditionAndSize;
	portraitTablets: DeviceConditionAndSize;
	landscapeTablets: DeviceConditionAndSize;
	laptops: DeviceConditionAndSize;
	desktops: DeviceConditionAndSize;
}

export const deviceSizes: MedaiDevicesSize = {
	phones: {
		condition: 'min-width',
		size: '600px',
	},
	portraitTablets: {
		condition: 'max-width',
		size: '600px',
	},
	landscapeTablets: {
		condition: 'max-width',
		size: '768px',
	},
	laptops: {
		condition: 'max-width',
		size: '992px',
	},
	desktops: {
		condition: 'max-width',
		size: '1200px',
	},
};
