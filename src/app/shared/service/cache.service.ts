import moment from 'moment';

interface Cache<T> {
	[key: string]: {
		expiration: number;
		value: T;
	};
}

export class CacheService<T> {
	private readonly cacheTime = 5;
	private cacheData: Cache<T> = {};

	/**
	 * Get cache value if exists.
	 * @param key
	 * @returns Cached value if exist or 'undefined'.
	 */
	public getValue(key: string): T | undefined {
		// key not exist
		if (!key) {
			return undefined;
		}

    if (!this.cacheData[key]) {
      return undefined;
    }

		// cache is expired
		if (moment().unix() > this.cacheData[key].expiration) {
			delete this.cacheData[key];
			return undefined; // null can be value
		}

		return this.cacheData[key].value;
	}

	/**
	 * Insert data in cache.
	 * @param key
	 * @param value
	 * @returns Whether key or value is not defined returns 'undefined'.
	 */
	public setValue(key: string, value: T): void | undefined {
		if (!key) {
			return undefined;
		}

		this.cacheData[key] = {
			value: value,
			expiration: moment().add(this.cacheTime, 'minutes').unix(),
		};
	}

	/**
	 * Finds out whether exist cache key.
	 * @param key Cache key
	 * @return Whether cache key exist.
	 */
	public hasKey(key: string): boolean {
		if (!key) {
			return false;
		}

		return !!this.getValue(key);
	}

  /**
   * Clear cache data.
   */
  clear() : void {
    this.cacheData = {};
  }
}
