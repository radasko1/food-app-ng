import { of } from 'rxjs';

export function CacheData(cacheKey: string) {
	return function (
		target: any,
		propertyKey: string,
		descriptor: PropertyDescriptor
	) {
		const originalMethod = descriptor.value;
		const cache = new Map<string, unknown>();

		descriptor.value = function (...args: any[]) {
			const cacheKeyWithArgs = `${cacheKey}_${args.join('_')}`;

			if (cache.has(cacheKeyWithArgs)) {
				return of(cache.get(cacheKeyWithArgs));
			}

			const result = originalMethod.apply(this, args);

			result.subscribe((data: unknown) => {
				cache.set(cacheKeyWithArgs, data);
			});

			return result;
		};

		return descriptor;
	};
}
