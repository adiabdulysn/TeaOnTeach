type LimitConfig = {
  windowMs: number;
  max: number;
};

type Bucket = {
  resetAt: number;
  count: number;
};

const buckets = new Map<string, Bucket>();

export async function rateLimitOrThrow(key: string, config: LimitConfig) {
  const now = Date.now();
  const bucket = buckets.get(key);

  if (!bucket || bucket.resetAt <= now) {
    buckets.set(key, { resetAt: now + config.windowMs, count: 1 });
    return;
  }

  bucket.count += 1;
  if (bucket.count > config.max) {
    throw new Error('Too many attempts. Please try again later.');
  }
}

