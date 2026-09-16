/**
 * Canonical Flicker spinner data shape.
 *
 * A spinner is an ordered list of frames. Each frame is a FLAT boolean array:
 *   - 7x7 spinners: 49 booleans, indexed row * 7 + col
 *   - the inner 5x5 is DERIVED from the 7x7 (see toSmallFrame), never stored
 *
 * This is the one shape the whole system agrees on. Do not introduce a
 * rows x cols (boolean[][][]) variant.
 */
export type FlickerFrame = boolean[];
export type FlickerGrids = FlickerFrame[];
